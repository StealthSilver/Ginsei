"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "Smart Grid Analytics",
    category: "Web Design",
    year: "2025",
    image: "/sgrids.png",
    url: "https://sgrids.vercel.app/",
  },
  {
    number: "02",
    name: "Verdan",
    category: "Product",
    year: "2026",
    image: "/verdan.png",
    url: "https://verdan-main.vercel.app/",
  },
  {
    number: "03",
    name: "MeshSpire",
    category: "Product",
    year: "2025",
    image: "/meshspire.png",
    url: "https://meshspire-landing.vercel.app/",
  },
  {
    number: "04",
    name: "Sol-X",
    category: "Product",
    year: "2026",
    image: "/solx.png",
    url: "https://sol-x-eta.vercel.app/",
  },
  {
    number: "05",
    name: "Alcaster",
    category: "Web Design",
    year: "2025",
    image: "/alcaster.png",
    url: "https://alcaster.vercel.app/",
  },
  {
    number: "06",
    name: "Infinity-X",
    category: "Product",
    year: "2025",
    image: "/infx.png",
    url: "https://infinity-x-landing.vercel.app/",
  },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      id="work"
      className="py-24 md:py-32 lg:py-40 bg-[#0E0E0E]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-16 md:mb-24"
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)]">
            Selected Work
          </h2>
          <span className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)]">
            {projects.length} Projects
          </span>
        </motion.div>

        <div
          ref={containerRef}
          className="relative"
          onMouseMove={handleMouseMove}
        >
          {/* Hover Image Preview */}
          <motion.div
            className="fixed pointer-events-none z-40 w-[480px] md:w-[560px] aspect-[16/9] overflow-hidden rounded-lg shadow-2xl"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 150,
            }}
            animate={{
              opacity: hoveredIndex !== null ? 1 : 0,
              scale: hoveredIndex !== null ? 1 : 0.9,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {hoveredIndex !== null && (
              <img
                src={projects[hoveredIndex].image}
                alt={projects[hoveredIndex].name}
                className="w-full h-full object-contain bg-[#0E0E0E]"
              />
            )}
          </motion.div>

          {/* Projects List */}
          <div className="space-y-0 divide-y divide-white/10">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group py-8 md:py-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="grid grid-cols-12 items-center gap-4">
                    {/* Number */}
                    <span className="col-span-2 md:col-span-1 text-sm text-[rgba(154,154,154,1)] group-hover:text-[#F5F5F5] transition-colors duration-300">
                      {project.number}
                    </span>

                    {/* Name */}
                    <h3
                      className="col-span-10 md:col-span-7 text-3xl sm:text-4xl md:text-5xl font-medium text-[#F5F5F5] tracking-tight group-hover:translate-x-2 transition-transform duration-300"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {project.name}
                    </h3>

                    {/* Category */}
                    <span className="hidden md:block col-span-2 text-sm text-[rgba(154,154,154,1)]">
                      {project.category}
                    </span>

                    {/* Year */}
                    <span className="hidden md:block col-span-2 text-sm text-[rgba(154,154,154,1)] text-right">
                      {project.year}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
