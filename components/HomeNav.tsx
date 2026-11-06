'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { detectTone, type Tone } from '@/lib/navTone';
import styles from './HomeNav.module.css';

const RESUME = '/Ray_Kavya_Resume_UX_Designer.pdf';

/** Centre of an element, for sampling what's behind it */
function centerOf(el: HTMLElement | null): [number, number] | null {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (!r.width) return null; // hidden (e.g. the pill on phones)
  return [r.left + r.width / 2, r.top + r.height / 2];
}

/**
 * Homepage nav. Stays fixed while scrolling, like components/Navigation on the rest of the site,
 * and each part (logo, pill, "Say hi") picks its own tone from what's behind it.
 */
export function HomeNav() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const pillRef = useRef<HTMLElement>(null);
  const hiRef = useRef<HTMLAnchorElement>(null);
  const [tones, setTones] = useState<{ logo: Tone; pill: Tone; hi: Tone }>({ logo: 'onDark', pill: 'onDark', hi: 'onDark' });

  useEffect(() => {
    let frame = 0;
    const sample = (el: HTMLElement | null, fallback: Tone): Tone => {
      const c = centerOf(el);
      return c ? detectTone(c[0], c[1]) : fallback;
    };
    // The pill is wide enough to straddle a photo and a light section, so sample its ends too:
    // if any point is light, use the smoked glass, which stays readable on both.
    const samplePill = (fallback: Tone): Tone => {
      const el = pillRef.current;
      const c = centerOf(el);
      if (!el || !c) return fallback;
      const r = el.getBoundingClientRect();
      const xs = [r.left + 24, c[0], r.right - 24];
      return xs.some((x) => detectTone(x, c[1]) === 'onLight') ? 'onLight' : 'onDark';
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setTones((t) => {
          const next = { logo: sample(logoRef.current, t.logo), pill: samplePill(t.pill), hi: sample(hiRef.current, t.hi) };
          return next.logo === t.logo && next.pill === t.pill && next.hi === t.hi ? t : next;
        });
      });
    };

    update();
    // Re-check once images and the intro have rendered
    const settle = [150, 600, 2000].map((ms) => window.setTimeout(update, ms));
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      settle.forEach(clearTimeout);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className={styles.bar} data-site-nav>
      <Link ref={logoRef} className={`${styles.logo} ${styles[tones.logo]}`} href="/" aria-label="Kavya Ray, home" />
      <nav ref={pillRef} className={`${styles.pill} ${styles[tones.pill]}`} aria-label="Main">
        <Link href="/" aria-current="page">Home</Link>
        <a href="#work">Work</a>
        <Link href="/about">About Me</Link>
        <a href={RESUME} target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
      <a ref={hiRef} className={`${styles.hi} ${styles[tones.hi]}`} href="mailto:kavyaray77@gmail.com">
        Say hi
      </a>
    </header>
  );
}
