"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSwitcher from "./SiteSwitcher";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio & Projects", href: "/capabilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="page-header fixed z-[99999] top-0 left-0 right-0 transform-gpu">
      {/* Background Blur Mask */}
      <div className="page-header__blur absolute top-0 left-0 right-0 h-[120px] pointer-events-none backdrop-blur-[15px] bg-black/30 [mask:linear-gradient(#000_0px,rgba(0,0,0,0.99)_40%,transparent)]" />
      <div className="page-header__blur-for-elastic-scroll absolute -top-[400px] left-0 right-0 h-[400px] bg-black/32 pointer-events-none" />

      <div className="page-wrapper page-header__wrapper relative">
        <div className="page-header__inner flex items-center justify-between p-4 gap-4 max-[540px]:px-2">
          {/* Left: Site Switcher Logo */}
          <div className="page-header__left flex-1 min-w-0">
            <SiteSwitcher />
          </div>

          {/* Middle: Navigation Links */}
          <nav className="page-header__middle flex justify-center items-center gap-2 max-[1426px]:gap-1 max-[1426px]:flex-grow">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="page-header__link whitespace-nowrap text-sm leading-5">
                  <Link
                    href={item.href}
                    className={`block p-1.5 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "text-white bg-white/10 font-medium"
                        : "text-[#a8a8a8] hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="page-header__right flex justify-end items-center gap-2">
            <Link href="/contact" className="common-button common-button--secondary-dark max-[880px]:text-xs">
              Contact Us
            </Link>
            <Link href="/contact" className="common-button common-button--primary max-[880px]:text-xs">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
