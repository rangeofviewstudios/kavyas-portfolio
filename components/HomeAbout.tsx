import Image from "next/image";
import Link from "next/link";

const facts = [
  { label: "Based in", value: "Atlanta, GA. Open to relocating" },
  { label: "Focus", value: "UX research, service design, product" },
  { label: "Learning", value: "Motion design, prompt engineering, building what I design" },
  { label: "Off the clock", value: "Travel, food, the Toronto Raptors" },
];

export function HomeAbout() {
  return (
    <section
      id="about"
      className="mt-[120px] grid grid-cols-[1.25fr_1fr] items-center gap-12 max-[900px]:mt-20 max-[900px]:grid-cols-1 max-[900px]:gap-7"
    >
      <div className="relative aspect-[1561/1007] overflow-hidden rounded-[20px]">
        <Image
          src="/images/redesign/about-wall.jpg"
          alt="Kavya standing beside prints of Aestura, Solace, LinkedIn and Looma pinned to a wall"
          fill
          sizes="(max-width: 900px) 100vw, 640px"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="m-0 text-[clamp(30px,3.6vw,44px)] font-semibold tracking-[-0.035em]">About</h2>
        <p className="mt-4 max-w-[44ch] text-base text-[#75716B]">
          I grew up in Toronto and moved to Atlanta for SCAD. Most of my ideas come from being somewhere new: how a
          city signs its transit, how a market lays out its stalls, how a place makes strangers feel welcome.
        </p>
        <dl className="mt-[26px] grid border-t border-[#DDD9D2]">
          {facts.map((f) => (
            <div
              key={f.label}
              className="grid grid-cols-[120px_1fr] gap-4 border-b border-[#DDD9D2] py-3 text-[14.5px]"
            >
              <dt className="text-[#75716B]">{f.label}</dt>
              <dd className="m-0">{f.value}</dd>
            </div>
          ))}
        </dl>
        <Link href="/about" className="mt-[22px] inline-block border-b border-[#161514] font-medium no-underline">
          More about me →
        </Link>
      </div>
    </section>
  );
}
