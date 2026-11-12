import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ImageTabs, type TabItem } from "./ImageTabs";
import {
    BarList,
    CaseStudyMain,
    Figure,
    FindingCard,
    Highlight,
    ImageBand,
    NextProject,
    Overview,
    PhotoCard,
    PhotoStat,
    Section,
    Stat,
    SubHeading,
} from "./CaseStudyKit";

const PORSCHE_RED = "#D5001C";

const P = "/images/porsche";
const phone = (n: string, alt: string) => ({ src: `${P}/${n}.png`, alt, w: 351, h: 712 });

/* The app flow, step by step (from the original "Why the Porsche App?" section) */
const APP_FLOW: TabItem[] = [
    {
        id: "home",
        label: "1 · Home",
        images: [phone("porschephone1", "Porsche app home screen with the car, battery level and quick controls"), { src: `${P}/porschephonemockup.png`, alt: "A hand holding a phone with the Porsche app", w: 620, h: 835 }],
    },
    {
        id: "search",
        label: "2 · Search destination",
        images: [phone("porschephone2", "Destination search with recent places and a keyboard"), phone("porschephone3", "Route to Lake Lanier Park on a map")],
    },
    {
        id: "route",
        label: "3 · Route overview",
        body: "The fastest route is pre-selected.",
        images: [phone("porschephone3", "Route overview with distance, time, charge and a suggested charging stop"), phone("porschephone5", "Live map of the route with the next turn")],
    },
    {
        id: "send",
        label: "4 · Send to vehicle",
        images: [phone("porschephone4", "Confirmation that the route was sent to the vehicle"), phone("porschephone5", "Live trip map after sending the route")],
    },
    {
        id: "trip",
        label: "5 · Live trip card",
        images: [phone("porschephone5", "Live trip card with arrival time and the next charging stop"), phone("porschephone6", "Home screen showing the car charging")],
    },
    {
        id: "charge",
        label: "6 · Charging overview",
        images: [phone("porschephone6", "Charging status on the app home screen"), phone("porschephone7", "Lock screen with a live charging widget")],
    },
];

/* Three dashboard directions (screen explorations) */
const SCREENS: TabItem[] = [
    {
        id: "techluxe",
        label: "Tech-Luxe Minimalism",
        title: "Tech-Luxe Minimalism",
        body: "Refine what exists: ultra-clean design, tactile interactions and understated innovation.",
        images: [{ src: `${P}/screen1.png`, alt: "Tech-Luxe Minimalism dashboard with navigation, charging and media cards", w: 1180, h: 479 }],
    },
    {
        id: "heritage",
        label: "Heritage-Luxe Classic",
        title: "Heritage-Luxe Classic",
        body: "The warmth and class of vintage Porsche interiors, refined for today: elegance, comfort and analog nods.",
        images: [{ src: `${P}/screen2.png`, alt: "Heritage-Luxe Classic dashboard with a dark map, music and calendar", w: 1181, h: 480 }],
    },
    {
        id: "tactical",
        label: "Tactical Heritage",
        title: "Tactical Heritage",
        body: "A rugged UI for unpredictable terrain: endurance, modularity and quick-access functions.",
        images: [{ src: `${P}/screen3.png`, alt: "Tactical Heritage dashboard with a compass, battery temperature and elevation", w: 1182, h: 528 }],
    },
];

const BENCHMARK = [
    { name: "Lucid", src: "porschelucidimage", alt: "Lucid interior with a wide curved driver display" },
    { name: "Mercedes", src: "porschemercedesimage", alt: "Mercedes interior with a full-width screen" },
    { name: "Audi", src: "porscheaudiimage", alt: "Audi interior with a wide dashboard display" },
    { name: "Tesla", src: "porscheteslaimage", alt: "Tesla interior with a single central touchscreen" },
];

const SKETCHES = [
    { n: 1, w: 614, h: 409, alt: "Line sketch of a cockpit with the steering wheel and dashboard" },
    { n: 2, w: 620, h: 446, alt: "Line sketch of the full interior seen from above" },
    { n: 3, w: 334, h: 273, alt: "Line sketch of the car from the front" },
    { n: 5, w: 347, h: 273, alt: "Line sketch of the car from the rear" },
    { n: 4, w: 451, h: 150, alt: "Line sketch of the car in side profile" },
];

/*
  Porsche case study, on the shared case study kit (CaseStudyKit).
  00 Overview · 01 Challenge · 02 Research · 03 Design process · 04 Design · 05 Impact · next.
*/
const PorscheCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />
            <CaseStudyMain>
                {/* 00 Overview */}
                <Overview
                    tags={["Automotive", "HMI", "Mobile App"]}
                    title="Designing the in-car experience for Porsche’s next EV drivers"
                    facts={[
                        { label: "Role", value: "Senior Backend Lead" },
                        { label: "Team", value: "28 people" },
                        { label: "Timeline", value: "10 weeks" },
                        { label: "Client", value: "Porsche × SCADpro" },
                        { label: "Methods", value: "Surveys, interviews, benchmarking, secondary research" },
                    ]}
                    image={{
                        src: "/images/porschecard.jpg",
                        alt: "Porsche EV cockpit concept with the driver display, navigation and energy screens",
                    }}
                    summary={[
                        {
                            label: "Problem",
                            text: "Porsche’s next EV drivers want smart, connected cars, but 71% fear tech will interfere with the purity of driving.",
                        },
                        {
                            label: "What I did",
                            text: "As Senior Backend Lead, drove the systems, wireframes and mobile app foundation, making sure every decision had a clear user rationale.",
                        },
                        {
                            label: "Impact",
                            text: "Presented our EV experience at Porsche’s headquarters.",
                        },
                    ]}
                    news={{
                        kicker: "Porsche × SCAD · Porsche HQ",
                        title: "Presented at Porsche headquarters.",
                        text: "Our in-car and app experience for Porsche’s next EV drivers.",
                        cta: "See the visit ↓",
                        href: "#impact",
                    }}
                />

                {/* 01 The Challenge */}
                <Section
                    id="challenge"
                    n={1}
                    label="The challenge"
                    title="Design for an EV future that’s still taking shape"
                    intro="Balance digital natives and long-time loyalists, with an experience that is flexible and unmistakably Porsche."
                    takeaway="Three audiences, one brand: the experience had to flex without losing what makes it a Porsche."
                >
                    <ImageBand
                        src={`${P}/porsche2.png`}
                        alt="A Porsche 911 driving a wet mountain road between rock walls"
                        label="How might we"
                        title="What will matter most to drivers joining the electric transition?"
                        text="Over the next five years, for first-time buyers, Porsche owners exploring EVs, and EV owners alike."
                        position="50% 60%"
                    />
                    <div>
                        <SubHeading>Three audiences</SubHeading>
                        <ol className="mt-6 grid gap-6 md:grid-cols-3">
                            <li>
                                <PhotoCard src={`${P}/porschehero3.png`} alt="A silver Porsche driving along a coast road" label="Primary" title="First-time Porsche buyers" />
                            </li>
                            <li>
                                <PhotoCard src={`${P}/porschemission1.png`} alt="A red Porsche Taycan on a mountain road" label="Secondary" title="Porsche owners exploring EVs" position="50% 60%" />
                            </li>
                            <li>
                                <PhotoCard src={`${P}/porchehero1.png`} alt="A grey Porsche EV parked in front of a city skyline at dusk" label="Tertiary" title="General EV owners" />
                            </li>
                        </ol>
                    </div>
                </Section>

                {/* 02 Research */}
                <Section
                    id="research"
                    n={2}
                    label="Research"
                    title="Understanding the Porsche EV driver"
                    intro="We surveyed and interviewed drivers, benchmarked four EV brands, and read up on HMI and EV research."
                    takeaway="Drivers want smart, but not at the cost of feel. The tech has to stay out of the way of driving."
                >
                    <div className="grid gap-6 md:grid-cols-3">
                        <PhotoStat src={`${P}/porschecircleimage.png`} alt="A Porsche EV parked in a dark garage" value="160+" label="Survey responses" />
                        <PhotoStat src={`${P}/porschecircleimage2.png`} alt="A Porsche beside wind turbines at sunset" value="30+" label="Interviews" />
                        <PhotoStat src={`${P}/porschelucidimage.png`} alt="A competitor EV interior" value="4" label="Brands benchmarked" />
                    </div>

                    <div>
                        <SubHeading>Secondary research</SubHeading>
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {["HMI reports", "Sensory experiences in EVs", "Range anxiety mitigation studies", "Best display configurations"].map((t) => (
                                <li key={t} className="rounded-full border border-[#E1E6DB] px-4 py-2 text-lg text-[#161514]">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <SubHeading>Benchmarking: Lucid, Mercedes, Audi, Tesla</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">
                            We reviewed each brand’s digital experience, brand strategy and customer engagement, to see where each excels and where
                            Porsche can stand apart.
                        </p>
                        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                            {BENCHMARK.map((b) => (
                                <li key={b.name}>
                                    <Figure src={`${P}/${b.src}.png`} alt={b.alt} w={586} h={225} aspect="586/225" caption={b.name} sizes="(max-width: 640px) 100vw, 750px" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <SubHeading>What we learned</SubHeading>
                        <div className="mt-6 space-y-6">
                            <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                                <Figure src={`${P}/porschestatsimage.png`} alt="A classic white Porsche Speedster beside a modern red 911 on a racetrack" w={558} h={369} aspect="16/10" />
                                <BarList
                                    title="The delicate balance: Porsche’s soul, electrified"
                                    color={PORSCHE_RED}
                                    max={100}
                                    rows={[
                                        { label: "Want “smart & connected”", value: 62, display: "62%" },
                                        { label: "Fear tech will interfere with the purity of driving", value: 71, display: "71%" },
                                    ]}
                                />
                            </div>
                            <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                                <Figure src={`${P}/porschestatsimage2.png`} alt="A Porsche interior with physical controls below the touchscreens" w={602} h={353} aspect="16/10" />
                                <BarList
                                    title="Why “feel” matters: controls and cabin ambience"
                                    color={PORSCHE_RED}
                                    max={100}
                                    rows={[
                                        { label: "Prefer a mix of physical and digital controls", value: 62, display: "62%" },
                                        { label: "Feel distracted by full-touch UIs", value: 71, display: "71%" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <SubHeading>What we found</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            <FindingCard
                                n={1}
                                headline="Smart, but not at driving’s expense."
                                evidence="62% want “smart & connected”, yet 71% fear tech will interfere with the purity of driving."
                                designed="Tech-Luxe Minimalism: ultra-clean screens, understated innovation."
                            />
                            <FindingCard
                                n={2}
                                headline="Full-touch feels distracting."
                                evidence="71% feel distracted by full-touch UIs; 62% prefer a mix of physical and digital controls."
                                designed="Tactile interactions and quick-access functions."
                            />
                            <FindingCard
                                n={3}
                                headline="Drivers expect instant response."
                                evidence="Porsche drivers want systems that adapt instantly and reinforce control and performance."
                                designed="An app that sends the fastest route straight to the car."
                            />
                        </div>
                    </div>

                    <ImageBand
                        src={`${P}/porschedrivers.png`}
                        alt="A dark Porsche 911 on an open desert road at dusk"
                        label="What Porsche drivers expect"
                        title="Systems that adapt instantly"
                        text="And reinforce control, performance and presence behind the wheel."
                    />
                </Section>

                {/* 03 Design process */}
                <Section
                    id="process"
                    n={3}
                    label="Design process"
                    title="From sketches to the app flow"
                    intro="We started on paper with the cockpit and the car, then mapped how the Porsche app hands a trip to the vehicle."
                    takeaway="Plan on the phone, send it to the car, follow the charge: one flow across the EV ecosystem."
                >
                    <div>
                        <SubHeading>Sketches</SubHeading>
                        <div className="mt-6 grid gap-6 md:grid-cols-6">
                            {SKETCHES.map((s, i) => (
                                <Figure
                                    key={s.n}
                                    src={`${P}/porschesketch${s.n}.png`}
                                    alt={s.alt}
                                    w={s.w}
                                    h={s.h}
                                    aspect={i < 2 ? "3/2" : "4/3"}
                                    contain
                                    bg="#FFFFFF"
                                    className={`rounded-2xl border border-[#E1E6DB] ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
                                    sizes="(max-width: 900px) 100vw, 750px"
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SubHeading>Why the Porsche app? Elevating the EV ecosystem</SubHeading>
                        <p className="mt-2 max-w-[72ch] text-lg leading-[1.6] text-[#45423E]">Plan a trip on the phone, send it to the car, and follow the charge.</p>
                        <div className="mt-6">
                            <ImageTabs label="App flow" items={APP_FLOW} aspect="16/9" mobileAspect="1/1" bg="#1A1D24" pad />
                        </div>
                    </div>
                </Section>

                {/* 04 The Design */}
                <Section
                    id="design"
                    n={4}
                    label="The design"
                    title="Three directions for the dashboard"
                    intro="Where the experience meets the dashboard: three directions, each balancing tech and heritage differently."
                >
                    <ImageTabs label="Dashboard directions" items={SCREENS} aspect="1180/500" bg="#0E0F12" contain />
                </Section>

                {/* 05 Impact */}
                <Section
                    id="impact"
                    n={5}
                    label="Impact"
                    title="Presented at Porsche headquarters"
                    intro="We took our EV experience to Porsche’s headquarters."
                >
                    <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
                        <Figure
                            src="/images/moments/porsche-hq.jpg"
                            alt="Testing a Porsche car configurator on a large touchscreen at Porsche headquarters"
                            w={952}
                            h={1270}
                            aspect="4/5"
                            position="50% 55%"
                            caption="At Porsche headquarters."
                        />
                        <div className="flex flex-col justify-between gap-10 pb-8 max-md:pb-0">
                            <Highlight
                                kicker="Porsche × SCAD · Porsche HQ"
                                title="Presented our EV experience at Porsche’s headquarters."
                                text="Backed by 160+ survey responses and 30+ driver interviews."
                            />
                            <div className="grid gap-6 sm:grid-cols-3">
                                <Stat value="160+" label="survey responses" color={PORSCHE_RED} />
                                <Stat value="30+" label="driver interviews" color={PORSCHE_RED} />
                                <Stat value="4" label="brands benchmarked" color={PORSCHE_RED} />
                            </div>
                        </div>
                    </div>
                </Section>

                <NextProject
                    slug="fifa"
                    closing={
                        <>
                            Porsche’s soul, <span style={{ color: PORSCHE_RED }}>electrified.</span>
                        </>
                    }
                />
            </CaseStudyMain>

            <Footer />
        </div>
    );
};

export default PorscheCaseStudy;
