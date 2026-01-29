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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    collegeName: "",
    role: "",
    resume: null as File | null,
    importantLinks: "",
  });

  const text1 = "Join the";
  const text2 = "Ginsei team";

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("collegeName", formData.collegeName);
      submitData.append("role", formData.role);
      submitData.append("importantLinks", formData.importantLinks);
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      // Submit to API
      const response = await fetch("/api/careers", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          collegeName: "",
          role: "",
          resume: null,
          importantLinks: "",
        });

        // Close modal after 3 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage("");
        }, 3000);
      } else {
        setSubmitMessage("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitMessage("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          className="relative min-h-screen flex items-center bg-[#0E0E0E] overflow-hidden py-20 sm:py-32 pt-24 sm:pt-40"
          ref={ref}
        >
          {/* Subtle animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.015 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-white rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.01 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-1/3 left-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-white rounded-full blur-[80px] sm:blur-[100px]"
            />

            {/* Subtle grid lines - hidden on mobile */}
            <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main Heading */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mb-6 sm:mb-8"
              >
                <h1
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-[#F5F5F5] leading-[1.1] tracking-tight px-4 sm:px-0"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <div>
                    {text1.split("").map((char, index) => (
                      <motion.span
                        key={`text1-${char}-${index}`}
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
                  <div>
                    {text2.split("").map((char, index) => (
                      <motion.span
                        key={`text2-${char}-${index}`}
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
                className="max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
              >
                <p
                  className="text-base sm:text-lg md:text-2xl text-[rgba(245,245,245,0.5)] leading-relaxed mb-6 sm:mb-8 font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  We craft experiences that resonate and endure. Join our
                  collective of designers and developers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 mb-8 sm:mb-12">
                  <div className="text-center">
                    <h3
                      className="text-xl sm:text-2xl font-medium text-[#F5F5F5] mb-2 sm:mb-3"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Creative Freedom
                    </h3>
                    <p
                      className="text-sm sm:text-base text-[rgba(245,245,245,0.5)] font-light"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Push boundaries and explore new ideas
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-display text-[#F5F5F5] mb-2 sm:mb-3">
                      Learning Culture
                    </h3>
                    <p
                      className="text-sm sm:text-base text-[rgba(245,245,245,0.5)] font-light"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Grow alongside talented peers
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-display text-[#F5F5F5] mb-2 sm:mb-3">
                      Impact Projects
                    </h3>
                    <p
                      className="text-sm sm:text-base text-[rgba(245,245,245,0.5)] font-light"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Work on impactful projects
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Apply Button */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="px-4 sm:px-0"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] font-medium hover:bg-[#F5F5F5] hover:text-[#0E0E0E] hover:border-[#F5F5F5] transition-all duration-200"
                >
                  Apply Now
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 delay-75 group-hover:translate-x-1"
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
                <div className="bg-[#0E0E0E] border border-[rgba(245,245,245,0.2)] max-w-2xl w-full my-4 sm:my-8 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#9a9a9a] hover:text-[#F5F5F5] transition-colors z-10"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
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
                  <div className="p-6 sm:p-8 md:p-12">
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#F5F5F5] mb-2 pr-8"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Apply to Ginsei
                    </h2>
                    <p
                      className="text-sm sm:text-base text-[rgba(245,245,245,0.5)] mb-6 sm:mb-8 font-light"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Fill in your details and we'll get back to you soon.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-6"
                    >
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs sm:text-sm text-[#F5F5F5] mb-2"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
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
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm text-[#F5F5F5] mb-2"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
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
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* College Name */}
                      <div>
                        <label
                          htmlFor="collegeName"
                          className="block text-xs sm:text-sm text-[#F5F5F5] mb-2"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
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
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                          placeholder="Your College or University"
                        />
                      </div>

                      {/* Role Selection */}
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-xs sm:text-sm text-[#F5F5F5] mb-2"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          Role <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#0E0E0E] border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] focus:outline-none focus:border-[#F5F5F5] transition-colors"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
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
                          className="block text-xs sm:text-sm text-[#F5F5F5] mb-2"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
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
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] file:mr-3 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:border-0 file:text-xs sm:file:text-sm file:bg-[#F5F5F5] file:text-[#0E0E0E] hover:file:bg-[#e5e5e5] file:cursor-pointer cursor-pointer focus:outline-none focus:border-[#F5F5F5] transition-colors"
                            style={{
                              fontFamily: "var(--font-inter), sans-serif",
                            }}
                          />
                        </div>
                        {formData.resume && (
                          <p
                            className="text-xs sm:text-sm text-[rgba(245,245,245,0.5)] mt-2 font-light"
                            style={{
                              fontFamily: "var(--font-inter), sans-serif",
                            }}
                          >
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>

                      {/* Important Links */}
                      <div>
                        <label
                          htmlFor="importantLinks"
                          className="block text-xs sm:text-sm text-[#F5F5F5] mb-2"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          Important Links
                          <span
                            className="text-[rgba(245,245,245,0.4)] text-xs ml-2 font-light"
                            style={{
                              fontFamily: "var(--font-inter), sans-serif",
                            }}
                          >
                            (Optional)
                          </span>
                        </label>
                        <textarea
                          id="importantLinks"
                          name="importantLinks"
                          value={formData.importantLinks}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-transparent border border-[rgba(245,245,245,0.2)] text-[#F5F5F5] placeholder-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[#F5F5F5] transition-colors resize-none"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                          placeholder="Portfolio, GitHub, LinkedIn, etc."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2 sm:pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-[#F5F5F5] text-[#0E0E0E] font-medium hover:bg-[#e5e5e5] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Submit Application"}
                          {!isSubmitting && (
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 delay-75 group-hover:translate-x-1"
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
                          )}
                        </button>
                      </div>

                      {/* Success/Error Message */}
                      {submitMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`mt-3 sm:mt-4 p-3 sm:p-4 border text-center text-sm sm:text-base ${
                            submitMessage.includes("successfully")
                              ? "border-green-500/30 bg-green-500/10 text-green-400"
                              : "border-red-500/30 bg-red-500/10 text-red-400"
                          }`}
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {submitMessage}
                        </motion.div>
                      )}
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
