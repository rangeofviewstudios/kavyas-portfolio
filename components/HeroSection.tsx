'use client';

import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center font-['DM_Sans',sans-serif]"
      style={{ backgroundColor: '#4A5540' }}
    >
      {/* Left Content */}
      <div className="relative z-10 flex-1 px-8 sm:px-12 md:px-16 lg:px-24 pt-48 pb-16 max-w-2xl">
        <div className="flex items-center gap-2.5 mb-6 text-sm" style={{ color: '#FFF3DF' }}>
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#FFF3DF' }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#FFF3DF' }}></span>
          </span>
          <span>Open to work and relocation</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight"
          style={{ color: '#FFF3DF' }}
        >
          Hi! I'm Kavya
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-xl"
          style={{ color: '#FFF3DF' }}
        >
          I'm a <span className="font-semibold">UX Design student at SCAD</span>, driven to lead with curiosity, uncover real user needs, and turn them into impactful, intentional experiences.
        </p>
      </div>

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/heroimagegreen.webp"
          alt="Kavya Ray - UX Designer at SCAD"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
