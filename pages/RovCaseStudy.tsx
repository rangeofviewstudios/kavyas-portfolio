import Image from "next/image";
import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Details } from "@/components/case-study/shared";

/* Kavya's site palette */
const GREEN = "#343F28";

/* ROV's own palette, sampled from its banners and site. Shown as the subject matter. */
const ROV = {
    ink: "#0B0908",
    espresso: "#43211D",
    umber: "#55291E",
    rust: "#A24C2B",
    copper: "#B76E3C",
    glow: "#E7985F",
    cream: "#FDF1E3",
};

const EMBER = `linear-gradient(115deg, ${ROV.espresso} 0%, ${ROV.umber} 30%, ${ROV.rust} 62%, ${ROV.copper} 100%)`;
const GLOW = `radial-gradient(ellipse at 50% 55%, ${ROV.glow} 0%, ${ROV.copper} 35%, ${ROV.rust} 62%, ${ROV.ink} 100%)`;
const DUSK = `linear-gradient(160deg, #1B1210 0%, ${ROV.espresso} 45%, ${ROV.rust} 100%)`;

const SWATCHES = [
    { name: "Ink", hex: ROV.ink, role: "Base surface", dark: true },
    { name: "Espresso", hex: ROV.espresso, role: "Depth, shadows", dark: true },
    { name: "Umber", hex: ROV.umber, role: "Cards, panels", dark: true },
    { name: "Rust", hex: ROV.rust, role: "Brand core", dark: true },
    { name: "Copper", hex: ROV.copper, role: "Highlights", dark: true },
    { name: "Glow", hex: ROV.glow, role: "Accents, labels", dark: false },
    { name: "Cream", hex: ROV.cream, role: "Type on dark", dark: false },
];

const GRADIENTS = [
    { name: "Ember", css: EMBER, use: "Banners, CTAs, social headers" },
    { name: "Glow", css: GLOW, use: "Stories, hero light, focal moments" },
    { name: "Dusk", css: DUSK, use: "Section washes behind dark UI" },
];

const OUTCOMES = [
    { name: "Wisdom ATL", what: "Brand identity" },
    { name: "The Bando ATL", what: "Brand identity" },
    { name: "Ponce City Market", what: "Fashion shows" },
    { name: "Music video", what: "Made together, for fun", href: "https://www.instagram.com/p/DV6nEgDibDN/" },
];

const WILD = [
    ["site-strategy", "Hero sequence: Creative Strategy"],
    ["site-services", "Services: Web Optimization"],
    ["site-ai-cta", "AI Solutions and the Ember CTA card"],
    ["site-ctrla", "CTRL·A, the studio's digital magazine"],
    ["site-team", "Meet the team"],
    ["site-contact", "Have something in mind? Let's build it."],
];

const intro = "text-base sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-[40px]";
const introStyle = { color: "rgba(0,0,0,0.60)", fontFamily: '"DM Sans"' } as const;
const h2 = "text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12";
const h3 = "text-xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6";
const card =
    "border-2 border-gray-200 rounded-2xl p-5 sm:p-8 group transition-all duration-300 hover:border-[#343F28] hover:shadow-lg";
const cardNumber =
    "text-4xl font-semibold mb-4 text-black transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent";

/* Screenshot in a quiet frame so dark ROV shots sit well on the white page */
function Shot({ src, alt, width, height, caption }: { src: string; alt: string; width: number; height: number; caption?: string }) {
    return (
        <figure>
            <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-black">
                <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 1152px) 100vw, 1100px" className="block h-auto w-full" />
            </div>
            {caption && <figcaption className="mt-3 text-sm text-gray-600">{caption}</figcaption>}
        </figure>
    );
}

const RovCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <main>
                <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-8 sm:pb-16 max-w-6xl">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 lg:mb-16">
                        Range of View Studios
                    </h1>

                    <Details
                        items={[
                            ["Role", "Brand & Visual Identity Designer"],
                            ["Industry", "Creative Studio"],
                            ["Scope", "Identity, Color, Type, Components"],
                            ["Location", "Atlanta, Georgia"],
                        ]}
                    />

                    {/* Project Description */}
                    <div className="mb-16">
                        <p className="text-base text-gray-900 leading-relaxed">
                            How a rough, passionate music collective became an Atlanta creative studio, and the identity
                            system I helped build to carry it there: brand identity, visual identity, color palettes,
                            fonts, buttons, gradients, and more.
                        </p>
                    </div>

                    {/* Story callout, styled like the NDA box */}
                    <div className="w-full rounded-[30px] p-[4px]" style={{ background: `linear-gradient(90deg, ${ROV.espresso} 0%, ${ROV.rust} 60%, ${ROV.glow} 100%)` }}>
                        <div className="w-full h-full rounded-[26px] bg-white p-8 md:py-[74px] md:px-[60px] flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
                            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium leading-tight md:leading-[55px] flex-1 w-full lg:max-w-[50%]" style={{ color: GREEN }}>
                                It started with two kids at a bakery table
                            </h2>
                            <p className="text-base text-gray-900 leading-relaxed flex-1 w-full lg:max-w-[50%]">
                                We were working on a project at Sweet Hut Bakery when two kids walked up and showed us
                                their little agency. It was pretty rough, but they had a vision and real passion. We took
                                everything apart, helped define their mission, and organized their identity.
                            </p>
                        </div>
                    </div>

                    {/* My Contributions */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">My Contributions</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Range of View began as a music community where friends taught each other what they knew.
                            Along the way, its founder, Ayush Basu, realized he loved branding. My work gave that
                            realization a system.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                            {[
                                ["01", "Defined the brand and visual identity, from the mission through to the og moodboards."],
                                ["02", "Built the color palettes, gradients, and type system that every page and post draws from."],
                                ["03", "Designed the buttons and UI components that carry the identity across the website."],
                            ].map(([n, t]) => (
                                <div key={n} className={card}>
                                    <h3 className={cardNumber}>{n}</h3>
                                    <p className="text-base text-gray-900 font-semibold">{t}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Where they started */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>Where They Started</h2>
                        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
                            <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border-2 border-gray-200 bg-black">
                                <div className="h-[520px] overflow-y-auto">
                                    <Image src="/images/rov/old-site.webp" alt="The original Range of View website" width={600} height={4070} className="block h-auto w-full" />
                                </div>
                                <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/70 px-3 py-1 text-xs text-white/80">
                                    Scroll the old site
                                </span>
                            </div>
                            <div>
                                <h3 className={h3}>A lot of energy, very little structure</h3>
                                <p className={intro} style={introStyle}>
                                    The original site was built for a music community: a player up top, a gallery, a
                                    magazine, and service blocks that didn&apos;t quite say what the studio did or who it was
                                    for. Every piece had personality, but none of it spoke with one voice.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Taking it apart */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>Taking It Apart</h2>
                        <h3 className={h3}>Start with the mission</h3>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            We pulled every piece onto the table: services, audiences, the music roots, the magazine.
                            Then we rebuilt the structure around one clear promise, page by page.
                        </p>
                        <div className="mb-8 sm:mb-12 rounded-2xl p-8 sm:p-12" style={{ background: EMBER }}>
                            <p className="text-sm text-white/70">The mission, in their words</p>
                            <p className="mt-3 text-2xl sm:text-4xl font-medium leading-tight text-white">
                                From web and video to sound and AI, we shape ideas into experiences that connect.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-[#FAFAFA]">
                            <Image src="/images/rov/sitemap.webp" alt="Rebuilt sitemap for Range of View Studios" width={1700} height={530} sizes="(max-width: 1152px) 100vw, 1100px" className="block h-auto w-full" />
                        </div>
                        <p className="mt-3 text-sm text-gray-600">The rebuilt sitemap: services, the CTRL·A playground, the OG ROV story, and a clear path to booking a call.</p>
                    </div>

                    {/* Finding the look */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>Finding the Look</h2>
                        <h3 className={h3}>Dark rooms, warm light, a little bit mixtape</h3>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            The references kept pulling the same direction: deep, near-black surfaces lit by something
                            warm, and geometric type with a playful streak. The halftone cut-outs gave it the hand-made
                            music-zine energy the studio grew up on.
                        </p>
                        <div className="grid gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
                            <div>
                                <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
                                    <Image src="/images/rov/moodboard.webp" alt="ROV moodboard with website references and type exploration" width={1250} height={900} sizes="(max-width: 1152px) 100vw, 700px" className="block h-auto w-full" />
                                </div>
                                <p className="mt-3 text-sm text-gray-600">Moodboard: website references, Norwige for headings, Roboto for body.</p>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-[#ECECEC]">
                                    <Image src="/images/rov/design-elements.webp" alt="Halftone design elements: arrows, pointing hand, star, megaphone" width={860} height={650} sizes="(max-width: 1152px) 100vw, 450px" className="block h-auto w-full" />
                                </div>
                                <p className="mt-3 text-sm text-gray-600">Design elements: halftone arrows, a pointing hand, a megaphone.</p>
                            </div>
                        </div>
                    </div>

                    {/* The system */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>The Identity System</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            An identity built to hold everything they make: the website, the socials, and every client
                            project that came after.
                        </p>

                        {/* Color */}
                        <h3 className={h3}>Color palette</h3>
                        <div className="mb-10 sm:mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
                            {SWATCHES.map((s) => (
                                <div key={s.name} className="overflow-hidden rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                    <div className="flex aspect-[4/5] items-end p-4" style={{ background: s.hex }}>
                                        <span className="text-sm font-semibold" style={{ color: s.dark ? ROV.cream : ROV.ink }}>{s.name}</span>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className="text-sm font-semibold text-gray-900">{s.hex}</p>
                                        <p className="mt-0.5 text-xs text-gray-600">{s.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradients */}
                        <h3 className={h3}>Gradients</h3>
                        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                            {GRADIENTS.map((g) => (
                                <div key={g.name}>
                                    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                                        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110" style={{ background: g.css }} />
                                    </div>
                                    <p className="mt-3 text-base font-semibold text-gray-900">{g.name}</p>
                                    <p className="text-sm text-gray-600">{g.use}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                            <Shot src="/images/rov/banner-linkedin.webp" alt="Ayush Basu LinkedIn banner in the Ember gradient" width={1584} height={396} caption="Ember on LinkedIn." />
                            <Shot src="/images/rov/banner-dashboard.webp" alt="Team dashboard banner in the Ember gradient" width={1500} height={600} caption="Team dashboard header." />
                        </div>

                        {/* Type */}
                        <h3 className={`${h3} mt-10 sm:mt-16`}>Typography</h3>
                        <div className="grid gap-4 sm:gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                            <div className="rounded-2xl p-8 sm:p-10" style={{ background: ROV.ink, color: ROV.cream }}>
                                <p className="text-5xl sm:text-7xl leading-none tracking-[-0.03em]">
                                    <span className="font-extralight">Creative</span>{" "}
                                    <span className="font-bold italic">Identity</span>
                                </p>
                                <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "rgba(253,241,227,0.65)" }}>
                                    The signature move: a light, open word paired with a heavy italic. One steady, one in
                                    motion. It runs through the hero, the services, and every social header.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between gap-6 rounded-2xl border-2 border-gray-200 p-8">
                                {[
                                    ["Headings", "Norwige", "text-2xl italic font-semibold"],
                                    ["Body", "Roboto", "text-2xl"],
                                    ["Labels", "Wide-tracked caps", "text-lg tracking-[0.18em] uppercase"],
                                ].map(([k, v, c]) => (
                                    <div key={k}>
                                        <p className="text-sm font-semibold" style={{ color: GREEN }}>{k}</p>
                                        <p className={`mt-1 text-gray-900 ${c}`}>{v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <h3 className={`${h3} mt-10 sm:mt-16`}>Buttons and components</h3>
                        <div className="rounded-2xl p-8 sm:p-10" style={{ background: ROV.ink, color: ROV.cream }}>
                            <div className="flex flex-wrap items-center gap-4">
                                <button type="button" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium shadow-[0_10px_30px_rgba(162,76,43,0.35)] transition-transform duration-200 hover:-translate-y-0.5" style={{ background: `linear-gradient(90deg, ${ROV.espresso}, ${ROV.rust} 55%, ${ROV.glow})`, color: ROV.cream }}>
                                    See it in action <ArrowRight className="h-4 w-4" />
                                </button>
                                <button type="button" className="rounded-full bg-[#1B1412] px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-transform duration-200 hover:-translate-y-0.5" style={{ color: ROV.cream }}>
                                    Let&apos;s create!
                                </button>
                                <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm tracking-[0.08em] uppercase text-white/85 transition-colors hover:bg-white/10">
                                    View full team <ArrowUpRight className="h-4 w-4" />
                                </button>
                                <button type="button" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black px-5 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:border-white/35">
                                    Menu <Menu className="h-4 w-4" />
                                </button>
                                <span className="inline-flex rounded-full bg-white/[0.06] p-1 text-xs tracking-[0.12em] uppercase">
                                    <span className="rounded-full px-4 py-2" style={{ background: ROV.umber, color: ROV.cream }}>Grid</span>
                                    <span className="px-4 py-2 text-white/50">Globe</span>
                                </span>
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">The real components, rebuilt from the live site. Hover them.</p>

                        {/* Blue vs brown */}
                        <h3 className={`${h3} mt-10 sm:mt-16`}>Blue or brown?</h3>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            We tested ROV Blue against a brown gradient on the service cards, each with photo and video
                            hover states. Blue looked like every other tech agency. Brown felt warm, a little cinematic,
                            and unmistakably theirs.
                        </p>
                        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-[#444]">
                            <Image src="/images/rov/explorations.webp" alt="Service card explorations comparing ROV Blue and Gradient Brown" width={1350} height={385} sizes="(max-width: 1152px) 100vw, 1100px" className="block h-auto w-full" />
                        </div>
                    </div>

                    {/* In the wild */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>The System, Live</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Everything above, working together on rovstudios.com.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            {WILD.map(([file, alt]) => (
                                <Shot key={file} src={`/images/rov/${file}.webp`} alt={alt} width={1404} height={739} caption={alt} />
                            ))}
                        </div>
                    </div>

                    {/* What it became */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>What It Became</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            It turned into a world we couldn&apos;t have imagined from that table. With an identity that
                            finally matched their ambition, Range of View went on to do brand identity for Wisdom ATL
                            and The Bando, fashion shows at Ponce, and more.
                        </p>
                        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12">
                            <ul className="space-y-4">
                                {OUTCOMES.map((o) => (
                                    <li key={o.name} className={`${card} flex items-center justify-between gap-4 !p-5`}>
                                        {o.href ? (
                                            <a href={o.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900">
                                                {o.name} <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        ) : (
                                            <span className="text-lg font-semibold text-gray-900">{o.name}</span>
                                        )}
                                        <span className="text-right text-sm text-gray-600">{o.what}</span>
                                    </li>
                                ))}
                            </ul>
                            <Shot src="/images/rov/client-work.webp" alt="Client work: Aysegul Ikna fashion site and The Bando restaurant branding" width={1290} height={1060} caption="Client work: sustainable fashion at Ponce, and a wing spot with a loud voice." />
                        </div>
                    </div>

                    {/* What I learned */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>What I Learned</h2>
                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                            {[
                                ["01", "Structure is creative work.", "The mission and the sitemap did more for this brand than any color choice. Taking it apart came first."],
                                ["02", "A palette is a promise.", "Seven colors and three gradients meant every new page, post, and deck already knew how to look like ROV."],
                                ["03", "Say yes at the table.", "A great project can start as an interruption. Passion that rough is worth slowing down for."],
                            ].map(([n, t, d]) => (
                                <div key={n} className={card}>
                                    <h3 className={cardNumber}>{n}</h3>
                                    <p className="text-base text-gray-900 font-semibold">{t}</p>
                                    <p className="mt-2 text-base text-gray-900">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Close */}
                    <div className="mt-10 sm:mt-20 text-center">
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 leading-relaxed">
                            The space is the limit.<br />Still making more as we go.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                ["Visit rovstudios.com", "https://www.rovstudios.com"],
                                ["Watch the music video", "https://www.instagram.com/p/DV6nEgDibDN/"],
                                ["Meet the founder", "https://www.ayushbasu.com/"],
                            ].map(([label, href]) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-lg text-white font-semibold transition-all hover:scale-105" style={{ background: GREEN }}>
                                    {label} <ArrowUpRight className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RovCaseStudy;
