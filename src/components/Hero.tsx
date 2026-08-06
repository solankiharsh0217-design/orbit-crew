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
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power3.out" });
      gsap.fromTo(ctasRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });

      // Scene gentle float animation
      gsap.to(sceneRef.current, {
        y: -20,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Parallax scrub on scroll
      gsap.to(sceneRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="home-hero relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
      {/* Full Viewport WebGL Lightfall Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Lightfall
          colors={["#2377F6", "#1972f5", "#0957D9", "#4488ff"]}
          backgroundColor="#000000"
          speed={0.4}
          streakCount={4}
          streakWidth={0.9}
          streakLength={0.9}
          glow={0.7}
          density={0.4}
          twinkle={0.8}
          zoom={1.8}
          backgroundGlow={0.3}
          opacity={0.5}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.8}
        />
      </div>

      {/* Smooth Ambient Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-0" />

      <div className="page-wrapper home-hero__wrapper flex flex-col flex-1 relative z-1">
        <div className="home-hero__content page-section flex flex-col flex-1 pb-16 pt-[120px] max-[640px]:pt-12">
          <div className="home-hero__inner relative flex flex-col flex-1 max-[880px]:flex-col">
            
            {/* Left Content Column */}
            <div className="home-hero__text relative z-1 pointer-events-none flex flex-col flex-1 justify-center max-[880px]:static max-[880px]:text-left">
              <div className="pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2377F6]/15 border border-[#2377F6]/40 text-[#2377F6] text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(35,119,246,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[#2377F6] animate-pulse" />
                  OrbitCrew Digital Execution
                </div>

                <h1
                  ref={titleRef}
                  className="home-hero__title common-title common-title--2xl common-title--white w-[calc(75%-80px)] max-w-full mb-6 max-[880px]:w-full font-display font-bold leading-[1.1] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
                  style={{ textWrap: "balance" }}
                >
                  Turn low-converting websites into 24/7 revenue engines.
                </h1>

                <p
                  ref={subtitleRef}
                  className="home-hero__subtitle w-1/2 max-w-[540px] text-lg leading-7 text-[#c4c4c4] mb-8 max-[880px]:w-full max-[880px]:max-w-full font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                  style={{ textWrap: "balance" }}
                >
                  We build high-conversion Next.js websites and deploy AI text &amp; voice conversational agents connected directly to your mobile numbers and workflow automations.
                </p>

                <div ref={ctasRef} className="home-hero__ctas flex flex-col items-start gap-4">
                  <div className="common-trial-cta flex gap-4 items-center max-[540px]:flex-col max-[540px]:w-full">
                    <div className="common-trial-cta__buttons-group flex gap-4 min-w-[200px] max-[540px]:w-full max-[540px]:flex-col">
                      <a href="/contact" className="common-button common-button--primary shadow-[0_4px_20px_rgba(35,119,246,0.4)]">
                        Book a Discovery Call
                      </a>
                      <a href="/services" className="common-button common-button--secondary-dark">
                        See How It Works
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-[#8c8c8c] tracking-wide">
                    100% White-Label &middot; NDA Signed Upfront &middot; Zero Client Poaching
                  </p>
                </div>
              </div>
            </div>

            {/* Right Scene raster image */}
            <div
              ref={sceneRef}
              className="home-hero__scene absolute inset-0 z-0 flex justify-end flex-row max-[880px]:static max-[880px]:justify-center pointer-events-none"
            >
              <div className="home-hero__scene-image home-hero__scene-image--raster pt-[60px] text-right max-[880px]:pt-8 max-[880px]:text-center relative">
                <img
                  src="/hugo-assets/images/scene_raster.webp"
                  alt="OrbitCrew AI Ecosystem"
                  className="inline-block max-w-[760px] max-h-full aspect-[2407/2084] translate-x-[5%] max-[1280px]:max-w-[640px] max-[1080px]:max-w-[540px] max-[880px]:max-w-full max-[880px]:translate-x-0 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />

                {/* Floating Service Badges Overlay */}
                <div className="absolute top-[35%] right-[10%] bg-[#1c1c1c]/90 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] max-[880px]:hidden">
                  <span className="text-[#2377F6] font-bold">⚡ High Conversion</span> Website Dev
                </div>
                <div className="absolute top-[60%] right-[35%] bg-[#1c1c1c]/90 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] max-[880px]:hidden">
                  <span className="text-[#74dc9e] font-bold">📞 Voice &amp; Text</span> Mobile Telephony
                </div>
                <div className="absolute top-[78%] right-[15%] bg-[#1c1c1c]/90 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] max-[880px]:hidden">
                  <span className="text-[#995cf5] font-bold">⚙️ Automated</span> CRM &amp; Workflows
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
