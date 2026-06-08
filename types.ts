export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "marketing" | "design" | "education";
  period: string;
  description: string;
  details: string[];
  tags: string[];
  glowColor: string;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  host: string;
  awardType: string;
}

export interface Activity {
  id: string;
  period: string;
  title: string;
  role: string;
  description: string;
}

export interface SkillNode {
  name: string;
  level: "High" | "Mid-High" | "Mid" | "Basic";
  description: string;
  x: number; // For interactive orbit placement (%)
  y: number; // For interactive orbit placement (%)
  glow: string;
  category: "language" | "office" | "ai";
}

export interface GuestbookEntry {
  id: string;
  name: string;
  content: string;
  timestamp: string;
  starColor: string;
  symbol: string;
}
