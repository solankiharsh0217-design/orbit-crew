"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is included in the High-Conversion Website Package?",
    a: "The core package includes a custom-built, modern website designed for mobile phones and laptops, ultra-fast loading speed, clear 'Call Now' buttons, inquiry forms, SEO search setup, domain connection, and launch.",
  },
  {
    q: "How fast will my new website be launched?",
    a: "Most website builds are completed, tested, and launched in 7 to 14 business days once we receive your business details and service list.",
  },
  {
    q: "Will my website look great on mobile phones?",
    a: "Yes, 100%. Every site we build is mobile-first, ensuring smartphone visitors can easily click to call your business, view your services, or submit inquiries in seconds.",
  },
  {
    q: "How does the optional 24/7 AI Phone Voice Agent work?",
    a: "The AI voice assistant connects directly to your business phone line. When you're busy or after hours, the AI answers incoming calls, answers customer questions, and books appointments automatically.",
  },
  {
    q: "Do I need any technical skills or coding knowledge?",
    a: "Zero technical skills needed. We handle 100% of the design, build, hosting, and domain connection for you. If you ever need updates, our team handles them for you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="home-faq page-section">
      <div className="page-wrapper max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="common-title common-title--large common-title--white font-display">
            Clear answers. Zero jargon.
          </h2>
          <p className="text-base text-[#a8a8a8] mt-3">
            Everything you need to know about our website package and add-ons.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#1c1c1c] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 text-white font-display text-lg font-medium hover:text-[#2377F6] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl text-[#2377F6] font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-6 text-[#a8a8a8] border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
