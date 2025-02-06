"use client"; // Add this at the top since we're using client-side features

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaHeartbeat,
  FaGraduationCap,
  FaSmile,
  FaMobileAlt,
  FaShieldAlt,
  FaUtensils,
} from "react-icons/fa";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: <FaShieldAlt className="text-5xl text-[var(--color-blue)]" />,
      title: "Safety First Environment",
      description:
        "State-of-the-art security systems, child-safe facilities, and strict safety protocols ensure your child&apos;s wellbeing is our top priority.",
      stats: "100% Safety Record",
    },
    {
      icon: <FaGraduationCap className="text-5xl text-[var(--color-green)]" />,
      title: "Expert Educators",
      description:
        "Our certified teachers and caregivers bring years of experience in early childhood education, ensuring quality learning and development.",
      stats: "15+ Years Experience",
    },
    {
      icon: <FaSmile className="text-5xl text-[var(--color-yellow)]" />,
      title: "Nurturing Environment",
      description:
        "We create a warm, inclusive atmosphere where every child feels loved, respected, and encouraged to explore their potential.",
      stats: "500+ Happy Children",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[var(--color-purple)]" />,
      title: "Parent Connect App",
      description:
        "Stay updated with real-time notifications, daily activity reports, and precious moments of your child&apos;s day through our mobile app.",
      stats: "24/7 Updates",
    },
    {
      icon: <FaHeartbeat className="text-5xl text-[var(--color-red)]" />,
      title: "Health & Wellness",
      description:
        "Regular health monitoring, balanced nutrition plans, and physical activities ensure your child&apos;s holistic development.",
      stats: "Certified Healthcare",
    },
    {
      icon: <FaUtensils className="text-5xl text-[var(--color-orange)]" />,
      title: "Nutritious Meals",
      description:
        "Fresh, balanced, and kid-friendly meals prepared daily by our nutrition experts to fuel growing minds and bodies.",
      stats: "100% Fresh Food",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-[var(--color-blue-light)]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-blue)]">
            Why Choose Little Soldiers Family DayCare?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your child&apos;s safety, education, and happiness are our top
            priorities. We provide a nurturing environment where every child can
            thrive and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                index === activeIndex
                  ? "bg-white shadow-2xl scale-105"
                  : "bg-white/80 shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-6 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--color-blue)]">
                  {feature.stats}
                </span>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={index === activeIndex ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className="w-2 h-2 rounded-full bg-[var(--color-green)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="btn-modern">Schedule a Tour</button>
          <p className="mt-4 text-gray-600">
            Come visit us and see our facilities firsthand!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
