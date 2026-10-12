import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
    CaseNav,
    Details,
    Eyebrow,
    GREEN,
    GradientCallout,
    Reveal,
    SectionCaption,
    h2,
    h3,
    intro,
    introStyle,
} from "./shared";
import {
    Arrows,
    AreaMap,
    ChallengeExplorer,
    CoreTension,
    F,
    FieldGallery,
    FifaHero,
    FocusAreas,
    LearnedStats,
    PillarsExplorer,
    QuoteRotator,
    SpectatorStats,
    WayfindingBanner,
} from "./FifaModules";

/* FIFA World Cup 26 case study. Kavya's layout and green, with the deck's chevrons, blues and reds as the flare. */
const FifaCaseStudy = () => {
    const wc26 = `linear-gradient(90deg, ${F.deep} 0%, ${F.pitch} 35%, ${F.blue} 70%, ${F.red} 100%)`;

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <main>
                <div style={{ background: GREEN }}>
                    <FifaHero />
                </div>

                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-6xl">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 lg:mb-16">
                        FIFA World Cup 26: The Atlanta Last Mile
                    </h1>

                    <Details
                        items={[
                            ["Role", "UX & Wayfinding Designer"],
                            ["Industry", "Sports & Live Events"],
                            ["Scope", "Wayfinding strategy, crowd flow, design guidelines"],
                            ["Location", "Atlanta, Georgia"],
                        ]}
                    />

                    <div className="mb-16">
                        <p className="text-base text-gray-900 leading-relaxed">
                            Atlanta is about to host the world. Roughly 300,000 spectators will move between the Fan
                            Festival and the stadium across eight matches, most of them arriving at the same time and
                            leaving at the same time. This is how we approached the last stretch of that journey: the
                            Last Mile.
                        </p>
                    </div>

                    {/* The Ask */}
                    <Reveal>
                        <GradientCallout gradient={wc26}>
                            <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                                <div className="relative h-56 lg:h-auto">
                                    <img
                                        src="/images/fifa/skyline-day.webp"
                                        alt="Downtown Atlanta skyline above the highway connector at golden hour"
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <span
                                        className="absolute left-4 top-4 rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm"
                                        style={{ background: F.red }}
                                    >
                                        The Ask
                                    </span>
                                </div>
                                <div className="p-8 md:py-[74px] md:px-[60px] flex flex-col justify-center gap-5">
                                    <Arrows color={F.red} />
                                    <p className="text-2xl sm:text-3xl md:text-[34px] font-medium leading-snug" style={{ color: GREEN }}>
                                        Design a safe, engaging, FIFA-compliant Last Mile framework.
                                    </p>
                                    <p className="text-base text-gray-900 leading-relaxed">
                                        One that ensures smooth crowd movement while delivering a world-class fan journey
                                        that celebrates Atlanta&apos;s identity.
                                    </p>
                                </div>
                            </div>
                        </GradientCallout>
                    </Reveal>

                    {/* Why Atlanta */}
                    <div className="mt-10 sm:mt-20">
                        <Eyebrow color={F.pitch}>Why Atlanta</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>The Epicenter of Soccer</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Before the wayfinding, the context. Three things make this city the right place for the
                            sport to land. Open each one.
                        </p>
                        <PillarsExplorer />
                        <div className="mt-6">
                            <QuoteRotator />
                        </div>
                    </div>

                    {/* Focus areas */}
                    <div className="mt-10 sm:mt-20">
                        <Eyebrow color={F.red}>The framework</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Focus Areas</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Five areas split between two goals: making the Last Mile clear, and making it a place fans
                            want to be.
                        </p>
                        <FocusAreas />
                    </div>

                    {/* 01 Wayfinding */}
                    <div className="mt-10 sm:mt-20">
                        <Eyebrow color={F.blue}>Focus area 01</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Wayfinding Strategy</h2>
                        <Reveal>
                            <WayfindingBanner />
                        </Reveal>
                    </div>

                    <div className="mt-10 sm:mt-16">
                        <h3 className={h3}>Who is coming</h3>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Most of the people in the Last Mile will have never seen it before.
                        </p>
                        <SpectatorStats />
                    </div>

                    <div className="mt-10 sm:mt-16">
                        <h3 className={h3}>When they move</h3>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Crowds do not trickle. They arrive in a wave before the match and leave in a wave after it.
                            Switch between the two.
                        </p>
                        <ChallengeExplorer />
                    </div>

                    <div className="mt-10 sm:mt-16">
                        <h3 className={h3}>The risk</h3>
                        <CoreTension />
                    </div>

                    {/* What we learned */}
                    <div className="mt-10 sm:mt-20">
                        <Eyebrow color={F.blue}>Research</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>What We Learned</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Past global events had already shown what clear wayfinding is worth. Three numbers
                            shaped the strategy.
                        </p>
                        <LearnedStats />
                    </div>

                    {/* On the ground */}
                    <div className="mt-10 sm:mt-20">
                        <Eyebrow color={F.pitch}>Field research</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>On the Ground</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            We walked the route ourselves, looking for the moments where a stranger would hesitate:
                            signs, posts, markers, forks in the path.
                        </p>
                        <FieldGallery />
                        <SectionCaption>Tap any photo to open it. Use the arrow keys to move through them.</SectionCaption>
                    </div>

                    {/* Area map */}
                    <div className="mt-10 sm:mt-20">
                        <div className="mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <Eyebrow color={F.red}>Movement routes</Eyebrow>
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold" style={{ color: GREEN }}>The Area</h2>
                            </div>
                            <img
                                src="/images/fifa/wc26-logo.webp"
                                alt="FIFA World Cup 26 Atlanta logo"
                                width={500}
                                height={834}
                                loading="lazy"
                                className="h-16 w-auto sm:h-24"
                            />
                        </div>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            The primary route runs from the Fan Festival to the stadium. Pick a place, or switch the
                            route on and off.
                        </p>
                        <Reveal>
                            <AreaMap />
                        </Reveal>
                    </div>

                    {/* Close */}
                    <div className="mt-10 sm:mt-20 text-center">
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 leading-relaxed">
                            Which way do I go?<br />
                            <span style={{ color: F.blue }}>The answer should already be in front of them.</span>
                        </p>
                        <CaseNav next={{ label: "Solace", href: "/case-study/solace" }} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FifaCaseStudy;
