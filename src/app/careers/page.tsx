"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CreativeCursor from "@/components/CreativeCursor";

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    collegeName: "",
    role: "",
    resume: null as File | null,
    importantLinks: "",
  });

  const text1 = "Join the";
  const text2 = "Ginsei Team";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.collegeName ||
      !formData.role ||
      !formData.resume
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Handle form submission here
    console.log("Application submitted:", formData);
    // You can add your submission logic here

    setIsModalOpen(false);
    setFormData({
      fullName: "",
      email: "",
      collegeName: "",
      role: "",
      resume: null,
      importantLinks: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
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

  return (
    <>
      <CreativeCursor />
      <Navbar />
      <main className="bg-[#0E0E0E]">
        <section
          className="relative min-h-screen flex items-center bg-[#0E0E0E] overflow-hidden py-32 pt-40"
          ref={ref}
        >
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
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main Heading */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-[#F5F5F5] leading-[1.1] tracking-tight">
                  <div className="inline-block">
                    {text1.split("").map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        custom={index}
                        variants={letterAnimation}
                        className="inline-block"
                        style={{
                          display: char === " " ? "inline" : "inline-block",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                  <br />
                  <div className="inline-block">
                    {text2.split("").map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        custom={text1.length + index}
                        variants={letterAnimation}
                        className="inline-block"
                        style={{
                          display: char === " " ? "inline" : "inline-block",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                </h1>
              </motion.div>

              {/* Why Join Ginsei */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-3xl mx-auto mb-12"
              >
                <p className="text-xl md:text-2xl text-[#9a9a9a] leading-relaxed mb-8">
                  At Ginsei, we don't just create digital products — we craft
                  experiences that resonate and endure. We're a collective of
                  designers and developers who believe in the power of
                  thoughtful design and elegant code.
                </p>
                <p className="text-lg md:text-xl text-[#9a9a9a] leading-relaxed mb-8">
                  We're looking for passionate individuals who share our vision
                  of excellence. Whether you're a designer who thinks in systems
                  or a developer who appreciates beautiful interfaces, you'll
                  find a home here.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-display text-[#F5F5F5] mb-3">
                      Creative Freedom
                    </h3>
                    <p className="text-[#9a9a9a]">
                      Push boundaries and explore new ideas without constraints
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-display text-[#F5F5F5] mb-3">
                      Learning Culture
                    </h3>
                    <p className="text-[#9a9a9a]">
                      Grow alongside talented peers in a supportive environment
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-display text-[#F5F5F5] mb-3">
                      Impact Projects
                    </h3>
                    <p className="text-[#9a9a9a]">
                      Work on meaningful projects that make a difference
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Apply Button */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-lg bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
                >
                  Apply Now
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
            </div>
          </div>
        </section>

        {/* Application Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                onClick={() => setIsModalOpen(false)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[#0E0E0E] border border-[rgba(245,245,245,0.2)] max-w-2xl w-full my-8 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 text-[#9a9a9a] hover:text-[#F5F5F5] transition-colors"
                    aria-label="Close modal"
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

                  {/* Modal Content */}
                  <div className="p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-display text-[#F5F5F5] mb-2">
                      Apply to Ginsei
                    </h2>
                    <p className="text-[#9a9a9a] mb-8">
                      Fill in your details and we'll get back to you soon.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-[#F5F5F5] mb-2"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[#9a9a9a] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#F5F5F5] mb-2"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[#9a9a9a] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* College Name */}
                      <div>
                        <label
                          htmlFor="collegeName"
                          className="block text-sm font-medium text-[#F5F5F5] mb-2"
                        >
                          College Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="collegeName"
                          name="collegeName"
                          value={formData.collegeName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[#9a9a9a] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          placeholder="Your College or University"
                        />
                      </div>

                      {/* Role Selection */}
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-[#F5F5F5] mb-2"
                        >
                          Role <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-[#0E0E0E] border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                        >
                          <option value="" disabled>
                            Select a role
                          </option>
                          <option value="designer">Designer</option>
                          <option value="developer">Developer</option>
                        </select>
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label
                          htmlFor="resume"
                          className="block text-sm font-medium text-[#F5F5F5] mb-2"
                        >
                          Upload Resume <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            required
                            accept=".pdf,.doc,.docx"
                            className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-[#F5F5F5] file:text-[#0E0E0E] hover:file:bg-[#e5e5e5] file:cursor-pointer cursor-pointer focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          />
                        </div>
                        {formData.resume && (
                          <p className="text-sm text-[#9a9a9a] mt-2">
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>

                      {/* Important Links */}
                      <div>
                        <label
                          htmlFor="importantLinks"
                          className="block text-sm font-medium text-[#F5F5F5] mb-2"
                        >
                          Important Links
                          <span className="text-[#9a9a9a] text-xs ml-2">
                            (Optional)
                          </span>
                        </label>
                        <textarea
                          id="importantLinks"
                          name="importantLinks"
                          value={formData.importantLinks}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[#9a9a9a] focus:outline-none focus:border-[#F5F5F5] transition-colors resize-none"
                          placeholder="Portfolio, GitHub, LinkedIn, etc."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base bg-[#F5F5F5] text-[#0E0E0E] font-medium hover:bg-[#e5e5e5] transition-all duration-200"
                        >
                          Submit Application
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
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
