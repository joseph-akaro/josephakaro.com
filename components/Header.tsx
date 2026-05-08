import Link from "next/link";
import Inquiry from "./forms/Inquiry";
import { Button } from "./ui/button";

const NavLink = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About Me",
        url: "about"
    },
    {
        title: "Projects",
        url: "projects"
    },
    {
        title: "Blog",
        url: "blog"
    }
]

export const form = {
    name: "What's your name?",
    email: "Email address (required)",
    inquiryType: ["New Project", "Existing Project Help", "Consultation", "Other"],
    projectDecription: "Briefly describe what you want to build or need help with",
    budgetRange: ["Under $300", "$300 – $1,000", "$1,000+", "Not sure yet"],
    projectTimeline: ["Just exploring", "Within 1 month", "1–3 months", "Urgent"],
    referenceLink: "https://google.com",
    buttonName: "Discuss My Project",
}

export default function Header() {
    return (
        <nav className="flex flex-row w-full items-center justify-between p-6">
            <Link href={'/'} className="font-bold text-xl">
                JOSEPH AKARO
            </Link>
            <ul className="flex flex-row gap-4 items-center">
                {
                    NavLink.map((link) =>(
                    <li key={link.title}>
                        <Link href={link.url} >{link.title}</Link>
                    </li>
                ))
                }
                <Inquiry
                    name={form.name}
                    email={form.email}
                    inquiryType={form.inquiryType}
                    projectDecription={form.projectDecription}
                    budgetRange={form.budgetRange}
                    projectTimeline={form.projectTimeline}
                    referenceLink={form.referenceLink}
                />
                <Button variant={"outline"}>
                    <Link href={'/auth/login'}>Login</Link>
                </Button>
            </ul>
        </nav>
    );
}