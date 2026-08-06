"use client";

export default function WhySection() {
  const cards = [
    {
      id: 1,
      title: "Guaranteed Conversion Boost.",
      description: "We don't just build pretty pages. Every layout, headline, and button is engineered with conversion science to maximize incoming leads and phone calls.",
      positionClass: "-top-[18%] left-1/2 -translate-x-1/2",
    },
    {
      id: 2,
      title: "100% Mobile & Tablet Ready.",
      description: "Over 70% of your prospective clients visit on mobile phones. Our websites load instantly and look flawless on every iOS and Android device.",
      positionClass: "top-[12%] left-[2%]",
    },
    {
      id: 3,
      title: "Zero Technical Drag.",
      description: "You don't need any technical skills. We handle all design, setup, domain connection, and launch so you can focus on running your business.",
      positionClass: "top-[12%] right-[2%]",
    },
    {
      id: 4,
      title: "Optional 24/7 Phone Answering.",
      description: "Add an optional AI voice agent to your business line. Never lose a customer inquiry or appointment after hours or when your staff is busy.",
      positionClass: "top-[64%] left-[4%]",
    },
    {
      id: 5,
      title: "White-Label & NDA Protected.",
      description: "Working as an agency or business partner? We sign NDAs upfront, never contact your clients, and deliver everything under your brand name.",
      positionClass: "top-[64%] right-[4%]",
    },
  ];

  return (
    <section id="why" className="home-why relative page-section scroll-mt-[200px] overflow-hidden py-12 bg-black">
      {/* Background Stars Texture */}
      <div className="home-why__background-stars absolute inset-0 pointer-events-none">
        <img
          src="/hugo-assets/images/background_stars.png"
          alt="Background stars"
          className="absolute w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="page-wrapper relative z-1">
        {/* Giant "Why?" Title in the Middle */}
        <div className="home-why__title relative text-center select-none font-display font-bold text-[clamp(100px,15vw,220px)] leading-[1.2] [text-shadow:_0_0_180px_#0745a6]">
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

        {/* 5 Tight Cards Floating Around "Why?" (No Wave Motion, No GSAP Fan-Out) */}
        <div className="home-why__floating-cards relative min-h-[460px] mt-[-60px] max-[1080px]:grid max-[1080px]:grid-cols-2 max-[1080px]:gap-4 max-[1080px]:mt-6 max-[1080px]:min-h-0 max-[640px]:grid-cols-1">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`home-why__floating-card-wrapper absolute max-[1080px]:relative max-[1080px]:inset-auto z-10 ${card.positionClass}`}
            >
              <div className="home-why__floating-card relative w-[min(26vw,380px)] max-[1080px]:w-full p-5 flex flex-col gap-2 bg-[#1c1c1c] rounded-2xl border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-1 hover:border-[#2377F6]/50">
                <h3 className="home-why__floating-card-title text-base text-white font-medium font-display">
                  {card.title}
                </h3>
                <p className="home-why__floating-card-description text-xs text-[#a8a8a8] leading-5">
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
