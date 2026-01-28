"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const text1 = "Let's build something";
  const text2 = "that lasts.";

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
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-[#0E0E0E] overflow-hidden py-32"
      ref={ref}
    >
      {/* Subtle animated background elements - Same as Hero */}
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
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10 text-center"
        >
          {/* Main heading - Letter by letter animation */}
          <div className="mb-12">
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-medium text-[#F5F5F5] tracking-tight"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {text1.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
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
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>

          {/* CTA Button - Same as Hero/Navbar Connect button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-[15px] leading-none bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
            >
              Start a Conversation
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
