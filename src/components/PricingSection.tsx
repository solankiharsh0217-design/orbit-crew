"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [includeVoice, setIncludeVoice] = useState(true);
  const [includeChatbot, setIncludeChatbot] = useState(true);
  const [includeSync, setIncludeSync] = useState(true);

  const basePrice = 1499;
  const voicePrice = includeVoice ? 499 : 0;
  const chatbotPrice = includeChatbot ? 299 : 0;
  const syncPrice = includeSync ? 199 : 0;

  const totalPrice = basePrice + voicePrice + chatbotPrice + syncPrice;

  return (
    <section id="pricing" className="home-pricing page-section">
      <div className="page-wrapper">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="common-title common-title--large common-title--white font-display mb-4">
            Build your high-conversion website package.
          </h2>
          <p className="text-base text-[#a8a8a8]">
            Start with our foundation Website Build Package, then toggle optional 24/7 AI and automation add-ons.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12 max-[1080px]:grid-cols-1 max-w-[1100px] mx-auto items-start">
          
          {/* Left: Package Configurator Toggles */}
          <div className="col-span-7 p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-2xl flex flex-col gap-6">
            <h3 className="text-xl font-display font-medium text-white mb-2">
              Select Package Add-Ons
            </h3>

            {/* Standard Base Package (Always Included) */}
            <div className="p-4 rounded-xl bg-white/5 border border-[#2377F6]/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#2377F6] font-bold block mb-1">STANDARD FOUNDATION</span>
                <span className="text-white font-medium text-base">High-Conversion Website Build Package</span>
                <span className="text-xs text-[#a8a8a8] block mt-0.5">Sub-second speed, mobile design, CTA lead buttons</span>
              </div>
              <span className="text-lg font-bold text-white whitespace-nowrap">$1,499</span>
            </div>

            {/* Add-On 1: Voice AI */}
            <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
              includeVoice ? "bg-[#74dc9e]/10 border-[#74dc9e]/40" : "bg-black/40 border-white/10 opacity-70"
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={includeVoice}
                  onChange={(e) => setIncludeVoice(e.target.checked)}
                  className="w-5 h-5 accent-[#74dc9e] mt-1"
                />
                <div>
                  <span className="text-white font-medium text-base block">24/7 AI Phone Voice Agent</span>
                  <span className="text-xs text-[#a8a8a8]">Answers business phone calls 24/7 &amp; schedules appointments</span>
                </div>
              </div>
              <span className="text-base font-bold text-white whitespace-nowrap ml-4">+$499</span>
            </label>

            {/* Add-On 2: Chatbot */}
            <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
              includeChatbot ? "bg-[#2377F6]/10 border-[#2377F6]/40" : "bg-black/40 border-white/10 opacity-70"
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={includeChatbot}
                  onChange={(e) => setIncludeChatbot(e.target.checked)}
                  className="w-5 h-5 accent-[#2377F6] mt-1"
                />
                <div>
                  <span className="text-white font-medium text-base block">24/7 AI Web &amp; WhatsApp Chatbot</span>
                  <span className="text-xs text-[#a8a8a8]">Chat assistant on website &amp; WhatsApp for instant FAQs</span>
                </div>
              </div>
              <span className="text-base font-bold text-white whitespace-nowrap ml-4">+$299</span>
            </label>

            {/* Add-On 3: Lead Sync */}
            <label className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
              includeSync ? "bg-[#995cf5]/10 border-[#995cf5]/40" : "bg-black/40 border-white/10 opacity-70"
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={includeSync}
                  onChange={(e) => setIncludeSync(e.target.checked)}
                  className="w-5 h-5 accent-[#995cf5] mt-1"
                />
                <div>
                  <span className="text-white font-medium text-base block">Automated Lead &amp; Phone Sync</span>
                  <span className="text-xs text-[#a8a8a8]">Sends every inquiry &amp; call transcript straight to your phone</span>
                </div>
              </div>
              <span className="text-base font-bold text-white whitespace-nowrap ml-4">+$199</span>
            </label>

          </div>

          {/* Right: Summary Card */}
          <div className="col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#2377F6]/15 to-transparent border border-[#2377F6]/40 shadow-[0_0_40px_rgba(35,119,246,0.15)] flex flex-col justify-between gap-8">
            <div>
              <span className="text-xs font-mono text-[#2377F6] font-bold block mb-2 uppercase tracking-wider">
                Configured Package Summary
              </span>
              <h4 className="text-2xl font-display font-bold text-white mb-6">
                Your Investment
              </h4>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-display font-bold text-white leading-none">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className="text-xs text-[#a8a8a8]">Total Package Price</span>
              </div>

              <div className="flex flex-col gap-3 text-xs text-[#c4c4c4] pt-4 border-t border-white/10">
                <div className="flex justify-between">
                  <span>High-Conversion Website Build</span>
                  <span className="text-white font-mono">$1,499</span>
                </div>
                {includeVoice && (
                  <div className="flex justify-between text-[#74dc9e]">
                    <span>24/7 AI Phone Voice Agent</span>
                    <span className="font-mono">+$499</span>
                  </div>
                )}
                {includeChatbot && (
                  <div className="flex justify-between text-[#2377F6]">
                    <span>AI Web &amp; WhatsApp Chatbot</span>
                    <span className="font-mono">+$299</span>
                  </div>
                )}
                {includeSync && (
                  <div className="flex justify-between text-[#995cf5]">
                    <span>Automated Lead Sync</span>
                    <span className="font-mono">+$199</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <Link href="/contact" className="common-button common-button--primary justify-center py-3 text-sm">
                Lock In Package &amp; Get Started →
              </Link>
              <p className="text-[11px] text-center text-[#707070]">
                Fast Turnaround &middot; 100% Satisfaction Guarantee &middot; No Hidden Fees
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
