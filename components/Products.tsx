"use client";

import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Jaw Crusher",
      image: "/my-static-site/images/product-jaw.png",
      desc: "Primary crushers engineered for high reduction ratio and long service life.",
      specs: ["Capacity: 100–500 TPH", "Feed Size: up to 600mm", "Motor: 75–200 HP"],
    },
    {
      name: "Cone Crusher",
      image: "/my-static-site/images/product-cone.png",
      desc: "Secondary crushing unit delivering superior shape and gradation.",
      specs: ["Hydraulic Setting", "Low Power Draw", "Dust Sealed System"],
    },
    {
      name: "Vibrating Screen",
      image: "/my-static-site/images/product-screen.png",
      desc: "Efficient screening for precise separation and high throughput.",
      specs: ["3–4 Deck", "High G-force", "Rubber Deck Option"],
    },
    {
      name: "Belt Conveyor",
      image: "/my-static-site/images/product-conveyor.png",
      desc: "Modular conveyors with durable rollers and energy-efficient drives.",
      specs: ["Width: 600–1000mm", "Speed: 1.2–2.0 m/s", "Inclined or Flat Layouts"],
    },
  ];

  return (
    <section className="py-10" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          Our <span className="text-yellow-500">Products</span>
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          From single crushers to complete crushing plants every machine we build combines
          strength, precision, and reliability for demanding applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://via.placeholder.com/400x250.png?text=Product+Image";
                  }}
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
