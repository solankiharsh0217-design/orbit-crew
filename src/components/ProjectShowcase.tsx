"use client";

import { useState } from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Voice & Text AI" | "Web Development" | "Automations";
  metric: string;
  metricLabel: string;
  description: string;
  deliverables: string[];
  image: string;
  objectPosition?: string;
  url?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "omniagent-ai-platform",
    title: "OmniAgent AI — Multi-Modal AI Agent & Voice Platform",
    category: "Voice & Text AI",
    metric: "< 300ms",
    metricLabel: "Inference & PSTN Telephony",
    description: "Enterprise-grade autonomous AI SaaS platform with real-time WebRTC voice rooms, PSTN phone trunking (Twilio/Exotel), RAG vector indexing, and single <script> embeddable widget engine.",
    deliverables: ["Next.js 14", "WebRTC Voice", "Groq Llama 3.3", "Sarvam AI", "PSTN Trunking", "RAG Indexing"],
    image: "/ai-agent dashboard.png",
    objectPosition: "object-[center_top]",
  },
  {
    id: "saas-conversion-engine",
    title: "High-Conversion SaaS Platform",
    category: "Web Development",
    metric: "+310%",
    metricLabel: "Lead Conversion Surge",
    description: "Re-architected a legacy slow marketing site into a sub-second Next.js web application with conversion science UI and instant call scheduling.",
    deliverables: ["Next.js 16", "React 19", "GSAP Animations", "Tailwind CSS"],
    image: "/hugo-assets/images/activate.png",
    objectPosition: "object-top",
  },
  {
    id: "telephony-voice-ai",
    title: "Mobile Telephony Voice AI Hub",
    category: "Voice & Text AI",
    metric: "65%",
    metricLabel: "Incoming Calls Automated",
    description: "Connected 24/7 natural voice AI agents to business mobile phone numbers. Handles incoming phone calls, schedules leads, and sends SMS summaries.",
    deliverables: ["Twilio PSTN", "Vapi Voice Engine", "WhatsApp/SMS", "CRM Logging"],
    image: "/hugo-assets/images/analytics.png",
    objectPosition: "object-top",
  },
  {
    id: "agency-execution-portal",
    title: "White-Label Agency Client Portal",
    category: "Web Development",
    metric: "3x",
    metricLabel: "Faster Delivery Speed",
    description: "Built an invisible white-label client portal and dashboard for enterprise growth agencies to deliver client builds with zero recruiting drag.",
    deliverables: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Role Security"],
    image: "/hugo-assets/images/configure.png",
    objectPosition: "object-top",
  },
  {
    id: "crm-workflow-automation",
    title: "Automated CRM & Lead Pipeline",
    category: "Automations",
    metric: "< 2s",
    metricLabel: "Lead Response Time",
    description: "Constructed automated n8n & Zapier connective tissue linking web form submissions, voice call transcripts, and CRM pipeline stages instantly.",
    deliverables: ["n8n Workflows", "HubSpot API", "Salesforce Sync", "Slack Alerts"],
    image: "/hugo-assets/images/workflow.png",
    objectPosition: "object-top",
  },
  {
    id: "ecommerce-funnel-build",
    title: "High-Speed E-Commerce Landing Funnel",
    category: "Web Development",
    metric: "4.8%",
    metricLabel: "Checkout Conversion Rate",
    description: "Designed sub-second loading product funnels engineered to slash cost-per-acquisition (CPA) and boost average order value.",
    deliverables: ["Next.js Storefront", "Framer Motion", "Conversion Science", "SEO Architecture"],
    image: "/hugo-assets/images/train.png",
    objectPosition: "object-top",
  },
];

export default function ProjectShowcase({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Voice & Text AI", "Web Development", "Automations"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#2377F6] text-white font-medium shadow-[0_4px_12px_rgba(35,119,246,0.3)]"
                  : "bg-[#1c1c1c] text-[#a8a8a8] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Projects with Controlled Browser Device Frames */}
      <div className="grid grid-cols-2 gap-8 max-[1080px]:grid-cols-1">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-2xl bg-[#1c1c1c] border border-white/10 overflow-hidden shadow-[0_12px_24px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2377F6]/50 hover:shadow-[0_20px_32px_-10px_rgba(35,119,246,0.2)]"
          >
            {/* Glassmorphic Browser Device Frame Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a]/90 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#a8a8a8] max-w-[220px] truncate">
                https://orbitcrew.io/projects/{project.id}
              </div>
              <span className="text-xs text-[#2377F6] font-mono font-medium px-2 py-0.5 rounded bg-[#2377F6]/10">
                {project.category}
              </span>
            </div>

            {/* Project Image Canvas with Fixed Aspect Ratio & Cropping */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover ${project.objectPosition || "object-top"} transition-transform duration-500 group-hover:scale-105 select-none`}
              />
              
              {/* Highlight Metric Overlay Badge */}
              <div className="absolute bottom-4 right-4 bg-[#1c1c1c]/90 border border-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-right shadow-2xl pointer-events-none">
                <span className="text-2xl font-display font-bold text-white block leading-none">
                  {project.metric}
                </span>
                <span className="text-[11px] text-[#2377F6] font-medium block mt-1 uppercase tracking-wider">
                  {project.metricLabel}
                </span>
              </div>
            </div>

            {/* Project Card Info */}
            <div className="p-6 flex flex-col justify-between flex-1 gap-4">
              <div>
                <h3 className="font-display font-medium text-xl text-white mb-2 group-hover:text-[#2377F6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#a8a8a8] leading-6">
                  {project.description}
                </p>
              </div>

              {/* Deliverable Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {project.deliverables.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-[#c4c4c4] border border-white/5 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && limit < filteredProjects.length && (
        <div className="mt-12 text-center">
          <Link href="/capabilities" className="common-button common-button--secondary-dark inline-flex">
            Explore All Projects &amp; Capabilities →
          </Link>
        </div>
      )}
    </div>
  );
}
