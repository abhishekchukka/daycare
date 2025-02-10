"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Little Soldiers Family DayCare",
      description:
        "Where every child's journey begins with love, care, and endless possibilities.",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop",
      highlight: "Nurturing Hearts, Growing Minds",
    },
    {
      title: "A Safe Heaven for Your Little Ones",
      description:
        "Providing a secure, loving environment where children thrive through play-based learning.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
      highlight: "Safety First, Always",
    },
    {
      title: "Join Our Happy Family",
      description:
        "Experience a warm, inclusive community where every child's uniqueness is celebrated.",
      image:
        "https://images.unsplash.com/photo-1597413545419-4013431dbfec?q=80&w=2070&auto=format&fit=crop",
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
              )
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
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-yellow)] text-black text-sm font-semibold mb-4">
              {slides[currentSlide].highlight}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-modern glow">
                Schedule a Visit
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Register Now
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card-dark px-6 py-4">
                <p className="text-2xl font-bold text-[var(--color-yellow)]">
                  7:30 AM
                </p>
                <p className="text-sm text-gray-300">Opening Time</p>
              </div>
              <div className="glass-card-dark px-6 py-4">
                <p className="text-2xl font-bold text-[var(--color-yellow)]">
                  5:30 PM
                </p>
                <p className="text-sm text-gray-300">Closing Time</p>
              </div>
              <div className="glass-card-dark px-6 py-4">
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
