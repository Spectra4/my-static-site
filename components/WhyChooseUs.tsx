"use client";

import { motion } from "framer-motion";
import { Factory, Wrench, ShieldCheck, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Factory className="w-8 h-8 text-yellow-500" />,
      title: "Heavy-Duty Engineering",
      desc: "Rugged crusher assemblies designed for 24/7 performance in quarry and mining environments.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: "Low Maintenance Cost",
      desc: "Optimized wear parts and simplified layouts minimize service time and downtime.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
      title: "Proven Reliability",
      desc: "Over 1,000+ installations delivering consistent output for over two decades.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Certified Manufacturing",
      desc: "ISO 9001:2015 & CE-certified production ensuring quality assurance at every stage.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="why-choose">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Why Choose <span className="text-yellow-500">Us</span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          For over two decades, we’ve been building crushers that deliver high efficiency, low
          vibration, and lasting performance — trusted by mining and construction leaders globally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
