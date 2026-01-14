'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


type FilterTab = "all" | "nda";

const projects = [
  {
    id: 1,
    company: "UBS",
    partner: "SCADpro",
    isNda: true,
    title: "The Future of Banking",
    description:
      "We're reimagining banking for Gen Z with intuitive, future-focused solutions. Honoring UBS's legacy, we push creative boundaries and explore AI-driven tools that help users manage their finances with confidence and ease.",
    image: '/images/ubscardpic.png',
    logoSrc: '/images/ubslogo.png',
    logoAlt: 'UBS Logo',
    logoClass: 'h-7 w-auto mr-2',
    partnerColor: '#868481',
    cardBg: '#EFEFEF',
  },
  {
    id: 2,
    company: "Porsche",
    partner: "SCAD",
    isNda: false,
    title: "The Future of Electric Vehicles",
    description:
      "Senior UX Lead for the backend team on a Porsche EV concept project, where we’re designing a future-facing digital experience for the next generation of drivers. Primarily focused on building systems that are intuitive, flexible, and aligned with Porsche’s commitment to innovation.",
    image: '/images/porschecardpic.png',
    logoSrc: '/images/porschelogo.png',
    logoAlt: 'Porsche Logo',
    logoClass: 'h-5 w-auto mr-2',
    partnerColor: '#868481',
    cardBg: '#2A353B',
  },
  {
    id: 3,
    company: "Lowe's",
    partner: "SCADpro",
    isNda: true,
    title: "Garden Center Redesign",
    description:
      "UX designer on the Lowe's concept project, where our team is reimagining the garden center experience to better serve a diverse range of customers. We're focused on positioning Lowe's as the premier destination for all gardening needs by creating personalized, inclusive, and engaging user experiences.",
    image: '/images/lowescard.png',
    logoSrc: '/images/lowes.png',
    logoAlt: "Lowe's Logo",
    logoClass: 'h-6 w-auto mr-2',
    partnerColor: '#868481',
    cardBg: '#E8E4DD',
  },
  {
    id: 4,
    company: "Aestura",
    partner: "SCAD",
    isNda: false,
    title: "Innovative Skincare Solutions",
    description:
      "Developing a modern digital experience for Aestura's skincare line, focusing on user-friendly interfaces and personalized product recommendations to enhance customer satisfaction and brand loyalty.",
    image: '/images/aesturacard.png',
    logoSrc: '/images/aesturalogo.png',
    logoAlt: 'Aestura Logo',
    logoClass: 'h-6 w-auto mr-2',
    partnerColor: '#868481',
    cardBg: 'transparent',
  },
  {
    id: 5,
    company: "Startupa",
    partner: "SCAD",
    isNda: false,
    title: "Startup (LOOMA)",
    description:
      "Participated in a week-long competition to design a futuristic wearable. Developed smart glasses aimed at supporting Alzheimer's patients through memory retention, facial recognition, and real-time reminders to enhance daily life.",
    image: '/images/startupcard.png',
    logoSrc: '/images/looma/startuplogo.png',
    logoAlt: 'Startupa Logo',
    logoClass: 'h-6 w-auto mr-2',
    partnerColor: '#868481',
    cardBg: 'transparent',
  },
];

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filteredProjects =
    activeFilter === "nda"
      ? projects.filter((p) => p.isNda)
      : projects;

  return (
    <section id="work" className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 animate-fade-in-up">
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

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="card-float animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Aestura Card with Layered Images */}
              {project.company === 'Aestura' ? (
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#EBF1F3] min-h-[400px] sm:min-h-[450px] md:min-h-[494px] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">

                  {/* Flex container - stack on mobile, side-by-sideon desktop */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 h-full">

                    {/* Left side - Text content */}
                    <div className="w-full lg:w-[45%] z-10 flex flex-col justify-center items-start">
                      {/* AESTURA Logo */}
                      <img
                        src="/images/aesturalogosvg.svg"
                        alt="Aestura Logo"
                        className="h-8 sm:h-10 md:h-12 mb-6 sm:mb-8 md:mb-10"
                      />

                      {/* View Campaign Button */}
                      <Link
                        href="/case-study/aestura"
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-[1.5px] border-[#6B8DD6] rounded-2xl bg-white text-[#6B8DD6] text-sm font-medium no-underline mb-6 sm:mb-8 transition-all group hover:bg-blue-600 hover:text-white hover:border-blue-600 w-fit"
                      >
                        View Campaign
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#2A2A2A] mb-3 sm:mb-4 leading-tight">
                        The Essence Edit
                      </h3>

                      {/* Description */}
                      <p className="text-[#5A5A5A]" style={{ fontWeight: 600, fontSize: '14px', lineHeight: '140%', letterSpacing: '0%' }}>
                        Selected as a Semi-Finalist in the AmorePacific Brand Challenge, where I developed a comprehensive campaign to introduce Aestura skincare products to the North American market. Conducted market research to identify consumer needs and trends, then created a go-to-market strategy with creative ideas for brand positioning, launch channels, and promotional tactics.
                      </p>
                    </div>

                    {/* Right side - Layered Images */}
                    <div className="relative w-full lg:w-[55%] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[460px] flex items-center justify-center lg:justify-end">
                      {/* Water Bubble Background */}
                      <img
                        src="/images/aesturawaterbub.png"
                        alt="Water Bubble"
                        className="absolute w-full h-full object-contain z-[1]"
                      />

                      {/* Product Image */}
                      <img
                        src="/images/aesturacardproduct.png"
                        alt="Aestura Product"
                        className="absolute w-full h-full object-contain z-[2]"
                      />
                    </div>
                  </div>
                </div>
              ) : project.company === 'Startupa' ? (
                <div
                  className="rounded-2xl overflow-hidden relative flex flex-col lg:flex-row"
                  style={{
                    backgroundColor: '#DBD1C5',
                    minHeight: '494px',
                  }}
                >
                  {/* Content Container */}
                  <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between relative z-10">
                    {/* START UP Logo */}
                    <div className="mb-8 lg:mb-0">
                      <img
                        src="/images/startuplogosvg.svg"
                        alt="START UP Logo"
                        className="h-32 sm:h-40 lg:h-[200px] w-auto"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-full lg:max-w-md mt-auto">
                      {/* CTA Button */}
                      <Link
                        href="/case-study/looma"
                        className="inline-flex items-center justify-center gap-2 px-6 py-[11px] rounded-[20px] border-[1.5px] border-[#5A4A3C] bg-white text-[#5A4A3C] font-medium text-sm no-underline mb-6 transition-all duration-300 group hover:bg-gray-800 hover:text-white hover:border-gray-800"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-[26px] font-bold text-[#3D3530] leading-[1.3] mb-3.5 tracking-[-0.01em]">
                        Startup (LOOMA)
                      </h3>

                      {/* Description */}
                      <p className="text-[#5A4A3C]" style={{ fontWeight: 600, fontSize: '14px', lineHeight: '140%', letterSpacing: '0%' }}>
                        Participated in a week-long competition to design a futuristic wearable. Developed smart glasses aimed at supporting Alzheimer's patients through memory retention, facial recognition, and real-time reminders to enhance daily life.
                      </p>
                    </div>
                  </div>

                  {/* Glasses Image */}
                  <div className="h-64 sm:h-80 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-full lg:w-[60%] flex items-center justify-center lg:justify-end overflow-hidden">
                    <img
                      src="/images/loomaglasses.png"
                      alt="LOOMA Smart Glasses"
                      className="w-auto h-full max-h-[85%] object-contain object-center lg:object-right"
                    />
                  </div>
                </div>
              ) : project.company === "Lowe's" ? (
                <div
                  className="rounded-2xl overflow-hidden bg-[#EBE8E1] min-h-[494px] p-6 sm:p-8 md:p-12 lg:p-14"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 h-full">
                    {/* Left side - Text Content */}
                    <div className="flex-1 w-full lg:max-w-[45%]">
                      {/* Company Logos */}
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={project.logoSrc}
                          alt={project.logoAlt}
                          className="h-8 lg:h-9 w-auto"
                        />
                        <span className="h-8 lg:h-9 w-[2px] bg-[#A8A8A8] inline-block"></span>
                        <span className="text-2xl lg:text-[26px] font-normal text-[#A8A8A8] tracking-[-0.01em]">SCADpro</span>
                      </div>

                      {/* NDA Badge */}
                      {project.isNda && (
                        <div className="mb-8 lg:mb-10 text-[13px] text-[#8A8A8A] font-normal">
                          NDA Protected
                        </div>
                      )}

                      {/* CTA Button */}
                      <Link
                        href="/case-study/lowes"
                        className="inline-flex items-center justify-center gap-2 px-6 py-[11px] rounded-[20px] border-[1.5px] border-[#003D7A] bg-white text-[#003D7A] font-medium text-sm no-underline mb-6 transition-all duration-300 group hover:bg-blue-900 hover:text-white"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-[30px] font-bold text-[#003D7A] leading-[1.25] mb-3.5 tracking-[-0.02em]">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#003D7A]" style={{ fontWeight: 600, fontSize: '14px', lineHeight: '140%', letterSpacing: '0%' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex-shrink-0 w-full lg:w-auto flex justify-center mt-8 lg:mt-0">
                      <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[450px]">
                        <img
                          src="/images/loweshouse.png"
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-2xl overflow-hidden min-h-[450px] p-6 sm:p-8 md:p-12 relative flex flex-col justify-center"
                  style={{
                    backgroundColor: project.cardBg,
                  }}
                >
                  {/* Main Flex Container: Stack on mobile, Side-by-side on Desktop */}
                  <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full relative z-10">

                    {/* LEFT SIDE: TEXT - Set to 50% width */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={project.logoSrc}
                          alt={project.logoAlt}
                          className={project.logoClass || "h-8 w-auto"}
                        />
                        <span className="h-7 w-[2px] inline-block" style={{ backgroundColor: project.partnerColor || '#ccc' }}></span>
                        <span className="text-xl sm:text-2xl font-normal" style={{ color: project.partnerColor || '#868481' }}>
                          {project.partner}
                        </span>
                      </div>

                      {project.isNda && (
                        <div className="mb-6 lg:mb-8 text-sm font-normal text-gray-500">
                          NDA Protected
                        </div>
                      )}

                      <Link
                        href={`/case-study/${project.company.toLowerCase()}`}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-[1.5px] font-medium text-sm transition-all duration-300 group w-fit mb-6 ${project.company === 'Porsche'
                            ? 'border-white bg-white text-black hover:bg-black hover:text-white hover:border-white'
                            : 'border-black bg-white text-black hover:bg-black hover:text-white'
                          }`}
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${project.company === 'Porsche' ? 'text-white' : 'text-black'}`}>
                        {project.title}
                      </h3>

                      <p className={`${project.company === 'Porsche' ? 'text-white' : 'text-gray-700'}`} style={{ fontWeight: 600, fontSize: '14px', lineHeight: '140%', letterSpacing: '0%' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* RIGHT SIDE: IMAGE - Set to 50% width */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end h-full">
                      <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full max-h-[400px] rounded-xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>



        {/* Get To Know Me Section */}
        <div id="about" className="mt-20 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Get To Know Me
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                Hi, I'm Kavya! A sophomore UX designer born and raised in Toronto, Canada. I'm a curious and passionate individual, always striving to make a difference through thoughtful, human-centered design. When I'm not glued to my computer, you'll find me exploring new places, trying new food, or watching basketball.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
              <div className="rounded-2xl overflow-hidden w-full max-w-[428px] aspect-[428/404]">
                <img
                  src="/images/gettoknowmekavya.png"
                  alt="Toronto Skyline"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education and Experience Section */}
        <div className="mt-20 space-y-16">
          {/* Education */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">EDUCATION</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <span className="text-muted-foreground font-medium">01.</span>
                <span className="text-muted-foreground flex-1 text-right">Savannah College Of Art and Design</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <span className="text-muted-foreground font-medium">02.</span>
                <span className="text-muted-foreground flex-1 text-right">Westwood High School</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-semibold text-foreground mb-8">EXPERIENCE</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <span className="text-muted-foreground font-medium">01.</span>
                <span className="text-muted-foreground flex-1 text-right">SCAD FLUX - Director</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <span className="text-muted-foreground font-medium">02.</span>
                <span className="text-muted-foreground flex-1 text-right">UBS x SCADpro - UX Research/ UI Bridge</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <span className="text-muted-foreground font-medium">03.</span>
                <span className="text-muted-foreground flex-1 text-right">Porsche x SCADpro - Senior Backend Lead</span>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <span className="text-muted-foreground font-medium">04.</span>
                <span className="text-muted-foreground flex-1 text-right">Lowes x SCADpro - UX Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center animate-fade-in-up">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-6 sm:mb-8 leading-relaxed">
            Traveler by choice, foodie<br />
            by instinct, dog lover always
          </p>
          <Link
            href="/about"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-lg sm:text-xl rounded-full text-white font-semibold transition-all hover:scale-105 bg-[#2E6B5F]"
          >
            About Me
          </Link>

          {/* Photo Strip */}
          <div className="mt-16 sm:mt-20 relative w-full overflow-hidden md:overflow-visible">
            <div className="flex justify-start md:justify-center items-center overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory md:snap-none">
              <div className="flex items-center pl-20 md:pl-0 h-[300px] md:h-auto">
                {/* Photo 1 */}
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[1] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: '40px' }}>
                  <img
                    src="/images/footer/homefooter1.png"
                    alt="Travel moment 1"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                  />
                </div>

                {/* Photo 2 */}
                <div className="relative bg-white p-2 sm:p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 w-40 sm:w-52 md:w-60 lg:w-[280px] z-[2] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: '10px' }}>
                  <img
                    src="/images/footer/homefooter2.png"
                    alt="Travel moment 2"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                  />
                </div>

                {/* Photo 3 */}
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[3] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: '-20px' }}>
                  <img
                    src="/images/footer/homefooter3.png"
                    alt="Travel moment 3"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                  />
                </div>

                {/* Photo 4 */}
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[2] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: '-10px' }}>
                  <img
                    src="/images/footer/homefooter4.png"
                    alt="Travel moment 4"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                  />
                </div>

                {/* Photo 5 */}
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[1] flex-shrink-0 snap-center -mr-8 md:-mr-12" style={{ top: '30px' }}>
                  <img
                    src="/images/footer/homefooter5.png"
                    alt="Travel moment 5"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                  />
                </div>

                {/* Photo 6 */}
                <div className="bg-white p-2 sm:p-3 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 relative w-40 sm:w-52 md:w-60 lg:w-[280px] z-[0] flex-shrink-0 snap-center pr-20 md:pr-0" style={{ top: '60px' }}>
                  <img
                    src="/images/footer/homefooter6.png"
                    alt="Travel moment 6"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
