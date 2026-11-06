import Image from "next/image";
import Link from "next/link";
import { RotatingWord } from "@/components/RotatingWord";
import { ViewCursor } from "@/components/ViewCursor";

import { projects, type Project } from "@/lib/projects";

export function WorkSection() {
  return (
    <section id="work" className="mt-[88px] bg-[#EEF2EA] pt-[88px] pb-24 max-[900px]:mt-16 max-[900px]:pt-16 max-[900px]:pb-[72px]">
      <div className="home-container">
        <div className="mb-12">
          <h2 className="m-0 text-[clamp(44px,5.5vw,84px)] font-semibold leading-none tracking-[-0.045em]">
            Experiences I&apos;ve{" "}
            <RotatingWord
              words={["designed.", "researched.", "strategized.", "prototyped.", "tested."]}
              lineHeight={1.15}
              interval={2400}
              className="text-[#5E7150]"
            />
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-7 max-[900px]:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <ViewCursor />
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-[#F1F3EE]">
        <Image
          src={project.cardImage}
          alt={project.alt}
          fill
          sizes="(max-width: 900px) 100vw, 800px"
          className="object-cover"
        />
        {(project.isNda || project.comingSoon) && (
          <span className="absolute left-2.5 top-2.5 rounded-md bg-[#141A10] px-[9px] py-1 text-[11px] text-white">
            {project.comingSoon ? "Coming soon" : "NDA protected"}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-2.5 pt-[18px] pb-2">
        <div className="flex justify-between text-[12.5px] text-[#75716B]">
          <span>{project.client}</span>
          {!project.comingSoon && (
            <span aria-hidden="true" className="text-[15px] text-[#161514]">
              ↗
            </span>
          )}
        </div>
        <h3 className="m-0 max-w-[32ch] text-[clamp(20px,1.6vw,26px)] font-medium leading-[1.3] tracking-[-0.015em]">{project.headline}</h3>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-[#F1F4ED] px-2 py-[3px] text-xs text-[#4B5843]">
              {tag}
            </li>
          ))}
        </ul>
        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-[#EDF0E9] pt-3.5">
            {project.metrics.map((m) => (
              <div key={m.label} className={`min-w-0 ${project.metrics!.length === 1 ? "col-span-3" : ""}`}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] tabular-nums">{m.value}</dd>
                <dd className="text-[12.5px] text-[#75716B]">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </>
  );

  const card =
    "flex flex-col rounded-[14px] border border-[#E1E6DB] bg-white p-3 no-underline text-inherit transition-[border-color] duration-[250ms]";

  if (project.comingSoon) return <article className={card}>{inner}</article>;
  // Hover only darkens the border; on mouse/trackpad the "View" cursor (ViewCursor) replaces the arrow
  return (
    <Link
      href={project.href}
      data-view-cursor={project.isNda ? "NDA · View" : "View ↗"}
      className={`${card} hover:border-[#C9D3BE] [@media(hover:hover)_and_(pointer:fine)]:cursor-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#161514]`}
    >
      {inner}
    </Link>
  );
}
