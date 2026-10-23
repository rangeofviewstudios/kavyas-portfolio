'use client';

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, Route, User, X } from "lucide-react";
import "@fontsource/michroma";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import { CountUp, Reveal, useInView, usePrefersReducedMotion } from "./shared";

/* FIFA deck palette, sampled from the original slides. */
export const F = {
    pitch: "#2E6B3E",
    deep: "#1E4D2B",
    mint: "#A7D4AE",
    blue: "#3674B9",
    sky: "#67BFD6",
    ice: "#DCEAF6",
    red: "#B4303F",
};

const display = { fontFamily: '"Michroma", "DM Sans", sans-serif' } as const;
const impact = { fontFamily: '"Barlow Condensed", "DM Sans", sans-serif' } as const;
/* Michroma's percent sign is hard to read, so the % borrows the body face */
const percentFont = { fontFamily: '"DM Sans", sans-serif', fontStyle: "normal", fontWeight: 700 } as const;

/* ---------- Chevron motif ---------- */

function chevronPoints(x: number, y: number, w: number, h: number, t: number) {
    return `${x},${y} ${x + t},${y} ${x + w},${y + h / 2} ${x + t},${y + h} ${x},${y + h} ${x + w - t},${y + h / 2}`;
}

/* The stacked chevrons that run through the whole deck. */
export function ChevronStack({
    primary,
    secondary,
    className = "",
    flip = false,
}: {
    primary: string;
    secondary: string;
    className?: string;
    flip?: boolean;
}) {
    return (
        <svg viewBox="0 0 220 320" className={className} aria-hidden="true">
            {/* Mirrored inside the SVG: a CSS scaleX on the element itself stalls some browsers' paint */}
            <g transform={flip ? "translate(220 0) scale(-1 1)" : undefined}>
                <polygon points="0,0 70,0 150,80 80,80" fill={primary} opacity="0.55" />
                <polygon points={chevronPoints(0, 90, 170, 140, 70)} fill={secondary} />
                <polygon points={chevronPoints(70, 90, 150, 140, 70)} fill={primary} />
                <polygon points="0,320 70,320 150,240 80,240" fill={primary} opacity="0.55" />
            </g>
        </svg>
    );
}

/* The little ››››› that sits above each slide title. */
export function Arrows({ color, className = "" }: { color: string; className?: string }) {
    return (
        <svg viewBox="0 0 60 12" className={`cs-anim h-3 w-[60px] ${className}`} aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
                <polyline
                    key={i}
                    points={`${i * 12 + 2},1 ${i * 12 + 9},6 ${i * 12 + 2},11`}
                    fill="none"
                    stroke={color}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ animation: `cs-chevron 2.4s ease-in-out ${i * 0.15}s infinite` }}
                />
            ))}
        </svg>
    );
}

/* ---------- Hero ---------- */

export function FifaHero() {
    return (
        <section className="cs-anim relative w-full overflow-hidden bg-white">
            <div className="relative lg:min-h-[560px]">
                {/* Photo, cut on the same diagonal as slide one */}
                <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
                    <div
                        className="absolute inset-0 lg:[clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]"
                        style={{ background: F.pitch }}
                    >
                        <img
                            src="/images/fifa/stadium.webp"
                            alt="Mercedes-Benz Stadium in Atlanta, fans arriving on match day"
                            className="absolute inset-0 h-full w-full object-cover lg:left-[8%] lg:w-[92%]"
                            style={{ animation: "cs-kenburns 22s ease-in-out infinite alternate" }}
                            fetchPriority="high"
                        />
                    </div>
                    {/* Green slab and white keyline that follow the diagonal */}
                    <div
                        className="absolute inset-0 hidden lg:block"
                        style={{ clipPath: "polygon(30% 0, 39% 0, 9% 100%, 0 100%)", background: F.pitch }}
                    />
                    <div
                        className="absolute inset-0 hidden lg:block"
                        style={{ clipPath: "polygon(44% 0, 44.6% 0, 14.6% 100%, 14% 100%)", background: "#fff" }}
                    />
                </div>

                <div className="relative z-10 flex items-center px-4 py-10 sm:px-6 lg:min-h-[560px] lg:w-[48%] lg:py-0">
                    <ChevronStack
                        primary={F.pitch}
                        secondary={F.mint}
                        className="pointer-events-none absolute -left-4 top-1/2 hidden h-72 -translate-y-1/2 lg:block"
                    />
                    <div className="relative mx-auto w-full max-w-6xl lg:pl-32 xl:pl-40">
                        <Arrows color={F.pitch} className="mb-4 lg:hidden" />
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm" style={{ color: F.pitch }}>
                            FIFA World Cup 26 · Atlanta
                        </p>
                        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl" style={{ color: F.pitch }}>
                            The Epicenter
                            <br />
                            of Soccer
                        </h2>
                        <p className="mt-4 max-w-xs text-base text-gray-900 sm:text-lg">
                            Where talent, momentum, and global attention converge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Why Atlanta: three expanding panels ---------- */

const PILLARS = [
    {
        n: 1,
        title: "Atlanta United's Impact",
        body: "Championship success and record-breaking crowds have turned soccer into a defining part of Atlanta's identity.",
        bg: "/images/fifa/atlutd-stadium.webp",
        bgPos: "50% 62%",
        player: "/images/fifa/player-atlutd.webp",
        playerAlt: "Atlanta United player controlling the ball",
    },
    {
        n: 2,
        title: "Institutional Growth",
        body: "With an NWSL expansion team and U.S. Soccer's new headquarters, Atlanta is building the future of the sport.",
        bg: "/images/fifa/nwsl-hq.webp",
        bgPos: "50% 50%",
        player: "/images/fifa/player-nwsl.webp",
        playerAlt: "Women's national team player striking a ball",
    },
    {
        n: 3,
        title: "Passionate Fan Culture",
        body: "Supporter groups and diverse communities have created one of the most electric soccer atmospheres in the country.",
        bg: "/images/fifa/fans.webp",
        bgPos: "50% 40%",
        player: "/images/fifa/player-fan.webp",
        playerAlt: "Player celebrating a goal",
    },
];

export function PillarsExplorer() {
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col gap-3 lg:h-[560px] lg:flex-row">
            {PILLARS.map((p, i) => {
                const isActive = i === active;
                return (
                    <div
                        key={p.n}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive}
                        aria-label={`${p.title}`}
                        onClick={() => setActive(i)}
                        onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                        onFocus={() => setActive(i)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActive(i);
                            }
                        }}
                        className={`relative cursor-pointer overflow-hidden rounded-2xl bg-black outline-none ring-offset-2 transition-[height,flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 lg:h-auto lg:[flex:var(--f)] ${
                            isActive ? "h-[440px]" : "h-[84px]"
                        }`}
                        style={{ "--f": isActive ? "4.2 1 0%" : "1 1 0%" } as CSSProperties}
                    >
                        <img
                            src={p.bg}
                            alt=""
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                            style={{
                                objectPosition: p.bgPos,
                                filter: isActive ? "brightness(0.42)" : "brightness(0.3) grayscale(0.6)",
                                transform: isActive ? "scale(1.04)" : "scale(1.12)",
                            }}
                        />

                        {/* Collapsed label */}
                        <div
                            className="absolute inset-0 flex items-center gap-4 px-5 transition-opacity duration-300 lg:flex-col lg:items-start lg:justify-end lg:px-6 lg:pb-8"
                            style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                        >
                            <span className="text-5xl font-extrabold leading-none lg:text-7xl" style={{ ...impact, color: F.mint }}>
                                {p.n}
                            </span>
                            <span
                                className="text-lg font-bold uppercase leading-tight text-white lg:text-xl lg:[writing-mode:vertical-rl] lg:rotate-180"
                                style={impact}
                            >
                                {p.title}
                            </span>
                        </div>

                        {/* Expanded content */}
                        <div
                            className="absolute inset-0 transition-opacity duration-500"
                            style={{ opacity: isActive ? 1 : 0, transitionDelay: isActive ? "250ms" : "0ms", pointerEvents: isActive ? "auto" : "none" }}
                        >
                            <span
                                className="absolute bottom-0 right-[18%] translate-y-[8%] text-[15rem] font-extrabold leading-none sm:text-[20rem] lg:right-[22%] lg:text-[26rem]"
                                style={{ ...impact, color: F.mint, opacity: 0.92 }}
                                aria-hidden="true"
                            >
                                {p.n}
                            </span>
                            <img
                                src={p.player}
                                alt={p.playerAlt}
                                loading="lazy"
                                className="absolute bottom-0 right-2 h-[78%] w-auto max-w-[55%] object-contain object-bottom transition-transform duration-700 lg:right-6 lg:h-[88%]"
                                style={{ transform: isActive ? "translateY(0)" : "translateY(40px)" }}
                            />
                            <div className="absolute left-0 top-0 max-w-[62%] p-6 sm:max-w-[55%] lg:p-10">
                                <Arrows color={F.mint} className="mb-3" />
                                <h3 className="text-3xl font-bold uppercase leading-[0.95] sm:text-4xl lg:text-5xl" style={{ ...impact, color: F.mint }}>
                                    {p.title}
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-white sm:text-base">{p.body}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* ---------- Quotes ---------- */

const QUOTES = [
    { text: "Atlanta has set the standard for what soccer in America can be.", by: "Don Garber, MLS Commissioner" },
    { text: "Atlanta isn't just hosting FIFA…", by: "Sports Illustrated" },
    { text: "It's becoming Soccer Town, USA.", by: "Sports Illustrated" },
];

export function QuoteRotator() {
    const [i, setI] = useState(0);
    const [paused, setPaused] = useState(false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (paused || reduced) return;
        const t = setTimeout(() => setI((n) => (n + 1) % QUOTES.length), 6000);
        return () => clearTimeout(t);
    }, [i, paused, reduced]);

    const go = (d: number) => setI((n) => (n + d + QUOTES.length) % QUOTES.length);

    return (
        <div
            className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16"
            style={{ background: F.pitch }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <ChevronStack
                primary={F.deep}
                secondary={F.mint}
                className="pointer-events-none absolute -left-8 top-1/2 h-64 -translate-y-1/2 opacity-90 sm:h-80"
            />
            <div className="relative mx-auto grid min-h-[170px] max-w-3xl items-center lg:pl-24" aria-live="polite">
                {QUOTES.map((q, n) => (
                    <figure
                        key={q.by + q.text}
                        className="col-start-1 row-start-1 transition-all duration-700"
                        style={{
                            opacity: n === i ? 1 : 0,
                            transform: n === i ? "none" : "translateY(14px)",
                            pointerEvents: n === i ? "auto" : "none",
                        }}
                        aria-hidden={n !== i}
                    >
                        <div className="flex gap-4 sm:gap-6">
                            <span className="select-none text-6xl font-bold italic leading-none sm:text-8xl" style={{ color: F.mint }} aria-hidden="true">
                                “
                            </span>
                            <div>
                                <blockquote className="text-2xl font-semibold leading-tight text-white sm:text-4xl">{q.text}</blockquote>
                                <figcaption className="mt-4 text-xs uppercase tracking-[0.15em] text-white/70 sm:text-sm">{q.by}</figcaption>
                            </div>
                        </div>
                    </figure>
                ))}
            </div>
            <div className="relative mt-8 flex items-center justify-center gap-4 lg:justify-start lg:pl-24">
                <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous quote"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
                >
                    <ArrowLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-2">
                    {QUOTES.map((q, n) => (
                        <button
                            key={q.text}
                            type="button"
                            aria-label={`Show quote ${n + 1}`}
                            onClick={() => setI(n)}
                            className="h-2 rounded-full transition-all duration-300"
                            style={{ width: n === i ? 28 : 8, background: n === i ? F.mint : "rgba(255,255,255,0.35)" }}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next quote"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
                >
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

/* ---------- Focus areas ---------- */

const FOCUS = [
    { n: "01", label: "Wayfinding Strategy", group: "Clarity", color: F.blue },
    { n: "02", label: "Wayfinding Design", group: "Clarity", color: F.pitch },
    { n: "03", label: "Design Guidelines", group: "Engagement", color: F.red },
    { n: "04", label: "Celebrate Atlanta", group: "Engagement", color: F.blue },
    { n: "05", label: "Cross Collaboration", group: "Engagement", color: F.pitch },
];

export function FocusAreas() {
    const [sel, setSel] = useState(0);
    const groups = ["Clarity", "Engagement"];
    const current = FOCUS[sel];

    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 sm:p-10">
            <div className="absolute inset-y-0 left-0 w-2" style={{ background: F.red }} />
            <ChevronStack
                primary="#F4D7DA"
                secondary="#FBEDEE"
                className="pointer-events-none absolute -bottom-16 -left-10 h-56 opacity-80"
            />
            <div className="relative grid gap-8 sm:grid-cols-2 sm:gap-12">
                {groups.map((g) => (
                    <div key={g}>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">{g}</p>
                        <ul className="space-y-3">
                            {FOCUS.map((f, idx) =>
                                f.group === g ? (
                                    <li key={f.n}>
                                        <button
                                            type="button"
                                            onClick={() => setSel(idx)}
                                            onMouseEnter={() => setSel(idx)}
                                            aria-pressed={sel === idx}
                                            className="group flex w-full items-center gap-4 rounded-xl p-2 text-left transition-all duration-300 hover:translate-x-1.5"
                                            style={{ background: sel === idx ? `${f.color}12` : "transparent" }}
                                        >
                                            <span
                                                className="flex h-10 w-[54px] shrink-0 items-center justify-center text-sm font-bold italic text-white transition-transform duration-300 group-hover:scale-110"
                                                style={{ ...display, background: f.color, transform: "skewX(-14deg)" }}
                                            >
                                                <span style={{ transform: "skewX(14deg)" }}>{f.n}</span>
                                            </span>
                                            <span className="text-base font-medium text-gray-900 sm:text-lg">{f.label}</span>
                                        </button>
                                    </li>
                                ) : null,
                            )}
                        </ul>
                    </div>
                ))}
            </div>
            <p className="relative mt-8 border-t border-gray-200 pt-5 text-sm text-gray-600" aria-live="polite">
                <span className="font-semibold" style={{ color: current.color }}>
                    {current.n} {current.label}.
                </span>{" "}
                {sel === 0
                    ? "This is the focus area the rest of this case study walks through."
                    : "Part of the full framework. This case study focuses on 01, Wayfinding Strategy."}
            </p>
        </div>
    );
}

/* ---------- 01 Wayfinding banner ---------- */

export function WayfindingBanner() {
    return (
        <div className="relative h-[240px] overflow-hidden rounded-2xl bg-white sm:h-[340px] lg:h-[420px]">
            <img
                src="/images/fifa/skyline-night.webp"
                alt="Downtown Atlanta at dusk with light trails on the connector"
                loading="lazy"
                className="absolute inset-y-0 left-0 h-full w-[72%] object-cover"
            />
            <div
                className="absolute inset-0"
                style={{ background: F.blue, clipPath: "polygon(24% 0, 38% 0, 72% 100%, 58% 100%)", opacity: 0.92 }}
            />
            <div className="absolute inset-0 bg-white" style={{ clipPath: "polygon(34% 0, 100% 0, 100% 100%, 68% 100%)" }} />
            <div className="absolute inset-y-0 left-0 w-2" style={{ background: F.blue }} />
            <div className="absolute inset-y-0 right-0 flex w-[56%] flex-col items-end justify-end p-5 text-right sm:p-10">
                <span className="mb-2 text-sm font-bold italic sm:text-lg" style={{ ...display, color: F.blue }}>
                    01
                </span>
                <h3 className="text-2xl font-extrabold uppercase leading-[0.95] text-black sm:text-4xl lg:text-5xl" style={impact}>
                    Wayfinding
                    <br />
                    Strategy
                </h3>
            </div>
        </div>
    );
}

/* ---------- Spectator numbers ---------- */

export function SpectatorStats() {
    const [ref, inView] = useInView<HTMLDivElement>(0.3);
    const circumference = 2 * Math.PI * 54;

    return (
        <div ref={ref} className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* ~300,000 */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                <div className="relative h-44 w-full overflow-hidden sm:h-52">
                    <img
                        src="/images/fifa/crowd.webp"
                        alt="Fans cheering with raised hands"
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-y-0 left-0 w-2" style={{ background: F.blue }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
                </div>
                <div className="relative p-6 pt-2 text-center sm:p-8 sm:pt-2">
                    <p className="text-base text-gray-900 sm:text-lg">Atlanta is expected to welcome</p>
                    <p className="my-1 text-4xl font-bold tabular-nums sm:text-5xl" style={{ color: F.blue }}>
                        ~<CountUp to={300000} active={inView} />
                    </p>
                    <p className="text-xl font-bold sm:text-2xl" style={{ color: F.blue }}>unique spectators</p>
                    <p className="mt-1 text-base text-gray-900 sm:text-lg">across the 8 World Cup matches hosted in the city.</p>
                </div>
            </div>

            {/* 75% */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                <div className="relative h-44 w-full overflow-hidden sm:h-52">
                    <img
                        src="/images/fifa/traveler.webp"
                        alt="A traveler pulling a suitcase past an arrivals board"
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-y-0 left-0 w-2" style={{ background: F.blue }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
                </div>
                <div className="relative flex flex-col items-center gap-4 p-6 pt-2 text-center sm:flex-row sm:p-8 sm:pt-2 sm:text-left">
                    <div className="relative h-28 w-28 shrink-0">
                        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
                            <circle cx="60" cy="60" r="54" fill="none" stroke={F.ice} strokeWidth="12" />
                            <circle
                                cx="60"
                                cy="60"
                                r="54"
                                fill="none"
                                stroke={F.blue}
                                strokeWidth="12"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={inView ? circumference * 0.25 : circumference}
                                style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold tabular-nums" style={{ color: F.blue }}>
                            <CountUp to={75} active={inView} suffix="%" />
                        </span>
                    </div>
                    <div>
                        <p className="text-lg font-bold sm:text-xl" style={{ color: F.blue }}>
                            About 75% of those spectators
                        </p>
                        <p className="text-base text-gray-900 sm:text-lg">will travel from outside of Georgia</p>
                        <p className="text-sm text-gray-600">(from other U.S. states or other countries)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- The Challenge: arrive vs leave ---------- */

const WINDOWS = [
    {
        key: "arrive",
        tab: "Arriving",
        from: 60,
        to: 70,
        caption: "arrive within 90 minutes pre-game.",
        bar: "90 min before kickoff",
    },
    {
        key: "leave",
        tab: "Leaving",
        from: 70,
        to: 80,
        caption: "attempt to leave within 30 minutes post-game.",
        bar: "30 min after the final whistle",
    },
] as const;

export function ChallengeExplorer() {
    const [tab, setTab] = useState<0 | 1>(0);
    const w = WINDOWS[tab];
    const [ref, inView] = useInView<HTMLDivElement>(0.3);

    return (
        <div ref={ref} className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 sm:p-10">
            <div className="absolute inset-y-0 left-0 w-2" style={{ background: F.blue }} />
            <ChevronStack
                primary={F.blue}
                secondary={F.sky}
                flip
                className="pointer-events-none absolute -right-14 top-1/2 hidden h-64 -translate-y-1/2 opacity-90 lg:block"
            />

            <div className="relative flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-black sm:text-3xl">
                    The <span style={{ color: F.blue }}>Challenge</span>
                </h3>
                <div role="tablist" aria-label="Match day window" className="inline-flex rounded-full bg-gray-100 p-1">
                    {WINDOWS.map((win, i) => (
                        <button
                            key={win.key}
                            role="tab"
                            type="button"
                            aria-selected={tab === i}
                            onClick={() => setTab(i as 0 | 1)}
                            className="rounded-full px-5 py-2 text-sm font-semibold transition-colors"
                            style={{ background: tab === i ? F.blue : "transparent", color: tab === i ? "#fff" : "#4b5563" }}
                        >
                            {win.tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Match-day timeline */}
            <div className="relative mt-8 lg:mr-24">
                <div className="flex h-12 w-full overflow-hidden rounded-xl text-[11px] font-semibold sm:text-xs">
                    <div
                        className="flex w-[34%] items-center justify-center px-2 text-center transition-colors duration-500"
                        style={{ background: tab === 0 ? F.blue : F.ice, color: tab === 0 ? "#fff" : F.blue }}
                    >
                        {WINDOWS[0].bar}
                    </div>
                    <div
                        className="flex w-[38%] items-center justify-center bg-gray-100 text-gray-500"
                        style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 16px)" }}
                    >
                        Match
                    </div>
                    <div
                        className="flex w-[28%] items-center justify-center px-2 text-center transition-colors duration-500"
                        style={{ background: tab === 1 ? F.blue : F.ice, color: tab === 1 ? "#fff" : F.blue }}
                    >
                        {WINDOWS[1].bar}
                    </div>
                </div>
                <div className="mt-2 flex text-[11px] text-gray-500 sm:text-xs">
                    <span className="w-[34%]">−90 min</span>
                    <span className="w-[38%]">Kickoff · Final whistle</span>
                    <span className="w-[28%] text-right">+30 min</span>
                </div>
            </div>

            <div className="relative mt-8 grid items-center gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:mr-24">
                <div aria-live="polite">
                    <p
                        key={w.key}
                        className="text-5xl font-bold italic leading-none tracking-tight sm:text-6xl lg:text-7xl"
                        style={{
                            ...display,
                            backgroundImage: `linear-gradient(100deg, ${F.blue}, ${F.sky})`,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        <CountUp to={w.from} active={inView} duration={900} />
                        <span className="text-3xl sm:text-4xl" style={percentFont}>%</span>
                        <span className="mx-2 text-3xl sm:mx-3 sm:text-5xl">–</span>
                        <CountUp to={w.to} active={inView} duration={900} />
                        <span className="text-3xl sm:text-4xl" style={percentFont}>%</span>
                    </p>
                    <p className="mt-3 text-lg text-gray-900 sm:text-xl">{w.caption}</p>
                </div>

                {/* Ten fans, filled in to match the range */}
                <div>
                    <div className="grid grid-cols-5 gap-2 sm:gap-3" role="img" aria-label={`${w.from} to ${w.to} out of every 100 fans`}>
                        {Array.from({ length: 10 }, (_, i) => {
                            const full = i < w.from / 10;
                            const partial = !full && i < w.to / 10;
                            return (
                                <User
                                    key={i}
                                    className="h-full w-full max-w-[44px]"
                                    strokeWidth={1.6}
                                    style={{
                                        color: full ? F.blue : partial ? F.sky : "#cbd5e1",
                                        fill: full ? F.blue : partial ? F.sky : "transparent",
                                        opacity: full || partial ? 1 : 0.7,
                                        transition: `all 500ms ease ${i * 45}ms`,
                                    }}
                                />
                            );
                        })}
                    </div>
                    <p className="mt-3 text-xs text-gray-500">Every figure is a range. Solid fans are the low end, light blue the high end.</p>
                </div>
            </div>
        </div>
    );
}

/* ---------- Core tension: which way do I go? ---------- */

const SCATTER = [-140, 35, 118, -62, 172, 84, -24, 146, -102, 52, -172, 22, 128, -48, 96, -118];

export function CoreTension() {
    const [clear, setClear] = useState(false);

    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
            <ChevronStack primary={F.blue} secondary={F.sky} className="pointer-events-none absolute -left-12 top-1/2 h-72 -translate-y-1/2 sm:h-96" />
            <ChevronStack primary={F.blue} secondary={F.sky} flip className="pointer-events-none absolute -right-12 top-1/2 h-72 -translate-y-1/2 sm:h-96" />

            <div className="relative mx-auto max-w-2xl px-6 py-14 text-center sm:px-10 sm:py-20">
                <div className="mx-auto mb-3 h-[3px] w-14" style={{ background: F.blue }} />
                <p className="text-lg text-gray-900 sm:text-2xl">
                    The “Last Mile” becomes
                    <br />
                    <span className="font-bold" style={{ color: F.blue }}>the highest-risk zone</span>
                </p>
                <div className="mx-auto mb-3 mt-10 h-[3px] w-14" style={{ background: F.blue }} />
                <p className="text-lg text-gray-900 sm:text-2xl">Core Tension:</p>
                <p className="text-2xl font-bold italic sm:text-4xl" style={{ color: F.blue }}>
                    “Which Way Do I Go?”
                </p>

                {/* Arrow field */}
                <div className="mt-10 grid grid-cols-8 gap-1 sm:gap-2" aria-hidden="true">
                    {SCATTER.map((deg, i) => (
                        <div key={i} className="flex aspect-square items-center justify-center">
                            <ArrowRight
                                className="cs-anim h-full w-full max-w-[36px]"
                                strokeWidth={2.4}
                                style={
                                    {
                                        color: clear ? F.blue : "#94a3b8",
                                        transform: `rotate(${clear ? 0 : deg}deg)`,
                                        transition: `transform 800ms cubic-bezier(0.22,1,0.36,1) ${i * 35}ms, color 500ms ease ${i * 35}ms`,
                                    } as CSSProperties
                                }
                            />
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => setClear((c) => !c)}
                    aria-pressed={clear}
                    className="mt-8 inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors"
                    style={{ borderColor: F.blue, background: clear ? F.blue : "#fff", color: clear ? "#fff" : F.blue }}
                >
                    <Route className="h-4 w-4" />
                    {clear ? "With clear wayfinding" : "Add clear wayfinding"}
                </button>
            </div>
        </div>
    );
}

/* ---------- What we learned: three stats ---------- */

const LEARNED = [
    { value: 93, label: "movement accuracy when digital + physical signage integrated" },
    { value: 40, label: "reduction in backtracking when wayfinding is clear" },
    { value: 23, label: "of user errors occur after 3s decision time" },
];

export function LearnedStats() {
    const [active, setActive] = useState(0);
    const [engaged, setEngaged] = useState(false);
    const [ref, inView] = useInView<HTMLDivElement>(0.3, false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (engaged || reduced || !inView) return;
        const t = setTimeout(() => setActive((a) => (a + 1) % LEARNED.length), 4500);
        return () => clearTimeout(t);
    }, [active, engaged, reduced, inView]);

    const pick = (i: number) => {
        setActive(i);
        setEngaged(true);
    };

    return (
        <div ref={ref} className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
            <div className="absolute inset-y-0 left-0 w-2" style={{ background: F.blue }} />
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] lg:items-center">
                <div className="relative">
                    <h3 className="text-2xl font-bold leading-tight text-black sm:text-3xl">
                        What We Learned
                        <br />
                        From <span style={{ color: F.blue }}>Global Events</span>
                    </h3>
                    <div className="mt-6 hidden h-40 items-end lg:flex">
                        <ChevronStack primary={F.blue} secondary={F.sky} className="h-40" />
                    </div>
                </div>

                <div role="radiogroup" aria-label="Findings from global events" className="grid grid-cols-2 gap-3 sm:gap-4">
                    {LEARNED.map((s, i) => {
                        const on = i === active;
                        return (
                            <button
                                key={s.value}
                                type="button"
                                role="radio"
                                aria-checked={on}
                                onClick={() => pick(i)}
                                onMouseEnter={() => pick(i)}
                                className={`rounded-xl border-2 px-4 py-6 text-center transition-all duration-500 sm:px-6 sm:py-8 ${i === 0 ? "col-span-2" : ""}`}
                                style={{
                                    background: on ? F.blue : "#fff",
                                    borderColor: on ? F.blue : F.ice,
                                    color: on ? "#fff" : "#9db8d6",
                                    transform: on ? "scale(1.02)" : "scale(1)",
                                }}
                            >
                                <span className="block text-4xl font-bold tabular-nums sm:text-5xl" style={display}>
                                    {on ? <CountUp key={`${i}-${active}`} to={s.value} active={inView} duration={900} /> : s.value}
                                    <span style={percentFont}>%</span>
                                </span>
                                <span className="mt-2 block text-sm leading-snug sm:text-base">{s.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* ---------- Field research gallery with lightbox ---------- */

const FIELD = [
    { src: "/images/fifa/field-a.webp", w: 1100, h: 733, alt: "A pedestrian walking toward a downtown Atlanta kiosk beside a fenced sidewalk" },
    { src: "/images/fifa/field-c.webp", w: 1100, h: 1467, alt: "Two people following an arrow sign through a covered wooden walkway" },
    { src: "/images/fifa/field-b.webp", w: 1100, h: 733, alt: "A long brick path through a park, with the stadium area ahead" },
    { src: "/images/fifa/field-f.webp", w: 768, h: 1024, alt: "A red QR code sticker on the pavement used as a wayfinding marker" },
    { src: "/images/fifa/field-d.webp", w: 1100, h: 1467, alt: "A yellow information post on a plaza with a large venue behind it" },
    { src: "/images/fifa/field-e.webp", w: 1100, h: 733, alt: "Two people walking a downtown street toward a tall hotel tower" },
    { src: "/images/fifa/field-g.webp", w: 768, h: 1024, alt: "Two people walking with a map beside a traffic signal on an elevated walkway" },
    { src: "/images/fifa/field-h.webp", w: 768, h: 1024, alt: "A fallen red sign casting a long shadow across the pavement" },
];

export function FieldGallery() {
    const [open, setOpen] = useState<number | null>(null);

    const close = useCallback(() => setOpen(null), []);
    const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + FIELD.length) % FIELD.length)), []);

    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
        };
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open, close, step]);

    return (
        <>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                {FIELD.map((p, i) => (
                    <Reveal key={p.src} delay={(i % 4) * 70} className="aspect-[3/4]">
                        <button
                            type="button"
                            onClick={() => setOpen(i)}
                            className="group relative block h-full w-full overflow-hidden rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:border-[#343F28] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#343F28]"
                            aria-label={`Open photo ${i + 1} of ${FIELD.length}`}
                        >
                            <img
                                src={p.src}
                                alt={p.alt}
                                width={p.w}
                                height={p.h}
                                loading="lazy"
                                className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white opacity-0 transition-opacity group-hover:opacity-100">
                                {String(i + 1).padStart(2, "0")} / {String(FIELD.length).padStart(2, "0")}
                            </span>
                        </button>
                    </Reveal>
                ))}
            </div>

            {open !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Field research photo"
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            step(-1);
                        }}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <img src={FIELD[open].src} alt={FIELD[open].alt} className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain" loading="lazy" decoding="async" />
                        <figcaption className="mt-3 text-center text-sm text-white/80">{FIELD[open].alt}</figcaption>
                    </figure>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            step(1);
                        }}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </>
    );
}

/* ---------- The Area: interactive route map ---------- */

const PINS = [
    { id: "fan", label: "Fan Festival", x: 55.5, y: 23.5 },
    { id: "cop", label: "Centennial Olympic Park", x: 57, y: 14.5 },
    { id: "backyard", label: "The Home Depot Backyard", x: 27, y: 40.5 },
    { id: "stadium", label: "Atlanta Stadium", x: 28, y: 52.5 },
    { id: "peachtree", label: "Peachtree Center Station", x: 80.2, y: 37.8 },
    { id: "fivepoints", label: "Five Points Station", x: 64.7, y: 65.2 },
    { id: "garnett", label: "Garnett Station", x: 48.3, y: 94 },
    { id: "woodruff", label: "Woodruff Park", x: 74, y: 56 },
];

/* Primary routes and signage, traced from the primary wayfinding plan and registered to the
   map by the stadium and backyard outlines, in map pixels (1506 x 1080). */
const MAIN_ROUTE = "M935,324 L894,379 L863,410 L811,434 L756,472 L691,505 L634,529 L584,577";
const ROUTES = [
    // Fan Festival to the stadium along Centennial Olympic Park Dr
    "M935,324 L894,379 L863,410 L811,434 L756,472 L691,505 L634,529 L584,577",
    // Fan Festival east along Andrew Young Blvd
    "M1394,284 L954,284",
    // Peachtree Center down to Five Points and Garnett
    "M1198,419 L1119,472 L1035,553 L959,620 L925,663 L892,730 L865,754 L835,807 L779,883 L715,1007",
    // Fan Festival south, joining the Peachtree Center route
    "M868,412 L906,458 L945,510 L988,548 L1016,572",
    // Stadium south-east, joining the Five Points route
    "M584,577 L557,639 L626,651 L691,657 L741,679 L785,711 L835,749 L865,754",
    // Backyard to the Fan Festival along Andrew Young Blvd
    "M529,410 L624,412 L682,396 L734,376 L794,329",
];
const SIGNS: [number, number][] = [[1033, 284], [1122, 284], [1168, 284], [1280, 284], [1360, 284], [935, 324], [794, 329], [497, 342], [737, 374], [686, 394], [632, 410], [561, 411], [1188, 426], [783, 453], [813, 433], [904, 456], [1120, 472], [755, 472], [693, 504], [640, 526], [1072, 518], [584, 577], [1006, 579], [964, 615], [560, 632], [623, 650], [688, 657], [930, 657], [736, 677], [780, 708], [866, 753], [835, 806], [781, 880]];

export function AreaMap() {
    const [sel, setSel] = useState<string>("fan");
    const [route, setRoute] = useState(true);
    const [signs, setSigns] = useState(true);
    const reduced = usePrefersReducedMotion();
    const current = PINS.find((p) => p.id === sel);

    return (
        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
            <div className="relative aspect-[1506/1080] w-full bg-[#00DCE8]">
                <img
                    src="/images/fifa/area-map.webp"
                    alt="Map of downtown Atlanta showing the stadium district, Fan Festival and surrounding streets"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <svg viewBox="0 0 1506 1080" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                    <defs>
                        <path id="fifa-route" d={MAIN_ROUTE} />
                    </defs>
                    {route &&
                        ROUTES.map((d) => (
                            <g key={d} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d={d} stroke="#fff" strokeWidth="8" vectorEffect="non-scaling-stroke" opacity="0.9" />
                                <path
                                    d={d}
                                    stroke={F.red}
                                    strokeWidth="4"
                                    strokeDasharray="14 10"
                                    vectorEffect="non-scaling-stroke"
                                    className="cs-anim"
                                    style={{ animation: "cs-dash 1.4s linear infinite" }}
                                />
                            </g>
                        ))}
                    {route &&
                        signs &&
                        SIGNS.map(([x, y]) => (
                            <g key={`${x}-${y}`}>
                                <circle cx={x} cy={y} r="16" fill="#fff" fillOpacity="0.6" />
                                <circle cx={x} cy={y} r="7" fill="#8B1A2B" />
                            </g>
                        ))}
                </svg>
                {route && !reduced && (
                    <svg viewBox="0 0 1506 1080" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                        <circle r="14" fill="#fff" stroke={F.red} strokeWidth="6">
                            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                                <mpath href="#fifa-route" />
                            </animateMotion>
                        </circle>
                    </svg>
                )}

                {PINS.map((p) => {
                    const on = p.id === sel;
                    return (
                        <button
                            key={p.id}
                            type="button"
                            onClick={() => setSel(p.id)}
                            onMouseEnter={() => setSel(p.id)}
                            aria-label={p.label}
                            aria-pressed={on}
                            className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                            style={{ left: `${p.x}%`, top: `${p.y}%` }}
                        >
                            <span className="relative flex h-9 w-9 items-center justify-center">
                                {on && (
                                    <span
                                        className="cs-anim absolute inset-0 rounded-full"
                                        style={{ background: F.blue, animation: "cs-pulse-ring 1.8s ease-out infinite" }}
                                    />
                                )}
                                <span
                                    className="relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-md transition-all duration-300 sm:h-4 sm:w-4"
                                    style={{ background: on ? F.red : F.blue, transform: on ? "scale(1.5)" : "scale(1)" }}
                                />
                            </span>
                            <span
                                className={`pointer-events-none absolute whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-900 shadow-md transition-all duration-300 sm:text-xs ${
                                    p.y > 80 ? "bottom-full mb-0.5" : "top-full mt-0.5"
                                } ${p.x > 65 ? "right-0" : p.x < 30 ? "left-0" : "left-1/2 -translate-x-1/2"}`}
                                style={{ opacity: on ? 1 : 0 }}
                            >
                                {p.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-gray-200 p-4 sm:p-6">
                <div className="flex flex-wrap gap-2">
                    {PINS.map((p) => (
                        <button
                            key={p.id}
                            type="button"
                            onClick={() => setSel(p.id)}
                            className="rounded-full border px-4 py-2 text-sm transition-colors"
                            style={{
                                borderColor: p.id === sel ? F.blue : "#e5e7eb",
                                background: p.id === sel ? F.blue : "#fff",
                                color: p.id === sel ? "#fff" : "#374151",
                            }}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={() => setRoute((r) => !r)}
                        aria-pressed={route}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                        style={{ background: route ? F.red : "#6b7280" }}
                    >
                        <Route className="h-4 w-4" />
                        Primary routes
                    </button>
                    <button
                        type="button"
                        onClick={() => setSigns((v) => !v)}
                        aria-pressed={signs}
                        disabled={!route}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                        style={{ background: signs ? "#8B1A2B" : "#6b7280" }}
                    >
                        Primary signage
                    </button>
                </div>
            </div>
            <p className="sr-only" aria-live="polite">
                {current ? `Selected: ${current.label}` : ""}
            </p>
        </div>
    );
}

/* ---------- Wayfinding plan + friction maps, one viewer ---------- */

/* Source screenshots are ~1070px wide, so the frame stops near native size
   instead of upscaling them to the full content width. */
const PLAN_MAPS = [
    {
        id: "primary",
        tab: "Primary",
        title: "Primary Wayfinding",
        text: "Primary signage follows the primary routes, placed at every point where a stranger would have to choose a direction.",
        src: "/images/fifa/primary-wayfinding.webp",
        w: 1074,
        h: 608,
        alt: "Map of the primary wayfinding plan, showing primary routes and primary signage between the Fan Festival, transit stations and the stadium",
    },
    {
        id: "secondary",
        tab: "Secondary",
        title: "Secondary Wayfinding",
        text: "Secondary routes branch off the primary ones, carrying people to the surrounding streets, stations and neighbourhoods.",
        src: "/images/fifa/secondary-wayfinding.webp",
        w: 1066,
        h: 600,
        alt: "Map of the secondary wayfinding plan, showing secondary routes and secondary signage branching out from the Fan Festival and stadium into downtown Atlanta",
    },
    {
        id: "bottlenecks",
        tab: "Bottlenecks",
        title: "Friction: Bottlenecks",
        text: "Places where crowds converge and movement slows, near the Fan Festival, the stadium and Five Points station.",
        src: "/images/fifa/friction-bottlenecks.webp",
        w: 1220,
        h: 716,
        alt: "Map of friction points along the Last Mile, with bottlenecks marked near the Fan Festival, the stadium and Five Points station",
    },
    {
        id: "obstruction",
        tab: "Obstructions",
        title: "Friction: Visual Obstructions",
        text: "Structures and barriers that hide the way ahead, layered over the bottlenecks.",
        src: "/images/fifa/friction-obstruction.webp",
        w: 748,
        h: 414,
        alt: "Friction points map adding visual obstructions alongside the bottlenecks",
    },
    {
        id: "sidewalks",
        tab: "Sidewalks",
        title: "Friction: Narrow Sidewalks",
        text: "Narrow walkways that cannot carry matchday crowds, shown with the bottlenecks and obstructions.",
        src: "/images/fifa/friction-sidewalks.webp",
        w: 632,
        h: 336,
        alt: "Friction points map adding narrow sidewalks to the bottlenecks and visual obstructions",
    },
];

export function WayfindingMaps() {
    const [active, setActive] = useState(PLAN_MAPS[0].id);
    const map = PLAN_MAPS.find((m) => m.id === active) ?? PLAN_MAPS[0];

    return (
        <div className="mx-auto grid w-full max-w-[1000px] items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_24px_60px_-30px_rgba(30,77,43,0.35)] sm:p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-8">
            <div>
                <div role="tablist" aria-label="Wayfinding maps" className="mb-5 flex flex-wrap gap-2">
                    {PLAN_MAPS.map((m) => {
                        const on = m.id === active;
                        return (
                            <button
                                key={m.id}
                                role="tab"
                                aria-selected={on}
                                onClick={() => setActive(m.id)}
                                className="rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                                style={{
                                    background: on ? F.deep : "transparent",
                                    borderColor: on ? F.deep : "#d4d4d4",
                                    color: on ? "#fff" : "#525252",
                                }}
                            >
                                {m.tab}
                            </button>
                        );
                    })}
                </div>
                <p className="text-lg font-semibold sm:text-xl" style={{ color: F.deep }}>{map.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{map.text}</p>
            </div>

            <figure className="overflow-hidden rounded-xl bg-gray-50">
                <img
                    key={map.id}
                    src={map.src}
                    alt={map.alt}
                    width={map.w}
                    height={map.h}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto block h-auto w-full"
                    style={{ maxWidth: map.w }}
                />
            </figure>
        </div>
    );
}
