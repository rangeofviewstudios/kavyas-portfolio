'use client';

import Image from 'next/image';

const companies = [
  { name: 'UBS', logo: '/images/ubslogo.png', maxW: 'max-w-[84px]', tone: '' },
  { name: "Lowe's", logo: '/images/lowes.png', maxW: 'max-w-[110px]', tone: '' },
  // Source logo is a pale grey outline — render it solid near-black for contrast
  { name: 'Porsche', logo: '/images/porschelogo.png', maxW: 'max-w-[140px]', tone: 'brightness-0 opacity-80' },
  { name: 'Aestura', logo: '/images/aesturalogo.png', maxW: 'max-w-[120px]', tone: 'saturate-150 contrast-125' },
  { name: 'Range of View Studios', logo: '/images/rovgradlogo.png', maxW: 'max-w-[110px]', tone: '' },
];

const track = [...companies, ...companies, ...companies];

export function LogoMarquee() {
  return (
    <section className="bg-white border-y border-black/8 overflow-hidden">
      <div className="flex items-center h-16 sm:h-20 px-4 sm:px-8">

        {/* Left: static label — hidden on mobile */}
        <p className="hidden sm:block shrink-0 text-sm sm:text-base font-medium text-gray-800 whitespace-nowrap pr-6 border-r border-gray-300">
          Currently learning service design tools.....
        </p>

        {/* Right: "Previously at" + scrolling logos */}
        <div className="flex items-center gap-4 sm:gap-6 min-w-0 overflow-hidden sm:pl-6 w-full sm:w-auto">
          <span className="shrink-0 text-sm sm:text-base text-gray-600 whitespace-nowrap">Previously at</span>

          {/* Scrolling track */}
          <div className="relative flex min-w-0 overflow-hidden">
            {/* Fade right edge */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-marquee-triple items-center">
              {track.map((company, i) => (
                <div key={i} className="flex items-center justify-center mx-8 sm:mx-12 shrink-0">
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
