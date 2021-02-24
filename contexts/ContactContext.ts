export type IContactType = "Address" | "Phone" | "Whatsapp" | "Email";

export interface IContact {
  name: IContactType;
  items: {
    name: string;
    desc: string[];
  }[];
}

export type IContacts = IContact[];

export const contactsState: IContacts = [
  {
    name: "Address",
    items: [
      {
        name: "Weifield Group Contracting",
        desc: ["6950 S. Jordan Road Centennial, CO 80112"],
      },
      {
        name: "Industrial Division Office",
        desc: ["1270 Automation Drive #500 Windsor, CO 80550"],
      },
    ],
  },
  {
    name: "Phone",
    items: [
      {
        name: "Weifield Group Contracting",
        desc: ["303.428.2011 phone", "303.202.0466 facsimile"],
      },
      {
        name: "Weifield 24/7 Service Department",
        desc: ["303.428.2011", "(Then press 2 for emergency calls)"],
      },
      {
        name: "Industrial Division Office",
        desc: ["303.428.2011 phone", "303.202.0466 facsimile"],
      },
      {
        name: "Wyoming Office",
        desc: ["307.757.7967 phone"],
      },
    ],
  },
  {
    name: "Whatsapp",
    items: [
      {
        name: "Weifield Group Contracting",
        desc: ["303.428.2011 phone", "303.202.0466 facsimile"],
      },
      {
        name: "Weifield 24/7 Service Department",
        desc: ["303.428.2011", "(Then press 2 for emergency calls)"],
      },
    ],
  },
  {
    name: "Email",
    items: [
      {
        name: "Service Enquiry",
        desc: ["Info@weifieldgroup.com"],
      },
      {
        name: "Employment Opportunities",
        desc: ["careers@weifieldcontracting.com"],
      },
    ],
  },
];
