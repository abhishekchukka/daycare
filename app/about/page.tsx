"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaGraduationCap, FaUsers, FaSmile } from "react-icons/fa";
// import Header from "@/components/Header";

// Customizable data
const aboutData = {
  greeting: {
    title: "Welcome to Our Family",
    subtitle: "A Message from Our Heart",
    message:
      "At Little Soldiers Family DayCare, we believe every child deserves a nurturing environment where they can grow, learn, and thrive. Our journey began with a simple vision: to create a space where children feel loved, safe, and inspired.",
    image:
      "https://plus.unsplash.com/premium_photo-1661475944092-9561bd954235?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  stats: [
    {
      icon: <FaHeart className="text-red-500" />,
      count: "500+",
      label: "Happy Children",
      description: "Nurtured and cared for",
    },
    {
      icon: <FaGraduationCap className="text-blue-500" />,
      count: "15+",
      label: "Years Experience",
      description: "Of dedicated service",
    },
    {
      icon: <FaUsers className="text-green-500" />,
      count: "20+",
      label: "Expert Staff",
      description: "Qualified caregivers",
    },
    {
      icon: <FaSmile className="text-yellow-500" />,
      count: "100%",
      label: "Parent Satisfaction",
      description: "Trust and confidence",
    },
  ],

  team: [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      description:
        "With over 15 years of experience in early childhood education, Sarah's passion for nurturing young minds drives our vision.",
      certifications: ["Early Childhood Education", "Child Psychology"],
    },
    {
      name: "Michael Chen",
      role: "Lead Teacher",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      description:
        "Michael brings creativity and enthusiasm to our program, making learning fun and engaging for every child.",
      certifications: ["Montessori Certified", "First Aid"],
    },
    {
      name: "Emily Rodriguez",
      role: "Care Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      description:
        "Emily ensures our daily operations run smoothly while maintaining the highest standards of care and safety.",
      certifications: ["Child Development", "Healthcare Administration"],
    },
  ],

  journey: {
    title: "Our Journey",
    milestones: [
      {
        year: "2008",
        title: "The Beginning",
        description: "Started with a small group of 5 children",
      },
      {
        year: "2012",
        title: "Growing Family",
        description: "Expanded our facility to accommodate more children",
      },
      {
        year: "2015",
        title: "Quality Recognition",
        description: "Received accreditation for excellence in childcare",
      },
      {
        year: "2023",
        title: "Community Leader",
        description: "Recognized as a leading childcare provider",
      },
    ],
  },

  finalPitch: {
    title: "Join Our Family",
    message:
      "Give your child the gift of joyful learning and caring support. We're more than a daycare – we're a community where every child belongs.",
    image:
      "https://plus.unsplash.com/premium_photo-1661475944092-9561bd954235?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function AboutPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              About Our Daycare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the story behind our commitment to nurturing young minds
              and creating a loving environment for every child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {aboutData.greeting.title}
              </h2>
              <h3 className="text-2xl text-gray-600 mb-4">
                {aboutData.greeting.subtitle}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.greeting.message}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={aboutData.greeting.image}
                alt="Welcome"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.count}
                </h3>
                <p className="text-lg font-semibold text-gray-600 mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate educators behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 ">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            {aboutData.journey.title}
          </motion.h2>

          <div className="max-w-xl mx-auto">
            {aboutData.journey.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-8 mb-8"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">
                    {milestone.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Pitch */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={aboutData.finalPitch.image}
                alt="Join Us"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {aboutData.finalPitch.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {aboutData.finalPitch.message}
              </p>
              <button onClick={scrollToContact} className="btn-modern">
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
