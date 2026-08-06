"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSwitcher from "./SiteSwitcher";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "How We Do It", href: "#how-we-do-it" },
    { name: "Services & Add-Ons", href: "/services" },
    { name: "Portfolio", href: "/capabilities" },
    { name: "Packages & Pricing", href: "#pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="page-header absolute z-[99999] top-0 left-0 right-0 bg-transparent pt-6 pointer-events-none">
      <div className="page-wrapper page-header__wrapper relative">
        <div className="page-header__inner flex items-center justify-between px-4 gap-4 max-[540px]:px-2">
          {/* Left: Logo */}
          <div className="page-header__left flex-1 min-w-0 pointer-events-auto">
            <SiteSwitcher />
          </div>

          {/* Middle: Transparent Floating Pill Navigation Bar */}
          <nav className="page-header__middle flex justify-center items-center gap-1 bg-[#1c1c1c]/80 border border-white/10 backdrop-blur-md py-1.5 px-3 rounded-full shadow-2xl pointer-events-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="page-header__link whitespace-nowrap text-xs leading-5 font-medium">
                  <Link
                    href={item.href}
                    className={`block py-1.5 px-3 rounded-full transition-colors ${
                      isActive
                        ? "text-white bg-white/15"
                        : "text-[#a8a8a8] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right: Action Button */}
          <div className="page-header__right flex justify-end items-center gap-2 pointer-events-auto">
            <Link href="/contact" className="common-button common-button--primary text-xs shadow-[0_4px_16px_rgba(35,119,246,0.4)]">
              Get Free Website Audit →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
