"use client";

import Link from "next/link";

export default function SolutionsSection() {
  const addOns = [
    {
      title: "Add-On 1: 24/7 AI Phone Voice Agent",
      desc: "Connects an AI assistant directly to your business phone number. Answers calls 24/7, answers questions, and books appointments when you're busy.",
      badge: "PHONE VOICE AI",
      color: "border-[#74dc9e]/30 text-[#74dc9e] bg-[#74dc9e]/10",
    },
    {
      title: "Add-On 2: 24/7 AI Web & WhatsApp Chatbot",
      desc: "Deploys a smart chat assistant on your website and WhatsApp line to engage visitors, answer FAQs, and collect contact details automatically.",
      badge: "WEB & WHATSAPP CHAT",
      color: "border-[#2377F6]/30 text-[#2377F6] bg-[#2377F6]/10",
    },
    {
      title: "Add-On 3: Automated Lead & CRM Sync",
      desc: "Instantly sends every new website inquiry and phone call transcript straight to your smartphone, email, or CRM system with zero manual copy-pasting.",
      badge: "INSTANT LEAD ALERTS",
      color: "border-[#995cf5]/30 text-[#995cf5] bg-[#995cf5]/10",
    },
  ];

  return (
    <section id="solutions" className="home-solutions page-section">
      <div className="page-wrapper">
        <div className="home-solutions__wrapper flex flex-col gap-16 pt-12">
          
          {/* Main Core Package Headline */}
          <div className="text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
              1 Complete Foundation + Optional Add-Ons
            </div>
            <h2 className="common-title common-title--xl font-display font-bold text-white mb-4">
              1 Core Website Package. Unlimited Business Growth.
            </h2>
            <p className="text-lg leading-7 text-[#a8a8a8]">
              Every client starts with our primary <span className="text-white font-medium">High-Conversion Website Build Package</span>. From there, you can upgrade your site with optional 24/7 AI phone answering and instant lead automations.
            </p>
          </div>

          {/* Core Foundation Hero Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-[#2377F6]/40 shadow-[0_0_40px_rgba(35,119,246,0.15)] flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1 flex flex-col gap-4">
              <span className="px-3 py-1 rounded-full bg-[#2377F6] text-white text-xs font-mono font-medium w-fit">
                CORE PRIMARY OFFERING
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                High-Conversion Website Build Package
              </h3>
              <p className="text-base leading-6 text-[#a8a8a8]">
                A custom-built, modern website engineered specifically to turn site traffic into phone calls, emails, and booked appointments. Includes sub-second loading speed, mobile-first design, friction-free inquiry forms, and professional branding.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-[#c4c4c4] pt-2 max-[640px]:grid-cols-1">
                <li className="flex items-center gap-2">
                  <span className="text-[#2377F6] font-bold">✓</span> Fast Sub-Second Load Speeds
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2377F6] font-bold">✓</span> 100% Mobile &amp; Tablet Ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2377F6] font-bold">✓</span> High-Impact Call Buttons
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2377F6] font-bold">✓</span> SEO &amp; Google Search Ready
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3 flex-shrink-0">
              <span className="text-xs text-[#707070] font-mono">COMPLETE PACKAGE</span>
              <span className="text-4xl font-display font-bold text-white">$1,499</span>
              <span className="text-xs text-[#a8a8a8]">One-Time Build &amp; Launch</span>
              <Link href="#pricing" className="common-button common-button--primary mt-2">
                Configure Package →
              </Link>
            </div>
          </div>

          {/* Optional Add-Ons Header */}
          <div className="text-center mt-4">
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Power Add-Ons (Optional Upgrades)
            </h3>
            <p className="text-sm text-[#707070]">
              Enhance your website with optional 24/7 AI assistants and lead automation.
            </p>
          </div>

          {/* Add-Ons 3-Column Grid */}
          <div className="grid grid-cols-3 gap-6 max-[880px]:grid-cols-1">
            {addOns.map((addon, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1c1c1c] border border-white/10 flex flex-col justify-between gap-4 shadow-xl hover:border-white/20 transition-all"
              >
                <div className="flex flex-col gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border w-fit ${addon.color}`}>
                    {addon.badge}
                  </span>
                  <h4 className="text-lg font-display font-medium text-white">
                    {addon.title}
                  </h4>
                  <p className="text-sm text-[#a8a8a8] leading-6">
                    {addon.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#707070]">
                  <span>Optional Add-On</span>
                  <span className="text-white font-medium">Select in Package →</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
