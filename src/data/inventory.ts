export interface Park {
  id: string;
  name: string;
  location: string;
  status: "Ready to Occupy" | "Under Development" | "Upcoming";
  statusColor: string;
}

export const inventoryData: Park[] = [
  {
    id: "omr",
    name: "Casagrand Industrial Park – OMR",
    location: "Paiyanur, One Hub, OMR, Chennai",
    status: "Ready to Occupy",
    statusColor: "green",
  },
  {
    id: "poonamallee",
    name: "Casagrand Industrial Park – Poonamallee",
    location: "Poonamallee, Bangalore Highway, Chennai",
    status: "Ready to Occupy",
    statusColor: "green",
  },
  {
    id: "sriperumbudur",
    name: "Casagrand Industrial Park – Sriperumbudur",
    location: "Pillaipakkam, Sriperumbudur, Chennai",
    status: "Under Development",
    statusColor: "amber",
  },
  {
    id: "sriperumbudur2",
    name: "Casagrand Industrial Park – Sriperumbudur II",
    location: "Santhavellore, Sunguvarchatram, Chennai",
    status: "Under Development",
    statusColor: "amber",
  },
  {
    id: "sriperumbudur3",
    name: "Casagrand Industrial Park – Sriperumbudur III",
    location: "Sriperumbudur, Chennai–Bangalore Corridor",
    status: "Under Development",
    statusColor: "amber",
  },
  {
    id: "oragadam",
    name: "Casagrand Industrial Park – Oragadam",
    location: "Walajabad, Oragadam Corridor, Chennai",
    status: "Under Development",
    statusColor: "amber",
  },
  {
    id: "coimbatore",
    name: "Casagrand Industrial Park – Coimbatore",
    location: "Palladam–Cochin Frontier Road, Coimbatore",
    status: "Under Development",
    statusColor: "amber",
  },
  {
    id: "kiadb",
    name: "Casagrand Industrial Park – KIADB Bengaluru",
    location: "KIADB Aerospace & Hardware Park, North Bengaluru",
    status: "Under Development",
    statusColor: "amber",
  },
  {
    id: "vallam",
    name: "Casagrand Industrial Park – Vallam",
    location: "SIPCOT Vallam, Oragadam Corridor",
    status: "Upcoming",
    statusColor: "steel",
  }
];
