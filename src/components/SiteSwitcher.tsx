"use client";

import Link from "next/link";

export default function SiteSwitcher() {
  return (
    <Link
      href="/"
      className="group relative inline-flex items-center select-none transition-transform duration-200 hover:scale-105"
    >
      <img
        src="/logo.png"
        alt="OrbitCrew Logo"
        className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
      />
    </Link>
  );
}
