import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Hero Section with Polaroids */}
                    <section className="mb-12 sm:mb-16 md:mb-20">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
                            {/* Left - Text */}
                            <div className="space-y-4 sm:space-y-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                                    Nice to meet you!
                                </h1>
                                <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-md">
                                    I'm a UX Design student at SCAD, driven by curiosity and a passion for creating thoughtful, impactful experiences.
                                </p>
                            </div>

                            {/* Right - Polaroid Photos */}
                            <div className="relative min-h-[300px] sm:min-h-[400px] md:h-[500px]">
                                {/* Main Polaroid - "Get to know me!" */}
                                <div className="relative md:absolute bg-white p-3 sm:p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 w-60 sm:w-64 md:w-[280px] mx-auto md:mx-0 md:left-1/2 md:top-[20%] md:-translate-x-1/2 z-[2] mb-6 md:mb-0">
                                    <div className="bg-gray-200 aspect-[4/5] mb-2 sm:mb-3 overflow-hidden">
                                        <img
                                            src="/images/aboutme/aboutme2.png"
                                            alt="Get to know me"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center font-handwriting text-lg sm:text-xl">Get to know me!</p>
                                </div>

                                {/* Top Right Polaroid - "Welcome!" */}
                                <div className="relative md:absolute bg-white p-3 sm:p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 w-52 sm:w-56 md:w-[240px] mx-auto md:mx-0 md:right-0 md:top-0 z-[3]">
                                    <div className="bg-gray-200 aspect-[4/5] mb-2 sm:mb-3 overflow-hidden">
                                        <img
                                            src="/images/aboutme/aboutme1.png"
                                            alt="Welcome"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center font-handwriting text-lg sm:text-xl">Welcome!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* A little bit about me Section */}
                    <section className="mb-12 sm:mb-14 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                            A little bit about me!
                        </h2>
                        <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl">
                            Here are a few things that make me happy: the people I love, the random adventures that make life feel fun, and all the little moments in between.
                        </p>
                    </section>

                    {/* Polaroid Grid */}
                    <section className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                            {/* Growing Up */}
                            <div className="bg-white p-3 sm:p-4 shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto sm:mx-0 mt-0 sm:mt-5 lg:mt-8">
                                <div className="bg-gray-200 aspect-square mb-2 sm:mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme3.png"
                                        alt="Growing Up"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-lg sm:text-xl">Growing Up</p>
                            </div>

                            {/* Friends */}
                            <div className="bg-white p-3 sm:p-4 shadow-xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto sm:mx-0 mt-0 sm:mt-12 lg:mt-16">
                                <div className="bg-gray-200 aspect-square mb-2 sm:mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme4.png"
                                        alt="Friends"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-lg sm:text-xl">Friends</p>
                            </div>

                            {/* Adventure */}
                            <div className="bg-white p-3 sm:p-4 shadow-xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto sm:mx-0 mt-0 sm:mt-8 lg:mt-10">
                                <div className="bg-gray-200 aspect-square mb-2 sm:mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme5.png"
                                        alt="Adventure"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-lg sm:text-xl">Adventure</p>
                            </div>

                            {/* Family */}
                            <div className="bg-white p-3 sm:p-4 shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto sm:mx-0 mt-0 sm:mt-16 lg:mt-20">
                                <div className="bg-gray-200 aspect-square mb-2 sm:mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme6.png"
                                        alt="Family"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-lg sm:text-xl">Family</p>
                            </div>
                        </div>
                    </section>

                    {/* Moments at SCAD Section */}
                    <section className="mt-16 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-10 text-[#006181]">
                            Moments at SCAD
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Lowes x SCADpro */}
                            <div className="animate-fade-in-up">
                                <div className="rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                                    <img
                                        src="/images/momentspicleft.png"
                                        alt="Lowes x SCADpro"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Lowes x SCADpro</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Partnered with a cross-disciplinary team to rethink the garden center experience for Lowe's—combining UX, interior design, and service design to enhance wayfinding, product discovery, and customer engagement.
                                </p>
                            </div>

                            {/* Porsche x SCADpro */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                <div className="rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                                    <img
                                        src="/images/momentspicmid.png"
                                        alt="Porsche x SCADpro"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Porsche x SCADpro</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Visited the Porsche Experience Center and learned from their design team about crafting high-performance experiences through precision, storytelling, and user-centered design.
                                </p>
                            </div>

                            {/* UBS x SCADpro */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                <div className="rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                                    <img
                                        src="/images/momentspicright.png"
                                        alt="UBS x SCADpro"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">UBS x SCADpro</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Gained valuable experience presenting design concepts to stakeholders—communicating research insights, justifying design decisions, and incorporating feedback to align project outcomes with business goals.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Recent Accomplishments Section */}
                    <section className="mt-16 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-10 text-[#006181]">
                            Recent Accomplishments
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Google Xi SCAD Cohort */}
                            <div className="animate-fade-in-up">
                                <div className="rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                                    <img
                                        src="/images/accomplishleft.png"
                                        alt="Google Xi SCAD Cohort"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Google Xi SCAD Cohort</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Participated in a hackathon, collaborating with a team to develop an innovative solution under time constraints. Successfully designed and pitched a functional prototype, earning 2nd place.
                                </p>
                            </div>

                            {/* FLUX Portfolio Reviews */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                <div className="rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                                    <img
                                        src="/images/accomplishmid.png"
                                        alt="FLUX Portfolio Reviews"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">FLUX Portfolio Reviews</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Organized portfolio review sessions for the UX student body, bringing eight industry professionals to campus to provide valuable feedback and mentorship.
                                </p>
                            </div>

                            {/* Adobe Panel- Speaker */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                <div className="rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
                                    <img
                                        src="/images/accomplishright.png"
                                        alt="Adobe Panel Speaker"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Adobe Panel- Speaker</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Spoke on a panel we hosted with Terry Whitt, Principal Director at Adobe, representing the UX student body and facilitating discussions on design, industry insights, and career growth.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutMe;
