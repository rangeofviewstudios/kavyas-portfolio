'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DM_Mono } from 'next/font/google';
import { LOADER_DONE_EVENT } from '@/components/Loader';

const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'] });

const ISO_STOPS = [100, 125, 160, 200, 250, 320, 400, 500, 640, 800, 1000, 1250, 1600];
const EV_RANGE = 4; // stops underexposed at the start
const HOLD_MS = 600;
const RAMP_MS = 2600;
const TICKS = 11;

const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

export function HeroSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const setupRef = useRef<HTMLParagraphElement>(null);
  const payoffRef = useRef<HTMLHeadingElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const isoRef = useRef<HTMLSpanElement>(null);
  const evRef = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  // One value (0 = dark, 1 = correctly exposed) drives everything
  const setExposure = useCallback((x: number) => {
    const v = Math.max(0, Math.min(1, x));
    if (photoRef.current) {
      photoRef.current.style.filter = `brightness(${(0.12 + 0.88 * v).toFixed(3)}) saturate(${(0.55 + 0.45 * v).toFixed(3)})`;
    }
    if (setupRef.current) setupRef.current.style.opacity = (1 - v * 0.35).toFixed(3);
    if (payoffRef.current) payoffRef.current.style.opacity = (0.12 + v * 0.88).toFixed(3);
    if (markerRef.current) markerRef.current.style.left = `${v * 100}%`;
    if (rangeRef.current) rangeRef.current.value = String(v);
    if (isoRef.current) isoRef.current.textContent = String(ISO_STOPS[Math.round(v * (ISO_STOPS.length - 1))]);
    if (evRef.current) {
      const stops = (1 - v) * EV_RANGE;
      evRef.current.textContent = stops < 0.05 ? '± 0 EV' : `− ${stops.toFixed(1)} EV`;
    }
  }, []);

  const stop = () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setExposure(1);
      return;
    }

    let started = false;
    const play = () => {
      if (started) return;
      started = true;
      let t0: number | null = null;
      const step = (t: number) => {
        if (t0 === null) t0 = t;
        const p = Math.min(1, Math.max(0, (t - t0 - HOLD_MS) / RAMP_MS));
        setExposure(ease(p));
        frame.current = p < 1 ? requestAnimationFrame(step) : null;
      };
      frame.current = requestAnimationFrame(step);
    };

    // Start once the loader begins to fade; fall back if it never reports
    if (document.documentElement.dataset.loaderDone) play();
    window.addEventListener(LOADER_DONE_EVENT, play, { once: true });
    const fallback = setTimeout(play, 5000);

    return () => {
      stop();
      clearTimeout(fallback);
      window.removeEventListener(LOADER_DONE_EVENT, play);
    };
  }, [setExposure]);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-start sm:items-center font-['DM_Sans',sans-serif]"
      style={{ backgroundColor: '#0B0D09', color: '#FFF3DF' }}
    >
      {/* Original photo; only its exposure changes. On phones it sits below the copy. */}
      <div
        ref={photoRef}
        className="absolute inset-x-0 bottom-0 top-[34%] sm:top-0 will-change-[filter]"
        style={{ filter: 'brightness(0.12) saturate(0.55)' }}
      >
        <Image
          src="/heroimagegreen.webp"
          alt="Kavya Ray - UX Designer at SCAD"
          fill
          priority
          className="object-cover [object-position:70%_20%] sm:[object-position:center]"
        />
      </div>
      {/* Scrim so the copy stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D09] from-[36%] via-[#0B0D09]/30 via-[50%] to-transparent to-[68%] sm:bg-gradient-to-r sm:from-[#11150c]/70 sm:from-0% sm:via-[#11150c]/20 sm:via-50% sm:to-transparent sm:to-100%" />

      {/* Copy */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-24 pb-32 sm:py-40 max-w-4xl">
        <p ref={setupRef} className="text-lg sm:text-2xl md:text-[1.7rem] font-normal tracking-[-0.02em] leading-snug mb-3 sm:mb-4">
          The best insights start in the dark.
        </p>
        <h1
          ref={payoffRef}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium tracking-[-0.045em] leading-[0.96]"
          style={{ opacity: 0.12 }}
        >
          I bring them to <span style={{ color: '#F26A3D' }}>light.</span>
        </h1>

        <div className="mt-6 sm:mt-8 flex flex-col items-start gap-5 sm:gap-6">
          <span className="text-sm sm:text-base opacity-70">
            UX designer at SCAD · Open to work and relocation
          </span>
          <Link
            href="/#work"
            className="inline-flex items-center rounded-full px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#FFF3DF', color: '#1B1C18' }}
          >
            See my work
          </Link>
        </div>
      </div>

      {/* ISO dial — aligned to the copy's left edge */}
      <div
        className={`${dmMono.className} absolute z-10 bottom-8 sm:bottom-10 left-6 right-6 sm:right-auto sm:left-12 md:left-16 lg:left-24 flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs tracking-[0.04em]`}
      >
        <span className="opacity-50">ISO</span>
        <div className="relative flex-1 sm:flex-none sm:w-56 h-3 has-[input:focus-visible]:outline has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-[6px] has-[input:focus-visible]:outline-[#F26A3D] rounded-sm">
          <div className="absolute inset-0 flex justify-between">
            {Array.from({ length: TICKS }, (_, i) => (
              <i key={i} className={`w-px bg-[#FFF3DF]/30 ${i % 2 ? 'h-[60%] my-auto' : 'h-full'}`} />
            ))}
          </div>
          <span
            ref={markerRef}
            className="absolute -top-[15%] -bottom-[15%] w-0.5 -translate-x-1/2 rounded-sm bg-[#F26A3D] shadow-[0_0_0_3px_rgba(242,106,61,0.18)]"
            style={{ left: '0%' }}
          />
          <input
            ref={rangeRef}
            type="range"
            min={0}
            max={1}
            step={0.001}
            defaultValue={0}
            aria-label="ISO, from dark to light"
            onInput={(e) => {
              stop();
              setExposure(Number(e.currentTarget.value));
            }}
            className="absolute -inset-y-3 inset-x-0 w-full opacity-0 cursor-ew-resize m-0"
          />
        </div>
        <span ref={isoRef} className="min-w-[4.6em] tabular-nums">100</span>
        <span ref={evRef} className="hidden sm:inline opacity-40 whitespace-nowrap">− 4.0 EV</span>
      </div>
    </section>
  );
}
