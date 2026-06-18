import { calculateTribeScore } from "@/lib/tribescore";

export function TribeScoreCard() {
  const score = calculateTribeScore();

  return (
    <section className="glass-panel rounded-[2rem] p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-tribe-orange">TribeScore</p>
          <div className="mt-3 flex items-end gap-4">
            <h2 className="text-7xl font-black">{score.overall}</h2>
            <div className="pb-3">
              <p className="font-black text-tribe-orange">{score.rank}</p>
              <p className="text-sm text-tribe-muted">+{score.weeklyChange} this week</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-tribe-muted">
            Creator readiness across studio quality, content workflow, growth, and business readiness.
          </p>
        </div>

        <div className="grid min-w-[280px] gap-3">
          {score.topImprovements.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold">{item.label}</p>
                <span className="text-sm font-black text-tribe-orange">{item.score}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-tribe-muted">{item.recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {score.categories.map((category) => (
          <div key={category.id} className="rounded-2xl border border-white/10 bg-tribe-panel p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">{category.label}</p>
              <p className="text-sm font-black text-tribe-orange">{category.score}</p>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-tribe-orange" style={{ width: `${category.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
