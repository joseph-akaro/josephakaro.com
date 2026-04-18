import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Demo />
      <Pricing />
      <Trust />
      <Process />
      <Contact />
    </main>
  );
}