import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0E0E] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 pb-32 lg:pb-40">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-16 lg:gap-32 mb-16">
          {/* Left Side - Logo with X */}
          <div className="flex flex-col space-y-10 lg:space-y-12">
            {/* Logo and X Icon */}
            <div className="flex items-center gap-6">
              <Image
                src="/ginseil.svg"
                alt="Ginseil Logo"
                width={140}
                height={36}
                className="block h-9 w-auto"
              />
              <a
                href="https://twitter.com/gensei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group"
                aria-label="Follow us on X"
              >
                <FaXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 leading-relaxed">
              © {new Date().getFullYear()} Ginsei. All rights reserved.
            </p>
          </div>

          {/* Middle - Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-300 leading-[1.8]">
              <p>
                <a
                  href="tel:+918533922485"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  +91 8533922485
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@gensei.org"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  info@ginsei.org
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Location */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-5">
              Location
            </h4>
            <address className="text-sm text-gray-300 leading-[1.8] not-italic">
              201 – 2nd Main Road,
              <br />
              Horamavu, Banaswadi,
              <br />
              Bengaluru – Karnataka, India
              <br />
              560043
            </address>
          </div>
        </div>
      </div>

      {/* Oversized Background Typography with Gradient Fade - Centered */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none flex justify-center"
        aria-hidden="true"
      >
        <div
          className="text-[8vw] lg:text-[8vw] font-bold tracking-tight text-white whitespace-nowrap overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, transparent 100%)",
          }}
        >
          FORM & FUNCTION
        </div>
      </div>
    </footer>
  );
}
