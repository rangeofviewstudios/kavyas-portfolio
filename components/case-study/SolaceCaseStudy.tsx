import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
    AppExplorer,
    DashboardFeatures,
    DashboardZoom,
    EcosystemBands,
    IdExplorer,
    JourneyPath,
    ScannerExplorer,
    SecurityGrid,
    SolaceFlows,
    UsabilityTabs,
} from "./SolaceModules";
import {
    BarList,
    CARD,
    Caption,
    CaseStudyMain,
    FindingCard,
    Highlight,
    ImageBand,
    LABEL,
    NextProject,
    Overview,
    Quote,
    Section,
    Stat,
    SubHeading,
} from "./CaseStudyKit";

// Solace deep sage. Defined here: SolaceModules is a client module, so a server component can't read its S palette.
const SAGE = "#3F5238";

const PROBLEMS = [
    ["Repeated intake", "Individuals go through intake again and again, causing unnecessary stress and delays."],
    ["No shared visibility", "There is limited shared visibility into services and capacity, which makes coordination hard."],
    ["Accountability gaps", "As individuals move between providers, responsibility shifts, but accountability often does not."],
];

const ID_FEATURES = [
    ["Secure tap authentication", "NXP MIFARE DESFire EV3 NFC, for encrypted tap verification with authorized caseworker devices."],
    ["Privacy-preserving", "Only an AES-256 encrypted identifier is stored on the card."],
    ["Persistent identity", "A unique encrypted SID links all records to one consistent identity."],
    ["Built for the field", "A rugged smart card for high-frequency use with many NFC readers in camps."],
];


/*
  Solace case study, on the shared case study kit (CaseStudyKit).
  00 Overview · 01 Challenge · 02 Research · 03 Design process · 04 Design · 05 Impact · next.
*/
const SolaceCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <CaseStudyMain>
                {/* 00 Overview */}
                <Overview
                    tags={["Service Design", "Product UI", "Humanitarian Technology"]}
                    title="One record that follows refugees across every organization"
                    badge="award"
                    facts={[
                        { label: "Role", value: "Service & Product Designer" },
                        { label: "Team", value: "Siya Jain, Eugina Han, Kavya Ray" },
                        { label: "Timeline", value: "Jan – May 2026" },
                        { label: "Project", value: "Senior capstone" },
                    ]}
                    image={{
                        src: "/images/solacecard.png",
                        alt: "Solace, a connected scanner, ID card, caseworker app and case management platform",
                    }}
                    summary={[
                        {
                            label: "Problem",
                            text: "Refugee case histories are spread across organizations, so people repeat their story at every door.",
                        },
                        {
                            label: "What I did",
                            text: "Designed Solace with a 3-person team: a scanner, an ID card, a caseworker app and a case management platform, plus a handbook for caseworkers.",
                        },
                        {
                            label: "Impact",
                            text: "Won the 2026 European Product Design Award for Interface Design, Product UI.",
                        },
                    ]}
                    news={{
                        kicker: "2026 Winner · European Product Design Award",
                        title: "Solace won.",
                        text: "Recognized for Interface Design, Product UI.",
                        cta: "See the showcase ↓",
                        href: "#impact",
                    }}
                />

                {/* 01 The Challenge */}
                <Section
                    id="challenge"
                    n={1}
                    label="The challenge"
                    title="Build a system that doesn’t forget people"
                    intro="Refugee support is fragmented: case histories are spread across organizations, which makes continuity of care difficult."
                    takeaway="Every gap traces back to one thing: the record stays with the organization, not the person."
                >
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className={CARD}>
                            <Stat value="6" label="stages in the refugee journey, rarely with one organization" color={SAGE} />
                        </div>
                        <div className={CARD}>
                            <Stat value="4" label="connected tools in the Solace system" color={SAGE} />
                        </div>
                        <div className={CARD}>
                            <Stat value="1" label="record per person, that travels with them" color={SAGE} />
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {PROBLEMS.map(([t, d], i) => (
                            <div key={t} className={CARD}>
                                <p className={LABEL}>Problem {String(i + 1).padStart(2, "0")}</p>
                                <p className="mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#161514]">{t}</p>
                                <p className="mt-2 text-lg leading-[1.6] text-[#45423E]">{d}</p>
                            </div>
                        ))}
                    </div>
                    <ImageBand
                        src="/images/solace/shore.webp"
                        alt="Two people at the water’s edge at dusk, with a ship on the horizon"
                        label="Our philosophy"
                        title="Built on trust, driven by transparency"
                        text="And designed to provide reassurance at every step."
                    />
                </Section>

                {/* 02 Research */}
                <Section
                    id="research"
                    n={2}
                    label="Research"
                    title="Following the person, not the organization"
                    intro="The refugee journey isn’t linear, and it rarely stays with one organization. We mapped it, and looked at how healthcare handles handoffs."
                    takeaway="A structured handoff halves what gets lost. Refugee case transfers needed one too, so we designed S-PASS."
                >
                    <div>
                        <SubHeading>The refugee journey</SubHeading>
                        <div className="mt-6">
                            <JourneyPath />
                        </div>
                        <Caption>Select a stage to read it. The journey advances on its own until you do.</Caption>
                    </div>
                    <div>
                        <SubHeading>What we learned from healthcare handoffs</SubHeading>
                        <div className="mt-6">
                            <BarList
                                max={100}
                                source="I-PASS medical handoff protocol"
                                rows={[
                                    { label: "Without a structured handoff", value: 75, display: "75%", color: "#B9C4B1" },
                                    { label: "With I-PASS, a structured handoff", value: 37.5, display: "37.5%", color: SAGE },
                                ]}
                            />
                            <p className="mt-3 text-sm leading-[1.5] text-[#75716B]">Share of information lost when a patient is handed off between care teams.</p>
                        </div>
                    </div>
                    <div>
                        <SubHeading>What we found</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <FindingCard
                                n={1}
                                headline="People repeat their story at every door."
                                evidence="Individuals go through intake again and again, causing stress and delays."
                                designed="A field scanner, so documents are captured once, at first intake."
                            />
                            <FindingCard
                                n={2}
                                headline="No one sees the whole picture."
                                evidence="Shared visibility into services and capacity is limited, so coordination is hard."
                                designed="One platform where every agency sees the same case and next step."
                            />
                            <FindingCard
                                n={3}
                                headline="Responsibility moves; accountability doesn’t."
                                evidence="As people move between providers, gaps in support open up."
                                designed="S-PASS: a structured handoff before the next agency can edit a record."
                            />
                        </div>
                    </div>
                </Section>

                {/* 03 Design process */}
                <Section
                    id="process"
                    n={3}
                    label="Design process"
                    title="A system of record that travels with the person"
                    intro="Three tools capture, preserve and connect one record, and three flows move it safely between people and agencies."
                    takeaway="Captured once, opened with a tap, handed off with context: one record that follows the person."
                >
                    <div>
                        <SubHeading>The Solace ecosystem</SubHeading>
                        <div className="mt-6">
                            <EcosystemBands />
                        </div>
                    </div>
                    <div>
                        <SubHeading>Key flows</SubHeading>
                        <div className="mt-6">
                            <SolaceFlows />
                        </div>
                    </div>
                </Section>

                {/* 04 The Design */}
                <Section
                    id="design"
                    n={4}
                    label="The design"
                    title="Scanner, ID, platform and app"
                    intro="Each part is built for the field: offline, low-literacy, multilingual, and private by default."
                >
                    <div id="scanner" className="scroll-mt-28">
                        <SubHeading>Solace Scanner</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">
                            A portable intake scanner. It can’t start intake or unlock stored scans without biometric authentication, and AI routes
                            uncertain text to a human reviewer.
                        </p>
                        <div className="mt-6">
                            <ScannerExplorer />
                        </div>
                        <Caption>Select a part of the exploded view to see what it does.</Caption>
                    </div>

                    <div id="id" className="scroll-mt-28">
                        <SubHeading>Solace ID</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">
                            A card that works for someone with no phone and no common language. Flip it to see every part.
                        </p>
                        <div className="mt-6">
                            <IdExplorer />
                        </div>
                        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {ID_FEATURES.map(([t, d]) => (
                                <li key={t} className="rounded-xl border border-[#E1E6DB] bg-white p-7 max-[900px]:p-6">
                                    <p className="text-lg font-semibold text-[#161514]">{t}</p>
                                    <p className="mt-2 text-lg leading-[1.5] text-[#45423E]">{d}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="platform" className="scroll-mt-28">
                        <SubHeading>Case management platform</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">
                            Caseworkers across organizations see the same case, the same history and the same next step.
                        </p>
                        <div className="mt-6">
                            <DashboardZoom />
                        </div>
                        <div className="mt-6">
                            <DashboardFeatures />
                        </div>
                    </div>

                    <div id="app" className="scroll-mt-28">
                        <SubHeading>Solace app</SubHeading>
                        <div className="mt-6">
                            <AppExplorer />
                        </div>
                    </div>

                    <div id="security" className="scroll-mt-28">
                        <SubHeading>Security &amp; data</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">
                            Data is stored encrypted and shared only with authorized organizations.
                        </p>
                        <div className="mt-6">
                            <SecurityGrid />
                        </div>
                    </div>

                    <div id="usability" className="scroll-mt-28">
                        <SubHeading>In use</SubHeading>
                        <div className="mt-6">
                            <UsabilityTabs />
                        </div>
                    </div>

                    <Quote text="Behind every system is a person. Designing with care means protecting both." by="The Solace team" />
                </Section>

                {/* 05 Impact */}
                <Section
                    id="impact"
                    n={5}
                    label="Impact"
                    title="Winner, European Product Design Award"
                    intro="Solace won in 2026 for Interface Design, Product UI."
                >
                    <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                        <figure>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#EEF2EA]">
                                <Image
                                    src="/images/moments/solace-showcase.jpg"
                                    alt="Two Solace team members at the showcase booth, with green Solace banners and cardboard boxes illustrated with refugee portraits"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 620px"
                                    className="object-cover"
                                />
                            </div>
                            <Caption>The Solace showcase booth.</Caption>
                        </figure>
                        <div className="flex flex-col justify-between gap-10 pb-8 max-md:pb-0">
                            <Highlight
                                kicker="2026 Winner · European Product Design Award"
                                title="Solace won for Interface Design, Product UI."
                                text="Designed by Siya Jain, Eugina Han and Kavya Ray."
                            />
                            <div className="grid gap-6 sm:grid-cols-3">
                                <Stat value="4" label="connected tools" color={SAGE} />
                                <Stat value="1" label="record per person" color={SAGE} />
                                <Stat value="3" label="person team" color={SAGE} />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Closing line + next project */}
                <NextProject
                    slug="rov"
                    closing={
                        <>
                            Build a system that <span style={{ color: SAGE }}>doesn’t forget people.</span>
                        </>
                    }
                />
            </CaseStudyMain>

            <Footer />
        </div>
    );
};

export default SolaceCaseStudy;
