import Image from "next/image";

const EMAIL = "kavyaray77@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kavya-ray/";
const RESUME = "/Ray_Kavya_Resume_UX_Designer.pdf";

/** The homepage's green "Let's talk" footer. Other pages keep using components/Footer. */
export function HomeContact() {
  // Fully hidden for the first 12% so the white paper corner at the photo's left edge never shows
  const fade = "linear-gradient(90deg, #0000 0%, #0000 12%, #000 40%)";
  return (
    <footer className="mt-[110px]">
      <div className="grid grid-cols-[1fr_minmax(0,420px)] overflow-hidden rounded-t-[28px] bg-[#435238] text-[#F5F3EC] max-[900px]:grid-cols-1">
        <div className="flex min-w-0 flex-col justify-between gap-10 px-12 py-16 max-[900px]:px-6 max-[900px]:py-11">
          <h2 className="m-0 text-[clamp(40px,5.6vw,76px)] font-bold leading-[0.95] tracking-[-0.05em]">
            Let&apos;s talk.
            <br />
            <span className="text-[#B9C7AC]">Open to full-time roles and relocation.</span>
          </h2>
          <div className="flex flex-wrap gap-12 text-sm max-[480px]:gap-7">
            <div>
              <h4 className="mb-2.5 text-sm font-normal text-[#B9C7AC]">Contact</h4>
              <a className="mb-[3px] block no-underline hover:underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a className="mb-[3px] block no-underline hover:underline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="mb-[3px] block no-underline hover:underline" href={RESUME} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
            <div>
              <h4 className="mb-2.5 text-sm font-normal text-[#B9C7AC]">Location</h4>
              Atlanta, GA
              <br />
              Raised in Toronto
            </div>
          </div>
        </div>
        <div className="relative min-h-[440px] max-[900px]:min-h-[420px]" style={{ WebkitMaskImage: fade, maskImage: fade }}>
          <Image
            src="/images/redesign/contact-flying.jpg"
            alt="Kavya surrounded by project prints flying through the air"
            fill
            sizes="(max-width: 900px) 100vw, 420px"
            className="object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
        </div>
      </div>
      <div className="flex justify-between pt-[18px] pb-7 text-[12.5px] text-[#75716B] max-[480px]:flex-col max-[480px]:gap-1">
        <span>© 2026 Kavya Ray</span>
        <span>Designed in Atlanta</span>
      </div>
    </footer>
  );
}
