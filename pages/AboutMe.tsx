'use client';

import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Gochi_Hand } from "next/font/google";

const hand = Gochi_Hand({ weight: "400", subsets: ["latin"] });

const HERO_VOLUME = 0.08;

function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        v.volume = HERO_VOLUME;

        // Attempt to autoplay with sound at 20% volume. Most browsers block
        // unmuted autoplay, so on failure we fall back to muted playback and
        // un-mute on the visitor's first interaction.
        const attachUnmuteOnInteraction = () => {
            const unmute = () => {
                if (!videoRef.current) return;
                videoRef.current.muted = false;
                videoRef.current.volume = HERO_VOLUME;
                setMuted(false);
                cleanup();
            };
            const cleanup = () => {
                window.removeEventListener("pointerdown", unmute);
                window.removeEventListener("keydown", unmute);
                window.removeEventListener("scroll", unmute);
                window.removeEventListener("touchstart", unmute);
            };
            window.addEventListener("pointerdown", unmute, { once: true });
            window.addEventListener("keydown", unmute, { once: true });
            window.addEventListener("scroll", unmute, { once: true });
            window.addEventListener("touchstart", unmute, { once: true });
            return cleanup;
        };

        let cleanup: (() => void) | undefined;
        v.muted = false;
        v.play()
            .then(() => setMuted(false))
            .catch(() => {
                v.muted = true;
                setMuted(true);
                v.play().catch(() => {});
                cleanup = attachUnmuteOnInteraction();
            });

        return () => cleanup?.();
    }, []);

    const toggleSound = () => {
        const v = videoRef.current;
        if (!v) return;
        const next = !v.muted;
        v.muted = next;
        if (!next) {
            v.volume = HERO_VOLUME;
            if (v.paused) v.play().catch(() => {});
        }
        setMuted(next);
    };

    return (
        <div className="relative overflow-hidden bg-black/10">
            <video
                ref={videoRef}
                autoPlay
                loop
                onEnded={(e) => {
                    e.currentTarget.currentTime = 0;
                    e.currentTarget.play().catch(() => {});
                }}
                playsInline
                preload="metadata"
                aria-label="Kavya — about me intro video"
                className="w-full h-[58vh] sm:h-[70vh] md:h-[82vh] object-cover"
            >
                <source src="/aboutmeherovid.mp4" type="video/mp4" />
            </video>

            {/* Cinematic overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/15" />

            {/* Sound toggle */}
            <button
                onClick={toggleSound}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md bg-black/30 border border-white/25 text-white transition-all duration-200 hover:bg-black/45 hover:-translate-y-0.5 focus:outline-none"
            >
                {muted ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 5 6 9H2v6h4l5 4V5z" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 5 6 9H2v6h4l5 4V5z" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                )}
            </button>
        </div>
    );
}

type Snap = {
    src: string;
    alt: string;
    /* handwritten line on the back of the polaroid */
    story: string;
    /* position inside its suitcase half, in % */
    top: string;
    left: string;
    width: string;
    rotate: number;
};

const LEFT_HALF: Snap[] = [
    { src: "/images/aboutme/aboutme3.png", alt: "Kavya as a kid playing in the snow", story: "Toronto winters. Tongue out, always.", top: "7%", left: "7%", width: "42%", rotate: -6 },
    { src: "/images/aboutme/aboutme2.png", alt: "Kavya presenting at an industry event", story: "Presenting the work, nerves and all.", top: "10%", left: "52%", width: "40%", rotate: 5 },
    { src: "/images/torontoskyline.png", alt: "Toronto skyline", story: "Home. Always will be.", top: "56%", left: "5%", width: "42%", rotate: -2 },
    { src: "/images/aboutme/aboutme6.png", alt: "Kavya with someone who inspires her", story: "My biggest inspiration in life.", top: "50%", left: "51%", width: "42%", rotate: 3 },
];

const RIGHT_HALF: Snap[] = [
    { src: "/images/aboutme/aboutme4.png", alt: "Kavya with a close friend", story: "Friends who feel like family.", top: "6%", left: "46%", width: "44%", rotate: 4 },
    { src: "/images/aboutme/aboutme1.png", alt: "Kavya at home", story: "Recharging between adventures.", top: "22%", left: "7%", width: "40%", rotate: -5 },
    { src: "/images/aboutme/aboutme5.png", alt: "Kavya kayaking", story: "Paddling somewhere new.", top: "54%", left: "47%", width: "44%", rotate: -3 },
];

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Flips true when the element scrolls into view (or immediately with reduced motion).
   With once=false it flips back to false when the element leaves view. */
function useOpenOnView<T extends HTMLElement>(options: IntersectionObserverInit = { threshold: 0.35 }, once = true) {
    const ref = useRef<T>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setOpen(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setOpen(true);
                    if (once) io.disconnect();
                } else if (!once) {
                    setOpen(false);
                }
            },
            options
        );
        io.observe(el);
        return () => io.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { ref, open };
}

const INTRO_PARAGRAPHS = [
    "Hi! I'm Kavya, a UX designer currently based in Atlanta and originally from Toronto. I grew up loving basketball and will always be loyal to the Toronto Raptors.",
    "A lot of my creativity comes from exploring new places, meeting different people, and experiencing cultures through food, travel, and everyday moments. I'm always inspired by the little details that make experiences feel memorable, human, and connected.",
];

/* Types the paragraphs out once they scroll into view. The full text is always laid out
   (untyped part is transparent) so the page never reflows while typing. */
function TypewriterIntro() {
    const { ref, open } = useOpenOnView<HTMLDivElement>({ threshold: 0.4 });
    const [count, setCount] = useState(0);
    const total = INTRO_PARAGRAPHS.reduce((n, p) => n + p.length, 0);

    useEffect(() => {
        if (!open) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(total);
            return;
        }
        const id = window.setInterval(() => {
            setCount((c) => {
                if (c >= total) {
                    window.clearInterval(id);
                    return c;
                }
                return c + 1;
            });
        }, 22);
        return () => window.clearInterval(id);
    }, [open, total]);

    let remaining = count;
    return (
        <div ref={ref} className="space-y-6 text-white/90 text-base sm:text-lg leading-relaxed max-w-xl">
            {INTRO_PARAGRAPHS.map((text, i) => {
                const typed = Math.max(0, Math.min(text.length, remaining));
                remaining -= text.length;
                const typing = typed > 0 && typed < text.length;
                return (
                    <p key={i}>
                        <span className="sr-only">{text}</span>
                        <span aria-hidden="true">
                            {text.slice(0, typed)}
                            {typing && <span className="inline-block w-[2px] h-[1em] -mb-[0.15em] ml-px bg-white/80 animate-pulse" />}
                            <span className="opacity-0">{text.slice(typed)}</span>
                        </span>
                    </p>
                );
            })}
        </div>
    );
}

function Polaroid({ snap, open, order }: { snap: Snap; open: boolean; order: number }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`absolute ${flipped ? "z-30" : "hover:z-20"}`}
            style={{
                top: snap.top,
                left: snap.left,
                width: snap.width,
                opacity: open ? 1 : 0,
                transform: open ? "none" : `translateY(-35%) rotate(${snap.rotate * 2.5}deg) scale(1.1)`,
                transition: `opacity 500ms ease-out, transform 900ms ${EASE_OUT}`,
                transitionDelay: `${700 + order * 110}ms`,
            }}
        >
            <button
                type="button"
                onClick={() => setFlipped((f) => !f)}
                aria-pressed={flipped}
                aria-label={`${snap.alt}. ${flipped ? "Show photo" : "Read the story"}`}
                className="group/snap block w-full [perspective:900px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                style={{ rotate: `${snap.rotate}deg` }}
            >
                <div
                    className="relative transition-transform duration-700 [transform-style:preserve-3d] group-hover/snap:scale-[1.06]"
                    style={{ transform: flipped ? "rotateY(180deg)" : "none", transitionTimingFunction: EASE_OUT }}
                >
                    {/* front */}
                    <div className="bg-white p-[4%] pb-[11%] shadow-[0_6px_18px_rgba(0,0,0,0.22)] [backface-visibility:hidden]">
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src={snap.src}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 30vw, 200px"
                                className="object-cover"
                                /* aboutme shots are pre-tilted cutouts with empty corners; zoom so they fill the frame */
                                style={snap.src.includes("/aboutme/") ? { transform: "scale(1.32)" } : undefined}
                            />
                        </div>
                    </div>
                    {/* back */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-[6%] bg-[#fbf8f1] p-[10%] text-center shadow-[0_10px_24px_rgba(0,0,0,0.3)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <p className={`${hand.className} text-[#2b2b2b] leading-snug`} style={{ fontSize: "clamp(0.6rem, 2.1cqw, 1.15rem)" }}>
                            {snap.story}
                        </p>
                        <span className="h-px w-1/3 bg-black/20" />
                    </div>
                </div>
            </button>
        </div>
    );
}

function BoardingPass({ open }: { open: boolean }) {
    return (
        <div
            className="absolute left-[5%] top-[68%] w-[40%]"
            style={{
                opacity: open ? 1 : 0,
                transform: open ? "rotate(-4deg)" : "translateY(-30%) rotate(-14deg)",
                transition: `opacity 500ms ease-out, transform 900ms ${EASE_OUT}`,
                transitionDelay: "1500ms",
            }}
            aria-label="Boarding pass from Toronto to Atlanta"
            role="img"
        >
            <div className="flex overflow-hidden rounded-[6px] bg-[#fbf8f1] shadow-[0_6px_16px_rgba(0,0,0,0.2)] text-[#2b2b2b]">
                <div className="flex-1 p-[6%]">
                    <p className="font-semibold tracking-[0.2em] uppercase text-black/45" style={{ fontSize: "clamp(0.3rem, 0.75cqw, 0.55rem)" }}>
                        Boarding pass
                    </p>
                    <div className="mt-[4%] flex items-center gap-[6%] font-semibold tracking-tight" style={{ fontSize: "clamp(0.7rem, 2.4cqw, 1.5rem)" }}>
                        <span>YYZ</span>
                        <svg viewBox="0 0 24 24" className="w-[1em] h-[1em] text-[hsl(86_10%_45%)]" fill="currentColor" aria-hidden="true">
                            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                        <span>ATL</span>
                    </div>
                    <p className="mt-[3%] uppercase tracking-[0.12em] text-black/55" style={{ fontSize: "clamp(0.3rem, 0.8cqw, 0.6rem)" }}>
                        Passenger · Kavya
                    </p>
                </div>
                <div className="w-[26%] border-l-2 border-dashed border-black/15 p-[4%] flex flex-col justify-center items-center gap-[8%]">
                    <p className="uppercase tracking-[0.12em] text-black/45" style={{ fontSize: "clamp(0.28rem, 0.7cqw, 0.5rem)" }}>Seat</p>
                    <p className="font-semibold" style={{ fontSize: "clamp(0.55rem, 1.6cqw, 1rem)" }}>UX</p>
                </div>
            </div>
        </div>
    );
}

function LuggageTag() {
    return (
        <div className="kr-tag absolute left-[41.5%] -top-[1%] z-30 w-[9%] origin-top">
            <div className="kr-tag__swing origin-top" style={{ rotate: "8deg" }}>
                {/* string */}
                <span className="mx-auto block h-[clamp(10px,2cqw,22px)] w-px bg-[#c9b48f]" />
                <div
                    className="relative bg-[#d8c19a] px-[10%] pb-[14%] pt-[22%] text-center text-[#3b2f1e] shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
                    style={{ clipPath: "polygon(22% 0, 78% 0, 100% 14%, 100% 100%, 0 100%, 0 14%)" }}
                >
                    <span className="absolute left-1/2 top-[7%] -translate-x-1/2 w-[16%] aspect-square rounded-full bg-[hsl(86_10%_45%)]" />
                    <p className={`${hand.className} leading-tight`} style={{ fontSize: "clamp(0.4rem, 1.15cqw, 0.8rem)" }}>
                        If found, return to Kavya
                    </p>
                </div>
            </div>
        </div>
    );
}

function SuitcaseHalf({ snaps, side, open, offset }: { snaps: Snap[]; side: "left" | "right"; open: boolean; offset: number }) {
    return (
        <div
            className="relative flex-1 rounded-[7%/5%] bg-[#1c1c1e] p-[2.2%] shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
        >
            <div className="relative h-full rounded-[6%/4%] bg-gradient-to-b from-[#f4f4f2] to-[#dcdcd8] shadow-[inset_0_2px_14px_rgba(0,0,0,0.18)]">
                {/* zipper line */}
                <div className="pointer-events-none absolute inset-[3.5%] rounded-[5%/3.5%] border-2 border-dashed border-black/15" />
                {snaps.map((snap, i) => (
                    <Polaroid key={snap.src} snap={snap} open={open} order={offset + i} />
                ))}
                {side === "right" && <BoardingPass open={open} />}
            </div>
            <ShellDoor side={side} open={open} />
        </div>
    );
}

/* Exterior of the case. Closed, it is the flat front view; opening swings it away on its outer hinge. */
function ShellDoor({ side, open }: { side: "left" | "right"; open: boolean }) {
    return (
        <div
            className="absolute inset-0 z-20 rounded-[7%/5%] bg-[#2a2a2d] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]"
            style={{
                transformOrigin: side === "left" ? "left center" : "right center",
                transform: `perspective(1600px) rotateY(${open ? (side === "left" ? -115 : 115) : 0}deg)`,
                opacity: open ? 0 : 1,
                pointerEvents: open ? "none" : "auto",
                backfaceVisibility: "hidden",
                transition: `transform 1100ms ${EASE_OUT}, opacity 300ms ease-out ${open ? 800 : 0}ms`,
            }}
            aria-hidden="true"
        >
            {/* vertical ribs */}
            <div
                className="absolute inset-[6%] rounded-[4%/3%]"
                style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 9%)" }}
            />
            <div className="absolute inset-0 rounded-[7%/5%] bg-gradient-to-br from-white/10 via-transparent to-black/30" />
            {/* centre latch */}
            <span
                className={`absolute top-1/2 -translate-y-1/2 h-[14%] w-[3%] rounded-sm bg-[#8a8a8c] shadow-md ${side === "left" ? "right-[2%]" : "left-[2%]"}`}
            />
        </div>
    );
}

/* Hand-drawn style arrow, drawn in a 100x100 box. Inks in once the case is open. */
function Arrow({ d, className, open, delay }: { d: string; className: string; open: boolean; delay: number }) {
    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`pointer-events-none absolute hidden md:block text-white/90 ${className}`}
            aria-hidden="true"
        >
            <path
                d={d}
                pathLength={1}
                strokeDasharray="1 1"
                vectorEffect="non-scaling-stroke"
                style={{
                    strokeDashoffset: open ? 0 : 1,
                    transition: `stroke-dashoffset 700ms ease-in-out ${delay}ms`,
                }}
            />
        </svg>
    );
}

function Note({ children, className, open, delay }: { children: React.ReactNode; className: string; open: boolean; delay: number }) {
    return (
        <p
            className={`${hand.className} absolute hidden md:block text-center text-white leading-tight text-[clamp(0.55rem,1.5vw,1.05rem)] ${className}`}
            style={{ opacity: open ? 1 : 0, transition: `opacity 500ms ease-out ${delay}ms` }}
        >
            {children}
        </p>
    );
}

function CarryOn() {
    const { ref, open } = useOpenOnView<HTMLDivElement>({ threshold: 0.4, rootMargin: "0px 0px -15% 0px" }, false);
    const ink = 2100;

    return (
        <section className="px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 pb-24 sm:pb-36 overflow-hidden">
            <h2 className={`${hand.className} text-center text-white text-2xl sm:text-3xl md:text-4xl`}>
                A Carry-On Full of Stories
            </h2>
            <p className="mt-3 mb-14 sm:mb-20 text-center text-xs sm:text-sm tracking-[0.18em] uppercase text-white/55">
                Tap a photo to unpack its story
            </p>

            <div ref={ref} className="relative max-w-[88rem] mx-auto">
                {/* Suitcase is sized by aspect ratio so everything inside scales together */}
                <div className="relative mx-0 md:mx-[12%] aspect-[1.7/1] [container-type:inline-size] [perspective:1600px]">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-[6%] w-[14%] h-[7%] rounded-t-[40%] border-[clamp(3px,0.6vw,6px)] border-b-0 border-[#1c1c1e]" />
                    <LuggageTag />
                    <div className="flex h-full gap-[1.2%]">
                        <SuitcaseHalf snaps={LEFT_HALF} side="left" open={open} offset={0} />
                        <SuitcaseHalf snaps={RIGHT_HALF} side="right" open={open} offset={LEFT_HALF.length} />
                    </div>
                    {["left-[5%]", "left-[42%]", "right-[42%]", "right-[5%]"].map((pos) => (
                        <span key={pos} className={`absolute -bottom-[4%] ${pos} w-[3%] aspect-square rounded-full bg-[#1c1c1e]`} />
                    ))}
                </div>

                <Note open={open} delay={ink + 300} className="left-0 top-[10%] w-[11%]">Always sticking my tongue out and playing in the snow</Note>
                <Arrow open={open} delay={ink} className="left-[9%] top-[0%] w-[7%] h-[10%]" d="M5 80 C 20 15, 60 5, 95 30 M82 18 L95 30 L80 38" />

                <Note open={open} delay={ink + 500} className="left-0 bottom-[6%] w-[11%]">Born and raised in Toronto</Note>
                <Arrow open={open} delay={ink + 200} className="left-[9%] bottom-[22%] w-[7%] h-[10%]" d="M5 95 C 15 45, 55 25, 95 30 M82 18 L95 30 L82 42" />

                <Note open={open} delay={ink + 700} className="left-[32%] -bottom-[17%] w-[16%]">My biggest inspiration in life</Note>
                <Arrow open={open} delay={ink + 400} className="left-[40%] -bottom-[9%] w-[4%] h-[20%]" d="M30 95 C 20 60, 35 30, 70 5 M52 5 L70 5 L66 22" />

                <Note open={open} delay={ink + 900} className="right-0 top-[10%] w-[11%]">Friends who feel like family</Note>
                <Arrow open={open} delay={ink + 600} className="right-[9%] top-[0%] w-[7%] h-[10%]" d="M95 80 C 80 15, 40 5, 5 30 M18 18 L5 30 L20 38" />

                <Note open={open} delay={ink + 1100} className="right-0 bottom-[6%] w-[11%]">Always chasing the next adventure</Note>
                <Arrow open={open} delay={ink + 800} className="right-[9%] bottom-[22%] w-[7%] h-[10%]" d="M95 95 C 85 45, 45 25, 5 30 M18 18 L5 30 L18 42" />
            </div>
        </section>
    );
}

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-0 pb-0">
                <HeroVideo />

                {/* Intro */}
                <section className="px-4 sm:px-6 md:px-10 pt-10 sm:pt-14">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="relative z-10 text-white italic font-light uppercase leading-[0.85] tracking-[-0.02em] whitespace-nowrap"
                            style={{ fontSize: "clamp(3.5rem, 20vw, 18rem)" }}
                        >
                            About Me
                        </h1>

                        <div className="-mt-[clamp(1.25rem,5.5vw,5rem)] grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-8 md:gap-14 items-center">
                            <div className="relative aspect-[4/5] w-full max-w-md md:max-w-none overflow-hidden">
                                <Image
                                    src="/voyageatlkavya-1.webp"
                                    alt="Kavya walking past a wall of her design work"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                    className="object-cover object-center"
                                />
                            </div>

                            <TypewriterIntro />
                        </div>
                    </div>
                </section>

                <CarryOn />
            </main>

            <Footer />
        </div>
    );
};

export default AboutMe;
