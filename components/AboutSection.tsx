

const educationList = [
  { id: "01", name: "Savannah College Of Art and Design" },
  { id: "02", name: "Westwood High School" },
];

const experienceList = [
  { id: "01", role: "SCAD FLUX – Director" },
  { id: "02", role: "UBS x SCADpro – UX Research/ UI Bridge" },
  { id: "03", role: "Porsche x SCADpro – Senior Backend Lead" },
];

export function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Get To Know Me */}
        <div className="card-float p-8 md:p-12 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">
            Get To Know Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Bio Text */}
            <div className="flex-1 relative">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-highlight">
                  Hi, I'm Kavya! A sophomore UX designer born and raised in
                  Toronto, Canada.
                </span>{" "}
                I'm a curious and passionate individual, always striving to make
                a difference through human-centered design. When I'm not glued
                to my computer, you'll find me exploring new places, trying new
                food, or watching basketball.
              </p>

              {/* Small avatar overlay */}
              <div className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Kavya"
                  className="w-16 h-16 rounded-full object-cover border-4 border-background shadow-float"
                />
              </div>
            </div>

            {/* City Image */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/toronto-skyline.jpg"
                  alt="Toronto Skyline"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
            EDUCATION
          </h2>

          <div className="space-y-0">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="flex items-center justify-between py-6 border-b border-border"
              >
                <span className="text-muted-foreground text-sm">{edu.id}.</span>
                <span className="text-foreground font-medium">{edu.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
            EXPERIENCE
          </h2>

          <div className="space-y-0">
            {experienceList.map((exp) => (
              <div
                key={exp.id}
                className="flex items-center justify-between py-6 border-b border-border"
              >
                <span className="text-muted-foreground text-sm">{exp.id}.</span>
                <span className="text-foreground font-medium">{exp.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
