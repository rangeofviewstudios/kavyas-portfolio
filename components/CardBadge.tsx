import type { ReactNode } from "react";

export type CardBadgeVariant = "nda" | "shipped" | "award";

const BASE = "absolute left-2.5 top-2.5 z-[1] inline-flex items-center gap-1.5 rounded-md px-[9px] py-1 text-[11px]";

const VARIANTS: Record<CardBadgeVariant, { className: string; label: string; icon?: ReactNode }> = {
  // Cream like the award label, so it stands out on dark cover images (e.g. UBS)
  nda: { className: "bg-[#F5F3EC] text-[#141A10] font-medium", label: "NDA protected" },
  shipped: {
    className: "bg-[#141A10] text-white",
    label: "Shipped",
    icon: <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CF0A6]" />,
  },
  award: {
    className: "bg-[#F5F3EC] text-[#141A10] font-medium",
    label: "European Product Design Award · Winner",
    icon: (
      // Trophy, 12px
      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M17 6h2.5a1.5 1.5 0 0 1 1.5 1.5A3.5 3.5 0 0 1 17.5 11M7 6H4.5A1.5 1.5 0 0 0 3 7.5 3.5 3.5 0 0 0 6.5 11" />
      </svg>
    ),
  },
};

/**
 * Small label pinned to the top-left of a work card's image. `children` overrides the variant's default text.
 * `inline` drops the corner positioning so it can sit in normal flow (e.g. a case study hero).
 */
export function CardBadge({ variant, children, inline = false }: { variant: CardBadgeVariant; children?: ReactNode; inline?: boolean }) {
  const v = VARIANTS[variant];
  // Inline (case study hero): normal flow, and 12px so it sits on the case study type scale
  const base = inline ? BASE.replace("absolute left-2.5 top-2.5 z-[1] ", "").replace("text-[11px]", "text-xs") : BASE;
  return (
    <span className={`${base} ${v.className}`}>
      {v.icon}
      {children ?? v.label}
    </span>
  );
}
