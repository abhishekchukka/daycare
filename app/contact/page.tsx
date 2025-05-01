"use client";

import { motion } from "framer-motion";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const contactData = {
  hero: {
    title: "Get in Touch",
    subtitle: "We'd Love to Hear from You",
    description:
      "Have questions about our programs or ready to start your child's journey with us? Reach out to us today!",
  },
  details: {
    address: "4912 Broadway Ave, Blackfalds, AB T0M 0J0",
    phone: "+1 (306) 202-7431",
    email: "littlesoldiersfamilydaycare@gmail",
    hours: {
      weekday: "7:00 AM - 6:00 PM",
      // weekend: "Closed",
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5396910377854!2d-113.7957232!3d52.3787661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5375006c903f549f%3A0x86b0d6c89107820d!2s4912%20Broadway%20Ave%2C%20Blackfalds%2C%20AB%20T0M%200J0%2C%20Canada!5e0!3m2!1sen!2sin!4v1746091722590!5m2!1sen!2sin",
  },
};

// First, let's define the proper types

export default function ContactPage() {
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
                      {/* <p className="text-gray-600">
                        Saturday - Sunday: {contactData.details.hours.weekend}
                      </p> */}
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
              className="bg-white rounded-2xl p-8 py-32 shadow-lg text-center h-fit  flex-col justify-center my-auto"
            >
              <h3 className="text-3xl font-bold mb-6  text-purple-600">
                Register Your Child
              </h3>

              <p className="text-gray-700 mb-8 text-lg max-w-lg mx-auto">
                We’ve partnered with HiMama(Lilio) to securely collect your
                registration details. Click the button below to be redirected to
                our official registration form.
              </p>

              <motion.a
                href="http://himama.com/online_registration/apply/little-soldiers-family-daycare-inc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all duration-300"
              >
                Go to Registration Form
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
