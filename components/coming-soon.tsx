"use client"
import { Construction } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

export default function ComingSoon() {
  return (
    <main className="flex items-center justify-center">
      <div className="text-center text-muted flex flex-col items-center justify-center w-full h-[85dvh]">
        <Construction size={70} className="mb-2"/>
        <h1 className="mb-1">Coming Soon!</h1>
        <p className="mb-2">In-Progress thanks for waiting</p>
        <Button variant={'outline'} onClick={() => (redirect('/'))}>Back Home</Button>
      </div>
    </main>
  );
}