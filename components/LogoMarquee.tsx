'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/** Phrases that rotate after "Currently learning". Edit freely. */
const learning = [
  'service design tools',
  'research methods',
  'prompt engineering',
  'vibe coding',
  'motion design',
];

const ROTATE_MS = 2400;
const SLIDE_MS = 500;

const companies = [
  { name: 'UBS', logo: '/images/ubslogo.png', maxW: 'max-w-[84px]', tone: '' },
  { name: "Lowe's", logo: '/images/lowes.png', maxW: 'max-w-[110px]', tone: '' },
  // Source logo is a pale grey outline — render it solid near-black for contrast
  { name: 'Porsche', logo: '/images/porschelogo.png', maxW: 'max-w-[140px]', tone: 'brightness-0 opacity-80' },
  { name: 'Aestura', logo: '/images/aesturalogo.png', maxW: 'max-w-[120px]', tone: 'saturate-150 contrast-125' },
  { name: 'Range of View Studios', logo: '/images/rovgradlogo.png', maxW: 'max-w-[110px]', tone: '' },
];

const track = [...companies, ...companies, ...companies];

/** Vertical text rotator: slides up one line at a time, looping via a copy of the first item. */
function RotatingPhrase({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || items.length < 2) return;
    const t = setInterval(() => {
      setIndex((i) => {
        // Fallback snap in case transitionend never fired (e.g. tab was in the background)
        if (i >= items.length) {
          setAnimate(false);
          return 0;
        }
        setAnimate(true);
        return i + 1;
      });
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [reducedMotion, items.length]);

  // After landing on the appended copy of the first item, jump back to the real one without animating
  const onTransitionEnd = () => {
    if (index === items.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  const list = [...items, items[0]];
  const shown = reducedMotion ? 0 : index;

  return (
    <>
      <span className="sr-only">{items.join(', ')}</span>
      <span aria-hidden="true" className="inline-block h-[1.5em] overflow-hidden align-bottom">
        <span
          className="flex flex-col font-semibold text-[#343F28]"
          style={{
            transform: `translateY(-${shown * 1.5}em)`,
            transition: animate && !reducedMotion ? `transform ${SLIDE_MS}ms ease-out` : 'none',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {list.map((item, i) => (
            <span key={i} className="block h-[1.5em] leading-[1.5em] whitespace-nowrap">
              {item}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

export function LogoMarquee() {
  return (
    <section className="bg-[#ECEADF] border-y border-[#343F28]/10 overflow-hidden">
      <div className="flex items-center h-20 sm:h-28 px-6 sm:px-12 lg:px-20">

        {/* Left: "Currently learning" + rotating phrase — hidden on mobile */}
        <p className="hidden sm:block shrink-0 text-sm sm:text-base leading-[1.5em] font-medium text-gray-800 whitespace-nowrap pr-8 lg:pr-10 border-r border-gray-300">
          Currently learning <RotatingPhrase items={learning} />
        </p>

        {/* Right: "Previously at" + scrolling logos */}
        <div className="flex items-center gap-6 sm:gap-10 min-w-0 overflow-hidden sm:pl-8 lg:pl-10 w-full sm:w-auto">
          <span className="shrink-0 text-sm sm:text-base text-gray-600 whitespace-nowrap">Previously at</span>

          {/* Scrolling track */}
          <div className="relative flex min-w-0 overflow-hidden">
            {/* Fade left and right edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#ECEADF] to-[#ECEADF]/0" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#ECEADF] to-[#ECEADF]/0" />

            <div className="flex w-max animate-marquee-triple items-center">
              {track.map((company, i) => (
                <div key={i} className="flex items-center justify-center mx-10 sm:mx-16 shrink-0">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={40}
                    className={`h-7 sm:h-9 w-auto object-contain ${company.maxW} ${company.tone}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
