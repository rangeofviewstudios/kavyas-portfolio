import { FileSearch, LayoutGrid, Lock, Tags } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
    CARD,
    CaseStudyMain,
    Figure,
    H3,
    Highlight,
    ImageBand,
    LABEL,
    NextProject,
    Notice,
    Overview,
    PhotoCard,
    Section,
    Stat,
    SplitBar,
    SubHeading,
} from "./CaseStudyKit";

const UBS_RED = "#E60000";

/* My three contributions, from the original case study */
const CONTRIBUTIONS = [
    { icon: FileSearch, text: "Ran user research to understand the Swiss market and inform design decisions." },
    { icon: LayoutGrid, text: "Kept the UI designs aligned with research insights and user needs." },
    { icon: Tags, text: "Led usability testing to validate and refine the design solutions." },
];

/* Research themes. The findings themselves are under NDA. */
const THEMES = [
    { title: "Spending", text: "Spending patterns, and how people in Switzerland manage their finances." },
    { title: "Saving", text: "Saving patterns, and how they make financial decisions." },
    { title: "Trust", text: "Trust behaviors around money and banking." },
];

const PHASES = [
    {
        src: "/images/ubsdesignprocess1.png",
        alt: "The UBS team gathered around a table of laptops, with sticky notes covering the wall behind them",
        title: "Iteration",
        text: "We explored several directions, using research insights and user feedback, with rapid prototyping and testing.",
    },
    {
        src: "/images/ubsdesignprocess2.png",
        alt: "Team members working on laptops in a bright studio room",
        title: "Execution",
        text: "Once aligned on one direction, we built high-fidelity designs across the UI, research and strategy teams.",
    },
    {
        src: "/images/ubsdesignprocess3.png",
        alt: "A team member presenting at a podium beside a screen, in a stone-walled room lined with brand logos",
        title: "Deliver",
        text: "We presented the work to stakeholders, with the design rationale backed by user data.",
    },
];

/*
  UBS case study, on the shared case study kit (CaseStudyKit). NDA: process and role only.
  00 Overview · 01 Challenge · 02 Research · 03 Design process · 04 Impact · next.
*/
const UbsCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <CaseStudyMain>
                {/* 00 Overview */}
                <Overview
                    tags={["Fintech", "UX Research", "Usability Testing"]}
                    title="Researching a north-star UBS.com for the Swiss market"
                    badge="nda"
                    facts={[
                        { label: "Role", value: "UI / Research Bridge" },
                        { label: "Team", value: "20 people" },
                        { label: "Timeline", value: "10 weeks" },
                        { label: "Client", value: "UBS × SCADpro" },
                        { label: "Methods", value: "Maze surveys, interviews, usability testing" },
                    ]}
                    image={{
                        src: "/images/ubs-cover.webp",
                        alt: "Key4 Banking concept for UBS shown on a laptop, with expense and balance notifications floating beside it",
                    }}
                    summary={[
                        {
                            label: "Problem",
                            text: "UBS wanted a forward-looking UBS.com that anticipates what people need, for a new audience: the Swiss market.",
                        },
                        {
                            label: "What I did",
                            text: "Bridged research and UI: researched Swiss users on Maze, kept designs tied to the insights, and led usability testing.",
                        },
                        {
                            label: "Impact",
                            text: "Presented a north-star vision for UBS.com to UBS in Lacoste, France.",
                        },
                    ]}
                    news={{
                        kicker: "SCADpro × UBS · Lacoste, France",
                        title: "Presented to UBS.",
                        text: "Our north-star vision for UBS.com, shared with the UBS team in France.",
                        cta: "See the presentation ↓",
                        href: "#impact",
                    }}
                />

                <div className="mx-auto mt-6 w-full max-w-[1600px] px-[clamp(16px,3vw,48px)]">
                    <Notice title="This project is under NDA">
                        This case study covers the team&apos;s process and my role. Research findings and final designs stay confidential.
                    </Notice>
                </div>

                {/* 01 The Challenge */}
                <Section
                    id="challenge"
                    n={1}
                    label="The challenge"
                    title="A north-star UBS.com for a new market"
                    intro="Research and develop a dynamic, scalable vision for UBS.com that doesn’t just meet people’s needs, but anticipates them."
                    takeaway="Designing for a new market meant research had to steer the design, not follow it."
                >
                    <ImageBand
                        src="/images/ubspageheader.png"
                        alt="The SCADpro team posing together in front of a large UBS logo on screen"
                        label="UBS × SCADpro"
                        title="Designing for the Swiss market"
                        text="The audience was the Swiss market, so our solutions had to reflect its needs, preferences and cultural nuances."
                        position="50% 40%"
                    />
                    <div>
                        <SubHeading>My role: the bridge between research and UI</SubHeading>
                        <ul className="mt-6 grid gap-6 md:grid-cols-3">
                            {CONTRIBUTIONS.map(({ icon: Icon, text }, i) => (
                                <li key={text} className={CARD}>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "#FDECEC", color: UBS_RED }}>
                                        <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                    <p className={`mt-6 ${LABEL}`}>{String(i + 1).padStart(2, "0")}</p>
                                    <p className={`mt-2 ${H3}`}>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                {/* 02 Research */}
                <Section
                    id="research"
                    n={2}
                    label="Research"
                    title="Understanding the Swiss market"
                    intro="We used Maze to research how people in Switzerland manage their money and make financial decisions."
                    takeaway="Spending, saving and trust became the lens for every design decision that followed."
                >
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                        <Figure
                            src="/images/project-ubs.jpg"
                            alt="The team in a workshop, gathered around a whiteboard covered in sticky notes"
                            w={800}
                            h={544}
                            aspect="4/3"
                            caption="Synthesizing responses on the wall."
                        />
                        <div className="flex flex-col gap-6">
                            <SplitBar
                                title="Who we heard from"
                                total="70 responses"
                                source="Maze · primary research"
                                parts={[
                                    { label: "Swiss participants, interviews", value: 40, color: "#B0000C", ink: "#FFFFFF" },
                                    { label: "Gen Z participants, surveys", value: 30, color: "#F2858A", ink: "#161514" },
                                ]}
                            />
                            <div className="flex flex-1 flex-col justify-between gap-6 rounded-2xl bg-[#161514] p-8 text-white max-[900px]:p-6">
                                <Lock className="h-6 w-6 text-white/70" aria-hidden="true" />
                                <p className="max-w-[40ch] text-[22px] font-semibold leading-[1.35] tracking-[-0.01em]">
                                    Patterns in spending, saving and trust helped us tailor solutions to Swiss users.
                                </p>
                                <p className={`${LABEL} !text-white/60`}>Findings under NDA</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SubHeading>What we looked at</SubHeading>
                        <ul className="mt-6 grid gap-6 md:grid-cols-3">
                            {THEMES.map((t, i) => (
                                <li key={t.title} className="flex h-full flex-col rounded-2xl bg-[#EEF2EA] p-8 max-[900px]:p-6">
                                    <p className={LABEL}>Theme {String(i + 1).padStart(2, "0")}</p>
                                    <p className="mt-4 text-2xl font-semibold leading-[1.2] tracking-[-0.015em] text-[#161514]">{t.title}</p>
                                    <p className="mt-3 text-lg leading-[1.6] text-[#45423E]">{t.text}</p>
                                    <p className={`mt-auto pt-6 ${LABEL} flex items-center gap-2`}>
                                        <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Insights under NDA
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                {/* 03 Design process */}
                <Section
                    id="process"
                    n={3}
                    label="Design process"
                    title="Iterate, execute, deliver"
                    intro="Ten weeks, three phases, with research feeding every round of design."
                    takeaway="Explore wide, commit with the research, then present the reasoning, not just the screens."
                >
                    <ol className="grid gap-6 md:grid-cols-3">
                        {PHASES.map((p, i) => (
                            <li key={p.title}>
                                <PhotoCard src={p.src} alt={p.alt} label={`Phase ${String(i + 1).padStart(2, "0")}`} title={p.title} text={p.text} aspect="499/318" />
                            </li>
                        ))}
                    </ol>
                </Section>

                {/* 04 Impact */}
                <Section
                    id="impact"
                    n={4}
                    label="Impact"
                    title="Presented to UBS in Lacoste, France"
                    intro="We shared our north-star vision for UBS.com with the UBS team."
                >
                    <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                        <Figure
                            src="/images/moments/ubs-lacoste.jpg"
                            alt="Kavya leaning on a lit UBS podium in a green presentation room"
                            w={930}
                            h={1288}
                            aspect="4/5"
                            position="50% 35%"
                            caption="At the UBS podium in Lacoste."
                        />
                        <div className="flex flex-col justify-between gap-10 pb-8 max-md:pb-0">
                            <Highlight
                                kicker="SCADpro × UBS · Lacoste, France"
                                title="A north-star vision for UBS.com."
                                text="Backed by 70 research responses and usability testing."
                            />
                            <div className="grid gap-6 sm:grid-cols-3">
                                <Stat value="70" label="research responses" color={UBS_RED} />
                                <Stat value="40" label="Swiss participants" color={UBS_RED} />
                                <Stat value="10" label="weeks" color={UBS_RED} />
                            </div>
                        </div>
                    </div>
                </Section>

                <NextProject
                    slug="looma"
                    closing={
                        <>
                            Turning user insights into <span style={{ color: UBS_RED }}>culturally relevant design.</span>
                        </>
                    }
                />
            </CaseStudyMain>

            <Footer />
        </div>
    );
};

export default UbsCaseStudy;
