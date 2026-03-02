import type { Metadata } from 'next';
import Script from 'next/script';
import '@fontsource/inter';
import '@fontsource/dm-sans';
import '@fontsource/playfair-display';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from '@/components/Analytics';

export const metadata: Metadata = {
    title: {
        default: "Kavya Ray | UX Designer Portfolio",
        template: "%s | Kavya Ray"
    },
    description: 'UX Designer specializing in user-centered design and research. Showcasing projects with UBS, Porsche, Lowe\'s, Aestura, and LOOMA. SCAD Graduate Student.',
    keywords: [
        'UX Designer',
        'Product Designer',
        'User Experience',
        'Portfolio',
        'SCAD',
        'SCADpro',
        'UI Design',
        'User Research',
        'Interaction Design',
        'Kavya Ray',
        'Design Thinking',
        'UX Portfolio'
    ],
    authors: [{ name: 'Kavya Ray' }],
    creator: 'Kavya Ray',
    publisher: 'Kavya Ray',
    metadataBase: new URL('https://kavyaray.com'),
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
            { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
            { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' }
        ]
    },
    manifest: '/site.webmanifest',
    openGraph: {
        title: "Kavya Ray | UX Designer Portfolio",
        description: 'UX Designer specializing in user-centered design. Featuring SCADpro collaborations with UBS, Porsche, Lowe\'s, and more.',
        url: 'https://kavyaray.com',
        siteName: 'Kavya Ray Portfolio',
        images: [
            {
                url: '/images/kavyaportimage1.png',
                width: 1200,
                height: 630,
                alt: 'Kavya Ray - UX Designer Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Kavya Ray | UX Designer Portfolio",
        description: 'UX Designer specializing in user-centered design and research',
        images: ['/images/kavyaportimage1.png'],
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
    verification: {
        google: 'your-google-site-verification-code',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-5ZG5CZJC8H"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-5ZG5CZJC8H');
                    `}
                </Script>
                <Providers>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
                        {children}
                    </TooltipProvider>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
