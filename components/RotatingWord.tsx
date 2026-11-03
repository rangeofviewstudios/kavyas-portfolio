'use client';

import { useEffect, useRef, useState } from 'react';

type RotatingWordProps = {
  words: string[];
  /** Height of one line, in em. Raise it if descenders (g, y, p) get clipped. */
  lineHeight?: number;
  /** Time each word stays on screen, in ms. */
  interval?: number;
  className?: string;
};

const SLIDE_MS = 500;

/**
 * Cycles through `words` with a vertical slide-up.
 * Loops seamlessly by sliding onto a copy of the first word, then snapping back without animation.
 * The width is set by the longest word, so surrounding text never shifts.
 */
export function RotatingWord({ words, lineHeight = 1.5, interval = 2200, className = '' }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const indexRef = useRef(0);
  indexRef.current = index;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length < 2) return;
    const t = setInterval(() => {
      if (indexRef.current >= words.length) {
        // Fallback: transitionend never fired (e.g. tab was in the background) — snap back now
        setAnimate(false);
        setIndex(0);
      } else {
        setAnimate(true);
        setIndex(indexRef.current + 1);
      }
    }, interval);
    return () => clearInterval(t);
  }, [reducedMotion, words.length, interval]);

  const onTransitionEnd = () => {
    if (indexRef.current === words.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  if (words.length === 0) return null;

  const list = [...words, words[0]];
  const shown = reducedMotion ? 0 : index;

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span
        aria-hidden="true"
        className={`inline-flex overflow-hidden align-baseline ${className}`}
        style={{ height: `${lineHeight}em` }}
      >
        <span
          className="flex flex-col"
          style={{
            transform: `translateY(-${shown * lineHeight}em)`,
            transition: animate && !reducedMotion ? `transform ${SLIDE_MS}ms ease-out` : 'none',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {list.map((word, i) => (
            <span
              key={i}
              className="block whitespace-nowrap"
              style={{ height: `${lineHeight}em`, lineHeight: `${lineHeight}em` }}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}
