"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lightfall from "./Lightfall";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power3.out" });
      gsap.fromTo(ctasRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });

      // Mockup gentle float animation
      gsap.to(mockupRef.current, {
        y: -15,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="home-hero relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
      {/* Full Viewport WebGL Lightfall Background on Pure Pitch Black */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Lightfall
          colors={["#2377F6", "#1972f5", "#0957D9", "#4488ff"]}
          backgroundColor="#000000"
          speed={0.4}
          streakCount={4}
          streakWidth={0.9}
          streakLength={0.9}
          glow={0.5}
          density={0.4}
          twinkle={0.8}
          zoom={1.8}
          backgroundGlow={0.0}
          opacity={0.4}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.8}
        />
      </div>

      <div className="page-wrapper home-hero__wrapper flex flex-col flex-1 relative z-1">
        <div className="home-hero__content page-section flex flex-col flex-1 pb-16 pt-[160px] max-[640px]:pt-[120px]">
          
          {/* Zero-Overlap 2-Column Responsive Grid */}
          <div className="grid grid-cols-12 gap-8 items-center max-[1080px]:grid-cols-1 flex-1">
            
            {/* Left Column: Headline, Subtitle, CTAs (7 Columns) */}
            <div className="col-span-7 max-[1080px]:col-span-12 flex flex-col justify-center text-left">
              <h1
                ref={titleRef}
                className="home-hero__title common-title common-title--2xl common-title--white max-w-full mb-6 font-display font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
                style={{ textWrap: "balance" }}
              >
                We Build Websites That Get You More Customers — Guaranteed.
              </h1>

              <p
                ref={subtitleRef}
                className="home-hero__subtitle max-w-[560px] text-lg leading-7 text-[#c4c4c4] mb-8 font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                style={{ textWrap: "balance" }}
              >
                Stop losing leads to slow, outdated websites. We build fast, high-converting websites for businesses and local services engineered to turn visitors into phone calls and booked appointments.
              </p>

              <div ref={ctasRef} className="home-hero__ctas flex flex-col items-start gap-4">
                <div className="common-trial-cta flex gap-4 items-center max-[540px]:flex-col max-[540px]:w-full">
                  <div className="common-trial-cta__buttons-group flex gap-4 min-w-[200px] max-[540px]:w-full max-[540px]:flex-col">
                    <a href="/contact" className="common-button common-button--primary shadow-[0_4px_20px_rgba(35,119,246,0.4)]">
                      Get Free Website Audit →
                    </a>
                    <a href="#pricing" className="common-button common-button--secondary-dark">
                      See Package Pricing
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#8c8c8c] tracking-wide">
                  Fast Turnaround &middot; 100% Mobile Ready &middot; Guaranteed Conversion Boost
                </p>
              </div>
            </div>

            {/* Right Column: High-Conversion Website Build Browser Device Frame (5 Columns) */}
            <div ref={mockupRef} className="col-span-5 max-[1080px]:col-span-12 relative w-full flex justify-center">
              <div className="w-full max-w-[540px] rounded-2xl border border-white/15 bg-[#1c1c1c]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden relative group">
                
                {/* Browser Device Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#a8a8a8] max-w-[200px] truncate">
                    https://apexservices.com
                  </div>
                  <span className="text-[11px] font-mono text-[#2377F6] font-bold">
                    High Conversion
                  </span>
                </div>

                {/* Website Build Mockup Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src="/hugo-assets/images/web_build_local_service.jpg"
                    alt="High Conversion Website Build"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badges Overlay (Non-Overlapping) */}
                <div className="p-4 bg-[#0a0a0a]/90 flex flex-wrap gap-2 justify-between border-t border-white/10">
                  <div className="bg-[#2377F6]/15 border border-[#2377F6]/30 px-3 py-1 rounded-lg text-xs text-[#2377F6] font-medium font-mono">
                    ⚡ Sub-Second Speed
                  </div>
                  <div className="bg-[#74dc9e]/15 border border-[#74dc9e]/30 px-3 py-1 rounded-lg text-xs text-[#74dc9e] font-medium font-mono">
                    📞 Click-to-Call Built-in
                  </div>
                  <div className="bg-[#995cf5]/15 border border-[#995cf5]/30 px-3 py-1 rounded-lg text-xs text-[#995cf5] font-medium font-mono">
                    🔔 Instant Lead Alerts
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
