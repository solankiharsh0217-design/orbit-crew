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
    <section id="case-studies" className="home-cases page-section py-20">
      <div className="page-wrapper">
        <div className="text-center mb-[64px] max-[640px]:mb-10">
          <h2 className="common-title common-title--large common-title--white font-display">
            The minds behind OrbitCrew.
          </h2>
          <p className="home-cases__subtitle text-base text-[#707070] mt-3">
            Engineered by experts in high-conversion web builds, voice AI infrastructure, and growth marketing.
          </p>
        </div>

        {/* Hover-expand flex container layout matching screenshot */}
        <div className="home-cases__grid">
          {teamMembers.map((c, idx) => (
            <div
              key={idx}
              className="home-cases__item group relative h-[520px] p-6 rounded-3xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#2377F6] hover:shadow-[0_0_30px_rgba(35,119,246,0.3)]"
            >
              {/* Team Photo Background Layer */}
              <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden pointer-events-none">
                <img
                  src={c.image}
                  alt={c.name}
                  className={`w-full h-full object-cover ${c.objectPosition} transition-transform duration-500 group-hover:scale-105 select-none`}
                />
              </div>

              {/* Dark Gradient Overlay for Crisp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none z-1" />

              {/* Header: Role Pill & Arrow Icon */}
              <div className="relative z-10 flex justify-between items-center w-full">
                <span className="text-xs font-mono text-white bg-black/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md font-medium">
                  {c.role}
                </span>
                <span className="text-white text-base opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
              </div>

              {/* Bottom Quote & Author Details */}
              <div className="relative z-10 text-white flex flex-col gap-3">
                <p className="text-sm leading-6 text-white/90 font-normal">
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
