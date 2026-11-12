'use client';

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";

/*
  Segmented control (same style as the FIFA map tabs) over a crossfading image frame.
  Each tab shows one image filling the frame, or several (e.g. two phone screens) side by side.
  All panels load up front at low priority, so switching never fades into an empty frame.
*/

export type TabImage = { src: string; alt: string; w: number; h: number };
export type TabItem = { id: string; label: string; title?: string; body?: ReactNode; images: TabImage[] };

export function ImageTabs({
    label,
    items,
    aspect = "16/9",
    bg = "#EEF2EA",
    contain = false,
    pad = false,
    mobileAspect,
}: {
    /** Accessible name for the tab list */
    label: string;
    items: TabItem[];
    /** Frame ratio, e.g. "16/9" */
    aspect?: string;
    bg?: string;
    /** Fit single images inside the frame instead of cropping */
    contain?: boolean;
    /** Inner padding around the images (for phone screens and renders on a colour) */
    pad?: boolean;
    /** Frame ratio under 900px, e.g. "4/5" for phone screens */
    mobileAspect?: string;
}) {
    const [active, setActive] = useState(items[0].id);
    const uid = useId();
    const item = items.find((i) => i.id === active) ?? items[0];

    return (
        <div>
            <div role="tablist" aria-label={label} className="inline-flex max-w-full flex-wrap gap-1 rounded-[22px] border border-[#E1E6DB] bg-white p-1">
                {items.map((it) => {
                    const on = it.id === active;
                    return (
                        <button
                            key={it.id}
                            type="button"
                            role="tab"
                            aria-selected={on}
                            aria-controls={`${uid}-panel`}
                            onClick={() => setActive(it.id)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-[#161514] text-white" : "text-[#161514] hover:bg-[#EEF2EA]"}`}
                        >
                            {it.label}
                        </button>
                    );
                })}
            </div>

            {(item.title || item.body) && (
                <div className="mt-4 max-w-[72ch]" aria-live="polite">
                    {item.title && <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#161514]">{item.title}</p>}
                    {item.body && <p className={`${item.title ? "mt-2" : ""} text-lg leading-[1.6] text-[#161514]`}>{item.body}</p>}
                </div>
            )}

            <div
                id={`${uid}-panel`}
                role="tabpanel"
                className="relative mt-6 w-full overflow-hidden rounded-2xl border border-[#E1E6DB] [aspect-ratio:var(--ar)] max-[900px]:[aspect-ratio:var(--ar-m)]"
                style={{ "--ar": aspect, "--ar-m": mobileAspect ?? aspect, background: bg } as CSSProperties}
            >
                {items.map((it) => {
                    const on = it.id === active;
                    const multi = it.images.length > 1;
                    return (
                        <div
                            key={it.id}
                            aria-hidden={!on}
                            className={`absolute inset-0 flex items-center justify-center gap-[3%] transition-opacity duration-300 ease-out motion-reduce:transition-none ${pad || multi ? "p-[4%]" : ""}`}
                            style={{ opacity: on ? 1 : 0, pointerEvents: on ? "auto" : "none" }}
                        >
                            {it.images.map((img) =>
                                multi || pad ? (
                                    <Image
                                        key={img.src}
                                        src={img.src}
                                        alt={on ? img.alt : ""}
                                        width={img.w}
                                        height={img.h}
                                        loading="eager"
                                        fetchPriority="low"
                                        sizes="(max-width: 900px) 50vw, 600px"
                                        className="h-full w-auto max-w-full object-contain drop-shadow-xl"
                                    />
                                ) : (
                                    <Image
                                        key={img.src}
                                        src={img.src}
                                        alt={on ? img.alt : ""}
                                        fill
                                        loading="eager"
                                        fetchPriority="low"
                                        sizes="(max-width: 1600px) 100vw, 1504px"
                                        className={contain ? "object-contain" : "object-cover"}
                                    />
                                ),
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
