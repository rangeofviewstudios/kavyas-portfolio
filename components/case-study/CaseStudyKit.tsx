import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { geist, geistMono } from "./fonts";

/* ============================================================================
   Case study kit: one layout, one type system, the same section order on every case study.

   Fonts   Geist for everything; Geist Mono only for labels, section numbers and data captions.
   Type    Page title clamp(40px,5vw,72px)/600/-0.03em · h2 clamp(30px,3vw,44px)/600/-0.02em
           h3 22px/600 · stats clamp(40px,4vw,56px)/600 · body 18px/1.6 · small 14px
           labels: Geist Mono 12px, uppercase, 0.08em, #75716B
   Layout  One container like the homepage: max 1600px, centred, padding-inline clamp(16px,3vw,48px).
           Everything starts on its left edge. Paragraphs left-aligned, max 72ch. Nothing centred.
           Cards: 40px inner padding, 24px under 900px.
   Spacing 120px between sections (72px under 900px). Header: label → 16 → h2 → 16 → intro → 40 → content.
   Order   00 Overview · 01 Challenge · 02 Research · 03 Mapping · 04 Design · 05 Impact
           06 What I learned · 07 Team & credits · next project
   ============================================================================ */

export const INK = "#161514";
export const MUTED = "#75716B";
export const LINE = "#E1E6DB";

export const CONTAINER = "mx-auto w-full max-w-[1600px] px-[clamp(16px,3vw,48px)]";
export const MONO = "font-[family-name:var(--font-geist-mono)]";
export const LABEL = `${MONO} text-xs uppercase tracking-[0.08em] text-[#75716B]`;
export const H2 = "text-[clamp(30px,3vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161514]";
export const H3 = "text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#161514]";
export const STAT = "text-[clamp(40px,4vw,56px)] font-semibold leading-none tracking-[-0.03em] tabular-nums";
export const BODY = "text-lg leading-[1.6] font-normal text-[#161514]";
export const SMALL = "text-sm leading-[1.5] text-[#75716B]";
/** Card shell: full container width, 40px inner padding (24px under 900px) */
export const CARD = "rounded-2xl border border-[#E1E6DB] bg-white p-10 max-[900px]:p-6";

/**
 * Wraps a case study's <main>: switches everything inside to Geist. The site styles headings with
 * --font-serif and text with --font-sans, so both are pointed at Geist here. Nav and footer sit outside
 * and keep the site-wide font, like on every other page.
 */
export function CaseStudyMain({ children }: { children: ReactNode }) {
  const style = {
    fontFamily: "var(--font-geist), system-ui, sans-serif",
    "--font-sans": "var(--font-geist)",
    "--font-serif": "var(--font-geist)",
  } as CSSProperties;
  return (
    <main className={`${geist.variable} ${geistMono.variable} pb-[120px] text-[#161514] antialiased max-[900px]:pb-[72px]`} style={style}>
      {children}
    </main>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`${LABEL} ${className}`}>{children}</p>;
}

/** Body paragraph: left-aligned, max 72ch */
export function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`max-w-[72ch] ${BODY} ${className}`}>{children}</p>;
}

/* ---------- Section ---------- */

/**
 * Numbered section: "02 · RESEARCH" → 16px → h2 → 16px → one intro sentence → 40px → content.
 * 120px from the previous section (72px under 900px).
 */
export function Section({
  id,
  n,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  n: number;
  label: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`${CONTAINER} scroll-mt-28 pt-[120px] max-[900px]:pt-[72px]`}>
      <Label>
        {String(n).padStart(2, "0")} · {label}
      </Label>
      <h2 className={`mt-4 ${H2}`}>{title}</h2>
      {intro && <p className={`mt-4 max-w-[72ch] ${BODY} text-[#45423E]`}>{intro}</p>}
      {children && <div className="mt-10 space-y-10">{children}</div>}
    </section>
  );
}

/** h3 inside a section */
export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className={H3}>{children}</h3>;
}

/** Small caption under an image, chart or map */
export function Caption({ children }: { children: ReactNode }) {
  return <p className={`mt-3 ${SMALL}`}>{children}</p>;
}

/* ---------- 00 Overview ---------- */

export function Overview({
  tags,
  title,
  badge,
  facts,
  image,
  summary,
  news,
}: {
  tags: string[];
  title: string;
  /** Status shown as the first tag, e.g. "shipped" → dark pill with a green dot */
  badge?: "shipped";
  facts: { label: string; value: ReactNode }[];
  image: { src: string; alt: string; position?: string };
  /** PROBLEM / WHAT I DID / IMPACT */
  summary: { label: string; text: ReactNode }[];
  /** Dark news banner under the summary cards */
  news?: { kicker: string; title: string; text: string; cta: string; href: string };
}) {
  return (
    <section id="overview" aria-label="Overview" className={`${CONTAINER} pt-[140px] max-[900px]:pt-[112px]`}>
      <Label>00 · Overview</Label>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Status and disciplines">
        {badge === "shipped" && (
          <li className="inline-flex items-center gap-1.5 rounded-full border border-[#141A10] bg-[#141A10] px-3 py-1 text-sm text-white">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#7CF0A6]" />
            Shipped
          </li>
        )}
        {tags.map((t) => (
          <li key={t} className="rounded-full border border-[#E1E6DB] px-3 py-1 text-sm text-[#161514]">
            {t}
          </li>
        ))}
      </ul>
      <h1 className="mt-6 max-w-[20ch] text-[clamp(40px,5vw,72px)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#161514]">{title}</h1>

      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-[#E1E6DB] py-7 lg:grid-cols-5">
        {facts.map((f) => (
          <div key={f.label} className="min-w-0">
            <dt className={LABEL}>{f.label}</dt>
            <dd className="mt-2 text-lg leading-[1.5] text-[#161514]">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-10 aspect-[2/1] overflow-hidden rounded-2xl bg-[#EEF2EA] max-[900px]:aspect-[4/3]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 1600px) 100vw, 1504px"
          className="object-cover"
          style={{ objectPosition: image.position ?? "50% 50%" }}
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {summary.map((s) => (
          <div key={s.label} className={CARD}>
            <Label>{s.label}</Label>
            <p className={`mt-4 ${BODY}`}>{s.text}</p>
          </div>
        ))}
      </div>

      {news && (
        <aside aria-label="In the news" className="mt-6 rounded-2xl bg-[#161514] p-8 text-white">
          <p className={`${MONO} text-xs uppercase tracking-[0.08em] text-white/60`}>{news.kicker}</p>
          <p className="mt-3 max-w-[72ch] text-lg leading-[1.6] text-white/85">
            <strong className="font-semibold text-white">{news.title}</strong> {news.text}
          </p>
          <a
            href={news.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-[#F5F3EC] px-5 py-3 text-lg font-medium text-[#161514] no-underline transition-colors hover:bg-white"
          >
            {news.cta}
          </a>
        </aside>
      )}
    </section>
  );
}

/* ---------- Quote ---------- */

export function Quote({ text, by }: { text: ReactNode; by: string }) {
  return (
    <figure className="flex gap-4">
      <span aria-hidden="true" className="select-none text-[48px] font-semibold leading-[0.8] text-[#75716B]">
        &ldquo;
      </span>
      <div className="max-w-[72ch]">
        <blockquote className="text-[22px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#161514]">{text}</blockquote>
        <figcaption className={`mt-3 ${LABEL}`}>{by}</figcaption>
      </div>
    </figure>
  );
}

/* ---------- Insight card: what we saw → what it meant → what we designed ---------- */

export function InsightCard({ n, saw, meant, designed }: { n: number; saw: ReactNode; meant: ReactNode; designed: ReactNode }) {
  const steps: [string, ReactNode][] = [
    ["What we saw", saw],
    ["What it meant", meant],
    ["What we designed", designed],
  ];
  return (
    <article className="overflow-hidden rounded-2xl border border-[#E1E6DB] bg-white">
      {/* max-w-none: this label carries the divider, so it must span the card (globals.css caps paragraph width) */}
      <p className={`max-w-none border-b border-[#E1E6DB] px-10 py-4 max-[900px]:px-6 ${LABEL}`}>Insight {String(n).padStart(2, "0")}</p>
      <div className="grid md:grid-cols-3">
        {steps.map(([label, text], i) => (
          <div
            key={label}
            className={`relative p-10 max-[900px]:p-6 ${i > 0 ? "border-[#E1E6DB] max-md:border-t md:border-l" : ""} ${i === 2 ? "bg-[#EEF2EA]" : ""}`}
          >
            <p className={`flex items-center gap-2 ${LABEL}`}>
              {label}
              {i < 2 && <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 max-md:rotate-90" strokeWidth={2} />}
            </p>
            <p className={`mt-4 ${BODY}`}>{text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

/* ---------- Finding card: scannable insight → design decision ---------- */

/** Accent green for "So we designed…" lines */
export const ACCENT_GREEN = "#3F5A2E";

/**
 * One finding, built to scan: number, bold headline (8 words max), one evidence line (20 words max),
 * a divider, then the design decision in accent green. Tinted so the set stands out from body text.
 * Lay three out with `grid md:grid-cols-3`.
 */
export function FindingCard({ n, headline, evidence, designed }: { n: number; headline: string; evidence: string; designed: string }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-[#EEF2EA] p-8 max-[900px]:p-6">
      <Label>Insight {String(n).padStart(2, "0")}</Label>
      <h4 className="mt-4 text-2xl font-semibold leading-[1.2] tracking-[-0.015em] text-[#161514]">{headline}</h4>
      <p className="mt-3 text-lg leading-[1.6] text-[#75716B]">{evidence}</p>
      <div className="mt-auto pt-6">
        <div className="border-t border-[#C9D3BE] pt-5">
          <p className={LABEL}>→ So we designed…</p>
          <p className="mt-2 text-lg font-medium leading-[1.5]" style={{ color: ACCENT_GREEN }}>
            {designed}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ---------- Learning card: what I saw → what I learned ---------- */

export function LearningCard({ saw, learned }: { saw: ReactNode; learned: ReactNode }) {
  return (
    <article className={CARD}>
      <Label>What I saw</Label>
      <p className={`mt-3 ${BODY}`}>{saw}</p>
      <Label className="mt-8 flex items-center gap-2">
        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 rotate-90" strokeWidth={2} />
        What I learned
      </Label>
      <p className={`mt-3 ${BODY}`}>{learned}</p>
    </article>
  );
}

/* ---------- Stat ---------- */

export function Stat({ value, label, color = INK }: { value: string; label: ReactNode; color?: string }) {
  return (
    <div>
      <p className={STAT} style={{ color }}>
        {value}
      </p>
      <p className={`mt-3 ${MONO} text-xs uppercase tracking-[0.08em] text-[#75716B]`}>{label}</p>
    </div>
  );
}

/* ---------- Next project ---------- */

/** Closing line, then the next case study (pulled from lib/projects.ts) and an "All work" link. Left-aligned. */
export function NextProject({ slug, closing }: { slug: string; closing?: ReactNode }) {
  const p = projects.find((x) => x.href === `/case-study/${slug}`);
  if (!p) return null;
  return (
    <section aria-label="Next project" className={`${CONTAINER} pt-[120px] max-[900px]:pt-[72px]`}>
      {closing && <p className="mb-10 max-w-[30ch] text-[clamp(30px,3vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161514]">{closing}</p>}
      <Label>Next project</Label>
      <Link
        href={p.href}
        className="group mt-4 grid overflow-hidden rounded-2xl border border-[#E1E6DB] bg-white no-underline transition-colors hover:border-[#C9D3BE] md:grid-cols-2"
      >
        <div className="relative aspect-[16/10]">
          <Image src={p.cardImage} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 750px" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-6 p-10 max-[900px]:p-6">
          <div>
            <p className="text-lg font-semibold text-[#161514]">{p.client}</p>
            <p className="mt-3 text-[clamp(30px,3vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161514]">{p.headline}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-lg font-medium text-[#161514]">
            Read case study
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
      <Link
        href="/#work"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E1E6DB] px-5 py-3 text-lg font-medium text-[#161514] no-underline transition-colors hover:bg-[#EEF2EA]"
      >
        <ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" />
        All work
      </Link>
    </section>
  );
}
