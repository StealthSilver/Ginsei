"use client";

import React from "react";

const Approach = () => {
  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 lg:py-40 bg-[#0E0E0E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)] mb-16 md:mb-24">
          Approach
        </h2>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Philosophy */}
          <div className="space-y-16">
            <div className="space-y-6">
              <p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.4] font-light text-[#F5F5F5]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Clarity comes before expression.
              </p>
              <p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.4] font-light text-[#F5F5F5]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Structure gives form its meaning.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8 pt-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)] mb-8">
                Process
              </h3>

              <div className="space-y-6">
                <div className="border-l border-[rgba(245,245,245,0.1)] pl-6 transition-colors hover:border-[rgba(245,245,245,0.3)]">
                  <p className="text-base md:text-lg text-[rgba(245,245,245,0.6)]">
                    Research & Context
                  </p>
                </div>

                <div className="border-l border-[rgba(245,245,245,0.1)] pl-6 transition-colors hover:border-[rgba(245,245,245,0.3)]">
                  <p className="text-base md:text-lg text-[rgba(245,245,245,0.6)]">
                    System Design
                  </p>
                </div>

                <div className="border-l border-[rgba(245,245,245,0.1)] pl-6 transition-colors hover:border-[rgba(245,245,245,0.3)]">
                  <p className="text-base md:text-lg text-[rgba(245,245,245,0.6)]">
                    Precision Execution
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Visualization */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Intersecting rectangles */}
              <div className="rectangles-container">
                <div className="rect rect-1" />
                <div className="rect rect-2" />
                <div className="rect rect-3" />
                <div className="rect rect-4" />
                <div className="rect rect-5" />
                <div className="rect rect-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Rectangles container */
        .rectangles-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .rect {
          position: absolute;
          border: 1px solid rgba(229, 231, 235, 0.4);
          background: transparent;
        }

        .rect-1 {
          width: 240px;
          height: 160px;
          top: 50px;
          left: 40px;
          transform: rotate(-8deg);
        }

        .rect-2 {
          width: 190px;
          height: 260px;
          top: 80px;
          right: 60px;
          transform: rotate(12deg);
        }

        .rect-3 {
          width: 260px;
          height: 120px;
          bottom: 100px;
          left: 80px;
          transform: rotate(5deg);
        }

        .rect-4 {
          width: 210px;
          height: 210px;
          top: 120px;
          left: 120px;
          transform: rotate(-15deg);
        }

        .rect-5 {
          width: 140px;
          height: 240px;
          bottom: 80px;
          right: 100px;
          transform: rotate(18deg);
        }

        .rect-6 {
          width: 280px;
          height: 150px;
          top: 180px;
          left: 60px;
          transform: rotate(-4deg);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .rectangles-container {
            width: 320px;
            height: 320px;
          }

          .rect-1 {
            width: 190px;
            height: 120px;
          }

          .rect-2 {
            width: 150px;
            height: 210px;
          }

          .rect-3 {
            width: 210px;
            height: 95px;
          }

          .rect-4 {
            width: 170px;
            height: 170px;
          }

          .rect-5 {
            width: 110px;
            height: 190px;
          }

          .rect-6 {
            width: 230px;
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default Approach;
