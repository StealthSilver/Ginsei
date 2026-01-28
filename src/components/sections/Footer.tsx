import Image from "next/image";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0E0E] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* Left Side - Logo, Social, Copyright */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <Image
                src="/ginseil.svg"
                alt="Ginseil Logo"
                width={140}
                height={36}
                className="block h-9 w-auto"
              />
            </div>

            {/* Social Link */}
            <div>
              <a
                href="https://twitter.com/gensei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Gensei. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Address */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Location
              </h4>
              <address className="text-sm text-gray-300 leading-relaxed not-italic">
                201 – 2nd Main Road,
                <br />
                Horamavu, Banaswadi,
                <br />
                Bengaluru – Karnataka, India
                <br />
                560043
              </address>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  <a
                    href="tel:+918533922485"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +91 8533922485
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@gensei.org"
                    className="hover:text-white transition-colors duration-300"
                  >
                    info@gensei.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Function Text - Centered at Bottom */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-light">
            Form & Function
          </p>
        </div>
      </div>

      {/* Subtle Background Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(110, 126, 255, 0.03), transparent)",
        }}
        aria-hidden="true"
      />
    </footer>
  );
}
