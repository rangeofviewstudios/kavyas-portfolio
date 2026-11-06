import Image from "next/image";
import Link from "next/link";

/**
 * "Learn more about me" link panel under Moments on the homepage.
 * Hover / keyboard focus: a green fill sweeps in from the left, the text turns cream,
 * the photo straightens and grows, and the arrow swings to point right.
 */
export function AboutTeaser() {
  const ease = "ease-[cubic-bezier(.65,0,.25,1)] motion-reduce:transition-none";
  return (
    <Link
      href="/about"
      className="group relative mt-24 block overflow-hidden rounded-[28px] border border-[#DDD9D2] bg-[#FAF9F7] no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#161514] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F1EFEB] max-[900px]:mt-16"
    >
      {/* Green fill that sweeps in */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 bg-[#435238] transition-transform duration-700 group-hover:scale-x-100 group-focus-visible:scale-x-100 ${ease}`}
      />

      <div className="relative flex items-center justify-between gap-8 px-8 py-12 sm:px-12 sm:py-16 max-[640px]:flex-col max-[640px]:items-start">
        <div className="min-w-0">
          <p className={`text-[12px] uppercase tracking-[0.12em] text-[#5C5852] transition-colors duration-500 group-hover:text-[#B9C7AC] group-focus-visible:text-[#B9C7AC] ${ease}`}>
            About me
          </p>
          <h2
            className={`mt-3 text-[clamp(40px,6vw,96px)] font-semibold leading-[0.95] tracking-[-0.045em] text-[#161514] transition-colors duration-500 group-hover:text-[#F5F3EC] group-focus-visible:text-[#F5F3EC] ${ease}`}
          >
            Learn more
            <br />
            about me
          </h2>
          <p
            className={`mt-5 max-w-[42ch] text-base text-[#75716B] transition-colors duration-500 group-hover:text-[#F5F3EC]/75 group-focus-visible:text-[#F5F3EC]/75 ${ease}`}
          >
            Raised in Toronto, designing in Atlanta. How I work, what I&apos;m learning, and what I get up to off the clock.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-5">
          {/* Round photo crop, tilted until hover */}
          <span
            className={`relative block h-[clamp(120px,14vw,200px)] w-[clamp(120px,14vw,200px)] overflow-hidden rounded-full shadow-[0_18px_40px_-18px_rgba(20,28,18,.55)] transition-transform duration-700 rotate-[-6deg] group-hover:rotate-0 group-hover:scale-110 group-focus-visible:rotate-0 group-focus-visible:scale-110 ${ease}`}
          >
            <Image
              src="/images/redesign/about-wall-clean.jpg"
              alt=""
              fill
              // Zoomed 2.1x below, so load ~2.1x the circle's size to stay sharp
              sizes="440px"
              className="object-cover"
              // Portrait crop: push the crop to the right edge, then zoom in around the face
              style={{ objectPosition: "100% 30%", transform: "scale(2.1)", transformOrigin: "61% 30%" }}
            />
          </span>
          {/* Arrow: diagonal at rest, points right on hover */}
          <span
            aria-hidden="true"
            className={`grid h-14 w-14 place-items-center rounded-full bg-[#161514] text-xl text-[#F5F3EC] transition-[transform,background-color,color] duration-500 -rotate-45 group-hover:rotate-0 group-hover:bg-[#F5F3EC] group-hover:text-[#161514] group-focus-visible:rotate-0 group-focus-visible:bg-[#F5F3EC] group-focus-visible:text-[#161514] ${ease}`}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
