"use client";

import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import WhySection from "@/components/WhySection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import IntegrationsSection from "@/components/IntegrationsSection";
import CaseStudies from "@/components/CaseStudies";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. How We Do It (Directly below Hero) */}
      <FeaturesSection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* 3. Client Logos & Trust Bar */}
      <LogoCloud />

      {/* 4. Featured Website Builds Gallery */}
      <section className="page-section py-20 relative">
        <div className="page-wrapper">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
              Featured Client Builds
            </div>
            <h2 className="common-title common-title--large common-title--white font-display">
              High-converting website builds &amp; AI phone agents.
            </h2>
            <p className="text-base text-[#707070] mt-3 max-w-[600px] mx-auto">
              Real website builds engineered to maximize incoming phone calls and customer bookings.
            </p>
          </div>

          <ProjectShowcase limit={4} />
        </div>
      </section>

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* 5. Why Choose OrbitCrew */}
      <WhySection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* 6. Core Package & Add-Ons Overview */}
      <SolutionsSection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* 7. 3 Easy Steps To Get Started */}
      <HowItWorks />
      
      {/* 8. Phone & Lead Integrations */}
      <IntegrationsSection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      {/* 9. Leadership & Results */}
      <CaseStudies />

      {/* 10. Interactive Package Configurator */}
      <PricingSection />

      {/* 11. Plain-English FAQ */}
      <FAQSection />

      {/* 12. Final CTA */}
      <section className="page-section text-center relative z-10 pb-[160px]">
        <div className="page-wrapper">
          <h2 className="common-title common-title--white common-title--large mb-6 font-display">
            Ready to get more customers from your website?
          </h2>
          <p className="text-base text-[#a8a8a8] max-w-[550px] mx-auto mb-8">
            Book a free 15-minute website strategy audit with our team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="common-button common-button--primary shadow-[0_4px_20px_rgba(35,119,246,0.4)]">
              Get Free Website Audit →
            </Link>
            <Link href="/services" className="common-button common-button--secondary-dark">
              Explore Package Details
            </Link>
          </div>
          <p className="text-xs text-[#707070] mt-4">
            Fast Response &middot; Guaranteed Results &middot; Zero Technical Skills Required
          </p>
        </div>
      </section>
    </>
  );
}
