import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
    CaseNav,
    Details,
    Eyebrow,
    GREEN,
    GradientCallout,
    Reveal,
    card,
    cardNumber,
    h2,
    h3,
    intro,
    introStyle,
} from "./shared";
import {
    AppExplorer,
    DashboardFeatures,
    DashboardZoom,
    EcosystemBands,
    IdExplorer,
    JourneyPath,
    S,
    SPassHandoff,
    ScanSteps,
    ScannerExplorer,
    SecurityGrid,
    SolaceHero,
    TapFlow,
    UsabilityTabs,
} from "./SolaceModules";

const JUMP = [
    ["Problem", "#overview"],
    ["Journey", "#journey"],
    ["Ecosystem", "#ecosystem"],
    ["Scanner", "#scanner"],
    ["ID", "#id"],
    ["Platform", "#platform"],
    ["App", "#app"],
    ["Security", "#security"],
    ["Usability", "#usability"],
];

const PROBLEMS = [
    ["01", "Repeated intake", "Individuals frequently go through intake again and again, causing unnecessary stress and delays."],
    ["02", "No shared visibility", "There is limited shared visibility into services and capacity, which makes coordination challenging."],
    ["03", "Accountability gaps", "As individuals move between providers, responsibility shifts, but accountability often does not, leading to gaps in support."],
];

const ID_FEATURES = [
    ["Secure tap authentication", "Powered by NXP MIFARE DESFire EV3 NFC smart card technology, enabling encrypted tap verification between the S-ID and authorized caseworker devices."],
    ["Privacy-preserving architecture", "Only an AES-256 encrypted identifier is stored on the card."],
    ["Persistent identity continuity", "A unique encrypted SID links all records to one consistent identity."],
    ["Durable for field conditions", "A rugged smart card built for high-frequency use with a variety of NFC readers in camp environments."],
];

/* Solace case study. Kavya's layout and green, with Solace's sage palette, wide display type and S mark as the flare. */
const SolaceCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <main>
                <div style={{ background: GREEN }}>
                    <SolaceHero />
                </div>

                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-6xl">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 lg:mb-16">
                        Solace
                    </h1>

                    <Details
                        items={[
                            ["Role", "Service & Product Designer"],
                            ["Industry", "Humanitarian Technology"],
                            ["Scope", "Scanner, ID, App, Platform, Handbook"],
                            ["Team", "Siya Jain, Eugina Han, Kavya Ray"],
                        ]}
                    />

                    <div className="mb-10 sm:mb-16">
                        <p className="text-base text-gray-900 leading-relaxed">
                            Refugee support systems are fragmented, so people repeat their story at every door. Solace is
                            a connected set of tools, a scanner, an ID card, a caseworker app, and a case management
                            platform, that gives each person one record that travels with them. This case study follows
                            the orientation handbook we wrote to introduce caseworkers to the whole ecosystem.
                        </p>
                        <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-2">
                            {JUMP.map(([label, href]) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="rounded-full border-2 border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 no-underline transition-all duration-300 hover:border-[#343F28] hover:text-[#343F28]"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Philosophy */}
                    <Reveal>
                        <GradientCallout gradient={S.gradient}>
                            <div className="grid lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
                                <div className="p-8 md:py-[74px] md:px-[60px] flex flex-col justify-center gap-5">
                                    <Eyebrow color={S.sage}>Our philosophy</Eyebrow>
                                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium leading-tight md:leading-[52px]" style={{ color: GREEN }}>
                                        Built on trust, driven by transparency
                                    </h2>
                                    <p className="text-base text-gray-900 leading-relaxed">
                                        And designed to provide reassurance at every step.
                                    </p>
                                </div>
                                <div className="relative min-h-[280px]">
                                    <img
                                        src="/images/solace/team-trio.webp"
                                        alt="Three members of the Solace team smiling together"
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
                                    />
                                </div>
                            </div>
                        </GradientCallout>
                    </Reveal>

                    {/* Problem */}
                    <div id="overview" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>Company overview</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>The Problem</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Refugee support systems are often fragmented, with case histories spread across multiple
                            organizations, making continuity of care difficult.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                            {PROBLEMS.map(([n, t, d]) => (
                                <div key={n} className={card}>
                                    <h3 className={cardNumber}>{n}</h3>
                                    <p className="text-base text-gray-900 font-semibold">{t}</p>
                                    <p className="mt-2 text-base text-gray-900">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Note from the team */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className={h2} style={{ color: GREEN }}>From the Solace Team</h2>
                        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
                            <Reveal>
                                <div className="overflow-hidden rounded-2xl border-2 border-gray-200">
                                    <img
                                        src="/images/solace/team-laugh.webp"
                                        alt="The Solace team laughing together"
                                        loading="lazy"
                                        className="block h-auto w-full"
                                    />
                                </div>
                                <p className="mt-3 text-sm text-gray-600">Siya Jain, Eugina Han, and Kavya Ray.</p>
                            </Reveal>
                            <div className="space-y-4 text-base text-gray-900 leading-relaxed">
                                <p>
                                    Solace was designed to support caseworkers navigating complex and fragmented systems
                                    where clarity, continuity, and coordination are essential. The system recognizes that
                                    the refugee journey is not linear, and that individuals often move across multiple
                                    organizations and points of care.
                                </p>
                                <p>
                                    It is not just a tool for managing information, but a system intended to reduce
                                    confusion, prevent gaps in care, and create a more consistent experience. Many people
                                    entering this system are navigating uncertainty and unfamiliar processes, where even
                                    small moments of clarity can make a meaningful difference.
                                </p>
                                <p>
                                    While the system provides structure, it is the way it is used that shapes the
                                    experience. The goal is not only efficiency, but ensuring that each interaction
                                    reflects care, clarity, and respect for the individual behind the case.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Journey */}
                    <div id="journey" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>Understanding the person</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>The Refugee Journey</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            The journey is not linear, and it rarely stays with one organization. Step through it.
                        </p>
                        <JourneyPath />
                    </div>

                    {/* Ecosystem */}
                    <div id="ecosystem" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>The system</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>The Solace Ecosystem</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Together, these tools create a shared system of record that travels with the individual,
                            not the organization.
                        </p>
                        <EcosystemBands />
                    </div>

                    {/* Scanner */}
                    <div id="scanner" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>01 · Capture</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Solace Scanner</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            A portable intake scanner for the field. Point at any part of the exploded view to see
                            what it does.
                        </p>
                        <ScannerExplorer />

                        <div className="mt-10 sm:mt-16 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
                            <div>
                                <h3 className={h3}>How the scan works</h3>
                                <ScanSteps />
                            </div>
                            <div className="grid content-start gap-4 sm:gap-6">
                                {[
                                    ["Offline-first secure sync", "The scanner cannot start intake or unlock stored scans without biometric authentication."],
                                    ["Optical character recognition", "AI is used to detect language, extract and correct text, and route uncertain cases to human reviewers."],
                                ].map(([t, d]) => (
                                    <div key={t} className={card}>
                                        <p className="text-base text-gray-900 font-semibold">{t}</p>
                                        <p className="mt-2 text-base text-gray-900">{d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ID */}
                    <div id="id" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>02 · Preserve</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Solace ID</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            A card that has to work for someone with no phone, no common language, and no patience for
                            another form. Flip it and look at every part.
                        </p>
                        <IdExplorer />

                        <h3 className={`${h3} mt-10 sm:mt-16`}>What happens during a tap?</h3>
                        <TapFlow />

                        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2">
                            {ID_FEATURES.map(([t, d]) => (
                                <div key={t} className={card}>
                                    <p className="text-base text-gray-900 font-semibold">{t}</p>
                                    <p className="mt-2 text-base text-gray-900">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div id="platform" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>03 · Connect</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Case Management Platform</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Where caseworkers across organizations see the same case, the same history, and the same
                            next step.
                        </p>
                        <DashboardZoom />

                        <h3 className={`${h3} mt-10 sm:mt-16`}>How the dashboard works</h3>
                        <DashboardFeatures />

                        <h3 className={`${h3} mt-10 sm:mt-16`}>The S-PASS protocol</h3>
                        <SPassHandoff />
                    </div>

                    {/* App */}
                    <div id="app" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>On the caseworker&apos;s phone</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Solace App</h2>
                        <AppExplorer />
                    </div>

                    {/* Security */}
                    <div id="security" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>Founding principle</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Security &amp; Data</h2>
                        <p className={`mb-8 sm:mb-12 ${intro}`} style={introStyle}>
                            Security and privacy are foundational to Solace. All data is securely stored, encrypted,
                            and shared only with authorized organizations, so sensitive information is protected at
                            every stage.
                        </p>
                        <SecurityGrid />
                        <p className="mt-10 sm:mt-14 text-center text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
                            “Behind every system is a person. Designing with care means protecting both.”
                        </p>
                    </div>

                    {/* Usability */}
                    <div id="usability" className="mt-10 scroll-mt-24 sm:mt-20">
                        <Eyebrow color={S.sage}>In use</Eyebrow>
                        <h2 className={h2} style={{ color: GREEN }}>Usability</h2>
                        <UsabilityTabs />
                    </div>

                    {/* Close */}
                    <div className="mt-10 sm:mt-20">
                        <div>
                            <CaseNav
                                prev={{ label: "FIFA", href: "/case-study/fifa" }}
                                next={{ label: "Range of View Studios", href: "/case-study/rov" }}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SolaceCaseStudy;
