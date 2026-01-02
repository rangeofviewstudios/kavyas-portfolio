import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projectUbs from "@/assets/project-ubs.jpg";


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
    <section id="work" className="pt-8 pb-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            My Work
          </h2>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeFilter === "all"
                ? "bg-foreground text-background"
                : "bg-card text-muted-foreground hover:bg-muted"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("nda")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeFilter === "nda"
                ? "bg-foreground text-background"
                : "bg-card text-muted-foreground hover:bg-muted"
                }`}
            >
              NDA Protected
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
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
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#EBF1F3',
                    minHeight: '494px',
                    height: '494px',
                    padding: '48px 56px'
                  }}
                >
                  {/* Left side - Text content */}
                  <div style={{
                    position: 'absolute',
                    left: '56px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    maxWidth: '45%',
                    zIndex: 10
                  }}>
                    {/* AESTURA Logo */}
                    <img
                      src="/images/aesturalogosvg.svg"
                      alt="Aestura Logo"
                      style={{
                        height: '48px',
                        width: 'auto',
                        marginBottom: '40px',
                        display: 'block'
                      }}
                    />

                    {/* View Campaign Button */}
                    <Link
                      to="/case-study/aestura"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '11px 26px',
                        border: '1.5px solid #6B8DD6',
                        borderRadius: '20px',
                        background: 'transparent',
                        color: '#6B8DD6',
                        fontSize: '14px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        marginBottom: '32px',
                        transition: 'all 0.3s ease'
                      }}
                      className="group hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      View Campaign
                      <ArrowRight style={{ width: '16px', height: '16px' }} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#2A2A2A',
                      marginBottom: '14px',
                      lineHeight: '1.2',
                      letterSpacing: '-0.01em'
                    }}>
                      The Essence Edit
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '12px',
                      lineHeight: '1.7',
                      color: '#5A5A5A'
                    }}>
                      Selected as a Semi-Finalist in the AmorePacific Brand Challenge, where I developed a comprehensive campaign to introduce Aestura skincare products to the North American market. Conducted market research to identify consumer needs and trends, then created a go-to-market strategy with creative ideas for brand positioning, launch channels, and promotional tactics.
                    </p>
                  </div>

                  {/* Right side - Layered Images */}
                  <div style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '560px',
                    height: '560px'
                  }}>
                    {/* Water Bubble Background */}
                    <img
                      src="/images/aesturawaterbub.png"
                      alt="Water Bubble"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: 1
                      }}
                    />

                    {/* Product Image */}
                    <img
                      src="/images/aesturacardproduct.png"
                      alt="Aestura Product"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: 2
                      }}
                    />
                  </div>
                </div>
              ) : project.company === 'Startupa' ? (
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#DBD1C5',
                    minHeight: '494px',
                    height: '494px',
                    position: 'relative',
                    padding: 0
                  }}
                >
                  {/* START UP Logo - Top Left */}
                  <div style={{ position: 'absolute', top: '48px', left: '56px', zIndex: 10 }}>
                    <img
                      src="/images/startuplogosvg.svg"
                      alt="START UP Logo"
                      style={{ height: '200px', width: 'auto' }}
                    />
                  </div>

                  {/* Content - Bottom Left */}
                  <div style={{ position: 'absolute', bottom: '48px', left: '56px', maxWidth: '42%', zIndex: 10 }}>
                    {/* CTA Button */}
                    <Link
                      to="/case-study/looma"
                      style={{
                        display: 'inline-flex',
                        padding: '11px 26px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '20px',
                        border: '1.5px solid #5A4A3C',
                        background: 'transparent',
                        color: '#5A4A3C',
                        fontWeight: 500,
                        fontSize: '14px',
                        textDecoration: 'none',
                        marginBottom: '24px',
                        transition: 'all 0.3s ease'
                      }}
                      className="group hover:bg-gray-800 hover:text-white hover:border-gray-800"
                    >
                      View Case Study
                      <ArrowRight style={{ width: '16px', height: '16px' }} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '26px',
                      fontWeight: 700,
                      color: '#3D3530',
                      lineHeight: '1.3',
                      marginBottom: '14px',
                      letterSpacing: '-0.01em'
                    }}>
                      Startup (LOOMA)
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '12px',
                      lineHeight: '1.7',
                      color: '#5A4A3C',
                      fontWeight: 400
                    }}>
                      Participated in a week-long competition to design a futuristic wearable. Developed smart glasses aimed at supporting Alzheimer's patients through memory retention, facial recognition, and real-time reminders to enhance daily life.
                    </p>
                  </div>

                  {/* Glasses Image - Right Edge */}
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '60%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}>
                    <img
                      src="/images/loomaglasses.png"
                      alt="LOOMA Smart Glasses"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '85%',
                        objectFit: 'contain',
                        objectPosition: 'right center'
                      }}
                    />
                  </div>
                </div>
              ) : project.company === "Lowe's" ? (
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#EBE8E1',
                    minHeight: '494px',
                    height: '494px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '48px 56px'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-between" style={{ gap: '40px' }}>
                    {/* Left side - Text Content */}
                    <div className="flex-1" style={{ maxWidth: '45%' }}>
                      {/* Company Logos */}
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={project.logoSrc}
                          alt={project.logoAlt}
                          style={{ height: '36px', width: 'auto' }}
                        />
                        <span style={{ height: '36px', width: '2px', background: '#A8A8A8', display: 'inline-block' }}></span>
                        <span style={{ fontSize: '26px', fontWeight: 400, color: '#A8A8A8', letterSpacing: '-0.01em' }}>SCADpro</span>
                      </div>

                      {/* NDA Badge */}
                      {project.isNda && (
                        <div className="mb-10" style={{ fontSize: '13px', color: '#8A8A8A', fontWeight: 400 }}>
                          NDA Protected
                        </div>
                      )}

                      {/* CTA Button */}
                      <Link
                        to="/case-study/lowes"
                        style={{
                          display: 'inline-flex',
                          padding: '11px 26px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          borderRadius: '20px',
                          border: '1.5px solid #003D7A',
                          background: 'transparent',
                          color: '#003D7A',
                          fontWeight: 500,
                          fontSize: '14px',
                          textDecoration: 'none',
                          marginBottom: '26px',
                          transition: 'all 0.3s ease'
                        }}
                        className="group hover:bg-blue-900 hover:text-white"
                      >
                        View Case Study
                        <ArrowRight style={{ width: '16px', height: '16px' }} className="transition-transform group-hover:translate-x-1" />
                      </Link>

                      {/* Title */}
                      <h3 style={{
                        fontSize: '30px',
                        fontWeight: 700,
                        color: '#003D7A',
                        lineHeight: '1.25',
                        marginBottom: '14px',
                        letterSpacing: '-0.02em'
                      }}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: '13px',
                        lineHeight: '1.65',
                        color: '#003D7A',
                        fontWeight: 400
                      }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex-shrink-0">
                      <div className="rounded-2xl overflow-hidden" style={{ width: '440px', height: '398px' }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: project.cardBg,
                    minHeight: '494px',
                    height: '494px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '48px 56px'
                  }}
                >
                  <div
                    className="flex flex-col lg:flex-row items-center justify-between w-full"
                    style={{ gap: '40px' }}
                  >
                    {/* Left side - Text Content for UBS */}
                    {project.company === 'UBS' ? (
                      <div className="flex-1" style={{ maxWidth: '450px' }}>
                        {/* Company Logos */}
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={project.logoSrc}
                            alt={project.logoAlt}
                            style={{ height: '32px', width: 'auto' }}
                          />
                          <span style={{ height: '32px', width: '2px', background: '#D0D0D0', display: 'inline-block' }}></span>
                          <span style={{ fontSize: '24px', fontWeight: 400, color: '#6B6B6B', letterSpacing: '-0.02em' }}>SCADpro</span>
                        </div>

                        {/* NDA Badge */}
                        {project.isNda && (
                          <div className="mb-12" style={{ fontSize: '14px', color: '#6B6B6B', fontWeight: 400 }}>
                            NDA Protected
                          </div>
                        )}

                        {/* CTA Button */}
                        <Link
                          to="/case-study/ubs"
                          style={{
                            display: 'inline-flex',
                            padding: '14px 28px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            borderRadius: '20px',
                            border: '1.5px solid #000',
                            background: 'transparent',
                            color: '#000',
                            fontWeight: 500,
                            fontSize: '16px',
                            textDecoration: 'none',
                            marginBottom: '32px',
                            transition: 'all 0.3s ease'
                          }}
                          className="group hover:bg-black hover:text-white"
                        >
                          View Case Study
                          <ArrowRight style={{ width: '18px', height: '18px' }} className="transition-transform group-hover:translate-x-1" />
                        </Link>

                        {/* Title */}
                        <h3 style={{
                          fontSize: '28px',
                          fontWeight: 600,
                          color: '#000',
                          lineHeight: '1.3',
                          marginBottom: '16px',
                          letterSpacing: '-0.01em'
                        }}>
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p style={{
                          fontSize: '14px',
                          lineHeight: '1.7',
                          color: '#333',
                          fontWeight: 400
                        }}>
                          {project.description}
                        </p>
                      </div>
                    ) : project.company === 'Porsche' ? (
                      <div className="w-full h-full flex flex-col justify-between" style={{ position: 'absolute', inset: 0, padding: '48px 56px' }}>
                        {/* Top - Logo and Partner */}
                        <div className="flex items-center gap-4">
                          <img
                            src={project.logoSrc}
                            alt={project.logoAlt}
                            style={{ height: '28px', width: 'auto' }}
                          />
                          <span style={{ height: '28px', width: '2px', background: '#6B6B6B', display: 'inline-block' }}></span>
                          <span style={{ fontSize: '22px', fontWeight: 400, color: '#8A8A8A' }}>SCAD</span>
                        </div>

                        {/* Bottom Left - Text Content */}
                        <div style={{ maxWidth: '50%' }}>
                          {/* CTA Button */}
                          <Link
                            to="/case-study/porsche"
                            style={{
                              display: 'inline-flex',
                              padding: '12px 24px',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '10px',
                              borderRadius: '20px',
                              border: '1.5px solid #fff',
                              background: '#FFF',
                              color: '#2A353B',
                              fontWeight: 500,
                              fontSize: '15px',
                              marginBottom: '24px',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease'
                            }}
                            className="group hover:bg-transparent hover:text-white"
                          >
                            View Case Study
                            <ArrowRight style={{ width: '16px', height: '16px' }} className="transition-transform group-hover:translate-x-1" />
                          </Link>

                          {/* Title */}
                          <h3 style={{
                            fontSize: '28px',
                            fontWeight: 600,
                            color: '#fff',
                            lineHeight: '1.3',
                            marginBottom: '16px',
                            letterSpacing: '-0.01em'
                          }}>
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p style={{
                            fontSize: '14px',
                            lineHeight: '1.7',
                            color: '#E0E0E0',
                            fontWeight: 400
                          }}>
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {/* Right side - Project Image */}
                    {project.company === 'Porsche' ? (
                      <div style={{ position: 'absolute', right: '48px', top: '48px', bottom: '48px' }}>
                        <div className="rounded-2xl overflow-hidden" style={{ width: '380px', height: '100%' }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex-shrink-0">
                        <div className="rounded-2xl overflow-hidden" style={{ width: '420px', height: '398px' }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    )}
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
            <div className="flex-shrink-0">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/gettoknowmekavya.png"
                  alt="Toronto Skyline"
                  className="object-cover"
                  style={{ width: '428px', height: '404px' }}
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
        <div className="mt-32 text-center animate-fade-in-up">
          <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            Traveler by choice, foodie<br />
            by instinct, dog lover always
          </p>
          <Link
            to="/about"
            className="inline-block px-12 py-4 text-xl rounded-full text-white font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#2E6B5F' }}
          >
            About Me
          </Link>

          {/* Photo Strip */}
          <div className="mt-20 relative h-64 w-full max-w-[100vw] overflow-visible">
            <div className="flex justify-center items-end gap-[-20px] absolute left-1/2 transform -translate-x-1/2 w-full" style={{ bottom: '-120px' }}>
              {/* Photo 1 */}
              <div className="bg-white p-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '280px', zIndex: 1, top: '40px' }}>
                <img
                  src="/images/footer/homefooter1.png"
                  alt="Travel moment 1"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Photo 2 - removed profile badge */}
              <div className="relative bg-white p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300" style={{ width: '280px', zIndex: 2, top: '10px' }}>
                <img
                  src="/images/footer/homefooter2.png"
                  alt="Travel moment 2"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Photo 3 */}
              <div className="bg-white p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '280px', zIndex: 3, top: '-20px' }}>
                <img
                  src="/images/footer/homefooter3.png"
                  alt="Travel moment 3"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Photo 4 */}
              <div className="bg-white p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '280px', zIndex: 2, top: '-10px' }}>
                <img
                  src="/images/footer/homefooter4.png"
                  alt="Travel moment 4"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Photo 5 */}
              <div className="bg-white p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '280px', zIndex: 1, top: '30px' }}>
                <img
                  src="/images/footer/homefooter5.png"
                  alt="Travel moment 5"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Photo 6 */}
              <div className="bg-white p-3 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '280px', zIndex: 0, top: '60px' }}>
                <img
                  src="/images/footer/homefooter6.png"
                  alt="Travel moment 6"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
