"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop",
      title: "Creative Play",
      size: "large",
      emoji: "🎨",
      description: "Where imagination comes to life",
    },
    {
      src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
      title: "Story Time",
      size: "small",
      emoji: "📚",
      description: "Adventures in reading",
    },
    {
      src: "https://images.unsplash.com/photo-1440288736878-766bd5839edb?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Playtime Fun",
      size: "medium",
      emoji: "🎮",
      description: "Joy in every moment",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
      title: "Learning Together",
      size: "small",
      emoji: "🧩",
      description: "Growing minds at work",
    },
    {
      src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=2069&auto=format&fit=crop",
      title: "Outdoor Adventures",
      size: "medium",
      emoji: "🌳",
      description: "Exploring nature's wonders",
    },
    {
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
      title: "Happy Faces",
      size: "small",
      emoji: "😊",
      description: "Smiles all around",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-2xl mb-4">✨</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Little Stars in Action!
          </h2>
          <p className="text-xl text-gray-600">
            Capturing joy, learning, and growth every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${
                item.size === "large"
                  ? "lg:col-span-2 lg:row-span-2"
                  : item.size === "medium"
                  ? "lg:col-span-2"
                  : ""
              } transform-gpu`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative w-full h-full aspect-square">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes={
                    item.size === "large"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-100">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
