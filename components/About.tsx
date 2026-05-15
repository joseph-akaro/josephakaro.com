import React from "react";
import { Card, CardAction, CardDescription, CardTitle } from "./ui/card";
import { Layers, CodeXml, Globe, Users } from "lucide-react";

interface skillCardProp {
  icon: React.ReactNode;
  title: string;
  description: string
}

export default function About() {

  return (
    <section id="about" className="flex flex-col items-start justify-center gap-10 px-20 h-screen">
      <div className="flex flex-col gap-2">
          <h2>// about <span className="text-primary">me</span></h2>
          <h1 className="text-4xl"><span className="text-foreground">Crafting Digital</span> Experiences</h1>
          <span className="text-muted-foreground max-w-[50%] mt-6">
            <p>
              I'm a passionate software engineer focused on building clean, scalable, and reliable digital solutions. 
              My work spans full-stack development, WordPress engineering, API integrations, and open-source projects that empower businesses and developers across East Africa.
            </p>
          </span>
      </div>
      <div className="flex sm:flex-row items-center justify-between w-full">
        <SkillCard icon={<CodeXml size={20}/>} title="Full-Stack Dev" description="Building end-to-end web applications with modern technologies"/>
        <SkillCard icon={<Globe size={20}/>} title="WordPress Engineering" description="Custom themes, plugins, and enterprise-grade WordPress solutions"/>
        <SkillCard icon={<Layers size={20} />} title="API Integrations" description="Connecting systems with robust, well-documented API architectures"/>
        <SkillCard icon={<Users size={20}/>} title="Open Source" description="Contributing to projects that empower the developer community"/>
      </div>
    </section>
  );
}

const SkillCard = ({...props} : skillCardProp) => {
  return(
    <Card className="h-[160px] w-[260px] hover:outline-primary p-6 flex flex-col gap-2 items-start justify-center">
      <CardAction className="bg-primary/20 p-2 rounded-md text-primary">
        {props.icon}
      </CardAction>
      <CardTitle className="text-sm">
        {props.title}
      </CardTitle>
      <CardDescription className="text-xs">
        {props.description}
      </CardDescription>
    </Card>
  )
}