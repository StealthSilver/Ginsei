"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Work() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      title: "Aurora Finance",
      category: "Fintech Platform",
      description:
        "A modern banking experience with intuitive design and powerful features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Zenith Wellness",
      category: "Health & Lifestyle",
      description:
        "Holistic wellness platform connecting users with mindful living practices.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    },
    {
      title: "Nexus Commerce",
      category: "E-commerce",
      description:
        "Next-generation shopping experience with AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="work" className="py-32 px-6" ref={ref}>
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
          Featured Work
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-16">
          A glimpse into our latest projects and the impact we've created.
        </motion.p>
        <motion.div variants={staggerContainer} className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600">{project.description}</p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
