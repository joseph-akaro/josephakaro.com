"use server"
import { Inquiry } from "@/types/Inquiry.type"
import { revalidatePath } from "next/cache"

// creates new inquiries
export default  async function createInquiry(formdata: FormData) : Promise<Inquiry> {
  const data = {
    name: formdata.get("name"),
    email: formdata.get("email"),
    inquiryType: formdata.get("inquiryType"),
    projectDescription: formdata.get("projectDescription"),
    budgetRange: formdata.get("budgetRange"),
    projectTimeline: formdata.get("projectTimeline"),
    referenceLink: formdata.get("referenceLink")
  }

  await data

  revalidatePath('/')

  return data as unknown as Inquiry
}