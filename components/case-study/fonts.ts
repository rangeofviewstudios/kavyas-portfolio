import { Geist, Geist_Mono } from "next/font/google";

/* Case study type: Geist (the homepage font) for everything, Geist Mono only for small labels,
   section numbers and data captions. Exposed as CSS variables; see CaseStudyMain in CaseStudyKit. */
export const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-geist", display: "swap" });
export const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist-mono", display: "swap" });
