import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Hero Section with Polaroids */}
                    <section className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left - Text */}
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                                    Nice to meet you!
                                </h1>
                                <p className="text-lg text-foreground leading-relaxed max-w-md">
                                    I'm a UX Design student at SCAD, driven by curiosity and a passion for creating thoughtful, impactful experiences.
                                </p>
                            </div>

                            {/* Right - Polaroid Photos */}
                            <div className="relative h-[500px]">
                                {/* Main Polaroid - "Get to know me!" */}
                                <div
                                    className="absolute bg-white p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
                                    style={{
                                        left: '50%',
                                        top: '20%',
                                        transform: 'translateX(-50%) rotate(2deg)',
                                        zIndex: 2,
                                        width: '280px'
                                    }}
                                >
                                    <div className="bg-gray-200 aspect-[4/5] mb-3 overflow-hidden">
                                        <img
                                            src="/images/aboutme/aboutme2.png"
                                            alt="Get to know me"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center font-handwriting text-xl">Get to know me!</p>
                                </div>

                                {/* Top Right Polaroid - "Welcome!" */}
                                <div
                                    className="absolute bg-white p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                                    style={{
                                        right: '0',
                                        top: '0',
                                        transform: 'rotate(-6deg)',
                                        zIndex: 3,
                                        width: '240px'
                                    }}
                                >
                                    <div className="bg-gray-200 aspect-[4/5] mb-3 overflow-hidden">
                                        <img
                                            src="/images/aboutme/aboutme1.png"
                                            alt="Welcome"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center font-handwriting text-xl">Welcome!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* A little bit about me Section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            A little bit about me!
                        </h2>
                        <p className="text-lg text-foreground leading-relaxed max-w-3xl">
                            Here are a few things that make me happy: the people I love, the random adventures that make life feel fun, and all the little moments in between.
                        </p>
                    </section>

                    {/* Polaroid Grid */}
                    <section className="relative">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* Growing Up */}
                            <div
                                className="bg-white p-4 shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300"
                                style={{ marginTop: '20px' }}
                            >
                                <div className="bg-gray-200 aspect-square mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme3.png"
                                        alt="Growing Up"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-xl">Growing Up</p>
                            </div>

                            {/* Friends */}
                            <div
                                className="bg-white p-4 shadow-xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300"
                                style={{ marginTop: '60px' }}
                            >
                                <div className="bg-gray-200 aspect-square mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme4.png"
                                        alt="Friends"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-xl">Friends</p>
                            </div>

                            {/* Adventure */}
                            <div
                                className="bg-white p-4 shadow-xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300"
                                style={{ marginTop: '40px' }}
                            >
                                <div className="bg-gray-200 aspect-square mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme5.png"
                                        alt="Adventure"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-xl">Adventure</p>
                            </div>

                            {/* Family */}
                            <div
                                className="bg-white p-4 shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300"
                                style={{ marginTop: '80px' }}
                            >
                                <div className="bg-gray-200 aspect-square mb-3 overflow-hidden">
                                    <img
                                        src="/images/aboutme/aboutme6.png"
                                        alt="Family"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-handwriting text-xl">Family</p>
                            </div>
                        </div>
                    </section>

                    {/* Moments at SCAD Section */}
                    <section className="mt-20">
                        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-10" style={{ color: '#006181' }}>
                            Moments at SCAD
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Lowes x SCADpro */}
                            <div className="animate-fade-in-up">
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src="/images/momentspicleft.png"
                                        alt="Lowes x SCADpro"
                                        className="object-cover"
                                        style={{ width: '377.86px', height: '364.12px' }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Lowes x SCADpro</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Partnered with a cross-disciplinary team to rethink the garden center experience for Lowe's—combining UX, interior design, and service design to enhance wayfinding, product discovery, and customer engagement.
                                </p>
                            </div>

                            {/* Porsche x SCADpro */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src="/images/momentspicmid.png"
                                        alt="Porsche x SCADpro"
                                        className="object-cover"
                                        style={{ width: '377.86px', height: '364.12px' }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Porsche x SCADpro</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Visited the Porsche Experience Center and learned from their design team about crafting high-performance experiences through precision, storytelling, and user-centered design.
                                </p>
                            </div>

                            {/* UBS x SCADpro */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src="/images/momentspicright.png"
                                        alt="UBS x SCADpro"
                                        className="object-cover"
                                        style={{ width: '377.86px', height: '364.12px' }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">UBS x SCADpro</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Gained valuable experience presenting design concepts to stakeholders—communicating research insights, justifying design decisions, and incorporating feedback to align project outcomes with business goals.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Recent Accomplishments Section */}
                    <section className="mt-20">
                        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-10" style={{ color: '#006181' }}>
                            Recent Accomplishments
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Google Xi SCAD Cohort */}
                            <div className="animate-fade-in-up">
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src="/images/accomplishleft.png"
                                        alt="Google Xi SCAD Cohort"
                                        className="object-cover"
                                        style={{ width: '377.86px', height: '364.12px' }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Google Xi SCAD Cohort</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Participated in a hackathon, collaborating with a team to develop an innovative solution under time constraints. Successfully designed and pitched a functional prototype, earning 2nd place.
                                </p>
                            </div>

                            {/* FLUX Portfolio Reviews */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src="/images/accomplishmid.png"
                                        alt="FLUX Portfolio Reviews"
                                        className="object-cover"
                                        style={{ width: '377.86px', height: '364.12px' }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">FLUX Portfolio Reviews</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Organized portfolio review sessions for the UX student body, bringing eight industry professionals to campus to provide valuable feedback and mentorship.
                                </p>
                            </div>

                            {/* Adobe Panel- Speaker */}
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src="/images/accomplishright.png"
                                        alt="Adobe Panel Speaker"
                                        className="object-cover"
                                        style={{ width: '377.86px', height: '364.12px' }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Adobe Panel- Speaker</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
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
