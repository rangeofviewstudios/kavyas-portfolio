import type { ReactNode } from 'react';

/** Wraps every /case-study/* page so app/globals.css can widen their layout columns in one place (see `.case-study`). */
export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return <div className="case-study">{children}</div>;
}
