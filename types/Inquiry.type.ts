export type Inquiry = {
    name: string;
    email: string;
    inquiryType: string[] | string;
    projectDecription: string;
    budgetRange: string[] | string;
    projectTimeline: string[] | string;
    referenceLink?: string | undefined;
}