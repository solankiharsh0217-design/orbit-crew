"use client";

export default function BackgroundGlow() {
  return (
    <div className="page-background-glow page-background-glow--top absolute inset-x-0 top-0 pointer-events-none overflow-hidden h-[800px] z-0">
      <div className="page-background-glow__background fixed -top-[300px] left-0 w-full h-[600px] bg-black -z-[99999]" />
      
      {/* SVG Clips */}
      <svg className="page-background-glow__clips absolute w-0 h-0 pointer-events-none">
        <defs>
          <clipPath id="glowClipWhite" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 C 0.8,0.1 1,0.4 0.9,0.7 C 0.8,1 0.3,0.9 0.1,0.7 C -0.1,0.5 0.2,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Shapes */}
      <div className="page-background-glow__shape-wrapper page-background-glow__shape-wrapper--purple200 absolute -top-[320px] -right-[25%] w-[70%] h-[400px] blur-[28px] opacity-70 rotate-[14deg]">
        <div className="page-background-glow__shape w-full h-full bg-[#dbc5fb] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>

      <div className="page-background-glow__shape-wrapper page-background-glow__shape-wrapper--white absolute -top-[280px] -left-[17%] w-[80%] h-[300px] blur-[26px] opacity-70 -rotate-[12deg]">
        <div className="page-background-glow__shape w-full h-full bg-[#dbc5fb] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>

      <div className="page-background-glow__shape-wrapper page-background-glow__shape-wrapper--blue absolute -top-[300px] -left-[18%] w-full h-[350px] opacity-70 blur-[68px]">
        <div className="page-background-glow__shape h-full bg-[#c5f1fb] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>

      <div className="page-background-glow__shape-wrapper page-background-glow__shape-wrapper--red absolute -top-[480px] -right-[40%] w-[110%] h-[830px] blur-[68px] mix-blend-overlay">
        <div className="page-background-glow__shape h-full bg-[#f15f73] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>

      <div className="page-background-glow__shape-wrapper page-background-glow__shape-wrapper--purple400 absolute -top-[530px] -left-[15%] w-[80%] h-[750px] blur-[50px] mix-blend-overlay">
        <div className="page-background-glow__shape h-full bg-[#995cf5] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>

      <div className="page-background-glow__shape-wrapper page-background-glow__shape-wrapper--green absolute -top-[350px] -left-[50%] w-[80%] h-[550px] blur-[68px] mix-blend-overlay opacity-70">
        <div className="page-background-glow__shape h-full bg-[#74dc9e] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>
    </div>
  );
}
