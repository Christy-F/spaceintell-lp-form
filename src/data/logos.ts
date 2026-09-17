export interface LogoCategory {
  category: string;
  companies: string[];
}

// All 24 tenant names from reference HTML.
// Rendered as placeholder lockup boxes — NOT plain text.
// Replace with real SVG/PNG logo files when supplied by client.
export const tenantLogos: LogoCategory[] = [
  {
    category: "Automobile & Auto Ancillary",
    companies: [
      "KLT Automotive",
      "Nexteer Automotive",
      "Kohitech",
      "ECCT / BYD",
      "VinFast",
      "Royal Enfield",
    ],
  },
  {
    category: "Electronics & Technology",
    companies: [
      "Pegatron",
      "Hitachi ABB",
      "NCR",
      "Sercomm",
      "Wangda Technologies",
      "HRS (Hirose)",
    ],
  },
  {
    category: "Manufacturing & Engineering",
    companies: [
      "Cooper Standard",
      "Deceuninck Belgium",
      "Krishca Strapping",
      "Nirmiti Group",
      "Arvos Group",
      "KRR",
    ],
  },
  {
    category: "Renewable Energy · Logistics · Software",
    companies: [
      "Acciona Wind",
      "Eickhoff Wind Energy",
      "Flender Drives",
      "Indutch Composites",
      "Coldman Warehousing",
      "Iron Mountain",
    ],
  },
];
