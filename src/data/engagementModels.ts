export interface EngagementModel {
  tag: string;
  title: string;
  description: string;
  ideal: string;
}

export const engagementModels: EngagementModel[] = [
  {
    tag: "Move in immediately",
    title: "Ready to Move In",
    description:
      "Pre-built, fully compliant factory or warehouse units with power, water, fire systems and utilities provisioned. Move-in timelines from 30–70 days. Available across OMR and Poonamallee parks.",
    ideal: "Immediate capacity expansion, relocation, or short-horizon production start-ups.",
  },
  {
    tag: "Custom footprint",
    title: "Built-to-Suit (BTS)",
    description:
      "Facility designed and built to your exact specification — floor-plate, ceiling height, dock configuration, power load, ETP, and site utilities. Casagrand delivers the building; you focus on fit-out and operations.",
    ideal: "OEMs, global manufacturers, and operations with non-standard infrastructure requirements.",
  },
  {
    tag: "Plug-and-play",
    title: "Plug & Play",
    description:
      "Fully operational facilities with shared infrastructure — power substation, ETP, parking, security, cafeteria — available on a lease basis. Minimal capex, immediate productivity.",
    ideal: "Logistics operators, 3PLs, and companies expanding into a new corridor without long-term commitment.",
  },
  {
    tag: "Own the asset",
    title: "Outright Purchase",
    description:
      "Purchase land parcels or completed facilities within Casagrand Industrial Parks. Title-clear, all approvals in place. Suitable for long-duration manufacturing commitments or balance-sheet asset strategies.",
    ideal: "Anchor manufacturers, large-format warehousing operations, or investors building an industrial asset portfolio.",
  },
];
