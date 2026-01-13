import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";
import Script from 'next/script';

export const metadata = {
    title: "Kavya Ray | UX Designer Portfolio",
    description: "UX Designer at SCAD specializing in user-centered design, research, and innovative solutions. Featured projects include collaborations with UBS, Porsche, Lowe's, LOOMA, and Aestura.",
    keywords: ["UX Designer", "Product Designer", "SCAD", "SCADpro", "User Research", "UI/UX Portfolio", "Interaction Design"],
};

export default function HomePage() {
    const personStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kavya Ray",
        "url": "https://kavyaray.com",
        "jobTitle": "UX Designer",
        "description": "UX Design student at SCAD, driven to lead with curiosity and create impactful user experiences",
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Savannah College of Art and Design (SCAD)"
        },
        "knowsAbout": ["User Experience Design", "Product Design", "User Research", "Interaction Design", "Design Thinking"],
    };

    const websiteStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kavya Ray Portfolio",
        "url": "https://kavyaray.com",
        "description": "Portfolio showcasing UX design projects and case studies",
        "author": {
            "@type": "Person",
            "name": "Kavya Ray"
        }
    };

    return (
        <>
            <Script
                id="person-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
            />
            <Script
                id="website-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
            />
            <div className="min-h-screen bg-background">
                <Navigation />
                <main>
                    <HeroSection />
                    <WorkSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
