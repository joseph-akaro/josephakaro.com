import { ArrowBigDown, ArrowBigRight, ArrowBigUp, ArrowUpLeftSquare, Auth0, CameraSwitch, NeonTech, NextJs, Postgresql, SeaView } from "@boxicons/react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

  return (
    <section id="projects" className="flex flex-col items-center justify-center gap-6 sm:px-20 py-20 px-10">
      <div className="flex flex-col gap-2 items-start w-full">
          <h2>// project</h2>
          <h1 className="text-4xl"><span className="text-foreground">Recent </span>Projects</h1>
      </div>
      <div className="grid sm:grid-rows-1 sm:grid-cols-2 gap-6 mt-1 w-full">
        <Card className="max-w-full">
            <CardHeader className="flex flex-col w-full">
              <Link href={"/"} className="object-cover overflow-hidden w-full rounded-md">
                <Image  alt={"Joseph Akaro Image"} src={'/meta.png'} width={550} height={550}/>
              </Link>
              <div className="w-full pt-2">
                <CardTitle>
                  <h1>AkaroPay</h1>
                </CardTitle>
                <CardDescription>
                  A unified Payment system for eastern Africa Market
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 w-full">
                  <NextJs />
                  <NeonTech />
                  <Auth0 />
                  <Postgresql />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                View Project
                <span className="ml-2">
                  <ArrowBigDown />
                </span>
              </Button>
            </CardFooter>
        </Card>

        <Card className="max-w-full">
            <CardHeader className="flex flex-col w-full">
              <Link href={"/"} className="object-cover w-full rounded-md">
                <Image  alt={"Joseph Akaro Image"} src={'/meta.png'} className="object-scale-down" width={500} height={500}/>
              </Link>
              <div className="w-full pt-2">
                <CardTitle>
                  <h1>AkaroPay</h1>
                </CardTitle>
                <CardDescription>
                  A unified Payment system for eastern Africa Market
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 w-full">
                  <NextJs />
                  <NeonTech />
                  <Auth0 />
                  <Postgresql />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                View Project
                <span className="ml-2">
                  <ArrowBigDown />
                </span>
              </Button>
            </CardFooter>
        </Card>

        <Card className="max-w-full">
            <CardHeader className="flex flex-col w-full">
              <Link href={"/"} className="object-cover overflow-hidden w-full rounded-md">
                <Image  alt={"Joseph Akaro Image"} src={'/meta.png'} width={550} height={550}/>
              </Link>
              <div className="w-full pt-2">
                <CardTitle>
                  <h1>AkaroPay</h1>
                </CardTitle>
                <CardDescription>
                  A unified Payment system for eastern Africa Market
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 w-full">
                  <NextJs />
                  <NeonTech />
                  <Auth0 />
                  <Postgresql />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                View Project
                <span className="ml-2">
                  <ArrowBigDown />
                </span>
              </Button>
            </CardFooter>
        </Card>

        <Card className="max-w-full">
            <CardHeader className="flex flex-col w-full">
              <Link href={"/"} className="object-cover overflow-hidden w-full rounded-md">
                <Image  alt={"Joseph Akaro Image"} src={'/meta.png'} width={550} height={550}/>
              </Link>
              <div className="w-full pt-2">
                <CardTitle>
                  <h1>AkaroPay</h1>
                </CardTitle>
                <CardDescription>
                  A unified Payment system for eastern Africa Market
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 w-full">
                  <NextJs />
                  <NeonTech />
                  <Auth0 />
                  <Postgresql />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                View Project
                <span className="ml-2">
                  <ArrowBigDown />
                </span>
              </Button>
            </CardFooter>
        </Card>

      </div>
    </section>
  );
}