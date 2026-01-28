"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
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
    <section id="philosophy" className="py-32 px-6 bg-gray-50" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-12"
        >
          Our Philosophy
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Design with Purpose
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every pixel, every interaction, and every element serves a
              purpose. We believe in creating designs that not only look
              beautiful but also solve real problems and enhance user
              experiences.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Innovation Through Simplicity
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              True innovation doesn't require complexity. We strip away the
              unnecessary to reveal elegant solutions that are intuitive,
              accessible, and timeless.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Collaboration & Trust
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The best work comes from strong partnerships. We work closely with
              our clients, treating their vision as our own and building lasting
              relationships based on trust and transparency.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Continuous Evolution
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The digital landscape never stops changing, and neither do we. We
              stay ahead of trends, embrace new technologies, and constantly
              refine our craft to deliver cutting-edge solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
