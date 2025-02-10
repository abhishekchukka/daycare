"use client";

import React, { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLightbulb,
  FaPalette,
  FaBrain,
  FaHeart,
  FaComments,
} from "react-icons/fa";

interface AccordionItem {
  title: string;
  content: string;
  icon: JSX.Element;
  color: string;
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items: AccordionItem[] = [
    {
      title: "Innovation",
      content:
        "We foster innovative thinking through hands-on experiments, STEAM activities, and problem-solving challenges. Children learn to think outside the box and develop creative solutions to age-appropriate challenges, setting the foundation for future success in an ever-evolving world.",
      icon: <FaLightbulb className="text-2xl" />,
      color: "text-yellow-500",
    },
    {
      title: "Creativity",
      content:
        "Our curriculum emphasizes creative expression through art, music, dance, and imaginative play. We provide various materials and opportunities for children to explore their artistic abilities, encouraging self-expression and building confidence in their creative capabilities.",
      icon: <FaPalette className="text-2xl" />,
      color: "text-pink-500",
    },
    {
      title: "Critical Thinking",
      content:
        "Through guided discovery and inquiry-based learning, we develop critical thinking skills. Children engage in activities that encourage observation, analysis, and logical reasoning, helping them become independent thinkers and problem solvers.",
      icon: <FaBrain className="text-2xl" />,
      color: "text-purple-500",
    },
    {
      title: "Emotional Intelligence",
      content:
        "We prioritize emotional development by teaching children to recognize, understand, and manage their emotions. Through mindfulness activities, social interactions, and guided discussions, children learn empathy, self-awareness, and healthy emotional expression.",
      icon: <FaHeart className="text-2xl" />,
      color: "text-red-500",
    },
    {
      title: "Communication",
      content:
        "Strong communication skills are developed through daily activities that encourage verbal expression, active listening, and collaborative play. We create an environment where children feel comfortable expressing their thoughts, ideas, and feelings while respecting others.",
      icon: <FaComments className="text-2xl" />,
      color: "text-blue-500",
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive approach to early childhood education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => handleClick(index)}
                className={`w-full p-4 flex items-center justify-between rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 ${
                  activeIndex === index ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${item.color}`}>{item.icon}</div>
                  <span className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100 rounded-b-xl shadow-md">
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
