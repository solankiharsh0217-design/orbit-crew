"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "High-Speed Mobile & Desktop Design.",
    description: "Built to load in less than 1 second on every smartphone and laptop. No lag, no long waiting times — visitors see your services immediately and never leave for competitors.",
    bgClass: "home-features__card--brown bg-[#1c1c1c] border border-white/10",
    image: "/hugo-assets/images/card_mobile_speed.jpg",
  },
  {
    title: "Frictionless Call & Booking Buttons.",
    description: "We place high-converting 'Call Now' and 'Book Appointment' buttons right where your customers look first. Zero friction between browsing your site and becoming a client.",
    bgClass: "home-features__card--light-blue bg-[#1c1c1c] border border-white/10",
    image: "/hugo-assets/images/card_call_button.jpg",
  },
  {
    title: "Optional 24/7 AI Phone Answering Add-On.",
    description: "Never miss a customer phone call again. Our AI phone assistant answers calls on your business line 24/7, answers questions, and schedules appointments automatically.",
    bgClass: "home-features__card--light-orange bg-[#1c1c1c] border border-white/10",
    image: "/hugo-assets/images/card_ai_phone.jpg",
  },
  {
    title: "Optional AI Web & WhatsApp Chatbot.",
    description: "An intelligent chat assistant on your website and WhatsApp that answers customer questions 24/7 and captures contact details even while you sleep.",
    bgClass: "home-features__card--light-green bg-[#1c1c1c] border border-white/10",
    image: "/hugo-assets/images/card_whatsapp_chat.jpg",
  },
  {
    title: "Instant Lead Alerts Directly To Your Phone.",
    description: "Every new website inquiry, appointment booking, or phone call transcript is forwarded to your phone immediately via SMS or email so you can close deals fast.",
    bgClass: "home-features__card--red bg-[#1c1c1c] border border-white/10",
    image: "/hugo-assets/images/card_lead_alert.jpg",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".home-features__card");
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.85, scale: 0.98 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-we-do-it" className="home-features page-section flex flex-col gap-12 py-16">
      <div className="page-wrapper">
        <div className="home-features__title text-center mb-16">
          <h2 className="common-title common-title--large common-title--white font-display">
            How We Turn Your Website Into A Customer Generator.
          </h2>
          <p className="text-base text-[#a8a8a8] mt-3">
            Here&apos;s how OrbitCrew builds high-conversion websites for your business.
          </p>
        </div>

        <div className="home-features__stack relative flex flex-col gap-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`home-features__card p-8 w-full transition-all duration-300 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden ${feature.bgClass} max-[640px]:p-6`}
            >
              <div className="flex items-center justify-between gap-8 max-[1080px]:flex-col max-[1080px]:items-start">
                
                {/* Card Text Content */}
                <div className="home-features__card-content flex-1 flex flex-col gap-4 z-10 max-w-[580px]">
                  <span className="text-xs font-mono text-[#2377F6] font-bold">
                    STEP 0{idx + 1}
                  </span>
                  <h3 className="common-title common-title--small common-title--white font-display">
                    {feature.title}
                  </h3>
                  <p className="home-features__card-description text-white/80 text-base leading-7">
                    {feature.description}
                  </p>
                </div>

                {/* Isolated 3D Asset Image */}
                <div className="w-full max-w-[480px] pointer-events-none flex-shrink-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
