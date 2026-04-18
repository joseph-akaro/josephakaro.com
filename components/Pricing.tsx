"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Pricing() {
  useFadeIn();

  return (
    <section className="py-24 px-6 bg-gray-50 fade-up">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Simple Pricing
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Choose a package that fits your business
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Starter */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-gray-600 mb-4">For small businesses</p>
          <p className="text-3xl font-bold mb-6">$300</p>

          <ul className="space-y-2 text-sm mb-6">
            <li>✔ 3–5 Pages</li>
            <li>✔ Mobile Friendly</li>
            <li>✔ WhatsApp Integration</li>
            <li>✔ Contact Form</li>
          </ul>

          <a href="#contact" className="block text-center bg-black text-white py-3 rounded-xl">
            Get Started
          </a>
        </div>

        {/* Growth */}
        <div className="bg-black text-white rounded-2xl p-8 shadow-xl scale-105">
          <h3 className="text-xl font-bold mb-2">Growth</h3>
          <p className="text-gray-300 mb-4">Most popular</p>
          <p className="text-3xl font-bold mb-6">$700</p>

          <ul className="space-y-2 text-sm mb-6">
            <li>✔ Everything in Starter</li>
            <li>✔ Booking / Inquiry System</li>
            <li>✔ SEO Setup</li>
            <li>✔ Google Analytics</li>
          </ul>

          <a href="#contact" className="block text-center bg-white text-black py-3 rounded-xl">
            Get This Plan
          </a>
        </div>

        {/* Premium */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-bold mb-2">Premium</h3>
          <p className="text-gray-600 mb-4">For serious businesses</p>
          <p className="text-3xl font-bold mb-6">$1000+</p>

          <ul className="space-y-2 text-sm mb-6">
            <li>✔ Everything in Growth</li>
            <li>✔ Payment Integration</li>
            <li>✔ Custom Design</li>
            <li>✔ Priority Support</li>
          </ul>

          <a href="#contact" className="block text-center bg-black text-white py-3 rounded-xl">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}