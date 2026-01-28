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
      number: "01",
      title: "Brand Direction",
      description:
        "We define the structure behind brands — how they look, sound, and scale.",
    },
    {
      number: "02",
      title: "Digital & Web Design",
      description:
        "Landing pages and websites designed with intent, clarity, and purpose.",
    },
    {
      number: "03",
      title: "Full-Stack Development",
      description:
        "Production-ready systems built for performance and longevity.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 lg:py-40 bg-[#0E0E0E]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-16 md:mb-24"
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)]">
            Services
          </h2>
        </motion.div>

        {/* Services List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 md:space-y-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <div className="border-t border-[rgba(245,245,245,0.1)] pt-8 md:pt-12">
                <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="text-sm md:text-base font-mono text-[rgba(245,245,245,0.4)] tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#F5F5F5] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-6">
                    <p className="text-base md:text-lg text-[rgba(245,245,245,0.6)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
