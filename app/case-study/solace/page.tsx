import SolaceCaseStudy from '@/components/case-study/SolaceCaseStudy';

export const metadata = {
    title: "Solace - A Connected System of Record for Refugee Support",
    description: "Solace is a scanner, an ID card, a caseworker app, and a case management platform that give each refugee one record that travels with them. A service and product design case study.",
    keywords: [
        "Solace",
        "refugee support",
        "case management",
        "digital identity",
        "service design",
        "humanitarian technology",
        "case study"
    ],
    openGraph: {
        title: "Solace - Build a system that doesn't forget people | Kavya Ray",
        description: "One record that travels with the person, not the organization.",
        url: "https://kavyaray.com/case-study/solace",
        type: "article",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/solace",
    },
};

export default function SolacePage() {
    return <SolaceCaseStudy />;
}
