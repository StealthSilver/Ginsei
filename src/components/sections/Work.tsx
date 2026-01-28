"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "Smart Grid Analytics",
    category: "Web Design",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    number: "02",
    name: "Verdan",
    category: "Product",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    number: "03",
    name: "MeshSpire",
    category: "Product",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    number: "04",
    name: "Sol-X",
    category: "Product",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
  },
  {
    number: "05",
    name: "Infinity-X",
    category: "Product",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
  },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
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
            className="fixed pointer-events-none z-40 w-64 md:w-80 aspect-[4/5] overflow-hidden"
            style={{
              left: mousePos.x - 160,
              top: mousePos.y - 200,
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
                className="w-full h-full object-cover"
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
                className="group py-8 md:py-10 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
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
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
