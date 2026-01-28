"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Letter by letter animation
  const text1 = "Crafting";
  const text2 = "Digital";
  const text3 = "Excellence";

  const letterAnimation = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.08,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 2.5,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-end px-6 lg:px-20 bg-gradient-to-br from-[#0A0A0A] via-[#0E0E0E] to-[#1A1A1A] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.04, scale: 1.2, rotate: 45 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.03, scale: 1.1, rotate: -30 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-[140px]"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/5 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-white/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl w-full flex flex-col items-end text-right relative z-10">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[rgba(245,245,245,0.5)] mb-12 font-light"
        >
          Design Studio
        </motion.p>

        {/* Main heading - MASSIVE with letter animation */}
        <div className="mb-8 perspective-1000">
          {/* Line 1 */}
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] leading-[0.85] font-black text-[#F5F5F5] tracking-tighter mb-4 font-display">
            {text1.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  transformOrigin: "center bottom",
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Line 2 */}
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] leading-[0.85] font-black mb-4 tracking-tighter">
            {text2.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i + text1.length}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                style={{
                  transformOrigin: "center bottom",
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Line 3 */}
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] leading-[0.85] font-black text-[#F5F5F5] tracking-tighter font-display">
            {text3.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i + text1.length + text2.length}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  transformOrigin: "center bottom",
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  textShadow: "0 0 40px rgba(255,255,255,0.1)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl text-[rgba(245,245,245,0.6)] max-w-2xl mb-12 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
        >
          Where art meets technology,
          <br />
          <span className="text-[rgba(245,245,245,0.4)]">
            creating experiences that inspire.
          </span>
        </motion.p>

        {/* Scroll indicator - repositioned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-12 right-12 flex flex-col items-end gap-3 text-sm text-[rgba(245,245,245,0.4)]"
        >
          <span className="tracking-[0.2em] uppercase text-xs font-light">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-[rgba(245,245,245,0.4)] via-[rgba(245,245,245,0.2)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
