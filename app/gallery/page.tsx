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
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop",
      title: "Creative Play",
      description: "Children exploring their artistic abilities",
      size: "large", // large, medium, small
      category: "Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
      title: "Story Time",
      description: "Engaging young minds through storytelling",
      size: "small",
      category: "Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1621354598022-16599af1b8b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Outdoor Adventures",
      description: "Exploring nature and staying active",
      size: "medium",
      category: "Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
      title: "Group Activities",
      description: "Building social skills through play",
      size: "small",
      category: "Social",
    },
    {
      src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=2069&auto=format&fit=crop",
      title: "Learning Together",
      description: "Collaborative learning experiences",
      size: "medium",
      category: "Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
      title: "Group Activities",
      description: "Building social skills through play",
      size: "small",
      category: "Social",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
      title: "Group Activities",
      description: "Building social skills through play",
      size: "small",
      category: "Social",
    },
    {
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
      title: "Happy Moments",
      description: "Creating lasting memories",
      size: "large",
      category: "Social",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
      title: "Group Activities",
      description: "Building social skills through play",
      size: "small",
      category: "Social",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
      title: "Group Activities",
      description: "Building social skills through play",
      size: "small",
      category: "Social",
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
