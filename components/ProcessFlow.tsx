"use client";

import { motion } from "framer-motion";
import { Settings, Hammer, Layers, Truck } from "lucide-react";

export default function FuturisticProcessFlow() {
  const steps = [
    {
      title: "Raw Material Feeding",
      icon: <Truck className="w-7 h-7 text-yellow-300" />,
      desc: "Large rocks are loaded into the hopper, ready for the primary crusher.",
    },
    {
      title: "Primary Crushing",
      icon: <Hammer className="w-7 h-7 text-yellow-300" />,
      desc: "The jaw crusher breaks down the rocks into smaller, manageable pieces.",
    },
    {
      title: "Screening & Refinement",
      icon: <Layers className="w-7 h-7 text-yellow-300" />,
      desc: "Screens and cone crushers refine the material for accurate size distribution.",
    },
    {
      title: "Final Output",
      icon: <Settings className="w-7 h-7 text-yellow-300" />,
      desc: "Conveyors transport the final aggregates for storage or dispatch.",
    },
  ];

  return (
    <section className="relative py-15 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
        >
          <span className="text-yellow-400">Futuristic</span> Process Flow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-16"
        >
          A seamless chain of advanced crushing and screening — visualized as a living, connected process.
        </motion.p>

        {/* Flow Capsules */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
          {/* smooth animated line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-70 origin-left"
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* futuristic capsule */}
              <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/60 backdrop-blur-xl border border-yellow-400/30 rounded-full px-8 py-8 w-[250px] flex flex-col items-center shadow-[0_0_20px_rgba(255,220,100,0.15)] transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,230,150,0.4)]">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-950 border border-yellow-400 mb-4 group-hover:rotate-[360deg] transition-transform duration-700">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
