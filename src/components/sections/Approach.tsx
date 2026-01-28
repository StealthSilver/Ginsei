"use client";

import React from "react";

const Approach = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-20">
          Approach
        </h2>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Philosophy */}
          <div className="space-y-16">
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl lg:text-6xl leading-tight font-serif text-gray-100">
                Clarity comes before expression.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl leading-tight font-serif text-gray-100">
                Structure gives form its meaning.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8 pt-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
                Process
              </h3>

              <div className="space-y-6">
                <div className="border-l border-gray-800 pl-6 transition-colors hover:border-gray-600">
                  <p className="text-sm tracking-wide text-gray-300">
                    Research & Context
                  </p>
                </div>

                <div className="border-l border-gray-800 pl-6 transition-colors hover:border-gray-600">
                  <p className="text-sm tracking-wide text-gray-300">
                    System Design
                  </p>
                </div>

                <div className="border-l border-gray-800 pl-6 transition-colors hover:border-gray-600">
                  <p className="text-sm tracking-wide text-gray-300">
                    Precision Execution
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Visualization */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Stage 1: Research - Dispersed, ambient shapes */}
              <div className="absolute inset-0 flex items-center justify-center stage-1">
                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-gray-600 rounded-full particle"
                    style={{
                      left: `${20 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}

                {/* Soft blurred lines */}
                <div className="line-dispersed line-1" />
                <div className="line-dispersed line-2" />
                <div className="line-dispersed line-3" />
              </div>

              {/* Stage 2: System Design - Aligning into grid */}
              <div className="absolute inset-0 flex items-center justify-center stage-2">
                <div className="grid-container">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={`grid-${i}`}
                      className="grid-cell"
                      style={{
                        animationDelay: `${3 + i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Stage 3: Precision - Final stable form */}
              <div className="absolute inset-0 flex items-center justify-center stage-3">
                <div className="final-form">
                  <div className="final-rect final-rect-1" />
                  <div className="final-rect final-rect-2" />
                  <div className="final-rect final-rect-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Stage 1: Research - Dispersed ambient motion */
        .stage-1 {
          animation: fadeStage1 10s ease-in-out infinite;
        }

        .particle {
          animation: floatAmbient 8s ease-in-out infinite;
          filter: blur(1px);
          opacity: 0;
        }

        @keyframes floatAmbient {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -15px);
            opacity: 0.2;
          }
          50% {
            transform: translate(-10px, 20px);
            opacity: 0.15;
          }
          75% {
            transform: translate(15px, 10px);
            opacity: 0.2;
          }
          90% {
            opacity: 0.1;
          }
        }

        .line-dispersed {
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(156, 163, 175, 0.2),
            transparent
          );
          animation: lineDrift 10s ease-in-out infinite;
          filter: blur(2px);
          opacity: 0;
        }

        .line-1 {
          top: 30%;
          left: 20%;
          animation-delay: 0s;
        }

        .line-2 {
          top: 50%;
          left: 40%;
          animation-delay: 1s;
        }

        .line-3 {
          top: 70%;
          left: 30%;
          animation-delay: 2s;
        }

        @keyframes lineDrift {
          0%,
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          25% {
            transform: translateX(30px) rotate(5deg);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-20px) rotate(-3deg);
            opacity: 0.15;
          }
          90% {
            opacity: 0;
          }
        }

        @keyframes fadeStage1 {
          0%,
          25% {
            opacity: 1;
          }
          30%,
          100% {
            opacity: 0;
          }
        }

        /* Stage 2: System Design - Grid alignment */
        .stage-2 {
          animation: fadeStage2 10s ease-in-out infinite;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 60px);
          grid-template-rows: repeat(3, 60px);
          gap: 20px;
          opacity: 0;
          animation: gridAppear 10s ease-in-out infinite;
        }

        .grid-cell {
          border: 1px solid rgba(156, 163, 175, 0.3);
          background: rgba(156, 163, 175, 0.05);
          opacity: 0;
          animation: cellAlign 10s ease-in-out infinite;
          filter: blur(0.5px);
        }

        @keyframes fadeStage2 {
          0%,
          25% {
            opacity: 0;
          }
          30%,
          60% {
            opacity: 1;
          }
          65%,
          100% {
            opacity: 0;
          }
        }

        @keyframes gridAppear {
          0%,
          30% {
            opacity: 0;
            transform: scale(0.8);
          }
          35%,
          60% {
            opacity: 1;
            transform: scale(1);
          }
          65%,
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        @keyframes cellAlign {
          0%,
          30% {
            opacity: 0;
            transform: translate(var(--tx, 0), var(--ty, 0));
          }
          35% {
            opacity: 0.4;
          }
          40%,
          60% {
            opacity: 0.6;
            transform: translate(0, 0);
          }
          65%,
          100% {
            opacity: 0;
          }
        }

        /* Stage 3: Precision - Final stable form */
        .stage-3 {
          animation: fadeStage3 10s ease-in-out infinite;
        }

        .final-form {
          position: relative;
          width: 200px;
          height: 200px;
          opacity: 0;
          animation: formStabilize 10s ease-in-out infinite;
        }

        .final-rect {
          position: absolute;
          border: 1px solid rgba(229, 231, 235, 0.5);
          background: rgba(229, 231, 235, 0.03);
          opacity: 0;
          animation: rectAppear 10s ease-in-out infinite;
        }

        .final-rect-1 {
          width: 80px;
          height: 80px;
          top: 20px;
          left: 20px;
          animation-delay: 0s;
        }

        .final-rect-2 {
          width: 100px;
          height: 50px;
          top: 40px;
          right: 20px;
          animation-delay: 0.2s;
        }

        .final-rect-3 {
          width: 120px;
          height: 60px;
          bottom: 20px;
          left: 40px;
          animation-delay: 0.4s;
        }

        @keyframes fadeStage3 {
          0%,
          60% {
            opacity: 0;
          }
          65%,
          100% {
            opacity: 1;
          }
        }

        @keyframes formStabilize {
          0%,
          65% {
            opacity: 0;
            transform: scale(0.95);
            filter: blur(2px);
          }
          70% {
            opacity: 0.8;
            transform: scale(1);
            filter: blur(1px);
          }
          75%,
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes rectAppear {
          0%,
          65% {
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          75%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .particle,
          .line-dispersed,
          .grid-cell,
          .final-rect {
            animation: none !important;
          }

          .stage-1,
          .stage-2,
          .stage-3 {
            animation: none !important;
          }

          .stage-3 {
            opacity: 1;
          }

          .final-form {
            opacity: 1;
            animation: none !important;
          }

          .final-rect {
            opacity: 0.8;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(3, 50px);
            grid-template-rows: repeat(3, 50px);
            gap: 15px;
          }

          .final-form {
            width: 160px;
            height: 160px;
          }

          .final-rect-1 {
            width: 60px;
            height: 60px;
          }

          .final-rect-2 {
            width: 80px;
            height: 40px;
          }

          .final-rect-3 {
            width: 100px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Approach;
