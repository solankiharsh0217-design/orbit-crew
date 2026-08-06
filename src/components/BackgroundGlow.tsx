"use client";

export default function BackgroundGlow() {
  return (
    <div className="page-background-glow page-background-glow--top absolute inset-x-0 top-0 pointer-events-none overflow-hidden h-[1000px] z-0">
      <div className="page-background-glow__background fixed -top-[300px] left-0 w-full h-[600px] bg-black -z-[99999]" />
      
      {/* Subtle ambient blue/dark glow without sharp color bars */}
      <div className="page-background-glow__shape-wrapper absolute -top-[200px] left-1/2 -translate-x-1/2 w-[120%] h-[600px] blur-[120px] opacity-25">
        <div className="page-background-glow__shape w-full h-full bg-[#1972f5] [clip-path:ellipse(50%_50%_at_50%_50%)]" />
      </div>
    </div>
  );
}
