"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: "",
  });

  const text1 = "Let's build something";
  const text2 = "that lasts.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your email sending logic here
    setIsModalOpen(false);
    setFormData({ fullName: "", email: "", description: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  return (
    <section
      id="contact"
      className="relative  flex items-center bg-[#0E0E0E] overflow-hidden py-32"
      ref={ref}
    >
      {/* Subtle animated background elements - Same as Hero */}
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
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10 text-center"
        >
          {/* Main heading - Letter by letter animation */}
          <div className="mb-12">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-[#F5F5F5] tracking-tight"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {text1.split("").map((letter, i) => (
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
              <span className="text-[rgba(245,245,245,0.5)]">
                {text2.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + text1.length}
                    variants={letterAnimation}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>

          {/* CTA Button - Same as Hero/Navbar Connect button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[16px] leading-none bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200 cursor-pointer"
            >
              Start a Conversation
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
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0E0E0E] border border-[rgba(245,245,245,0.2)] p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[rgba(245,245,245,0.5)] hover:text-[#F5F5F5] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <h3
                className="text-2xl sm:text-3xl font-medium text-[#F5F5F5] mb-2"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Start a Conversation
              </h3>
              <p className="text-[rgba(245,245,245,0.5)] mb-8 text-sm">
                Fill out the form below and we'll get back to you soon.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[rgba(245,245,245,0.7)] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.3)] focus:outline-none focus:border-[rgba(245,245,245,0.4)] transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[rgba(245,245,245,0.7)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.3)] focus:outline-none focus:border-[rgba(245,245,245,0.4)] transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-[rgba(245,245,245,0.7)] mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.3)] focus:outline-none focus:border-[rgba(245,245,245,0.4)] transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[16px] leading-none bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
                >
                  Send Email
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
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
