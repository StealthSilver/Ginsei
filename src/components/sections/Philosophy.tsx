"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const line1 = "Form gives shape to intention.";
  const line2 = "Function gives it purpose.";
  const line3 = "We design systems where clarity and beauty coexist.";

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
        delay: line1.length * 0.05 + line2.length * 0.05 + 0.3,
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
      id="philosophy"
      className="relative h-screen flex items-center bg-[#0E0E0E] overflow-hidden"
      ref={ref}
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.015 } : { opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.01 } : { opacity: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/3 right-1/2 w-[400px] h-[400px] bg-white rounded-full blur-[100px]"
        />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10"
        >
          {/* Small label */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-block px-3 py-1.5 text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)] border border-white/10 rounded-full">
              Philosophy
            </span>
          </motion.div>

          {/* Main quote - Letter by letter animation */}
          <div className="mb-6 relative">
            {/* Opening quotation mark */}
            <motion.div
              variants={fadeInUp}
              className="absolute -left-8 -top-4 text-6xl text-[rgba(245,245,245,0.2)] font-serif"
            >
              "
            </motion.div>

            <blockquote
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.4] font-light text-[#F5F5F5] tracking-tight italic"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {line1.split("").map((letter, i) => (
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
              {line2.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + line1.length}
                  variants={letterAnimation}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <br />
              <span className="text-[rgba(245,245,245,0.6)]">
                {line3.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + line1.length + line2.length}
                    variants={letterAnimation}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </blockquote>

            {/* Closing quotation mark */}
            <motion.div
              variants={fadeInUp}
              className="absolute -right-8 -bottom-8 text-6xl text-[rgba(245,245,245,0.2)] font-serif"
            >
              "
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
