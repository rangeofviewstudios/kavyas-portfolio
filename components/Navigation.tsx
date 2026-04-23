import { NavLink } from "@/components/NavLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About Me", href: "/about" },
  { label: "Playground", href: "/playground" },
];

export function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="nav-pill flex items-center gap-1 sm:gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className="px-2 py-1.5 sm:px-6 sm:py-3 text-[13px] sm:text-base font-medium text-black rounded-full transition-colors hover:text-black hover:bg-background hover:shadow-sm whitespace-nowrap"
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="/Kavya_Ray_Resume.pdf"
          download="Kavya_Ray_Resume.pdf"
          className="px-2 py-1.5 sm:px-6 sm:py-3 text-[13px] sm:text-base font-medium text-black rounded-full transition-colors hover:text-black hover:bg-background hover:shadow-sm whitespace-nowrap"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
