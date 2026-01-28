"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <section className="relative h-screen flex items-center px-6 lg:px-20 bg-[#0E0E0E] overflow-hidden">
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
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl relative z-10"
      >
        {/* Small label */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-block px-3 py-1.5 text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)] border border-white/10 rounded-full">
            Design Studio
          </span>
        </motion.div>

        {/* Main heading - Clean & Modern */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-medium text-[#F5F5F5] mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Crafting Digital
          <br />
          <span className="text-[rgba(245,245,245,0.5)]">Excellence</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-[rgba(245,245,245,0.5)] max-w-xl mb-12 leading-relaxed font-light"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Where art meets technology, creating experiences that inspire and
          transform digital landscapes.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="flex gap-4">
          <a
            href="#contact"
            className="group relative px-6 py-3 text-sm font-medium text-white overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15" />
            <span className="relative flex items-center gap-2">
              Get Started
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </span>
          </a>
        </motion.div>

        {/* Stats or features - subtle */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 flex gap-12 text-sm"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <div>
            <div className="text-2xl font-semibold text-white mb-1">50+</div>
            <div className="text-[rgba(245,245,245,0.4)]">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-white mb-1">5+</div>
            <div className="text-[rgba(245,245,245,0.4)]">Years</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-white mb-1">100%</div>
            <div className="text-[rgba(245,245,245,0.4)]">Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 lg:left-20 flex items-center gap-3 text-xs text-[rgba(245,245,245,0.3)]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[rgba(245,245,245,0.3)] to-transparent"
        />
        <span className="tracking-[0.15em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
