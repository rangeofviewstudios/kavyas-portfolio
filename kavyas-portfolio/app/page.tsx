import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <WorkSection />
            </main>
            <Footer />
        </div>
    );
}
