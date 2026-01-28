"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Let's Create Something
          <br />
          <span className="text-gray-400">Amazing Together</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-12">
          Ready to transform your digital presence? Let's start a conversation.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:hello@gensei.studio"
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
