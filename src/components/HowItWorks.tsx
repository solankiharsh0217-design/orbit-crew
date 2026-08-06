"use client";

const steps = [
  {
    num: "01",
    title: "Audit & Conversion Strategy.",
    desc: "We analyze conversion leaks on your existing site and map out custom text & voice AI workflows.",
    image: "/hugo-assets/images/feed.webp",
    stepClass: "home-how__step--feed",
  },
  {
    num: "02",
    title: "High-Conversion Build.",
    desc: "We develop your ultra-fast Next.js website and train AI voice & text engines on your exact data.",
    image: "/hugo-assets/images/customize.webp",
    stepClass: "home-how__step--customize",
  },
  {
    num: "03",
    title: "Connect Telephony & Automations.",
    desc: "We link your business mobile phone numbers, SMS/WhatsApp gateways, and CRM automations.",
    image: "/hugo-assets/images/test.webp",
    stepClass: "home-how__step--test",
  },
  {
    num: "04",
    title: "Launch & Scale Revenue.",
    desc: "Watch your website conversion rate surge while AI agents handle calls and chat 24/7.",
    image: "/hugo-assets/images/run.webp",
    stepClass: "home-how__step--run",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="home-how page-section">
      <div className="page-wrapper">
        <div className="home-how__grid grid grid-cols-3 gap-x-6 gap-y-[84px] max-[1080px]:grid-cols-2 max-[880px]:grid-cols-1 max-[880px]:gap-12">
          
          {/* Header Title */}
          <div className="home-how__title flex flex-col justify-end max-[1080px]:col-span-2 max-[1080px]:text-center max-[880px]:col-span-1">
            <h2 className="common-title common-title--large common-title--white font-display">
              Four steps to 24/7 execution.
            </h2>
            <p className="text-base text-[#707070] mt-2">
              From audit to live voice AI and high-converting site in days.
            </p>
          </div>

          {/* Steps 01 to 04 */}
          {steps.map((step) => (
            <div key={step.num} className={`home-how__grid-item ${step.stepClass}`}>
              <div className="home-how__step flex flex-col gap-6">
                
                {/* Header line and counter */}
                <div className="home-how__step-header flex items-center gap-6">
                  <div className="home-how__step-counter flex-shrink-0 w-10 h-10 rounded-full flex justify-center items-center bg-[#ebebeb] text-[#1c1c1c] text-sm font-medium shadow">
                    {step.num}
                  </div>
                  <div className="home-how__step-line flex-grow h-[1px] bg-[#e0e0e0] relative" />
                </div>

                {/* Illustration with Film Grain */}
                <div className="home-how__step-illustration max-w-full aspect-square bg-[#f5f5f5] rounded-2xl shadow overflow-hidden relative">
                  <div className="home-how__step-illustration-inner relative w-full h-full rounded-2xl overflow-hidden">
                    <div className="home-how__step-illustration-ui absolute inset-0 w-full h-full">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    {/* Film Grain Texture Overlay */}
                    <div className="home-how__step-illustration-grain absolute inset-0 w-full h-full mix-blend-color-dodge bg-[url('/hugo-assets/images/grain_fragment.png')] bg-[repeat] opacity-70 pointer-events-none" />
                    {/* Corner Gradient */}
                    <div className="home-how__step-illustration-gradient absolute inset-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#f5f5f5]/80 pointer-events-none" />
                  </div>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="home-how__step-title text-[#1c1c1c] text-lg font-medium mb-1">
                    {step.title}
                  </h3>
                  <p className="home-how__step-description text-[#707070] text-sm leading-5">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

          {/* CTA Box */}
          <div className="home-how__cta flex flex-col items-end max-[1080px]:col-span-2 max-[1080px]:items-center max-[1080px]:text-center max-[880px]:col-span-1">
            <div className="home-how__cta-content max-w-[296px] max-[1080px]:max-w-none">
              <h3 className="common-title common-title--small common-title--white font-display">
                Ready to scale?
              </h3>
              <p className="text-sm text-[#707070] mt-2">
                Add delivery capacity and 24/7 voice AI without hiring overhead.
              </p>
              <div className="home-how__trial mt-6">
                <a href="#pricing" className="common-button common-button--primary inline-flex">
                  Book a Partner Call
                </a>
                <p className="text-xs text-[#707070] mt-2">
                  100% White-Label &middot; NDA Signed Upfront
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
