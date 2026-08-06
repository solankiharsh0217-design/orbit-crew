"use client";

import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiStripe,
  SiHubspot,
  SiGoogle,
  SiFigma,
} from "react-icons/si";

export default function LogoCloud() {
  const brandLogos = [
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiNextdotjs className="text-2xl text-white" />
          <span className="font-display font-medium text-sm text-white/90">Next.js 15</span>
        </span>
      ),
      title: "Next.js",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiReact className="text-2xl text-[#61dafb]" />
          <span className="font-display font-medium text-sm text-white/90">React 19</span>
        </span>
      ),
      title: "React",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiTailwindcss className="text-2xl text-[#38bdf8]" />
          <span className="font-display font-medium text-sm text-white/90">Tailwind CSS</span>
        </span>
      ),
      title: "Tailwind CSS",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiVercel className="text-xl text-white" />
          <span className="font-display font-medium text-sm text-white/90">Vercel Cloud</span>
        </span>
      ),
      title: "Vercel",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiStripe className="text-2xl text-[#635bff]" />
          <span className="font-display font-medium text-sm text-white/90">Stripe Billing</span>
        </span>
      ),
      title: "Stripe",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiHubspot className="text-2xl text-[#ff7a59]" />
          <span className="font-display font-medium text-sm text-white/90">HubSpot CRM</span>
        </span>
      ),
      title: "HubSpot",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiGoogle className="text-2xl text-[#4285f4]" />
          <span className="font-display font-medium text-sm text-white/90">Google Search SEO</span>
        </span>
      ),
      title: "Google",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiFigma className="text-2xl text-[#f24e1e]" />
          <span className="font-display font-medium text-sm text-white/90">Figma Design</span>
        </span>
      ),
      title: "Figma",
    },
    {
      node: (
        <span className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <SiTypescript className="text-2xl text-[#3178c6]" />
          <span className="font-display font-medium text-sm text-white/90">TypeScript 5</span>
        </span>
      ),
      title: "TypeScript",
    },
  ];

  return (
    <section className="home-logo-cloud page-section py-12 relative overflow-hidden bg-black">
      <div className="page-wrapper text-center mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-[#707070]">
          Built With World-Class High-Performance Web Technologies &amp; CRM Partners
        </p>
      </div>

      <div className="w-full relative py-4">
        <LogoLoop
          logos={brandLogos}
          speed={45}
          direction="left"
          logoHeight={32}
          gap={54}
          fadeOut={true}
          fadeOutColor="#000000"
          scaleOnHover={true}
          ariaLabel="Technology and CRM partners"
        />
      </div>
    </section>
  );
}
