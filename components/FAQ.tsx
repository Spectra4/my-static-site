"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you provide complete crushing plant setups?",
      answer:
        "Yes, we design, manufacture, and install complete stone crushing plants with full automation and support.",
    },
    {
      question: "What types of crushers do you manufacture?",
      answer:
        "We offer jaw crushers, cone crushers, impact crushers, and screening equipment tailored for different material sizes.",
    },
    {
      question: "Do you offer AMC or maintenance support?",
      answer:
        "Absolutely. We provide Annual Maintenance Contracts, spare part support, and on-site service nationwide.",
    },
    {
      question: "Can your machines handle high-capacity requirements?",
      answer:
        "Yes. Our plants are engineered to handle heavy-duty production capacities up to 500 TPH and beyond.",
    },
  ];

  return (
    <section className="py-10" id="faq">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8"
        >
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left text-gray-50 font-semibold hover:bg-gray-600"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-yellow-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gray-300 text-black py-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to our experts and get the right solution for your
            crushing needs.
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event("openContactForm"))}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
