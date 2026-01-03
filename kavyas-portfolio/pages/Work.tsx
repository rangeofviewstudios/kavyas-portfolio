import { Navigation } from "@/components/Navigation";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
