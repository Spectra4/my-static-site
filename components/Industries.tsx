"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Mountain,
  Truck,
  Train,
  Factory,
  Home,
  Construction,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Construction className="w-10 h-10 text-yellow-500" />,
      title: "Road Construction",
      desc: "Supplying premium aggregates for highways, expressways, and municipal road projects.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-yellow-500" />,
      title: "Commercial Buildings",
      desc: "Reliable crushed stone for large-scale construction and infrastructure development.",
    },
    {
      icon: <Train className="w-10 h-10 text-yellow-500" />,
      title: "Railway Ballast",
      desc: "Providing durable stone aggregates that meet strict railway ballast standards.",
    },
    {
      icon: <Mountain className="w-10 h-10 text-yellow-500" />,
      title: "Mining & Quarrying",
      desc: "Supporting mining operations with efficient crushing plants and heavy-duty equipment.",
    },
    {
      icon: <Factory className="w-10 h-10 text-yellow-500" />,
      title: "Industrial Plants",
      desc: "Supplying processed material for cement plants, foundries, and other heavy industries.",
    },
    {
      icon: <Home className="w-10 h-10 text-yellow-500" />,
      title: "Residential Projects",
      desc: "Trusted source for aggregates in housing and real estate developments.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-24 relative overflow-hidden" id="industries">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight"
        >
          Industries <span className="text-yellow-500">We Serve</span>
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Our stone crushing solutions form the backbone of countless industries — delivering strength, stability, and sustainability to modern infrastructure.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 shadow-md border border-gray-800 hover:border-yellow-500/40 hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-center mb-6 bg-yellow-500/10 rounded-full w-16 h-16 mx-auto">
                {ind.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">{ind.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
