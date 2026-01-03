import type { Metadata } from 'next';
import '@fontsource/inter';
import '@fontsource/dm-sans';
import '@fontsource/playfair-display';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
    title: "Kavya's Portfolio | UX Designer",
    description: 'Portfolio of Kavya, a UX designer specializing in user-centered design, showcasing work with UBS, Porsche, Lowes, Aestura, and more.',
    keywords: ['UX Designer', 'Portfolio', 'User Experience', 'UI Design', 'Product Design'],
    authors: [{ name: 'Kavya' }],
    openGraph: {
        title: "Kavya's Portfolio",
        description: 'UX Designer Portfolio - SCADpro Projects',
        type: 'website',
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
                <Providers>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
                        {children}
                    </TooltipProvider>
                </Providers>
            </body>
        </html>
    );
}
