import { TeamScoreCard } from "@/components/team-score-card";

const members = [
  { name: "Dwight", role: "Commander", kills: 2483, wins: 212, kd: 1.74 },
  { name: "Mike", role: "Support", kills: 1492, wins: 188, kd: 1.22 },
  { name: "Jay", role: "Engineer", kills: 1830, wins: 194, kd: 1.41 },
  { name: "Tone", role: "Recon", kills: 2055, wins: 201, kd: 1.58 }
];

const reports = [
  "Improve objective defense during final two minutes.",
  "Support role should increase revive attempts by 15%.",
  "Squad spacing is strong during opening push.",
  "Create two clips from last win streak session."
];

export default function SquadPage() {
  return (
    <main className="min-h-screen bg-tribe-black p-5 text-tribe-chrome md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-tribe-orange">Squad Hub</p>
            <h1 className="mt-2 text-4xl font-black">Dad Gamers</h1>
            <p className="mt-2 text-tribe-muted">Roster, match history, team score, and AI coach recommendations.</p>
          </div>
          <button className="rounded-full bg-tribe-orange px-6 py-3 font-black text-tribe-black shadow-glow">Log Match</button>
        </header>

        <TeamScoreCard />

        <section className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Roster</h2>
            <div className="mt-5 grid gap-3">
              {members.map((member) => (
                <div key={member.name} className="grid gap-3 rounded-2xl border border-white/10 bg-tribe-panel p-4 md:grid-cols-5 md:items-center">
                  <div className="md:col-span-2">
                    <p className="font-black">{member.name}</p>
                    <p className="text-sm text-tribe-muted">{member.role}</p>
                  </div>
                  <p className="text-sm"><span className="text-tribe-muted">Kills</span><br />{member.kills}</p>
                  <p className="text-sm"><span className="text-tribe-muted">Wins</span><br />{member.wins}</p>
                  <p className="text-sm"><span className="text-tribe-muted">K/D</span><br />{member.kd}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">AI Coach Report</h2>
            <div className="mt-5 space-y-3">
              {reports.map((report) => (
                <div key={report} className="rounded-2xl border border-white/10 bg-tribe-panel p-4 text-sm leading-6 text-tribe-muted">
                  {report}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
