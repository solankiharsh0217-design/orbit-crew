"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSwitcher from "./SiteSwitcher";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "How We Do It", href: "#how-it-works" },
    { name: "Services & Add-Ons", href: "/services" },
    { name: "Portfolio", href: "/capabilities" },
    { name: "Packages & Pricing", href: "#pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="page-header fixed z-[99999] top-0 left-0 right-0 transform-gpu">
      {/* Background Blur Mask — Clean pitch-black backdrop blur without blue bars */}
      <div className="page-header__blur absolute top-0 left-0 right-0 h-[90px] pointer-events-none backdrop-blur-xl bg-black/60 border-b border-white/5" />

      <div className="page-wrapper page-header__wrapper relative">
        <div className="page-header__inner flex items-center justify-between py-3 px-4 gap-4 max-[540px]:px-2">
          {/* Left: Logo */}
          <div className="page-header__left flex-1 min-w-0">
            <SiteSwitcher />
          </div>

          {/* Middle: Navigation Links */}
          <nav className="page-header__middle flex justify-center items-center gap-1 max-[1426px]:flex-grow">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="page-header__link whitespace-nowrap text-xs leading-5 font-medium">
                  <Link
                    href={item.href}
                    className={`block py-1.5 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-[#a8a8a8] hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right: Action Button */}
          <div className="page-header__right flex justify-end items-center gap-2">
            <Link href="/contact" className="common-button common-button--primary text-xs shadow-[0_2px_12px_rgba(35,119,246,0.3)]">
              Get Free Website Audit →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
