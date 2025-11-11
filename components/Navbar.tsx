"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/#industries" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="./" className="text-2xl font-extrabold text-white tracking-wider relative">
          <motion.span
            className="text-yellow-500"
            animate={{ textShadow: ["0px 0px 4px #FFD700", "0px 0px 12px #FFD700", "0px 0px 4px #FFD700"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Crush
          </motion.span>
          Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
              <motion.span
                layoutId="underline"
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 rounded-full transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-400 hover:shadow-yellow-400/30 transition-all"
            >
              Contact Now
            </Link>
          </motion.div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-gray-900/95 backdrop-blur-md border-t border-yellow-500/10 transition-all overflow-hidden ${
          menuOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition-colors ${
                  pathname === link.href ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-400 hover:shadow-yellow-400/30 transition-all"
          >
            Contact Now
          </Link>
        </ul>
      </motion.div>
    </motion.header>
  );
}
