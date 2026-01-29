"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const text1 = "Crafting Digital";
  const text2 = "Excellence";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: text1.length * 0.05 + text2.length * 0.05 + 0.3,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center bg-[#0E0E0E] overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.015 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.01 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/3 left-1/2 w-[400px] h-[400px] bg-white rounded-full blur-[100px]"
        />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Snake-like animated dots following grid borders */}
        {/* Dot 1 - Complex path following grid edges */}
        <motion.div
          className="absolute w-2 h-2 rounded-full -translate-x-1 -translate-y-1"
          style={{
            background: "#9a9a9a",
            boxShadow: "0 0 8px #9a9a9a, 0 0 16px rgba(154, 154, 154, 0.4)",
          }}
          animate={{
            x: [
              800, 880, 880, 960, 960, 1040, 1040, 1120, 1120, 1040, 1040, 960,
              960, 880, 880, 800,
            ],
            y: [
              160, 160, 240, 240, 320, 320, 400, 400, 320, 320, 240, 240, 160,
              160, 160, 160,
            ],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Dot 2 - Different path following grid edges */}
        <motion.div
          className="absolute w-2 h-2 rounded-full -translate-x-1 -translate-y-1"
          style={{
            background: "#9a9a9a",
            boxShadow: "0 0 8px #9a9a9a, 0 0 16px rgba(154, 154, 154, 0.4)",
          }}
          animate={{
            x: [
              960, 1040, 1040, 1120, 1120, 1200, 1200, 1120, 1120, 1040, 1040,
              960, 960,
            ],
            y: [80, 80, 160, 160, 240, 240, 320, 320, 240, 240, 160, 160, 80],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />

        {/* Dot 3 - Another path following grid edges */}
        <motion.div
          className="absolute w-2 h-2 rounded-full -translate-x-1 -translate-y-1"
          style={{
            background: "#9a9a9a",
            boxShadow: "0 0 8px #9a9a9a, 0 0 16px rgba(154, 154, 154, 0.4)",
          }}
          animate={{
            x: [
              1040, 1120, 1120, 1200, 1200, 1120, 1120, 1040, 1040, 960, 960,
              1040,
            ],
            y: [240, 240, 320, 320, 400, 400, 480, 480, 400, 400, 320, 320],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Dot 4 - Bottom right path */}
        <motion.div
          className="absolute w-2 h-2 rounded-full -translate-x-1 -translate-y-1"
          style={{
            background: "#9a9a9a",
            boxShadow: "0 0 8px #9a9a9a, 0 0 16px rgba(154, 154, 154, 0.4)",
          }}
          animate={{
            x: [960, 1040, 1040, 1120, 1120, 1040, 1040, 960, 960],
            y: [480, 480, 560, 560, 640, 640, 560, 560, 480],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
        />

        {/* Dot 5 - Bottom right path */}
        <motion.div
          className="absolute w-2 h-2 rounded-full -translate-x-1 -translate-y-1"
          style={{
            background: "#9a9a9a",
            boxShadow: "0 0 8px #9a9a9a, 0 0 16px rgba(154, 154, 154, 0.4)",
          }}
          animate={{
            x: [1120, 1200, 1200, 1280, 1280, 1200, 1200, 1120, 1120],
            y: [560, 560, 640, 640, 720, 720, 640, 640, 560],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 7,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Small label */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)]">
              Design Studio
            </h2>
          </motion.div>

          {/* Main heading - Letter by letter animation */}
          <div className="mb-6">
            <h1
              className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-medium text-[#F5F5F5] tracking-tight hyphens-none"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                wordBreak: "keep-all",
              }}
            >
              {text1.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <br />
              <span className="text-[rgba(245,245,245,0.5)]">
                {text2.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + text1.length}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-[rgba(245,245,245,0.5)] max-w-xl mb-12 leading-relaxed font-light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Where art meets technology, creating experiences that inspire and
            transform digital landscapes.
          </motion.p>

          {/* CTA Button - Same as Navbar */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[16px] leading-none bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
            >
              Connect
              <svg
                className="w-5 h-5 transition-transform duration-500 delay-75 group-hover:translate-x-1"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
