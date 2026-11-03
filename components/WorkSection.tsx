'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeAbout } from "@/components/HomeAbout";
import { RotatingWord } from "@/components/RotatingWord";
import { MomentsSection } from "@/components/MomentsSection";

type Project = {
  id: number;
  isNda: boolean;
  client: string;
  title: string;
  /** Outcome-focused one-liner shown as the card title. */
  headline: string;
  tags: string[];
  /** Up to three real numbers or results from the case study. */
  metrics?: { value: string; label: string }[];
  href: string;
  alt: string;
  /** Cover image. Leave empty to render the branded placeholder instead. */
  cardImage?: string;
  /** object-position for the cover crop — the card art sits on the right side. */
  focus?: string;
  /** Zoom into the artwork; also hides the rounded corners baked into the cards. */
  zoom?: number;
  /** No case study page yet: renders without a link. */
  comingSoon?: boolean;
  placeholder?: { bg: string; fg: string; logo?: string; wordmark?: string };
};

const projects: Project[] = [
  {
    id: 6,
    isNda: false,
    client: "FIFA",
    title: "FIFA",
    headline: "Guiding ~300K World Cup fans through Atlanta’s last mile",
    tags: ["Wayfinding", "Service Design", "Field Research"],
    metrics: [
      { value: "300K", label: "spectators on the route" },
      { value: "8", label: "World Cup matches" },
      { value: "Live", label: "installed downtown ATL" },
    ],
    href: "/case-study/fifa",
    alt: "FIFA World Cup 26 wayfinding flags pointing to Atlanta Stadium and Fan Fest",
    cardImage: "/images/fifa-flags.jpg",
    focus: "50% 50%",
    zoom: 1,
  },
  {
    id: 7,
    isNda: false,
    client: "Range of View Studios",
    title: "Brand & Visual Identity",
    headline: "Growing a music collective into an Atlanta creative studio",
    tags: ["Brand Identity", "Visual Systems", "Web"],
    href: "/case-study/rov",
    alt: "Range of View Studios — Brand & Visual Identity",
    cardImage: "/images/rovcard-ember.jpg",
    focus: "50% 50%",
    zoom: 1,
  },
  {
    id: 8,
    isNda: false,
    client: "Solace",
    title: "Solace",
    headline: "One record that follows refugees across every organization",
    tags: ["Service Design", "Healthcare", "Product Ecosystem"],
    metrics: [
      { value: "4", label: "connected tools" },
      { value: "1", label: "record per person" },
      { value: "3", label: "person team" },
    ],
    href: "/case-study/solace",
    alt: "Solace case study",
    cardImage: "/images/solacecard.png",
    focus: "50% 50%",
    zoom: 1,
  },
  {
    id: 1,
    isNda: true,
    client: "UBS × SCADpro",
    title: "The Future of Banking",
    headline: "Researching a north-star UBS.com for the Swiss market",
    tags: ["Fintech", "UX Research", "Usability Testing"],
    metrics: [
      { value: "70", label: "research responses" },
      { value: "40", label: "Swiss participants" },
      { value: "30", label: "Gen Z participants" },
    ],
    href: "/case-study/ubs",
    alt: "UBS - The Future of Banking",
    cardImage: "/images/ubscard.png",
    zoom: 1.32,
  },
  {
    id: 2,
    isNda: false,
    client: "Startup Competition",
    title: "LOOMA Smart Glasses",
    headline: "AR glasses that help people with Alzheimer’s recognize loved ones",
    tags: ["Wearables", "AR", "Accessibility"],
    metrics: [
      { value: "38M+", label: "people with Alzheimer’s worldwide" },
    ],
    href: "/case-study/looma",
    alt: "LOOMA - Smart Glasses",
    cardImage: "/images/loomacard.png",
    focus: "100% 50%",
  },
  {
    id: 3,
    isNda: true,
    client: "Lowe's × SCADpro",
    title: "Garden Center Redesign",
    headline: "Finding the friction in Lowe’s garden center, for shoppers and staff",
    tags: ["Retail", "UX Research", "Journey Mapping"],
    href: "/case-study/lowes",
    alt: "Lowes - Garden Center Redesign",
    cardImage: "/images/lowescard2.png",
  },
  {
    id: 4,
    isNda: false,
    client: "Porsche × SCAD",
    title: "The Future of Electric Vehicles",
    headline: "Designing the in-car experience for Porsche’s next EV drivers",
    tags: ["Automotive", "HMI", "Mobile App"],
    metrics: [
      { value: "160+", label: "survey responses" },
      { value: "30+", label: "driver interviews" },
      { value: "4", label: "brands benchmarked" },
    ],
    href: "/case-study/porsche",
    alt: "Porsche - The Future of Electric Vehicles",
    cardImage: "/images/porschecard.png",
    zoom: 1.22,
  },
  {
    id: 5,
    isNda: false,
    client: "AmorePacific Brand Challenge",
    title: "Aestura — The Essence Edit",
    headline: "Launching a Korean skincare brand in the U.S. through phygital pop-ups",
    tags: ["Brand Strategy", "Campaign", "Gen Z"],
    metrics: [
      { value: "Semi-finalist", label: "AmorePacific global challenge" },
    ],
    href: "/case-study/aestura",
    alt: "Aestura - The Essence Edit",
    cardImage: "/images/aesturacard.png",
    focus: "96% 50%",
  },
];

const ROTATE_MS = 4000;
/* The left square rotates through the first few projects only: FIFA, ROV, Solace. */
const FEATURED_COUNT = 3;

function ProjectVisual({ project, size }: { project: Project; size: "square" | "tile" }) {
  if (project.cardImage) {
    return (
      <img
        src={project.cardImage}
        alt={project.alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: project.focus ?? "92% 50%", transform: `scale(${project.zoom ?? 1.08})` }}
      />
    );
  }

  const p = project.placeholder!;
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: p.bg }}>
      {p.logo ? (
        <img
          src={p.logo}
          alt={project.alt}
          className={`w-auto object-contain ${size === "square" ? "h-20 lg:h-24" : "h-12 sm:h-14"}`} loading="lazy" decoding="async" />
      ) : (
        <span
          className={`font-semibold tracking-tight ${size === "square" ? "text-6xl lg:text-7xl" : "text-4xl sm:text-5xl"}`}
          style={{ color: p.fg }}
        >
          {p.wordmark}
        </span>
      )}
    </div>
  );
}

export function WorkSection() {
  // `auto` cycles through the featured three; `hovered` (any tile) overrides it while the pointer is on the grid
  const [auto, setAuto] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  const paused = hovered !== null;
  const active = hovered ?? auto;
  const current = projects[active] ?? projects[0];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Auto-rotate the sticky square; hovering a tile pins it to that project
  useEffect(() => {
    if (paused || reducedMotion || FEATURED_COUNT < 2) return;
    const t = setTimeout(() => setAuto((a) => (a + 1) % FEATURED_COUNT), ROTATE_MS);
    return () => clearTimeout(t);
  }, [auto, paused, reducedMotion]);

  const selectFeatured = (index: number) => {
    setHovered(null);
    setAuto(index);
  };

  return (
    <section id="work" className="pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1600px] lg:px-20">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.045em] leading-[0.95] text-[#FFF3DF]">
            Experiences I&apos;ve{" "}
            <RotatingWord words={['designed.', 'researched.', 'strategized.', 'prototyped.', 'tested.']} lineHeight={1.3} className="font-normal text-[#FFF3DF]/60" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12 items-start">
          {/* Left — sticky auto-rotating square */}
          <div className="hidden lg:block sticky top-24">
            <ShowcaseSquare
              projects={projects}
              current={current}
              active={active}
              paused={paused || reducedMotion}
              onSelect={selectFeatured}
            />
          </div>

          {/* Right — scrollable 2-column grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8"
            onMouseLeave={() => setHovered(null)}
          >
            {projects.map((project, index) => (
              <ProjectTile
                key={project.id}
                project={project}
                isActive={index === active}
                onFocus={() => setHovered(index)}
              />
            ))}
          </div>
        </div>

        <MomentsSection />
      </div>

      <div className="container mx-auto">
        <HomeAbout />
      </div>
    </section>
  );
}

function ShowcaseSquare({
  projects,
  current,
  active,
  paused,
  onSelect,
}: {
  projects: Project[];
  current: Project;
  active: number;
  paused: boolean;
  onSelect: (index: number) => void;
}) {
  const body = (
    <div className="relative h-[calc(100svh-8rem)] min-h-[520px] rounded-3xl overflow-hidden bg-black/20 shadow-2xl">
      {projects.map((project, index) => (
        <div
          key={project.id}
          aria-hidden={index !== active}
          className={`absolute inset-0 transition-all duration-700 ease-out ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"}`}
        >
          <ProjectVisual project={project} size="square" />
        </div>
      ))}

      {/* Progress segments */}
      <div className="absolute top-5 left-5 right-5 flex gap-1.5 z-10">
        {projects.slice(0, FEATURED_COUNT).map((project, index) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Show ${project.title}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(index);
            }}
            className="relative h-[3px] flex-1 rounded-full bg-white/30 overflow-hidden"
          >
            {active < FEATURED_COUNT && index < active && <span className="absolute inset-0 bg-white" />}
            {index === active && (
              <span
                key={`${active}-${paused}`}
                className="absolute inset-0 bg-white origin-left"
                style={paused ? undefined : { animation: `workProgress ${ROTATE_MS}ms linear forwards` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-8 pt-32 bg-gradient-to-t from-black/85 via-black/55 to-transparent">
        <div className="flex items-center gap-3 text-xs text-white/70 mb-2 tabular-nums">
          {active < FEATURED_COUNT && (
            <>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(FEATURED_COUNT).padStart(2, "0")}
              </span>
              <span className="h-3 w-px bg-white/40" />
            </>
          )}
          <span>{current.client}</span>
          {current.isNda && <span className="ml-auto">NDA Protected</span>}
        </div>
        <h3 className="text-2xl xl:text-3xl font-semibold text-white leading-tight text-balance max-w-xl">
          {current.headline}
        </h3>
        <div className="mt-5 flex items-end justify-between gap-6">
          <dl className="flex flex-wrap gap-x-8 gap-y-3 min-w-0">
            {(current.metrics ?? []).map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-xl xl:text-2xl font-semibold text-white tabular-nums leading-none">{m.value}</dd>
                <dd className="mt-1 text-xs text-white/65">{m.label}</dd>
              </div>
            ))}
          </dl>
          {current.comingSoon ? (
            <span className="shrink-0 px-4 py-2 rounded-full text-xs font-medium bg-white/15 text-white backdrop-blur">
              Coming soon
            </span>
          ) : (
            <span className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-[#2A2A2A]">
              View Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return current.comingSoon ? (
    body
  ) : (
    <Link href={current.href} className="group block no-underline">
      {body}
    </Link>
  );
}

function ProjectTile({
  project,
  isActive,
  onFocus,
}: {
  project: Project;
  isActive: boolean;
  onFocus: () => void;
}) {
  const pillRef = useRef<HTMLSpanElement>(null);
  const inner = (
    <div
      className={`h-full p-2.5 sm:p-3 rounded-3xl bg-[#1E2318]/55 backdrop-blur-sm ring-1 transition-[box-shadow,background-color] duration-300 group-hover:bg-[#1E2318]/70 ${isActive ? "ring-white/10 lg:ring-2 lg:ring-white/80" : "ring-white/10"}`}
    >
      <div
        className="relative aspect-square rounded-2xl overflow-hidden"
        onMouseMove={(e) => {
          const pill = pillRef.current;
          if (!pill) return;
          const rect = e.currentTarget.getBoundingClientRect();
          pill.style.left = `${e.clientX - rect.left}px`;
          pill.style.top = `${e.clientY - rect.top}px`;
        }}
      >
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <ProjectVisual project={project} size="tile" />
        </div>
        {!project.comingSoon && (
          <span
            ref={pillRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#343F28] shadow-lg ring-2 ring-[#343F28]">
              Click me
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </span>
        )}
        {(project.isNda || project.comingSoon) && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/45 text-white backdrop-blur">
            {project.comingSoon ? "Coming soon" : "NDA Protected"}
          </span>
        )}
      </div>
      <div className="px-3 pt-5 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs text-white/60 mb-1">{project.client}</p>
            <h3 className="text-base sm:text-lg font-medium text-foreground leading-snug">
              {project.headline}
            </h3>
          </div>
          {!project.comingSoon && (
            <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          )}
        </div>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full px-2.5 py-1 text-[11px] leading-none text-white/75 ring-1 ring-white/15">
              {tag}
            </li>
          ))}
        </ul>
        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-base sm:text-lg font-semibold text-foreground tabular-nums leading-none truncate">{m.value}</dd>
                <dd className="mt-1 text-[11px] leading-snug text-white/60">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );

  return (
    <article onMouseEnter={onFocus} onFocus={onFocus}>
      {project.comingSoon ? (
        <div className="group h-full cursor-default">{inner}</div>
      ) : (
        <Link href={project.href} className="group block h-full no-underline">
          {inner}
        </Link>
      )}
    </article>
  );
}
