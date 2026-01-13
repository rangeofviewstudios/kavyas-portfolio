import AesturaCampaign from '@/pages/AesturaCampaign';

export const metadata = {
    title: "Aestura Campaign - The Essence Edit | Beauty Marketing Case Study",
    description: "Semi-finalist campaign: Launching Aestura Korean skincare in North America through The Essence Edit immersive experience. Strategic marketing and UX design for beauty retail.",
    keywords: [
        "Aestura campaign",
        "beauty marketing",
        "skincare UX",
        "experiential marketing",
        "Korean beauty",
        "retail design",
        "UX case study",
        "brand activation"
    ],
    openGraph: {
        title: "Aestura - The Essence Edit Campaign | Kavya Ray",
        description: "Introducing Aestura skincare to North America through experiential design",
        url: "https://kavyaray.com/case-study/aestura",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aestura: The Essence Edit",
        description: "Semi-finalist campaign for Korean skincare brand launch",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/aestura",
    },
};

export default function AesturaPage() {
    return <AesturaCampaign />;
}
