"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section ref={sectionRef} className="home-hero relative min-h-[max(600px,calc(100vh-320px))] flex flex-col overflow-hidden">
      <div className="page-wrapper home-hero__wrapper flex flex-col flex-1">
        <div className="home-hero__content page-section flex flex-col flex-1 pb-4 pt-[84px] max-[640px]:pt-6">
          <div className="home-hero__inner relative flex flex-col flex-1 max-[880px]:flex-col">
            
            {/* Left Content Column */}
            <div className="home-hero__text relative z-1 pointer-events-none flex flex-col flex-1 max-[880px]:static max-[880px]:text-left">
              <div className="pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#2377F6] animate-pulse" />
                  OrbitCrew Digital Execution
                </div>

                <h1
                  ref={titleRef}
                  className="home-hero__title common-title common-title--2xl common-title--white w-[calc(75%-100px)] max-w-full mb-6 max-[880px]:w-full"
                  style={{ textWrap: "balance" }}
                >
                  Turn low-converting websites into 24/7 revenue engines.
                </h1>

                <p
                  ref={subtitleRef}
                  className="home-hero__subtitle w-1/2 max-w-[540px] text-base leading-6 text-[#a8a8a8] mb-8 max-[880px]:w-full max-[880px]:max-w-full"
                  style={{ textWrap: "balance" }}
                >
                  We build high-conversion Next.js websites and deploy AI text &amp; voice conversational agents connected directly to your mobile numbers and workflow automations.
                </p>

                <div ref={ctasRef} className="home-hero__ctas flex flex-col items-start gap-4">
                  <div className="common-trial-cta flex gap-4 items-center max-[540px]:flex-col max-[540px]:w-full">
                    <div className="common-trial-cta__buttons-group flex gap-4 min-w-[200px] max-[540px]:w-full max-[540px]:flex-col">
                      <a href="#pricing" className="common-button common-button--primary">
                        Book a Discovery Call
                      </a>
                      <a href="#how-it-works" className="common-button common-button--secondary-dark">
                        See How It Works
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-[#707070]">
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
              <div className="home-hero__scene-image home-hero__scene-image--raster pt-[76px] text-right max-[880px]:pt-8 max-[880px]:text-center relative">
                <img
                  src="/hugo-assets/images/scene_raster.webp"
                  alt="OrbitCrew AI Ecosystem"
                  className="inline-block max-w-[760px] max-h-full aspect-[2407/2084] translate-x-[5%] max-[1280px]:max-w-[640px] max-[1080px]:max-w-[540px] max-[880px]:max-w-full max-[880px]:translate-x-0"
                />

                {/* Floating Service Badges Overlay */}
                <div className="absolute top-[35%] right-[10%] bg-[#1c1c1c]/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-white shadow-xl max-[880px]:hidden">
                  <span className="text-[#2377F6] font-bold">⚡ High Conversion</span> Website Dev
                </div>
                <div className="absolute top-[60%] right-[35%] bg-[#1c1c1c]/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-white shadow-xl max-[880px]:hidden">
                  <span className="text-[#74dc9e] font-bold">📞 Voice &amp; Text</span> Mobile Telephony
                </div>
                <div className="absolute top-[78%] right-[15%] bg-[#1c1c1c]/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-white shadow-xl max-[880px]:hidden">
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
