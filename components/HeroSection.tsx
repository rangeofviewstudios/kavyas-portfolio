'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import styles from './HeroSection.module.css';

// Prints pinned to the wall. Positions are percentages of the photo, laid out as a cascade from
// top-left to bottom-right with small overlaps and slight tilts. Order = spotlight order.
const PRINTS = [
  { slug: 'fifa',    label: 'FIFA × SCAD',   src: '/images/fifa-flags.jpg',      left: 20,   top: 9,    width: 15,   rotate: -1.5, ratio: '4 / 3',   z: 3 },
  { slug: 'solace',  label: 'Solace',        src: '/images/solacecard.png',      left: 35.5, top: 5.5,  width: 9,    rotate: 1.2,  ratio: '4 / 5',   z: 4 },
  { slug: 'rov',     label: 'Range of View', src: '/images/rovcard-ember.jpg',   left: 45.8, top: 14,   width: 8.5,  rotate: -0.8, ratio: '3 / 4',   z: 2 },
  { slug: 'ubs',     label: 'UBS',           src: '/images/ubs-cover.webp',      left: 22.5, top: 26,   width: 15.5, rotate: 1,    ratio: '16 / 10', z: 5 },
  { slug: 'looma',   label: 'Looma',         src: '/images/looma/loomacard.png', left: 37.6, top: 24,   width: 8.8,  rotate: -1.5, ratio: '3 / 4',   z: 6 },
  { slug: 'porsche', label: 'Porsche',       src: '/images/porschecard.jpg',     left: 45,   top: 38.5, width: 12,   rotate: 1,    ratio: '4 / 3',   z: 7 },
] as const;

// Size and position of the collage as a group: PRINTS is scaled by `scale` from its top-left print
// (left 20, top 5.5) and moved so that corner sits at `left`/`top`, all in % of the photo.
// Bigger collage: raise `scale`. Further left: lower `left`.
// 1.2 keeps it clear of the role line even on short laptop screens (1280×720).
const COLLAGE = { scale: 1.2, left: 10.6, top: 5 };
const place = (p: (typeof PRINTS)[number]) => ({
  left: COLLAGE.left + (p.left - 20) * COLLAGE.scale,
  top: COLLAGE.top + (p.top - 5.5) * COLLAGE.scale,
  width: p.width * COLLAGE.scale,
});

/** What the spotlight card shows for a print */
type Spot = {
  tag: string;
  who: string;
  title: string;
  text: string;
  stats: [value: string, label: string][];
  /** Sharp cover shown in the card. Leave empty to hide the image. */
  img: string;
  /** Case study path. Leave empty for "coming soon". */
  link: string;
};

// Written for the hero
const WRITTEN: Partial<Record<(typeof PRINTS)[number]['slug'], Spot>> = {
  solace: {
    tag: 'Service design',
    who: '3-person team',
    title: 'Solace',
    text: 'One record that follows refugees across every organization, so nobody has to tell their story twice.',
    stats: [['4', 'connected tools'], ['Winner', 'European Product Design Award']],
    img: '/images/solacecard.png',
    link: '/case-study/solace',
  },
  looma: {
    tag: 'AR + accessibility',
    who: 'Startup competition',
    title: 'Looma',
    text: 'AR glasses that help people with Alzheimer’s recognize the people they love.',
    stats: [['38M+', 'people with Alzheimer’s worldwide']],
    img: '/images/looma/loomacard.png',
    link: '/case-study/looma',
  },
};

// Everything else reuses the project's card in the Work section: headline, tags and stats
const spots: Spot[] = PRINTS.map((print) => {
  const written = WRITTEN[print.slug];
  if (written) return written;
  const href = `/case-study/${print.slug}`;
  const card = projects.find((p) => p.href === href);
  return {
    tag: card?.tags[0] ?? '',
    who: card?.tags.slice(1).join(' · ') ?? '',
    title: card?.client ?? print.label,
    text: card?.headline ?? '',
    stats: (card?.metrics ?? []).map((m): [string, string] => [m.value, m.label]),
    img: print.src,
    link: href,
  };
});

// Desktop: the clean wall the collage sits on. Phones: the walking photo, no collage (see .wall in the CSS).
const PHOTOS = {
  main: { src: '/images/redesign/about-wall-clean.jpg', width: 1561, height: 1007 },
  alt: { src: '/images/redesign/hero-walk.jpg', width: 965, height: 1364 },
};
const MOBILE = '(max-width: 900px)';

// Project covers between the names in the strip
const stripChips = ['/images/fifa-flags.jpg', '/images/ubs-cover.webp'];

type Box = [left: number, top: number, width: number, height: number];
type Layout = { W: number; H: number; OX: number; OY: number; fit: boolean };

/** Desktop: fit the photo to ~94% of the hero height, anchored right, so the prints sit below the nav.
 *  Falls back to covering the hero (phones, or when that would be too wide or too narrow). */
function computeLayout(hw: number, hh: number, mobile: boolean): Layout {
  const photo = mobile ? PHOTOS.alt : PHOTOS.main;
  const ratio = photo.width / photo.height;
  let h = hh * 0.94;
  let w = h * ratio;
  let fit = true;
  if (mobile || w > hw || w < hw * 0.55) {
    w = Math.max(hw, hh * ratio);
    h = w / ratio;
    fit = false;
  }
  return { W: w, H: h, OX: fit ? hw - w : (hw - w) / 2, OY: fit ? hh - h : (hh - h) / 2, fit };
}

/** A print's box as fractions of the photo: left/top/width from PRINTS, height from its aspect ratio */
function boxFor(i: number, { W, H }: Layout): Box {
  const [a, b] = PRINTS[i].ratio.split('/').map(Number);
  const { left, top, width } = place(PRINTS[i]);
  const w = width / 100;
  return [left / 100, top / 100, w, (w * W) / (a / b) / H];
}

/** Gentle zoom (max 1.4x) so the photo never gets blurry; the card carries the sharp image */
function camFor(box: Box, { W, H }: Layout, hw: number, hh: number, mobile: boolean) {
  const [x, y, w, h] = box;
  const s = Math.min(1.4, (hh * 0.6) / (h * H));
  const cx = (x + w / 2) * W;
  const cy = (y + h / 2) * H;
  let tx = (mobile ? 0.5 : 0.66) * hw - s * cx;
  let ty = (mobile ? 0.3 : 0.48) * hh - s * cy;
  // Keep the photo covering the hero edges while zoomed
  if (W * s >= hw) tx = Math.min(0, Math.max(hw - W * s, tx));
  if (H * s >= hh) ty = Math.min(0, Math.max(hh - H * s, ty));
  else ty = hh - H * s;
  return `translate(${tx}px, ${ty}px) scale(${s})`;
}

function StripSegment({ hidden }: { hidden: boolean }) {
  return (
    <div className={styles.seg} aria-hidden={hidden || undefined}>
      {stripChips.map((src) => (
        <span key={src} style={{ display: 'contents' }}>
          <span>Kavya Ray</span>
          <a className={styles.mchip} href="#work" tabIndex={-1}>
            <Image src={src} alt="" fill sizes="340px" />
          </a>
        </span>
      ))}
    </div>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Index of the open print; -1 means the whole wall
  const [cur, setCur] = useState(-1);
  // Last print opened: keeps its content in the card while it fades out
  const [last, setLast] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [size, setSize] = useState({ hw: 0, hh: 0 });
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [instantCurtain, setInstantCurtain] = useState(false);
  const [reduced, setReduced] = useState(false);

  const zoomed = cur >= 0;
  const p = spots[last];

  // Measure the hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const mq = window.matchMedia(MOBILE);
    const measure = () => {
      setMobile(mq.matches);
      setSize({ hw: hero.clientWidth, hh: hero.clientHeight });
    };
    measure();
    // Place the photo without animating, then turn the camera transition on
    requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    const ro = new ResizeObserver(measure);
    ro.observe(hero);
    const onMq = () => {
      setCur(-1);
      measure();
    };
    mq.addEventListener('change', onMq);
    return () => {
      ro.disconnect();
      mq.removeEventListener('change', onMq);
    };
  }, []);

  // Intro curtain lifts once per visit; skipped for reduced motion
  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(still);
    let seen = false;
    try {
      seen = sessionStorage.getItem('kr-intro') === '1';
      sessionStorage.setItem('kr-intro', '1');
    } catch {
      // Storage blocked (private mode): just play the curtain
    }
    if (seen || still) setInstantCurtain(true);
    const t = setTimeout(() => setEntered(true), seen || still ? 0 : 700);
    return () => clearTimeout(t);
  }, []);

  // Name strip: drifts sideways, speeds up while you scroll and flips with scroll direction
  useEffect(() => {
    const track = trackRef.current;
    const seg = track?.firstElementChild as HTMLElement | null;
    if (!track || !seg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0, dir = 1, boost = 0, lastY = window.scrollY, lastT = performance.now(), raf = 0;
    const onScroll = () => {
      const d = window.scrollY - lastY;
      lastY = window.scrollY;
      if (d) dir = d > 0 ? 1 : -1;
      boost = Math.min(boost + Math.abs(d) * 0.08, 6);
    };
    const loop = (t: number) => {
      const dt = Math.min(t - lastT, 50) / 16.7;
      lastT = t;
      const w = seg.offsetWidth;
      x -= (0.55 + boost) * dir * dt;
      boost *= 0.92;
      if (x <= -w) x += w;
      if (x > 0) x -= w;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const open = useCallback((i: number) => {
    const next = (i + PRINTS.length) % PRINTS.length;
    setCur(next);
    setLast(next);
    if (driftRef.current) driftRef.current.style.transform = '';
  }, []);
  const close = () => setCur(-1);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCur(-1);
      if (e.key === 'ArrowRight') open(cur + 1);
      if (e.key === 'ArrowLeft') open(cur - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed, cur, open]);

  // Camera placement
  const { hw, hh } = size;
  const L = computeLayout(hw, hh, mobile);
  const transform = zoomed ? camFor(boxFor(cur, L), L, hw, hh, mobile) : `translate(${L.OX}px, ${L.OY}px)`;
  const fitted = L.fit && L.OX > 0;

  // Subtle mouse parallax on the photo (the prints sit inside .drift, so they move with it)
  const onMove = (e: React.PointerEvent) => {
    const drift = driftRef.current;
    const hero = heroRef.current;
    if (!drift || !hero || zoomed || reduced || mobile) return;
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    drift.style.transform = `translate(${-dx * 12}px, ${-dy * 8}px)`;
  };

  // Art direction: clean wall on desktop, walking photo on phones
  const common = { alt: 'Kavya standing beside a green wall pinned with prints of her projects', sizes: '100vw', quality: 80 };
  const { props: { srcSet: mainSrcSet } } = getImageProps({ ...common, ...PHOTOS.main });
  const { props: altProps } = getImageProps({ ...common, ...PHOTOS.alt });

  const heroClass = [styles.hero, zoomed && styles.zoomed, entered && styles.in, fitted && styles.fit]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      ref={heroRef}
      className={heroClass}
      id="hero"
      onPointerMove={onMove}
      onPointerLeave={() => driftRef.current && (driftRef.current.style.transform = '')}
    >
      {/* The visible name is the decorative strip below; this is the page's real heading */}
      <h1 className="sr-only">Kavya Ray, UX Designer &amp; Researcher</h1>

      <div
        className={styles.cam}
        style={hw ? { width: L.W, height: L.H, transform, transition: ready ? undefined : 'none' } : { visibility: 'hidden' }}
      >
        <div ref={driftRef} className={styles.drift}>
          <picture>
            <source media="(min-width: 901px)" srcSet={mainSrcSet} sizes="100vw" />
            {/* Plain <img> inside <picture> is how next/image does art direction (getImageProps); alt comes from altProps */}
            <img {...altProps} className={styles.photo} draggable={false} fetchPriority="high" />
          </picture>
          <div className={styles.wall}>
            {PRINTS.map((print, i) => (
              <button
                key={print.slug}
                type="button"
                className={styles.print}
                aria-label={`Explore ${print.label}`}
                tabIndex={zoomed ? -1 : 0}
                style={{
                  left: `${place(print).left}%`,
                  top: `${place(print).top}%`,
                  width: `${place(print).width}%`,
                  zIndex: print.z,
                  ['--r' as string]: `${print.rotate}deg`,
                  ['--ar' as string]: print.ratio,
                }}
                onClick={() => open(i)}
              >
                <Image src={print.src} alt="" width={640} height={480} sizes="(max-width: 900px) 40vw, 20vw" draggable={false} />
                <span className={styles.printTag} aria-hidden="true">
                  {print.label}
                  <b>↗</b>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.spotlight} />
      <div className={styles.glow} />

      <div className={styles.meta}>
        <div>
          <div className={styles.r}>UX Designer &amp; Researcher</div>
          <div className={styles.s}>
            <i aria-hidden="true" />
            Open to work &amp; relocation
          </div>
        </div>
      </div>

      <div className={styles.marq} aria-hidden="true">
        <div ref={trackRef} className={styles.track}>
          {[0, 1, 2, 3].map((k) => (
            <StripSegment key={k} hidden={k > 0} />
          ))}
        </div>
      </div>

      <div className={styles.detail} aria-live="polite" aria-hidden={!zoomed}>
        {p.img && (
          <div className={styles.cover}>
            <Image key={p.img} src={p.img} alt="" fill sizes="420px" />
          </div>
        )}
        <div className={styles.inner}>
          <div className={styles.kick}>
            <b>{p.tag}</b>
            <span>{p.who}</span>
          </div>
          <h2>{p.title}</h2>
          <p>{p.text}</p>
          {p.stats.length > 0 && (
            <div className={styles.stats}>
              {p.stats.map(([value, label]) => (
                <div key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          )}
          <div className={styles.dnav}>
            {p.link ? (
              <Link className={styles.btn} href={p.link} tabIndex={zoomed ? 0 : -1}>
                Read case study →
              </Link>
            ) : (
              <span className={`${styles.btn} ${styles.disabled}`} aria-disabled="true">
                Case study coming soon
              </span>
            )}
            <button type="button" className={styles.round} aria-label="Previous print" tabIndex={zoomed ? 0 : -1} onClick={() => open(cur - 1)}>
              ←
            </button>
            <button type="button" className={styles.round} aria-label="Next print" tabIndex={zoomed ? 0 : -1} onClick={() => open(cur + 1)}>
              →
            </button>
            <span className={styles.count}>
              {last + 1} / {PRINTS.length}
            </span>
          </div>
        </div>
      </div>
      <button type="button" className={styles.zoomout} onClick={close} tabIndex={zoomed ? 0 : -1}>
        ← Back to the wall
      </button>

      <div className={`${styles.curtain} ${instantCurtain ? styles.instant : ''}`} aria-hidden="true">
        Kavya<em>•</em>Ray
      </div>
    </section>
  );
}
