'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { detectTone, type Tone } from "@/lib/navTone";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About Me", href: "/about" },
];

const KAVYA_GREEN = '#343F28';
const LOGO_X = 40; // horizontal centre of the top-left logo

const styles = {
  onDark: {
    // Always carries a dark tint: if detection misreads a light area as dark, white text must still be readable
    pill: 'bg-neutral-900/45 border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.25)]',
    text: 'text-white',
    hover: 'hover:bg-white/10',
    active: 'bg-black/20 border border-black/10',
    cta: 'bg-white/15 border border-white/20 hover:bg-white/25',
  },
  onLight: {
    // Smoked-glass pill: dark tint + blur reads as the same object as the hero version
    pill: 'bg-neutral-900/70 border-white/15 shadow-[0_10px_40px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.18)]',
    text: 'text-white',
    hover: 'hover:bg-white/10',
    active: 'bg-white/15 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]',
    cta: 'bg-white/15 border border-white/20 hover:bg-white/25',
  },
} as const;

/** Thin reading-progress bar pinned to the top of the viewport. Case study pages only. */
function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[5px] bg-white/40 pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{ background: KAVYA_GREEN, transform: 'scaleX(0)', boxShadow: '0 0 0 0.5px rgba(255,255,255,0.6)' }}
      />
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const isCaseStudy = pathname?.startsWith('/case-study') ?? false;
  const [tone, setTone] = useState<Tone>('onDark');
  const [logoTone, setLogoTone] = useState<Tone>('onDark');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setTone(detectTone());
        setLogoTone(detectTone(LOGO_X)); // logo sits over different content than the pill
      });
    };

    update();
    // Re-check after route content / images have had a moment to render.
    const settle = [150, 600].map((ms) => window.setTimeout(update, ms));

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      settle.forEach(clearTimeout);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  const t = styles[tone];

  return (
    <>
      {isCaseStudy && <ReadingProgress />}

      {/* Logo — fixed top-left on all sizes */}
      <Link
        href="/"
        data-site-nav
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50"
        // Soft halo on the parent (filters run before masks) keeps the logo visible if the tone guess is wrong
        style={{
          filter: logoTone === 'onLight'
            ? 'drop-shadow(0 0 3px rgba(255,255,255,0.6))'
            : 'drop-shadow(0 0 3px rgba(0,0,0,0.45))',
        }}
      >
        {/* Masked so the white PNG can take any colour: white on dark, Kavya green on light */}
        <span
          role="img"
          aria-label="Kavya Ray"
          className="block w-9 h-9 sm:w-11 sm:h-11 transition-colors duration-300"
          style={{
            backgroundColor: logoTone === 'onLight' ? KAVYA_GREEN : '#ffffff',
            WebkitMask: 'url(/kavlogo.png) center / contain no-repeat',
            mask: 'url(/kavlogo.png) center / contain no-repeat',
          }}
        />
      </Link>

      {/* Mobile nav: compact pill centered */}
      <nav data-site-nav className="sm:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div className={`flex items-center gap-0 px-1.5 py-1.5 rounded-full backdrop-blur-xl backdrop-saturate-150 border transition-all duration-300 ${t.pill}`}>
          <Link href="/#work" className={`${t.text} font-medium text-xs px-3 py-1.5 rounded-full ${t.hover} transition-all duration-200`}>
            Work
          </Link>
          <Link href="/about" className={`${t.text} font-medium text-xs px-3 py-1.5 rounded-full ${t.hover} transition-all duration-200`}>
            About
          </Link>
          <a
            href="/Ray_Kavya_Resume_UX_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.text} font-medium text-xs px-3 py-1.5 rounded-full transition-all duration-200 ${t.cta}`}
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Desktop nav: pill centered */}
      <nav data-site-nav className="hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl backdrop-saturate-150 border transition-all duration-300 ${t.pill}`}>
          {navItems.map((item) => {
            const isActive = item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname?.startsWith(item.href.split('#')[0] + '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${t.text} font-medium text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                  isActive ? t.active : t.hover
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/Ray_Kavya_Resume_UX_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.text} font-medium text-sm px-5 py-2 rounded-full transition-all duration-200 ${t.hover}`}
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  );
}
