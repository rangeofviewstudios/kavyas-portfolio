import RovCaseStudy from '@/pages/RovCaseStudy';

export const metadata = {
    title: "Range of View Studios - Brand & Visual Identity",
    description: "How a rough, passionate Atlanta music collective became a creative studio: the brand identity, color system, gradients, typography, and UI components Kavya Ray designed for Range of View Studios.",
    keywords: [
        "Range of View Studios",
        "brand identity",
        "visual identity",
        "color palette",
        "design system",
        "Atlanta creative studio",
        "case study"
    ],
    openGraph: {
        title: "Range of View Studios - Brand & Visual Identity | Kavya Ray",
        description: "It started at a bakery table. It became a studio.",
        url: "https://kavyaray.com/case-study/rov",
        type: "article",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/rov",
    },
};

export default function RovPage() {
    return <RovCaseStudy />;
}
