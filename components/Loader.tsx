'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const WORDS = ['Kavya', 'Ray'];
const SWAP_MS = 1100;
const MIN_VISIBLE_MS = 2800;
const EXIT_MS = 800;

// Fired when the loader starts to fade, so the page can begin its intro
export const LOADER_DONE_EVENT = 'kr:loader-done';

export function Loader() {
  const pathname = usePathname();
  // Case study pages open straight in, no intro loader
  const [visible, setVisible] = useState(() => !pathname?.startsWith('/case-study'));
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    if (!visible) {
      document.documentElement.dataset.loaderDone = '1';
      return;
    }
    document.body.style.overflow = 'hidden';

    // Play through the words once and hold on the last one
    const swap = setInterval(() => {
      setSwapped(true);
      setIndex((i) => {
        if (i + 1 >= WORDS.length - 1) clearInterval(swap);
        return Math.min(i + 1, WORDS.length - 1);
      });
    }, SWAP_MS);

    const start = performance.now();
    let exitTimer: ReturnType<typeof setTimeout>;
    let doneTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      exitTimer = setTimeout(() => {
        setLeaving(true);
        document.documentElement.dataset.loaderDone = '1';
        window.dispatchEvent(new Event(LOADER_DONE_EVENT));
        doneTimer = setTimeout(() => {
          clearInterval(swap);
          setVisible(false);
          document.body.style.overflow = '';
        }, EXIT_MS);
      }, wait);
    };

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });

    return () => {
      clearInterval(swap);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('load', finish);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`kr-loader ${leaving ? 'kr-loader--leaving' : ''}`}
      role="status"
      aria-label="Loading Kavya Ray's portfolio"
    >
      {/* Logo sits exactly where the nav logo lives, so the hand-off is seamless */}
      <Image
        src="/kavlogo.png"
        alt=""
        width={44}
        height={44}
        priority
        className="kr-loader__logo fixed top-4 sm:top-6 left-4 sm:left-6 w-9 h-9 sm:w-11 sm:h-11 object-contain"
      />

      <div className="kr-loader__words" aria-hidden="true">
        {WORDS.map((word, i) => {
          const state = i === index ? (swapped || i === 0 ? 'enter' : 'hidden') : swapped ? 'exit' : 'hidden';
          return (
            <span key={word} className={`kr-loader__word kr-loader__word--${state}`}>
              {word}
            </span>
          );
        })}
      </div>

      <div className="kr-loader__sun-wrap" aria-hidden="true">
        <div className="kr-loader__bloom" />
        <div className="kr-loader__beams" />
        <div className="kr-loader__beams kr-loader__beams--fine" />
        <svg className="kr-loader__sun" viewBox="-100 -100 200 200">
          <defs>
            <radialGradient id="kr-core" cx="40%" cy="34%" r="75%">
              <stop offset="0%" stopColor="#F4F1DC" />
              <stop offset="38%" stopColor="#CBD6AE" />
              <stop offset="100%" stopColor="#7E8C63" />
            </radialGradient>
            <radialGradient id="kr-shade" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#2a3220" stopOpacity="0" />
              <stop offset="100%" stopColor="#2a3220" stopOpacity="0.35" />
            </radialGradient>
          </defs>

          <circle r="86" className="kr-loader__ring kr-loader__ring--faint" />
          <circle r="64" className="kr-loader__ring" />
          <circle r="50" className="kr-loader__ring" />
          <circle r="38" fill="url(#kr-core)" />
          <circle r="38" fill="url(#kr-shade)" />
          <circle r="38" className="kr-loader__rim" />
        </svg>
      </div>

      <div className="kr-loader__grain" aria-hidden="true" />
    </div>
  );
}
