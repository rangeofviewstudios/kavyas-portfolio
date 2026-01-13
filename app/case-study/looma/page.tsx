import LoomaPage from '@/pages/LoomaPage';

export const metadata = {
    title: "LOOMA Case Study - Smart AR Glasses for Alzheimer's Patients",
    description: "UX design case study: Creating LOOMA smart AR glasses to support Alzheimer's patients with facial recognition, spatial awareness, and voice guidance. Startup competition winner.",
    keywords: [
        "LOOMA smart glasses",
        "AR glasses Alzheimer's",
        "assistive technology UX",
        "healthcare design",
        "startup competition",
        "UX case study",
        "accessibility design",
        "SCAD project"
    ],
    openGraph: {
        title: "LOOMA - Smart Glasses for Alzheimer's Patients | Kavya Ray",
        description: "Designing smart AR glasses to support Alzheimer's patients with facial recognition and spatial awareness.",
        url: "https://kavyaray.com/case-study/looma",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "LOOMA - Smart Glasses for Alzheimer's",
        description: "UX design case study for assistive AR technology",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/looma",
    },
};

export default function LoomaPageRoute() {
    return <LoomaPage />;
}
