/*
  DESCRIPTION:
    It's a one file types duo to smaller tables and forms in the portfolio site
    Types:
      - ContactType: When a potential client request for service inquiries
      - ClientType: At this point client have accepted to initiate project
      - ProjectType: Project fields linked to clients
*/
// TODO: Link types with zod validation
export type contactType = {
    id?: string;  // TODO: autogenerate in the backend database
    name: string;
    email: string;
    phone: string;
    type: string;
    description: string | null;
    budget: string;
    timeline: string;
    referenceLink?: string;
}

// TODO: On Project Initialised -> contactType <- projectType
export type ClientType = {
    id: string; // TODO: auto-generated within the database
    name: string;
    email: string;
}


// TODO: Project description fields -> contactType
export type projectType = {
  id: string;
  name: string;
  description: string;
  stage: string;
  timeline: string | null;
  budget: string | null;
  tag: string[];
}