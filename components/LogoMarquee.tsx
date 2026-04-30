'use client';

import Image from 'next/image';

const companies = [
  { name: 'Range of View Studios', logo: '/images/rovgradlogo.png', maxW: 'max-w-[100px]', filter: 'grayscale brightness-0 invert' },
  { name: 'UBS', logo: '/images/ubslogo.png', maxW: 'max-w-[80px]', filter: 'grayscale brightness-0 invert' },
  { name: 'Porsche', logo: '/images/porschelogo.png', maxW: 'max-w-[100px]', filter: 'grayscale brightness-0 invert' },
  { name: 'Aestura', logo: '/images/aesturalogo.png', maxW: 'max-w-[100px]', filter: 'grayscale brightness-0 invert' },
  { name: "Lowe's", logo: '/images/loweslogo.png', maxW: 'max-w-[110px]', filter: 'grayscale brightness-[5]' },
];

export function LogoMarquee() {
  return (
    <section className="relative py-14 bg-background overflow-hidden border-y border-white/10">
      {/* Label */}
      <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-10">
        Currently learning design tools at
      </p>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#707D63] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#707D63] to-transparent" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee">
        {[...companies, ...companies].map((company, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-14 shrink-0"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={40}
              className={`h-8 w-auto object-contain grayscale brightness-0 invert ${company.maxW}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
