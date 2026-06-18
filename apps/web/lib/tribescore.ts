export type TribeScoreCategory = {
  id: string;
  label: string;
  score: number;
  weight: number;
  status: "excellent" | "good" | "needs-work" | "critical";
  recommendation: string;
};

export type TribeScoreResult = {
  overall: number;
  rank: string;
  weeklyChange: number;
  categories: TribeScoreCategory[];
  topImprovements: TribeScoreCategory[];
};

export const defaultTribeScoreCategories: TribeScoreCategory[] = [
  { id: "audio", label: "Audio", score: 96, weight: 20, status: "excellent", recommendation: "Lock this profile and reuse it for every stream." },
  { id: "camera", label: "Camera", score: 82, weight: 10, status: "good", recommendation: "Improve exposure and create a facecam preset." },
  { id: "lighting", label: "Lighting", score: 77, weight: 10, status: "needs-work", recommendation: "Add a key light preset and reduce background glare." },
  { id: "hardware", label: "Hardware", score: 88, weight: 10, status: "good", recommendation: "Save profiles for PS5, mic, capture card, and headphones." },
  { id: "internet", label: "Internet", score: 92, weight: 10, status: "excellent", recommendation: "Run a connection check before every live session." },
  { id: "content", label: "Content", score: 72, weight: 15, status: "needs-work", recommendation: "Create a reusable stream-to-shorts workflow." },
  { id: "growth", label: "Growth", score: 58, weight: 15, status: "needs-work", recommendation: "Publish three clips weekly and review retention." },
  { id: "business", label: "Business", score: 44, weight: 10, status: "critical", recommendation: "Build a media kit and add sponsor-ready packages." }
];

export function calculateTribeScore(categories: TribeScoreCategory[] = defaultTribeScoreCategories): TribeScoreResult {
  const weightedTotal = categories.reduce((total, category) => {
    return total + category.score * (category.weight / 100);
  }, 0);

  const overall = Math.round(weightedTotal);
  const rank = getTribeRank(overall);
  const topImprovements = [...categories]
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  return {
    overall,
    rank,
    weeklyChange: 5,
    categories,
    topImprovements
  };
}

export function getTribeRank(score: number) {
  if (score >= 95) return "Legend";
  if (score >= 90) return "Elite Creator";
  if (score >= 80) return "Pro Creator";
  if (score >= 70) return "Rising Creator";
  if (score >= 60) return "Builder";
  return "Explorer";
}
