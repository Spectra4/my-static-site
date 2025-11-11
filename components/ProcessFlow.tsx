"use client";

import { motion } from "framer-motion";
import { Settings, Hammer, Layers, Truck } from "lucide-react";

export default function ProcessFlow() {
  const steps = [
    {
      title: "1. Raw Material Feeding",
      icon: <Truck className="w-8 h-8 text-yellow-500" />,
      desc: "Large rocks are fed into the hopper using loaders or trucks, ready for primary crushing.",
    },
    {
      title: "2. Primary Crushing",
      icon: <Hammer className="w-8 h-8 text-yellow-500" />,
      desc: "The Jaw Crusher crushes stones into manageable sizes for further processing.",
    },
    {
      title: "3. Screening & Secondary Crushing",
      icon: <Layers className="w-8 h-8 text-yellow-500" />,
      desc: "Screens separate materials by size, while Cone Crushers refine the output for accuracy.",
    },
    {
      title: "4. Final Output & Conveying",
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      desc: "Conveyors transport graded aggregates to stockpiles or directly to dispatch trucks.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="process">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
        >
          How Our <span className="text-yellow-500">Crushing Process</span> Works
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Each step in our process ensures maximum efficiency, precision, and product quality —
          delivering durable aggregates for every construction need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-left group border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 mb-6 group-hover:bg-yellow-500 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
