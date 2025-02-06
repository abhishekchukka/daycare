"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaChild, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.send(
        "service_hw8pfzh", // Add your EmailJS service ID
        "template_m4p5h2t", // Add your EmailJS template ID
        {
          from_name: formData.parentName,
          child_name: formData.childName,
          child_age: formData.childAge,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "kgGBUF0rUow8axpET" // Add your EmailJS public key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      setFormData({
        parentName: "",
        childName: "",
        childAge: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "An error occurred. Please try again later.",
        },
      });
    }
  };

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
                  <p className="text-gray-600">123 Playful Street, Kidsville</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-2xl text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email Us</h4>
                  <p className="text-gray-600">hello@littlesoldiers.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <FaPhone className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Call Us</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Parent&apos;s Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="childName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Child&apos;s Name
                  </label>
                  <input
                    type="text"
                    id="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="Child's name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Child&apos;s Age
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="Child's age"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="text-lg" />
                <span>{status.submitting ? "Sending..." : "Send Message"}</span>
              </motion.button>

              {status.info.msg && (
                <div
                  className={`mt-4 p-4 rounded-xl ${
                    status.info.error
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {status.info.msg}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
