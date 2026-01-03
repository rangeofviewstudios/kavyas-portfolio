import { NavLink } from "@/components/NavLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About Me", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="nav-pill flex items-center gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className="px-6 py-3 text-base font-medium text-muted-foreground rounded-full transition-colors hover:text-foreground hover:bg-background hover:shadow-sm"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
