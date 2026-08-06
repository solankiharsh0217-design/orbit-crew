"use client";

const teamMembers = [
  {
    quote: "Our vision at OrbitCrew is simple: turn low-converting, leaky websites into high-speed revenue engines and give every business 24/7 AI text & voice agents connected directly to their mobile phone numbers.",
    name: "Nikhil Lathwal",
    role: "CEO & Founder",
    company: "OrbitCrew Digital",
    image: "/Nikhil Lathwal.jpeg",
    objectPosition: "object-[center_top]",
    logoSvg: "/hugo-assets/svgs/logo_full_white.svg",
  },
  {
    quote: "We design web experiences and AI agent funnels grounded in conversion psychology. Our goal is to ensure every visitor turns into a qualified lead and every phone call gets answered instantly.",
    name: "Mohit Lathwal",
    role: "Marketing Manager",
    company: "OrbitCrew Growth",
    image: "/Mohit Lathwal.png",
    objectPosition: "object-[center_20%]",
    logoSvg: "/hugo-assets/svgs/logo_crisp_full_white.svg",
  },
  {
    quote: "We build sub-300ms inference pipelines, low-latency WebRTC voice rooms, and PSTN telephone line integrations (Twilio/Exotel) backed by RAG vector indexing so AI agents never hallucinate.",
    name: "Harsh Solanki",
    role: "AI Engineer",
    company: "OrbitCrew AI Labs",
    image: "/Harsh Solanki.jpeg",
    objectPosition: "object-[center_top]",
    logoSvg: "/hugo-assets/svgs/logo_full_white.svg",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="home-cases page-section">
      <div className="page-wrapper">
        <div className="text-center mb-[84px] max-[640px]:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
            Leadership &amp; Execution Team
          </div>
          <h2 className="common-title common-title--large common-title--white font-display">
            The minds behind OrbitCrew.
          </h2>
          <p className="home-cases__subtitle text-base text-[#707070] mt-3">
            Engineered by experts in high-conversion web builds, voice AI infrastructure, and growth marketing.
          </p>
        </div>

        {/* Hover-expand flex container */}
        <div className="home-cases__grid flex gap-6 max-[1167px]:grid max-[1167px]:grid-cols-2 max-[880px]:grid-cols-1">
          {teamMembers.map((c, idx) => (
            <div
              key={idx}
              className="home-cases__item group relative flex-1 transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] h-[560px] p-6 rounded-2xl bg-[#1c1c1c] flex flex-col justify-between overflow-hidden cursor-pointer hover:flex-[2.5]"
            >
              {/* Team Photo Picture Layer with Precision Cropping */}
              <div className="home-cases__item-picture absolute inset-0 z-0 rounded-[inherit] overflow-hidden pointer-events-none">
                <img
                  src={c.image}
                  alt={c.name}
                  className={`w-full h-full object-cover ${c.objectPosition} transition-transform duration-500 group-hover:scale-105 select-none`}
                />
              </div>

              {/* Dark Overlay */}
              <div className="home-cases__item-overlay-dark absolute inset-0 bg-black/75 opacity-65 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
              
              {/* Gradient Overlay on Hover */}
              <div className="home-cases__item-overlay-gradient absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-60% to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              {/* Header: Badge & Link Icon */}
              <div className="home-cases__item-header relative z-10 flex justify-between items-center h-10 w-full">
                <span className="text-xs font-mono text-white bg-black/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {c.role}
                </span>
                <span className="home-cases__item-link-icon text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>

              {/* Backdrop Blur Content Layer */}
              <div className="home-cases__item-content-blur absolute inset-x-0 bottom-0 h-[280px] rounded-[inherit] backdrop-blur-none group-hover:backdrop-blur-md transition-all duration-300 pointer-events-none z-1 [mask-image:linear-gradient(0deg,#000_0%,#000_25%,transparent)]" />

              {/* Content text */}
              <div className="home-cases__item-content relative z-2 text-white">
                <p className="home-cases__item-description opacity-0 group-hover:opacity-100 text-base leading-6 mb-3 transition-opacity duration-200 delay-75 max-[1167px]:opacity-100">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <div className="home-cases__item-author text-white text-lg font-medium whitespace-nowrap group-hover:opacity-100 transition-opacity">
                  {c.name}
                  <span className="home-cases__item-role text-[#2377F6] font-normal text-sm ml-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity max-[1167px]:inline max-[1167px]:opacity-100">
                    &middot; {c.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
