import { Geist } from "next/font/google";
import { HomeNav } from "@/components/HomeNav";
import { HeroSection } from "@/components/HeroSection";
import { HomeIntro } from "@/components/HomeIntro";
import { WorkSection } from "@/components/WorkSection";
import { MomentsSection } from "@/components/MomentsSection";
import { Footer } from "@/components/Footer";
import Script from 'next/script';

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

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
            {/* Redesigned homepage (from redesign/index.html): light page, Geist type, its own nav bar */}
            <div className={`${geist.className} min-h-screen bg-[#F1EFEB] text-[15px] leading-[1.5] text-[#161514] antialiased`}>
                <HomeNav />
                <main>
                    <HeroSection />
                    <div className="home-container">
                        <HomeIntro />
                    </div>
                    <WorkSection />
                    {/* Everything after the work band slides up over it on a rounded panel */}
                    <div className="relative z-[2] -mt-8 rounded-t-[32px] bg-[#F1EFEB] pb-24 shadow-[0_-20px_50px_-20px_#0004] max-[900px]:pb-16">
                        <div className="home-container">
                            <MomentsSection />
                        </div>
                    </div>
                </main>
            </div>
            {/* Same footer as the rest of the site; outside the Geist wrapper so it renders identically */}
            <Footer />
        </>
    );
}
