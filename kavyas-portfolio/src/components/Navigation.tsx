import { NavLink } from "@/components/NavLink";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/#work" },
  { label: "About Me", to: "/about" },
  { label: "Resume", to: "/resume" },
];

export function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="nav-pill flex items-center gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-full transition-colors hover:text-foreground hover:bg-background hover:shadow-sm"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
