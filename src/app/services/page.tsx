"use client";

import Link from "next/link";

export default function ServicesPage() {
  const addOns = [
    {
      title: "Add-On 1: 24/7 AI Phone Voice Agent",
      price: "+$499",
      badge: "PHONE VOICE AI",
      color: "border-[#74dc9e]/30 text-[#74dc9e] bg-[#74dc9e]/10",
      description: "Connects an intelligent AI assistant directly to your business phone line. Answers calls 24/7, answers customer questions, and books appointments automatically when your staff is busy or after hours.",
      features: ["Answers calls 24/7/365", "Custom voice persona", "Instant SMS booking links", "Call transcript forwarding"],
      image: "/hugo-assets/images/card_ai_phone.jpg",
    },
    {
      title: "Add-On 2: 24/7 AI Web & WhatsApp Chatbot",
      price: "+$299",
      badge: "WEB & WHATSAPP CHAT",
      color: "border-[#2377F6]/30 text-[#2377F6] bg-[#2377F6]/10",
      description: "An intelligent chat assistant deployed on your website and WhatsApp business account that engages visitors, answers FAQs 24/7, and collects contact details automatically.",
      features: ["Live website chat widget", "WhatsApp Business sync", "Automated lead capture", "Instant FAQ responses"],
      image: "/hugo-assets/images/card_whatsapp_chat.jpg",
    },
    {
      title: "Add-On 3: Automated Lead & CRM Sync",
      price: "+$199",
      badge: "INSTANT LEAD ALERTS",
      color: "border-[#995cf5]/30 text-[#995cf5] bg-[#995cf5]/10",
      description: "Instantly routes every new website lead form, appointment booking, and phone call transcript straight to your smartphone via SMS or email so you can close deals fast.",
      features: ["Instant SMS & Email alerts", "HubSpot / CRM integration", "Google Calendar auto-sync", "Zero manual copy-pasting"],
      image: "/hugo-assets/images/card_lead_alert.jpg",
    },
  ];

  return (
    <div className="page-wrapper pb-24 pt-[160px] max-[640px]:pt-[120px]">
      {/* Hero Header */}
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          1 Core Website Package. Unlimited Business Growth.
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          We keep pricing simple and conversion-focused. Every client receives our foundation <span className="text-white font-medium">High-Conversion Website Build Package</span>, with optional 24/7 AI voice and lead automation add-ons.
        </p>
      </div>

      {/* CORE PRIMARY OFFERING CARD */}
      <div className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-[#2377F6]/40 shadow-[0_0_50px_rgba(35,119,246,0.2)]">
        <div className="grid grid-cols-12 gap-8 items-center max-[1080px]:grid-cols-1">
          
          {/* Left: Core Package Details */}
          <div className="col-span-7 flex flex-col gap-6">
            <span className="px-3 py-1 rounded-full bg-[#2377F6] text-white text-xs font-mono font-medium w-fit">
              CORE PRIMARY OFFERING
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              High-Conversion Website Build Package
            </h2>

            <p className="text-base text-[#a8a8a8] leading-7">
              A fast, modern website custom-built specifically for your business or local service. Engineered from the ground up to load in less than 1 second, showcase customer reviews, and place click-to-call buttons right where your prospective clients look first.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-[#c4c4c4] pt-2 max-[640px]:grid-cols-1">
              <div className="flex items-center gap-2">
                <span className="text-[#2377F6] font-bold">✓</span> Sub-Second Loading Speed
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2377F6] font-bold">✓</span> 100% Mobile &amp; Tablet Ready
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2377F6] font-bold">✓</span> Click-to-Call Lead Buttons
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2377F6] font-bold">✓</span> SEO &amp; Google Search Ready
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2377F6] font-bold">✓</span> Fast 7-14 Day Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2377F6] font-bold">✓</span> Zero Technical Drag
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs font-mono text-[#707070] block">FOUNDATION PRICE</span>
                <span className="text-4xl font-display font-bold text-white">$1,499</span>
              </div>
              <Link href="/contact" className="common-button common-button--primary text-sm py-3 px-6 shadow-[0_4px_20px_rgba(35,119,246,0.4)]">
                Get Started →
              </Link>
            </div>
          </div>

          {/* Right: Website Mockup Frame */}
          <div className="col-span-5 relative w-full">
            <div className="w-full rounded-2xl border border-white/15 bg-[#0a0a0a] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0a] border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[11px] font-mono text-[#a8a8a8]">apexservices.com</span>
                <span className="text-[10px] font-mono text-[#2377F6]">High Conversion</span>
              </div>
              <img
                src="/hugo-assets/images/web_build_local_service.jpg"
                alt="High Conversion Website Build"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* POWER ADD-ONS SECTION */}
      <div className="mb-12 text-center">
        <h2 className="common-title common-title--large common-title--white font-display mb-3">
          Power Add-Ons (Optional Upgrades)
        </h2>
        <p className="text-base text-[#a8a8a8] max-w-[600px] mx-auto">
          Enhance your website with 24/7 AI telephone voice agents, WhatsApp chatbots, and automated CRM lead syncing.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-[1080px]:grid-cols-1">
        {addOns.map((addon, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-xl hover:border-white/20 transition-all"
          >
            <div className="flex flex-col gap-5">
              {/* 3D Asset Thumbnail */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/50 border border-white/10 p-2 flex items-center justify-center">
                <img
                  src={addon.image}
                  alt={addon.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${addon.color}`}>
                  {addon.badge}
                </span>
                <span className="text-xl font-display font-bold text-white">{addon.price}</span>
              </div>

              <h3 className="text-xl font-display font-medium text-white">
                {addon.title}
              </h3>

              <p className="text-sm text-[#a8a8a8] leading-6">
                {addon.description}
              </p>

              <ul className="flex flex-col gap-2 pt-2 border-t border-white/10 text-xs text-[#c4c4c4]">
                {addon.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span className="text-[#2377F6]">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/contact" className="common-button common-button--secondary-dark justify-center w-full text-xs">
                Select in Package →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
