import FifaCaseStudy from '@/components/case-study/FifaCaseStudy';

export const metadata = {
    title: "FIFA World Cup 26 Atlanta - Last Mile Wayfinding Case Study",
    description: "Designing a safe, engaging, FIFA-compliant Last Mile framework for Atlanta: wayfinding strategy, crowd movement research, and the route from the Fan Festival to the stadium.",
    keywords: [
        "FIFA World Cup 26",
        "Atlanta",
        "wayfinding",
        "crowd movement",
        "UX design",
        "event design",
        "case study"
    ],
    openGraph: {
        title: "FIFA World Cup 26: The Atlanta Last Mile | Kavya Ray",
        description: "Which way do I go? Wayfinding for 300,000 World Cup spectators in Atlanta.",
        url: "https://kavyaray.com/case-study/fifa",
        type: "article",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/fifa",
    },
};

export default function FifaPage() {
    return <FifaCaseStudy />;
}
