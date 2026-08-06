"use client";

import Link from "next/link";

export default function ServicesPage() {
  const detailedServices = [
    {
      id: "web-dev",
      num: "01",
      title: "High-Conversion Website Build Package (Foundation)",
      eyebrow: "CORE PRIMARY SERVICE",
      tagline: "Turn passive website visitors into paying customers.",
      description: "Slow, outdated websites lose up to 90% of prospective clients. We build custom, ultra-fast websites engineered specifically to grab attention, showcase your services, and make calling or booking effortless.",
      deliverables: [
        "Custom mobile-first website design",
        "Sub-second page load speeds",
        "High-visibility 'Call Now' & appointment buttons",
        "Contact form & inquiry setup",
        "Google Search (SEO) setup & registration",
        "Domain & hosting launch assistance",
      ],
      badgeColor: "border-[#2377F6]/30 text-[#2377F6] bg-[#2377F6]/10",
      image: "/hugo-assets/images/activate.png",
    },
    {
      id: "voice-ai",
      num: "02",
      title: "24/7 AI Phone Voice Agent Add-On",
      eyebrow: "OPTIONAL POWER ADD-ON",
      tagline: "Never lose a customer phone call after hours or when you're busy.",
      description: "Connect an intelligent AI phone assistant directly to your business phone line. When you can't answer, the AI answers customer calls 24/7, answers questions, and schedules appointments automatically.",
      deliverables: [
        "Direct connection to your business phone line",
        "Natural 24/7 human-like voice conversation",
        "Automated customer appointment booking",
        "Answers FAQs about your services & pricing",
        "SMS appointment confirmation texts to clients",
        "Instant call summaries sent to your phone",
      ],
      badgeColor: "border-[#74dc9e]/30 text-[#74dc9e] bg-[#74dc9e]/10",
      image: "/ai-agent dashboard.png",
    },
    {
      id: "automations",
      num: "03",
      title: "Automated Lead & Phone Sync Add-On",
      eyebrow: "OPTIONAL POWER ADD-ON",
      tagline: "Instant alerts delivered straight to your smartphone.",
      description: "Stop losing track of customer leads. We set up automated notifications so every new website form inquiry or phone call transcript is forwarded to your phone immediately.",
      deliverables: [
        "Instant SMS & email alerts on new leads",
        "CRM database synchronization (HubSpot, Salesforce)",
        "Google Calendar automated booking sync",
        "Phone transcript logging to your email",
        "Zero manual data copy-pasting required",
      ],
      badgeColor: "border-[#995cf5]/30 text-[#995cf5] bg-[#995cf5]/10",
      image: "/hugo-assets/images/workflow.png",
    },
  ];

  return (
    <div className="page-wrapper py-16">
      {/* Hero Header */}
      <div className="text-center max-w-[800px] mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
          Services &amp; Growth Packages
        </div>
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          Simple packages built to grow your business.
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          Start with our core High-Conversion Website Package, then add 24/7 AI phone answering or lead alerts to build your complete customer generator.
        </p>
      </div>

      {/* Deep-Dive Service Cards */}
      <div className="flex flex-col gap-24">
        {detailedServices.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex items-center gap-16 max-[1080px]:flex-col ${
              idx % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Service Text Description */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-display font-bold text-white/20">
                  {service.num}
                </span>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border ${service.badgeColor}`}>
                  {service.eyebrow}
                </span>
              </div>

              <h2 className="common-title common-title--large common-title--white font-display">
                {service.title}
              </h2>

              <p className="text-xl font-medium text-white/90">
                {service.tagline}
              </p>

              <p className="text-base leading-7 text-[#a8a8a8]">
                {service.description}
              </p>

              {/* Deliverables List */}
              <div className="mt-4 pt-6 border-t border-white/10">
                <h3 className="text-sm font-mono text-[#c4c4c4] uppercase tracking-wider mb-4">
                  What You Get:
                </h3>
                <ul className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#a8a8a8]">
                      <span className="text-[#2377F6] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <Link href="/contact" className="common-button common-button--primary inline-flex">
                  Get Started With {service.title} →
                </Link>
              </div>
            </div>

            {/* Service Image Visual */}
            <div className="flex-1 w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#1c1c1c] shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>

      <div className="my-24">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* Final Call To Action */}
      <div className="mt-20 text-center p-12 rounded-3xl bg-[#1c1c1c] border border-white/10">
        <h2 className="common-title common-title--large common-title--white font-display mb-4">
          Ready to get more leads from your website?
        </h2>
        <p className="text-base text-[#a8a8a8] max-w-[550px] mx-auto mb-8">
          Book a free strategy audit with our team to discover how much revenue your site is leaving on the table.
        </p>
        <Link href="/contact" className="common-button common-button--primary inline-flex">
          Get Free Website Audit →
        </Link>
      </div>
    </div>
  );
}
