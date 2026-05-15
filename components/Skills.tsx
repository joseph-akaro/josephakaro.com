import { Auth0, Aws, Css3, Docker, Firebase, Flask, Git, Html5, Javascript, Mongodb, MySql, NeonTech, NextJs, Nodejs, Php, Postgresql, Python, ReactIcon, Supabase, TailwindCss, Vercel, ViteJs, Wordpress } from "@boxicons/react";
import { CardTitle, Card, CardContent, CardHeader, CardDescription, CardAction, CardFooter } from "./ui/card";
import React from "react";

interface stackProp {
  title: string;
  icons: React.ReactNode
}

export default function Skills() {

  return (
    <section id="skills" className="flex flex-col items-start justify-center gap-10 px-20 h-dvh">
      <div className="flex flex-col gap-2 items-start w-full">
          <h2>// Skills</h2>
          <h1 className="text-4xl"><span className="text-foreground">Tech </span>Stack</h1>
      </div>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>FRONTEND</CardTitle>
            <CardDescription>
              Frontend Frameworks and Langauges
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row flex-wrap gap-4">
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <NextJs />
              <span>Next.js</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <ReactIcon />
              <span>React</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <ViteJs />
              <span>Vite</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Wordpress />
              <span>WordPress</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Html5 />
              <span>Html</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Css3 />
              <span>CSS</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <TailwindCss />
              <span>Tailwind</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Javascript />
              <span>Javacript</span>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>BACKEND</CardTitle>
            <CardDescription>
              Backend Framework and Services
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row flex-wrap gap-4">
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Nodejs />
              <span>Node.js</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Flask />
              <span>Flask</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Php />
              <span>Php</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Supabase />
              <span>Supabase</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Firebase />
              <span>Firebase</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Vercel />
              <span>Vercel</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Auth0 />
              <span>Auth0</span>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>TOOLS</CardTitle>
            <CardDescription>
              Tools and Pipelines
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row flex-wrap gap-4">
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Nodejs />
              <span>Node.js</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Flask />
              <span>Flask</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Php />
              <span>Php</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Supabase />
              <span>Supabase</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Firebase />
              <span>Firebase</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Vercel />
              <span>Vercel</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Auth0 />
              <span>Auth0</span>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>DATABASES</CardTitle>
            <CardDescription>
              Database & Tools
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row flex-wrap gap-4">
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <MySql />
              <span>MySql</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <Postgresql />
              <span>Postgresql</span>
            </div>
            <div className="flex gap-2 px-1 py-1 bg-muted rounded-md max-w-xl w-26 items-center justify-center hover:text-primary">
              <NeonTech />
              <span>Neon</span>
            </div>
          </CardContent>
        </Card>
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