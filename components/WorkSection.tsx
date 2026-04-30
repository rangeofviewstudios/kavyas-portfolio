'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FilterTab = "all" | "nda";

const projects = [
  {
    id: 1,
    isNda: true,
    cardImage: "/images/ubscard.png",
    alt: "UBS - The Future of Banking",
    href: "/case-study/ubs",
    title: "The Future of Banking",
    description: "We're reimagining banking for Gen Z with intuitive, future-focused solutions. Honoring UBS's legacy, we push creative boundaries and explore AI-driven tools that help users manage their finances with confidence and ease.",
    buttonText: "View Case Study",
    buttonColor: "#333333",
  },
  {
    id: 2,
    isNda: false,
    cardImage: "/images/loomacard.png",
    alt: "LOOMA - Smart Glasses",
    href: "/case-study/looma",
    title: "Startup (LOOMA)",
    description: "Participated in a week-long competition to design a futuristic wearable. Developed smart glasses aimed at supporting Alzheimer's patients through memory retention, facial recognition, and real-time reminders to enhance daily life.",
    buttonText: "View Case Study",
    buttonColor: "#5A4A3C",
  },
  {
    id: 3,
    isNda: true,
    cardImage: "/images/lowescard.png",
    alt: "Lowes - Garden Center Redesign",
    href: "/case-study/lowes",
    title: "Garden Center Redesign",
    description: "UX designer on the Lowe's concept project, where our team is reimagining the garden center experience to better serve a diverse range of customers. We're focused on positioning Lowe's as the premier destination for all gardening needs by creating personalized, inclusive, and engaging user experiences.",
    buttonText: "View Case Study",
    buttonColor: "#003D7A",
    showLowesHeader: true,
  },
  {
    id: 4,
    isNda: false,
    cardImage: "/images/porschecard.png",
    alt: "Porsche - The Future of Electric Vehicles",
    href: "/case-study/porsche",
    title: "The Future of Electric Vehicles",
    description: "Senior UX Lead for the backend team on a Porsche EV concept project, where we're designing a future-facing digital experience for the next generation of drivers. Primarily focused on building systems that are intuitive, flexible, and aligned with Porsche's commitment to innovation.",
    buttonText: "View Case Study",
    buttonColor: "#FFFFFF",
    darkCard: true,
  },
  {
    id: 5,
    isNda: false,
    cardImage: "/images/aesturacard.png",
    alt: "Aestura - The Essence Edit",
    href: "/case-study/aestura",
    title: "The Essence Edit",
    description: "Selected as a Semi-Finalist in the AmorePacific Brand Challenge, where I developed a comprehensive campaign to introduce Aestura skincare products to the North American market. Conducted market research to identify consumer needs and trends, then created a go-to-market strategy with creative ideas for brand positioning, launch channels, and promotional tactics.",
    buttonText: "View Campaign",
    buttonColor: "#6B8DD6",
    extraTopSpacing: true,
  },
];

gsap.registerPlugin(ScrollTrigger);

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const filteredProjects =
    activeFilter === "nda"
      ? projects.filter((p) => p.isNda)
      : projects;

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (cards.length < 2) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        // Scale this card down as the NEXT card scrolls over it
        gsap.to(card, {
          scale: 0.93,
          borderRadius: '20px',
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 90%",
            end: "top 80px",
            scrub: 0.4,
          },
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [filteredProjects]);

  return (
    <section id="work" className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-4 sm:mb-6">
            My Work
          </h2>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${activeFilter === "all"
                ? "bg-foreground text-background"
                : "bg-card text-muted-foreground hover:bg-muted"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("nda")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${activeFilter === "nda"
                ? "bg-foreground text-background"
                : "bg-card text-muted-foreground hover:bg-muted"
                }`}
            >
              NDA Protected
            </button>
          </div>
        </div>

        {/* Projects Grid — GSAP stacking cards */}
        <div className="flex flex-col">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              ref={el => { cardRefs.current[index] = el; }}
              className="rounded-2xl overflow-hidden sticky will-change-transform"
              style={{
                top: '80px',
                zIndex: index + 1,
                marginBottom: 0,
                transformOrigin: 'center top',
              }}
            >
              {project.title ? (
                <div className="relative">
                  <img
                    src={project.cardImage}
                    alt={project.alt}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col">
                    <div className="max-w-[45%]">
                      {/* Lowe's header */}
                      {project.showLowesHeader && (
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <img src="/images/lowes.png" alt="Lowes Logo" className="h-7 sm:h-8 lg:h-9 w-auto" />
                            <span className="h-7 sm:h-8 lg:h-9 w-[2px] bg-[#A8A8A8] inline-block"></span>
                            <span className="text-xl sm:text-2xl lg:text-[26px] font-normal text-[#A8A8A8]">SCADpro</span>
                          </div>
                          <div className="mb-6 lg:mb-8 text-[13px] text-[#8A8A8A] font-normal">
                            NDA Protected
                          </div>
                        </div>
                      )}

                      {/* Spacer */}
                      {!project.showLowesHeader && (
                        <div className={project.extraTopSpacing ? "mt-16 sm:mt-20 md:mt-24 lg:mt-28" : "mt-24 sm:mt-28 md:mt-32 lg:mt-36"} />
                      )}

                      <Link
                        href={project.href}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-[1.5px] rounded-2xl text-sm font-medium no-underline mb-5 sm:mb-6 transition-all group w-fit ${project.darkCard ? "bg-transparent" : "bg-white"}`}
                        style={{
                          borderColor: project.buttonColor,
                          color: project.buttonColor,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = project.buttonColor || "";
                          e.currentTarget.style.color = project.darkCard ? "#2A353B" : "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = project.darkCard ? "transparent" : "white";
                          e.currentTarget.style.color = project.buttonColor || "";
                        }}
                      >
                        {project.buttonText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <h3
                        className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-3 leading-tight"
                        style={{ color: project.darkCard ? "#FFFFFF" : project.showLowesHeader ? "#003D7A" : "#2A2A2A" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-[13px] leading-[1.5]"
                        style={{ color: project.darkCard ? "#B0B0B0" : project.showLowesHeader ? "#003D7A" : "#5A5A5A" }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={project.href} className="block rounded-2xl overflow-hidden">
                  <img
                    src={project.cardImage}
                    alt={project.alt}
                    className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                  />
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* Get To Know Me Section */}
        <div id="about" className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Get To Know Me
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                Hi, I&apos;m Kavya! A sophomore UX designer born and raised in Toronto, Canada. I&apos;m a curious and passionate individual, always striving to make a difference through thoughtful, human-centered design. When I&apos;m not glued to my computer, you&apos;ll find me exploring new places, trying new food, or watching basketball.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
              <div className="rounded-2xl overflow-hidden w-full max-w-[428px]">
                <img
                  src="/images/aboutmekavya.jpg"
                  alt="Kavya Ray"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education and Experience Section */}
        <div className="mt-20 space-y-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">EDUCATION</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <span className="text-white/50 font-medium">01.</span>
                <span className="text-white flex-1 text-right">Savannah College Of Art and Design</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <span className="text-white/50 font-medium">02.</span>
                <span className="text-white flex-1 text-right">Westwood High School</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">EXPERIENCE</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <span className="text-white/50 font-medium">01.</span>
                <span className="text-white flex-1 text-right">SCAD FLUX - Director</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <span className="text-white/50 font-medium">02.</span>
                <span className="text-white flex-1 text-right">UBS x SCADpro - UX Research/ UI Bridge</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <span className="text-white/50 font-medium">03.</span>
                <span className="text-white flex-1 text-right">Porsche x SCADpro - Senior Backend Lead</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                <span className="text-white/50 font-medium">04.</span>
                <span className="text-white flex-1 text-right">Lowes x SCADpro - UX Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-6 sm:mb-8 leading-relaxed">
            Traveler by choice, foodie<br />
            by instinct, dog lover always
          </p>
          <Link
            href="/about"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-lg sm:text-xl rounded-full text-white font-semibold transition-all hover:scale-105 bg-[#343F28]"
          >
            About Me
          </Link>

          {/* Photo Strip */}
          <div className="mt-16 sm:mt-20 relative w-full overflow-hidden md:overflow-visible">
            <div className="flex justify-start md:justify-center items-center overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory md:snap-none">
              <div className="flex items-center pl-20 md:pl-0 h-[300px] md:h-auto">
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[1] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: "40px" }}>
                  <img src="/images/footer/homefooter1.png" alt="Travel moment 1" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" />
                </div>
                <div className="relative bg-white p-2 sm:p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 w-40 sm:w-52 md:w-60 lg:w-[280px] z-[2] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: "10px" }}>
                  <img src="/images/footer/homefooter2.png" alt="Travel moment 2" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" />
                </div>
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[3] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: "-20px" }}>
                  <img src="/images/footer/homefooter3.png" alt="Travel moment 3" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" />
                </div>
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[2] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: "-10px" }}>
                  <img src="/images/footer/homefooter4.png" alt="Travel moment 4" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" />
                </div>
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[1] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: "30px" }}>
                  <img src="/images/footer/homefooter5.png" alt="Travel moment 5" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" />
                </div>
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[0] flex-shrink-0 snap-center pr-20 md:pr-0" style={{ top: "60px" }}>
                  <img src="/images/footer/homefooter6.png" alt="Travel moment 6" className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
