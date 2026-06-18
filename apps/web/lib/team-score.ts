export type TeamMetric = {
  id: string;
  label: string;
  score: number;
  weight: number;
  detail: string;
};

export type TeamScoreResult = {
  overall: number;
  rank: string;
  record: string;
  winRate: number;
  currentStreak: number;
  metrics: TeamMetric[];
};

export const defaultTeamMetrics: TeamMetric[] = [
  { id: "performance", label: "Performance", score: 88, weight: 30, detail: "Wins, losses, streaks, and match consistency." },
  { id: "teamwork", label: "Teamwork", score: 94, weight: 30, detail: "Revives, assists, objectives, and support actions." },
  { id: "discipline", label: "Discipline", score: 82, weight: 20, detail: "Attendance, practice, comms, and readiness." },
  { id: "creator", label: "Creator Activity", score: 76, weight: 20, detail: "Streams, clips, uploads, and team content output." }
];

export function calculateTeamScore(metrics: TeamMetric[] = defaultTeamMetrics): TeamScoreResult {
  const overall = Math.round(metrics.reduce((total, metric) => total + metric.score * (metric.weight / 100), 0));
  return {
    overall,
    rank: getTeamRank(overall),
    record: "157-43",
    winRate: 78.5,
    currentStreak: 8,
    metrics
  };
}

export function getTeamRank(score: number) {
  if (score >= 95) return "Legendary Tribe";
  if (score >= 90) return "Gold Team";
  if (score >= 80) return "Silver Team";
  if (score >= 70) return "Bronze Team";
  return "Prospect Team";
}
