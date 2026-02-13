"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const getColoredTitle = (title: string) => {
    const colors = [
      "var(--color-red)",
      "var(--color-orange)",
      "var(--color-yellow)",
      "var(--color-green)",
      "var(--color-blue)",
      "var(--color-purple)",
      "var(--color-pink)",
    ];

    return title.split("").map((letter: string, index: number) => {
      const color = colors[index % colors.length];
      return letter === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span
          key={index}
          className="hover:animate-bounce inline-block transition-all duration-200 drop-shadow-md shadow-white"
          style={{ color }}
        >
          {letter}
        </span>
      );
    });
  };

  const slides = [
    {
      title: "Welcome to Little Soldiers Family DayCare",
      description:
        "Where every child's journey begins with love, care, and endless possibilities.",
      image: "/hero-building-exterior.jpg",
      highlight: "Nurturing Hearts, Growing Minds",
    },
    {
      title: "A Safe Heaven for Your Little Ones",
      description:
        "Providing a secure, loving environment where children thrive through play-based learning.",
      image: "/hero-classroom-wide.jpg",
      highlight: "Safety First, Always",
    },
    {
      title: "Join Our Happy Family",
      description:
        "Experience a warm, inclusive community where every child's uniqueness is celebrated.",
      image: "/hero-activity-room.jpg",
      highlight: "Creating Memories Together",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Opening Soon Announcement Banner */}
      {showAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
          >
            {/* Header with Yellow Background */}
            <div className="bg-[var(--color-yellow)] rounded-t-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                >
                  <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path>
                  <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"></path>
                  <path d="M6 6h12v12H6z"></path>
                </svg>
                <h3 className="font-bold text-xl">Opening Soon!</h3>
              </div>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-black hover:text-gray-800"
                aria-label="Close announcement"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3 text-gray-800">
                Little Soldiers Family DayCare is launching this summer, 2025!
              </h4>

              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold">✦ Expert Care:</span> Our
                  facility will be operated by highly experienced childcare
                  professionals with over 8 years of combined experience in
                  early childhood education.
                </p>

                <p>
                  <span className="font-semibold">✦ Modern Facility:</span>{" "}
                  Bright, spacious classrooms filled with age-appropriate
                  learning materials and a large outdoor play area for physical
                  development.
                </p>

                <p>
                  <span className="font-semibold">
                    ✦ Comprehensive Programs:
                  </span>{" "}
                  Developmentally appropriate curriculum for children ages 6
                  months months to 12 years, focusing on social, emotional, and
                  cognitive growth.
                </p>

                <p>
                  <span className="font-semibold">
                    ✦ Limited Spots Available:
                  </span>{" "}
                  Secure your child place by pre-registering today! Our priority
                  enrollment period is now open.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setShowAnnouncement(false);
                    scrollToContact();
                  }}
                  className="w-full py-3 bg-[var(--color-yellow)] hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Learn More & Pre-Register</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} mode="sync">
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      transition: "transform 5s ease-out",
                      transform: "scale(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-yellow)] text-black text-sm font-semibold mb-4 shadow-lg">
              {slides[currentSlide].highlight}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              {getColoredTitle(slides[currentSlide].title)}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>

            {/* Opening Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-card-dark p-6 mb-8 border-l-4 border-[var(--color-yellow)]"
            >
              <h3 className="text-[var(--color-yellow)] text-xl font-semibold mb-3">
                Licensed Childcare in Blackfalds
              </h3>
              <p className="text-gray-200 mb-3">
                Little Soldiers Family Daycare is a{" "}
                <span className="text-yellow-300 font-medium">licensed daycare</span> providing a safe and nurturing environment for children aged{" "}
                <span className="text-yellow-300 font-medium">6 months to 12 years</span>.
              </p>
              <p className="text-gray-200 mb-3">
                Our team of{" "}
                <span className="text-yellow-300 font-medium">qualified educators</span> is dedicated to high-quality care, offering specialized programs including{" "}
                <span className="text-yellow-300 font-medium">infant care, toddler activities, and Out of School Care (OSC)</span>.
              </p>
              <p className="text-gray-200 mb-3">
                We provide{" "}
                <span className="text-yellow-300 font-medium">homework assistance, nutritious meal preparation, and engaging field trips</span> to support your child's development.
              </p>
              <p className="text-gray-200">
                Proudly serving families in{" "}
                <span className="text-yellow-300 font-medium">Blackfalds and the Red Deer area</span> with reliable, professional childcare you can trust.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-modern glow">
                Schedule a Visit
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Enroll Now
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card-dark px-6 py-4 hover:scale-105 transition-all duration-300 cursor-default border border-yellow-400/20">
                <p className="text-2xl font-bold text-[var(--color-yellow)]">
                  7:00 AM
                </p>
                <p className="text-sm text-gray-300">Opening Time</p>
              </div>
              <div className="glass-card-dark px-6 py-4 hover:scale-105 transition-all duration-300 cursor-default border border-yellow-400/20">
                <p className="text-2xl font-bold text-[var(--color-yellow)]">
                  6:00 PM
                </p>
                <p className="text-sm text-gray-300">Closing Time</p>
              </div>
              <div className="glass-card-dark px-6 py-4 hover:scale-105 transition-all duration-300 cursor-default border border-yellow-400/20">
                <p className="text-2xl font-bold text-[var(--color-yellow)]">
                  Mon-Fri
                </p>
                <p className="text-sm text-gray-300">Working Days</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[var(--color-yellow)] w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
