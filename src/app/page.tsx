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
      <Hero />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      <LogoCloud />

      {/* Featured Web Dev Projects Showcase */}
      <section className="page-section py-20 relative">
        <div className="page-wrapper">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2377F6]/10 border border-[#2377F6]/30 text-[#2377F6] text-xs font-mono mb-4">
              Featured Work &amp; Portfolio
            </div>
            <h2 className="common-title common-title--large common-title--white font-display">
              High-converting websites &amp; Voice AI builds.
            </h2>
            <p className="text-base text-[#707070] mt-3 max-w-[600px] mx-auto">
              Inspect recent client builds engineered to eliminate conversion leaks and automate phone calls 24/7.
            </p>
          </div>

          <ProjectShowcase limit={4} />
        </div>
      </section>

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      <WhySection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      <SolutionsSection />
      <FeaturesSection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      <HowItWorks />
      <IntegrationsSection />

      <div className="page-wrapper my-8">
        <div className="common-dotted-divider common-dotted-divider--dark" />
      </div>

      <CaseStudies />
      <PricingSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="page-section text-center relative z-10 pb-[160px]">
        <div className="page-wrapper">
          <h2 className="common-title common-title--white common-title--large mb-8 font-display">
            Get started with OrbitCrew today.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="common-button common-button--primary">
              Book a Discovery Call
            </Link>
            <Link href="/services" className="common-button common-button--secondary-dark">
              Explore Our Services
            </Link>
          </div>
          <p className="text-xs text-[#707070] mt-4">
            100% White-Label &middot; NDA Signed Upfront &middot; Zero Client Poaching
          </p>
        </div>
      </section>
    </>
  );
}
