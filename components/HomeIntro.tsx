import Image from "next/image";

// Companies in the scrolling "Worked with" strip. `height` is the display height in px; `w`/`h` are the file's size.
// FIFA has no logo file, so it's set as text.
// `tone` is an optional class, e.g. the Porsche file is a pale grey outline, so it is drawn solid black like on the rest of the site.
type Company = { name: string; src?: string; w?: number; h?: number; height?: number; tone?: string };
const companies: Company[] = [
  { name: "FIFA" },
  { name: "UBS", src: "/images/ubslogo.png", w: 124, h: 69, height: 34 },
  { name: "Porsche", src: "/images/porschelogo.png", w: 233, h: 16, height: 14, tone: "brightness-0 opacity-80" },
  { name: "Range of View Studios", src: "/images/rovgradlogo.png", w: 754, h: 337, height: 34 },
];

// Six copies; the animation shifts by a third (two copies), so the loop is seamless and always fills the width
const track = Array.from({ length: 6 }, () => companies).flat();

function Logo({ company, hidden }: { company: Company; hidden: boolean }) {
  return (
    <div className="mx-7 flex shrink-0 items-center sm:mx-10" aria-hidden={hidden || undefined}>
      {company.src ? (
        <Image
          src={company.src}
          alt={hidden ? "" : company.name}
          width={company.w}
          height={company.h}
          className={`w-auto ${company.tone ?? ""}`}
          style={{ height: company.height }}
        />
      ) : (
        <span className="text-xl font-bold tracking-[0.02em]">{company.name}</span>
      )}
    </div>
  );
}

/** Opening statement and the scrolling "Worked with" strip, right under the hero. */
export function HomeIntro() {
  return (
    <>
      <section className="pt-24 max-[900px]:pt-16">
        <p className="m-0 max-w-[28ch] text-[clamp(28px,3.2vw,48px)] font-medium leading-[1.22] tracking-[-0.025em] [text-wrap:pretty]">
          I design from what I find in the field: at the stadium gate, at a case worker&apos;s desk, in the
          driver&apos;s seat.
        </p>
      </section>

      <div
        className="mt-14 flex items-center gap-6 border-t border-[#DDD9D2] pt-14 pb-2"
        aria-label="Worked with, through SCAD"
        role="group"
      >
        <small className="shrink-0 text-[13.5px] text-[#75716B]">Worked with</small>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          {/* Fade both edges into the page background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F1EFEB] to-[#F1EFEB]/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F1EFEB] to-[#F1EFEB]/0" />
          <div className="flex w-max items-center animate-marquee-triple hover:[animation-play-state:paused] motion-reduce:animate-none">
            {track.map((company, i) => (
              // Only the first copy is read out; the repeats are decorative
              <Logo key={i} company={company} hidden={i >= companies.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
