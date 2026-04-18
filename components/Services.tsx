"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Services() {
  useFadeIn();

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto fade-up">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Services That Drive Results
      </h2>
      <p className="text-sm text-green-600 text-center mb-6">
        ✔ Designed to increase inquiries within the first week
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-3 relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-3">Get More Clients</h3>
          <p className="text-gray-600 text-sm mb-4">
            Your website is built with clear call-to-actions that turn visitors into real inquiries.
          </p>

          <ul className="text-sm space-y-2">
            <li>✔ WhatsApp Chat Integration</li>
            <li>✔ Lead Capture Forms</li>
            <li>✔ Clear CTA Buttons</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-black text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition hover:-translate-y-3 relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-3">Fast & Mobile-First</h3>
          <p className="text-gray-300 text-sm mb-4">
            Your website loads fast and works perfectly on phones — where most of your customers are.
          </p>

          <ul className="text-sm space-y-2">
            <li>✔ Optimized for Mobile</li>
            <li>✔ Fast Load Speed</li>
            <li>✔ Smooth Experience</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-3 relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-3">Look Professional</h3>
          <p className="text-gray-600 text-sm mb-4">
            Build trust instantly with a clean, modern design that reflects your brand.
          </p>

          <ul className="text-sm space-y-2">
            <li>✔ Modern UI Design</li>
            <li>✔ Clean Layout</li>
            <li>✔ Brand Consistency</li>
          </ul>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}