import { Inquiry } from "@/types/Inquiry.type";
import { prisma } from "@/lib/db";

export async function InquiryAction({...props}: Inquiry){
  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name: props.name,
        email: props.email,
        inquiryType: props.inquiryType,
        projectDecription: props.projectDecription,
        budgetRange: props.budgetRange,
        projectTimeline: props.projectTimeline,
      },
    });
    return { success: 'Inquiry sent successfully' };
  } catch (error) {
    console.error('Error sending inquiry:', error);
    throw new Error('Failed to send inquiry');
  }
}