"use client";

import { useState } from "react";
import Link from "next/link";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Website Builds" | "AI Phone Agents" | "Lead Automations";
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
    id: "local-service-website",
    title: "High-Conversion Local Business Site",
    category: "Website Builds",
    metric: "+310%",
    metricLabel: "More Customer Inquiries",
    description: "Re-architected a slow legacy site into a high-speed website built for local service bookings and instant call button clicks.",
    deliverables: ["Instant Sub-Second Load", "Mobile Ready", "Call Button Layout", "Lead Guarantee"],
    image: "/hugo-assets/images/activate.png",
    objectPosition: "object-top",
  },
  {
    id: "omniagent-ai-platform",
    title: "24/7 AI Phone Voice Assistant",
    category: "AI Phone Agents",
    metric: "24/7",
    metricLabel: "Phone Answering & Booking",
    description: "Connected an intelligent voice assistant to a live business phone number to answer customer calls after hours and schedule appointments.",
    deliverables: ["Live Phone Line Sync", "Zero Missed Calls", "Appointment Booking", "SMS Confirmations"],
    image: "/ai-agent dashboard.png",
    objectPosition: "object-[center_top]",
  },
  {
    id: "ecommerce-funnel-build",
    title: "E-Commerce Customer Funnel",
    category: "Website Builds",
    metric: "4.8%",
    metricLabel: "Checkout Conversion Rate",
    description: "Designed ultra-fast product pages engineered to make purchasing effortless on smartphones and tablets.",
    deliverables: ["Fast Mobile Checkout", "High Conversion UX", "Instant Cart Sync", "SEO Ready"],
    image: "/hugo-assets/images/train.png",
    objectPosition: "object-top",
  },
  {
    id: "crm-workflow-automation",
    title: "Instant Lead Alert System",
    category: "Lead Automations",
    metric: "< 2s",
    metricLabel: "Lead Forwarding Time",
    description: "Automated lead alert system that forwards every new website inquiry and call transcript directly to the owner's smartphone.",
    deliverables: ["Instant SMS Alerts", "Email Forwarding", "CRM Logging", "Zero Manual Copying"],
    image: "/hugo-assets/images/workflow.png",
    objectPosition: "object-top",
  },
];

export default function ProjectShowcase({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Website Builds", "AI Phone Agents", "Lead Automations"];

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
