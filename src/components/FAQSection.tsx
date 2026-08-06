"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How do AI voice agents connect to mobile phone numbers?",
    a: "We integrate AI voice agents directly with your existing business mobile phone numbers via secure telephony gateways (Twilio, Vapi, PSTN). The AI answers incoming calls 24/7 in natural, zero-latency human speech and sends SMS summaries to your mobile.",
  },
  {
    q: "How does your high-conversion web development solve low-converting websites?",
    a: "Static sites lose visitors due to slow page speeds, cluttered UI, and weak CTAs. We replace leaky sites with high-performance Next.js architectures built around conversion science, instant loading, and seamless lead capture.",
  },
  {
    q: "Can the AI agent handle both text chat and phone calls simultaneously?",
    a: "Yes. OrbitCrew AI agents operate omnichannels — engaging website visitors via live web chat, following up via SMS/WhatsApp, and answering live voice calls on your mobile numbers with full shared conversation context.",
  },
  {
    q: "Will OrbitCrew ever contact our agency's clients directly?",
    a: "Never. We operate as an invisible white-label execution arm under strict NDAs signed upfront. We never contact, pitch, or poach your clients — all deliverables are strictly branded under your agency.",
  },
  {
    q: "What workflow automations can be linked to our CRM?",
    a: "We automate lead qualification, calendar appointment booking, phone call transcription logging, and real-time alerts into HubSpot, Salesforce, Pipedrive, Slack, and custom n8n/Zapier workflows.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = groupsRef.current?.querySelectorAll(".home-faq__group");
      if (groups) {
        groups.forEach((group) => {
          gsap.fromTo(
            group,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: group,
                start: "top 80%",
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
    <section ref={sectionRef} id="faq" className="home-faq page-section">
      <div className="page-wrapper">
        <div className="home-faq__wrapper flex items-start justify-between gap-16 max-[1080px]:flex-col max-[1080px]:gap-12">
          
          {/* Sticky Left Title */}
          <div className="home-faq__title flex flex-col items-start sticky top-[84px] flex-shrink-0 max-[1080px]:static max-[1080px]:w-full">
            <h2 className="common-title common-title--large common-title--white font-display">
              Got questions?
            </h2>
            <p className="text-base text-[#707070] mt-2">
              We have the answers.
            </p>
            <div className="home-faq__title-cta mt-8">
              <a href="#contact" className="common-button common-button--secondary-dark">
                Got more questions? Ask OrbitCrew ↗
              </a>
            </div>
          </div>

          {/* Right Chat Bubbles Grid */}
          <div ref={groupsRef} className="home-faq__content flex flex-col gap-12 w-full max-w-[640px] max-[640px]:gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="home-faq__group flex flex-col gap-6 w-full">
                
                {/* Question Bubble (Right Aligned) */}
                <div className="home-faq__message home-faq__message--question flex justify-end w-full">
                  <div className="home-faq__message-container home-faq__message-container--question bg-black border border-[#383838] rounded-[12px_4px_12px_12px] p-4 max-w-[85%] shadow">
                    <p className="home-faq__message-text text-white text-base font-sans">
                      {faq.q}
                    </p>
                  </div>
                </div>

                {/* Answer Bubble (Left Aligned) */}
                <div className="home-faq__message home-faq__message--answer flex justify-start w-full">
                  <div className="home-faq__message-container home-faq__message-container--answer bg-gradient-to-b from-[#1c1c1c] to-[#383838] border border-white/10 rounded-[4px_12px_12px_12px] p-4 max-w-[85%] max-[1080px]:max-w-full shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12),0_1px_2px_-1px_rgba(0,0,0,0.08),inset_0_-1px_0_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)]">
                    <p className="home-faq__message-text text-white text-base font-sans leading-6">
                      {faq.a}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
