import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Joseph Akaro",
  description: "Full Stack Developer with specilization in backend and system architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans dark", geist.variable)}>
      <body className="text-primary">
        {children}
      </body>
    </html>
  );
}
