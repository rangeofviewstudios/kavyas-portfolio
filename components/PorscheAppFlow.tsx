'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    label: 'Home',
    phones: ['/images/porsche/porschephone1.png', '/images/porsche/porschephonemockup.png'],
    phoneSizes: ['h-[450px]', 'h-[400px]'],
  },
  {
    label: 'Search Destination',
    phones: ['/images/porsche/porschephone2.png', '/images/porsche/porschephone3.png'],
    phoneSizes: ['h-[450px]', 'h-[450px]'],
  },
  {
    label: 'Route Overview',
    subtitle: '(fastest pre-selected)',
    phones: ['/images/porsche/porschephone3.png', '/images/porsche/porschephone5.png'],
    phoneSizes: ['h-[450px]', 'h-[450px]'],
  },
  {
    label: 'Send to Vehicle',
    phones: ['/images/porsche/porschephone4.png', '/images/porsche/porschephone5.png'],
    phoneSizes: ['h-[450px]', 'h-[450px]'],
  },
  {
    label: 'Live Trip Card',
    phones: ['/images/porsche/porschephone5.png', '/images/porsche/porschephone6.png'],
    phoneSizes: ['h-[450px]', 'h-[450px]'],
  },
  {
    label: 'Charging Overview',
    phones: ['/images/porsche/porschephone6.png', '/images/porsche/porschephone7.png'],
    phoneSizes: ['h-[450px]', 'h-[450px]'],
  },
];

export function PorscheAppFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Why the Porsche App?
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-16">
            Elevating the EV Ecosystem Experience
          </p>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left - Scrollable phone mockups */}
            <div className="lg:w-[55%] space-y-32">
              {steps.map((step, i) => (
                <div
                  key={step.label}
                  ref={(el) => { sectionRefs.current[i] = el; }}
                  className="flex gap-6 items-center justify-center min-h-[500px]"
                >
                  <img
                    src={step.phones[0]}
                    alt={step.label}
                    className={`${step.phoneSizes[0]} w-auto object-contain rounded-3xl`}
                  />
                  <img
                    src={step.phones[1]}
                    alt={`${step.label} detail`}
                    className={`${step.phoneSizes[1]} w-auto object-contain rounded-2xl`}
                  />
                </div>
              ))}
            </div>

            {/* Right - Sticky navigation */}
            <div className="hidden lg:block lg:w-[45%]">
              <div className="sticky top-1/2 -translate-y-1/2">
                <ul className="space-y-3">
                  {steps.map((step, i) => (
                    <li key={step.label}>
                      <span
                        className={`transition-all duration-300 ${
                          activeStep === i
                            ? 'font-bold text-gray-900 text-xl'
                            : 'text-gray-400 text-lg'
                        }`}
                      >
                        {step.label}
                      </span>
                      {activeStep === i && step.subtitle && (
                        <span className="block text-gray-400 text-sm italic">
                          {step.subtitle}
                        </span>
                      )}
                      {i < steps.length - 1 && (
                        <div className="text-gray-300 text-lg my-1">&#8595;</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
