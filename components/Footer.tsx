import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="pt-12 sm:pt-16 px-6 relative z-10 overflow-hidden"
      style={{ backgroundColor: '#343F28' }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10 sm:mb-12">
          {/* Left - Let's Connect */}
          <h2 className="text-4xl sm:text-5xl font-semibold" style={{ color: '#FFFFFF' }}>
            Let's<br />Connect!
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
              href="https://www.linkedin.com/in/kavya-ray/"
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

        {/* Bottom - Large Name. line-height ~0.7 trims the line box to the cap height, so the baseline sits on the footer's bottom edge */}
        <div className="text-center">
          <h1
            className="font-bold tracking-wider whitespace-nowrap"
            style={{
              fontSize: 'clamp(3rem, calc((100vw - 3rem) / 6.2), 12rem)',
              color: '#FFFFFF',
              lineHeight: '0.7',
              letterSpacing: '0.05em',
            }}
          >
            KAVYA RAY
          </h1>
        </div>
      </div>
    </footer>
  );
}
