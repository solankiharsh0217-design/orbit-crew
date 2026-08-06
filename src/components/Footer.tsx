"use client";

import Link from "next/link";
import LanguagePicker from "./LanguagePicker";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Capabilities & Projects", href: "/capabilities" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="page-footer relative bg-black text-[#8c8c8c] pt-24 pb-12">
      <div className="page-wrapper">
        <div className="page-footer__inner flex flex-col gap-[84px] max-[880px]:gap-10 pb-0">
          
          {/* 4 Column Grid */}
          <div className="page-footer__grid grid grid-cols-4 gap-6 max-[880px]:grid-cols-2 max-[540px]:grid-cols-1">
            
            {/* Col 1 & 2: Navigation Links */}
            <div className="page-footer__grid-item flex flex-col gap-3">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="page-footer__grid-link-item font-display text-3xl text-[#707070] hover:text-white transition-colors max-[1080px]:text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="page-footer__grid-item flex flex-col gap-3">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="page-footer__grid-link-item font-display text-3xl text-[#707070] hover:text-white transition-colors max-[1080px]:text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Col 3: Socials */}
            <div className="page-footer__grid-item flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="page-footer__grid-link-item font-display text-3xl text-[#707070] hover:text-white transition-colors max-[1080px]:text-2xl"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Col 4: Contact & Partner Info */}
            <div className="page-footer__grid-item flex flex-col gap-4">
              <span className="page-footer__contact-title text-[#707070] text-sm font-medium">
                Ready to scale delivery?
              </span>
              <a href="mailto:hello@orbitcrew.io" className="text-white text-base underline hover:text-[#a8a8a8]">
                hello@orbitcrew.io
              </a>
              <Link href="/contact" className="common-button common-button--primary inline-flex w-fit mt-2">
                Book a Call →
              </Link>
            </div>

          </div>

          {/* Bottom Bar with Language Picker & Legal Links */}
          <div className="page-footer__bottom flex flex-col gap-8">
            <div className="common-dotted-divider common-dotted-divider--dark" />

            <div className="page-footer__links grid grid-cols-[1fr_2fr_1fr] items-center gap-3 text-xs text-[#8c8c8c] max-[540px]:grid-cols-1">
              
              {/* Language Picker */}
              <div className="page-footer__language flex items-center justify-self-start">
                <LanguagePicker />
              </div>

              {/* Legal Links */}
              <div className="page-footer__legals flex justify-center gap-4 text-[#8c8c8c]">
                <span>NDA-First &middot; White-Label by Default</span>
              </div>

              {/* Copyright */}
              <div className="page-footer__copyright justify-self-end text-[#8c8c8c]">
                &copy; {new Date().getFullYear()} OrbitCrewDigital. All rights reserved.
              </div>

            </div>

            {/* Giant Branding Banner */}
            <div className="pt-8 text-center select-none">
              <span className="font-display font-bold text-white/10 text-[clamp(60px,12vw,180px)] leading-none block">
                ORBITCREW
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
