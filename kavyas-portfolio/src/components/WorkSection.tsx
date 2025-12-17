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
    cardBg: '#fff',
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
    <section id="work" className="py-20 px-6">
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
              {/* For Aestura, use card image as background with text overlay */}
              {project.company === 'Aestura' ? (
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#E7EDF3',
                    minHeight: '494px',
                    height: '494px'
                  }}
                >
                  <div className="flex items-center h-full p-12 md:p-14 lg:p-16">
                    {/* Left side - Text content */}
                    <div style={{ maxWidth: '50%', zIndex: 2, flexShrink: 0 }}>
                      {/* AESTURA Logo */}
                      <img
                        src="/images/aesturalogo.png"
                        alt="Aestura Logo"
                        style={{
                          height: '100px',
                          width: 'auto',
                          marginBottom: '32px',
                          display: 'block'
                        }}
                      />

                      {/* View Campaign Button */}
                      {/* View Campaign Button */}
                      <Link
                        to="/case-study/aestura"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '12px 28px',
                          border: '2px solid #6B8DD6',
                          borderRadius: '40px',
                          background: '#FFF',
                          color: '#6B8DD6',
                          fontSize: '16px',
                          fontWeight: 500,
                          textDecoration: 'none',
                          marginBottom: '40px'
                        }}
                      >
                        View Campaign
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>

                      {/* Title */}
                      <h3 style={{
                        fontSize: '32px',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '16px',
                        lineHeight: '1.3'
                      }}>
                        The Essence Edit
                      </h3>

                      {/* Description */}
                      <p style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: '#666'
                      }}>
                        Selected as a Semi-Finalist in the AmorePacific Brand Challenge, where I developed a comprehensive campaign to introduce Aestura skincare products to the North American market. Conducted market research to identify consumer needs and trends, then created a go-to-market strategy with creative ideas for brand positioning, launch channels, and promotional tactics.
                      </p>
                    </div>
                  </div>
                </div>
              ) : project.company === 'Startupa' ? (
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '494px',
                    height: '494px',
                    width: '100%',
                    display: 'block'
                  }}
                >
                  {/* Content Container */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
                    {/* Content at Bottom Left */}
                    <div className="max-w-lg">
                      {/* Button */}
                      <Link
                        to="/case-study/looma"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#4A4238] text-base font-medium transition-transform hover:scale-105 mb-8 shadow-sm"
                      >
                        View Case Study
                        <ArrowRight className="w-5 h-5" />
                      </Link>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-[#4A4238] mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#4A4238] text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : project.company === "Lowe's" ? (
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                    style={{ display: 'block' }}
                  />
                  {/* Text overlay - positioned to match reference image */}
                  <div className="absolute top-0 left-0 p-12 md:p-14 lg:p-16" style={{ maxWidth: '55%' }}>
                    {/* Company Logos */}
                    <div className="flex items-center gap-4 mb-6">
                      <img src={project.logoSrc} alt={project.logoAlt} style={{ height: '48px', width: 'auto' }} />
                      <span style={{ height: '40px', width: '2px', background: '#9B9B9B', display: 'inline-block' }}></span>
                      <span style={{ fontSize: '32px', fontWeight: 400, color: '#9B9B9B', fontFamily: 'sans-serif' }}>SCADpro</span>
                    </div>

                    {/* NDA Badge */}
                    {project.isNda && (
                      <div className="mb-20" style={{ fontSize: '20px', color: '#7A7A7A', fontWeight: 400 }}>
                        NDA Protected
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      to="/case-study/lowes"
                      style={{
                        display: 'inline-flex',
                        padding: '14px 32px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '12px',
                        borderRadius: '40px',
                        border: '2px solid #003D7A',
                        background: '#FFF',
                        color: '#003D7A',
                        fontWeight: 500,
                        fontSize: '18px',
                        textDecoration: 'none',
                        marginBottom: '32px',
                      }}
                      className="group"
                    >
                      View Case Study
                      <ArrowRight style={{ width: '20px', height: '20px' }} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#003D7A',
                      lineHeight: '1.2',
                      marginBottom: '20px',
                      marginTop: '32px'
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#003D7A',
                      fontWeight: 400
                    }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: project.cardBg,
                    minHeight: '494px',
                    position: 'relative',
                    ...(project.company === 'UBS' ? { maxHeight: '494px' } : {})
                  }}
                >
                  {/* No overlay needed anymore */}

                  <div
                    className="flex flex-col lg:flex-row gap-8 p-6 md:p-8"
                    style={project.company === 'Porsche' ? { position: 'relative', alignItems: 'stretch' } : {}}
                  >
                    {/* Original layout for UBS and Porsche */}
                    <div className="flex-1">
                      {/* Company Logos */}
                      <div className="flex items-center gap-3 mb-4">
                        <img src={project.logoSrc} alt={project.logoAlt} className={project.logoClass} style={{ display: 'inline', verticalAlign: 'middle' }} />
                        <span style={{ height: '24px', width: '1px', background: project.partnerColor, display: 'inline-block', margin: '0 8px' }}></span>
                        <span className="text-lg font-medium" style={{ color: project.partnerColor }}>{project.partner}</span>
                      </div>

                      {/* NDA Badge */}
                      {project.isNda && (
                        <span className="inline-block text-xs text-muted-foreground mb-4">
                          NDA Protected
                        </span>
                      )}

                      {/* CTA (only for non-Porsche cards) */}
                      {project.company !== 'Porsche' && (
                        <Link
                          to="/case-study/ubs"
                          style={{
                            display: 'flex',
                            width: '210px',
                            height: '52px',
                            padding: '0 19px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            borderRadius: '20px',
                            border: '1px solid #000',
                            background: '#FFF',
                          }}
                          className="group text-base font-medium text-foreground mb-6"
                        >
                          View Case Study
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}

                      {/* Title & Description */}
                      {project.company === 'Porsche' ? (
                        <div style={{ position: 'absolute', left: 0, bottom: 0, margin: 32, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                          <button
                            style={{
                              display: 'flex',
                              width: '180px',
                              height: '40px',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '10px',
                              borderRadius: '14px',
                              border: '1px solid #fff',
                              background: '#FFF',
                              color: '#2A353B',
                              fontWeight: 500,
                              fontSize: '16px',
                              marginBottom: '18px',
                            }}
                            className="group"
                          >
                            View Case Study
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </button>
                          <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: '#fff', textAlign: 'left' }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed max-w-md"
                            style={{ color: '#fff', textAlign: 'left', margin: 0 }}
                          >
                            {project.description}
                          </p>
                        </div>
                      ) : (
                        <>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                            {project.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Project Image (only for UBS and Porsche) */}
                    <div className="lg:w-1/2">
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: '571px', height: '494px', objectFit: 'cover' }}
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
              <div className="bg-white p-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '240px', zIndex: 1, top: '40px' }}>
                <img
                  src="/images/footer/homefooter1.png"
                  alt="Travel moment 1"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Photo 2 with profile badge */}
              <div className="relative bg-white p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300" style={{ width: '240px', zIndex: 2, top: '10px' }}>
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-500 border-4 border-white overflow-hidden z-20 shadow-md">
                  <img
                    src="/images/gettoknowmekavya.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src="/images/footer/homefooter2.png"
                  alt="Travel moment 2"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Photo 3 */}
              <div className="bg-white p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '240px', zIndex: 3, top: '-20px' }}>
                <img
                  src="/images/footer/homefooter3.png"
                  alt="Travel moment 3"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Photo 4 */}
              <div className="bg-white p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '240px', zIndex: 2, top: '-10px' }}>
                <img
                  src="/images/footer/homefooter4.png"
                  alt="Travel moment 4"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Photo 5 */}
              <div className="bg-white p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '240px', zIndex: 1, top: '30px' }}>
                <img
                  src="/images/footer/homefooter5.png"
                  alt="Travel moment 5"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Photo 6 */}
              <div className="bg-white p-3 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 relative" style={{ width: '240px', zIndex: 0, top: '60px' }}>
                <img
                  src="/images/footer/homefooter6.png"
                  alt="Travel moment 6"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
