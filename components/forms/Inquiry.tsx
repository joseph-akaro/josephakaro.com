"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "../ui/textarea";

import { Field, FieldDescription, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Briefcase, MessageBubble } from "@boxicons/react";

interface Contact{
    name: string;
    email: string;
    inquiryType: string[];
    projectDecription: string;
    budgetRange: string[];
    projectTimeline: string[];
    referenceLink?: string;
    buttonName?: string;
}

export default function Inquiry({...props}: Contact) {

  return (
    <Dialog>
        <form>
            <DialogTrigger type="button" asChild>
                <Button variant={'default'}>Let's Talk!</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-primary">Let's Talk!</DialogTitle>
                    <DialogDescription>Tell me a bit about your project. I’ll get back to you within 24–48 hours.</DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <Input id="name-1" name={props.name} placeholder="What's your name?" />
                    </Field>
                    <Field>
                        <Input id="email" name="email" placeholder="name@example.com" />
                    </Field>
                    <Field>
                        <SelectField placeholder="Select inquiry type" options={props.inquiryType}/>
                    </Field>
                    <Field>
                        <Textarea placeholder={props.projectDecription} />
                    </Field>
                    <Field>
                        <SelectField placeholder="Select project budget range" options={props.budgetRange} />
                        <FieldDescription className="italic text-sm">Projects typically start from $300</FieldDescription>
                    </Field>
                    <Field>
                        <SelectField placeholder="Select project timeline" options={props.projectTimeline} />
                    </Field>
                    <Field>
                        <Input id="referenceLink" name="referenceLink" placeholder={props.referenceLink} />
                        <FieldDescription className="italic text-sm">Reference link to similar project ideas</FieldDescription>
                    </Field>
                </FieldGroup>
                <DialogFooter>
                    <Button type="submit" variant={"default"} className="w-full">{props.buttonName}</Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
  );
}

export function SelectField({
    placeholder,
    options
}:{
    placeholder?: string,
    options: string[]
}){
    return(
        <Select>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {
                    options.map((item) => (
                            <SelectGroup key={item}>
                                <SelectItem value={item}>{item}</SelectItem>
                            </SelectGroup>
                    ))
                }
            </SelectContent>
        </Select>
    )
}