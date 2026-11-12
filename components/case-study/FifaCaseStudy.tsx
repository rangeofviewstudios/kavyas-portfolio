import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChallengeExplorer, CoreTension, FieldGallery, MapLayers, SpectatorStats } from "./FifaModules";
import {
    BarList,
    BODY,
    CARD,
    Caption,
    CaseStudyMain,
    FindingCard,
    LABEL,
    NextProject,
    Overview,
    Quote,
    Section,
    Stat,
    SubHeading,
} from "./CaseStudyKit";

// FIFA deck blue. Defined here rather than imported: FifaModules is a client module, and a server
// component only receives its components from it, not plain values like the F palette.
const FIFA_BLUE = "#3674B9";

const WSB_URL =
    "https://www.wsbtv.com/news/local/atlanta/scad-students-create-murals-signs-welcome-world-atlanta-world-cup/KCLNW34AGVC63HC3JHPW6GKCVE/";

/*
  FIFA World Cup 26 case study, on the shared case study kit (CaseStudyKit).
  00 Overview · 01 Challenge · 02 Research · 03 Mapping · 04 Design · 05 Impact · next.
*/
const FifaCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <CaseStudyMain>
                {/* 00 Overview */}
                <Overview
                    tags={["Service Design", "Wayfinding Strategy", "UX Research"]}
                    title="Guiding ~300K World Cup fans through Atlanta’s last mile"
                    badge="shipped"
                    facts={[
                        { label: "Role", value: "UX Lead (1 of 4)" },
                        { label: "Team", value: "11-person UX team, 30+ across UX, advertising & branding" },
                        { label: "Timeline", value: "Jan – Apr 2026" },
                        { label: "Client", value: "Atlanta World Cup Host Committee, Metro Atlanta Chamber" },
                        { label: "Methods", value: "Field audit, route mapping, benchmark study, evaluation metrics" },
                    ]}
                    image={{
                        src: "/images/fifa-flags.jpg",
                        alt: "FIFA World Cup 26 wayfinding flags pointing to Atlanta Stadium and Fan Fest",
                        position: "50% 25%",
                    }}
                    summary={[
                        { label: "Problem", text: "[~300K fans, most from out of state, arriving and leaving in waves on a route they have never walked.]" },
                        { label: "What I did", text: "[As 1 of 4 UX leads: walked the route, benchmarked past global events, and mapped routes and friction points into a signage plan.]" },
                        { label: "Impact", text: "[Signs, flags, ground graphics and totems installed downtown for 8 World Cup matches, featured on WSB-TV.]" },
                    ]}
                    news={{
                        kicker: "WSB-TV · June 11, 2026",
                        title: "I’m on the news!",
                        text: "WSB-TV Channel 2 featured our Last Mile wayfinding, now installed across downtown Atlanta.",
                        cta: "Watch the story ↗",
                        href: WSB_URL,
                    }}
                />

                {/* 01 The Challenge */}
                <Section
                    id="challenge"
                    n={1}
                    label="The challenge"
                    title="Design a safe, engaging, FIFA-compliant Last Mile"
                    intro="One that keeps crowds moving smoothly while delivering a world-class fan journey that celebrates Atlanta’s identity."
                    takeaway="Most fans have never seen downtown, and they arrive all at once. The route has to explain itself."
                >
                    <SpectatorStats />
                    <Quote text="Atlanta has set the standard for what soccer in America can be." by="Don Garber, MLS Commissioner" />
                    <ChallengeExplorer />
                    <CoreTension />
                </Section>

                {/* 02 Research */}
                <Section
                    id="research"
                    n={2}
                    label="Research"
                    title="Walking the route, and learning from past events"
                    intro="We walked the Last Mile ourselves, looking for the moments where a stranger would hesitate, and benchmarked what past global events had learned."
                    takeaway="People hesitate at forks, not on straight blocks. So the signs go where decisions happen."
                >
                    <div>
                        <SubHeading>Field walk</SubHeading>
                        <div className="mt-6">
                            <FieldGallery />
                        </div>
                        <Caption>Tap any photo to open it. Use the arrow keys to move through them.</Caption>
                    </div>
                    <div>
                        <SubHeading>What we learned from global events</SubHeading>
                        <div className="mt-6">
                            <BarList
                                color={FIFA_BLUE}
                                max={100}
                                source="Benchmarks from past global events"
                                rows={[
                                    { label: "Movement accuracy when digital and physical signage work together", value: 93, display: "93%" },
                                    { label: "Less backtracking when wayfinding is clear", value: 40, display: "40%" },
                                    { label: "User errors that happen after 3 seconds of decision time", value: 23, display: "23%" },
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <SubHeading>What we found</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <FindingCard
                                n={1}
                                headline="Most fans have never seen downtown."
                                evidence="75% of the ~300K spectators travel from outside Georgia."
                                designed="Signs that work without local knowledge: landmarks, arrows, distance."
                            />
                            <FindingCard
                                n={2}
                                headline="Everyone arrives at once."
                                evidence="60–70% arrive in the 90 minutes before kickoff."
                                designed="Signs readable at a glance, above crowd height."
                            />
                            <FindingCard
                                n={3}
                                headline="Hesitation happens at forks, not on blocks."
                                evidence="On our field walk, we stopped at exits, crossings and narrow sidewalks."
                                designed="A sign at every decision point, not every block."
                            />
                        </div>
                    </div>
                </Section>

                {/* 03 Mapping the Last Mile */}
                <Section
                    id="mapping"
                    n={3}
                    label="Mapping the Last Mile"
                    title="Routes, signage and friction points"
                    intro="Primary routes link the Fan Festival, the stadium and the transit stations; mapping them showed where movement would slow down."
                    takeaway="The friction points showed where signs, flags and ground graphics had to do the most work."
                >
                    <MapLayers />
                </Section>

                {/* 04 The Design */}
                <Section
                    id="design"
                    n={4}
                    label="The design"
                    title="The Last Mile system"
                    intro="A wayfinding system of directional signs, flags, ground graphics and totems, built with the Atlanta World Cup Host Committee."
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        <figure>
                            <div className="relative aspect-[1036/863] overflow-hidden rounded-2xl bg-[#EEF2EA]">
                                <Image
                                    src="/images/fifa-flags.jpg"
                                    alt="Two World Cup 26 flags: one reading Right Where You Belong, one pointing to Atlanta Stadium and Fan Fest"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 750px"
                                    className="object-cover"
                                />
                            </div>
                            <Caption>Directional flags for the route.</Caption>
                        </figure>
                        <figure>
                            <div className="relative aspect-[1036/863] overflow-hidden rounded-2xl bg-[#EEF2EA]">
                                <Image
                                    src="/images/fifacard.jpg"
                                    alt="The SCAD team with the white Last Mile city model inside the Atlanta stadium"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 750px"
                                    className="object-cover"
                                />
                            </div>
                            <Caption>The team with the Last Mile model.</Caption>
                        </figure>
                    </div>
                </Section>

                {/* 05 Impact */}
                <Section
                    id="impact"
                    n={5}
                    label="Impact"
                    title="Now on the streets of Atlanta"
                    intro="The Last Mile plan is installed downtown for the World Cup."
                >
                    <div className="grid gap-6 md:grid-cols-3">
                        <Stat value="8" label="World Cup matches with the system installed downtown" />
                        <Stat value="~300K" label="spectators on the route" />
                        <Stat value="Live" label="installed downtown Atlanta" />
                    </div>
                    <a href={WSB_URL} target="_blank" rel="noopener noreferrer" className={`block no-underline transition-shadow hover:shadow-lg ${CARD}`}>
                        <p className={LABEL}>In the news · WSB-TV Channel 2 · June 11, 2026</p>
                        <p className="mt-4 max-w-[40ch] text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#161514]">
                            SCAD students create murals, signs to welcome the world to Atlanta for World Cup
                        </p>
                        <p className={`mt-4 max-w-[72ch] ${BODY}`}>
                            The Last Mile plan, a wayfinding system of directional signs, flags, ground graphics and totems,
                            built with the Atlanta World Cup Host Committee, is now installed downtown.
                        </p>
                        <span className="mt-6 inline-block text-lg font-semibold" style={{ color: FIFA_BLUE }}>
                            Read the article &rarr;
                        </span>
                    </a>
                    <Quote text="They feel like they have an intuitive way to get around." by="Kavya Ray, on WSB-TV" />
                </Section>

                {/* "What I learned" (LearningCard) and "Team & credits" are no longer shown; the components stay in CaseStudyKit. */}

                {/* Closing line + next project */}
                <NextProject
                    slug="solace"
                    closing={
                        <>
                            Which way do I go?{" "}
                            <span style={{ color: FIFA_BLUE }}>The answer should already be in front of them.</span>
                        </>
                    }
                />
            </CaseStudyMain>

            <Footer />
        </div>
    );
};

export default FifaCaseStudy;
