"use client";

import { useEffect, useState } from "react";
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
    { href: "#philosophy", label: "Philosophy" },
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#approach", label: "Approach" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0E0E0E]/95 backdrop-blur-sm border-b border-white" : "bg-[#0E0E0E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation - Left */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <a href="#" className="shrink-0 flex items-center rounded-sm">
              <Image
                src="/ginseil.svg"
                alt="Ginseil Logo"
                width={140}
                height={36}
                className="block h-9 w-auto"
                priority
              />
            </a>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-2 py-2.5 text-[15px] leading-none font-normal text-(--text-secondary) cursor-pointer hover:text-(--text-primary) transition-colors duration-200 rounded-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-[15px] leading-none bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
            >
              Connect
              <svg
                className="w-4 h-4 transition-transform duration-500 delay-75 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-sm"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-[#F5F5F5] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#F5F5F5] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#F5F5F5] transition-all duration-300 ${
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
              className="px-2 py-2 text-2xl font-normal text-(--text-secondary) cursor-pointer hover:text-(--text-primary) transition-colors duration-200 rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-8 py-3 border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] text-lg font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
