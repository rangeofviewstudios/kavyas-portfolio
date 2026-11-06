// Projects shown in the homepage Work section; the hero spotlight reuses their headline, tags and stats.
export type Project = {
  id: number;
  isNda: boolean;
  client: string;
  title: string;
  /** Outcome-focused one-liner shown as the card title. */
  headline: string;
  tags: string[];
  /** Up to three real numbers or results from the case study. */
  metrics?: { value: string; label: string }[];
  href: string;
  alt: string;
  cardImage: string;
  /** No case study page yet: renders without a link. */
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    id: 6,
    isNda: false,
    client: "FIFA × SCAD",
    title: "FIFA",
    headline: "Guiding ~300K World Cup fans through Atlanta’s last mile",
    tags: ["Wayfinding", "Service Design", "Field Research"],
    metrics: [
      { value: "300K", label: "spectators on the route" },
      { value: "8", label: "World Cup matches" },
      { value: "Live", label: "installed downtown ATL" },
    ],
    href: "/case-study/fifa",
    alt: "FIFA World Cup 26 wayfinding flags pointing to Atlanta Stadium and Fan Fest",
    cardImage: "/images/fifa-flags.jpg",
  },
  {
    id: 7,
    isNda: false,
    client: "Range of View Studios",
    title: "Brand & Visual Identity",
    headline: "Growing a music collective into an Atlanta creative studio",
    tags: ["Brand Identity", "Visual Systems", "Web"],
    href: "/case-study/rov",
    alt: "Range of View Studios — Brand & Visual Identity",
    cardImage: "/images/rovcard-ember.jpg",
  },
  {
    id: 8,
    isNda: false,
    client: "Solace",
    title: "Solace",
    headline: "One record that follows refugees across every organization",
    tags: ["Service Design", "Product UI"],
    metrics: [
      { value: "4", label: "connected tools" },
      { value: "1", label: "record per person" },
      { value: "3", label: "person team" },
    ],
    href: "/case-study/solace",
    alt: "Solace case study",
    cardImage: "/images/solacecard.png",
  },
  {
    id: 1,
    isNda: true,
    client: "UBS × SCADpro",
    title: "The Future of Banking",
    headline: "Researching a north-star UBS.com for the Swiss market",
    tags: ["Fintech", "UX Research", "Usability Testing"],
    metrics: [
      { value: "70", label: "research responses" },
      { value: "40", label: "Swiss participants" },
      { value: "30", label: "Gen Z participants" },
    ],
    href: "/case-study/ubs",
    alt: "Key4 Banking concept for UBS shown on a laptop, with expense and balance notifications floating beside it",
    cardImage: "/images/ubs-cover.webp",
  },
  {
    id: 2,
    isNda: false,
    client: "Startup Competition",
    title: "LOOMA Smart Glasses",
    headline: "AR glasses that help people with Alzheimer’s recognize loved ones",
    tags: ["Wearables", "AR", "Accessibility"],
    metrics: [{ value: "38M+", label: "people with Alzheimer’s worldwide" }],
    href: "/case-study/looma",
    alt: "View through Looma AR glasses in a living room, with name labels over family members and an Entering Living Room prompt",
    cardImage: "/images/looma/loomacard.png",
  },
  {
    id: 4,
    isNda: false,
    client: "Porsche × SCAD",
    title: "The Future of Electric Vehicles",
    headline: "Designing the in-car experience for Porsche’s next EV drivers",
    tags: ["Automotive", "HMI", "Mobile App"],
    metrics: [
      { value: "160+", label: "survey responses" },
      { value: "30+", label: "driver interviews" },
      { value: "4", label: "brands benchmarked" },
    ],
    href: "/case-study/porsche",
    alt: "Porsche EV cockpit concept with the driver display, navigation and energy screens",
    cardImage: "/images/porschecard.jpg",
  },
];
