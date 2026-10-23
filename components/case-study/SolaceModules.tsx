'use client';

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import {
    ArrowUpRight,
    Check,
    Files,
    Globe,
    HeartHandshake,
    House,
    Lock,
    RotateCcw,
    ScrollText,
    ShieldCheck,
    Tent,
    TrainFront,
    Unlock,
    Users,
    ZoomIn,
    type LucideIcon,
} from "lucide-react";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import { CountUp, Stepper, useInView, usePrefersReducedMotion } from "./shared";

/* Solace's sage palette, sampled from the handbook. */
export const S = {
    ink: "#1B2A16",
    deep: "#3F5238",
    sage: "#6F8566",
    soft: "#A9B8A0",
    mist: "#E6EAE0",
    cream: "#E8E4D8",
    gradient: "linear-gradient(160deg, #8CA084 0%, #6B8062 55%, #4E6446 100%)",
    sky: "linear-gradient(180deg, #7C9173 0%, #A6B49E 45%, #DDE3D8 78%, #EEF0EA 100%)",
};

const syne = { fontFamily: '"Syne", "DM Sans", sans-serif' } as const;
const poppins = { fontFamily: '"Poppins", "DM Sans", sans-serif' } as const;

/* ---------- Hero ---------- */

const HERO_VIDEO_ID = "ndV1edX34TA";

export function SolaceHero() {
    return (
        <section className="cs-anim relative w-full overflow-hidden" style={{ background: S.sky }}>
            <div className="relative h-[460px] sm:h-[560px] lg:h-[640px]">
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`}
                        title="Solace hero video"
                        tabIndex={-1}
                        allow="autoplay; encrypted-media"
                        loading="lazy"
                        className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
                        style={{ width: "max(100%, 177.78vh)", height: "max(100%, 56.25vw)" }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(63,82,56,0.55) 0%, rgba(63,82,56,0.35) 100%)" }} />
                </div>
                <img
                    src="/images/solace/mark.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 top-6 h-[420px] w-auto opacity-[0.14] sm:h-[560px]"
                />
                <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center px-4 pt-12 text-center sm:px-6 sm:pt-16">
                    <img src="/images/solace/mark.svg" alt="Solace" className="h-14 w-auto sm:h-20" loading="lazy" decoding="async" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm" style={poppins}>
                        Solace · Employee Handbook
                    </p>
                    <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]" style={syne}>
                        Build a system that <span className="font-extrabold">doesn&apos;t forget people</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

/* ---------- Refugee journey ---------- */

const JOURNEY: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: House, title: "Fleeing Home", body: "Conflict, violence, and persecution force individuals to leave everything behind." },
    { icon: TrainFront, title: "Transit Centers", body: "Refugees arrive at temporary points where they register, screen, and wait." },
    { icon: Tent, title: "Refugee Camps", body: "Many spend months or years where life remains temporary, crowded, and uncertain." },
    { icon: Files, title: "Legal Processing", body: "Complex documentation processes that determine whether they can rebuild their lives." },
    { icon: Users, title: "Integration", body: "Those granted protection begin rebuilding their lives and becoming part of a new community." },
    { icon: HeartHandshake, title: "Continuity", body: "A shared system of record that travels with the individual, not the organization." },
];

export function JourneyPath() {
    const [active, setActive] = useState(0);
    const [engaged, setEngaged] = useState(false);
    const [ref, inView] = useInView<HTMLDivElement>(0.3, false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (engaged || reduced || !inView) return;
        const t = setTimeout(() => setActive((a) => (a + 1) % JOURNEY.length), 4500);
        return () => clearTimeout(t);
    }, [active, engaged, reduced, inView]);

    const current = JOURNEY[active];
    const progress = (active / (JOURNEY.length - 1)) * 83.333;

    return (
        <div ref={ref} className="rounded-3xl border-2 border-gray-200 p-5 sm:p-8">
            <div className="relative">
                <div className="absolute left-[8.333%] right-[8.333%] top-8 hidden border-t-2 border-dashed md:block" style={{ borderColor: S.soft }} />
                <div
                    className="absolute left-[8.333%] top-[31px] hidden h-[3px] rounded-full transition-[width] duration-700 md:block"
                    style={{ width: `${progress}%`, background: S.sage }}
                />
                <ol className="relative grid grid-cols-3 gap-y-6 md:grid-cols-6">
                    {JOURNEY.map((stage, i) => {
                        const Icon = stage.icon;
                        const reached = i <= active;
                        return (
                            <li key={stage.title} className="flex flex-col items-center text-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActive(i);
                                        setEngaged(true);
                                    }}
                                    aria-label={`${stage.title}, stage ${i + 1} of ${JOURNEY.length}`}
                                    aria-current={i === active ? "step" : undefined}
                                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{
                                        background: reached ? S.gradient : S.mist,
                                        color: reached ? "#fff" : S.sage,
                                        transform: i === active ? "scale(1.14)" : undefined,
                                        boxShadow: i === active ? "0 10px 24px rgba(63,82,56,0.35)" : "none",
                                    }}
                                >
                                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                                </button>
                                <span
                                    className="mt-3 px-1 text-sm font-semibold leading-tight text-gray-900 transition-opacity"
                                    style={{ opacity: i === active ? 1 : 0.6, ...poppins }}
                                >
                                    {stage.title}
                                </span>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div
                key={active}
                className="mt-8 rounded-2xl p-6 text-white sm:p-8"
                style={{ background: S.gradient, animation: "cs-rise 500ms ease both" }}
                aria-live="polite"
            >
                <p className="text-sm tabular-nums text-white/70" style={poppins}>
                    {String(active + 1).padStart(2, "0")} / {String(JOURNEY.length).padStart(2, "0")}
                </p>
                <h4 className="mt-1 text-2xl font-bold sm:text-3xl" style={syne}>
                    {current.title}
                </h4>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg" style={poppins}>
                    {current.body}
                </p>
            </div>
        </div>
    );
}

/* ---------- Ecosystem ---------- */

const ECOSYSTEM = [
    {
        word: "Capture",
        n: "01",
        title: "Document Scanner",
        body: "Secure, portable intake scanner that transforms physical refugee documents into a verified, interoperable digital identity record.",
        img: "/images/solace/scanner.webp",
        alt: "The Solace document scanner, a slim olive-green handheld device",
        href: "#scanner",
        imgClass: "w-[78%] -rotate-6 sm:w-[62%]",
    },
    {
        word: "Preserve",
        n: "02",
        title: "Identification Card",
        body: "A cryptographic identity credential that ensures identity and case history don't reset at every transition, while preserving dignity across agencies and stages of resettlement.",
        img: "/images/solace/id-3d.webp",
        alt: "The Solace ID card, cream with a portrait photo and NFC symbol",
        href: "#id",
        imgClass: "w-[82%] rotate-3 sm:w-[66%]",
    },
    {
        word: "Connect",
        n: "03",
        title: "Case Management",
        body: "A web platform that enables NGOs to connect case histories with real-world services, creating shared visibility into needs, capacity, and follow-up for coordinated, long-term support.",
        img: "/images/solace/dashboard.webp",
        alt: "The Solace case coordination dashboard on a laptop",
        href: "#platform",
        imgClass: "w-[92%] sm:w-[78%] rounded-xl",
    },
];

export function EcosystemBands() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {ECOSYSTEM.map((e) => (
                <a
                    key={e.word}
                    href={e.href}
                    className="group relative block overflow-hidden rounded-3xl text-white no-underline transition-shadow duration-500 hover:shadow-2xl"
                    style={{ background: S.gradient }}
                >
                    <span
                        className="pointer-events-none absolute -top-4 left-4 select-none whitespace-nowrap text-[5.5rem] font-extrabold leading-none text-white/15 transition-transform duration-700 group-hover:translate-x-3 sm:text-[9rem] lg:text-[11rem]"
                        style={syne}
                        aria-hidden="true"
                    >
                        {e.word}
                    </span>
                    <div className="relative grid items-center gap-4 p-6 sm:p-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                        <div className="pt-16 sm:pt-24 md:pt-28">
                            <p className="text-sm font-semibold tabular-nums text-white/70" style={poppins}>{e.n}</p>
                            <h4 className="mt-1 border-t border-white/50 pt-3 text-3xl font-bold leading-tight sm:text-4xl" style={syne}>
                                {e.title}
                            </h4>
                            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base" style={poppins}>{e.body}</p>
                            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur transition-colors group-hover:bg-white group-hover:text-[#3F5238]" style={poppins}>
                                See how it works <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img
                                src={e.img}
                                alt={e.alt}
                                loading="lazy"
                                className={`${e.imgClass} drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-0`}
                            />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

/* ---------- Scanner explorer ---------- */

const SCANNER_SPOTS = [
    { id: "fingerprint", label: "Fingerprint scan", note: "Green LED for active scan", x: 60, y: 11 },
    { id: "measure", label: "Measurements", note: '2" D × 11" W × 1.5" H', x: 53, y: 20 },
    { id: "button", label: "Power / scan button", note: "Long press to power on. Tap to scan.", x: 57, y: 31.5 },
    { id: "lcd", label: "LCD", note: "Counts scanned pages", x: 48, y: 36.5 },
    { id: "connect", label: "Connectivity", note: "USB or Bluetooth toggle mode", x: 63, y: 39.5 },
    { id: "power", label: "Power source", note: "Rechargeable lithium-ion battery pack", x: 76, y: 36 },
    { id: "resolution", label: "Resolution", note: "Mode toggle: JPG / PDF", x: 24.5, y: 78 },
];

function Pin({ x, y, on, label, onSelect, tone = "#fff" }: { x: number; y: number; on: boolean; label: string; onSelect: () => void; tone?: string }) {
    return (
        <button
            type="button"
            onClick={onSelect}
            onMouseEnter={onSelect}
            onFocus={onSelect}
            aria-label={label}
            aria-pressed={on}
            className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
            style={{ left: `${x}%`, top: `${y}%` }}
        >
            <span className="relative flex h-8 w-8 items-center justify-center">
                {on && (
                    <span
                        className="cs-anim absolute inset-0 rounded-full"
                        style={{ background: tone, animation: "cs-pulse-ring 1.8s ease-out infinite" }}
                    />
                )}
                <span
                    className="relative h-3.5 w-3.5 rounded-full border-2 transition-transform duration-300"
                    style={{ background: on ? tone : "transparent", borderColor: tone, transform: on ? "scale(1.4)" : "scale(1)" }}
                />
            </span>
        </button>
    );
}

export function ScannerExplorer() {
    const [sel, setSel] = useState("fingerprint");
    return (
        <div className="grid items-stretch gap-4 sm:gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
            <div className="relative overflow-hidden rounded-3xl" style={{ background: S.gradient }}>
                <span
                    className="pointer-events-none absolute -left-2 top-4 select-none text-[6rem] font-extrabold leading-none text-white/12 sm:text-[9rem]"
                    style={{ ...syne, color: "rgba(255,255,255,0.12)" }}
                    aria-hidden="true"
                >
                    Scanner
                </span>
                <div className="relative mx-auto aspect-[3/2] w-full max-w-3xl">
                    <img
                        src="/images/solace/scanner-exploded.webp"
                        alt="Exploded view of the Solace scanner showing its fingerprint module, casing, circuit board and battery"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain"
                    />
                    {SCANNER_SPOTS.map((s) => (
                        <Pin key={s.id} x={s.x} y={s.y} on={sel === s.id} label={s.label} onSelect={() => setSel(s.id)} />
                    ))}
                </div>
            </div>
            <ul className="grid content-start gap-2">
                {SCANNER_SPOTS.map((s) => {
                    const on = sel === s.id;
                    return (
                        <li key={s.id}>
                            <button
                                type="button"
                                onClick={() => setSel(s.id)}
                                onMouseEnter={() => setSel(s.id)}
                                aria-pressed={on}
                                className="w-full rounded-2xl border-2 p-4 text-left transition-all duration-300"
                                style={{
                                    borderColor: on ? S.deep : "#e5e7eb",
                                    background: on ? S.mist : "#fff",
                                    transform: on ? "translateX(4px)" : "none",
                                }}
                            >
                                <span className="block text-base font-semibold text-gray-900" style={poppins}>{s.label}</span>
                                <span className="mt-0.5 block text-sm text-gray-600" style={poppins}>{s.note}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const SCAN_STEPS = [
    { title: "Capture", body: "The caseworker selects the document type, places the document in the scanner, and presses capture. The scanner checks lighting and edges, then sends the image to the phone, even offline." },
    { title: "Pre-processing", body: "The system automatically straightens the image, enhances faded text, and removes glare, shadows, and noise to produce a clean, standardized scan." },
    { title: "Extract", body: "The system detects the document language, extracts key fields (name, date of birth, nationality, case number), and uses AI to correct errors and assign confidence scores." },
    { title: "Validate and commit", body: "High-confidence fields are auto-accepted, while uncertain ones are reviewed by a caseworker. Once verified, the data attaches to the person's unique ID and becomes visible to authorized agencies." },
];

export function ScanSteps() {
    return <Stepper steps={SCAN_STEPS} accent={S.deep} track="#cfd8c8" />;
}

/* ---------- Solace ID explorer ---------- */

type Spot = { id: string; label: string; bullets: string[]; x: number; y: number };

const FRONT_SPOTS: Spot[] = [
    { id: "name", label: "Preferred name", bullets: ["Supports identity affirmation", "Leniency in case they have no legal name"], x: 38, y: 19 },
    { id: "photo", label: "Photo", bullets: ["Visual verification layer", "Prevents impersonation", "Required in low-tech environments"], x: 35, y: 74 },
    { id: "sid", label: "SID (Solace ID)", bullets: ["Persistent system-generated key", "Links to profile data in Solace Core", "Survives resettlement transitions"], x: 51, y: 17 },
    { id: "nfc", label: "NFC symbol", bullets: ["Tap authentication point", "Indicates encrypted interaction capability"], x: 86, y: 33 },
    { id: "dates", label: "Issue + expiry dates", bullets: ["Credential validity, not identity validity", "Allows card rotation without deleting SID"], x: 68, y: 80 },
];

const BACK_SPOTS: Spot[] = [
    { id: "icons", label: "Icon-based instructions", bullets: ["Low-literacy friendly", "Language-independent usability"], x: 14, y: 48 },
    { id: "support", label: "Support / lost card info", bullets: ["Enables directions for reassurance flow"], x: 30, y: 91 },
    { id: "qr", label: "QR fallback", bullets: ["Backup for non-NFC environments", "Links to SID without exposing personal data"], x: 74, y: 66 },
    { id: "serial", label: "Card serial number", bullets: ["Hardware traceability", "Separate from SID"], x: 55, y: 80 },
];

export function IdExplorer() {
    const [face, setFace] = useState<"front" | "back">("front");
    const [sel, setSel] = useState("name");
    const spots = face === "front" ? FRONT_SPOTS : BACK_SPOTS;

    const flip = (to: "front" | "back") => {
        setFace(to);
        setSel((to === "front" ? FRONT_SPOTS : BACK_SPOTS)[0].id);
    };

    const faceStyle: CSSProperties = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };

    return (
        <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
            <div className="overflow-hidden rounded-3xl p-5 sm:p-8" style={{ background: S.gradient }}>
                <div className="mx-auto w-full max-w-xl" style={{ perspective: 1400 }}>
                    <div
                        className="cs-anim relative aspect-[1107/672] w-full"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: face === "back" ? "rotateY(180deg)" : "none",
                            transition: "transform 900ms cubic-bezier(0.22,1,0.36,1)",
                        }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-[18px] shadow-2xl" style={faceStyle}>
                            <img src="/images/solace/id-front-lg.webp" alt="Front of the Solace ID card" className="h-full w-full" loading="lazy" decoding="async" />
                            {face === "front" &&
                                FRONT_SPOTS.map((s) => (
                                    <Pin key={s.id} x={s.x} y={s.y} on={sel === s.id} label={s.label} onSelect={() => setSel(s.id)} tone={S.ink} />
                                ))}
                        </div>
                        <div
                            className="absolute inset-0 overflow-hidden rounded-[18px] shadow-2xl"
                            style={{ ...faceStyle, transform: "rotateY(180deg)" }}
                        >
                            <img src="/images/solace/id-back.webp" alt="Back of the Solace ID card" className="h-full w-full" loading="lazy" decoding="async" />
                            {face === "back" &&
                                BACK_SPOTS.map((s) => (
                                    <Pin key={s.id} x={s.x} y={s.y} on={sel === s.id} label={s.label} onSelect={() => setSel(s.id)} tone={S.ink} />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <div role="tablist" aria-label="Card side" className="inline-flex rounded-full bg-white/15 p-1 backdrop-blur">
                        {(["front", "back"] as const).map((f) => (
                            <button
                                key={f}
                                type="button"
                                role="tab"
                                aria-selected={face === f}
                                onClick={() => flip(f)}
                                className="flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors"
                                style={{ ...poppins, background: face === f ? "#fff" : "transparent", color: face === f ? S.deep : "#fff" }}
                            >
                                {face !== f && <RotateCcw className="h-3.5 w-3.5" />}
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <ul className="grid content-start gap-2">
                {spots.map((s) => {
                    const on = sel === s.id;
                    return (
                        <li key={s.id}>
                            <button
                                type="button"
                                onClick={() => setSel(s.id)}
                                onMouseEnter={() => setSel(s.id)}
                                aria-expanded={on}
                                className="w-full rounded-2xl border-2 p-4 text-left transition-all duration-300"
                                style={{ borderColor: on ? S.deep : "#e5e7eb", background: on ? S.mist : "#fff" }}
                            >
                                <span className="block text-base font-semibold text-gray-900" style={poppins}>{s.label}</span>
                                <span
                                    className="grid transition-all duration-500 ease-out"
                                    style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
                                >
                                    <span className="overflow-hidden">
                                        <span className="block space-y-1 pt-2 text-sm text-gray-700" style={poppins}>
                                            {s.bullets.map((b) => (
                                                <span key={b} className="flex gap-2">
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: S.sage }} />
                                                    {b}
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const TAP_STEPS = [
    { title: "Tap", body: "The caseworker opens the Solace app and selects Smart Tap within cases. The refugee places their S-ID card against the dotted line on the phone, triggering the device's NFC reader. The phone detects the secure, encrypted chip inside the card and starts a tap interaction." },
    { title: "Authenticate", body: "The phone and the DESFire EV3 chip perform a mutual authentication handshake, establishing an encrypted session before any data exchange occurs. This verifies that both the reader and the card are legitimate and prevents unauthorized scanning." },
    { title: "Transmit", body: "Once authenticated, the card transmits only the encrypted Solace ID number (SID) to the phone. No personal information, documents, or legal status are stored on the card or transmitted directly through the tap." },
    { title: "Retrieve and log", body: "Using the SID as a secure pointer, the Solace system retrieves the refugee's canonical case profile from the encrypted database. Visible information is filtered by the agency's role, jurisdiction, and consent permissions. The access request is recorded in the Solace audit ledger: device, organization, timestamp, and accessed data." },
];

const TAP_STATUS = ["Waiting for a tap", "Handshake in progress", "SID sent, encrypted", "Access logged in the ledger"];

export function TapFlow() {
    const [step, setStep] = useState(0);
    const onChange = useCallback((i: number) => setStep(i), []);
    return (
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:gap-12">
            <Stepper steps={TAP_STEPS} accent={S.deep} track="#cfd8c8" onChange={onChange} />
            <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8" style={{ background: S.gradient }}>
                <div className="relative mx-auto max-w-sm">
                    <img src="/images/solace/id-3d.webp" alt="Solace ID card ready to tap" loading="lazy" className="w-full drop-shadow-2xl" />
                    {step <= 1 && (
                        <span className="pointer-events-none absolute right-[18%] top-[38%] flex h-10 w-10 items-center justify-center" aria-hidden="true">
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    className="cs-anim absolute inset-0 rounded-full border-2 border-white"
                                    style={{ animation: `cs-pulse-ring 2s ease-out ${i * 0.6}s infinite` }}
                                />
                            ))}
                        </span>
                    )}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-medium text-white backdrop-blur" style={poppins} aria-live="polite">
                    {step >= 2 ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                    {TAP_STATUS[step]}
                </div>
            </div>
        </div>
    );
}

/* ---------- Platform: laptop zoom + S-PASS handoff ---------- */

export function DashboardZoom() {
    const [origin, setOrigin] = useState({ x: 50, y: 50 });
    const [zoom, setZoom] = useState(false);

    const move = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        setOrigin({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };

    return (
        <div>
            <div className="mx-auto max-w-3xl">
                <div className="rounded-t-2xl border-[8px] border-b-0 border-[#1a1d18] bg-black sm:border-[12px]">
                    <div
                        className="group relative aspect-[2000/1075] w-full cursor-zoom-in overflow-hidden"
                        onMouseEnter={() => setZoom(true)}
                        onMouseLeave={() => setZoom(false)}
                        onMouseMove={move}
                        onClick={(e) => {
                            move(e);
                            setZoom((z) => !z);
                        }}
                    >
                        <img
                            src="/images/solace/dashboard.webp"
                            alt="Solace case coordination dashboard showing integration support overview, open cases and upcoming tasks"
                            loading="lazy"
                            className="absolute inset-0 h-full w-full"
                            style={{
                                transform: zoom ? "scale(2.3)" : "scale(1)",
                                transformOrigin: `${origin.x}% ${origin.y}%`,
                                transition: "transform 450ms cubic-bezier(0.22,1,0.36,1)",
                            }}
                        />
                        <span
                            className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs text-white transition-opacity"
                            style={{ opacity: zoom ? 0 : 1, ...poppins }}
                        >
                            <ZoomIn className="h-3.5 w-3.5" /> Hover to zoom
                        </span>
                    </div>
                </div>
                <div className="-mx-[4%] h-3 rounded-b-xl bg-gradient-to-b from-[#c9ccc4] to-[#9da198] shadow-lg" />
            </div>
        </div>
    );
}

const DASH_FEATURES = [
    { title: "Case Coordination Dashboard", body: "Centralized system for managing refugee cases and tracking service delivery." },
    { title: "Partner Organization Network", body: "Directory of NGOs and providers with visibility into services and capacity." },
    { title: "Seamless Case Transfers", body: "Structured handoff process that maintains continuity of care across organizations." },
    { title: "Sol AI Assistant", body: "AI-powered support tool that helps caseworkers access information and coordinate services." },
    { title: "Sol Messaging", body: "A communication hub that connects caseworkers across agencies, ensuring continuity of care." },
];

export function DashboardFeatures() {
    const [on, setOn] = useState(0);
    return (
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {DASH_FEATURES.map((f, i) => {
                const active = i === on;
                return (
                    <li key={f.title}>
                        <button
                            type="button"
                            onClick={() => setOn(i)}
                            onMouseEnter={() => setOn(i)}
                            aria-pressed={active}
                            className="h-full w-full rounded-2xl border-2 p-5 text-left transition-all duration-300"
                            style={{
                                borderColor: active ? S.deep : "#e5e7eb",
                                background: active ? S.gradient : "#fff",
                                color: active ? "#fff" : "#111827",
                                transform: active ? "translateY(-4px)" : "none",
                                boxShadow: active ? "0 14px 30px rgba(63,82,56,0.25)" : "none",
                            }}
                        >
                            <span
                                className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
                                style={{ ...syne, background: active ? "rgba(255,255,255,0.22)" : S.mist, color: active ? "#fff" : S.deep }}
                            >
                                {i + 1}
                            </span>
                            <span className="mt-3 block text-base font-semibold leading-snug" style={poppins}>{f.title}</span>
                            <span className="mt-1 block text-sm leading-relaxed" style={{ ...poppins, opacity: active ? 0.9 : 0.65 }}>{f.body}</span>
                        </button>
                    </li>
                );
            })}
        </ol>
    );
}

const SPASS = [
    { letter: "S", title: "Settlement Status", body: "Current legal status, pending actions, timeline milestones, outstanding documents" },
    { letter: "P", title: "Personal Background", body: "Core biographical data, family composition, languages, vulnerabilities, trauma flags" },
    { letter: "A", title: "Action Items Required", body: "What the receiving agency must do: housing, health screening, school enrollment, legal appointments" },
    { letter: "S", title: "Support Network Available", body: "Existing contacts, community connections, assigned mentor, family members already resettled nearby" },
    { letter: "S", title: "Synthesis by Receiver", body: "Receiving agency reads back their understanding. Must confirm handoff is marked complete in system." },
];

export function SPassHandoff() {
    const [done, setDone] = useState<boolean[]>(SPASS.map(() => false));
    const [ref, inView] = useInView<HTMLDivElement>(0.3);
    const count = done.filter(Boolean).length;
    const complete = count === SPASS.length;

    const toggle = (i: number) => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

    return (
        <div ref={ref} className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
            <ul className="space-y-3">
                {SPASS.map((row, i) => {
                    const checked = done[i];
                    return (
                        <li key={`${row.letter}-${i}`}>
                            <button
                                type="button"
                                onClick={() => toggle(i)}
                                aria-pressed={checked}
                                className="group flex w-full items-center gap-4 text-left"
                            >
                                <span
                                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105"
                                    style={{ ...syne, background: S.ink }}
                                >
                                    {checked ? <Check className="h-8 w-8" strokeWidth={3} /> : row.letter}
                                </span>
                                <span
                                    className="flex-1 rounded-2xl px-5 py-3 text-white transition-all duration-500"
                                    style={{
                                        background: checked ? S.gradient : "linear-gradient(160deg, #9aab92 0%, #7e9275 100%)",
                                        opacity: checked ? 1 : 0.85,
                                    }}
                                >
                                    <span className="block text-base font-semibold" style={poppins}>{row.title}</span>
                                    <span className="block text-sm leading-snug text-white/90" style={poppins}>{row.body}</span>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className="flex flex-col justify-between gap-6 rounded-3xl border-2 border-gray-200 p-6 sm:p-8">
                <div>
                    <p className="text-sm font-semibold text-gray-900" style={poppins}>Information lost in handoffs</p>
                    <p className="mt-1 text-xs text-gray-600" style={poppins}>Adapted from the I-PASS medical handoff protocol, in healthcare settings.</p>
                    <div className="mt-4 space-y-3">
                        {[
                            { label: "Without a structured handoff", v: 75, color: "#B9C4B1" },
                            { label: "With I-PASS", v: 37.5, color: S.deep },
                        ].map((b) => (
                            <div key={b.label}>
                                <div className="mb-1 flex justify-between text-xs text-gray-700" style={poppins}>
                                    <span>{b.label}</span>
                                    <span className="font-semibold tabular-nums">
                                        <CountUp to={b.v} active={inView} decimals={b.v % 1 ? 1 : 0} suffix="%" />
                                    </span>
                                </div>
                                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                                    <div
                                        className="h-full rounded-full"
                                        style={{ width: inView ? `${b.v}%` : "0%", background: b.color, transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div aria-live="polite">
                    <div
                        className="flex items-center gap-3 rounded-2xl p-4 transition-colors duration-500"
                        style={{ background: complete ? S.deep : S.mist, color: complete ? "#fff" : S.deep }}
                    >
                        {complete ? <Unlock className="h-6 w-6 shrink-0" /> : <Lock className="h-6 w-6 shrink-0" />}
                        <p className="text-sm font-medium leading-snug" style={poppins}>
                            {complete
                                ? "S-PASS complete. The receiving agency now has edit access to the record."
                                : `Record locked for the receiving agency. ${count} of ${SPASS.length} S-PASS steps done.`}
                        </p>
                    </div>
                    <p className="mt-3 text-xs text-gray-600" style={poppins}>
                        Every agency-to-agency transfer requires a completed S-PASS before the receiving agency gains
                        edit access. Tick the steps to try it.
                    </p>
                    {count > 0 && (
                        <button
                            type="button"
                            onClick={() => setDone(SPASS.map(() => false))}
                            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold underline-offset-2 hover:underline"
                            style={{ color: S.deep }}
                        >
                            <RotateCcw className="h-3.5 w-3.5" /> Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ---------- App: phone you can scroll ---------- */

const APP_SCREENS = [
    {
        tab: "Caseworker Dashboard",
        body: "Provides visibility into caseload, task progress, and performance to help caseworkers manage their work and prioritize effectively.",
        img: "/images/solace/screen-caseload.webp",
        w: 402,
        h: 1444,
    },
    {
        tab: "Cases",
        body: "Manage and update client records, documents, and family information in one centralized space, including access to Tap ID.",
        img: "/images/solace/screen-cases.webp",
        w: 503,
        h: 1215,
    },
    {
        tab: "Solace Scan",
        body: "Digitizes documents and intake materials through a guided scanning flow, reducing manual entry and improving data accuracy.",
        img: "/images/solace/screen-scan.webp",
        w: 402,
        h: 1059,
    },
    {
        tab: "Protocols",
        body: "A resource hub providing standardized guidelines, tools, and best practices to support consistent care and decision-making.",
        img: "/images/solace/screen-protocols.webp",
        w: 402,
        h: 1200,
    },
    {
        tab: "Smart Tap",
        body: "Uses NFC technology to instantly verify a refugee's identity and securely access their profile by tapping their S-ID card against a phone.",
        img: "/images/solace/screen-sid.webp",
        w: 402,
        h: 874,
    },
];

export function AppExplorer() {
    const [i, setI] = useState(0);
    const screen = APP_SCREENS[i];

    return (
        <div className="grid items-center gap-6 overflow-hidden rounded-3xl p-5 sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:gap-12" style={{ background: S.gradient }}>
            <div>
                <div role="tablist" aria-label="Solace app screens" className="flex flex-wrap gap-2">
                    {APP_SCREENS.map((s, n) => (
                        <button
                            key={s.tab}
                            type="button"
                            role="tab"
                            aria-selected={n === i}
                            onClick={() => setI(n)}
                            className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                            style={{ ...poppins, background: n === i ? "#fff" : "rgba(255,255,255,0.16)", color: n === i ? S.deep : "#fff" }}
                        >
                            {s.tab}
                        </button>
                    ))}
                </div>
                <div key={i} className="mt-6 text-white" style={{ animation: "cs-rise 450ms ease both" }} aria-live="polite">
                    <h4 className="text-3xl font-bold sm:text-4xl" style={syne}>{screen.tab}</h4>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/90" style={poppins}>{screen.body}</p>
                    <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/60" style={poppins}>Scroll inside the phone</p>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[280px]">
                <div className="relative rounded-[2.8rem] border-[10px] border-[#14170f] bg-white shadow-2xl">
                    <span className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#14170f]" />
                    <div className="h-[540px] overflow-y-auto overscroll-contain rounded-[2.1rem] bg-white pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <img
                            key={screen.img}
                            src={screen.img}
                            width={screen.w}
                            height={screen.h}
                            alt={`${screen.tab} screen of the Solace app`}
                            className="block h-auto w-full"
                            style={{ animation: "cs-rise 450ms ease both" }} loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Security & data ---------- */

const SECURITY: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Lock, title: "End-to-End Protected", body: "All data is encrypted at rest and in transit. Document images are stored separately and require additional authorization to access." },
    { icon: ScrollText, title: "Immutable Log", body: "Every action is logged, including who scanned the document, when, on which device, and any changes made. Logs cannot be edited or deleted." },
    { icon: Globe, title: "Jurisdiction Aware", body: "Data can be hosted in-country to meet legal requirements and cannot leave the jurisdiction without authorization." },
    { icon: ShieldCheck, title: "Designed Against Harm", body: "All government data requests are logged and reviewed, and bulk data exports require multi-party approval." },
];

export function SecurityGrid() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {SECURITY.map((s) => {
                const Icon = s.icon;
                return (
                    <div
                        key={s.title}
                        className="group relative overflow-hidden rounded-3xl p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
                        style={{ background: S.gradient }}
                    >
                        <Icon
                            className="absolute -right-4 -top-4 h-32 w-32 text-white/10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
                            strokeWidth={1.2}
                            aria-hidden="true"
                        />
                        <Icon className="relative h-8 w-8" strokeWidth={1.6} />
                        <h4 className="relative mt-10 text-2xl font-bold" style={syne}>{s.title}</h4>
                        <p className="relative mt-2 text-sm leading-relaxed text-white/90 sm:text-base" style={poppins}>{s.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

/* ---------- Usability scenarios ---------- */

const USABILITY = [
    {
        tab: "Solace Scanner",
        sub: "Intake and field use",
        img: "/images/solace/use-scanner.webp",
        alt: "A caseworker scanning a document with the Solace scanner at a camp intake table",
        body: [
            "Caseworkers begin at intake, where accuracy and speed are critical. Using the Solace Scanner, documents are digitized in real time, reducing manual entry and eliminating repeated intake across organizations.",
            "At this stage, caseworkers establish a reliable foundation, turning fragmented paperwork into structured data that supports continuity from the start.",
        ],
    },
    {
        tab: "Solace ID & App",
        sub: "Client and caseworker access",
        img: "/images/solace/use-id.webp",
        alt: "A hand holding a Solace ID card in front of a refugee camp",
        body: [
            "After intake, caseworkers activate and connect individuals to their Solace ID, creating a portable identity that moves with them across services.",
            "They support individuals in accessing their information, appointments, and next steps, improving transparency and reducing confusion.",
        ],
    },
    {
        tab: "Case Management Platform",
        sub: "Cross-organization coordination",
        img: "/images/solace/use-platform.webp",
        alt: "A caseworker using the Solace case management platform at a desk",
        body: [
            "Within the platform, caseworkers manage ongoing support, track progress, and coordinate with other organizations.",
            "They make sure context is preserved during handoffs, maintaining continuity, accountability, and clarity as individuals move through the system.",
        ],
    },
];

export function UsabilityTabs() {
    const [i, setI] = useState(0);
    const u = USABILITY[i];
    return (
        <div className="overflow-hidden rounded-3xl border-2 border-gray-200">
            <div role="tablist" aria-label="Usability scenarios" className="grid grid-cols-1 border-b-2 border-gray-200 sm:grid-cols-3">
                {USABILITY.map((t, n) => (
                    <button
                        key={t.tab}
                        type="button"
                        role="tab"
                        aria-selected={n === i}
                        onClick={() => setI(n)}
                        className="relative px-5 py-4 text-left transition-colors"
                        style={{ background: n === i ? S.mist : "#fff" }}
                    >
                        <span className="block text-base font-semibold text-gray-900" style={poppins}>{t.tab}</span>
                        <span className="block text-sm text-gray-600" style={poppins}>{t.sub}</span>
                        <span
                            className="absolute inset-x-0 bottom-0 h-[3px] origin-left transition-transform duration-500"
                            style={{ background: S.deep, transform: n === i ? "scaleX(1)" : "scaleX(0)" }}
                        />
                    </button>
                ))}
            </div>
            <div className="grid gap-0 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                <div className="relative min-h-[240px] overflow-hidden">
                    {USABILITY.map((t, n) => (
                        <img
                            key={t.img}
                            src={t.img}
                            alt={n === i ? t.alt : ""}
                            aria-hidden={n !== i}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                            style={{ opacity: n === i ? 1 : 0 }}
                        />
                    ))}
                </div>
                <div key={i} className="space-y-4 p-6 sm:p-10" style={{ animation: "cs-rise 450ms ease both" }}>
                    <h4 className="text-2xl font-bold text-gray-900 sm:text-3xl" style={syne}>{u.tab}</h4>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ ...poppins, color: S.sage }}>{u.sub}</p>
                    {u.body.map((p) => (
                        <p key={p} className="text-base leading-relaxed text-gray-700" style={poppins}>{p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------- Closing band ---------- */

export function SolaceClose() {
    return (
        <section className="cs-anim relative overflow-hidden rounded-3xl text-center" style={{ background: S.sky }}>
            <div className="relative z-10 px-6 pb-56 pt-14 sm:pb-72 sm:pt-20">
                <img src="/images/solace/mark.svg" alt="Solace" className="mx-auto h-16 w-auto sm:h-20" loading="lazy" decoding="async" />
                <p className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl" style={syne}>
                    Build a system that <span className="font-extrabold">doesn&apos;t forget people</span>
                </p>
            </div>
            <img
                src="/images/solace/silhouettes.webp"
                alt="Silhouettes of people walking at dusk"
                loading="lazy"
                className="absolute bottom-0 left-[-3%] w-[106%] max-w-none object-cover object-bottom"
                style={{ animation: "cs-drift 18s ease-in-out infinite alternate", height: "46%" }}
            />
        </section>
    );
}
