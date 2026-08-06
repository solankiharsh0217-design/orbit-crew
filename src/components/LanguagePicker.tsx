"use client";

import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en-US", flag: "🇺🇸", label: "English (United States)" },
  { code: "fr-FR", flag: "🇫🇷", label: "Français (France)" },
  { code: "es-ES", flag: "🇪🇸", label: "Español (España)" },
  { code: "pt-BR", flag: "🇧🇷", label: "Português (Brazil)" },
];

export default function LanguagePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="common-language-picker relative inline-flex flex-col items-start">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`common-language-picker__trigger border-0 flex items-center gap-2 px-3 py-1.5 bg-[#ebebeb] text-[#1c1c1c] rounded-lg shadow cursor-pointer transition-colors text-sm hover:bg-[#e0e0e0] ${
          isOpen ? "common-language-picker__trigger--open bg-[#e0e0e0]" : ""
        }`}
      >
        <span className="common-language-picker__trigger-flag text-base">{selectedLang.flag}</span>
        <span className="common-language-picker__trigger-label text-[#1c1c1c] whitespace-nowrap">
          {selectedLang.label}
        </span>
        <span
          className={`common-language-picker__trigger-chevron text-[#8c8c8c] flex items-center transition-transform duration-200 ${
            isOpen ? "rotate-90" : "-rotate-90"
          }`}
        >
          ❯
        </span>
      </button>

      <div
        className={`common-language-picker__dropdown absolute bottom-[calc(100%+8px)] left-0 transition-all duration-200 z-[100] ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="common-language-picker__grid grid grid-cols-2 gap-1 p-2 bg-white rounded-xl shadow-xl min-w-[440px]">
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === selectedLang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                }}
                className={`common-language-picker__option flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors whitespace-nowrap ${
                  isActive
                    ? "common-language-picker__option--active bg-[#ebf3fe] text-[#0957d9]"
                    : "hover:bg-[#ebebeb] text-[#545454]"
                }`}
              >
                <span className="common-language-picker__option-flag text-base">{lang.flag}</span>
                <span className="common-language-picker__option-label font-normal">{lang.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
