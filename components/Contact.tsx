"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Contact() {
  useFadeIn();

  return (
    <section
      id="contact"
      className="py-24 px-6 text-center bg-black text-white fade-up"
    >
      <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
      <p className="mb-8 text-gray-300">
        Ready to grow your business online?
      </p>

      <a
        href="https://wa.me/+211920710777"
        className="bg-white text-black px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}