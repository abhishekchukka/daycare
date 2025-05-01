"use client";

import { motion } from "framer-motion";

import { FaChild, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-2xl mb-4">✉️</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Send us a message and start your
            child&apos;s journey with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaChild className="text-2xl text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Visit Us</h4>
                  <p className="text-gray-600">
                    4912 Broadway Ave, Blackfalds, AB T0M 0J0
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-2xl text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email Us</h4>
                  <p className="text-gray-600">
                    Littlesoldiersfamilydaycare@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <FaPhone className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Call Us</h4>
                  <p className="text-gray-600">+1 (306) 202-7431</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center py-10">
              <p className="mb-4 text-lg font-semibold">
                Click below to register via our secure form:
              </p>
              <a
                href="http://himama.com/online_registration/apply/little-soldiers-family-daycare-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
