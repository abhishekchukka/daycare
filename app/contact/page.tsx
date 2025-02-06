"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const contactData = {
  hero: {
    title: "Get in Touch",
    subtitle: "We'd Love to Hear from You",
    description:
      "Have questions about our programs or ready to start your child's journey with us? Reach out to us today!",
  },
  details: {
    address: "4912 Broadway Ave, Blackfalds, AB T0M 0J0",
    phone: "(123) 456-7890",
    email: "hello@littlesoldiers.com",
    hours: {
      weekday: "7:30 AM - 5:30 PM",
      weekend: "Closed",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.686666539986!2d-113.7874661!3d52.3796905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5377c4d1831ea641%3A0x1fb3e957116f2e9e!2s4912%20Broadway%20Ave%2C%20Blackfalds%2C%20AB%20T0M%200J0!5e0!3m2!1sen!2sca!4v1647901234567!5m2!1sen!2sca",
  },
};

// First, let's define the proper types
interface FormData {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  message: string;
}

interface StatusInfo {
  error: boolean;
  msg: string | null;
}

interface Status {
  submitted: boolean;
  submitting: boolean;
  info: StatusInfo;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>({
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
        "service_hw8pfzh",
        "template_m4p5h2t",
        {
          from_name: formData.parentName,
          child_name: formData.childName,
          child_age: formData.childAge,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "kgGBUF0rUow8axpET"
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
    } catch (err) {
      console.error(err);
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
              {contactData.hero.title}
            </h1>
            <h2 className="text-2xl text-gray-600 mb-4">
              {contactData.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-600">
              {contactData.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-2xl text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Address</h4>
                      <p className="text-gray-600">
                        {contactData.details.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-2xl text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Phone</h4>
                      <p className="text-gray-600">
                        {contactData.details.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-2xl text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Email</h4>
                      <p className="text-gray-600">
                        {contactData.details.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: {contactData.details.hours.weekday}
                      </p>
                      <p className="text-gray-600">
                        Saturday - Sunday: {contactData.details.hours.weekend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-2 shadow-lg h-[300px]">
                <iframe
                  src={contactData.details.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-600">
                Register Your Child
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
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
                  <span>
                    {status.submitting ? "Sending..." : "Submit Registration"}
                  </span>
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
    </main>
  );
}
