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
    },
    twitter: {
        card: "summary_large_image",
        title: "UBS Future of Banking Case Study",
        description: "SCADpro collaboration: Designing Gen Z banking experiences",
    },
    alternates: {
        canonical: "https://kavyaray.com/case-study/ubs",
    },
};

export default function UBSPage() {
    return <UBSCaseStudy />;
}
