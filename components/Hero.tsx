"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden text-gray-100"
    >
      {/* Decorative overlay gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full w-max">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2v20M5 9h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Industrial Crushing Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Robust Stone Crushers & Turnkey Crushing Plants
            </h1>

            <p className="text-gray-300 max-w-xl">
              Designed for performance and endurance — our crushers deliver
              precision, reliability, and high output across mining, quarrying,
              and recycling operations.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 shadow-lg shadow-yellow-500/30 transition-all duration-300"
              >
                View Equipment
              </Link>

              <a
                onClick={() => window.dispatchEvent(new Event("openContactForm"))}
                className="inline-flex items-center justify-center rounded-md border border-gray-600 text-gray-200 px-6 py-3 hover:bg-gray-800 transition"
              >
                Request Quote
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <strong className="text-yellow-400">Throughput:</strong>
                <span>Up to 500 TPH</span>
              </li>
              <li className="flex items-start gap-3">
                <strong className="text-yellow-400">Warranty:</strong>
                <span>12–24 months</span>
              </li>
              <li className="flex items-start gap-3">
                <strong className="text-yellow-400">Service:</strong>
                <span>Global field support</span>
              </li>
              <li className="flex items-start gap-3">
                <strong className="text-yellow-400">Custom:</strong>
                <span>Plant layout & automation</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Visual section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.15)] bg-gray-800 flex items-center justify-center">
              <img
                src="/images/hero-crusher.png"
                alt="Stone crusher plant"
                className="object-cover w-full h-full"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='100%25' height='100%25' fill='%23272727'/%3E%3Ctext x='50%25' y='50%25' fill='%23aaa' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='28'%3Ehero-crusher.png Missing%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Small badges */}
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { label: "Primary Crusher", value: "Jaw Crusher" },
                { label: "Secondary", value: "Cone Crusher" },
                { label: "Screening", value: "Vibrating Screens" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2 shadow-sm"
                >
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="font-semibold text-gray-100">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
