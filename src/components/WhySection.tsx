"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardElements = cardsRef.current?.querySelectorAll(".home-why__floating-card-wrapper");
      if (cardElements) {
        // Scroll entrance reveal
        cardElements.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Continuous subtle float motion
          gsap.to(card, {
            y: index % 2 === 0 ? -10 : 10,
            duration: 3.5 + index * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 1,
      title: "Guaranteed Conversion Boost.",
      description: "We don't just build pretty pages. Every layout, headline, and button is engineered with conversion science to maximize incoming leads and phone calls.",
      positionClass: "-top-[2%] left-[36%]",
    },
    {
      id: 4,
      title: "100% Mobile & Tablet Ready.",
      description: "Over 70% of your prospective clients visit on mobile phones. Our websites load instantly and look flawless on every iOS and Android device.",
      positionClass: "top-[4%] left-[2%]",
    },
    {
      id: 3,
      title: "Zero Technical Drag.",
      description: "You don't need any technical skills. We handle all design, setup, domain connection, and launch so you can focus on running your business.",
      positionClass: "top-[10%] right-[2%]",
    },
    {
      id: 2,
      title: "Optional 24/7 Phone Answering.",
      description: "Add an optional AI voice agent to your business line. Never lose a customer inquiry or appointment after hours or when your staff is busy.",
      positionClass: "top-[46%] left-[2%]",
    },
    {
      id: 5,
      title: "White-Label & NDA Protected.",
      description: "Working as an agency or business partner? We sign NDAs upfront, never contact your clients, and deliver everything under your brand name.",
      positionClass: "top-[52%] right-[2%]",
    },
  ];

  return (
    <section ref={sectionRef} id="why" className="home-why relative page-section scroll-mt-[250px] overflow-hidden py-[120px]">
      {/* Background Stars Texture */}
      <div className="home-why__background-stars absolute inset-0 pointer-events-none">
        <img
          src="/hugo-assets/images/background_stars.png"
          alt="Background stars"
          className="absolute w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="page-wrapper relative z-1">
        {/* Giant "Why?" Title with Glass Mask and Drifting Clouds */}
        <div className="home-why__title relative text-center select-none font-display font-bold text-[clamp(120px,18.5vw,280px)] leading-[1.77] [text-shadow:_0_0_240px_#0745a6]">
          <span className="bg-gradient-to-b from-black/10 via-[#021736] via-40% to-[#d8e7fd] bg-clip-text text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]">
            Why?
          </span>

          {/* Title Background Layer with Drifting Clouds */}
          <div className="home-why__title-background absolute left-1/2 -top-[10%] -translate-x-1/2 w-[max(min(1512px,110%),600px)] aspect-[1512/648] pointer-events-none">
            <div
              className="home-why__background-clouds absolute inset-0 w-full h-full overflow-hidden mix-blend-screen opacity-30"
              style={{
                maskImage: 'url("/hugo-assets/svgs/logo_glass.svg")',
                maskSize: "100% 100%",
                maskPosition: "center center",
                maskRepeat: "no-repeat",
                WebkitMaskImage: 'url("/hugo-assets/svgs/logo_glass.svg")',
                WebkitMaskSize: "100% 100%",
              }}
            >
              <img
                src="/hugo-assets/images/clouds.webp"
                alt="Clouds"
                className="absolute top-0 left-0 w-[160%] animate-[clouds-drift_20s_linear_infinite]"
                style={{ "--clouds-percent-img-width": 160 } as React.CSSProperties}
              />
            </div>
            <img
              src="/hugo-assets/svgs/logo_glass.svg"
              alt="Logo Glass"
              className="home-why__background-logo absolute inset-0 w-full h-full object-contain pointer-events-none opacity-40"
            />
          </div>
        </div>

        {/* 5 Floating Cards Container */}
        <div
          ref={cardsRef}
          className="home-why__floating-cards relative min-h-[700px] mt-[-100px] max-[1080px]:grid max-[1080px]:grid-cols-2 max-[1080px]:gap-3 max-[1080px]:mt-8 max-[1080px]:min-h-0 max-[640px]:grid-cols-1"
        >
          {/* High-Visibility SVG Connecting Lines Network Layer */}
          <svg
            viewBox="0 0 1000 700"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible hidden md:block z-0"
          >
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2377F6" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#995cf5" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2377F6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#74dc9e" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2377F6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#995cf5" stopOpacity="0.4" />
              </linearGradient>
              <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Soft Glow Aura Lines */}
            <path d="M 500 30 C 400 30, 300 50, 220 90" stroke="#2377F6" strokeWidth="6" opacity="0.3" fill="none" filter="url(#neonGlow)" />
            <path d="M 500 30 C 600 30, 700 50, 780 130" stroke="#2377F6" strokeWidth="6" opacity="0.3" fill="none" filter="url(#neonGlow)" />
            <path d="M 220 120 C 140 230, 140 310, 220 400" stroke="#74dc9e" strokeWidth="6" opacity="0.3" fill="none" filter="url(#neonGlow)" />
            <path d="M 780 160 C 860 260, 860 340, 780 440" stroke="#995cf5" strokeWidth="6" opacity="0.3" fill="none" filter="url(#neonGlow)" />
            <path d="M 240 430 C 400 520, 600 520, 760 470" stroke="#2377F6" strokeWidth="6" opacity="0.3" fill="none" filter="url(#neonGlow)" />

            {/* Sharp Pulsing Neon Connecting Lines */}
            <path d="M 500 30 C 400 30, 300 50, 220 90" stroke="url(#lineGrad1)" strokeWidth="2.5" fill="none" strokeDasharray="8 6" filter="url(#neonGlow)" />
            <path d="M 500 30 C 600 30, 700 50, 780 130" stroke="url(#lineGrad1)" strokeWidth="2.5" fill="none" strokeDasharray="8 6" filter="url(#neonGlow)" />
            <path d="M 220 120 C 140 230, 140 310, 220 400" stroke="url(#lineGrad2)" strokeWidth="2.5" fill="none" strokeDasharray="6 6" filter="url(#neonGlow)" />
            <path d="M 780 160 C 860 260, 860 340, 780 440" stroke="url(#lineGrad2)" strokeWidth="2.5" fill="none" strokeDasharray="6 6" filter="url(#neonGlow)" />
            <path d="M 240 430 C 400 520, 600 520, 760 470" stroke="url(#lineGrad1)" strokeWidth="2.5" fill="none" strokeDasharray="10 8" filter="url(#neonGlow)" />

            {/* Glowing Connection Nodes */}
            <circle cx="500" cy="30" r="7" fill="#2377F6" filter="url(#neonGlow)" />
            <circle cx="220" cy="90" r="6" fill="#995cf5" filter="url(#neonGlow)" />
            <circle cx="780" cy="130" r="6" fill="#2377F6" filter="url(#neonGlow)" />
            <circle cx="220" cy="400" r="6" fill="#74dc9e" filter="url(#neonGlow)" />
            <circle cx="780" cy="440" r="6" fill="#995cf5" filter="url(#neonGlow)" />
          </svg>

          {/* Cards */}
          {cards.map((card) => (
            <div
              key={card.id}
              className={`home-why__floating-card-wrapper absolute will-change-transform max-[1080px]:relative max-[1080px]:inset-auto z-10 ${card.positionClass}`}
            >
              <div className="home-why__floating-card relative w-[min(30vw,470px)] max-[1080px]:w-full p-6 flex flex-col gap-3 bg-[#1c1c1c] rounded-2xl shadow-[0_12px_16px_-5px_rgba(0,0,0,0.24),0_8px_12px_-4px_rgba(0,0,0,0.2),inset_0_-1px_0_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)] transition-transform duration-200 hover:-translate-y-1">
                <h3 className="home-why__floating-card-title text-lg text-white font-medium font-display">
                  {card.title}
                </h3>
                <p className="home-why__floating-card-description text-sm text-[#a8a8a8] leading-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
