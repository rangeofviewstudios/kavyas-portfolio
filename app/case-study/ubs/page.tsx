import UBSCaseStudy from '@/pages/UBSCaseStudy';

export const metadata = {
    title: "UBS Banking Case Study - Future of Banking for Gen Z",
    description: "SCADpro collaboration with UBS: Reimagining digital banking experiences for Gen Z through comprehensive user research, personas, and innovative UX solutions.",
    keywords: [
        "UBS UX design",
        "banking app design",
        "Gen Z banking",
        "fintech UX",
        "SCADpro",
        "financial services design",
        "UX case study",
        "digital banking"
    ],
    openGraph: {
        title: "UBS - Future of Banking for Gen Z | Kavya Ray",
        description: "Reimagining banking for Gen Z through user-centered design",
        url: "https://kavyaray.com/case-study/ubs",
        type: "article",
        images: [
            {
                url: "/images/ubs-cover.webp",
                width: 2400,
                height: 1500,
                alt: "Key4 Banking concept for UBS shown on a laptop, with expense and balance notifications floating beside it",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UBS Future of Banking Case Study",
        description: "SCADpro collaboration: Designing Gen Z banking experiences",
        images: ["/images/ubs-cover.webp"],
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/ubs",
    },
};

export default function UBSPage() {
    return <UBSCaseStudy />;
}
