'use client';

import { useState, useRef, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Flight { id: number; dx: number; dy: number; }

function BasketballShooter() {
    const [shots, setShots] = useState(0);
    const [bounce, setBounce] = useState(false);
    const [flights, setFlights] = useState<Flight[]>([]);
    const [netSwish, setNetSwish] = useState(false);
    const [rimGlow, setRimGlow] = useState(false);
    const [pulsing, setPulsing] = useState(false);
    const ballRef = useRef<HTMLButtonElement>(null);
    const hoopRef = useRef<HTMLDivElement>(null);
    const shotsRef = useRef(0);
    const flightsRef = useRef<Flight[]>([]);

    const shotMsg = shots === 0 ? 'tap the ball.' : shots < 3 ? 'nice.' : shots < 7 ? 'heating up.' : shots < 12 ? 'on fire 🔥' : 'vince carter who.';

    const takeShot = useCallback(() => {
        if (flightsRef.current.length >= 8) return;
        setBounce(true);
        setTimeout(() => setBounce(false), 300);

        let dx = 220, dy = 0;
        if (ballRef.current && hoopRef.current) {
            const br = ballRef.current.getBoundingClientRect();
            const hr = hoopRef.current.getBoundingClientRect();
            dx = (hr.left + hr.width / 2) - (br.left + br.width / 2);
            dy = (hr.top + hr.height * 0.4) - (br.top + br.height / 2);
        }

        const id = Date.now() + Math.random();
        flightsRef.current = [...flightsRef.current, { id, dx, dy }];
        setFlights([...flightsRef.current]);

        setTimeout(() => {
            const next = shotsRef.current + 1;
            shotsRef.current = next;
            setShots(next);
            setNetSwish(true);
            setPulsing(true);
            setTimeout(() => setNetSwish(false), 400);
            setTimeout(() => setPulsing(false), 350);
            if (next % 5 === 0) {
                setRimGlow(true);
                setTimeout(() => setRimGlow(false), 600);
            }
            flightsRef.current = flightsRef.current.filter(f => f.id !== id);
            setFlights([...flightsRef.current]);
        }, 480);
    }, []);

    return (
        <div className="rounded-2xl p-6 sm:p-8 mt-8 bg-white">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#C45827' }}>
                raptors fan since birth
            </p>
            <div className="relative flex flex-wrap items-center gap-8 sm:gap-12">
                {/* Ghost balls */}
                {flights.map(f => (
                    <span key={f.id} className="ghost-ball" style={{ '--shot-dx': `${f.dx}px`, '--shot-dy': `${f.dy}px` } as React.CSSProperties} />
                ))}

                {/* Ball */}
                <button
                    ref={ballRef}
                    onClick={takeShot}
                    aria-label="Shoot"
                    className="text-5xl select-none focus:outline-none flex-shrink-0"
                    style={{
                        transform: bounce ? 'scale(0.78) rotate(-10deg)' : 'scale(1) rotate(0deg)',
                        transition: 'transform 150ms cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                >
                    🏀
                </button>

                {/* Counter */}
                <div className="flex-1 min-w-[90px]">
                    <p className="text-xs uppercase tracking-widest mb-1 text-black/40">shots taken</p>
                    <p
                        className={`text-5xl font-bold tabular-nums text-black ${pulsing ? 'animate-countPulse' : ''}`}
                        style={{ lineHeight: 1 }}
                    >
                        {String(shots).padStart(2, '0')}
                    </p>
                    <p className="text-sm mt-1 text-black/40">{shotMsg}</p>
                </div>

                {/* Hoop */}
                <div ref={hoopRef} className="relative w-20 h-28 flex-shrink-0">
                    {/* Backboard */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-14 h-10 rounded-sm border border-black/15 bg-black/5" />
                    {/* Rim */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full transition-all duration-500"
                        style={{
                            top: '40px',
                            backgroundColor: rimGlow ? '#F1E9D5' : '#C45827',
                            boxShadow: rimGlow ? '0 0 16px 4px rgba(241,233,213,0.8)' : 'none',
                        }}
                    />
                    {/* Net wrapper (positioned) */}
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '50px' }}>
                        <div className={`flex gap-[3px] ${netSwish ? 'animate-netSwish' : ''}`}>
                            {[0,1,2,3,4].map(i => (
                                <span key={i} className="block rounded-full origin-top" style={{ width: '2px', height: '20px', backgroundColor: 'rgba(0,0,0,0.25)' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const sections = [
    {
        img: '/voyageatlkavya-2.webp',
        index: '01',
        label: 'always reading.',
        sub: 'ideas from everywhere',
    },
    {
        img: '/voyageatlkavya-3.webp',
        index: '03',
        label: 'toronto raised.',
        sub: 'the 6ix lives in everything I make',
    },
    {
        img: '/voyageatlkavya-4.webp',
        index: '04',
        label: 'NBA obsessed.',
        sub: 'Raptors fan, always',
    },
    {
        img: '/voyageatlkavya-5.webp',
        index: '05',
        label: 'dog mom.',
        sub: '+ Korean food every chance I get',
    },
    {
        img: '/voyageatlkavya-6.webp',
        index: '06',
        label: 'in the work.',
        sub: 'campaigns, systems, stories',
    },
];

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-20 sm:pt-24 md:pt-28 pb-0">
                {/* Intro */}
                <div className="px-6 sm:px-10 mb-16 sm:mb-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Eyebrow */}
                        <p className="text-xs font-semibold tracking-[0.28em] uppercase text-foreground/40 mb-5">
                            UX Designer · SCAD · Toronto
                        </p>

                        {/* Headline split: large left, image right */}
                        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
                            <div className="flex-1 min-w-0">
                                <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold text-foreground leading-[0.95] tracking-tight mb-6">
                                    Nice to<br />
                                    <span className="italic font-light">meet you!</span>
                                </h1>
                                <p className="text-base sm:text-lg text-foreground/60 max-w-md leading-relaxed mb-6">
                                    I&apos;m a UX Design student at SCAD — curious, passionate, and always striving to make a difference through human-centered design.
                                </p>
                                {/* Interests */}
                                <div className="flex items-center gap-0 flex-wrap">
                                    {['NBA die-hard', 'Toronto born', 'dog mom', 'korean food obsessed'].map((label, i, arr) => (
                                        <span key={label} className="flex items-center">
                                            <span className="text-sm sm:text-base text-foreground/55 tracking-wide">{label}</span>
                                            {i < arr.length - 1 && (
                                                <span className="mx-3 text-foreground/25 text-xs">✦</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Inline hero image — first voyage photo, right-aligned */}
                            <div className="w-full lg:w-[38%] shrink-0 overflow-hidden rounded-2xl">
                                <img
                                    src="/voyageatlkavya-1.webp"
                                    alt="Kavya"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Basketball shooter */}
                <div className="px-6 sm:px-10 mb-10 sm:mb-14">
                    <div className="max-w-6xl mx-auto">
                        <BasketballShooter />
                    </div>
                </div>

                {/* Image sections */}
                {sections.map((s, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <div key={s.index} className="px-6 sm:px-10 mb-6 sm:mb-8">
                            <div className="max-w-6xl mx-auto">
                                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-end`}>
                                    {/* Image */}
                                    <div className="w-full lg:w-[72%] overflow-hidden rounded-2xl">
                                        <img
                                            src={s.img}
                                            alt={s.label}
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className={`flex-1 pb-4 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/30 mb-3">{s.index}</p>
                                        <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug mb-2">{s.label}</p>
                                        <p className="text-sm text-foreground/50">{s.sub}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="h-16 sm:h-20" />
            </main>

            <Footer />
        </div>
    );
};

export default AboutMe;
