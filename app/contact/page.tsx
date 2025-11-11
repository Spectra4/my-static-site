"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (form not connected yet)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 p-3 rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-gray-300 p-3 rounded-lg"
          required
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 p-3 rounded-lg h-32"
          required
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
