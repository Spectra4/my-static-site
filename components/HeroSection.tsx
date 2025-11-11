export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-linear-to-r from-blue-900 to-indigo-800 text-white">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My Static Site</h1>
      <p className="text-lg text-gray-200 max-w-xl">
        Modern, fast, and fully static website built with Next.js and Tailwind CSS.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500">
        Get Started
      </button>
    </section>
  );
}
