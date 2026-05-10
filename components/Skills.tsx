import { Aws, Css3, Docker, Firebase, Git, Html5, Javascript, Mongodb, MySql, NeonTech, NextJs, Nodejs, Php, Postgresql, Python, ReactIcon, Supabase, TailwindCss, Vercel, Wordpress } from "@boxicons/react";
import { CardTitle, Card, CardContent } from "./ui/card";
import React from "react";
import { title } from "process";

interface stackProp {
  title: string;
  icons: React.ReactNode
}

const stack = {
  frontend: {
    title: "FRONTEND",
    icons: [
      <ReactIcon className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <NextJs className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <TailwindCss className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Html5 className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Css3 className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Javascript className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>
    ]
  },
  backend: {
    title: "BACKEND",
    icons: [
      <Nodejs className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Php className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Python className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Wordpress className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>
    ]
  },
  devops: {
    title: "TOOLS & DEVOPS",
    icons: [
      <Git className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Docker className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Aws className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Vercel className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <NeonTech className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Supabase className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>
    ]
  },
  database: {
    title: "DATABASE",
    icons:[
      <MySql className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Postgresql className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Mongodb className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>,
      <Firebase className="w-10 h-10 bg-primary/20 text-primary rounded-md p-1"/>
    ]
  }
}

export default function Skills() {

  return (
    <section id="skills" className="flex flex-col items-start justify-start gap-10 px-20 h-screen">
      <div className="flex flex-col gap-2 items-start w-full">
          <h2>// Skills</h2>
          <h1 className="text-4xl"><span className="text-foreground">Tech </span>Stack</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <Stack title={stack.frontend.title} icons={stack.frontend.icons}/>
        <Stack title={stack.backend.title} icons={stack.backend.icons}/>
        <Stack title={stack.devops.title} icons={stack.devops.icons}/>
        <Stack title={stack.database.title} icons={stack.database.icons}/>
      </div>
    </section>
  );
}

const Stack = ({...props}: stackProp)=> {
  return(
    <Card className="p-8">
      <CardTitle>
        {props.title}
      </CardTitle>
      <CardContent className="gap-4 text-xl grid grid-rows-2 grid-cols-4 w-full">
        {props.icons}
      </CardContent>
    </Card>
  )
}