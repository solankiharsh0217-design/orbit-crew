"use client";

const teamMembers = [
  {
    quote: "Our vision at OrbitCrew is simple: turn low-converting, leaky websites into high-speed revenue engines and give every business 24/7 AI text & voice agents connected directly to their mobile phone numbers.",
    name: "Nikhil Lathwal",
    role: "CEO & Founder",
    company: "OrbitCrew Digital",
    image: "/Nikhil Lathwal.jpeg",
    objectPosition: "object-[center_top]",
  },
  {
    quote: "We design web experiences and AI agent funnels grounded in conversion psychology. Our goal is to ensure every visitor turns into a qualified lead and every phone call gets answered instantly.",
    name: "Mohit Lathwal",
    role: "Marketing Manager",
    company: "OrbitCrew Growth",
    image: "/Mohit Lathwal.png",
    objectPosition: "object-[center_20%]",
  },
  {
    quote: "We build sub-300ms inference pipelines, low-latency WebRTC voice rooms, and PSTN telephone line integrations backed by RAG vector indexing so AI agents never hallucinate.",
    name: "Harsh Solanki",
    role: "AI Engineer",
    company: "OrbitCrew AI Labs",
    image: "/Harsh Solanki.jpeg",
    objectPosition: "object-[center_top]",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="home-cases page-section">
      <div className="page-wrapper">
        <div className="text-center mb-[84px] max-[640px]:mb-10">
          <h2 className="common-title common-title--large common-title--white font-display">
            The minds behind OrbitCrew.
          </h2>
          <p className="home-cases__subtitle text-base text-[#707070] mt-3">
            Engineered by experts in high-conversion web builds, voice AI infrastructure, and growth marketing.
          </p>
        </div>

        {/* Lightweight 60fps Team Grid */}
        <div className="home-cases__grid grid grid-cols-3 gap-6 max-[1080px]:grid-cols-1">
          {teamMembers.map((c, idx) => (
            <div
              key={idx}
              className="group relative h-[480px] p-6 rounded-2xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-200 hover:-translate-y-1.5 hover:border-[#2377F6]/50 transform-gpu will-change-transform"
            >
              {/* Team Photo Picture Layer */}
              <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden pointer-events-none">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover ${c.objectPosition} transition-transform duration-300 group-hover:scale-103 select-none transform-gpu`}
                />
              </div>

              {/* Permanent Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-60% to-black/30 pointer-events-none z-1" />

              {/* Header: Role Badge */}
              <div className="relative z-10 flex justify-between items-center w-full">
                <span className="text-xs font-mono text-white bg-black/80 border border-white/10 px-3 py-1 rounded-full">
                  {c.role}
                </span>
                <span className="text-white text-base opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
              </div>

              {/* Content Text */}
              <div className="relative z-10 text-white flex flex-col gap-3">
                <p className="text-sm leading-6 text-white/90">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <div className="text-white text-base font-medium font-display">
                  {c.name}
                  <span className="text-[#2377F6] font-normal text-xs ml-2">
                    &middot; {c.company}
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
