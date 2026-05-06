"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Inquiry from "./forms/Inquiry";
import { form } from "./Header";
import { Linkedin } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function Hero() {

  return (
    <section className="flex flex-row items-center justify-between p-10">
      <div className="flex flex-col max-w-lg gap-2 text-left py-24 px-6 fade-up">
        <h2 className="text-lg">Hello!👋🏾 I am</h2>
        <h1 className="text-5xl font-bold">JOSEPH AKARO</h1>
        <h2 className="text-xl">Software Engineer | Open-Source Contributor</h2>
        <p className="text-muted">
          I’m a passionate software engineer focused on building clean, scalable, and reliable digital solutions.
          My work spans full-stack development, WordPress engineering, API integrations, and open-source projects that empower businesses and developers across East Africa.
        </p>
        <div className="flex flex-row items-start justify-start gap-4 w-full mt-4">
            <Button variant={"outline"} className="font-italic">View Portfolio</Button>
            <Inquiry
                name={form.name}
                email={form.email}
                inquiryType={form.inquiryType}
                projectDecription={form.projectDecription}
                budgetRange={form.budgetRange}
                projectTimeline={form.projectTimeline}
                referenceLink={form.referenceLink}
                buttonName={form.buttonName}
            />
        </div>

        <div className="flex flex-row gap-4 w-full items-start mt-10">
          <p>Follow Me on</p>
          <div className="flex gap-4">
            <Link href={'#'}>LinkedIn</Link>
            <Link href={'#'}>GitHub</Link>
            <Link href={'#'}>YouTube</Link>
          </div>
      </div>
      </div>
      <div className="w-full items-center justify-center flex">
        <div className="w-[400] h-[400] bg-slate-900 rounded-full border border-5 border-primary overflow-hidden items-start">
          <Image src={'/Joseph-Akaro.png'} alt="Joseph Akaro profile" width={400} height={400}/>
        </div>
      </div>
    </section>
  );
}