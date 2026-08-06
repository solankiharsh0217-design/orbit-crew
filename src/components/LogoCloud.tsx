"use client";

export default function LogoCloud() {
  const logos = [
    { name: "Reedsy", src: "/hugo-assets/svgs/reedsy.svg" },
    { name: "Oxio", src: "/hugo-assets/svgs/oxio.svg" },
    { name: "Decathlon", src: "/hugo-assets/svgs/decathlon.svg" },
    { name: "G4 Educacao", src: "/hugo-assets/svgs/g4educacao.svg" },
    { name: "Emma", src: "/hugo-assets/svgs/emma.svg" },
    { name: "Gomo World", src: "/hugo-assets/svgs/gomoworld.svg" },
  ];

  return (
    <section className="home-customers page-section page-section--short max-w-[2200px] mx-auto text-center">
      <div className="page-wrapper">
        <h2 className="home-customers__title text-sm text-[#707070] flex justify-center items-center gap-1 mb-8 max-[640px]:flex-wrap">
          <span className="text-[#d9f5fd] font-medium flex items-center gap-1.5">
            White-Label Delivery &middot; OrbitCrew Digital
          </span>
          <span className="home-customers__title-divider mx-1 max-[640px]:hidden">&middot;</span>
          <span>Trusted by growth agencies &amp; high-performance brands worldwide.</span>
        </h2>

        <div className="home-customers__grid flex flex-wrap justify-center items-center gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="home-customers__image-wrapper flex-grow w-[209px] h-10 flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-7 w-auto opacity-50 hover:opacity-100 transition-opacity duration-200 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
