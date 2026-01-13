import { Metadata } from 'next';

export const siteConfig = {
    name: "Kavya Ray",
    description: "UX Designer specializing in user-centered design and research",
    url: "https://kavyaray.com",
    author: "Kavya Ray",
    keywords: [
        "UX Designer",
        "Product Designer",
        "User Experience",
        "Portfolio",
        "SCAD",
        "SCADpro",
        "UI Design",
        "User Research",
        "Interaction Design",
        "Design Thinking"
    ],
};

export function generateMetadata({
    title,
    description,
    keywords = [],
    path = '',
    image,
}: {
    title: string;
    description: string;
    keywords?: string[];
    path?: string;
    image?: string;
}): Metadata {
    const url = `${siteConfig.url}${path}`;
    const ogImage = image || `${siteConfig.url}/images/kavyaportimage1.png`;

    return {
        title,
        description,
        keywords: [...siteConfig.keywords, ...keywords],
        authors: [{ name: siteConfig.author }],
        creator: siteConfig.author,
        publisher: siteConfig.author,
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
            creator: '@kavyaray',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}
