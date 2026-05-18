import Image from "next/image";
import { Button } from "./ui/button";
import { form } from "./Header";
import useFadeIn from "@/hooks/useFadeIn";

import Link from "next/link";
import { Linkedin, Github, Youtube } from "@boxicons/react"
import { Briefcase } from "lucide-react";
import Contact from "./forms/Contact";

export default function Hero() {

  return (
    <section className="flex sm:flex-row flex-col-reverse sm:items-center sm:justify-between justify-center sm:px-20 px-10 h-dvh gap-5">
      <div className="flex flex-col max-w-lg gap-2 sm:text-left text-center sm:py-24 sm:px-6 py-10">
        <h2 className="text-lg">Hello!👋🏾 I am</h2>
        <h1 className="sm:text-5xl text-4xl font-bold">JOSEPH AKARO</h1>
        <h2 className="text-xl">Software Engineer | Open-Source Contributor</h2>
        <p className="text-muted-foreground">
          Building clean, scalable, and reliable digital solutions. 
          Full-stack development, WordPress engineering, API integrations, 
          and open-source projects empowering businesses and developers across East Africa.
        </p>
        <div className="flex flex-row items-start sm:justify-start justify-center gap-4 w-full mt-4">
            <Button variant={"default"} className="font-italic"><span className="flex mr-2">View My Work</span><Briefcase /></Button>
            <Contact
                name={form.name}
                email={form.email}
                phone={form.phone}
                type={form.type}
                description={form.description}
                budget={form.budget}
                timeline={form.timeline}
                referenceLink={form.referenceLink}
            />
        </div>

        <div className="flex flex-row gap-4 w-full sm:items-start justify-center mt-10">
          <p className="hidden sm:flex">Follow Me on</p>
          <div className="flex gap-4 items-center justify-center">
            <Link href={'https://www.linkedin.com/in/josephakaro/'}>
              <Linkedin />
            </Link>
            <Link href={'https://github.com/joseph-akaro'}>
              <Github />
            </Link>
            <Link href={'https://www.youtube.com/@josephakaro'}>
              <Youtube />
            </Link>
          </div>
      </div>
      </div>
      <div className="w-full items-center justify-center flex">
        <div className="sm:w-[400] sm:h-[400] w-[300] h-[300] bg-slate-900 rounded-full border-5 border-primary overflow-hidden items-start">
          <Image src={'/Joseph-Akaro.png'} alt="Joseph Akaro profile" width={400} height={400}/>
        </div>
      </div>
    </section>
  );
}