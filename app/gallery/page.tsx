"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Customizable gallery data
const galleryData = {
  hero: {
    title: "Our Gallery",
    subtitle: "Capturing Moments of Joy and Growth",
    description:
      "Take a peek into the daily adventures, learning moments, and happy memories we create at Little Soldiers Family DayCare.",
  },

  images: [
    {
      src: "/gallery-playroom-wide.jpg",
      title: "Creative Play Area",
      description: "Our spacious playroom with stairs and learning stations",
      size: "large", // large, medium, small
      category: "Activities",
    },
    {
      src: "/activity-sensory-water.jpg",
      title: "Water Sensory Play",
      description: "Hands-on learning with water and toy fish",
      size: "small",
      category: "Learning",
    },
    {
      src: "/gallery-play-area-cart.jpg",
      title: "Ice Cream Cart Fun",
      description: "Imaginative play with our colorful ice cream cart",
      size: "medium",
      category: "Activities",
    },
    {
      src: "/activity-shapes-learning.jpg",
      title: "Geometric Learning",
      description: "Discovering shapes through hands-on activities",
      size: "small",
      category: "Learning",
    },
    {
      src: "/gallery-kitchen-area.jpg",
      title: "Play Kitchen Area",
      description: "Learning life skills through pretend play",
      size: "medium",
      category: "Activities",
    },
    {
      src: "/activity-animal-sensory.jpg",
      title: "Animal Discovery",
      description: "Exploring with toy animals and sensory materials",
      size: "small",
      category: "Learning",
    },
    {
      src: "/gallery-infant-room.jpg",
      title: "Infant Care Room",
      description: "Nurturing environment for our youngest learners",
      size: "small",
      category: "Social",
    },
    {
      src: "/activity-motor-skills.jpg",
      title: "Fine Motor Development",
      description: "Building skills with colorful springs and manipulatives",
      size: "large",
      category: "Learning",
    },
    {
      src: "/gallery-solar-mural.jpg",
      title: "Educational Murals",
      description: "Learning about space and planets on our walls",
      size: "small",
      category: "Learning",
    },
    {
      src: "/activity-foam-play.jpg",
      title: "Sensory Exploration",
      description: "Engaging senses with foam and tactile materials",
      size: "small",
      category: "Activities",
    },
  ],

  categories: ["All", "Activities", "Learning", "Social"],
};

export default function GalleryPage() {
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
              {galleryData.hero.title}
            </h1>
            <h2 className="text-2xl text-gray-600 mb-4">
              {galleryData.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-600">
              {galleryData.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryData.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group 
                  ${
                    image.size === "large"
                      ? "md:col-span-2 md:row-span-2"
                      : image.size === "medium"
                        ? "md:col-span-2"
                        : ""
                  }
                `}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-purple-600/80 rounded-full text-sm mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>

                {/* Hover Effect Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.span
                    className="text-white text-2xl"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
