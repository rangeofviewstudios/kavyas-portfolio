import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, LayoutPanelLeft, MousePointer2, PenTool, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/kavya-ray/";

/* Small floating tile that sits inline with the statement copy */
function Chip({ icon: Icon, rotate }: { icon: LucideIcon; rotate: number }) {
  return (
    <span
      aria-hidden="true"
      className="ml-[0.16em] inline-flex h-[0.88em] w-[0.88em] items-center justify-center rounded-[0.2em] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
      style={{ rotate: `${rotate}deg`, verticalAlign: "-0.1em" }}
    >
      <Icon className="h-[0.5em] w-[0.5em]" style={{ color: "#F26A3D" }} strokeWidth={2.2} />
    </span>
  );
}

function ProfileCard() {
  return (
    <div className="group relative w-full max-w-[340px] sm:max-w-[360px]">
      <div className="-rotate-6 rounded-[28px] bg-white p-3 shadow-[0_24px_50px_rgba(0,0,0,0.28)] transition-transform duration-500 ease-out group-hover:rotate-[-2deg]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
          <Image
            src="/voyageatlkavya-5.webp"
            alt="Kavya Ray"
            fill
            sizes="(max-width: 640px) 90vw, 360px"
            className="object-cover"
            style={{ objectPosition: "50% 62%" }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/45 to-transparent" />
          <p className="absolute inset-x-0 top-5 text-center text-xl sm:text-2xl font-medium text-white">Kavya Ray</p>
        </div>

        <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
              <Image src="/images/gettoknowmekavya.png" alt="" fill sizes="36px" className="object-cover object-top" />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-medium text-[#1B1C18]">@kavya-ray</p>
              <p className="text-xs text-black/45">LinkedIn</p>
            </div>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-[#1B1C18] px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" />
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}

export function HomeAbout() {
  return (
    <div id="about" className="mt-24 sm:mt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div className="flex justify-center md:justify-end">
          <ProfileCard />
        </div>

        <div>
          <p className="max-w-[17em] text-[1.75rem] sm:text-4xl lg:text-[2.6rem] font-medium leading-[1.18] tracking-[-0.025em] text-foreground [text-wrap:balance]">
            I&apos;m Kavya, a UX designer at{" "}
            <span className="whitespace-nowrap">SCAD<Chip icon={LayoutPanelLeft} rotate={6} /></span> who turns research
            into <span className="whitespace-nowrap">experiences<Chip icon={MousePointer2} rotate={-8} /></span> that feel
            human and <span className="whitespace-nowrap">connected<Chip icon={PenTool} rotate={10} /></span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/Kavya_Ray_Resume.pdf"
              download="Kavya_Ray_Resume.pdf"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-foreground/30 bg-foreground/[0.06] px-6 text-base font-medium text-foreground transition-colors hover:bg-foreground/15"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Resume
            </a>
            <Link
              href="/about"
              className="inline-flex h-12 items-center rounded-full bg-[#343F28] px-7 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
