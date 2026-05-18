import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import Contact from "./forms/Contact";

const NavLink = [
    {
        title: "About",
        url: "#about"
    },
    {
        title: "Skills",
        url: "#skills"
    },
    {
        title: "Projects",
        url: "#projects"
    },
    {
        title: "Experiences",
        url: "experiences"
    },
    {
        title: "Blog",
        url: "#blog"
    }
]

export const form = {
    name: "What's your name?",
    email: "Email address (required)",
    phone: "+211 920333207",
    type: ["New Project", "Existing Project", "Consultation", "Other"],
    description: "Briefly describe what you want to build or need help with",
    budget: ["Under $300", "$300 – $1,000", "$1,000+", "Not sure yet"],
    timeline: ["Just exploring", "Within 1 month", "1–3 months", "Urgent"],
    referenceLink: "https://google.com",
    buttonName: "Discuss My Project",
}

export  default async function Header() {

    const supabase = createClient()

    const session = (await supabase).auth.getUser()

    return (
        <nav className="flex flex-row w-full items-center justify-between p-6">
            <Link href={'/'} className="font-bold text-xl">
                <span className="text-foreground">J</span>A
            </Link>
            <ul className="sm:flex flex-row gap-4 items-center hidden">
                {
                    NavLink.map((link) =>(
                    <li key={link.title}>
                        <Link href={link.url} >{link.title}</Link>
                    </li>
                ))
                }
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
                <Button variant={"default"}>
                    <Link href={'/dashboard'}>{!session ? "Login" : "Dashboard"}</Link>
                </Button>
            </ul>
        </nav>
    );
}