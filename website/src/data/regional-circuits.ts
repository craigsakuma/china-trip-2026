export interface RegionalCircuit {
  name: string;
  cities: string[];
  totalDays: string;
  color: string;
}

export const regionalCircuits: RegionalCircuit[] = [
  {
    name: "Yunnan Circuit",
    cities: ["Kunming", "Dali", "Lijiang / Tiger Leaping Gorge", "Shangri-La"],
    totalDays: "10–14",
    color: "#6366f1", // indigo
  },
  {
    name: "Sichuan Circuit",
    cities: ["Chengdu", "Leshan / Emeishan", "Chongqing"],
    totalDays: "7–10",
    color: "#ef4444", // red
  },
  {
    name: "Hunan Circuit",
    cities: ["Zhangjiajie", "Fenghuang"],
    totalDays: "4–5",
    color: "#22c55e", // green
  },
  {
    name: "Guangxi + Guizhou",
    cities: ["Guilin / Yangshuo", "Guizhou minority villages"],
    totalDays: "7–9",
    color: "#a855f7", // purple
  },
  {
    name: "Shanxi Heritage",
    cities: ["Datong", "Pingyao"],
    totalDays: "4–5",
    color: "#f59e0b", // amber
  },
  {
    name: "Eastern Refinement",
    cities: ["Hangzhou", "Suzhou", "Huangshan"],
    totalDays: "6–8",
    color: "#14b8a6", // teal
  },
  {
    name: "Fujian Coast",
    cities: ["Xiamen / Tulou", "Quanzhou"],
    totalDays: "4–5",
    color: "#06b6d4", // cyan
  },
  {
    name: "Central History",
    cities: ["Luoyang"],
    totalDays: "2",
    color: "#ec4899", // pink
  },
];
