"use client";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="home-integrations page-section relative">
      <div className="page-wrapper">
        <h2 className="home-integrations__title common-title common-title--large common-title--white text-center mb-6 relative z-1">
          Works with your mobile phone stack, CRM, and tools.
        </h2>
        <p className="home-integrations__subtitle text-center text-base text-[#a8a8a8] max-w-[600px] mx-auto relative z-1">
          Connect mobile numbers, Twilio, Vapi, Next.js, HubSpot, Salesforce, and n8n via MCP.
        </p>

        {/* Orbit Scene Image */}
        <div className="home-integrations__scene relative pt-24 z-0 text-center max-[640px]:-translate-x-[15%]">
          <div className="home-integrations__scene-image home-hero__scene-image--raster inline-block max-w-full max-[640px]:w-[130%]">
            <img
              src="/hugo-assets/images/orbit_intelligence.webp"
              alt="OrbitCrew Ecosystem of Intelligence"
              className="w-full h-auto aspect-[3903/1250] object-contain"
            />
          </div>
        </div>

        {/* Connect Title below */}
        <div className="home-integrations__connect flex gap-32 justify-center items-center mt-16 max-[1080px]:flex-col-reverse max-[1080px]:gap-0">
          <div className="home-integrations__connect-content text-center">
            <h3 className="common-title common-title--medium common-title--white font-display mb-3">
              Your orbit of automation.
            </h3>
            <p className="text-base text-[#a8a8a8]">
              OrbitCrew connects high-conversion web builds with mobile phone lines, voice AI, and automated workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
