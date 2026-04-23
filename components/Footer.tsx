'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer({
  bgColor = '#2E6B5F',
  rayEffect = false,
}: {
  bgColor?: string;
  rayEffect?: boolean;
} = {}) {
  const footerRef = useRef<HTMLElement | null>(null);
  const [rayPos, setRayPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!rayEffect) return;
    const el = footerRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      setRayPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setRayPos(null);

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [rayEffect]);

  return (
    <footer
      ref={footerRef}
      className="pt-12 sm:pt-16 px-6 relative z-10 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10 sm:mb-12">
          {/* Left - Let's Connect */}
          <h2 className="text-4xl sm:text-5xl font-semibold" style={{ color: '#FFFFFF' }}>
            Let&apos;s<br />Connect!
          </h2>

          {/* Right - Links */}
          <div className="flex flex-col gap-3 md:gap-4">
            <a
              href="mailto:kavyaray77@gmail.com"
              className="flex items-center gap-2 text-base sm:text-lg transition-opacity hover:opacity-70"
              style={{ color: '#FFFFFF' }}
            >
              Email
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base sm:text-lg transition-opacity hover:opacity-70"
              style={{ color: '#FFFFFF' }}
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="/Kavya_Ray_Resume.pdf"
              download="Kavya_Ray_Resume.pdf"
              className="flex items-center gap-2 text-base sm:text-lg transition-opacity hover:opacity-70"
              style={{ color: '#FFFFFF' }}
            >
              Resume
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px mb-10 sm:mb-12" style={{ backgroundColor: '#FFFFFF' }}></div>

        {/* Bottom - Large Name, bleeds out of footer bottom (clipped by overflow:hidden) */}
        <div className="text-center" style={{ marginBottom: '-0.45em' }}>
          <h1
            className="font-bold tracking-wider whitespace-nowrap"
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 12rem)',
              color: '#FFFFFF',
              lineHeight: '1',
              letterSpacing: '0.05em',
            }}
          >
            KAVYA RAY
          </h1>
        </div>
      </div>

      {/* Ray cursor effect — only on the playground footer */}
      {rayEffect && (
        <>
          <div
            className={`ray-overlay ray-burst ${rayPos ? 'is-active' : ''}`}
            style={{
              left: rayPos?.x ?? -9999,
              top: rayPos?.y ?? -9999,
              transform: 'translate(-50%, -50%)',
            }}
            aria-hidden
          />
          <div
            className={`ray-overlay ray-burst-inner ${rayPos ? 'is-active' : ''}`}
            style={{
              left: rayPos?.x ?? -9999,
              top: rayPos?.y ?? -9999,
              transform: 'translate(-50%, -50%)',
            }}
            aria-hidden
          />
          <div
            className={`ray-overlay ray-glow ${rayPos ? 'is-active' : ''}`}
            style={{
              left: rayPos?.x ?? -9999,
              top: rayPos?.y ?? -9999,
            }}
            aria-hidden
          />
          <div
            className={`ray-overlay ray-core ${rayPos ? 'is-active' : ''}`}
            style={{
              left: rayPos?.x ?? -9999,
              top: rayPos?.y ?? -9999,
            }}
            aria-hidden
          />
        </>
      )}
    </footer>
  );
}
