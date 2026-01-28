"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] as const },
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

  const services = [
    {
      title: "Brand Identity",
      description:
        "Creating unique visual identities that capture your brand's essence and resonate with your audience.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Systems",
        "Brand Strategy",
      ],
    },
    {
      title: "Web Design",
      description:
        "Designing beautiful, responsive websites that engage users and drive conversions.",
      features: [
        "UI/UX Design",
        "Responsive Design",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Web Development",
      description:
        "Building fast, scalable, and secure websites using modern technologies and best practices.",
      features: [
        "Frontend Development",
        "Backend Integration",
        "CMS Solutions",
        "Performance Optimization",
      ],
    },
    {
      title: "Digital Strategy",
      description:
        "Crafting comprehensive digital strategies that align with your business goals and drive growth.",
      features: [
        "Market Research",
        "User Research",
        "Content Strategy",
        "Analytics & Insights",
      ],
    },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-gray-50" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          What We Do
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-16">
          Comprehensive solutions tailored to your unique needs.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
