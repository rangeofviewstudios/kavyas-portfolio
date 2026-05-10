'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About Me", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Logo — fixed top-left on all sizes */}
      <Link href="/" className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
        <Image
          src="/kavlogo.png"
          alt="Kavya Ray"
          width={44}
          height={44}
          className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-sm"
          priority
        />
      </Link>

      {/* Mobile nav: compact pill centered */}
      <nav className="sm:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div className="flex items-center gap-0 px-1.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
          <Link href="/#work" className="text-white font-medium text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200">
            Work
          </Link>
          <Link href="/about" className="text-white font-medium text-xs px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200">
            About
          </Link>
          <a
            href="/Kavya_Ray_Resume.pdf"
            download="Kavya_Ray_Resume.pdf"
            className="text-white font-medium text-xs px-3 py-1.5 rounded-full bg-white/15 border border-white/20 hover:bg-white/25 transition-all duration-200"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Desktop nav: pill centered */}
      <nav className="hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
          {navItems.map((item) => {
            const isActive = item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname?.startsWith(item.href.split('#')[0] + '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white font-medium text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-black/20 border border-black/10'
                    : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/Kavya_Ray_Resume.pdf"
            download="Kavya_Ray_Resume.pdf"
            className="text-white font-medium text-sm px-5 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  );
}
