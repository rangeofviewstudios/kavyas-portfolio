import Image from "next/image";
import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ImageTabs, type TabItem } from "./ImageTabs";
import {
    CaseStudyMain,
    Figure,
    FindingCard,
    H3,
    Highlight,
    LABEL,
    MONO,
    NextProject,
    Overview,
    Section,
    SubHeading,
} from "./CaseStudyKit";

/* ROV's own palette, sampled from its banners and site */
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

const site = (file: string, alt: string) => [{ src: `/images/rov/${file}.webp`, alt, w: 1404, h: 739 }];
const LIVE: TabItem[] = [
    { id: "hero", label: "Home", images: site("site-hero", "Homepage hero: Creative Identity, with the ROV ring between the words") },
    { id: "strategy", label: "Strategy", images: site("site-strategy", "Hero sequence: Creative Strategy") },
    { id: "services", label: "Services", images: site("site-services", "Services page: web optimization, websites built to perform") },
    { id: "ai", label: "AI + CTA", images: site("site-ai-cta", "AI Solutions section and the Ember call-to-action card") },
    { id: "ctrla", label: "CTRL·A", images: site("site-ctrla", "CTRL·A, the studio’s digital magazine: A digital muse for creatives") },
    { id: "team", label: "Team", images: site("site-team", "Meet the team page with portrait photos") },
    { id: "contact", label: "Contact", images: site("site-contact", "Contact page: Have something in mind? Let’s build it.") },
];

const pill = "inline-flex items-center gap-2 rounded-full";

/*
  Range of View Studios case study, on the shared case study kit (CaseStudyKit).
  00 Overview · 01 Challenge · 02 Research · 03 Design process · 04 Design · 05 Impact · next.
*/
const RovCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <CaseStudyMain>
                {/* 00 Overview */}
                <Overview
                    tags={["Brand Identity", "Visual Systems", "Web"]}
                    title="Growing a music collective into an Atlanta creative studio"
                    badge="shipped"
                    facts={[
                        { label: "Role", value: "Brand & Visual Identity Designer" },
                        { label: "Team", value: "10 people" },
                        { label: "Client", value: "Range of View Studios, Atlanta" },
                        { label: "Methods", value: "Brand audit, sitemap, moodboards, identity system" },
                    ]}
                    image={{ src: "/images/rovcard-ember.jpg", alt: "The Range of View Studios mark in white on the Ember gradient" }}
                    summary={[
                        {
                            label: "Problem",
                            text: "A passionate Atlanta music collective with a rough identity: lots of energy, but no single voice.",
                        },
                        {
                            label: "What I did",
                            text: "Defined the mission and visual identity, and built the palette, gradients, type and UI components the site and socials use.",
                        },
                        {
                            label: "Impact",
                            text: "Live on rovstudios.com. ROV went on to brand Wisdom ATL and The Bando, and run fashion shows at Ponce City Market.",
                        },
                    ]}
                    news={{
                        kicker: "Live · rovstudios.com",
                        title: "Shipped.",
                        text: "The identity now runs the studio’s website, socials and client work.",
                        cta: "Visit rovstudios.com ↗",
                        href: "https://www.rovstudios.com",
                    }}
                />

                {/* 01 The Challenge */}
                <Section
                    id="challenge"
                    n={1}
                    label="The challenge"
                    title="It started with two kids at a bakery table"
                    intro="We were working at Sweet Hut Bakery when two kids showed us their little agency. It was rough, but they had a vision and real passion."
                    takeaway="The passion was already there. What was missing was structure."
                >
                    <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                        <figure>
                            <div className="relative overflow-hidden rounded-2xl border border-[#E1E6DB] bg-black">
                                <div className="h-[560px] overflow-y-auto max-[900px]:h-[440px]">
                                    <Image src="/images/rov/old-site.webp" alt="The original Range of View website, as one long page" width={600} height={4070} sizes="(max-width: 768px) 100vw, 500px" className="block h-auto w-full" />
                                </div>
                            </div>
                            <figcaption className="mt-3 text-sm leading-[1.5] text-[#75716B]">The original site. Scroll inside it.</figcaption>
                        </figure>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-1 flex-col justify-end rounded-2xl p-10 text-white max-[900px]:p-6" style={{ background: EMBER }}>
                                <p className={`${MONO} text-xs uppercase tracking-[0.08em] text-white/70`}>Where they started</p>
                                <p className="mt-3 max-w-[22ch] text-[clamp(26px,3vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em]">
                                    A lot of energy, very little structure
                                </p>
                                <p className="mt-4 max-w-[56ch] text-lg leading-[1.6] text-white/85">
                                    A player up top, a gallery, a magazine, and service blocks that didn’t quite say what the studio did or who it was for.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-[#E1E6DB] p-10 max-[900px]:p-6">
                                <p className={LABEL}>The ask</p>
                                <p className="mt-3 text-lg leading-[1.6] text-[#161514]">
                                    Range of View began as a music community where friends taught each other what they knew. Its founder, Ayush Basu,
                                    realized he loved branding. My work gave that a system.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 02 Research */}
                <Section
                    id="research"
                    n={2}
                    label="Research"
                    title="Taking it all apart"
                    intro="We put every piece on the table (services, audiences, the music roots, the magazine) and gathered references for the look."
                    takeaway="Structure first, then the look: the mission would decide what the brand had to say."
                >
                    <div className="grid gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
                        <Figure
                            src="/images/rov/moodboard.webp"
                            alt="ROV moodboard with website references and type exploration"
                            w={1250}
                            h={900}
                            bg="#FFFFFF"
                            className="[&>div]:border [&>div]:border-[#E1E6DB]"
                            caption="Moodboard: website references, Norwige for headings, Roboto for body."
                        />
                        <Figure
                            src="/images/rov/design-elements.webp"
                            alt="Halftone design elements: arrows, a pointing hand, a star and a megaphone"
                            w={860}
                            h={650}
                            bg="#ECECEC"
                            caption="Halftone cut-outs: the hand-made music-zine energy the studio grew up on."
                        />
                    </div>
                    <div>
                        <SubHeading>What we found</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <FindingCard
                                n={1}
                                headline="Lots of personality, no single voice."
                                evidence="The site didn’t say what the studio did, or who it was for."
                                designed="One clear mission, and a sitemap rebuilt around it."
                            />
                            <FindingCard
                                n={2}
                                headline="Dark rooms, warm light."
                                evidence="The references kept pulling the same way: near-black surfaces lit by something warm."
                                designed="A seven-color palette and three gradients: Ember, Glow, Dusk."
                            />
                            <FindingCard
                                n={3}
                                headline="Geometric, with a playful streak."
                                evidence="Geometric type and halftone cut-outs, a little bit mixtape."
                                designed="A light word paired with a heavy italic, in every header."
                            />
                        </div>
                    </div>
                </Section>

                {/* 03 Design process */}
                <Section
                    id="process"
                    n={3}
                    label="Design process"
                    title="Start with the mission"
                    intro="We rebuilt the structure around one clear promise, page by page, then tested the look on real components."
                    takeaway="Brown over blue: warm, a little cinematic, and unmistakably theirs."
                >
                    <div className="rounded-2xl p-10 text-white max-[900px]:p-6" style={{ background: EMBER }}>
                        <p className={`${MONO} text-xs uppercase tracking-[0.08em] text-white/70`}>The mission, in their words</p>
                        <p className="mt-3 max-w-[30ch] text-[clamp(26px,3vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]">
                            From web and video to sound and AI, we shape ideas into experiences that connect.
                        </p>
                    </div>
                    <Figure
                        src="/images/rov/sitemap.webp"
                        alt="Rebuilt sitemap for Range of View Studios"
                        w={1700}
                        h={530}
                        bg="#FAFAFA"
                        className="[&>div]:border [&>div]:border-[#E1E6DB]"
                        caption="The rebuilt sitemap: services, the CTRL·A playground, the OG ROV story, and a clear path to booking a call."
                    />
                    <div>
                        <SubHeading>Blue or brown?</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">
                            We tested ROV Blue against a brown gradient on the service cards. Blue looked like every other tech agency. Brown felt
                            warm, a little cinematic, and unmistakably theirs.
                        </p>
                        <Figure
                            className="mt-6"
                            src="/images/rov/explorations.webp"
                            alt="Service card explorations comparing ROV Blue and Gradient Brown"
                            w={1350}
                            h={385}
                            bg="#444444"
                        />
                    </div>
                </Section>

                {/* 04 The Design */}
                <Section
                    id="design"
                    n={4}
                    label="The design"
                    title="An identity built to hold everything they make"
                    intro="Color, gradients, type and components for the website, the socials, and every client project after."
                    takeaway="Seven colors and three gradients meant every new page, post and deck already knew how to look like ROV."
                >
                    <div>
                        <SubHeading>Color palette</SubHeading>
                        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
                            {SWATCHES.map((s) => (
                                <li key={s.name} className="overflow-hidden rounded-2xl border border-[#E1E6DB]">
                                    <div className="flex aspect-[4/5] items-end p-4" style={{ background: s.hex }}>
                                        <span className="text-sm font-semibold" style={{ color: s.dark ? ROV.cream : ROV.ink }}>
                                            {s.name}
                                        </span>
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className={`${MONO} text-xs uppercase tracking-[0.08em] text-[#161514]`}>{s.hex}</p>
                                        <p className="mt-1 text-sm text-[#75716B]">{s.role}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <SubHeading>Gradients</SubHeading>
                        <ul className="mt-6 grid gap-6 md:grid-cols-3">
                            {GRADIENTS.map((g) => (
                                <li key={g.name}>
                                    <div className="aspect-[4/3] rounded-2xl" style={{ background: g.css }} />
                                    <p className="mt-3 text-lg font-semibold text-[#161514]">{g.name}</p>
                                    <p className="text-sm text-[#75716B]">{g.use}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                            <Figure src="/images/rov/banner-linkedin.webp" alt="Ayush Basu LinkedIn banner in the Ember gradient" w={1584} h={396} bg="#000" caption="Ember on LinkedIn." />
                            <Figure src="/images/rov/banner-dashboard.webp" alt="Team dashboard banner in the Ember gradient" w={1500} h={600} bg="#000" caption="Team dashboard header." />
                        </div>
                    </div>

                    <div>
                        <SubHeading>Typography</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                            <div className="rounded-2xl p-10 max-[900px]:p-6" style={{ background: ROV.ink, color: ROV.cream }}>
                                <p className="text-[clamp(40px,5vw,72px)] leading-none tracking-[-0.03em]">
                                    <span className="font-extralight">Creative</span> <span className="font-bold italic">Identity</span>
                                </p>
                                <p className="mt-6 max-w-[48ch] text-lg leading-[1.6]" style={{ color: "rgba(253,241,227,0.7)" }}>
                                    The signature move: a light, open word paired with a heavy italic. One steady, one in motion.
                                </p>
                            </div>
                            <ul className="flex flex-col justify-between gap-6 rounded-2xl border border-[#E1E6DB] p-10 max-[900px]:p-6">
                                {[
                                    ["Headings", "Norwige", "italic font-semibold"],
                                    ["Body", "Roboto", ""],
                                    ["Labels", "Wide-tracked caps", "uppercase tracking-[0.18em] !text-lg"],
                                ].map(([k, v, c]) => (
                                    <li key={k}>
                                        <p className={LABEL}>{k}</p>
                                        <p className={`mt-1 text-[22px] text-[#161514] ${c}`}>{v}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-3 text-sm text-[#75716B]">Shown in Geist here; the live site uses Norwige and Roboto.</p>
                    </div>

                    <div>
                        <SubHeading>Buttons and components</SubHeading>
                        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl p-10 max-[900px]:p-6" style={{ background: ROV.ink, color: ROV.cream }} aria-label="ROV button styles">
                            <span className={`${pill} px-6 py-3.5 text-sm font-medium shadow-[0_10px_30px_rgba(162,76,43,0.35)]`} style={{ background: `linear-gradient(90deg, ${ROV.espresso}, ${ROV.rust} 55%, ${ROV.glow})` }}>
                                See it in action <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className={`${pill} bg-[#1B1412] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide`}>Let&apos;s create!</span>
                            <span className={`${pill} border border-white/15 bg-white/[0.04] px-5 py-3 text-sm uppercase tracking-[0.08em] text-white/85`}>
                                View full team <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className={`${pill} gap-3 border border-white/15 bg-black px-5 py-3 text-xs uppercase tracking-[0.2em]`}>
                                Menu <Menu className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="inline-flex rounded-full bg-white/[0.06] p-1 text-xs uppercase tracking-[0.12em]">
                                <span className="rounded-full px-4 py-2" style={{ background: ROV.umber }}>
                                    Grid
                                </span>
                                <span className="px-4 py-2 text-white/50">Globe</span>
                            </span>
                        </div>
                        <p className="mt-3 text-sm text-[#75716B]">The real components, rebuilt from the live site.</p>
                    </div>

                    <div>
                        <SubHeading>The system, live on rovstudios.com</SubHeading>
                        <div className="mt-6">
                            <ImageTabs label="Pages of rovstudios.com" items={LIVE} aspect="1404/739" bg="#000000" />
                        </div>
                    </div>
                </Section>

                {/* 05 Impact */}
                <Section
                    id="impact"
                    n={5}
                    label="Impact"
                    title="What it became"
                    intro="With an identity that finally matched its ambition, Range of View went on to work for Atlanta brands and venues."
                >
                    <div className="grid items-start gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                        <div className="flex flex-col gap-6">
                            <Highlight
                                kicker="Shipped · rovstudios.com"
                                title="Live, and still growing."
                                text="The identity runs the studio’s website, socials and client work."
                                cta="Visit rovstudios.com ↗"
                                href="https://www.rovstudios.com"
                            />
                            <ul className="divide-y divide-[#E1E6DB] rounded-2xl border border-[#E1E6DB]">
                                {OUTCOMES.map((o) => (
                                    <li key={o.name} className="flex items-center justify-between gap-4 px-6 py-5">
                                        {o.href ? (
                                            <a href={o.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${H3} no-underline`}>
                                                {o.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                            </a>
                                        ) : (
                                            <span className={H3}>{o.name}</span>
                                        )}
                                        <span className={`text-right ${LABEL}`}>{o.what}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://www.ayushbasu.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E1E6DB] px-5 py-3 text-lg font-medium text-[#161514] no-underline transition-colors hover:bg-[#EEF2EA]"
                            >
                                Meet the founder <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </div>
                        <Figure
                            src="/images/rov/client-work.webp"
                            alt="Client work: Aysegul Ikna fashion site and The Bando restaurant branding"
                            w={1290}
                            h={1060}
                            bg="#000"
                            caption="Client work: sustainable fashion at Ponce, and a wing spot with a loud voice."
                        />
                    </div>
                </Section>

                <NextProject
                    slug="ubs"
                    closing={
                        <>
                            The space is the limit. <span style={{ color: ROV.rust }}>Still making more as we go.</span>
                        </>
                    }
                />
            </CaseStudyMain>

            <Footer />
        </div>
    );
};

export default RovCaseStudy;
