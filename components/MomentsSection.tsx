import Image from "next/image";

type Moment = {
  /** Small uppercase label above the title */
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  /** object-position for the photo crop */
  focus?: string;
  /** Shown on the homepage. The rest are kept here for later. */
  featured?: boolean;
  /** Related page, kept for reference. The homepage cards don't link anywhere. */
  href?: string;
};

// Edit this list to add, remove or reorder moments. Only `featured` ones are shown.
const moments: Moment[] = [
  {
    eyebrow: "2026 Winner · European Product Design Award",
    title: "Solace won for Interface Design, Product UI",
    image: "/images/moments/solace-showcase.jpg",
    alt: "Kavya and a teammate at the Solace showcase booth, with green Solace banners and cardboard boxes illustrated with refugee portraits",
    featured: true,
    href: "/case-study/solace",
  },
  {
    eyebrow: "Exhibitor · Google Xi Days 2026",
    title: "Showed an interactive piece on the future of work",
    image: "/images/moments/google-xi-days.jpg",
    alt: "Kavya sitting on a sofa in front of the Google Xi Days 2026 sign that reads “See you in February!”",
    focus: "50% 40%",
    featured: true,
  },
  {
    eyebrow: "UX Lead · FIFA World Cup 26",
    title: "Presenting our Last Mile work at Atlanta’s World Cup kickoff",
    image: "/images/redesign/moment-fifa-kickoff.jpg",
    alt: "Kavya and two teammates in front of a wall of soccer balls at Atlanta’s World Cup kickoff",
    focus: "62% 50%",
    featured: true,
    href: "/case-study/fifa",
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

export function MomentsSection() {
  return (
    <section aria-labelledby="moments-heading" className="pt-[110px]">
      <h2 id="moments-heading" className="m-0 mb-7 text-[clamp(30px,3.6vw,44px)] font-semibold tracking-[-0.035em]">
        Moments I&apos;m proud of
      </h2>
      <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
        {moments
          .filter((m) => m.featured)
          .map((moment) => (
            <figure key={moment.title} className="m-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#E6E9E2] max-[900px]:aspect-[4/3]">
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  className="object-cover"
                  style={{ objectPosition: moment.focus ?? "50% 50%" }}
                />
              </div>
              <figcaption className="px-0.5 pt-3.5">
                <small className="block text-xs uppercase tracking-[0.06em] text-[#5C5852]">{moment.eyebrow}</small>
                <p className="mt-1.5 text-base font-medium leading-[1.35] tracking-[-0.01em]">{moment.title}</p>
              </figcaption>
            </figure>
          ))}
      </div>
    </section>
  );
}
