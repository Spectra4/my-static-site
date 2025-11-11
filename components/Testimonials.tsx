"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "R.K. Infrastructure Pvt. Ltd.",
      quote:
        "The crushing plant supplied by this team runs flawlessly. Excellent build quality and timely service.",
      role: "Highway Construction Partner",
    },
    {
      name: "Zenith Mining Co.",
      quote:
        "Outstanding performance in aggregate quality and production rate. Truly reliable engineering.",
      role: "Mining & Quarry Division",
    },
    {
      name: "UrbanBuild Developers",
      quote:
        "We’ve partnered for several residential projects — consistent quality and professional support every time.",
      role: "Real Estate Contractor",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
        >
          What Our <span className="text-yellow-500">Clients Say</span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Trusted by infrastructure leaders, mining experts, and construction professionals across India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 text-left"
            >
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
