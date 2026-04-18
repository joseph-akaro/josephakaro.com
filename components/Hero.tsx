"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Hero() {
  useFadeIn();

  return (
    <section className="text-center py-24 px-6 fade-up">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        We Build Websites <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
          That Get You Clients
        </span>
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
        Modern, fast, and mobile-first websites designed to grow your business.
      </p>

      <a
        href="#contact"
        className="bg-black text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Get a Website
      </a>
    </section>
  );
}