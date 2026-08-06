"use client";

import ProjectShowcase from "@/components/ProjectShowcase";
import Link from "next/link";

export default function CapabilitiesPage() {
  const omniagentDeliverables = [
    {
      title: "Multi-Modal AI Agent Orchestration",
      desc: "Multi-LLM backend integration: Groq (Llama 3.3 70B, Llama 3.1 8B), NVIDIA NIM (Nemotron 3, Qwen 3 80B), and Sarvam AI Indic models. Custom System Prompt engineering, temperature control (0.1 factual vs 0.7 creative), context memory windows, and function tool calling (Live Web Search & Scraping).",
    },
    {
      title: "RAG Knowledge Base & Vector Indexing",
      desc: "Document parsing for .pdf, .txt, .md, .csv, .json. Automated semantic chunking and vector embeddings for factual, hallucination-free retrieval.",
    },
    {
      title: "Real-Time WebRTC Voice Agent Calls & Telephony",
      desc: "Low-latency WebRTC voice call rooms with real-time audio visualizers. Voice Activity Detection (VAD) turn-taking, Sarvam AI & Deepgram STT/TTS models. PSTN phone trunking integration (Twilio, Exotel, Plivo, Telnyx) with dedicated phone line provisioning.",
    },
    {
      title: "Embeddable AI Web Widget Engine",
      desc: "Single <script> tag deployment for client websites. Dual interaction modes (Text Chatbot vs WebRTC Voice Call), custom color pickers, and CORS domain whitelist protection.",
    },
    {
      title: "Multi-Tenant SaaS Control Plane & Dual Theme",
      desc: "Super Admin management, real-time token/speech meter tracking, audit logs, and Razorpay tier subscription billing (Free, Pro, Enterprise). Dual theme engine: Midnight Sapphire (Dark) and Crystal Slate (Light).",
    },
  ];

  const techStack = [
    { category: "Frontend Framework", technology: "Next.js 14 (App Router), TypeScript 5, React 18" },
    { category: "Styling & Design System", technology: "Tailwind CSS, Dual Light/Dark Theme Engine with CSS Variables" },
    { category: "Auth & Workspace", technology: "Clerk Authentication, Multi-tenant Organization RBAC" },
    { category: "Analytics & Payments", technology: "PostHog Analytics Provider, Razorpay Subscriptions & Checkout" },
    { category: "AI Inference & LLMs", technology: "Groq LPU (Llama 3.3 70B), NVIDIA NIM Microservices, Sarvam AI" },
    { category: "Voice & Telephony", technology: "WebRTC Streaming, Sarvam Indic STT/TTS, Deepgram Nova/Aura, Twilio/Exotel" },
  ];

  const leadershipTeam = [
    {
      name: "Nikhil Lathwal",
      role: "CEO & Founder",
      bio: "Leads OrbitCrew's strategic growth, high-conversion web architectures, and agency partner execution pods.",
      image: "/Nikhil Lathwal.jpeg",
    },
    {
      name: "Mohit Lathwal",
      role: "Marketing Manager",
      bio: "Spearheads performance funnel optimization, conversion psychology, and partner acquisition growth.",
      image: "/Mohit Lathwal.png",
    },
    {
      name: "Harsh Solanki",
      role: "AI Engineer",
      bio: "Architects multi-modal LLM pipelines, real-time WebRTC voice engines, and PSTN telephony integrations.",
      image: "/Harsh Solanki.jpeg",
    },
  ];

  return (
    <div className="page-wrapper py-16">
      {/* Hero Header */}
      <div className="text-center max-w-[850px] mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
          Flagship Engineering &amp; Portfolio
        </div>
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          OmniAgent AI &amp; Web Dev Portfolio
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          Explore OmniAgent AI — our autonomous multi-modal AI agent and voice telephony platform — along with our high-conversion Next.js client builds.
        </p>
      </div>

      {/* Flagship Showcase Card: OmniAgent AI */}
      <section className="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-[#2377F6]/40 shadow-[0_0_50px_rgba(35,119,246,0.15)] relative overflow-hidden">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="px-3 py-1 rounded-full bg-[#2377F6] text-white text-xs font-mono font-medium">
              FLAGSHIP PLATFORM
            </span>
            <span className="text-xs font-mono text-[#74dc9e] bg-[#74dc9e]/10 border border-[#74dc9e]/30 px-3 py-1 rounded-full">
              Sub-300ms Inference &amp; PSTN Voice
            </span>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
              OmniAgent AI — Autonomous Multi-Modal AI Agent &amp; Voice Platform
            </h2>
            <p className="text-lg text-[#2377F6] font-medium leading-7">
              Enterprise-Grade Autonomous AI Agents, Real-Time WebRTC Voice Infrastructure, RAG Knowledge Base Retrieval, and Embeddable Web Widget Engine.
            </p>
          </div>

          {/* Browser Device Frame with Real Dashboard Image */}
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-black">
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#a8a8a8]">
                https://omniagent.orbitcrew.io/dashboard
              </div>
              <span className="text-xs font-mono text-white/60">OmniAgent Control Plane</span>
            </div>
            <img
              src="/ai-agent dashboard.png"
              alt="OmniAgent AI Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Key Deliverables Grid */}
          <div className="mt-6">
            <h3 className="text-xl font-display font-bold text-white mb-6">
              🔑 Key Capabilities &amp; Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {omniagentDeliverables.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#1c1c1c] border border-white/10 flex flex-col gap-2">
                  <span className="text-xs font-mono text-[#2377F6] font-bold">0{idx + 1}</span>
                  <h4 className="text-lg font-medium text-white">{item.title}</h4>
                  <p className="text-sm text-[#a8a8a8] leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Specifications Table */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold text-white mb-6">
              🛠️ Technology Specifications Table
            </h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm text-[#a8a8a8]">
                <thead className="bg-white/5 text-white font-mono text-xs uppercase">
                  <tr>
                    <th className="p-4 border-b border-white/10">Category</th>
                    <th className="p-4 border-b border-white/10">Technology &amp; Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {techStack.map((row) => (
                    <tr key={row.category} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-white">{row.category}</td>
                      <td className="p-4 font-mono text-[#c4c4c4]">{row.technology}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Showcase */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="common-title common-title--large common-title--white font-display mb-3">
            More Web Dev &amp; Automation Builds
          </h2>
          <p className="text-base text-[#707070]">
            Explore client applications built for high conversion velocity.
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
            OrbitCrew Leadership Team
          </div>
          <h2 className="common-title common-title--large common-title--white font-display mb-4">
            Meet our executive &amp; engineering leadership.
          </h2>
          <p className="text-base text-[#707070] max-w-[600px] mx-auto">
            The team driving web conversion science, voice AI telephony, and white-label execution.
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
          Ready to deploy OmniAgent AI or build your high-converting site?
        </h2>
        <p className="text-base text-[#a8a8a8] max-w-[550px] mx-auto mb-8">
          Book a discovery call with Nikhil Lathwal (CEO) and our engineering team today.
        </p>
        <Link href="/contact" className="common-button common-button--primary inline-flex">
          Book a Discovery Call →
        </Link>
      </div>
    </div>
  );
}
