"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Demo() {
  useFadeIn();

  return (
    <section className="py-24 px-6 bg-white fade-up">
      <h2 className="text-3xl font-semibold text-center mb-12">
        See What You Get
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

        {/* Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Turn Visitors Into Clients
          </h3>

          <p className="text-gray-600 mb-6">
            Your website isn’t just design — it’s built to help you get inquiries, bookings, and real customers.
          </p>

          <ul className="space-y-3 text-sm">
            <li>✔ Clear call-to-action buttons</li>
            <li>✔ WhatsApp chat integration</li>
            <li>✔ Fast loading on mobile</li>
            <li>✔ Simple contact & booking flow</li>
          </ul>
        </div>

        {/* Visual */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-inner text-center">
          <img src="/school.png" alt="Screenshot" />
        </div>

      </div>
    </section>
  );
}