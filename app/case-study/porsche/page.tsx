import PorschePage from '@/pages/PorschePage';

export const metadata = {
    title: "Porsche EV Case Study - Future of Electric Vehicle Experience",
    description: "SCADpro collaboration with Porsche: Designing next-generation digital cockpit experiences for electric vehicles through innovative UX research and autonomous driving interfaces.",
    keywords: [
        "Porsche UX design",
        "electric vehicle interface",
        "automotive UX",
        "digital cockpit design",
        "SCADpro",
        "EV design",
        "UX case study",
        "autonomous driving"
    ],
    openGraph: {
        title: "Porsche - Future of Electric Vehicles | Kavya Ray",
        description: "Designing digital experiences for next-generation Porsche EVs",
        url: "https://kavyaray.com/case-study/porsche",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Porsche EV Experience Design",
        description: "SCADpro: Reimagining the digital cockpit for electric Porsche",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/porsche",
    },
};

export default function PorschePageRoute() {
    return <PorschePage />;
}
