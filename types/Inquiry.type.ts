export type Inquiry = {
    name: string;
    email: string;
    inquiryType: string[];
    projectDecription: string;
    budgetRange: string[];
    projectTimeline: string[];
    referenceLink?: string | undefined;
}