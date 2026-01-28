"use client";

import React, { useState } from "react";

const Approach = () => {
  const [activeRects, setActiveRects] = useState<Set<number>>(new Set());

  const toggleRect = (index: number) => {
    setActiveRects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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
                <div
                  className={`rect rect-1 ${activeRects.has(1) ? "active" : ""}`}
                  onClick={() => toggleRect(1)}
                />
                <div
                  className={`rect rect-2 ${activeRects.has(2) ? "active" : ""}`}
                  onClick={() => toggleRect(2)}
                />
                <div
                  className={`rect rect-3 ${activeRects.has(3) ? "active" : ""}`}
                  onClick={() => toggleRect(3)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Rectangles container */
        .rectangles-container {
          position: relative;
          width: 500px;
          height: 500px;
        }

        .rect {
          position: absolute;
          border: 1px solid rgba(229, 231, 235, 0.4);
          background: transparent;
          cursor: pointer;
          transition:
            background 0.4s ease,
            border-color 0.4s ease;
        }

        .rect:hover {
          border-color: rgba(229, 231, 235, 0.6);
        }

        .rect.active {
          background: linear-gradient(
            135deg,
            rgba(60, 60, 60, 0.15) 0%,
            rgba(80, 80, 80, 0.1) 50%,
            rgba(60, 60, 60, 0.15) 100%
          );
          border-color: rgba(229, 231, 235, 0.5);
        }

        .rect-1 {
          width: 340px;
          height: 240px;
          top: 20px;
          left: 10px;
          transform: rotate(-8deg);
        }

        .rect-2 {
          width: 280px;
          height: 340px;
          top: 60px;
          right: 10px;
          transform: rotate(12deg);
        }

        .rect-3 {
          width: 360px;
          height: 190px;
          bottom: 20px;
          left: 60px;
          transform: rotate(5deg);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .rectangles-container {
            width: 380px;
            height: 380px;
          }

          .rect-1 {
            width: 260px;
            height: 180px;
          }

          .rect-2 {
            width: 210px;
            height: 260px;
          }

          .rect-3 {
            width: 280px;
            height: 145px;
          }
        }
      `}</style>
    </section>
  );
};

export default Approach;
