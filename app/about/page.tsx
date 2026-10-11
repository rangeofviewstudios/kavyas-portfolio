import AboutMe from '@/pages/AboutMe';

export const metadata = {
    title: "About Kavya Ray - UX Designer & Researcher",
    description: "Learn about Kavya Ray, a UX designer at SCAD passionate about user-centered design, research, and creating meaningful digital experiences. View her education and design achievements.",
    keywords: [
        "Kavya Ray",
        "UX designer bio",
        "SCAD designer",
        "design background",
        "UX experience",
        "design education",
        "portfolio about"
    ],
    openGraph: {
        title: "About Kavya Ray | UX Designer",
        description: "UX designer passionate about user-centered design and research",
        url: "https://kavyaray.com/about",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Kavya Ray",
        description: "UX Designer at SCAD specializing in user-centered design",
    },
    alternates: {
        canonical: "https://kavyaray.com/about",
    },
};

export default function AboutPage() {
    return <AboutMe />;
}
