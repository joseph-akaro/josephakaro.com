"use client";
import useFadeIn from "@/hooks/useFadeIn";

export default function Process() {
  useFadeIn();

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center fade-up">
      <h2 className="text-3xl font-semibold mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Talk", "Build", "Launch"].map((step, i) => (
          <div key={step}>
            <h3 className="font-bold text-lg">
              {i + 1}. {step}
            </h3>
            <p className="text-gray-600 text-sm">
              Simple and fast process.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}