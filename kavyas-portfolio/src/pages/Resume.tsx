import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";

const resumeData = {
  skills: [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "User Testing",
    "Design Systems",
    "Information Architecture",
  ],
  tools: ["Figma", "Sketch", "Adobe Creative Suite", "Miro", "Notion", "Framer"],
};

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-medium text-foreground">
              Resume
            </h1>
            <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          {/* Skills */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-medium text-foreground mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-medium text-foreground mb-6">Tools</h2>
            <div className="flex flex-wrap gap-3">
              {resumeData.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-card text-foreground rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="card-float p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Let's work together
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm currently open to new opportunities and collaborations.
            </p>
            <a
              href="mailto:hello@kavya.design"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
