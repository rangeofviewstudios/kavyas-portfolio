'use client';

import React from 'react';
import Image from 'next/image';

const FloatingBadge = ({
  children,
  className,
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) => (
  <div
    className={`absolute flex items-center justify-center ${delay} ${className}`}
  >
    {children}
  </div>
);

export function HeroSection() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 overflow-hidden font-['DM_Sans',sans-serif]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 w-full animate-fade-in-up">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
              <span>Open to work and relocation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 sm:mb-6">
              Hi! I'm Kavya
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium leading-normal text-[#252524] max-w-[800px]">
              I'm a <span className="text-[#2E6B5F] font-semibold">UX Design student at SCAD</span>, driven to lead with curiosity, uncover real user needs, and turn them into impactful, intentional experiences.
            </p>
          </div>

          {/* Right - Photo with floating badges */}
          <div className="relative animate-fade-in mx-auto md:mr-0 py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-12 lg:py-12 lg:px-16 w-full max-w-sm sm:max-w-md md:max-w-lg" style={{ animationDelay: "0.2s" }}>

            {/* Main Card Container */}
            <div
              className="relative overflow-visible w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] mx-auto aspect-[420/380] rounded-2xl bg-gradient-to-b from-[#F3F3F3] to-[#E6E6E6]"
            >

              {/* The Image - positioned to extend above the card */}
              <Image
                src="/images/kavyaportimage1.png"
                alt="Kavya - UX Designer"
                width={500}
                height={600}
                priority
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto object-contain z-10 h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[520px]"
              />

              {/* Floating Badges - hidden on mobile, visible on md+ */}

              {/* UBS (Top Left) */}
              <FloatingBadge className="hidden md:flex -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-float" delay="0s">
                <Image src="/images/ubs.png" alt="UBS" width={64} height={64} className="w-full h-full object-contain" />
              </FloatingBadge>

              {/* Porsche (Middle Left) */}
              <FloatingBadge className="hidden md:flex top-20 md:top-24 -left-8 md:-left-12 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-float-slow" delay="0.5s">
                <Image src="/images/porsche.png" alt="Porsche" width={80} height={80} className="w-full h-full object-contain" />
              </FloatingBadge>

              {/* Lowe's (Right) */}
              <FloatingBadge className="hidden md:flex top-10 md:top-12 -right-8 md:-right-10 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-float-delayed" delay="1s">
                <Image src="/images/lowes.png" alt="Lowe's" width={64} height={64} className="w-full h-full object-contain" />
              </FloatingBadge>

              {/* FLUX (Bottom Right) */}
              <FloatingBadge className="hidden md:flex -bottom-6 md:-bottom-8 right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-float" delay="1.5s">
                <Image src="/images/flux.png" alt="FLUX" width={64} height={64} className="w-full h-full object-contain" />
              </FloatingBadge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
