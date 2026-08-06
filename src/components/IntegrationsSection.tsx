"use client";

import {
  SiWhatsapp,
  SiHubspot,
  SiGooglecalendar,
  SiShopify,
  SiZapier,
  SiInstagram,
  SiTelegram,
  SiMessenger,
} from "react-icons/si";
import { PhoneCall, Slack } from "lucide-react";

export default function IntegrationsSection() {
  const leftTools = [
    { name: "WhatsApp", icon: <SiWhatsapp className="text-2xl text-[#25D366]" /> },
    { name: "Phone Calls", icon: <PhoneCall className="text-xl text-[#2377F6]" /> },
    { name: "Instagram", icon: <SiInstagram className="text-xl text-[#E4405F]" /> },
    { name: "Telegram", icon: <SiTelegram className="text-xl text-[#24A1DE]" /> },
    { name: "Messenger", icon: <SiMessenger className="text-xl text-[#0084FF]" /> },
  ];

  const rightTools = [
    { name: "HubSpot CRM", icon: <SiHubspot className="text-2xl text-[#FF7A59]" /> },
    { name: "Google Calendar", icon: <SiGooglecalendar className="text-2xl text-[#4285F4]" /> },
    { name: "Shopify", icon: <SiShopify className="text-2xl text-[#96BF48]" /> },
    { name: "Slack", icon: <Slack className="text-xl text-[#4A154B]" /> },
    { name: "Zapier", icon: <SiZapier className="text-2xl text-[#FF4A00]" /> },
  ];

  return (
    <section className="home-integrations page-section relative py-20 overflow-hidden bg-black">
      <div className="page-wrapper relative z-1">
        {/* Title & Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="common-title common-title--large common-title--white font-display mb-4">
            Works with your stack, not against it.
          </h2>
          <p className="text-base text-[#a8a8a8]">
            Connect your high-converting website to your business phone line, WhatsApp, CRM, and calendar tools effortlessly.
          </p>
        </div>

        {/* Central Circuit Engine Container */}
        <div className="relative w-full max-w-[1200px] mx-auto aspect-[2.4/1] rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden max-[880px]:aspect-auto max-[880px]:flex-col max-[880px]:gap-12">
          
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* SVG Glowing Dashed Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
            <defs>
              <linearGradient id="circuitGradLeft" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#74dc9e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2377F6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="circuitGradRight" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#2377F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#995cf5" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Left Paths to Center */}
            <path d="M 150 70 L 320 70 L 420 180 M 150 160 L 320 160 L 420 180 M 150 250 L 320 250 L 420 180" stroke="url(#circuitGradLeft)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            
            {/* Right Paths from Center */}
            <path d="M 780 180 L 880 70 L 1050 70 M 780 180 L 880 160 L 1050 160 M 780 180 L 880 250 L 1050 250" stroke="url(#circuitGradRight)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          </svg>

          {/* Left Side Channel Tool Nodes */}
          <div className="relative z-1 flex flex-col gap-5 max-[880px]:flex-row max-[880px]:flex-wrap max-[880px]:justify-center">
            {leftTools.map((t, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 px-4 rounded-xl bg-[#1c1c1c] border border-white/10 shadow-lg hover:border-[#2377F6]/50 transition-all hover:scale-105"
              >
                <div className="w-9 h-9 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                  {t.icon}
                </div>
                <span className="text-xs font-mono text-white font-medium">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          {/* Central OrbitCrew Core Engine Node */}
          <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#1c1c1c] border border-[#2377F6]/50 shadow-[0_0_50px_rgba(35,119,246,0.3)] max-w-[280px] text-center">
            <div className="w-16 h-16 rounded-2xl bg-black border border-[#2377F6] flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(35,119,246,0.4)] animate-pulse">
              <img src="/logo.png" alt="OrbitCrew Core" className="w-10 h-auto object-contain" />
            </div>
            <span className="text-xs font-mono text-[#2377F6] font-bold block mb-1">
              ORBITCREW ENGINE
            </span>
            <h3 className="text-lg font-display font-bold text-white mb-2">
              High-Conversion Core
            </h3>
            <p className="text-[11px] text-[#a8a8a8] leading-4">
              Routes every web lead, phone call &amp; booking seamlessly into your CRM.
            </p>
          </div>

          {/* Right Side CRM & Business Tool Nodes */}
          <div className="relative z-1 flex flex-col gap-5 max-[880px]:flex-row max-[880px]:flex-wrap max-[880px]:justify-center">
            {rightTools.map((t, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 px-4 rounded-xl bg-[#1c1c1c] border border-white/10 shadow-lg hover:border-[#995cf5]/50 transition-all hover:scale-105"
              >
                <div className="w-9 h-9 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                  {t.icon}
                </div>
                <span className="text-xs font-mono text-white font-medium">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
