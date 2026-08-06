"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    serviceNeed: "High-Conversion Website Package ($1,499)",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page-wrapper pb-16 pt-[160px] max-[640px]:pt-[120px]">
      {/* Hero Header */}
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <h1 className="common-title common-title--2xl common-title--white font-display mb-6">
          Get your free website strategy audit.
        </h1>
        <p className="text-lg leading-7 text-[#a8a8a8]">
          Tell us about your business. We&apos;ll review your current website (or starting ideas) and show you how to get more customer inquiries — 100% free with zero pressure.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-12 max-[1080px]:grid-cols-1 max-w-[1100px] mx-auto">
        {/* Left Column: Guarantees & Contact */}
        <div className="col-span-5 flex flex-col justify-between gap-8 p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-2xl">
          <div>
            <span className="text-xs font-mono text-[#2377F6] uppercase tracking-wider block mb-2 font-bold">
              Direct Contact
            </span>
            <h2 className="text-2xl font-display font-medium text-white mb-6">
              OrbitCrew Client Services
            </h2>

            <div className="flex flex-col gap-6 text-sm text-[#a8a8a8]">
              <div>
                <span className="text-xs text-[#707070] block mb-1">Email Inquiry</span>
                <a href="mailto:hello@orbitcrew.io" className="text-white text-lg underline font-medium hover:text-[#2377F6]">
                  hello@orbitcrew.io
                </a>
              </div>

              <div>
                <span className="text-xs text-[#707070] block mb-1">Fast Response SLA</span>
                <span className="text-white text-base font-medium">Within 24 Hours</span>
              </div>

              <div>
                <span className="text-xs text-[#707070] block mb-1">Website Turnaround</span>
                <span className="text-white text-base font-medium">7 to 14 Business Days</span>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#c4c4c4] uppercase tracking-wider block mb-1">
              Guarantees:
            </span>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="text-[#2377F6] font-bold">✓</span>
              <span>100% Mobile Ready Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="text-[#2377F6] font-bold">✓</span>
              <span>Fast 7-14 Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white">
              <span className="text-[#2377F6] font-bold">✓</span>
              <span>Zero Technical Skills Needed</span>
            </div>
          </div>
        </div>

        {/* Right Column: Simple Form */}
        <div className="col-span-7 p-8 rounded-3xl bg-[#1c1c1c] border border-white/10 shadow-2xl">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#2377F6]/20 border border-[#2377F6] text-[#2377F6] text-3xl flex items-center justify-center mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-display font-medium text-white mb-2">
                Audit Request Received!
              </h3>
              <p className="text-base text-[#a8a8a8] max-w-[400px] mb-8">
                Thank you, {formData.name}. We will review your business details and send your free website strategy audit within 24 hours.
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
                Request Free Strategy Audit
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
                  <label htmlFor="businessName" className="text-xs text-[#c4c4c4]">Business / Company Name *</label>
                  <input
                    id="businessName"
                    type="text"
                    required
                    placeholder="Apex Plumbing Services"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-[#c4c4c4]">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@apexservices.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs text-[#c4c4c4]">Phone Number (Optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="serviceNeed" className="text-xs text-[#c4c4c4]">Primary Package Needed</label>
                <select
                  id="serviceNeed"
                  value={formData.serviceNeed}
                  onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                  className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                >
                  <option value="High-Conversion Website Package ($1,499)">High-Conversion Website Package ($1,499)</option>
                  <option value="Website Build + 24/7 AI Phone Agent ($1,998)">Website Build + 24/7 AI Phone Agent ($1,998)</option>
                  <option value="Website Build + AI Chatbot ($1,798)">Website Build + AI Chatbot ($1,798)</option>
                  <option value="Full Package + All Add-Ons ($2,496)">Full Package + All Add-Ons ($2,496)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className="text-xs text-[#c4c4c4]">Current Website URL or Goals</label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="e.g. 'Our current website gets visitors but nobody calls us...'"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="p-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2377F6]"
                />
              </div>

              <button
                type="submit"
                className="common-button common-button--primary justify-center py-3 text-base mt-2 shadow-[0_4px_20px_rgba(35,119,246,0.4)]"
              >
                Get Free Website Strategy Audit →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
