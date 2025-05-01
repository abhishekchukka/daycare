"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBrain,
  FaPalette,
  FaBookReader,
  FaHeart,
  // FaSeedling,
} from "react-icons/fa";
// import { GiMeditation, GiJumpingRope } from "react-icons/gi";
import Programs from "@/components/Programs";
// import { useState } from "react";
// import Router, { useRouter } from "next/router";
import Link from "next/link";

// Additional content for the Programs page
const programsPageContent = {
  intro: {
    title: "More Than Just Daycare",
    subtitle: "Comprehensive Child Development Programs",
    description:
      "At Little Soldiers Family DayCare, we believe in nurturing every aspect of your child's development. Our programs are carefully designed to foster growth in cognitive, social, emotional, and physical domains.",
    highlights: [
      {
        title: "Holistic Development",
        description: "Programs that address all aspects of child development",
        icon: <FaBrain className="text-purple-500 text-2xl" />,
      },
      {
        title: "Age-Appropriate Learning",
        description: "Tailored activities for each developmental stage",
        icon: <FaBookReader className="text-blue-500 text-2xl" />,
      },
      {
        title: "Creative Expression",
        description: "Opportunities for artistic and creative growth",
        icon: <FaPalette className="text-pink-500 text-2xl" />,
      },
      {
        title: "Social Integration",
        description: "Building friendship and social skills",
        icon: <FaHeart className="text-red-500 text-2xl" />,
      },
    ],
    image:
      "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  overview: {
    title: "Our Approach",
    description:
      "We combine play-based learning with structured activities to create an engaging and effective learning environment. Each program is designed to meet specific developmental milestones while keeping the joy of childhood alive.",
    features: [
      "Age-appropriate curriculum",
      "Qualified and caring teachers",
      "Safe and stimulating environment",
      "Regular progress updates",
      "Flexible scheduling options",
      "Special events and activities",
    ],
  },

  finalPitch: {
    title: "Give Your Child the Best Start",
    message:
      "Join our family and watch your child thrive in a nurturing, educational environment. Our programs provide the perfect foundation for lifelong learning and success.",
    image:
      "https://images.unsplash.com/photo-1613794713137-a78aba4be84a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
};

export default function ProgramsPage() {
  // const router = useRouter();
  // const [currentProgram, setCurrentProgram] = useState(0);

  // const detailedPrograms = [
  //   {
  //     name: "Early Explorers",
  //     age: "1-2 years",
  //     icon: <FaSeedling className="text-4xl text-pink-500" />,
  //     iconBg: "bg-pink-50",
  //     role: "Foundation Program",
  //     methodology: [
  //       {
  //         title: "Montessori Approach",
  //         description:
  //           "Child-led learning experiences that foster independence and natural curiosity",
  //       },
  //       {
  //         title: "Sensory Learning",
  //         description:
  //           "Multi-sensory activities that engage all senses for comprehensive development",
  //       },
  //       {
  //         title: "Guided Discovery",
  //         description:
  //           "Teacher-facilitated exploration that encourages problem-solving skills",
  //       },
  //       {
  //         title: "Play-Based Learning",
  //         description:
  //           "Structured and unstructured play opportunities for natural development",
  //       },
  //     ],
  //     outcomes: {
  //       physical: [
  //         "Enhanced fine motor skills through sensory activities",
  //         "Improved gross motor development through movement",
  //       ],
  //       cognitive: [
  //         "Development of object permanence",
  //         "Enhanced sensory processing abilities",
  //       ],
  //     },
  //     parentInvolvement: {
  //       updates: [
  //         "Daily activity reports",
  //         "Monthly progress updates",
  //         "Photo documentation",
  //       ],
  //       participation: [
  //         "Parent-teacher meetings",
  //         "Family activity days",
  //         "Educational workshops",
  //       ],
  //     },
  //   },
  //   // Add similar objects for other programs
  // ];

  // const nextProgram = () => {
  //   setCurrentProgram((prev) => (prev + 1) % detailedPrograms.length);
  // };

  // const prevProgram = () => {
  //   setCurrentProgram((prev) =>
  //     prev === 0 ? detailedPrograms.length - 1 : prev - 1
  //   );
  // };

  // const scrollToContact = () => {
  //   const contactSection = document.getElementById("footer");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {programsPageContent.intro.title}
            </h1>
            <p className="text-xl text-gray-600">
              {programsPageContent.intro.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {programsPageContent.intro.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {programsPageContent.intro.highlights.map(
                  (highlight, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                        {highlight.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={programsPageContent.intro.image}
                alt="Programs Overview"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {programsPageContent.overview.title}
            </h2>
            <p className="text-lg text-gray-600">
              {programsPageContent.overview.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {programsPageContent.overview.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block w-8 h-8 bg-purple-100 rounded-full mb-4" />
                <p className="text-gray-800 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Component */}
      <Programs />

      {/* Final Pitch */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
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
                src={programsPageContent.finalPitch.image}
                alt="Join Our Programs"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {programsPageContent.finalPitch.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {programsPageContent.finalPitch.message}
              </p>
              <Link href="/contact" className="btn-modern">
                Register Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Program Information */}
      {/* <section
        id="program-details"
        className="py-20 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Detailed Program Information
            </h2>

            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-pink-50">
                    {detailedPrograms[currentProgram].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {detailedPrograms[currentProgram].name}
                    </h3>
                    <p className="text-purple-600">
                      {detailedPrograms[currentProgram].role}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Teaching Methodology
                    </h4>
                    <p className="text-gray-600">
                      Our {detailedPrograms[currentProgram].name} program
                      employs a blend of proven teaching methods:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {detailedPrograms[currentProgram].methodology.map(
                        (method, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg"
                          >
                            <h5 className="font-medium mb-2 text-purple-600">
                              {method.title}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {method.description}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Learning Outcomes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-purple-600">
                          Physical Development
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {detailedPrograms[
                            currentProgram
                          ].outcomes.physical.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-purple-600">
                          Cognitive Growth
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {detailedPrograms[
                            currentProgram
                          ].outcomes.cognitive.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Parent Involvement
                    </h4>
                    <p className="text-gray-600 mb-4">
                      We believe in creating a strong partnership with parents
                      to ensure the best possible outcomes for your child:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Regular Updates</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {detailedPrograms[
                            currentProgram
                          ].parentInvolvement.updates.map((update, index) => (
                            <li key={index}>{update}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">
                          Parent Participation
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {detailedPrograms[
                            currentProgram
                          ].parentInvolvement.participation.map(
                            (participation, index) => (
                              <li key={index}>{participation}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <button onClick={prevProgram} className="btn-modern mr-4">
                Previous
              </button>
              <button onClick={nextProgram} className="btn-modern">
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}
