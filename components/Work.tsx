"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Work() {
  useFadeIn();

  return (
    <section className="py-20 px-6 bg-white fade-up">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Recent Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["School", "NGO", "Business"].map((item) => (
          <div
            key={item}
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 bg-gradient-to-br from-gray-100 to-white"
          >
            <h3 className="font-semibold">{item} Website</h3>
          </div>
        ))}
      </div>
    </section>
  );
}