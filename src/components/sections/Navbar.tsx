"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#services", label: "Services" },
    { href: "#approach", label: "Approach" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0E0E0E]/95 backdrop-blur-sm" : "bg-[#0E0E0E]"
      } border-b border-[rgba(245,245,245,0.1)]`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation - Left */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <a
              href="#"
              className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#6e7eff] focus:ring-offset-2 focus:ring-offset-[#0E0E0E] rounded-sm"
            >
              <Image
                src="/ginseil.svg"
                alt="Ginseil Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#F5F5F5] text-[15px] font-normal hover:text-[#6e7eff] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6e7eff] focus:ring-offset-2 focus:ring-offset-[#0E0E0E] rounded-sm relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6e7eff] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] text-[15px] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6e7eff] focus:ring-offset-2 focus:ring-offset-[#0E0E0E]"
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#6e7eff] focus:ring-offset-2 focus:ring-offset-[#0E0E0E] rounded-sm"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-[2px] bg-[#F5F5F5] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#F5F5F5] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#F5F5F5] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-[#0E0E0E] transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#F5F5F5] text-2xl font-normal hover:text-[#6e7eff] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6e7eff] rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-8 py-3 border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] text-lg font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6e7eff]"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
