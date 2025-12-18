import React from 'react';

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
    <section className="pt-32 pb-32 px-6 overflow-hidden" style={{ fontFamily: 'DM Sans, sans-serif' }}> {/* Prevent scrollbars - floating badges are now contained with padding */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 max-w-lg animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Open to work and relocation
            </div>

            <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
              Hi! I'm Kavya
            </h1>

            <p
              style={{
                color: '#252524',
                fontFamily: 'DM Sans',
                fontSize: '28px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              }}
            >
              I'm a{' '}
              <span
                style={{
                  color: '#2E6B5F',
                  fontFamily: 'DM Sans',
                  fontSize: '28px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                UX Design student at SCAD
              </span>
              , driven to lead with curiosity, uncover real user needs, and turn them into impactful, intentional experiences.
            </p>
          </div>

          {/* Right - Photo with floating badges */}
          <div className="relative flex-shrink-0 animate-fade-in mx-auto lg:mr-0 py-12 px-16" style={{ animationDelay: "0.2s" }}>

            {/* Main Card Container */}
            <div
              className="relative overflow-visible"
              style={{
                width: '420px',
                height: '380px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #F3F3F3 0%, #E6E6E6 100%)',
              }}
            >

              {/* The Image - positioned to extend above the card */}
              <img
                src="/images/kavyaportimage1.png"
                alt="Kavya - UX Designer"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto object-contain z-10"
                style={{ height: '520px' }}
              />

              {/* Floating Badges */}

              {/* UBS (Top Left) */}
              <FloatingBadge className="-top-8 left-8 w-16 h-16 animate-float" delay="0s">
                <img src="/images/ubs.png" alt="UBS" className="w-full h-full object-contain" />
              </FloatingBadge>

              {/* Porsche (Middle Left) */}
              <FloatingBadge className="top-24 -left-12 w-20 h-20 animate-float-slow" delay="0.5s">
                <img src="/images/porsche.png" alt="Porsche" className="w-full h-full object-contain" />
              </FloatingBadge>

              {/* Lowe's (Right) */}
              <FloatingBadge className="top-12 -right-10 w-16 h-16 animate-float-delayed" delay="1s">
                <img src="/images/lowes.png" alt="Lowe's" className="w-full h-full object-contain" />
              </FloatingBadge>

              {/* FLUX (Bottom Right) */}
              <FloatingBadge className="-bottom-8 right-8 w-16 h-16 animate-float" delay="1.5s">
                <img src="/images/flux.png" alt="FLUX" className="w-full h-full object-contain" />
              </FloatingBadge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}