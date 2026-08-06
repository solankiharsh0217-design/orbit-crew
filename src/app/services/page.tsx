"use client";

import Link from "next/link";

export default function ServicesPage() {
  const detailedServices = [
    {
      id: "web-dev",
      num: "01",
      title: "High-Conversion Web Development",
      eyebrow: "SOLVING LOW-CONVERTING WEBSITES",
      tagline: "Turn passive website visitors into qualified paying clients.",
      description: "Generic, slow, or outdated websites lose up to 90% of your paid and organic traffic. We re-architect leaky sites using cutting-edge Next.js 16 code, conversion psychology, responsive layout math, and sub-second page speeds.",
      deliverables: [
        "Full-stack Next.js & React App Router builds",
        "Sub-second load speeds & 100/100 Lighthouse performance",
        "Mobile-first responsive UX math",
        "High-impact landing pages & A/B conversion funnels",
        "Headless CMS integration (Webflow, Sanity, Contentful)",
        "SEO architecture & structured data micro-formats",
      ],
      badgeColor: "border-[#2377F6]/30 text-[#2377F6] bg-[#2377F6]/10",
      image: "/hugo-assets/images/activate.png",
    },
    {
      id: "voice-ai",
      num: "02",
      title: "OmniAgent AI & Mobile Telephony Voice Agents",
      eyebrow: "WEBRTC & PSTN PHONE NUMBER INTEGRATION",
      tagline: "24/7 intelligent voice calls & text messaging on your mobile lines.",
      description: "Powered by OmniAgent AI — our autonomous multi-modal AI platform with WebRTC real-time voice call rooms, Voice Activity Detection (VAD), and PSTN phone trunking (Twilio/Exotel). The AI answers incoming mobile calls 24/7 with sub-300ms inference.",
      deliverables: [
        "Direct connection to your business mobile phone lines",
        "Low-latency WebRTC streaming & natural voice synthesis",
        "Groq Llama 3.3 70B & Sarvam AI Indic STT/TTS models",
        "PSTN telephone line trunking (Twilio, Exotel, Plivo, Telnyx)",
        "RAG document parsing (.pdf, .txt, .md, .csv, .json)",
        "Single <script> tag embeddable web widget engine",
      ],
      badgeColor: "border-[#74dc9e]/30 text-[#74dc9e] bg-[#74dc9e]/10",
      image: "/ai-agent dashboard.png",
    },
    {
      id: "automations",
      num: "03",
      title: "Workflow Automations & CRM Integration",
      eyebrow: "END-TO-END OPERATIONAL CONNECTIVITY",
      tagline: "Seamless connective pipelines linking web leads, calls, and CRMs.",
      description: "Stop wasting hours transferring lead data manually across disconnected tools. We construct automated connective workflows linking your high-converting website, mobile phone lines, voice AI transcripts, CRM, and internal communication channels.",
      deliverables: [
        "n8n & Zapier custom automated pipelines",
        "Instant CRM sync (HubSpot, Salesforce, Pipedrive)",
        "Google Calendar & Calendly automated scheduling",
        "Real-time Slack & email notifications on hot leads",
        "Phone call transcript logging & lead scoring",
        "Custom REST API & Webhook integrations",
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
          Core Services &amp; Delivery
        </div>
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          High-performance services engineered for growth.
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          We focus strictly on 3 core pillars: transforming low-converting websites into high-velocity engines, deploying voice &amp; text AI agents connected to mobile phone lines, and orchestrating workflow automations.
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
                  Key Capabilities &amp; Features:
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
                  Book a Discovery Call for {service.title} →
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

      {/* Comparison Matrix Section */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="common-title common-title--large common-title--white font-display mb-4">
            Traditional Agencies vs OrbitCrew Execution
          </h2>
          <p className="text-base text-[#707070]">
            Why modern businesses and growth agencies partner with OrbitCrew.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-[880px]:grid-cols-1">
          {/* Traditional Agency */}
          <div className="p-8 rounded-2xl bg-[#1c1c1c]/50 border border-white/5 flex flex-col gap-6">
            <h3 className="text-xl font-display font-medium text-white/50">
              Traditional Hiring &amp; Agencies
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-[#707070]">
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                Slow 6-8 week recruiting cycles and high developer overhead
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                Low-converting websites that lose 90% of paid ad traffic
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                No after-hours phone support or missed mobile voice calls
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                Disconnected tools requiring manual lead copy-pasting
              </li>
            </ul>
          </div>

          {/* OrbitCrew Execution */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#2377F6]/10 to-transparent border border-[#2377F6]/40 shadow-[0_0_30px_rgba(35,119,246,0.15)] flex flex-col gap-6">
            <h3 className="text-xl font-display font-medium text-[#2377F6]">
              OrbitCrew Execution Pod
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white">
              <li className="flex items-center gap-3">
                <span className="text-[#2377F6] font-bold">✓</span>
                Instant execution capacity in days with 0 hiring overhead
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2377F6] font-bold">✓</span>
                High-converting Next.js websites built with conversion science
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2377F6] font-bold">✓</span>
                24/7 OmniAgent AI voice agents connected to your mobile numbers
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2377F6] font-bold">✓</span>
                100% white-label execution &amp; NDAs signed upfront
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <div className="mt-20 text-center p-12 rounded-3xl bg-[#1c1c1c] border border-white/10">
        <h2 className="common-title common-title--large common-title--white font-display mb-4">
          Ready to transform your delivery pipeline?
        </h2>
        <p className="text-base text-[#a8a8a8] max-w-[550px] mx-auto mb-8">
          Book a discovery call to discuss your high-conversion web development or mobile voice AI requirements.
        </p>
        <Link href="/contact" className="common-button common-button--primary inline-flex">
          Book a Discovery Call →
        </Link>
      </div>
    </div>
  );
}
