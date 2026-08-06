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
    <section ref={sectionRef} id="why" className="home-why relative page-section scroll-mt-[250px] overflow-hidden py-[120px] bg-black">
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

        {/* 5 Clean Floating Cards Container (Zero SVG Circular Rings) */}
        <div
          ref={cardsRef}
          className="home-why__floating-cards relative min-h-[700px] mt-[-100px] max-[1080px]:grid max-[1080px]:grid-cols-2 max-[1080px]:gap-4 max-[1080px]:mt-8 max-[1080px]:min-h-0 max-[640px]:grid-cols-1"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`home-why__floating-card-wrapper absolute will-change-transform max-[1080px]:relative max-[1080px]:inset-auto z-10 ${card.positionClass}`}
            >
              <div className="home-why__floating-card relative w-[min(30vw,470px)] max-[1080px]:w-full p-6 flex flex-col gap-3 bg-[#1c1c1c] rounded-2xl border border-white/10 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-1">
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
