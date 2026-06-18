import { calculateTeamScore } from "@/lib/team-score";

export function TeamScoreCard() {
  const score = calculateTeamScore();

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-tribe-orange">Team Score</p>
          <h2 className="mt-3 text-6xl font-black">{score.overall}</h2>
          <p className="mt-2 font-black text-tribe-orange">{score.rank}</p>
        </div>
        <div className="grid gap-3 text-sm md:grid-cols-3">
          <div className="rounded-2xl bg-tribe-panel p-4">
            <p className="text-tribe-muted">Record</p>
            <p className="mt-1 text-xl font-black">{score.record}</p>
          </div>
          <div className="rounded-2xl bg-tribe-panel p-4">
            <p className="text-tribe-muted">Win Rate</p>
            <p className="mt-1 text-xl font-black">{score.winRate}%</p>
          </div>
          <div className="rounded-2xl bg-tribe-panel p-4">
            <p className="text-tribe-muted">Streak</p>
            <p className="mt-1 text-xl font-black">{score.currentStreak} Wins</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {score.metrics.map((metric) => (
          <div key={metric.id} className="rounded-2xl border border-white/10 bg-tribe-panel p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">{metric.label}</p>
              <p className="text-sm font-black text-tribe-orange">{metric.score}</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-tribe-muted">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
