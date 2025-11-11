"use client";

import { motion } from "framer-motion";
import { Factory, Wrench, ShieldCheck, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Factory className="w-10 h-10 text-yellow-400 drop-shadow-lg" />,
      title: "Heavy-Duty Engineering",
      desc: "Rugged crusher assemblies engineered for 24/7 operation in the most demanding quarry and mining conditions.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-yellow-400 drop-shadow-lg" />,
      title: "Low Maintenance Cost",
      desc: "Precision components and optimized wear design reduce service intervals, saving both time and cost.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-400 drop-shadow-lg" />,
      title: "Proven Reliability",
      desc: "Backed by 1,000+ installations worldwide with consistent performance over two decades of operation.",
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-400 drop-shadow-lg" />,
      title: "Certified Manufacturing",
      desc: "Built in ISO 9001:2015 & CE-certified facilities, ensuring top-tier quality and compliance across all equipment.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative py-15 text-gray-100 overflow-hidden"
    >

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
        >
          Why Choose <span className="text-yellow-400">Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-16"
        >
          For over two decades, we’ve built crushing solutions trusted by
          industries worldwide delivering power, precision, and performance
          without compromise.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-gray-800/60 to-gray-900/40 border border-gray-700 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-all duration-300 backdrop-blur-sm hover:-translate-y-2"
            >
              {/* Metallic Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
