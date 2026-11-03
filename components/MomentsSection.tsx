import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Moment = {
  /** Small label above the title, e.g. "Speaker" or "Featured on WSB-TV" */
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  /** object-position for the photo crop */
  focus?: string;
  /** Optional link. External links open in a new tab. */
  href?: string;
};

// Edit this list to add, remove or reorder moments.
const moments: Moment[] = [
  {
    eyebrow: "2026 Winner · European Product Design Award",
    title: "Solace won for Interface Design, Product UI",
    image: "/images/moments/solace-showcase.jpg",
    alt: "Kavya and a teammate at the Solace showcase booth, with green Solace banners and cardboard boxes illustrated with refugee portraits",
    focus: "50% 38%",
    href: "/case-study/solace",
  },
  {
    eyebrow: "Featured on WSB-TV",
    title: "Our World Cup wayfinding is now on Atlanta’s streets",
    image: "/images/fifacard.jpg",
    alt: "Kavya with the SCAD team and their white Last Mile city model inside the Atlanta stadium",
    focus: "35% 40%",
    href: "https://www.wsbtv.com/news/local/atlanta/scad-students-create-murals-signs-welcome-world-atlanta-world-cup/KCLNW34AGVC63HC3JHPW6GKCVE/",
  },
  {
    eyebrow: "Exhibitor · Google Xi Days 2026",
    title: "Showed an interactive piece on the future of work",
    image: "/images/moments/google-xi-days.jpg",
    alt: "Kavya sitting on a sofa in front of the Google Xi Days 2026 sign that reads “See you in February!”",
    focus: "50% 62%",
  },
  {
    eyebrow: "UX Lead · FIFA World Cup 26",
    title: "Presenting our Last Mile work at Atlanta’s World Cup kickoff",
    image: "/images/moments/world-cup-event.jpg",
    alt: "Kavya and two teammates in front of a wall of soccer balls reading “The Epicenter of Soccer Welcomes the World”",
    focus: "45% 45%",
    href: "/case-study/fifa",
  },
  {
    eyebrow: "Porsche × SCAD",
    title: "Presenting our EV experience at Porsche’s headquarters",
    image: "/images/moments/porsche-hq.jpg",
    alt: "Testing a Porsche car configurator on a large touchscreen at Porsche headquarters",
    focus: "50% 55%",
    href: "/case-study/porsche",
  },
  {
    eyebrow: "SCADpro × UBS · Lacoste, France",
    title: "Shaping a north-star vision for UBS.com",
    image: "/images/moments/ubs-lacoste.jpg",
    alt: "Kavya leaning on a lit UBS podium in a green presentation room",
    focus: "50% 35%",
    href: "/case-study/ubs",
  },
];

function MomentCard({ moment }: { moment: Moment }) {
  const external = moment.href?.startsWith("http");
  const inner = (
    <div className="h-full p-2.5 sm:p-3 rounded-3xl bg-[#1E2318]/55 backdrop-blur-sm ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-[#1E2318]/70">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 30vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: moment.focus ?? "50% 50%" }}
        />
      </div>
      <div className="px-3 pt-5 pb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-[#FFF3DF]/60 mb-2">
            {moment.eyebrow}
          </p>
          <h3 className="text-lg sm:text-xl font-medium leading-snug tracking-[-0.01em] text-[#FFF3DF] text-balance">
            {moment.title}
          </h3>
        </div>
        {moment.href && (
          <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
        )}
      </div>
    </div>
  );

  if (!moment.href) return <article className="group">{inner}</article>;
  return (
    <article>
      {external ? (
        <a href={moment.href} target="_blank" rel="noopener noreferrer" className="group block h-full no-underline">
          {inner}
        </a>
      ) : (
        <Link href={moment.href} className="group block h-full no-underline">
          {inner}
        </Link>
      )}
    </article>
  );
}

export function MomentsSection() {
  return (
    <section aria-labelledby="moments-heading" className="mt-28 sm:mt-36 lg:mt-44">
      {/* Section label with a full-width rule */}
      <div className="flex items-center gap-3 pb-5 border-b border-[#FFF3DF]/20">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#FFF3DF]" />
        <h2 id="moments-heading" className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[#FFF3DF]">
          Moments I&apos;m proud of
        </h2>
      </div>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {moments.map((moment) => (
          <MomentCard key={moment.title} moment={moment} />
        ))}
      </div>
    </section>
  );
}
