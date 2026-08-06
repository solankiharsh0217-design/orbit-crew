"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    agencyName: "",
    email: "",
    serviceNeed: "High-Conversion Web Development",
    bottleneck: "",
    ndaAccepted: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page-wrapper py-16">
      {/* Hero Header */}
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
          Contact &amp; Discovery Call
        </div>
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          Let&apos;s build together.
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          Tell us about your business or agency pipeline. We&apos;ll schedule a discovery call and let you know if we&apos;re a fit — no pressure, no pitch.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-12 max-[1080px]:grid-cols-1 max-w-[1100px] mx-auto">
        {/* Left Column: Trust Badges & Contact Info */}
        <div className="col-span-5 flex flex-col justify-between gap-8 p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-2xl">
          <div>
            <span className="text-xs font-mono text-[#2377F6] uppercase tracking-wider block mb-2 font-bold">
              Direct Contact
            </span>
            <h2 className="text-2xl font-display font-medium text-white mb-6">
              Partner Communications
            </h2>

            <div className="flex flex-col gap-6 text-sm text-[#a8a8a8]">
              <div>
                <span className="text-xs text-[#707070] block mb-1">Email Inquiry</span>
                <a href="mailto:hello@orbitcrew.io" className="text-white text-lg underline font-medium hover:text-[#2377F6]">
                  hello@orbitcrew.io
                </a>
              </div>

              <div>
                <span className="text-xs text-[#707070] block mb-1">Response SLA</span>
                <span className="text-white text-base font-medium">Within 24 Hours</span>
              </div>

              <div>
                <span className="text-xs text-[#707070] block mb-1">Timezone</span>
                <span className="text-white text-base font-medium">IST / GMT+5:30 (Async Friendly)</span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#c4c4c4] uppercase tracking-wider block mb-1">
              Guarantees &amp; Security:
            </span>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="text-[#2377F6] font-bold">✓</span>
              <span>NDAs signed upfront before reviewing materials</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="text-[#2377F6] font-bold">✓</span>
              <span>100% White-Label &amp; invisible execution</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="text-[#2377F6] font-bold">✓</span>
              <span>Strict zero client poaching policy</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="col-span-7 p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-2xl">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#2377F6]/20 border border-[#2377F6] text-[#2377F6] text-3xl flex items-center justify-center mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-display font-medium text-white mb-2">
                Inquiry Received
              </h3>
              <p className="text-base text-[#a8a8a8] max-w-[400px] mb-8">
                Thank you, {formData.name}. We have received your inquiry for &ldquo;{formData.serviceNeed}&rdquo; and will respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="common-button common-button--secondary-dark"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h2 className="text-xl font-display font-medium text-white mb-2">
                Book a Discovery Call
              </h2>

              <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-[#c4c4c4]">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Alex Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="agencyName" className="text-xs text-[#c4c4c4]">Company / Agency Name *</label>
                  <input
                    id="agencyName"
                    type="text"
                    required
                    placeholder="Studio XYZ"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-[#c4c4c4]">Work Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@studioxyz.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="serviceNeed" className="text-xs text-[#c4c4c4]">Primary Need / Offering</label>
                <select
                  id="serviceNeed"
                  value={formData.serviceNeed}
                  onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                  className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                >
                  <option value="High-Conversion Web Development">High-Conversion Web Development</option>
                  <option value="Voice & Text AI Telephony">Voice &amp; Text AI Mobile Telephony</option>
                  <option value="Workflow Automations & CRM">Workflow Automations &amp; CRM Sync</option>
                  <option value="White-Label Execution Pod">White-Label Execution Pod</option>
                  <option value="Not Sure — Let's Talk">Not Sure — Let&apos;s Talk</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="bottleneck" className="text-xs text-[#c4c4c4]">Describe Your Website or AI Bottleneck</label>
                <textarea
                  id="bottleneck"
                  rows={4}
                  placeholder="e.g. 'Our current site has low conversion rates and we want to deploy an AI voice agent on our business mobile line...'"
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="ndaAccepted"
                  type="checkbox"
                  checked={formData.ndaAccepted}
                  onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
                  className="w-4 h-4 accent-[#2377F6]"
                />
                <label htmlFor="ndaAccepted" className="text-xs text-[#a8a8a8]">
                  Request NDA upfront before sharing project materials
                </label>
              </div>

              <button
                type="submit"
                className="common-button common-button--primary justify-center py-3 text-base mt-2"
              >
                Send Inquiry &amp; Book Call →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
