export default function Footer() {
  return (
    <footer className="relative bg-[#0E0E0E] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Left Side - Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0E0E0E] font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-light tracking-wider">gensei</span>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Social Link */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Connect
              </h4>
              <a
                href="https://twitter.com/gensei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#6e7eff] transition-colors duration-300 inline-block"
              >
                Twitter
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                  Contact
                </h4>
                <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                  <p>
                    <a
                      href="tel:+918533922485"
                      className="hover:text-[#6e7eff] transition-colors duration-300"
                    >
                      +91 8533922485
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@gensei.org"
                      className="hover:text-[#6e7eff] transition-colors duration-300"
                    >
                      info@gensei.org
                    </a>
                  </p>
                </div>
              </div>

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
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 tracking-wide">
            © Gensei. All rights reserved.
          </p>
        </div>
      </div>

      {/* Oversized Background Typography with Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="text-[12vw] lg:text-[10vw] font-bold tracking-tight text-white whitespace-nowrap overflow-hidden"
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
