"use client";

export default function SolutionsSection() {
  const concepts = [
    {
      title: "High-Conversion Web Development.",
      desc: "We turn low-converting, static websites into blazing-fast Next.js architectures optimized for conversion psychology, sub-second speed, and lead velocity.",
    },
    {
      title: "Text & Voice AI Agents.",
      desc: "Deploy intelligent 24/7 AI agents connected directly to web chat and live mobile phone lines — handling text inquiries, phone calls, and instant voice responses.",
    },
    {
      title: "Workflow Automations.",
      desc: "Connect your website, mobile telephony, CRM, calendar booking, and custom n8n/Zapier pipelines into one autonomous growth engine.",
    },
  ];

  const commitments = [
    {
      label: "SECURITY",
      title: "Enterprise-grade security.",
      desc: "Your business data, CRM records, and customer communications are protected with end-to-end encryption, secure telephony gateways, and strict access controls.",
      icon: "/hugo-assets/svgs/badge_security.svg",
    },
    {
      label: "TELEPHONY",
      title: "Mobile number integration.",
      desc: "Connect AI voice & text agents directly to your existing business mobile phone numbers via Twilio, Vapi, and secure PSTN gateways.",
      icon: "/hugo-assets/svgs/badge_compliance.svg",
    },
    {
      label: "WHITE-LABEL",
      title: "100% Invisible execution.",
      desc: "Delivered strictly under your brand with NDAs signed upfront. We act as your silent execution pod — zero client poaching, total peace of mind.",
      icon: "/hugo-assets/svgs/badge_hosting.svg",
    },
  ];

  return (
    <section id="solutions" className="home-solutions page-section">
      <div className="page-wrapper">
        <div className="home-solutions__wrapper flex flex-col gap-[84px] pt-[84px]">
          {/* Main Title */}
          <h2 className="home-solutions__title common-title common-title--xl font-display font-bold">
            <span className="text-white block">3 Core Services.</span>
            <span className="text-white/72 block">1 Complete Growth System.</span>
            <span className="text-white/48 block">Infinite Revenue Scalability.</span>
          </h2>

          {/* Concepts Grid */}
          <div className="home-solutions__concepts grid grid-cols-3 gap-6 max-[880px]:grid-cols-2 max-[640px]:grid-cols-1">
            {concepts.map((item, idx) => (
              <div key={idx} className="home-solutions__concept flex flex-col gap-6 text-base leading-6 text-[#a8a8a8]">
                <p>
                  <strong className="home-solutions__concept-title text-white font-medium block mb-2 text-lg">
                    {item.title}
                  </strong>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Commitments Cards */}
          <div className="home-solutions__commitments grid grid-cols-3 gap-6 max-[880px]:grid-cols-2 max-[640px]:grid-cols-1">
            {commitments.map((c, idx) => (
              <div
                key={idx}
                className="home-solutions__commitment flex flex-col justify-between h-[260px] rounded-2xl p-6 bg-[#1c1c1c] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12),0_1px_2px_-1px_rgba(0,0,0,0.08),inset_0_-1px_0_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="home-solutions__commitment-header flex justify-between items-center">
                  <span className="home-solutions__commitment-label uppercase text-xs text-[#707070] tracking-wider font-mono">
                    {c.label}
                  </span>
                  <img src={c.icon} alt={c.label} className="h-6 w-auto opacity-80" />
                </div>
                <div className="home-solutions__commitment-content">
                  <h3 className="home-solutions__commitment-title text-lg text-white font-medium mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-5 text-[#a8a8a8]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
