
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function LoomaPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="w-full">
                <img
                    src="/images/looma/looma1.png"
                    alt="LOOMA Project Hero"
                    className="w-full h-auto object-cover"
                />
            </div>

            <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
                {/* Project Header */}
                <div className="max-w-5xl mx-auto mb-10 sm:mb-20 animate-fade-in-up">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium mb-16 text-black">LOOMA x StartUp</h1>

                    {/* Project Details Grid */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 mb-20 border-b border-gray-100 pb-10 md:border-none md:pb-0">
                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Role:</h3>
                            <p className="text-base font-medium text-gray-900">UX Researcher/Presenter</p>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Industry:</h3>
                            <p className="text-base font-medium text-gray-900">Wearable Technology</p>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-black">Duration:</h3>
                            <p className="text-base font-medium text-gray-900">1 Week</p>
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
                            Competed in a fast-paced innovation sprint to design a future-focused wearable.
                            Explored user needs, emerging tech, and real-world impact to develop a concept that
                            enhances everyday life through thoughtful, human-centered design.
                        </p>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="max-w-5xl mx-auto mb-10 sm:mb-20 animate-fade-in-up">
                    <div
                        className="w-full relative overflow-hidden flex flex-col md:flex-row items-center md:items-end"
                        style={{
                            borderRadius: '100px 100px 100px 0',
                            backgroundColor: '#343F28',
                            minHeight: '400px'
                        }}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-[45%] flex-shrink-0 relative z-10 pt-10 px-8 md:pl-12 md:pr-0">
                            <img
                                src="/images/looma/loomaquote.png"
                                alt="User Quote"
                                className="w-full h-auto object-contain rounded-bl-3xl transform translate-y-2"
                            />
                        </div>

                        {/* Text Side */}
                        <div className="flex-1 p-8 md:p-12 md:pb-16 text-white relative z-20">
                            <blockquote className="text-2xl md:text-3xl font-medium leading-normal mb-8">
                                "Family is the foundation. The real challenge is building the tool that can anchor the present moment to protect those bonds."
                            </blockquote>
                            <cite className="not-italic text-lg text-blue-100 block">
                                -MyeongJa 명자
                            </cite>
                        </div>
                    </div>
                </div>

                {/* The Situation at Hand Section */}
                <div className="max-w-5xl mx-auto mb-10 sm:mb-20 animate-fade-in-up">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 text-black">The Situation at Hand</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        People with Alzheimer's and dementia struggle with memory loss, affecting their ability to recognize familiar faces, maintain daily routines, and navigate their surroundings. This not only leads to confusion and anxiety for the individuals but also creates emotional and logistical challenges for their caregivers, family, and friends, who often feel overwhelmed and helpless in providing adequate support.
                    </p>
                </div>

                {/* Looma Question Section */}
                <div className="w-full mb-10 sm:mb-20 animate-fade-in-up">
                    <div
                        className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
                        style={{
                            backgroundImage: 'url(/images/looma/looma3.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10"></div>

                        {/* Text content */}
                        <div className="relative z-20 text-center px-6 max-w-4xl">
                            <h2 className="text-4xl md:text-6xl font-medium text-white leading-tight">
                                If she had <span className="font-bold">Looma</span>, could it help her remember her loved ones?
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Our Approach Section */}
                <div className="max-w-5xl mx-auto mb-10 sm:mb-20 animate-fade-in-up">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 text-black">Our Approach</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        To develop an product ecosystem centered around AR glasses that assist individuals with Alzheimer's and dementia by enhancing memory recall, providing routine reminders, and improving spatial awareness. The solution aims to empower caregivers and loved ones with real-time insights and support, fostering a more independent life for patients while easing emotional burdens.
                    </p>
                </div>

                {/* AR Glasses Demo Image */}
                <div className="w-full mb-10 sm:mb-20 animate-fade-in-up">
                    <img
                        src="/images/looma/looma4.png"
                        alt="Looma AR Glasses Demo"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Research Section */}
                <div className="w-full mb-10 sm:mb-20 animate-fade-in-up bg-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Section Header */}
                        <div className="mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4" style={{ color: '#343F28' }}>
                                Research
                            </h2>
                            <p className="text-xl text-gray-800">
                                Understanding the Global Amount of Alzheimer Cases and its impact.
                            </p>
                        </div>

                        {/* World Map with Data Points */}
                        <div className="relative w-full" style={{ minHeight: '500px' }}>
                            {/* World Map Background Image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src="/images/looma/looma5.png"
                                    alt="World Map"
                                    className="w-full h-auto object-contain opacity-40"
                                />
                            </div>

                            {/* Data Bubbles */}
                            {/* North America - 6.7M */}
                            <div className="absolute" style={{ left: '18%', top: '35%' }}>
                                <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full text-white font-bold text-xl md:text-2xl shadow-lg" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                    6.7M
                                </div>
                            </div>

                            {/* Europe - 9.7M */}
                            <div className="absolute" style={{ left: '45%', top: '25%' }}>
                                <div className="flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full text-white font-bold text-2xl md:text-3xl shadow-lg" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                    9.7M
                                </div>
                            </div>

                            {/* Asia - 15.4M */}
                            <div className="absolute" style={{ left: '70%', top: '30%' }}>
                                <div className="flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full text-white font-bold text-3xl md:text-4xl shadow-lg" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                    15.4M
                                </div>
                            </div>

                            {/* Africa - 2.13M */}
                            <div className="absolute" style={{ left: '48%', top: '55%' }}>
                                <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full text-white font-bold text-lg md:text-xl shadow-lg" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                    2.13M
                                </div>
                            </div>

                            {/* South America - 4.5M */}
                            <div className="absolute" style={{ left: '25%', top: '65%' }}>
                                <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full text-white font-bold text-xl md:text-2xl shadow-lg" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                    4.5M
                                </div>
                            </div>

                            {/* Australia - 400K */}
                            <div className="absolute" style={{ left: '82%', top: '70%' }}>
                                <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full text-white font-bold text-base md:text-lg shadow-lg" style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)' }}>
                                    400K
                                </div>
                            </div>
                        </div>

                        {/* Leading Cause of Death Section */}
                        <div className="mt-10 sm:mt-20 bg-[#343F28]/10 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 text-black">
                                    N°7
                                </h3>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black">
                                    Leading Cause of Death
                                </h4>
                                <p className="text-lg md:text-xl text-black">
                                    According to the World Health Organization, Alzheimer's is the 7th leading cause of death globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Initial Target Audience Section */}
                <div className="max-w-6xl mx-auto mb-10 sm:mb-20 animate-fade-in-up">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 text-black">Initial Target Audience</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-16">
                        To develop an product ecosystem centered around AR glasses that assist individuals with Alzheimer's and dementia by enhancing memory recall, providing routine reminders, and improving spatial awareness. The solution aims to empower caregivers and loved ones with real-time insights and support, fostering a more independent life for patients while easing emotional burdens.
                    </p>

                    {/* Three Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-16">
                        {/* Patient/User Card */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border-4 border-gray-200">
                                <img
                                    src="/images/looma/looma6.png"
                                    alt="Patient/User"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="w-full text-white text-center py-4 px-6 font-semibold text-xl"
                                style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)', borderRadius: '11.146px' }}
                            >
                                Patient/User
                            </div>
                        </div>

                        {/* Family Members Card */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border-4 border-gray-200">
                                <img
                                    src="/images/looma/looma7.png"
                                    alt="Family Members"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="w-full text-white text-center py-4 px-6 font-semibold text-xl"
                                style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)', borderRadius: '11.146px' }}
                            >
                                Family Members
                            </div>
                        </div>

                        {/* Caregiver Card */}
                        <div className="flex flex-col items-center">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border-4 border-gray-200">
                                <img
                                    src="/images/looma/looma8.png"
                                    alt="Caregiver"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="w-full text-white text-center py-4 px-6 font-semibold text-xl"
                                style={{ background: 'linear-gradient(90deg, #2E6B5F 0%, #5AD1B9 100%)', borderRadius: '11.146px' }}
                            >
                                Caregiver
                            </div>
                        </div>
                    </div>

                    {/* How Might We Box */}
                    <div className="border-4 border-gray-300 rounded-3xl p-5 sm:p-8 md:p-12 bg-white">
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6 text-black">How Might We?</h3>
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                            How might we create a connected system that improves independence for Alzheimer's and dementia patients while easing the caregiving experience?
                        </p>
                    </div>
                </div>

                {/* Product Ecosystem Section */}
                <div className="w-full mb-10 sm:mb-20 animate-fade-in-up">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        {/* Facial Recognition - Text Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-semibold" style={{ color: '#343F28' }}>
                                    Facial Recognition
                                </h3>
                                <div className="w-24 h-1 bg-gray-800"></div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Our AR glasses help users identify family, friends, and caregivers with real-time facial recognition, reducing confusion and fostering emotional connection.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src="/images/looma/looma10.png"
                                    alt="Facial Recognition Glasses"
                                    className="w-full max-w-lg h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Spatial Awareness - Text Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-semibold" style={{ color: '#343F28' }}>
                                    Spatial Awareness
                                </h3>
                                <div className="w-24 h-1 bg-gray-800"></div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The glasses provide spatial guidance to help users move safely through familiar and unfamiliar environments, reducing disorientation and falls.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src="/images/looma/looma11.png"
                                    alt="Spatial Awareness Glasses"
                                    className="w-full max-w-lg h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Voice-Assisted Guidance - Image Left, Text Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                                <img
                                    src="/images/looma/looma12.png"
                                    alt="Voice-Assisted Guidance & Bone Conduction"
                                    className="w-full max-w-lg h-auto object-contain"
                                />
                            </div>
                            <div className="space-y-4 order-1 lg:order-2">
                                <h3 className="text-3xl md:text-4xl font-semibold" style={{ color: '#343F28' }}>
                                    Voice-Assisted Guidance & Bone Conduction Technology
                                </h3>
                                <div className="w-24 h-1 bg-gray-800"></div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Use Bone Conduction Technology or integrated with Air pods for clear voice-guided prompts that assist users with their daily tasks, reminders, and navigation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Functions Section */}
                <div className="max-w-6xl mx-auto mb-10 sm:mb-20 animate-fade-in-up">
                    {/* Mobile App Screens Image */}
                    <div className="w-full mb-16">
                        <img
                            src="/images/looma/looma13.png"
                            alt="Looma Mobile App Screens"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Main Functions List */}
                    <div className="space-y-8">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 sm:mb-12 text-black">Main Functions</h2>

                        {/* Caregivers Support Portal */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#343F28' }}>
                                    Caregivers Support Portal
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Caregivers receive real-time updates, alerts, and reports via a dedicated app, allowing them to provide timely assistance and monitor their loved one's well-being remotely.
                                </p>
                            </div>
                        </div>

                        {/* Health Tracking Integration */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#343F28' }}>
                                    Health Tracking Integration
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Seamlessly connects with Apple Watch and Air pods to track vital health metrics such as heart rate, movement, and sleep patterns, providing valuable insights for caregivers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Takeaways Section */}
                <div className="w-full mb-10 sm:mb-20 animate-fade-in-up">
                    {/* Glasses Hero Image */}
                    <div className="w-full bg-[#E8E4DD] py-20 mb-16">
                        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center">
                            <div className="relative">
                                <img
                                    src="/images/looma/looma11.png"
                                    alt="Looma Glasses"
                                    className="w-full max-w-3xl h-auto object-contain"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-8xl md:text-9xl font-bold text-white opacity-60" style={{ letterSpacing: '0.1em' }}>
                                        looma
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Takeaways Content */}
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 sm:mb-12" style={{ color: '#343F28' }}>Takeaways</h2>

                        <div className="space-y-6">
                            {/* Takeaway 1 - Collaboration */}
                            <div className="w-full rounded-[30px] p-[4px] bg-[#343F28]">
                                <div className="w-full h-full rounded-[26px] bg-white p-6 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0 text-black">
                                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-800 leading-relaxed font-medium text-center md:text-left">
                                        Learned the value of close collaboration between different majors under a tight time constraints.
                                    </p>
                                </div>
                            </div>

                            {/* Takeaway 2 - Innovation */}
                            <div className="w-full rounded-[30px] p-[4px] bg-[#343F28]">
                                <div className="w-full h-full rounded-[26px] bg-white p-6 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0 text-black">
                                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                            <path d="M2 2l7.586 7.586"></path>
                                            <circle cx="11" cy="11" r="2"></circle>
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-800 leading-relaxed font-medium text-center md:text-left">
                                        Learnt the importance of being innovative and how to present ideas well
                                    </p>
                                </div>
                            </div>

                            {/* Takeaway 3 - Business Balance */}
                            <div className="w-full rounded-[30px] p-[4px] bg-[#343F28]">
                                <div className="w-full h-full rounded-[26px] bg-white p-6 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0 text-black">
                                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-800 leading-relaxed font-medium text-center md:text-left">
                                        Understood how to balance creativity with business goals and plan for future design scalability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
