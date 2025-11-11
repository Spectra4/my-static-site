"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20">
          {/* Left: copy */}
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full w-max">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 9h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Industrial Crushing Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Robust Stone Crushers & Turnkey Crushing Plants
            </h1>

            <p className="text-gray-600 max-w-xl">
              Built for high throughput, low downtime and easy maintenance — our crushers deliver
              consistent product gradation and unmatched uptime across quarry, mining and recycling
              operations.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 shadow-md transition"
              >
                View Equipment
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 text-gray-700 px-6 py-3 hover:bg-gray-50 transition"
              >
                Request Quote
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 max-w-md text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <strong className="text-gray-900">Throughput:</strong>
                <span className="text-gray-600">Up to 500 TPH</span>
              </li>
              <li className="flex items-start gap-3">
                <strong className="text-gray-900">Warranty:</strong>
                <span className="text-gray-600">12–24 months</span>
              </li>
              <li className="flex items-start gap-3">
                <strong className="text-gray-900">Service:</strong>
                <span className="text-gray-600">Global field support</span>
              </li>
              <li className="flex items-start gap-3">
                <strong className="text-gray-900">Custom:</strong>
                <span className="text-gray-600">Plant layout & automation</span>
              </li>
            </ul>
          </div>

          {/* Right: visual / mockup */}
          <div className="relative">
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
              {/* If you have an actual hero image, put it in /public/images/hero-crusher.jpg */}
              <img
                src="/images/hero-crusher.png"
                alt="Stone crusher plant"
                className="object-cover w-full h-full"
                onError={(e) => {
                  // fallback if image missing
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='100%25' height='100%25' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' fill='%236B7280' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='28'%3EAdd %2Fpublic%2Fimages%2Fhero-crusher.jpg%3C%2Ftext%3E%3C%2Fsvg%3E";
                }}
              />
            </div>

            {/* small features badge */}
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="bg-white/90 border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xs text-gray-500">Primary Crusher</p>
                <p className="font-semibold text-gray-900">Jaw Crusher</p>
              </div>
              <div className="bg-white/90 border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xs text-gray-500">Secondary</p>
                <p className="font-semibold text-gray-900">Cone Crusher</p>
              </div>
              <div className="bg-white/90 border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                <p className="text-xs text-gray-500">Screening</p>
                <p className="font-semibold text-gray-900">Vibrating Screens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
