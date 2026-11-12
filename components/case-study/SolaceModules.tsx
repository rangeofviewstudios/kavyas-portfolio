'use client';

import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
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
import { Stepper, useInView, usePrefersReducedMotion } from "./shared";

/*
  Solace modules, on the case study kit's type and layout: Geist only, flat sage panels instead of
  gradients, no oversized decorative words, no hover blur / scale effects. Tabs use the same segmented
  control as the FIFA map.
*/

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

const LINE = "#E1E6DB";
const LABEL = "font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.08em] text-[#75716B]";
const H4 = "text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#161514]";
const BODY = "text-lg leading-[1.6] text-[#161514]";
/* Flat sage stage for product renders */
const STAGE = "rounded-2xl";
const stageStyle: CSSProperties = { background: S.sage };

/* ---------- Segmented control (same style as the FIFA map tabs) ---------- */

function Segmented<T extends string>({
    label,
    items,
    value,
    onChange,
    controls,
}: {
    label: string;
    items: { id: T; label: string }[];
    value: T;
    onChange: (id: T) => void;
    controls?: string;
}) {
    return (
        <div role="tablist" aria-label={label} className="inline-flex max-w-full flex-wrap gap-1 rounded-[22px] border border-[#E1E6DB] bg-white p-1">
            {items.map((it) => {
                const on = it.id === value;
                return (
                    <button
                        key={it.id}
                        type="button"
                        role="tab"
                        aria-selected={on}
                        aria-controls={controls}
                        onClick={() => onChange(it.id)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-[#161514] text-white" : "text-[#161514] hover:bg-[#EEF2EA]"}`}
                    >
                        {it.label}
                    </button>
                );
            })}
        </div>
    );
}

/* ---------- Hero (no longer rendered; kept for reference) ---------- */

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
                        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
                        style={{ width: "max(100%, 177.78vh)", height: "max(100%, 56.25vw)" }}
                    />
                </div>
                <h2 className="sr-only">Solace · Employee Handbook. Build a system that doesn&apos;t forget people</h2>
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
        <div ref={ref} className="rounded-2xl border border-[#E1E6DB] bg-white p-10 max-[900px]:p-6">
            <div className="relative">
                <div className="absolute left-[8.333%] right-[8.333%] top-7 hidden border-t border-dashed md:block" style={{ borderColor: S.soft }} />
                <div
                    className="absolute left-[8.333%] top-[27px] hidden h-[2px] transition-[width] duration-700 md:block"
                    style={{ width: `${progress}%`, background: S.deep }}
                />
                <ol className="relative grid grid-cols-3 gap-y-6 md:grid-cols-6">
                    {JOURNEY.map((stage, i) => {
                        const Icon = stage.icon;
                        const reached = i <= active;
                        return (
                            <li key={stage.title} className="flex flex-col items-start md:items-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActive(i);
                                        setEngaged(true);
                                    }}
                                    aria-label={`${stage.title}, stage ${i + 1} of ${JOURNEY.length}`}
                                    aria-current={i === active ? "step" : undefined}
                                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F5238] focus-visible:ring-offset-2"
                                    style={{
                                        background: reached ? S.deep : S.mist,
                                        color: reached ? "#fff" : S.deep,
                                        boxShadow: i === active ? `0 0 0 4px #fff, 0 0 0 6px ${S.deep}` : "none",
                                    }}
                                >
                                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                                </button>
                                <span
                                    className="mt-3 text-sm font-medium leading-tight text-[#161514] md:text-center"
                                    style={{ opacity: i === active ? 1 : 0.6 }}
                                >
                                    {stage.title}
                                </span>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div key={active} className="mt-8 rounded-xl bg-[#EEF2EA] p-8 max-[900px]:p-6" aria-live="polite">
                <p className={LABEL}>
                    Stage {String(active + 1).padStart(2, "0")} / {String(JOURNEY.length).padStart(2, "0")}
                </p>
                <h4 className={`mt-3 ${H4}`}>{current.title}</h4>
                <p className={`mt-2 max-w-[60ch] ${BODY}`}>{current.body}</p>
            </div>
        </div>
    );
}

/* ---------- Ecosystem: three connected tools ---------- */

const ECOSYSTEM = [
    {
        word: "Capture",
        title: "Document Scanner",
        body: "A secure, portable intake scanner that turns physical documents into a verified digital record.",
        img: "/images/solace/scanner.webp",
        alt: "The Solace document scanner, a slim olive-green handheld device",
        imgClass: "w-[70%] -rotate-6",
    },
    {
        word: "Preserve",
        title: "Identification Card",
        body: "A cryptographic ID, so identity and case history don't reset at every transition.",
        img: "/images/solace/id-3d.webp",
        alt: "The Solace ID card, cream with a portrait photo and NFC symbol",
        imgClass: "w-[74%] rotate-3",
    },
    {
        word: "Connect",
        title: "Case Management",
        body: "A web platform that gives NGOs shared visibility into needs, capacity and follow-up.",
        img: "/images/solace/dashboard.webp",
        alt: "The Solace case coordination dashboard",
        imgClass: "w-[86%] rounded-lg",
    },
];

export function EcosystemBands() {
    return (
        <ol className="grid gap-6 md:grid-cols-3">
            {ECOSYSTEM.map((e, i) => (
                <li key={e.word} className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E1E6DB] bg-white">
                    <div className="flex aspect-[4/3] items-center justify-center" style={stageStyle}>
                        <img src={e.img} alt={e.alt} loading="lazy" className={`${e.imgClass} drop-shadow-xl`} />
                    </div>
                    <div className="p-8 max-[900px]:p-6">
                        <p className={LABEL}>
                            {String(i + 1).padStart(2, "0")} · {e.word}
                        </p>
                        <h4 className={`mt-3 ${H4}`}>{e.title}</h4>
                        <p className={`mt-2 ${BODY}`}>{e.body}</p>
                    </div>
                </li>
            ))}
        </ol>
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
                    className="relative h-3.5 w-3.5 rounded-full border-2"
                    style={{ background: on ? tone : "transparent", borderColor: tone }}
                />
            </span>
        </button>
    );
}

/** Selectable list item used beside the scanner and the ID card */
function SpotButton({ on, onSelect, title, children }: { on: boolean; onSelect: () => void; title: string; children?: ReactNode }) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-pressed={on}
            className="w-full rounded-xl border p-4 text-left transition-colors"
            style={{ borderColor: on ? S.deep : LINE, background: on ? "#EEF2EA" : "#fff" }}
        >
            <span className="block text-lg font-medium text-[#161514]">{title}</span>
            {children}
        </button>
    );
}

export function ScannerExplorer() {
    const [sel, setSel] = useState("fingerprint");
    return (
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
            <div className={`relative overflow-hidden ${STAGE}`} style={stageStyle}>
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
                {SCANNER_SPOTS.map((s) => (
                    <li key={s.id}>
                        <SpotButton on={sel === s.id} onSelect={() => setSel(s.id)} title={s.label}>
                            <span className="mt-0.5 block text-lg text-[#75716B]">{s.note}</span>
                        </SpotButton>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const SCAN_STEPS = [
    { title: "Capture", body: "The caseworker selects the document type, places it in the scanner and presses capture. The image goes to the phone, even offline." },
    { title: "Pre-processing", body: "The system straightens the image, enhances faded text, and removes glare, shadows and noise." },
    { title: "Extract", body: "It detects the language, extracts key fields (name, date of birth, nationality, case number), and uses AI to correct errors and score confidence." },
    { title: "Validate and commit", body: "High-confidence fields are accepted; uncertain ones go to a caseworker. Verified data attaches to the person's unique ID." },
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
        <div>
            <Segmented
                label="Card side"
                items={[
                    { id: "front", label: "Front" },
                    { id: "back", label: "Back" },
                ]}
                value={face}
                onChange={flip}
            />
            <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
                <div className={`overflow-hidden p-10 max-[900px]:p-6 ${STAGE}`} style={stageStyle}>
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
                            <div className="absolute inset-0 overflow-hidden rounded-[18px] shadow-2xl" style={{ ...faceStyle, transform: "rotateY(180deg)" }}>
                                <img src="/images/solace/id-back.webp" alt="Back of the Solace ID card" className="h-full w-full" loading="lazy" decoding="async" />
                                {face === "back" &&
                                    BACK_SPOTS.map((s) => (
                                        <Pin key={s.id} x={s.x} y={s.y} on={sel === s.id} label={s.label} onSelect={() => setSel(s.id)} tone={S.ink} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="grid content-start gap-2">
                    {spots.map((s) => {
                        const on = sel === s.id;
                        return (
                            <li key={s.id}>
                                <SpotButton on={on} onSelect={() => setSel(s.id)} title={s.label}>
                                    <span
                                        className="grid transition-all duration-500 ease-out"
                                        style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
                                    >
                                        <span className="overflow-hidden">
                                            <span className="block space-y-1 pt-2 text-lg text-[#45423E]">
                                                {s.bullets.map((b) => (
                                                    <span key={b} className="flex gap-2">
                                                        <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: S.deep }} />
                                                        {b}
                                                    </span>
                                                ))}
                                            </span>
                                        </span>
                                    </span>
                                </SpotButton>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

const TAP_STEPS = [
    { title: "Tap", body: "In the Solace app, the caseworker opens Smart Tap. The refugee holds their S-ID card to the phone, and the NFC reader detects the encrypted chip." },
    { title: "Authenticate", body: "Phone and DESFire EV3 chip run a mutual authentication handshake, so both are verified before any data moves." },
    { title: "Transmit", body: "The card sends only the encrypted Solace ID number (SID). No personal information, documents or legal status live on the card." },
    { title: "Retrieve and log", body: "The SID retrieves the case profile, filtered by the agency's role, jurisdiction and consent. The access is written to the Solace audit ledger." },
];

const TAP_STATUS = ["Waiting for a tap", "Handshake in progress", "SID sent, encrypted", "Access logged in the ledger"];

export function TapFlow() {
    const [step, setStep] = useState(0);
    const onChange = useCallback((i: number) => setStep(i), []);
    return (
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
            <Stepper steps={TAP_STEPS} accent={S.deep} track="#cfd8c8" onChange={onChange} />
            <div className={`relative overflow-hidden p-8 max-[900px]:p-6 ${STAGE}`} style={stageStyle}>
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
                <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#161514]" aria-live="polite">
                    {step >= 2 ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                    {TAP_STATUS[step]}
                </div>
            </div>
        </div>
    );
}

/* ---------- Platform: laptop zoom ---------- */

export function DashboardZoom() {
    const [origin, setOrigin] = useState({ x: 50, y: 50 });
    const [zoom, setZoom] = useState(false);

    const move = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        setOrigin({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };

    return (
        <div className={`p-10 max-[900px]:p-6 ${STAGE}`} style={stageStyle}>
            <div className="mx-auto max-w-4xl">
                <div className="rounded-t-2xl border-[8px] border-b-0 border-[#1a1d18] bg-black sm:border-[12px]">
                    <div
                        className="relative aspect-[2000/1075] w-full cursor-zoom-in overflow-hidden"
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
                            style={{ opacity: zoom ? 0 : 1 }}
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
    { title: "Case Coordination Dashboard", body: "Manage refugee cases and track service delivery in one place." },
    { title: "Partner Organization Network", body: "A directory of NGOs and providers, with their services and capacity." },
    { title: "Seamless Case Transfers", body: "A structured handoff that keeps care continuous across organizations." },
    { title: "Sol AI Assistant", body: "Helps caseworkers find information and coordinate services." },
    { title: "Sol Messaging", body: "Connects caseworkers across agencies." },
];

/** Five static feature cards. */
export function DashboardFeatures() {
    return (
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {DASH_FEATURES.map((f, i) => (
                <li key={f.title} className="flex h-full flex-col rounded-xl border border-[#E1E6DB] bg-white p-7 max-[900px]:p-6">
                    <p className={LABEL}>{String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-3 text-lg font-semibold leading-[1.3] text-[#161514]">{f.title}</p>
                    <p className="mt-2 text-lg leading-[1.5] text-[#45423E]">{f.body}</p>
                </li>
            ))}
        </ol>
    );
}

/* ---------- S-PASS handoff ---------- */

const SPASS = [
    { letter: "S", title: "Settlement Status", body: "Legal status, pending actions, timeline milestones, outstanding documents" },
    { letter: "P", title: "Personal Background", body: "Biographical data, family, languages, vulnerabilities, trauma flags" },
    { letter: "A", title: "Action Items Required", body: "What the receiving agency must do: housing, health screening, school, legal appointments" },
    { letter: "S", title: "Support Network Available", body: "Contacts, community connections, assigned mentor, family resettled nearby" },
    { letter: "S", title: "Synthesis by Receiver", body: "The receiving agency reads back its understanding and marks the handoff complete" },
];

export function SPassHandoff() {
    const [done, setDone] = useState<boolean[]>(SPASS.map(() => false));
    const count = done.filter(Boolean).length;
    const complete = count === SPASS.length;

    const toggle = (i: number) => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

    return (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
            <ul className="space-y-3">
                {SPASS.map((row, i) => {
                    const checked = done[i];
                    return (
                        <li key={`${row.letter}-${i}`}>
                            <button type="button" onClick={() => toggle(i)} aria-pressed={checked} className="flex w-full items-stretch gap-3 text-left">
                                <span
                                    className="flex w-14 shrink-0 items-center justify-center rounded-xl text-2xl font-semibold text-white"
                                    style={{ background: checked ? S.deep : S.ink }}
                                >
                                    {checked ? <Check className="h-6 w-6" strokeWidth={3} /> : row.letter}
                                </span>
                                <span
                                    className="flex-1 rounded-xl border px-5 py-3 transition-colors"
                                    style={{ borderColor: checked ? S.deep : LINE, background: checked ? "#EEF2EA" : "#fff" }}
                                >
                                    <span className="block text-lg font-medium text-[#161514]">{row.title}</span>
                                    <span className="block text-base leading-snug text-[#45423E]">{row.body}</span>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#E1E6DB] bg-white p-8 max-[900px]:p-6" aria-live="polite">
                <div>
                    <p className={LABEL}>Try it</p>
                    <p className={`mt-3 ${BODY}`}>
                        Every agency-to-agency transfer needs a completed S-PASS before the receiving agency can edit the record. Tick the
                        steps.
                    </p>
                </div>
                <div>
                    <div
                        className="flex items-center gap-3 rounded-xl p-4 transition-colors duration-500"
                        style={{ background: complete ? S.deep : S.mist, color: complete ? "#fff" : S.deep }}
                    >
                        {complete ? <Unlock className="h-6 w-6 shrink-0" /> : <Lock className="h-6 w-6 shrink-0" />}
                        <p className="text-base font-medium leading-snug">
                            {complete
                                ? "S-PASS complete. The receiving agency can now edit the record."
                                : `Record locked for the receiving agency. ${count} of ${SPASS.length} steps done.`}
                        </p>
                    </div>
                    {count > 0 && (
                        <button
                            type="button"
                            onClick={() => setDone(SPASS.map(() => false))}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-2 hover:underline"
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

/* ---------- Flows: scan, tap, handoff in one segmented control ---------- */

const FLOWS = [
    { id: "scan", label: "1 · Scan a document", line: "Intake happens once: the scanner turns paper into a verified record, even offline." },
    { id: "tap", label: "2 · Tap the ID", line: "One tap opens the right record, and only what that agency is allowed to see." },
    { id: "handoff", label: "3 · Hand off a case", line: "S-PASS, adapted from the I-PASS medical handoff protocol, makes sure context travels with the case." },
] as const;

export function SolaceFlows() {
    const [active, setActive] = useState<(typeof FLOWS)[number]["id"]>("scan");
    const flow = FLOWS.find((f) => f.id === active) ?? FLOWS[0];
    return (
        <div>
            <Segmented<(typeof FLOWS)[number]["id"]> label="Flow" items={FLOWS.map((f) => ({ id: f.id, label: f.label }))} value={active} onChange={setActive} controls="solace-flow-panel" />
            <p className={`mt-4 max-w-[72ch] ${BODY}`} aria-live="polite">
                {flow.line}
            </p>
            <div id="solace-flow-panel" role="tabpanel" className="mt-6">
                {active === "scan" && (
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
                        <ScanSteps />
                        <img
                            src="/images/solace/use-scanner.webp"
                            alt="A caseworker scanning a document with the Solace scanner at a camp intake table"
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-2xl object-cover"
                        />
                    </div>
                )}
                {active === "tap" && <TapFlow />}
                {active === "handoff" && <SPassHandoff />}
            </div>
        </div>
    );
}

/* ---------- App: phone you can scroll ---------- */

const APP_SCREENS = [
    {
        tab: "Dashboard",
        title: "Caseworker Dashboard",
        body: "Caseload, task progress and performance, so caseworkers can prioritize.",
        img: "/images/solace/screen-caseload.webp",
        w: 402,
        h: 1444,
    },
    {
        tab: "Cases",
        title: "Cases",
        body: "Client records, documents and family information in one place, including Tap ID.",
        img: "/images/solace/screen-cases.webp",
        w: 503,
        h: 1215,
    },
    {
        tab: "Scan",
        title: "Solace Scan",
        body: "A guided scanning flow that digitizes documents and cuts manual entry.",
        img: "/images/solace/screen-scan.webp",
        w: 402,
        h: 1059,
    },
    {
        tab: "Protocols",
        title: "Protocols",
        body: "Standard guidelines, tools and best practices for consistent care.",
        img: "/images/solace/screen-protocols.webp",
        w: 402,
        h: 1200,
    },
    {
        tab: "Smart Tap",
        title: "Smart Tap",
        body: "Tap an S-ID card to the phone to verify identity and open the profile securely.",
        img: "/images/solace/screen-sid.webp",
        w: 402,
        h: 874,
    },
];

export function AppExplorer() {
    const [i, setI] = useState(0);
    const screen = APP_SCREENS[i];

    return (
        <div>
            <Segmented
                label="Solace app screens"
                items={APP_SCREENS.map((s, n) => ({ id: String(n), label: s.tab }))}
                value={String(i)}
                onChange={(id) => setI(Number(id))}
                controls="solace-app-panel"
            />
            <div id="solace-app-panel" role="tabpanel" className="mt-6 grid items-center gap-10 rounded-2xl bg-[#EEF2EA] p-10 max-[900px]:p-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
                <div aria-live="polite">
                    <h4 className={H4}>{screen.title}</h4>
                    <p className={`mt-2 max-w-[48ch] ${BODY}`}>{screen.body}</p>
                    <p className={`mt-5 ${LABEL}`}>Scroll inside the phone</p>
                </div>
                <div className="w-full max-w-[280px] max-lg:mx-auto lg:justify-self-end">
                    <div className="relative rounded-[2.8rem] border-[10px] border-[#14170f] bg-white shadow-2xl">
                        <span className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#14170f]" />
                        <div className="h-[540px] overflow-y-auto overscroll-contain rounded-[2.1rem] bg-white pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <img
                                key={screen.img}
                                src={screen.img}
                                width={screen.w}
                                height={screen.h}
                                alt={`${screen.title} screen of the Solace app`}
                                className="block h-auto w-full"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Security & data ---------- */

const SECURITY: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Lock, title: "End-to-end protected", body: "Data is encrypted at rest and in transit. Document images are stored separately and need extra authorization." },
    { icon: ScrollText, title: "Immutable log", body: "Every action is logged: who scanned, when, on which device, and what changed. Logs can't be edited or deleted." },
    { icon: Globe, title: "Jurisdiction aware", body: "Data can be hosted in-country and can't leave the jurisdiction without authorization." },
    { icon: ShieldCheck, title: "Designed against harm", body: "Government data requests are logged and reviewed; bulk exports need multi-party approval." },
];

export function SecurityGrid() {
    return (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECURITY.map((s) => {
                const Icon = s.icon;
                return (
                    <li key={s.title} className="flex h-full flex-col rounded-xl border border-[#E1E6DB] bg-white p-7 max-[900px]:p-6">
                        <Icon className="h-6 w-6" strokeWidth={1.8} style={{ color: S.deep }} aria-hidden="true" />
                        <p className="mt-5 text-lg font-semibold text-[#161514]">{s.title}</p>
                        <p className="mt-2 text-lg leading-[1.5] text-[#45423E]">{s.body}</p>
                    </li>
                );
            })}
        </ul>
    );
}

/* ---------- Usability scenarios ---------- */

const USABILITY = [
    {
        tab: "Solace Scanner",
        sub: "Intake and field use",
        img: "/images/solace/use-scanner.webp",
        alt: "A caseworker scanning a document with the Solace scanner at a camp intake table",
        body: "At intake, documents are digitized in real time, cutting manual entry and repeated intake across organizations.",
    },
    {
        tab: "Solace ID & App",
        sub: "Client and caseworker access",
        img: "/images/solace/use-id.webp",
        alt: "A hand holding a Solace ID card in front of a refugee camp",
        body: "Caseworkers connect each person to a Solace ID, a portable identity that moves with them, and help them see their information, appointments and next steps.",
    },
    {
        tab: "Case Management Platform",
        sub: "Cross-organization coordination",
        img: "/images/solace/use-platform.webp",
        alt: "A caseworker using the Solace case management platform at a desk",
        body: "Caseworkers track progress and coordinate with other organizations, keeping context intact through every handoff.",
    },
];

export function UsabilityTabs() {
    const [i, setI] = useState(0);
    const u = USABILITY[i];
    return (
        <div>
            <Segmented
                label="Usability scenarios"
                items={USABILITY.map((t, n) => ({ id: String(n), label: t.tab }))}
                value={String(i)}
                onChange={(id) => setI(Number(id))}
                controls="solace-use-panel"
            />
            <div id="solace-use-panel" role="tabpanel" className="mt-6 grid overflow-hidden rounded-2xl border border-[#E1E6DB] bg-white md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                <div className="relative min-h-[260px]">
                    {USABILITY.map((t, n) => (
                        <img
                            key={t.img}
                            src={t.img}
                            alt={n === i ? t.alt : ""}
                            aria-hidden={n !== i}
                            loading="eager"
                            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                            style={{ opacity: n === i ? 1 : 0 }}
                        />
                    ))}
                </div>
                <div className="p-10 max-[900px]:p-6" aria-live="polite">
                    <p className={LABEL}>{u.sub}</p>
                    <h4 className={`mt-3 ${H4}`}>{u.tab}</h4>
                    <p className={`mt-3 max-w-[56ch] ${BODY}`}>{u.body}</p>
                </div>
            </div>
        </div>
    );
}

/* ---------- Closing band (no longer rendered; kept for reference) ---------- */

export function SolaceClose() {
    return (
        <section className="cs-anim relative overflow-hidden rounded-3xl" style={{ background: S.sky }}>
            <div className="relative z-10 px-6 pb-56 pt-14 sm:pb-72 sm:pt-20">
                <img src="/images/solace/mark.svg" alt="Solace" className="h-16 w-auto sm:h-20" loading="lazy" decoding="async" />
                <p className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                    Build a system that doesn&apos;t forget people
                </p>
            </div>
            <img
                src="/images/solace/silhouettes.webp"
                alt="Silhouettes of people walking at dusk"
                loading="lazy"
                className="absolute bottom-0 left-[-3%] w-[106%] max-w-none object-cover object-bottom"
                style={{ height: "46%" }}
            />
        </section>
    );
}

