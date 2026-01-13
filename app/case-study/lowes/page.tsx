import LowesCaseStudy from '@/pages/LowesCaseStudy';

export const metadata = {
    title: "Lowe's Garden Center Redesign - UX Case Study",
    description: "SCADpro collaboration with Lowe's: Reimagining the garden center shopping experience through user research, journey mapping, and innovative UX design solutions.",
    keywords: [
        "Lowe's UX design",
        "garden center redesign",
        "retail UX",
        "SCADpro",
        "user research",
        "customer journey",
        "UX case study",
        "retail innovation"
    ],
    openGraph: {
        title: "Lowe's Garden Center Redesign | Kavya Ray",
        description: "Reimagining the garden center experience for Lowe's with SCADpro",
        url: "https://kavyaray.com/case-study/lowes",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lowe's Garden Center Redesign",
        description: "SCADpro collaboration: Transforming the retail garden center experience",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/lowes",
    },
};

export default function LowesPage() {
    return <LowesCaseStudy />;
}
