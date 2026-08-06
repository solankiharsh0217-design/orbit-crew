"use client";

import ProjectShowcase from "@/components/ProjectShowcase";
import Link from "next/link";

export default function CapabilitiesPage() {
  const coreCapabilities = [
    {
      title: "Sub-Second Mobile & Desktop Loading Speed",
      desc: "Built on high-performance Next.js web architectures. Every asset, image, and script is optimized so your website loads in under 1 second on every mobile phone and laptop.",
    },
    {
      title: "Conversion Psychology & High-Impact CTA Buttons",
      desc: "Strategic placement of 'Call Now' buttons, appointment booking forms, and customer trust badges right where your clients look first to maximize inquiries.",
    },
    {
      title: "Optional 24/7 AI Phone Voice Line Answering",
      desc: "Direct connection to your business phone line. Natural human voice conversation that handles incoming calls 24/7, answers questions, and books appointments automatically.",
    },
    {
      title: "24/7 Web & WhatsApp Chatbot Assistants",
      desc: "Smart chat assistant deployed directly on your website and WhatsApp business number to answer customer questions and capture lead contact details around the clock.",
    },
    {
      title: "Instant Smartphone & CRM Lead Forwarding",
      desc: "Automated alert system that forwards every new lead, form submission, or call transcript directly to your smartphone via SMS or email with zero manual copying.",
    },
  ];

  const leadershipTeam = [
    {
      name: "Nikhil Lathwal",
      role: "CEO & Founder",
      bio: "Leads OrbitCrew's strategic growth, high-conversion web architectures, and client partner delivery.",
      image: "/Nikhil Lathwal.jpeg",
    },
    {
      name: "Mohit Lathwal",
      role: "Marketing Manager",
      bio: "Spearheads performance funnel optimization, conversion psychology, and client acquisition growth.",
      image: "/Mohit Lathwal.png",
    },
    {
      name: "Harsh Solanki",
      role: "AI Engineer",
      bio: "Architects 24/7 AI voice phone answering systems, chatbot engines, and automated lead pipelines.",
      image: "/Harsh Solanki.jpeg",
    },
  ];

  return (
    <div className="page-wrapper pb-16 pt-[160px] max-[640px]:pt-[120px]">
      {/* Hero Header */}
      <div className="text-center max-w-[850px] mx-auto mb-20">
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          High-conversion website builds &amp; client portfolio.
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          Explore our client website builds engineered to turn traffic into phone calls, bookings, and revenue growth.
        </p>
      </div>

      {/* Flagship Showcase Card: High-Conversion Website Package */}
      <section className="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-[#2377F6]/40 shadow-[0_0_50px_rgba(35,119,246,0.15)] relative overflow-hidden">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="px-3 py-1 rounded-full bg-[#2377F6] text-white text-xs font-mono font-medium">
              CORE PRIMARY OFFERING
            </span>
            <span className="text-xs font-mono text-[#74dc9e] bg-[#74dc9e]/10 border border-[#74dc9e]/30 px-3 py-1 rounded-full">
              Sub-Second Load &amp; 100% Mobile Ready
            </span>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
              High-Conversion Website Build Package
            </h2>
            <p className="text-lg text-[#2377F6] font-medium leading-7">
              A complete, modern website built specifically to convert site traffic into phone calls, customer inquiries, and booked appointments.
            </p>
          </div>

          {/* Browser Device Frame with Local Service Mockup */}
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-black">
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#a8a8a8]">
                https://apexservices.com
              </div>
              <span className="text-xs font-mono text-white/60">High-Conversion Build</span>
            </div>
            <img
              src="/hugo-assets/images/web_build_local_service.jpg"
              alt="High Conversion Website Build"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          {/* Key Capabilities Grid */}
          <div className="mt-6">
            <h3 className="text-xl font-display font-bold text-white mb-6">
              🔑 Core Capabilities Included In Every Build
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCapabilities.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#1c1c1c] border border-white/10 flex flex-col gap-2">
                  <span className="text-xs font-mono text-[#2377F6] font-bold">0{idx + 1}</span>
                  <h4 className="text-lg font-medium text-white">{item.title}</h4>
                  <p className="text-sm text-[#a8a8a8] leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Showcase */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="common-title common-title--large common-title--white font-display mb-3">
            Recent Client Website Builds
          </h2>
          <p className="text-base text-[#707070]">
            Explore website builds engineered for customer conversion velocity.
          </p>
        </div>
        <ProjectShowcase />
      </section>

      <div className="my-24">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* OrbitCrew Leadership & Execution Team */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="common-title common-title--large common-title--white font-display mb-4">
            Meet our executive &amp; engineering leadership.
          </h2>
          <p className="text-base text-[#707070] max-w-[600px] mx-auto">
            The team driving website conversion science, 24/7 AI phone answering, and client growth.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-[880px]:grid-cols-1">
          {leadershipTeam.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-2xl bg-[#1c1c1c] border border-white/10 flex flex-col gap-4 shadow-xl overflow-hidden group hover:border-[#2377F6]/50 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-black">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-[#2377F6] block mb-3 font-medium">
                  {member.role}
                </span>
                <p className="text-sm text-[#a8a8a8] leading-6">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <div className="mt-20 text-center p-12 rounded-3xl bg-[#1c1c1c] border border-white/10">
        <h2 className="common-title common-title--large common-title--white font-display mb-4">
          Ready to get more leads from your website?
        </h2>
        <p className="text-base text-[#a8a8a8] max-w-[550px] mx-auto mb-8">
          Book a free 15-minute strategy audit with Nikhil Lathwal (CEO) and our engineering team today.
        </p>
        <Link href="/contact" className="common-button common-button--primary inline-flex">
          Get Free Website Audit →
        </Link>
      </div>
    </div>
  );
}
