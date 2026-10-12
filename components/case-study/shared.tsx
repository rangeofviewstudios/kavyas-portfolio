'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* Kavya's site palette. Every case study page stays on this base. */
export const GREEN = "#343F28";

/* Shared type + card styles, lifted from the ROV case study so the pages feel like one family. */
export const intro = "text-base sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-[40px]";
export const introStyle = { color: "rgba(0,0,0,0.60)", fontFamily: '"DM Sans"' } as const;
export const h2 = "text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12";
export const h3 = "text-xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6";
export const card =
    "border-2 border-gray-200 rounded-2xl p-5 sm:p-8 group transition-all duration-300 hover:border-[#343F28] hover:shadow-lg";
export const cardNumber =
    "text-4xl font-semibold mb-4 text-black transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent";

export function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
}

export function useInView<T extends Element>(threshold = 0.25, once = true) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) io.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold, once]);
    return [ref, inView] as const;
}

/* Fade and lift into place the first time it scrolls into view. */
export function Reveal({
    children,
    delay = 0,
    className = "",
    style,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
}) {
    const [ref, inView] = useInView<HTMLDivElement>(0.12);
    const reduced = usePrefersReducedMotion();
    const shown = inView || reduced;
    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(24px)",
                transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

export function CountUp({
    to,
    active,
    duration = 1400,
    decimals = 0,
    prefix = "",
    suffix = "",
}: {
    to: number;
    active: boolean;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [value, setValue] = useState(0);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (!active) {
            setValue(0);
            return;
        }
        if (reduced) {
            setValue(to);
            return;
        }
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setValue(to * (1 - Math.pow(1 - p, 3)));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [active, to, duration, reduced]);

    const text = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US");
    return (
        <>
            {prefix}
            {text}
            {suffix}
        </>
    );
}

/* Role / Industry / Scope / Location row, same markup as the ROV page. */
export function Details({ items }: { items: [string, string][] }) {
    return (
        <div className="grid grid-cols-2 lg:flex lg:items-start gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {items.map(([label, value], i) => (
                <div key={label} className="contents">
                    {i > 0 && <div className="hidden lg:block w-px h-12 bg-gray-200" />}
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">{label}:</h3>
                        <p className="text-base text-gray-900">{value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* The gradient-bordered story box from the ROV page, with the client's colours in the border. */
export function GradientCallout({ gradient, children }: { gradient: string; children: ReactNode }) {
    return (
        <div className="w-full rounded-[30px] p-[4px]" style={{ background: gradient }}>
            <div className="w-full h-full rounded-[26px] bg-white overflow-hidden">{children}</div>
        </div>
    );
}

/* Small coloured label above a section heading: the client's flare on Kavya's layout. */
export function Eyebrow({ children, color }: { children: ReactNode; color: string }) {
    return (
        <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]" style={{ color }}>
            {children}
        </p>
    );
}

export function SectionCaption({ children }: { children: ReactNode }) {
    return <p className="mt-3 text-sm text-gray-600">{children}</p>;
}

type Step = { title: string; body: string };

/* Vertical stepper that auto-advances while visible and stops as soon as someone clicks. */
export function Stepper({
    steps,
    accent,
    track,
    dark = false,
    intervalMs = 5000,
    onChange,
}: {
    steps: Step[];
    accent: string;
    track: string;
    dark?: boolean;
    intervalMs?: number;
    onChange?: (index: number) => void;
}) {
    const [active, setActive] = useState(0);
    const [engaged, setEngaged] = useState(false);
    const [ref, inView] = useInView<HTMLDivElement>(0.3, false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        onChange?.(active);
    }, [active, onChange]);

    useEffect(() => {
        if (engaged || reduced || !inView) return;
        const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), intervalMs);
        return () => clearTimeout(t);
    }, [active, engaged, reduced, inView, steps.length, intervalMs]);

    const text = dark ? "text-white" : "text-gray-900";
    const sub = dark ? "text-white/70" : "text-gray-600";

    return (
        <div ref={ref} className="relative">
            <div className="absolute left-[19px] top-5 bottom-5 w-px" style={{ background: track }} />
            <div
                className="absolute left-[19px] top-5 w-px origin-top transition-transform duration-500"
                style={{
                    background: accent,
                    height: "calc(100% - 40px)",
                    transform: `scaleY(${steps.length > 1 ? active / (steps.length - 1) : 1})`,
                }}
            />
            <ol className="relative space-y-2">
                {steps.map((step, i) => {
                    const isActive = i === active;
                    return (
                        <li key={step.title}>
                            <button
                                type="button"
                                aria-expanded={isActive}
                                onClick={() => {
                                    setActive(i);
                                    setEngaged(true);
                                }}
                                className="flex w-full items-start gap-4 rounded-xl p-1 text-left"
                            >
                                <span
                                    className="relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold tabular-nums transition-all duration-300"
                                    style={{
                                        background: i <= active ? accent : dark ? "rgba(255,255,255,0.12)" : "#fff",
                                        color: i <= active ? "#fff" : dark ? "rgba(255,255,255,0.7)" : "#6b7280",
                                        border: i <= active ? `1px solid ${accent}` : `1px solid ${track}`,
                                        transform: isActive ? "scale(1.12)" : "scale(1)",
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="min-w-0 flex-1 pt-2">
                                    <span
                                        className={`block text-base sm:text-lg font-semibold transition-opacity ${text}`}
                                        style={{ opacity: isActive ? 1 : 0.6 }}
                                    >
                                        {step.title}
                                    </span>
                                    <span
                                        className={`grid transition-all duration-500 ease-out ${sub}`}
                                        style={{ gridTemplateRows: isActive ? "1fr" : "0fr", opacity: isActive ? 1 : 0 }}
                                    >
                                        <span className="overflow-hidden text-sm sm:text-base leading-relaxed">
                                            <span className="block pt-1 pb-2">{step.body}</span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

/* Closing buttons: same green pills as the ROV page. */
export function CaseNav({
    prev,
    next,
}: {
    prev?: { label: string; href: string };
    next?: { label: string; href: string };
}) {
    const pill =
        "inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-lg text-white font-semibold transition-all hover:scale-105";
    return (
        <div className="flex flex-wrap justify-center gap-3">
            <Link href="/#work" className={pill} style={{ background: GREEN }}>
                <ArrowLeft className="h-5 w-5" /> All work
            </Link>
            {prev && (
                <Link href={prev.href} className={pill} style={{ background: GREEN }}>
                    {prev.label}
                </Link>
            )}
            {next && (
                <Link href={next.href} className={pill} style={{ background: GREEN }}>
                    {next.label} <ArrowRight className="h-5 w-5" />
                </Link>
            )}
        </div>
    );
}
