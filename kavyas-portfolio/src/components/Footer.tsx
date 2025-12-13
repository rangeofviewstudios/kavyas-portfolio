import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-16 px-6 relative z-10" style={{ backgroundColor: '#E0DFDE' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          {/* Left - Let's Connect */}
          <h2 className="text-5xl font-semibold" style={{ color: '#BBBBBB' }}>
            Let's<br />Connect!
          </h2>

          {/* Right - Links */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:kavyaray77@gmail.com"
              className="flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
              style={{ color: '#BBBBBB' }}
            >
              Email
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
              style={{ color: '#BBBBBB' }}
            >
              LinkedIn
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <Link
              to="/resume"
              className="flex items-center gap-2 text-lg transition-opacity hover:opacity-70"
              style={{ color: '#BBBBBB' }}
            >
              Resume
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px mb-12" style={{ backgroundColor: '#BBBBBB' }}></div>

        {/* Bottom - Large Name */}
        <div className="text-center -mb-16">
          <h1
            className="font-bold tracking-wider"
            style={{
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              color: '#BBBBBB',
              lineHeight: '0.9',
              letterSpacing: '0.05em'
            }}
          >
            KAVYA RAY
          </h1>
        </div>
      </div>
    </footer>
  );
}
