import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const UBSCaseStudy = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main>
                {/* Hero Image Section */}
                <div className="w-full mt-20">
                    <img
                        src="/images/ubspageheader.png"
                        alt="UBS Team"
                        className="w-full h-auto"
                    />
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-6xl">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 lg:mb-16">
                        UBS x SCADpro
                    </h1>

                    {/* Project Details Grid with Dividers */}
                    {/* Project Details Grid with Dividers */}
                    <div className="grid grid-cols-2 lg:flex lg:items-start gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Role:</h3>
                            <p className="text-base text-gray-900">UI/Research Bridge</p>
                        </div>
                        <div className="hidden lg:block w-px h-12 bg-gray-200"></div>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Industry:</h3>
                            <p className="text-base text-gray-900">Finance/Retail Banking</p>
                        </div>
                        <div className="hidden lg:block w-px h-12 bg-gray-200"></div>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Duration:</h3>
                            <p className="text-base text-gray-900">10 Weeks</p>
                        </div>
                        <div className="hidden lg:block w-px h-12 bg-gray-200"></div>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Location:</h3>
                            <p className="text-base text-gray-900">Lacoste, France</p>
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="mb-16">
                        <p className="text-base text-gray-900 leading-relaxed">
                            Under the guidance of UBS, our team researched and deveoped concepts for a dynamic and scalable "north Star" visions for UBS.com. The goal was to create a forward looking website that not only meets but anticipates users needs.
                        </p>
                    </div>

                    {/* NDA Notice Box */}
                    <div className="w-full rounded-[30px] border-[4px] border-[#343F28] bg-white p-8 md:py-[74px] md:px-[60px] flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
                        <h2
                            className="text-3xl md:text-[40px] font-medium leading-tight md:leading-[55px] flex-1 w-full lg:max-w-[50%]"
                            style={{
                                color: '#343F28',
                            }}
                        >
                            This projects assets are currently under NDA
                        </h2>
                        <p className="text-base text-gray-900 leading-relaxed flex-1 w-full lg:max-w-[50%]">
                            This case study focusses on the teams process, my role as UX Researcher, and all the lessons learned. All research findings and solutions remain confidential under NDA.
                        </p>
                    </div>

                    {/* My Contributions Section */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">
                            My Contributions
                        </h2>
                        <p
                            className="mb-8 sm:mb-12 text-base sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-[40px]"
                            style={{ color: 'rgba(0,0,0,0.60)', fontFamily: '"DM Sans"' }}
                        >
                            As part of the Research and UI team, I ensured that our design decisions were guided by our research insights. Since we were designing for a new demographic—the Swiss market, it was crucial that our solutions reflected the needs, preferences, and cultural nuances of that audience.
                        </p>

                        {/* Contribution Cards */}
                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                            {/* Card 01 */}
                            <div className="border-2 border-gray-200 rounded-2xl p-5 sm:p-8 group cursor-pointer transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                <div className="mb-6">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <circle cx="10" cy="16" r="2"></circle>
                                        <path d="m16 10-4 4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-semibold mb-4 text-black transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent">01</h3>
                                <p className="text-base text-gray-900 font-semibold">
                                    Conducted user research to understand the Swiss market and inform design decisions.
                                </p>
                            </div>

                            {/* Card 02 */}
                            <div className="border-2 border-gray-200 rounded-2xl p-8 group cursor-pointer transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                <div className="mb-6">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-semibold mb-4 text-black transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent">02</h3>
                                <p className="text-base text-gray-900 font-semibold">
                                    Ensured UI designs aligned with research insights and user needs.
                                </p>
                            </div>

                            {/* Card 03 */}
                            <div className="border-2 border-gray-200 rounded-2xl p-8 group cursor-pointer transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                <div className="mb-6">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
                                        <path d="M6 9.01V9"></path>
                                        <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-semibold mb-4 text-black transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent">03</h3>
                                <p className="text-base text-gray-900 font-semibold">
                                    Led usability testing to validate and refine design solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Research Section */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#343F28' }}>
                            Research
                        </h2>

                        {/* Understanding the Swiss Market */}
                        <div className="mb-8 sm:mb-12">
                            <h3 className="text-xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                Understanding the Swiss Market
                            </h3>
                            <p
                                className="mb-8 sm:mb-12 text-base sm:text-xl md:text-2xl font-medium leading-relaxed sm:leading-[40px]"
                                style={{ color: 'rgba(0,0,0,0.60)', fontFamily: '"DM Sans"' }}
                            >
                                We used Maze to conduct primary research with users in Switzerland, aiming to understand how they manage their finances and financial decisions. The insights gathered revealed key patterns in their spending, saving, and trust behaviors, helping us design solutions tailored to their needs.
                            </p>

                            {/* Statistics Cards */}
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Card 1 - Total Responses */}
                                <div>
                                    <div className="border-2 border-gray-200 rounded-2xl p-5 sm:p-8 mb-4 text-center group cursor-pointer transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                        <h4 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent">70</h4>
                                        <p className="text-base text-gray-900">Total Responses</p>
                                    </div>
                                    <div
                                        className="flex h-[60px] sm:h-[76px] w-full items-center justify-center text-white font-bold text-xl sm:text-3xl"
                                        style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)', borderRadius: '11.146px' }}
                                    >
                                        Responses
                                    </div>
                                </div>

                                {/* Card 2 - GenZ Participants */}
                                <div>
                                    <div className="border-2 border-gray-200 rounded-2xl p-5 sm:p-8 mb-4 text-center group cursor-pointer transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                        <h4 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent">30</h4>
                                        <p className="text-base text-gray-900">GenZ Participants</p>
                                    </div>
                                    <div
                                        className="flex h-[60px] sm:h-[76px] w-full items-center justify-center text-white font-bold text-xl sm:text-3xl"
                                        style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)', borderRadius: '11.146px' }}
                                    >
                                        Surveys
                                    </div>
                                </div>

                                {/* Card 3 - Swiss Participants */}
                                <div>
                                    <div className="border-2 border-gray-200 rounded-2xl p-5 sm:p-8 mb-4 text-center group cursor-pointer transition-all duration-300 hover:border-[#343F28] hover:shadow-lg">
                                        <h4 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-2 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#343F28] group-hover:to-[#343F28] group-hover:bg-clip-text group-hover:text-transparent">40</h4>
                                        <p className="text-base text-gray-900">Swiss Participants</p>
                                    </div>
                                    <div
                                        className="flex h-[60px] sm:h-[76px] w-full items-center justify-center text-white font-bold text-xl sm:text-3xl"
                                        style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)', borderRadius: '11.146px' }}
                                    >
                                        Interviews
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design Process Section */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#343F28' }}>
                            Design Process
                        </h2>

                        {/* Iteration */}
                        {/* Iteration */}
                        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start">
                            <div className="flex-1">
                                <img
                                    src="/images/ubsdesignprocess1.png"
                                    alt="Iteration Process"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Iteration</h3>
                                <p className="text-base text-gray-900 leading-relaxed">
                                    During this phase, we explored multiple design directions, using research insights and user feedback to refine our ideas. Rapid prototyping and continuous testing allowed us to identify what resonated most with users and adapt our approach accordingly.
                                </p>
                            </div>
                        </div>

                        {/* Execution */}
                        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start">
                            <div className="flex-1 order-2 lg:order-1">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Execution</h3>
                                <p className="text-base text-gray-900 leading-relaxed">
                                    Once we aligned on a clear direction, we focused on building high-fidelity designs and ensuring they met user needs and business goals. This stage emphasized attention to detail, consistency, and collaboration across the UI, research, and strategy teams.
                                </p>
                            </div>
                            <div className="flex-1 order-1 lg:order-2">
                                <img
                                    src="/images/ubsdesignprocess2.png"
                                    alt="Execution Process"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Deliver */}
                        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start">
                            <div className="flex-1">
                                <img
                                    src="/images/ubsdesignprocess3.png"
                                    alt="Deliver Process"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Deliver</h3>
                                <p className="text-base text-gray-900 leading-relaxed">
                                    The final phase centered on presenting our work to stakeholders and communicating the design rationale clearly. We delivered polished designs backed by user data, showcasing not just the final product but the decisions and insights that shaped it.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Takeaways Section */}
                    <div className="mt-10 sm:mt-20">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#343F28' }}>
                            Takeaways
                        </h2>

                        <div className="space-y-6">
                            {/* Takeaway 1 */}
                            <div className="w-full rounded-[30px] p-[4px]" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                <div className="w-full h-full rounded-[26px] bg-white p-6 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0 text-black">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-900 font-medium leading-relaxed flex-1 pt-2 md:pt-0">
                                        Learned the value of close collaboration between research and design to create cohesive solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Takeaway 2 */}
                            <div className="w-full rounded-[30px] p-[4px]" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                <div className="w-full h-full rounded-[26px] bg-white p-6 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0 text-black">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                            <path d="M2 2l7.586 7.586"></path>
                                            <circle cx="11" cy="11" r="2"></circle>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-900 font-medium leading-relaxed flex-1 pt-2 md:pt-0">
                                        Translate user insights into informed and culturally relevant design decisions.
                                    </p>
                                </div>
                            </div>

                            {/* Takeaway 3 */}
                            <div className="w-full rounded-[30px] p-[4px]" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                <div className="w-full h-full rounded-[26px] bg-white p-6 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0 text-black">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        </svg>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-900 font-medium leading-relaxed flex-1 pt-2 md:pt-0">
                                        Understood how to balance creativity with business goals and plan for future design scalability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional content sections can be added here */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UBSCaseStudy;
