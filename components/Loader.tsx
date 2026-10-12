'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const WORDS = ['Kavya', 'Ray'];
const SWAP_MS = 1100;
const MIN_VISIBLE_MS = 2800;
const EXIT_MS = 800;
const RAY_COUNT = 24;

// Fired when the loader starts to fade, so the page can begin its intro
export const LOADER_DONE_EVENT = 'kr:loader-done';

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
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
        <svg className="kr-loader__sun" viewBox="-100 -100 200 200">
          <defs>
            <radialGradient id="kr-glow" r="50%">
              <stop offset="35%" stopColor="#A9B78C" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#A9B78C" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="kr-core" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B4C196" />
              <stop offset="100%" stopColor="#7E8C63" />
            </linearGradient>
          </defs>

          <circle r="100" fill="url(#kr-glow)" className="kr-loader__glow" />

          <g className="kr-loader__rays">
            {Array.from({ length: RAY_COUNT }, (_, i) => {
              const long = i % 2 === 0;
              return (
                <line
                  key={i}
                  x1="0"
                  y1={-54}
                  x2="0"
                  y2={long ? -78 : -68}
                  className={long ? 'kr-loader__ray' : 'kr-loader__ray kr-loader__ray--short'}
                  transform={`rotate(${(360 / RAY_COUNT) * i})`}
                />
              );
            })}
          </g>

          <circle r="47" className="kr-loader__ring" />
          <circle r="40" fill="url(#kr-core)" />
        </svg>
      </div>
    </div>
  );
}
