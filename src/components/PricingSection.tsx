"use client";

import { useState } from "react";
import SteppedSlider from "./SteppedSlider";

export default function PricingSection() {
  const [conversations, setConversations] = useState(500);

  // Price calculation for extra AI voice & text phone interactions
  const aiCost = Math.round(conversations * 0.08);

  return (
    <section id="pricing" className="home-pricing page-section">
      <div className="page-wrapper">
        <h2 className="home-pricing__title common-title common-title--large common-title--white text-center mb-[84px] max-[640px]:mb-[60px] font-display">
          Transparent delivery packages. Flexible capacity.
        </h2>

        <div className="home-pricing__content flex justify-center gap-[149px] max-[1080px]:flex-col max-[1080px]:items-center max-[1080px]:gap-6">
          
          {/* Left: Cards & Bill Stack */}
          <div className="home-pricing__left flex flex-col items-center justify-center gap-[84px] max-w-[590px] w-full max-[1080px]:contents">
            <div className="home-pricing__cards relative w-full aspect-[1.85/1] max-[1080px]:max-w-[500px] max-[1080px]:order-2 max-[1080px]:mb-12">
              
              {/* Animated Bill Popup */}
              <div
                className={`home-pricing__bill absolute top-[calc(100%-12px)] left-1/2 -translate-x-1/2 w-[95%] h-[80px] p-6 pt-6 flex items-start justify-between rounded-b-2xl overflow-hidden text-[#707070] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 ${
                  conversations > 500 ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
              >
                <div className="home-pricing__bill-background absolute inset-0 w-full h-full object-cover object-bottom z-0">
                  <img src="/hugo-assets/images/bill_background.webp" alt="Bill Background" className="w-full h-full object-cover" />
                </div>
                <span className="relative z-1 text-sm font-medium">Estimated AI Voice &amp; Text Usage</span>
                <span className="home-pricing__bill-price relative z-1 text-lg font-bold text-[#1c1c1c]">
                  +${aiCost} / mo
                </span>
              </div>

              {/* Tier Cards Stack */}
              <div className="home-pricing__card home-pricing__card--essentials absolute inset-0 p-6 rounded-2xl flex flex-col justify-between overflow-hidden shadow-[0_12px_16px_-5px_rgba(211,66,13,0.2),0_8px_12px_-4px_rgba(211,66,13,0.2),inset_0_-1px_0_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)] z-1">
                <div className="home-pricing__card-background absolute inset-0 w-full h-full object-cover z-0">
                  <img src="/hugo-assets/images/card_background_orange.png" alt="AI Telephony & Voice Pod" className="w-full h-full object-cover" />
                </div>

                {/* Header */}
                <div className="home-pricing__card-header relative z-1 flex justify-between items-start text-white/60 text-2xl">
                  <div className="home-pricing__card-header-left flex flex-col gap-1">
                    <span className="text-white text-2xl font-display font-medium">AI Telephony &amp; Voice Pod</span>
                    <span className="text-xs text-white/60">Voice + Text Mobile Phone Agents</span>
                  </div>
                  <div className="home-pricing__card-logos flex items-center gap-2 text-white">
                    <span className="home-pricing__card-badge text-xs text-white bg-white/32 px-3 py-2 rounded-lg shadow">
                      Most Popular
                    </span>
                  </div>
                </div>

                {/* Footer Price */}
                <div className="home-pricing__card-footer relative z-1 flex items-end gap-3">
                  <span className="home-pricing__card-price text-8xl font-display font-bold text-white leading-none">
                    $2,450
                  </span>
                  <span className="text-base text-white/60 mb-2">/ month &middot; 100% White-Label</span>
                </div>
              </div>

            </div>

            {/* Trial CTA button under cards */}
            <div className="home-pricing__trial w-full flex flex-col items-center gap-2">
              <a href="#contact" className="common-button common-button--primary justify-center w-full max-w-[280px]">
                Book a Partner Discovery Call
              </a>
              <p className="text-xs text-[#707070]">NDA signed upfront &middot; Cancel anytime</p>
            </div>
          </div>

          {/* Right: Configurator & Feature list */}
          <div className="home-pricing__right w-full max-w-[512px] flex flex-col gap-12 text-[#707070]">
            
            {/* Calculator Configurator */}
            <div className="home-pricing__configurator flex flex-col gap-6 p-6 rounded-2xl bg-[#1c1c1c] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12),0_1px_2px_-1px_rgba(0,0,0,0.08),inset_0_-1px_0_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)]">
              <span className="home-pricing__configurator-title text-base text-white font-medium">
                Estimate monthly AI voice calls &amp; text messages:
              </span>

              <div className="home-pricing__configurator-content flex justify-between items-baseline gap-3">
                <span className="home-pricing__configurator-resolutions text-white text-5xl font-display font-bold">
                  {conversations.toLocaleString()}
                </span>
                <span className="home-pricing__configurator-price text-sm text-[#a8a8a8]">
                  +${aiCost} / mo
                </span>
              </div>

              {/* Stepped Slider */}
              <SteppedSlider
                value={conversations}
                steps={[50, 500, 1000, 2500, 5000]}
                onChange={(val) => setConversations(val)}
              />

              <p className="home-pricing__configurator-details text-xs text-[#707070]">
                Estimation based on $0.08 per AI voice phone call &amp; SMS interaction.
              </p>
            </div>

            {/* Included Items */}
            <div>
              <h3 className="home-pricing__included-title text-base text-white font-medium mb-6">
                What&apos;s included in execution?
              </h3>
              <div className="home-pricing__included-items flex flex-col gap-6 text-base leading-6 text-[#a8a8a8]">
                <div className="home-pricing__included-item flex items-start gap-3">
                  <span className="text-[#2377F6] text-lg mt-0.5">✓</span>
                  <div>
                    <strong className="home-pricing__included-item-title text-white font-medium block mb-1">
                      High-Conversion Next.js Web Development
                    </strong>
                    Custom React/Next.js builds engineered to eliminate conversion leaks.
                  </div>
                </div>

                <div className="home-pricing__included-item flex items-start gap-3">
                  <span className="text-[#2377F6] text-lg mt-0.5">✓</span>
                  <div>
                    <strong className="home-pricing__included-item-title text-white font-medium block mb-1">
                      Mobile Number Voice &amp; Text AI Integration
                    </strong>
                    24/7 AI conversational phone calls, SMS follow-ups, and live CRM sync.
                  </div>
                </div>

                <div className="home-pricing__included-item flex items-start gap-3">
                  <span className="text-[#2377F6] text-lg mt-0.5">✓</span>
                  <div>
                    <strong className="home-pricing__included-item-title text-white font-medium block mb-1">
                      100% White-Label &amp; NDA Protection
                    </strong>
                    Invisible execution pods working under your brand with zero client poaching.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
