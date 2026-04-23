'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import BorderGlow from '@/components/BorderGlow';

const GLOW_PROPS = {
  glowColor: '45 60 78',
  glowIntensity: 0.9,
  glowRadius: 24,
  coneSpread: 30,
  edgeSensitivity: 32,
  borderRadius: 24,
  backgroundColor: 'transparent',
  colors: ['#5E6B4D', '#F1E9D5', '#7A8763'],
};

const OLIVE = '#5E6B4D';
const OLIVE_DEEP = '#4A5540';
const CREAM = '#F1E9D5';
const CREAM_SOFT = '#E9DFC5';
const INK = '#1C1C1A';

/* ---------- tiny on-scroll reveal hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/* ---------- section wrapper with fade-up on enter ---------- */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- chapter label ---------- */
function Chapter({
  n,
  label,
  color = OLIVE,
}: {
  n: string;
  label: string;
  color?: string;
}) {
  return (
    <div
      className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase"
      style={{ color }}
    >
      <span className="font-medium">{n}</span>
      <span className="h-px w-8" style={{ backgroundColor: color, opacity: 0.5 }} />
      <span>{label}</span>
    </div>
  );
}

export default function Playground() {
  /* ---------- Raptors: basketball click counter ---------- */
  const [shots, setShots] = useState(0);
  const [bounce, setBounce] = useState(false);
  const shotMsg =
    shots === 0
      ? 'go ahead, take the shot'
      : shots < 3
      ? 'nice touch'
      : shots < 6
      ? 'heating up'
      : shots < 10
      ? "you're on fire"
      : shots < 20
      ? 'okay we get it, you\'re a fan'
      : 'vince carter who';

  const takeShot = () => {
    setShots((s) => s + 1);
    setBounce(true);
    window.setTimeout(() => setBounce(false), 280);
  };

  /* ---------- Korean: spice slider ---------- */
  const [spice, setSpice] = useState(3);
  const spiceCopy = [
    'plain original. don\'t @ me.',
    'soy garlic comfort zone.',
    'honey butter, no judgment.',
    'yangnyeom standard. crowd-pleaser.',
    'buldak wings. fully committed.',
    'the ajumma is concerned.',
  ];

  /* ---------- Dogs: hover reveals dream names ---------- */
  const [pawHover, setPawHover] = useState(false);
  const dreamNames = ['Kimchi', 'Raptor', 'Miso', 'Maple', 'Drake'];

  /* ---------- Toronto: hover chips (no state needed, pure CSS) ---------- */

  return (
    <div className="min-h-screen bg-background font-['DM_Sans',sans-serif]">
      <Navigation />

      {/* ===== HERO ===== */}
      <section
        className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden"
        style={{ backgroundColor: OLIVE }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
            <div className="animate-fade-in-up">
              <div
                className="text-xs tracking-[0.28em] uppercase mb-6"
                style={{ color: CREAM, opacity: 0.75 }}
              >
                the playground · off the record
              </div>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-medium tracking-tight leading-[0.95]"
                style={{ color: CREAM }}
              >
                a few <span style={{ fontStyle: 'italic', color: CREAM_SOFT }}>honest</span><br />
                things about me
              </h1>
              <p
                className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed max-w-md"
                style={{ color: CREAM, opacity: 0.82 }}
              >
                you&apos;ve seen the case studies. this is everything else.
                Toronto winters, the Raptors, every dog on the sidewalk, this
                exact shade of green, and a frankly concerning amount of
                korean fried chicken.
              </p>
              <div
                className="mt-8 md:mt-10 flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
                style={{ color: CREAM, opacity: 0.6 }}
              >
                <span>scroll</span>
                <span className="inline-block animate-bounce" style={{ animationDuration: '1.6s' }}>↓</span>
              </div>
            </div>
            <BorderGlow {...GLOW_PROPS} className="animate-fade-in" >
              <div
                className="relative aspect-[3/4]"
                style={{ animationDelay: '0.2s' }}
              >
                <Image
                  src="/voyageatlkavya-6.webp"
                  alt="Kavya surrounded by design prints mid-air"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* ===== CH 01 TORONTO ===== */}
      <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FAF7EF' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="order-2 md:order-1">
              <Chapter n="01" label="home" />
              <h2
                className="mt-5 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
                style={{ color: INK }}
              >
                born and raised <br />
                <span style={{ fontStyle: 'italic', color: OLIVE }}>in Toronto.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: '#3A3A38' }}>
                School pulled me south to Savannah, but the 6 is still home.
                The winters are ridiculous, the streetcars are always late,
                everyone over-apologizes on the sidewalk, and I wouldn&apos;t
                trade any of it.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { label: 'streetcars', emoji: '🚋' },
                  { label: 'CN Tower', emoji: '🗼' },
                  { label: 'Tim Hortons', emoji: '☕' },
                  { label: 'Scarborough Bluffs', emoji: '🌊' },
                  { label: '-12°C', emoji: '❄️' },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm border transition-all cursor-default hover:-translate-y-0.5"
                    style={{
                      borderColor: OLIVE + '40',
                      color: INK,
                      backgroundColor: '#fff',
                    }}
                  >
                    <span>{chip.emoji}</span>
                    <span>{chip.label}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 md:order-2">
              <BorderGlow {...GLOW_PROPS}>
                <div className="relative aspect-[2/3]">
                  <Image
                    src="/voyageatlkavya-1.webp"
                    alt="Kavya walking past a floating moodboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
              </BorderGlow>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CH 02 RAPTORS ===== */}
      <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: OLIVE }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
            <Reveal>
              <BorderGlow {...GLOW_PROPS}>
                <div className="relative aspect-[2/3]">
                  <Image
                    src="/voyageatlkavya-3.webp"
                    alt="Kavya kneeling, reading a notebook"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover"
                  />
                </div>
              </BorderGlow>
            </Reveal>

            <Reveal delay={120}>
              <Chapter n="02" label="we the north" color={CREAM} />
              <h2
                className="mt-5 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
                style={{ color: CREAM }}
              >
                dino energy <br />
                <span style={{ fontStyle: 'italic', color: CREAM_SOFT }}>always.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: CREAM, opacity: 0.85 }}>
                I&apos;ll argue Raptors at dinner and sleep fine. 2019 ruined
                me in a good way. I can still tell you exactly where I was
                when Kawhi&apos;s shot bounced four times and fell in.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
                <button
                  onClick={takeShot}
                  aria-label="take a shot"
                  className="group relative h-24 w-24 md:h-28 md:w-28 rounded-full border-2 active:scale-90 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  style={{
                    borderColor: CREAM,
                    backgroundColor: '#C45827',
                    transform: bounce ? 'translateY(-14px) rotate(12deg)' : 'translateY(0) rotate(0)',
                    transition: 'transform 260ms cubic-bezier(.2,.9,.3,1.4)',
                    boxShadow: '0 10px 24px -12px rgba(0,0,0,0.55)',
                  }}
                >
                  {/* basketball lines */}
                  <span
                    className="absolute inset-2 rounded-full pointer-events-none"
                    style={{ border: '2px solid rgba(0,0,0,0.3)' }}
                  />
                  <span
                    className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none"
                    style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                  />
                  <span
                    className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 pointer-events-none"
                    style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                  />
                </button>

                <div>
                  <div
                    className="text-xs tracking-[0.24em] uppercase"
                    style={{ color: CREAM, opacity: 0.6 }}
                  >
                    shots taken
                  </div>
                  <div
                    className="text-5xl md:text-6xl font-medium tabular-nums"
                    style={{ color: CREAM }}
                  >
                    {String(shots).padStart(2, '0')}
                  </div>
                  <div
                    className="mt-1 text-sm italic"
                    style={{ color: CREAM, opacity: 0.75 }}
                  >
                    {shotMsg}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CH 03 DOGS ===== */}
      <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FAF7EF' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="order-2 md:order-1">
              <Chapter n="03" label="dog people only" />
              <h2
                className="mt-5 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
                style={{ color: INK }}
              >
                every walk <br />
                <span style={{ fontStyle: 'italic', color: OLIVE }}>gets interrupted.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: '#3A3A38' }}>
                If there&apos;s a dog on the sidewalk I&apos;m already
                crouching. Sorry not sorry. I&apos;ll ask for their name
                before I ask for yours.
              </p>

              <div
                className="mt-8 rounded-2xl border p-5 md:p-6 transition-colors"
                style={{
                  borderColor: OLIVE + '30',
                  backgroundColor: pawHover ? OLIVE + '10' : '#fff',
                }}
                onMouseEnter={() => setPawHover(true)}
                onMouseLeave={() => setPawHover(false)}
                onFocus={() => setPawHover(true)}
                onBlur={() => setPawHover(false)}
                tabIndex={0}
              >
                <div
                  className="text-xs tracking-[0.24em] uppercase flex items-center gap-3"
                  style={{ color: OLIVE }}
                >
                  <span>dream dog names</span>
                  <span
                    className="transition-transform"
                    style={{ transform: pawHover ? 'translateX(4px)' : 'translateX(0)' }}
                  >
                    →
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {dreamNames.map((name, i) => (
                    <span
                      key={name}
                      className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: pawHover ? OLIVE : OLIVE + '15',
                        color: pawHover ? CREAM : OLIVE,
                        transition: `all 400ms ${i * 60}ms ease-out`,
                        transform: pawHover ? 'translateY(0)' : 'translateY(2px)',
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-4 text-xs italic"
                  style={{ color: '#6B6B68' }}
                >
                  (yes, naming a dog Kimchi is on the table.)
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 md:order-2">
              <BorderGlow {...GLOW_PROPS}>
                <div className="relative aspect-[2/3]">
                  <Image
                    src="/voyageatlkavya-4.webp"
                    alt="Kavya peeking over a notebook"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
              </BorderGlow>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CH 04 KOREAN FOOD ===== */}
      <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FAF7EF' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="order-2 md:order-1">
              <Chapter n="04" label="korean fried chicken order" />
              <h2
                className="mt-5 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
                style={{ color: INK }}
              >
                korean fried chicken, <br />
                <span style={{ fontStyle: 'italic', color: OLIVE }}>every single time.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: '#3A3A38' }}>
                Double-fried, yangnyeom glaze, half soy garlic so the table
                doesn&apos;t mutiny. Pickled radish on standby. If you finish
                the wings first you&apos;re doing it wrong.
              </p>

              <div
                className="mt-8 rounded-2xl p-6 border"
                style={{ backgroundColor: '#fff', borderColor: OLIVE + '30' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="text-xs tracking-[0.24em] uppercase"
                    style={{ color: OLIVE }}
                  >
                    spice level, honestly
                  </div>
                  <div className="text-xl tabular-nums" aria-hidden>
                    {'🌶️'.repeat(Math.max(spice, 1))}
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={1}
                  value={spice}
                  onChange={(e) => setSpice(parseInt(e.target.value, 10))}
                  aria-label="spice level"
                  className="w-full accent-current"
                  style={{ accentColor: OLIVE }}
                />
                <div className="mt-3 text-sm italic" style={{ color: '#6B6B68' }}>
                  {spiceCopy[spice]}
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5 text-[11px] tracking-[0.18em] uppercase" style={{ color: OLIVE + 'BB' }}>
                  {['yangnyeom', 'soy garlic', 'honey butter', 'half + half', 'pickled radish'].map((d) => (
                    <span key={d} className="px-2 py-1 rounded-full" style={{ backgroundColor: OLIVE + '12' }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 md:order-2">
              <BorderGlow {...GLOW_PROPS}>
                <div className="relative aspect-[3/2]">
                  <Image
                    src="/voyageatlkavya-2.webp"
                    alt="Kavya beside a pinned moodboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 580px"
                    className="object-cover object-[70%_center]"
                  />
                </div>
              </BorderGlow>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== OUTRO ===== */}
      <section className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: OLIVE_DEEP }}>
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <div
              className="text-xs tracking-[0.28em] uppercase mb-6"
              style={{ color: CREAM, opacity: 0.6 }}
            >
              end of the playground
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
              style={{ color: CREAM }}
            >
              that&apos;s the rest of me.<br />
              <span style={{ fontStyle: 'italic', color: CREAM_SOFT }}>
                back to the work?
              </span>
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: CREAM, color: INK }}
              >
                ← back to home
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full text-sm font-medium border transition-all hover:-translate-y-0.5"
                style={{ borderColor: CREAM + '66', color: CREAM }}
              >
                the professional version
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer bgColor={OLIVE} />
    </div>
  );
}
