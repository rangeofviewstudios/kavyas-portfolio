'use client';

import Image from 'next/image';

const companies = [
  { name: 'UBS', logo: '/images/ubslogo.png', maxW: 'max-w-[56px]' },
  { name: "Lowe's", logo: '/images/lowes.png', maxW: 'max-w-[80px]' },
  { name: 'Porsche', logo: '/images/porschelogo.png', maxW: 'max-w-[90px]' },
  { name: 'Aestura', logo: '/images/aesturalogo.png', maxW: 'max-w-[80px]' },
  { name: 'Range of View Studios', logo: '/images/rovgradlogo.png', maxW: 'max-w-[80px]' },
];

const track = [...companies, ...companies, ...companies];

export function LogoMarquee() {
  return (
    <section className="bg-white border-y border-black/8 overflow-hidden">
      <div className="flex items-center h-14 sm:h-16 px-6">

        {/* Left: static label */}
        <p className="shrink-0 text-xs sm:text-sm text-gray-500 whitespace-nowrap pr-5 border-r border-gray-200">
          Currently learning service design tools.....
        </p>

        {/* Right: "Previously at" + scrolling logos */}
        <div className="flex items-center gap-4 min-w-0 overflow-hidden pl-5">
          <span className="shrink-0 text-xs text-gray-400 whitespace-nowrap">Previously at</span>

          {/* Scrolling track */}
          <div className="relative flex min-w-0 overflow-hidden">
            {/* Fade right edge */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-marquee-triple items-center">
              {track.map((company, i) => (
                <div key={i} className="flex items-center justify-center mx-10 shrink-0">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={100}
                    height={32}
                    className={`h-6 w-auto object-contain brightness-0 opacity-70 ${company.maxW}`}
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
