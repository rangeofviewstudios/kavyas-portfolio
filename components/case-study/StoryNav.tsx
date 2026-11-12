'use client';

import { useEffect, useState } from "react";

type Chapter = { id: string; n: number; label: string };

/*
  Chapter nav: a small pill fixed to the bottom of the screen that shows where you are in the story
  (00 Overview → 05 Impact) and jumps to any chapter. It reads the sections marked with data-chapter,
  appears once you scroll past the title, and hides again at the end of the case study.
*/
export function StoryNav() {
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [active, setActive] = useState<string | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const els = [...document.querySelectorAll<HTMLElement>("main section[data-chapter]")];
        setChapters(els.map((el) => ({ id: el.id, n: Number(el.dataset.n ?? 0), label: el.dataset.chapter ?? "" })));

        const onScroll = () => {
            const mid = window.innerHeight * 0.45;
            let current: string | null = null;
            for (const el of els) if (el.getBoundingClientRect().top <= mid) current = el.id;
            const last = els[els.length - 1];
            const pastEnd = last ? last.getBoundingClientRect().bottom < mid : false;
            setActive(current);
            setVisible(window.scrollY > 500 && !pastEnd);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    if (chapters.length < 2) return null;

    return (
        <nav
            aria-label="Case study chapters"
            className="fixed bottom-5 left-1/2 z-40 max-w-[calc(100vw-32px)] -translate-x-1/2 transition-[opacity,transform] duration-300 motion-reduce:transition-none"
            style={{ opacity: visible ? 1 : 0, transform: `translate(-50%, ${visible ? 0 : 16}px)`, pointerEvents: visible ? "auto" : "none" }}
        >
            <ol className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#161514]/90 p-1 shadow-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {chapters.map((c) => {
                    const on = c.id === active;
                    return (
                        <li key={c.id} className="shrink-0">
                            <a
                                href={`#${c.id}`}
                                aria-current={on ? "step" : undefined}
                                tabIndex={visible ? 0 : -1}
                                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm no-underline transition-colors ${on ? "bg-white text-[#161514]" : "text-white/70 hover:text-white"}`}
                            >
                                <span className="font-[family-name:var(--font-geist-mono)] text-xs">{String(c.n).padStart(2, "0")}</span>
                                <span className={on ? "" : "max-[1100px]:hidden"}>{c.label}</span>
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
