import Image from "next/image";
import { BellRing, HeartPulse } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ImageTabs, type TabItem } from "./ImageTabs";
import {
    BarList,
    CARD,
    CaseStudyMain,
    Figure,
    FindingCard,
    H3,
    ImageBand,
    LABEL,
    MONO,
    NextProject,
    Overview,
    PhotoCard,
    Section,
    StatCard,
    STAT,
    SubHeading,
} from "./CaseStudyKit";

/* Looma blue, from the wordmark */
const LOOMA_BLUE = "#3E5BA9";
const L = "/images/looma";

/* People living with Alzheimer's, by region (original research), largest first. */
const REGIONS = [
    { name: "Asia", value: "15.4M", n: 15.4 },
    { name: "Europe", value: "9.7M", n: 9.7 },
    { name: "North America", value: "6.7M", n: 6.7 },
    { name: "South America", value: "4.5M", n: 4.5 },
    { name: "Africa", value: "2.13M", n: 2.13 },
    { name: "Australia", value: "400K", n: 0.4 },
];

const FEATURES: TabItem[] = [
    {
        id: "faces",
        label: "1 · Facial recognition",
        title: "Facial recognition",
        body: "The glasses identify family, friends and caregivers in real time, reducing confusion and supporting emotional connection.",
        images: [{ src: `${L}/looma4.png`, alt: "View through Looma glasses in a living room, with name labels over family members", w: 1440, h: 801 }],
    },
    {
        id: "space",
        label: "2 · Spatial awareness",
        title: "Spatial awareness",
        body: "Spatial guidance helps people move safely through familiar and unfamiliar places, reducing disorientation and falls.",
        images: [{ src: `${L}/looma11.png`, alt: "Looma glasses in brown, angled to show the frame and temple", w: 999, h: 707 }],
    },
    {
        id: "voice",
        label: "3 · Voice guidance",
        title: "Voice-assisted guidance and bone conduction",
        body: "Bone conduction, or AirPods, deliver clear voice prompts for daily tasks, reminders and navigation.",
        images: [{ src: `${L}/looma9.png`, alt: "A 3D head wearing Looma glasses, showing sound travelling by bone conduction behind the ear", w: 1440, h: 801 }],
    },
];

/*
  Looma case study, on the shared case study kit (CaseStudyKit).
  00 Overview · 01 Challenge · 02 Research · 03 Design process · 04 Design · next.
  No Impact section: there is no result to show yet.
*/
const LoomaCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <CaseStudyMain>
                {/* 00 Overview */}
                <Overview
                    tags={["Wearables", "AR", "Accessibility"]}
                    title="AR glasses that help people with Alzheimer’s recognize loved ones"
                    facts={[
                        { label: "Role", value: "UX Researcher / Presenter" },
                        { label: "Team", value: "5 people" },
                        { label: "Timeline", value: "1-week sprint" },
                        { label: "Context", value: "Startup competition" },
                        { label: "Methods", value: "Secondary research, audience mapping, concept design" },
                    ]}
                    image={{
                        src: `${L}/loomacard.png`,
                        alt: "View through Looma AR glasses in a living room, with name labels over family members and an Entering Living Room prompt",
                    }}
                    summary={[
                        {
                            label: "Problem",
                            text: "People with Alzheimer’s struggle to recognize familiar faces, keep routines and find their way, and their caregivers feel overwhelmed.",
                        },
                        {
                            label: "What I did",
                            text: "As UX researcher and presenter, researched Alzheimer’s global impact and helped shape and pitch an AR glasses ecosystem in one week.",
                        },
                    ]}
                />

                {/* 01 The Challenge */}
                <Section
                    id="challenge"
                    n={1}
                    label="The challenge"
                    title="Anchor the present moment"
                    intro="Memory loss affects the ability to recognize faces, keep routines and navigate. For families and caregivers, it’s emotionally and logistically overwhelming."
                    takeaway="Family is the foundation. Looma had to protect those bonds in the present moment."
                >
                    <ImageBand
                        src={`${L}/looma3.png`}
                        alt="Black-and-white photo of an older woman in profile, looking out at trees"
                        label="The question"
                        title="If she had Looma, could it help her remember her loved ones?"
                        position="60% 50%"
                    />
                    <div className="grid gap-6 md:grid-cols-3">
                        <StatCard value="38M+" label="people living with Alzheimer’s worldwide" source="Sum of regional figures below" color={LOOMA_BLUE} />
                        <StatCard value="Nº 7" label="leading cause of death globally" source="World Health Organization" color={LOOMA_BLUE} />
                        <StatCard value="1 week" label="to research, design and pitch the concept" source="Startup competition sprint" color={LOOMA_BLUE} />
                    </div>
                    <figure className="grid overflow-hidden rounded-2xl bg-[#2E3A5C] text-white md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                        <div className="relative min-h-[320px] bg-[#EEE9E2]">
                            <Image
                                src={`${L}/loomaquote.png`}
                                alt="MyeongJa, an older woman smiling at a table with a cup of tea and a purple smoothie"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-10 max-[900px]:p-6">
                            <blockquote className="max-w-[36ch] text-[clamp(26px,3vw,44px)] font-semibold leading-[1.15] tracking-[-0.01em]">
                                “Family is the foundation. The real challenge is building the tool that can anchor the present moment to protect those
                                bonds.”
                            </blockquote>
                            <figcaption className={`mt-6 ${MONO} text-xs uppercase tracking-[0.08em] text-white/70`}>MyeongJa 명자</figcaption>
                        </div>
                    </figure>
                </Section>

                {/* 02 Research */}
                <Section
                    id="research"
                    n={2}
                    label="Research"
                    title="How many people this touches"
                    intro="We looked at the global number of Alzheimer’s cases and its impact, then at who lives with it every day."
                    takeaway="38M+ people, and around each one a family and caregivers. Looma had to work for all three."
                >
                    <div>
                        <SubHeading>People living with Alzheimer’s, by region</SubHeading>
                        <div className="mt-6">
                            <BarList
                                color={LOOMA_BLUE}
                                source="Regional figures from our research · total 38M+"
                                rows={REGIONS.map((r) => ({ label: r.name, value: r.n, display: r.value }))}
                            />
                        </div>
                    </div>

                    <div>
                        <SubHeading>Who it’s for</SubHeading>
                        <ol className="mt-6 grid gap-6 md:grid-cols-3">
                            <li>
                                <PhotoCard src={`${L}/looma6.png`} alt="An older woman smiling as a younger woman hugs her" label="01" title="Patient / user" aspect="4/3" position="50% 30%" />
                            </li>
                            <li>
                                <PhotoCard src={`${L}/looma7.png`} alt="A smiling man looking at his phone" label="02" title="Family members" aspect="4/3" position="50% 30%" />
                            </li>
                            <li>
                                <PhotoCard src={`${L}/looma8.png`} alt="A caregiver in a yellow top checking on an older man at home" label="03" title="Caregiver" aspect="4/3" position="50% 35%" />
                            </li>
                        </ol>
                    </div>

                    <div>
                        <SubHeading>What we found</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <FindingCard
                                n={1}
                                headline="Familiar faces become strangers."
                                evidence="Memory loss affects the ability to recognize family, friends and caregivers."
                                designed="Real-time facial recognition that names who’s there."
                            />
                            <FindingCard
                                n={2}
                                headline="Getting around becomes risky."
                                evidence="Navigating surroundings leads to confusion, anxiety, disorientation and falls."
                                designed="Spatial guidance through familiar and new places."
                            />
                            <FindingCard
                                n={3}
                                headline="Caregivers feel helpless."
                                evidence="Family and caregivers feel overwhelmed trying to provide adequate support."
                                designed="A caregiver app with real-time updates, alerts and reports."
                            />
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#EEF2EA] p-10 max-[900px]:p-6">
                        <p className={LABEL}>How might we</p>
                        <p className="mt-3 max-w-[40ch] text-[clamp(26px,3vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#161514]">
                            Create a connected system that improves independence for people with Alzheimer’s and dementia, while easing the caregiving
                            experience?
                        </p>
                    </div>
                </Section>

                {/* 03 Design process */}
                <Section
                    id="process"
                    n={3}
                    label="Design process"
                    title="A product ecosystem around AR glasses"
                    intro="Glasses for the person, an app for caregivers, and health tracking that connects them: memory recall, routine reminders and spatial awareness."
                    takeaway="Each feature answers one finding: faces, getting around, and the people caring from afar."
                >
                    <ImageTabs label="Looma features" items={FEATURES} aspect="16/9" bg="#EEE9E2" contain />
                </Section>

                {/* 04 The Design */}
                <Section
                    id="design"
                    n={4}
                    label="The design"
                    title="Looma: recognize, remember, reconnect"
                    intro="The glasses, the brand and the caregiver app."
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        <Figure src={`${L}/looma1.png`} alt="Two pairs of Looma glasses beside the wordmark: Recognize, Remember, Reconnect" w={1440} h={726} aspect="16/9" caption="The brand." />
                        <Figure src={`${L}/looma14.png`} alt="Looma glasses in front of the large looma wordmark" w={1439} h={814} aspect="16/9" caption="The glasses." />
                    </div>
                    <Figure src={`${L}/looma13.png`} alt="Four screens of the Looma caregiver app: alerts, health data, a profile and a location map" w={1439} h={807} caption="The caregiver app." />
                    <ul className="grid gap-6 md:grid-cols-2">
                        <li className={CARD}>
                            <BellRing className="h-7 w-7" style={{ color: LOOMA_BLUE }} strokeWidth={1.8} aria-hidden="true" />
                            <p className={`mt-6 ${H3}`}>Caregiver support portal</p>
                            <p className="mt-2 text-lg leading-[1.6] text-[#45423E]">
                                Real-time updates, alerts and reports, so caregivers can help in time and check on their loved one remotely.
                            </p>
                        </li>
                        <li className={CARD}>
                            <HeartPulse className="h-7 w-7" style={{ color: LOOMA_BLUE }} strokeWidth={1.8} aria-hidden="true" />
                            <p className={`mt-6 ${H3}`}>Health tracking</p>
                            <p className="mt-2 text-lg leading-[1.6] text-[#45423E]">
                                Connects with Apple Watch and AirPods to track heart rate, movement and sleep, with insights for caregivers.
                            </p>
                        </li>
                    </ul>
                </Section>

                <NextProject
                    slug="porsche"
                    closing={
                        <>
                            Recognize. Remember. <span style={{ color: LOOMA_BLUE }}>Reconnect.</span>
                        </>
                    }
                />
            </CaseStudyMain>

            <Footer />
        </div>
    );
};

export default LoomaCaseStudy;
