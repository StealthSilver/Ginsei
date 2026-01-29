"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const text1 = "Crafting Digital";
  const text2 = "Excellence";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Progressive animation configuration
  const offset = 100; // Shift right by 100px
  const startX = 1050 + offset; // Central starting position for all dots
  const startY = 350;

  // Initialize all dots at center position
  const dotRefs = useRef<Array<{ x: number; y: number }>>([
    { x: startX, y: startY },
    { x: startX, y: startY },
    { x: startX, y: startY },
    { x: startX, y: startY },
    { x: startX, y: startY },
  ]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

  // Final positions for each dot
  const finalPositions = [
    { x: 900 + offset, y: 200 }, // Dot 0
    { x: 1100 + offset, y: 150 }, // Dot 1
    { x: 1150 + offset, y: 350 }, // Dot 2
    { x: 1050 + offset, y: 550 }, // Dot 3
    { x: 1250 + offset, y: 650 }, // Dot 4
  ];

  // Progressive animation: pairs of dots move sequentially
  const dots = [
    {
      // Dot 0 - moves first
      start: { x: startX, y: startY },
      end: finalPositions[0],
      delay: 0.5,
      duration: 1.5,
    },
    {
      // Dot 1 - moves with Dot 0
      start: { x: startX, y: startY },
      end: finalPositions[1],
      delay: 0.5,
      duration: 1.5,
    },
    {
      // Dot 2 - moves second
      start: { x: startX, y: startY },
      end: finalPositions[2],
      delay: 2.2,
      duration: 1.5,
    },
    {
      // Dot 3 - moves with Dot 2
      start: { x: startX, y: startY },
      end: finalPositions[3],
      delay: 2.2,
      duration: 1.5,
    },
    {
      // Dot 4 - moves last
      start: { x: startX, y: startY },
      end: finalPositions[4],
      delay: 3.9,
      duration: 1.5,
    },
  ];

  // Animation timeline
  const DOTS_FINISH_TIME = 5.4; // All dots reach position by this time
  const LINES_START_TIME = 5.6; // Lines start appearing
  const LINE_DURATION = 0.15; // Each line takes 0.15s to appear
  const FACES_START_TIME = 7.3; // Face fills start
  const FACES_DURATION = 2; // Faces take 2s to fully fill
  const COLOR_SHIFT_START_TIME = 9.5; // Color shifting starts after faces are filled

  // Define all line pairs that connect the dots
  const linePairs = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4], // Lines from dot 0
    [1, 2],
    [1, 3],
    [1, 4], // Lines from dot 1
    [2, 3],
    [2, 4], // Lines from dot 2
    [3, 4], // Line from dot 3
  ];

  // Canvas-based 3D shape rendering with filled polygons
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const startTime = Date.now();

    // Define triangular faces connecting the dots
    const triangles = [
      [0, 1, 2], // Triangle 1
      [1, 2, 3], // Triangle 2
      [2, 3, 4], // Triangle 3
      [0, 2, 3], // Triangle 4
      [0, 3, 4], // Triangle 5
      [0, 1, 4], // Triangle 6
      [1, 3, 4], // Triangle 7
    ];

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const positions = dotRefs.current;
      const elapsed = (Date.now() - startTime) / 1000;

      // Progressive animation timing for faces
      const facesProgress = Math.max(
        0,
        Math.min(1, (elapsed - FACES_START_TIME) / FACES_DURATION),
      );

      // Calculate color shift timing (starts after faces are filled)
      const colorShiftProgress =
        elapsed >= COLOR_SHIFT_START_TIME
          ? elapsed - COLOR_SHIFT_START_TIME
          : 0;

      // Calculate center point for gradient origin
      const centerX =
        positions.reduce((sum, p) => sum + p.x, 0) / positions.length;
      const centerY =
        positions.reduce((sum, p) => sum + p.y, 0) / positions.length;

      // No rotation - use positions as-is
      const rotatedPositions = positions;

      // Draw filled triangular faces with 3D shading effect (only after lines are drawn)
      if (facesProgress > 0) {
        triangles.forEach((triangle, idx) => {
          const [i, j, k] = triangle;
          const p1 = rotatedPositions[i];
          const p2 = rotatedPositions[j];
          const p3 = rotatedPositions[k];

          // Calculate triangle center for z-depth simulation
          const triCenterX = (p1.x + p2.x + p3.x) / 3;
          const triCenterY = (p1.y + p2.y + p3.y) / 3;

          // Calculate distance from canvas center for depth effect
          const distFromCenter = Math.sqrt(
            Math.pow(triCenterX - centerX, 2) +
              Math.pow(triCenterY - centerY, 2),
          );

          // Simulate 3D depth based on position
          const zDepth = Math.sin(elapsed + idx * 0.5) * 0.5 + 0.5;

          // Grey gradient shifting animation - gradually shift lightness for dynamic effect
          // Each triangle gets a slightly different phase for varied grey intensity
          const colorPhase = colorShiftProgress * 0.5 + idx * 0.8;

          // Animate lightness values to create shifting grey tones (saturation = 0 for pure grey)
          const lightnessWave = Math.sin(colorPhase) * 15; // Oscillates between -15 and +15

          // Varying grey lightness values with animation
          const baseLightness = 55 + zDepth * 20 + lightnessWave; // Range: ~40-90% (bright highlights)
          const midLightness = 40 + zDepth * 12 + lightnessWave * 0.7; // Range: ~30-65% (mid-tones)
          const darkLightness = 25 + zDepth * 10 + lightnessWave * 0.5; // Range: ~15-45% (shadows)

          // Create radial gradient for 3D metallic effect
          const gradientRadius = Math.max(
            Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)),
            Math.sqrt(Math.pow(p3.x - p1.x, 2) + Math.pow(p3.y - p1.y, 2)),
          );

          const gradient = ctx.createRadialGradient(
            triCenterX,
            triCenterY,
            0,
            triCenterX,
            triCenterY,
            gradientRadius,
          );

          // Animated fill opacity with progressive reveal
          const baseOpacity = facesProgress * 0.35;
          const midOpacity = facesProgress * 0.25;
          const edgeOpacity = facesProgress * 0.2;

          // Grey gradient: shifting lightness values for dynamic grey tones (saturation = 0)
          gradient.addColorStop(
            0,
            `hsla(0, 0%, ${baseLightness}%, ${baseOpacity})`,
          );
          gradient.addColorStop(
            0.5,
            `hsla(0, 0%, ${midLightness}%, ${midOpacity})`,
          );
          gradient.addColorStop(
            1,
            `hsla(0, 0%, ${darkLightness}%, ${edgeOpacity})`,
          );

          // Fill the triangle
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.fill();

          // Draw glowing edges with shifting grey tones
          ctx.strokeStyle = `hsla(0, 0%, ${baseLightness + 15}%, ${facesProgress * 0.45})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      }

      // Draw connecting lines one by one
      linePairs.forEach((pair, pairIndex) => {
        const [i, j] = pair;

        // Calculate when this specific line should appear
        const lineStartTime = LINES_START_TIME + pairIndex * LINE_DURATION;
        const lineProgress = Math.max(
          0,
          Math.min(1, (elapsed - lineStartTime) / LINE_DURATION),
        );

        if (lineProgress > 0) {
          const p1 = rotatedPositions[i];
          const p2 = rotatedPositions[j];

          // Calculate intermediate point for line drawing animation
          const currentX = p1.x + (p2.x - p1.x) * lineProgress;
          const currentY = p1.y + (p2.y - p1.y) * lineProgress;

          const opacity = Math.min(lineProgress, 0.3);

          const gradient = ctx.createLinearGradient(
            p1.x,
            p1.y,
            currentX,
            currentY,
          );
          // Metallic gray lines for wireframe
          gradient.addColorStop(0, `rgba(180, 180, 180, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(160, 160, 160, ${opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(180, 180, 180, ${opacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Calculate center point for rotation
  const centerX =
    finalPositions.reduce((sum, p) => sum + p.x, 0) / finalPositions.length;
  const centerY =
    finalPositions.reduce((sum, p) => sum + p.y, 0) / finalPositions.length;

  return (
    <section className="relative h-screen flex items-center bg-[#0E0E0E] overflow-hidden">
      {/* Canvas for connecting lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

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

        {/* Container for dots - no rotation */}
        <div className="absolute inset-0">
          {/* Progressive animated dots - vertices of the 3D shape */}
          {dots.map((dot, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 rounded-full -translate-x-1.5 -translate-y-1.5"
              style={{
                background: "linear-gradient(135deg, #d0d0d0 0%, #909090 100%)",
                boxShadow:
                  "0 0 12px rgba(200, 200, 200, 0.5), 0 0 24px rgba(160, 160, 160, 0.3)",
                zIndex: 3,
              }}
              initial={{
                x: dot.start.x,
                y: dot.start.y,
                opacity: 1,
              }}
              animate={{
                x: dot.end.x,
                y: dot.end.y,
                opacity: 1,
              }}
              transition={{
                duration: dot.duration,
                delay: dot.delay,
                ease: [0.4, 0, 0.2, 1],
              }}
              onUpdate={(latest: any) => {
                // Update the ref position for canvas to read
                if (latest.x !== undefined && latest.y !== undefined) {
                  dotRefs.current[index] = {
                    x: latest.x,
                    y: latest.y,
                  };
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Small label */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-xs tracking-[0.2em] uppercase text-[rgba(245,245,245,0.4)]">
              Design Studio
            </h2>
          </motion.div>

          {/* Main heading - Letter by letter animation */}
          <div className="mb-6">
            <h1
              className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] font-medium text-[#F5F5F5] tracking-tight hyphens-none"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                wordBreak: "keep-all",
              }}
            >
              {text1.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
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
                    animate="visible"
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-[rgba(245,245,245,0.5)] max-w-xl mb-12 leading-relaxed font-light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Where art meets technology, creating experiences that inspire and
            transform digital landscapes.
          </motion.p>

          {/* CTA Button - Same as Navbar */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[16px] leading-none bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
            >
              Connect
              <svg
                className="w-5 h-5 transition-transform duration-500 delay-75 group-hover:translate-x-1"
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
