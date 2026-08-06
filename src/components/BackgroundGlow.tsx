"use client";

export default function BackgroundGlow() {
  return (
    <div className="page-background-glow page-background-glow--top absolute inset-x-0 top-0 pointer-events-none overflow-hidden h-[1000px] z-0">
      {/* Pure pitch black background base - zero blue leaks at top */}
      <div className="page-background-glow__background fixed inset-0 w-full h-full bg-black -z-[99999]" />
    </div>
  );
}
