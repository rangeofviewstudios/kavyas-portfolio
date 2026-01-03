'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Check if it's the home link
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Check if it's a hash link
      if (href.includes('#')) {
        e.preventDefault();
        const [path, hash] = href.split('#');

        // If we're already on the page, just scroll
        if (!path || pathname === path) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // Navigate then scroll
          window.location.href = href;
        }
      }
    };

    const isActive = pathname === href || pathname?.startsWith(href + '/');

    return (
      <Link
        ref={ref}
        href={href}
        onClick={handleClick}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
