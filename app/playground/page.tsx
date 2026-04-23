import Playground from '@/pages/Playground';

export const metadata = {
    title: "Playground - Kavya Ray",
    description: "Off the record: Toronto, the Raptors, dog walks, olive green, and too much kimchi. A side of Kavya outside the case studies.",
    keywords: [
        "Kavya Ray",
        "Kavya Ray playground",
        "personal",
        "about Kavya",
        "Toronto designer",
        "UX designer personality",
    ],
    openGraph: {
        title: "Playground | Kavya Ray",
        description: "Toronto, the Raptors, dogs, olive green, kimchi — the rest of the story.",
        url: "https://kavyaray.com/playground",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Playground | Kavya Ray",
        description: "A side of Kavya outside the case studies.",
    },
    alternates: {
        canonical: "https://kavyaray.com/playground",
    },
};

export default function PlaygroundPage() {
    return <Playground />;
}
