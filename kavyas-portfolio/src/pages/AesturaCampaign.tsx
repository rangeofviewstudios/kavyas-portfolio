import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AesturaCampaign = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <main>
                {/* Hero Section */}
                <div className="w-full relative bg-white">
                    {/* Container for the hero image and overlays */}
                    <div className="relative w-full max-w-[1440px] mx-auto">
                        <img
                            src="/images/aestura/aesturaheroimage.png"
                            alt="Aestura Hero"
                            className="w-full h-auto object-cover"
                        />

                        {/* Overlay Content - Absolute positioning to match design */}
                        {/* Note: Adjusting positions based on visual estimation */}
                        <div className="absolute top-[20%] left-[10%] space-y-4 hidden md:block">
                            {/* The Essence Edit Badge */}
                            <div className="inline-block px-8 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg">
                                <span className="text-[#6B8DD6] text-xl font-medium">The Essence Edit</span>
                            </div>

                            {/* Campaign Box */}
                            <div className="mt-4 p-8 rounded-3xl bg-gradient-to-br from-[#6B8DD6]/90 to-[#6B8DD6]/40 backdrop-blur-md text-white max-w-md shadow-xl border border-white/20">
                                <h2 className="text-3xl font-bold mb-2">Campaign</h2>
                                <p className="text-2xl font-light italic leading-tight">
                                    Bringing Seoul to<br />Your City
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Challenge Section */}
                <div className="container mx-auto px-6 py-20 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-black">Aestura Brand Challenge</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-l-0 md:border-l-0">
                        {/* Role */}
                        <div className="flex-1 md:pr-8 md:border-r border-gray-300 last:border-0 pl-4 md:pl-0 border-l-4 md:border-l-0 border-[#6B8DD6] md:border-transparent">
                            <h3 className="font-bold text-lg mb-2">Role:</h3>
                            <p className="text-gray-700">Project Manager</p>
                            <p className="text-gray-700">Led UX Designer</p>
                        </div>

                        {/* Industry */}
                        <div className="flex-1 md:px-8 md:border-r border-gray-300 pl-4 border-l-4 md:border-l-0 border-[#6B8DD6] md:border-transparent">
                            <h3 className="font-bold text-lg mb-2">Industry:</h3>
                            <p className="text-gray-700">Social Media Marketing Campaign</p>
                        </div>

                        {/* Duration */}
                        <div className="flex-1 md:px-8 md:border-r border-gray-300 pl-4 border-l-4 md:border-l-0 border-[#6B8DD6] md:border-transparent">
                            <h3 className="font-bold text-lg mb-2">Duration:</h3>
                            <p className="text-gray-700">1.5 Months</p>
                        </div>

                        {/* Location */}
                        <div className="flex-1 md:pl-8 pl-4 border-l-4 md:border-l-0 border-[#6B8DD6] md:border-transparent">
                            <h3 className="font-bold text-lg mb-2">Location:</h3>
                            <p className="text-gray-700">Atlanta, Georgia</p>
                        </div>
                    </div>

                    <div className="mt-16 text-gray-800 text-lg leading-relaxed max-w-4xl">
                        Qualified as a Semi-Finalist in AmorePacific's global brand challenge by developing a U.S. market entry strategy for Aestura, showcasing skills in research, strategy, and brand positioning.
                    </div>
                </div>

                {/* How Might We Section */}
                <div className="w-full relative min-h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/aestura/aesturaHMWimage.png"
                            alt="How Might We Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto py-20">
                        <h2 className="text-5xl md:text-6xl font-medium mb-12">How Might We?</h2>
                        <p className="text-3xl md:text-4xl md:leading-normal font-light">
                            We're turning Aestura into the skincare essential consumers trust, crave, and can't live without.
                        </p>
                    </div>
                </div>

                {/* Research Section */}
                <div className="container mx-auto px-6 py-20 max-w-6xl">
                    <h2 className="text-5xl font-semibold mb-12" style={{ color: '#2E6B5F' }}>
                        Research
                    </h2>

                    <div className="mb-16">
                        <h3 className="text-3xl font-semibold text-foreground mb-6">
                            Understanding the Skin Care Market
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed max-w-4xl">
                            This project aimed to uncover hidden friction points within the skincare shopping experience to better understand user behaviors, challenges, and motivations. By identifying these insights, we sought to address the distinct needs of both customers and employees, creating a more cohesive, efficient, and enjoyable experience for everyone involved.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 relative">
                        {/* Left Card - Image Background */}
                        <div className="relative flex-[1.2] rounded-[32px] overflow-hidden min-h-[400px] group">
                            <div className="absolute inset-0">
                                <img
                                    src="/images/aestura/aesturaHMWimage.png"
                                    alt="Research Background"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-center p-12 max-w-xl">
                                <p className="text-white text-2xl md:text-3xl leading-snug font-light">
                                    <span className="font-bold">Younger consumers</span>, especially U.S. Gen Z, strongly prefer <span className="font-bold">phygital</span> experiences that combine <span className="font-bold">physical interactions</span> with <span className="font-bold">digital engagement</span> to drive <span className="font-bold">social shareability</span> and <span className="font-bold">brand loyalty</span>.
                                </p>
                            </div>
                        </div>

                        {/* Right Card - Blue Stats */}
                        <div className="relative flex-1 rounded-[32px] bg-[#5B85F8] text-white p-12 min-h-[400px] flex flex-col overflow-hidden">
                            {/* Top Stats */}
                            <div className="relative z-10">
                                <div className="text-[120px] font-bold leading-none tracking-tighter mb-4">92%</div>
                                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-black font-bold text-lg shadow-lg">
                                    +61% growth
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 right-12 transform -translate-y-1/2 flex flex-col items-center">
                                {/* Arrow */}
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="mb-4">
                                    <path d="M12 19V5M12 5l-7 7M12 5l7 7" />
                                </svg>

                                {/* Dashed Line */}
                                <svg width="100" height="100" className="absolute top-12 left-[-60px] opacity-50">
                                    <path d="M100,100 Q50,100 0,0" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 8" />
                                </svg>

                                {/* Phone Icon */}
                                <div className="w-24 h-44 border-4 border-white rounded-3xl flex items-center justify-center relative">
                                    <div className="w-12 h-1 bg-white absolute top-4 rounded-full"></div>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                        <circle cx="18" cy="5" r="3" />
                                        <circle cx="6" cy="12" r="3" />
                                        <circle cx="18" cy="19" r="3" />
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                    </svg>
                                </div>
                                <div className="absolute -right-8 top-20">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Floating Center Card */}
                        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-[#C3D0E5] p-8 rounded-3xl shadow-xl w-[300px] z-20 text-center">
                            <div className="text-5xl font-bold text-black mb-2">57%</div>
                            <div className="text-sm font-medium text-gray-800">growth of phygital experiences</div>
                        </div>
                    </div>
                </div>

                {/* Customer Profile Section */}
                <div className="container mx-auto px-6 py-20 max-w-7xl relative">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                        <h2 className="text-5xl md:text-6xl text-black font-light">
                            Customer <span className="italic font-light text-[#5B85F8]">PROFILE</span>
                        </h2>
                        <blockquote className="md:max-w-md text-right mt-8 md:mt-0">
                            <p className="text-[#5B85F8] text-lg font-medium leading-relaxed">
                                "I used to think sensitivity meant I had to compromise. Now I know better. Aestura helped me understand the balance my skin barrier needs."
                            </p>
                        </blockquote>
                    </div>

                    <div className="relative min-h-[800px] hidden md:block">
                        {/* Central Face Image */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-20">
                            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src="/images/aestura/AesturaCustomerImage.png"
                                    alt="Customer Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Arc Layout Grid */}
                        {/* 
                            We need 5 items in an arc. 
                            We can use absolute positioning with specific coordinates based on a circle equation or just estimated % values.
                            Let's try estimated % positions for a "smile" arc below the face.
                         */}

                        {/* Item 1 - Far Left */}
                        <div className="absolute top-[150px] left-[0%] w-[18%] flex flex-col items-center text-center group">
                            {/* Connector Line */}
                            <div className="h-24 w-px bg-[#B0C4DE] mb-4 absolute -top-20 right-0 hidden lg:block rotate-[-45deg] origin-bottom"></div>

                            {/* Card Shape */}
                            <div className="w-full aspect-square bg-[#B0C4DE]/40 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[20px] p-6 flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
                                <img src="/images/aestura/AesturaCustomer1.png" alt="Icon 1" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-[#3E5085] font-bold text-lg mb-3">K-Beauty Builds Skin Knowledge</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                In Korea, skincare is a cultural tradition taught from a young age, centered on prevention, consistency, and care. This approach is reshaping how U.S. consumers understand skin health, giving Aestura an opportunity to lead with education and expertise rooted in that tradition.
                            </p>
                        </div>

                        {/* Item 2 - Left */}
                        <div className="absolute top-[280px] left-[20%] w-[18%] flex flex-col items-center text-center">
                            {/* Card Shape */}
                            <div className="w-full aspect-square bg-[#B0C4DE]/60 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[20px] p-6 flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300 rotate-[-10deg]">
                                <img src="/images/aestura/AesturaCustomer2.png" alt="Icon 2" className="w-16 h-16 object-contain rotate-[10deg]" />
                            </div>
                            <h3 className="text-[#3E5085] font-bold text-lg mb-3">Preventative {'>'} Corrective</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Skincare is becoming proactive. Younger audiences are investing in their skin earlier, prioritizing maintenance over repair. Aestura aligns with this shift, offering long-term solutions that strengthen the skin barrier and support lasting skin health.
                            </p>
                        </div>

                        {/* Item 3 - Center (Bottom) */}
                        <div className="absolute top-[350px] left-[41%] w-[18%] flex flex-col items-center text-center">
                            {/* Card Shape */}
                            <div className="w-full aspect-square bg-[#B0C4DE]/80 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[20px] p-6 flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
                                <img src="/images/aestura/AesturaCustomer3.png" alt="Icon 3" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="w-px h-12 bg-[#B0C4DE] mx-auto mb-4"></div>
                            <h3 className="text-[#3E5085] font-bold text-lg mb-3">Seeking Gentle, Science-Backed Care</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Consumers are shifting away from harsh, one-size-fits-all routines. They want effective, dermatologist-developed products that deliver results without compromising skin health. Aestura meets this need with formulas rooted in medical science and built for sensitive skin.
                            </p>
                        </div>

                        {/* Item 4 - Right */}
                        <div className="absolute top-[280px] right-[20%] w-[18%] flex flex-col items-center text-center">
                            {/* Card Shape */}
                            <div className="w-full aspect-square bg-[#B0C4DE]/60 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[20px] p-6 flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300 rotate-[10deg]">
                                <img src="/images/aestura/AesturaCustomer4.png" alt="Icon 4" className="w-16 h-16 object-contain rotate-[-10deg]" />
                            </div>
                            <h3 className="text-[#3E5085] font-bold text-lg mb-3">Sensitive Skin Is a Growing Concern</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                More Americans are experiencing skin sensitivity, irritation, and compromised barriers—whether due to stress, overuse of actives, medications, or environmental triggers. There's a rising demand for solutions that restore and protect, especially those backed by research and long-term results.
                            </p>
                        </div>

                        {/* Item 5 - Far Right */}
                        <div className="absolute top-[150px] right-[0%] w-[18%] flex flex-col items-center text-center">
                            {/* Card Shape */}
                            <div className="w-full aspect-square bg-[#B0C4DE]/40 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[20px] rounded-br-[20px] p-6 flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
                                <img src="/images/aestura/AesturaCustomer5.png" alt="Icon 5" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-[#3E5085] font-bold text-lg mb-3">Creditable & Trustworthy Brands</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                In a market overwhelmed with trend-driven claims, consumers crave transparency, integrity, and expertise. Aestura's pharmaceutical origins set it apart as a brand that not only promises results, but proves them.
                            </p>
                        </div>
                    </div>

                    {/* Mobile View (Stacked) */}
                    <div className="md:hidden space-y-12 mt-12">
                        <div className="flex justify-center mb-8">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img src="/images/aestura/AesturaCustomerImage.png" alt="Customer" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {[
                            {
                                icon: "/images/aestura/AesturaCustomer1.png",
                                title: "K-Beauty Builds Skin Knowledge",
                                desc: "In Korea, skincare is a cultural tradition taught from a young age, centered on prevention, consistency, and care. This approach is reshaping how U.S. consumers understand skin health, giving Aestura an opportunity to lead with education and expertise rooted in that tradition."
                            },
                            {
                                icon: "/images/aestura/AesturaCustomer2.png",
                                title: "Preventative > Corrective",
                                desc: "Skincare is becoming proactive. Younger audiences are investing in their skin earlier, prioritizing maintenance over repair. Aestura aligns with this shift, offering long-term solutions that strengthen the skin barrier and support lasting skin health."
                            },
                            {
                                icon: "/images/aestura/AesturaCustomer3.png",
                                title: "Seeking Gentle, Science-Backed Care",
                                desc: "Consumers are shifting away from harsh, one-size-fits-all routines. They want effective, dermatologist-developed products that deliver results without compromising skin health. Aestura meets this need with formulas rooted in medical science and built for sensitive skin."
                            },
                            {
                                icon: "/images/aestura/AesturaCustomer4.png",
                                title: "Sensitive Skin Is a Growing Concern",
                                desc: "More Americans are experiencing skin sensitivity, irritation, and compromised barriers—whether due to stress, overuse of actives, medications, or environmental triggers. There's a rising demand for solutions that restore and protect, especially those backed by research and long-term results."
                            },
                            {
                                icon: "/images/aestura/AesturaCustomer5.png",
                                title: "Creditable & Trustworthy Brands",
                                desc: "In a market overwhelmed with trend-driven claims, consumers crave transparency, integrity, and expertise. Aestura's pharmaceutical origins set it apart as a brand that not only promises results, but proves them."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#F5F8FC] p-8 rounded-3xl">
                                <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain mb-4 mx-auto" />
                                <h3 className="text-[#3E5085] font-bold text-xl mb-4 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Philosophy Section */}
                <div
                    className="w-full py-20 relative overflow-hidden mt-20 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/images/aestura/aesturaimage.png)' }}
                >
                    {/* Decorative Bubble - Top Left */}
                    <div className="absolute top-[-50px] left-[-50px] w-48 h-48 rounded-full overflow-hidden opacity-80 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm rounded-full border border-white/20 shadow-inner"></div>
                        {/* We can simulate a bubble look with CSS or if we had the asset */}
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[600px]">

                            {/* Left Card */}
                            <div className="md:col-span-4 bg-white rounded-2xl p-8 md:p-10 shadow-lg transform md:-rotate-1 transition-transform hover:rotate-0">
                                <div className="border-l-4 border-[#3E5085] pl-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                        Skincare Without the Guesswork
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    In a market flooded with trends, actives, and conflicting advice, <span className="font-bold">many Americans are overwhelmed</span>, layering solutions without understanding the science behind them. Aestura <span className="font-bold">cuts through the noise</span> with gentle, science-backed skincare that simplifies routines and strengthens skin at its core.
                                </p>
                            </div>

                            {/* Center Spacer for Background Image Visibility */}
                            <div className="md:col-span-4 hidden md:block">
                                {/* Empty spacer to let the hand/product in background show through */}
                            </div>

                            {/* Right Card */}
                            <div className="md:col-span-4 bg-white rounded-2xl p-8 md:p-10 shadow-lg transform md:rotate-1 transition-transform hover:rotate-0">
                                <div className="border-l-4 border-[#3E5085] pl-4 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                        Prevention Over Perfection
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    In the United States, <span className="font-bold">skincare is often reactive</span>, driven by trends and quick fixes. In contrast, Korean skincare emphasizes early education, prevention, and long-term skin health. Aestura brings this philosophy to a crowded market by offering science-backed solutions that simplify routines and build <span className="font-bold">lasting skin resilience.</span>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Decorative Bubble - Bottom Left */}
                    <div className="absolute bottom-[-30px] left-[5%] w-24 h-24 rounded-full overflow-hidden opacity-60 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm rounded-full border border-white/20 shadow-inner"></div>
                    </div>
                </div>

                {/* Campaign Strategy Section */}
                <div className="container mx-auto px-6 py-24 max-w-7xl">
                    <div className="mb-12">
                        <h2 className="text-5xl font-semibold mb-4" style={{ color: '#2E6B5F' }}>
                            Campaign Strategy
                        </h2>
                        <p className="text-xl text-gray-800">
                            From Seoul to your City
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column - Phone Mockup */}
                        <div className="lg:col-span-4 relative rounded-[40px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #A4C8E6 0%, #FFFFFF 100%)' }}>
                            <img
                                src="/images/aestura/AesturaHandMockup.png"
                                alt="Social Media Campaign Mockup"
                                className="w-full h-full object-cover"
                            />

                            {/* Glass Overlay Card */}
                            <div className="absolute bottom-8 left-6 right-6 p-6 rounded-2xl border border-white/40 shadow-xl backdrop-blur-md bg-white/30">
                                <h3 className="text-white text-xl font-bold mb-2">Social Media Campaign</h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    Our social strategy brings Aestura's <span className="font-bold">AtoBarrier365 cream</span> to life online: acting as its <span className="font-bold">digital ambassador</span>. Through community-driven skincare tips, barrier-care challenges, and habit-building content, we educate U.S. users on how it supports sensitive skin, is derma-certified, and designed to be shared.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Frames Grid */}
                        <div className="lg:col-span-8 flex flex-col gap-6">

                            {/* Row 1: Campaign Introduction/Teaser */}
                            <div className="relative">
                                <div className="inline-block bg-black text-white px-6 py-2 rounded-t-xl rounded-br-xl text-lg font-bold italic mb-[-2px] relative z-20">
                                    1. Campaign Introduction/ Teaser
                                </div>
                                <div className="bg-[#4D76D6] rounded-3xl p-6 pt-8 relative z-10 w-full">
                                    <div className="grid grid-cols-5 gap-3">
                                        <img src="/images/aestura/Aesturaframe1.png" alt="Frame 1" className="w-full rounded-lg shadow-sm" />
                                        <img src="/images/aestura/Aesturaframe2.png" alt="Frame 2" className="w-full rounded-lg shadow-sm" />
                                        <img src="/images/aestura/Aesturaframe3.png" alt="Frame 3" className="w-full rounded-lg shadow-sm" />
                                        <img src="/images/aestura/Aesturaframe4.png" alt="Frame 4" className="w-full rounded-lg shadow-sm" />
                                        <img src="/images/aestura/Aesturaframe5.png" alt="Frame 5" className="w-full rounded-lg shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Split columns */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Pop up Reveal */}
                                <div className="flex-[1.5]">
                                    <div className="inline-block bg-black text-white px-6 py-2 rounded-t-xl rounded-br-xl text-lg font-bold italic mb-[-2px] relative z-20">
                                        2. Pop up Reveal
                                    </div>
                                    <div className="bg-[#2E4DA7] rounded-3xl p-6 pt-8 relative z-10 h-full">
                                        <div className="grid grid-cols-3 gap-3">
                                            <img src="/images/aestura/Aesturaframe6.png" alt="Frame 6" className="w-full rounded-lg shadow-sm" />
                                            <img src="/images/aestura/Aesturaframe7.png" alt="Frame 7" className="w-full rounded-lg shadow-sm" />
                                            <img src="/images/aestura/Aesturaframe8.png" alt="Frame 8" className="w-full rounded-lg shadow-sm" />
                                        </div>
                                    </div>
                                </div>

                                {/* UGC Content */}
                                <div className="flex-1">
                                    <div className="inline-block bg-black text-white px-6 py-2 rounded-t-xl rounded-br-xl text-lg font-bold italic mb-[-2px] relative z-20">
                                        3. UGC Content
                                    </div>
                                    <div className="bg-[#214099] rounded-3xl p-6 pt-8 relative z-10 h-full">
                                        <div className="grid grid-cols-2 gap-3">
                                            <img src="/images/aestura/Aesturaframe9.png" alt="Frame 9" className="w-full rounded-lg shadow-sm" />
                                            <img src="/images/aestura/Aesturaframe10.png" alt="Frame 10" className="w-full rounded-lg shadow-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Pop-Up Experience Section */}
                <div className="w-full relative h-[700px] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/aestura/aesturaHMWimage.png"
                            alt="Aestura Barrier Bar Pop-Up"
                            className="w-full h-full object-cover"
                        />
                        {/* Bubble - Top Right */}
                        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full overflow-hidden opacity-80 pointer-events-none z-10">
                            <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm rounded-full border border-white/20 shadow-inner"></div>
                        </div>
                        {/* Bubble - Bottom Left */}
                        <div className="absolute bottom-[-50px] left-[5%] w-40 h-40 rounded-full overflow-hidden opacity-60 pointer-events-none z-10">
                            <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm rounded-full border border-white/20 shadow-inner"></div>
                        </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-16 left-6 md:left-20 max-w-4xl z-20">
                        <div className="bg-gradient-to-r from-[#214099]/60 to-[#2E4DA7]/40 backdrop-blur-md border border-white/20 rounded-[32px] p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
                                Pop-Up Experience
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed font-light">
                                Step into the Aestura Barrier Bar, an immersive wellness pop-up designed to educate, engage, and empower. Guests will enjoy skin-boosting drinks, professional consultations with dermatologists, and hands-on product testing of the AtoBarrier365 Cream. Through <span className="font-bold">augmented reality animatronics</span>, visitors will uncover the science behind Aestura, learn how the AtoBarrier365 Cream are made, and hear real stories from sensitive skin users. It’s <span className="font-bold">skincare education reimagined</span> — sensory, social, and scientifically backed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Brand Presence & Opportunity Section */}
                <div className="container mx-auto px-6 py-24 max-w-7xl">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-black">
                            How We Can Establish a Presence in the USA
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
                            Aestura is well-known in Korea for its science-backed skincare for sensitive skin, but this recognition hasn't carried over to the U.S. market. Many U.S. consumers are <span className="font-bold">unaware</span> of the brand or don't understand what sets it apart. To bridge this gap, we want to help Aestura highlight its strengths in dermatological care and build <span className="font-bold">trust</span> with a new audience through clear, relatable experiences.
                        </p>
                    </div>

                    <div className="rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-xl bg-[#839CD8]">
                        {/* Note: Using a color close to the image reference, likely a periwinkle shade */}

                        {/* Left Side - Image */}
                        <div className="md:w-[40%] bg-[#A4C0E8] relative flex items-center justify-center p-8">
                            <img
                                src="/images/aestura/AesturaSuitcase.png"
                                alt="From Seoul to Your City"
                                className="w-full h-auto object-contain max-w-md mix-blend-multiply"
                            />
                        </div>

                        {/* Right Side - Brand Opportunity */}
                        <div className="md:w-[60%] p-10 md:p-14 flex flex-col justify-center text-white">
                            <div className="border-l-4 border-[#3E5085] pl-6 mb-8">
                                <h3 className="text-3xl md:text-4xl italic font-medium leading-tight">
                                    Brand<br />Opportunity
                                </h3>
                            </div>

                            <p className="text-lg md:text-xl leading-relaxed font-light">
                                Aestura is our <span className="font-bold">estuary</span>, a bridge between science and care where sensitive skin meets trusted, derma-certified solutions. In Korea, skincare is taught early as a practice of prevention and respect. We aim to bring that same <span className="font-bold">philosophy to the U.S.</span>, guiding consumers toward a brand that truly understands and supports their skin.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Strategic Impact Section */}
                <div className="container mx-auto px-6 py-24 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
                        <h2 className="text-5xl md:text-6xl text-black font-light leading-tight">
                            Strategic<br />
                            <span className="italic font-light text-[#5B85F8]">Impact</span>
                        </h2>
                        <p className="text-base text-gray-700 leading-relaxed max-w-2xl text-right ml-auto">
                            Our strategy is to <span className="font-bold">educate and engage U.S. consumers</span> around Aestura's AtoBarrier365 Cream by highlighting how it supports and strengthens sensitive skin. For Aestura's first in-person U.S. launch, we are reimagining the full experience through pop-ups, immersive installations, and social media tailored to this market. By emphasizing its clinically backed and derma-certified formula, we aim to build trust in its long-lasting hydration, low irritation, and proven results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg z-10 relative">
                                <img src="/images/aestura/AesturaImpact.png" alt="Impact 1" className="w-full h-full object-cover" />
                            </div>
                            {/* Arrow for desktop */}
                            <div className="hidden md:block absolute top-24 -right-4 z-0">
                                <svg width="40" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h3 className="text-lg font-bold mb-3">
                                Education – "Science You Can Feel"
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                We <span className="font-bold">simplify the science</span> behind sensitive skin care, making clinical concepts like ceramides and skin barriers easy to understand through AR and product experiences.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg z-10 relative">
                                <img src="/images/aestura/AesturaImpact2.png" alt="Impact 2" className="w-full h-full object-cover" />
                            </div>
                            {/* Arrow for desktop */}
                            <div className="hidden md:block absolute top-24 -right-4 z-0">
                                <svg width="40" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h3 className="text-lg font-bold mb-3">
                                Awareness – "From Seoul to Your City"
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                We introduce Aestura to the U.S. through immersive pop-up tours, local creator partnerships, and shareable content that <span className="font-bold">meets consumers where they are.</span>
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg z-10 relative">
                                <img src="/images/aestura/AesturaImpact3.png" alt="Impact 3" className="w-full h-full object-cover" />
                            </div>
                            {/* Arrow for desktop */}
                            <div className="hidden md:block absolute top-24 -right-4 z-0">
                                <svg width="40" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h3 className="text-lg font-bold mb-3">
                                Trust & Clinical Credibility – "Backed by Experts, Loved by Skin"
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                We highlight Aestura's derma-certified, clinically tested formulation to <span className="font-bold">build confidence</span> through professional consultations, ingredient transparency, and user proof.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg z-10 relative">
                                <img src="/images/aestura/AesturaImpact4.png" alt="Impact 4" className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-lg font-bold mb-3">
                                Community & Habit Building – "Sensitive, But Strong Together"
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                We create routines, challenges, and conversations that make caring for sensitive skin a daily habit — and connect users through the <span className="font-bold">#SensitiveButStrong mindset.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Takeaways Section */}
                <div className="container mx-auto px-6 py-24 max-w-5xl">
                    <h2 className="text-5xl font-semibold mb-12 text-[#2E6B5F]">
                        Takeaways
                    </h2>

                    <div className="space-y-6">
                        {/* Takeaway 1 */}
                        <div className="w-full flex items-center p-8 rounded-[30px] border-[3px] border-[#8CBFB5] bg-white gap-8 transition-transform hover:scale-[1.02]">
                            <div className="flex-shrink-0">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <p className="text-lg font-medium text-black">
                                Learned the value of close collaboration between different majors under a tight time constraints.
                            </p>
                        </div>

                        {/* Takeaway 2 */}
                        <div className="w-full flex items-center p-8 rounded-[30px] border-[3px] border-[#8CBFB5] bg-white gap-8 transition-transform hover:scale-[1.02]">
                            <div className="flex-shrink-0">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.731 2.269a2.625 2.625 0 1 1 3.712 3.712l-2.06 2.06-9.88 9.88L2 22l4.08-11.5 9.88-9.88 2.06-2.06zM15 7l3.75 3.75" />
                                </svg>
                            </div>
                            <p className="text-lg font-medium text-black">
                                Learnt the importance of being innovative and how to present ideas well
                            </p>
                        </div>

                        {/* Takeaway 3 */}
                        <div className="w-full flex items-center p-8 rounded-[30px] border-[3px] border-[#8CBFB5] bg-white gap-8 transition-transform hover:scale-[1.02]">
                            <div className="flex-shrink-0">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <p className="text-lg font-medium text-black">
                                Understood how to balance creativity with business goals and plan for future design scalability.
                            </p>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default AesturaCampaign;
