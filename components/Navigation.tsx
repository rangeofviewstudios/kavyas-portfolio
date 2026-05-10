'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About Me", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
      <div className="flex items-center gap-0.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
        {navItems.map((item) => {
          const isActive = item.href === '/'
            ? pathname === '/'
            : pathname === item.href || pathname?.startsWith(item.href.split('#')[0] + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white font-medium text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 ${
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
          className="text-white font-medium text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 hover:bg-white/10"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
