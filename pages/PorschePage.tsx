import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PorschePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Image Grid Section */}
            <div className="w-full px-4 pt-4">
                {/* First Row - 2 images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
                        <img
                            src="/images/porsche/porchehero1.png"
                            alt="Porsche Hero 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
                        <img
                            src="/images/porsche/porshcehero2.png"
                            alt="Porsche Hero 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Second Row - 3 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="w-full h-[350px] md:h-[450px] overflow-hidden">
                        <img
                            src="/images/porsche/porschehero3.png"
                            alt="Porsche Hero 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full h-[350px] md:h-[450px] overflow-hidden">
                        <img
                            src="/images/porsche/porschehero4.png"
                            alt="Porsche Hero 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full h-[350px] md:h-[450px] overflow-hidden">
                        <img
                            src="/images/porsche/porschehero5.png"
                            alt="Porsche Hero 5"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 py-20">
                {/* Project Header */}
                <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-medium mb-16 text-black">Porsche x SCADpro Collaboration</h1>

                    {/* Project Details Grid */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 mb-20 border-b border-gray-100 pb-10 md:border-none md:pb-0">
                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Role:</h3>
                            <p className="text-base font-medium text-gray-900">Senior Backend Lead</p>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Industry:</h3>
                            <p className="text-base font-medium text-gray-900">Automotive Vehicles</p>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Duration:</h3>
                            <p className="text-base font-medium text-gray-900">10 Weeks</p>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Location:</h3>
                            <p className="text-base font-medium text-gray-900">Atlanta, Georgia</p>
                        </div>
                    </div>

                    {/* Project Overview */}
                    <div className="space-y-6 text-black leading-relaxed text-lg md:text-xl font-normal max-w-4xl">
                        <p>
                            Collaborated with Porsche through a SCADpro project as the Senior Backend Lead,
                            driving innovation in the design of systems, wireframes, and the mobile app foundation. Ensured
                            every design decision had purpose, alignment, and a clear user-focused rationale,
                            helping deliver a cohesive and strategic final solution.
                        </p>
                    </div>
                </div>
            </main>

            {/* How Might We Section */}
            <div
                className="w-full relative h-[400px] md:h-[500px] flex items-center justify-center"
                style={{
                    backgroundImage: 'url(/images/porsche/porsche2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay to dim the image */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text content */}
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">
                        How Might We?
                    </h2>
                    <p className="text-xl md:text-2xl text-white leading-relaxed">
                        Design effectively for an EV future that's still taking shape? What will matter most to the drivers joining the electric transition over the next 5 years?
                    </p>
                </div>
            </div>

            {/* Research Section */}
            <div className="w-full bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Research Header */}
                        <h2 className="text-5xl md:text-6xl font-medium text-gray-800 mb-12">
                            Research
                        </h2>

                        {/* Research Subheading */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                            Understanding the Porsche EV Market
                        </h3>

                        {/* Research Description */}
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-16 max-w-4xl">
                            Catering to these diverse expectations while balancing digital natives and long-time loyalists requires more than a flexible, unmistakably Porsche experience. It depends on understanding who these audiences are and what they value, allowing the brand to evolve for new needs while preserving the heritage its loyal customers trust.
                        </p>

                        {/* Three Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Card 01 */}
                            <div className="border-2 border-gray-300 rounded-2xl p-8 text-center group cursor-pointer transition-all duration-300 hover:border-[#2E6B5F] hover:shadow-lg">
                                <div className="text-6xl font-bold text-gray-900 mb-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#2E6B5F] group-hover:to-[#5AD1B9] group-hover:bg-clip-text group-hover:text-transparent">01</div>
                                <p className="text-base font-medium text-gray-700">First Time<br />Porsche Buyers</p>
                            </div>

                            {/* Card 02 */}
                            <div className="border-2 border-gray-300 rounded-2xl p-8 text-center group cursor-pointer transition-all duration-300 hover:border-[#2E6B5F] hover:shadow-lg">
                                <div className="text-6xl font-bold text-gray-900 mb-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#2E6B5F] group-hover:to-[#5AD1B9] group-hover:bg-clip-text group-hover:text-transparent">02</div>
                                <p className="text-base font-medium text-gray-700">Porsche Owners<br />exploring EV's</p>
                            </div>

                            {/* Card 03 */}
                            <div className="border-2 border-gray-300 rounded-2xl p-8 text-center group cursor-pointer transition-all duration-300 hover:border-[#2E6B5F] hover:shadow-lg">
                                <div className="text-6xl font-bold text-gray-900 mb-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#2E6B5F] group-hover:to-[#5AD1B9] group-hover:bg-clip-text group-hover:text-transparent">03</div>
                                <p className="text-base font-medium text-gray-700">General EV Car<br />Owners</p>
                            </div>
                        </div>

                        {/* Audience Type Labels */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div
                                    className="inline-flex justify-center items-center text-white font-medium text-base"
                                    style={{
                                        borderRadius: '11.146px',
                                        background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)',
                                        height: '75.792px',
                                        padding: '21.177px 71.333px',
                                        gap: '11.146px',
                                    }}
                                >
                                    Primary
                                </div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="inline-flex justify-center items-center text-white font-medium text-base"
                                    style={{
                                        borderRadius: '11.146px',
                                        background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)',
                                        height: '75.792px',
                                        padding: '21.177px 71.333px',
                                        gap: '11.146px',
                                    }}
                                >
                                    Secondary
                                </div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="inline-flex justify-center items-center text-white font-medium text-base"
                                    style={{
                                        borderRadius: '11.146px',
                                        background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)',
                                        height: '75.792px',
                                        padding: '21.177px 71.333px',
                                        gap: '11.146px',
                                    }}
                                >
                                    Tertiary
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benchmarking and Competitive Analysis Section */}
            <div className="w-full bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                            Benchmarking and Competitive Analysis
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
                            We analyzed Lucid, Audi, Mercedes, and Tesla to identify the strongest competitors in the market. By reviewing their digital experiences, brand strategies, and customer engagement, we assessed where each excels and where Porsche can further differentiate itself.
                        </p>

                        {/* 2x2 Grid of Competitor Images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Lucid */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/images/porsche/porschelucidimage.png"
                                    alt="Lucid Interior"
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            {/* Mercedes */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/images/porsche/porschemercedesimage.png"
                                    alt="Mercedes Interior"
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            {/* Audi */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/images/porsche/porscheaudiimage.png"
                                    alt="Audi Interior"
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            {/* Tesla */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/images/porsche/porscheteslaimage.png"
                                    alt="Tesla Interior"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="w-full bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* First Stats Block - The Delicate Balance */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Text and Stats */}
                            <div className="space-y-8">
                                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                                    The Delicate Balance:<br />
                                    Porsche's Soul, Electrified
                                </h3>

                                {/* Stat 1 */}
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl font-bold text-gray-900">62%</div>
                                    <p className="text-lg text-gray-700 pt-4">
                                        want "smart & connected"
                                    </p>
                                </div>

                                {/* Stat 2 */}
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl font-bold text-gray-900">71%</div>
                                    <p className="text-lg text-gray-700 pt-4">
                                        fear that tech will interfere<br />
                                        with the purity of driving
                                    </p>
                                </div>
                            </div>

                            {/* Right - Image */}
                            <div className="rounded-2xl overflow-hidden">
                                <img
                                    src="/images/porsche/porschestatsimage.png"
                                    alt="Porsche Classic and Modern"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Second Stats Block - Why Feel Matters */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Image */}
                            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
                                <img
                                    src="/images/porsche/porschestatsimage2.png"
                                    alt="Porsche Interior Controls"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Right - Text and Stats */}
                            <div className="space-y-8 order-1 lg:order-2">
                                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                                    Why "Feel" Matters: Controls &<br />
                                    Cabin Ambience
                                </h3>

                                {/* Stat 1 */}
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl font-bold text-gray-900">62%</div>
                                    <p className="text-lg text-gray-700 pt-4">
                                        prefer a mix of physical<br />
                                        and digital controls
                                    </p>
                                </div>

                                {/* Stat 2 */}
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl font-bold text-gray-900">71%</div>
                                    <p className="text-lg text-gray-700 pt-4">
                                        feel distracted with full-<br />
                                        touch UI's
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Research Methodology Section */}
            <div className="w-full bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            {/* Left - Overlapping Circles */}
                            <div className="relative w-full lg:w-auto" style={{ minHeight: '280px', minWidth: '350px' }}>
                                {/* First Circle - 160+ Survey Responses */}
                                <div
                                    className="absolute top-0 left-0 rounded-full overflow-hidden flex flex-col items-center justify-center text-white shadow-lg"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        backgroundImage: 'url(/images/porsche/porschecircleimage.png)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/50"></div>
                                    <div className="relative z-10 text-center px-4">
                                        <div className="text-5xl font-bold mb-1">160+</div>
                                        <div className="text-xs uppercase tracking-wide font-medium">Survey<br />Responses</div>
                                    </div>
                                </div>

                                {/* Second Circle - 30+ Interviews */}
                                <div
                                    className="absolute rounded-full overflow-hidden flex flex-col items-center justify-center text-white shadow-lg"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        top: '80px',
                                        left: '150px',
                                        backgroundImage: 'url(/images/porsche/porschecircleimage2.png)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/50"></div>
                                    <div className="relative z-10 text-center px-4">
                                        <div className="text-5xl font-bold mb-1">30+</div>
                                        <div className="text-xs uppercase tracking-wide font-medium">Interviews</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Research Topics List */}
                            <div className="flex-1 pt-8">
                                <ul className="space-y-5 text-base text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <span>HMI Reports</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <span>Sensory Experiences in EVs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <span>Range Anxiety Mitigation Studies</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <span>Best Display Configurations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What Porsche Drivers Expect Section */}
            <div
                className="w-full relative h-[450px] md:h-[500px] flex items-center"
                style={{
                    backgroundImage: 'url(/images/porsche/porschedrivers.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay to dim the image */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text content */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">
                        What Porsche Drivers Expect
                    </h2>
                    <div className="w-24 h-1 bg-white mb-8"></div>
                    <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl">
                        Porsche drivers want systems that adapt instantly and reinforce control, performance, and presence behind the wheel.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
