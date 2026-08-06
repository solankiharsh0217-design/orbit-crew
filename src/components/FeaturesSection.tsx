"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "High-Conversion Next.js Web Architecture.",
    description: "Replace low-converting, leaky websites with sub-second Next.js web builds. Designed with conversion science, responsive layout math, and frictionless CTA flows to turn passive traffic into qualified calls.",
    bgClass: "home-features__card--brown bg-[#2c150c]",
    gradientColor: "#2c150c",
    image: "/hugo-assets/images/integrations.png",
  },
  {
    title: "Voice AI Agents Connected to Mobile Numbers.",
    description: "Deploy natural conversational voice AI agents connected directly to your business mobile phone lines. Handle incoming calls 24/7, answer customer inquiries instantly, and route urgent calls to live staff.",
    bgClass: "home-features__card--light-blue bg-[#032b35]",
    gradientColor: "#032b35",
    image: "/hugo-assets/images/activate.png",
  },
  {
    title: "Omnichannel Text AI Chatbots (Web, SMS, WhatsApp).",
    description: "Multi-turn intelligent AI text agents that engage visitors on your website and follow up via SMS or WhatsApp directly from your mobile business number with zero delay.",
    bgClass: "home-features__card--light-orange bg-[#361e02]",
    gradientColor: "#361e02",
    image: "/hugo-assets/images/configure.png",
  },
  {
    title: "Automated CRM & Workflow Pipeline Sync.",
    description: "Connect lead form submissions, phone call transcripts, and chatbot conversations directly into your CRM, Google Calendar, and Slack via custom n8n and Zapier automations.",
    bgClass: "home-features__card--light-green bg-[#1d2c0c]",
    gradientColor: "#1d2c0c",
    image: "/hugo-assets/images/workflow.png",
  },
  {
    title: "Real-Time Call Transcripts & Conversion Analytics.",
    description: "Track phone call recordings, AI conversation accuracy, lead conversion rates, and ROI metrics in real time with transparent analytics dashboards.",
    bgClass: "home-features__card--red bg-[#34040b]",
    gradientColor: "#34040b",
    image: "/hugo-assets/images/analytics.png",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".home-features__card");
      if (cards) {
        cards.forEach((card, idx) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            end: "bottom 35%",
            onEnter: () => {
              gsap.to(card, { scale: 1, opacity: 1, duration: 0.3 });
            },
            onLeave: () => {
              if (idx < cards.length - 1) {
                gsap.to(card, { scale: 0.96, duration: 0.3 });
              }
            },
            onEnterBack: () => {
              gsap.to(card, { scale: 1, opacity: 1, duration: 0.3 });
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="home-features page-section flex flex-col gap-[84px] max-[640px]:gap-10">
      <div className="page-wrapper">
        <div className="home-features__title sticky top-[10vh] text-center z-1 mb-[84px]">
          <h2 className="common-title common-title--large common-title--white font-display">
            Built for growth. Engineered to convert.
          </h2>
          <p className="text-base text-text-secondary mt-3">
            Here&apos;s how OrbitCrew scales your revenue pipeline.
          </p>
        </div>

        <div className="home-features__stack relative flex flex-col gap-[160px] max-[640px]:gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`home-features__card sticky p-8 w-full aspect-[1256/480] transition-all duration-200 rounded-2xl shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12),0_1px_2px_-1px_rgba(0,0,0,0.08),inset_0_-1px_0_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)] overflow-hidden ${feature.bgClass} max-[640px]:h-[400px] max-[640px]:aspect-auto`}
              style={{
                top: `calc(30vh + ${idx * 16}px)`,
                zIndex: idx + 2,
              }}
            >
              {/* Product Screenshot */}
              <div className="home-features__card-screenshot absolute top-[8%] -right-[15%] w-[70%] max-[1080px]:w-[140%] max-[1080px]:left-[20%] pointer-events-none">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full object-cover rounded-xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Bottom Gradient & Blur */}
              <div
                className="home-features__card-gradient w-full h-full absolute left-0 top-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${feature.gradientColor} 0%, transparent 60%)`,
                }}
              />
              <div className="home-features__card-blur w-full h-[45%] absolute left-0 -bottom-[2px] backdrop-blur-[10px] [mask:linear-gradient(0deg,rgb(0,0,0)_60%,transparent)] pointer-events-none" />

              {/* Card Text Content */}
              <div className="home-features__card-content relative h-full flex flex-col justify-end gap-4 z-10 max-w-[691px]">
                <h3 className="common-title common-title--small common-title--white font-display">
                  {feature.title}
                </h3>
                <p className="home-features__card-description text-white/60 text-base leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
