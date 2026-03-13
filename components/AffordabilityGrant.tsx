"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function AffordabilityGrant() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-t-4 border-green-400">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <FaCheckCircle className="text-3xl text-green-600" />
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                Alberta Affordability Grant
              </h2>
            </div>
            <div className="w-20 h-1 bg-green-400 mx-auto rounded-full"></div>
          </div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
          >
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              <span className="font-semibold text-green-600">
                We are proud to be a participating centre
              </span>{" "}
              in Alberta&apos;s Affordability Grant program.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Eligible families receive significant fee reductions, which are
              applied directly to your childcare costs each month.{" "}
              <span className="font-semibold text-teal-600">
                No separate application is required
              </span>
              — the savings are built right into your fees.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Benefit 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100">
                    <span className="text-xl">💰</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Automatic Savings
                  </h3>
                  <p className="text-gray-600">
                    Grant amount is automatically deducted from your monthly
                    fees, making high-quality childcare more affordable.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No Extra Steps
                  </h3>
                  <p className="text-gray-600">
                    No complicated applications required. Just enroll and enjoy
                    the benefits immediately on your invoice.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-700 mb-6">
              Want to learn more about our fee structure and the Affordability
              Grant?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch With Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
