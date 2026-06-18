import { agents, modules, quickActions } from "@/lib/data";

const navItems = [
  "Dashboard",
  "Projects",
  "AI Workforce",
  "Devices",
  "Audio Hub",
  "Camera Hub",
  "Lighting Hub",
  "Console Hub",
  "Analytics",
  "Settings"
];

export function DashboardShell() {
  return (
    <main className="min-h-screen bg-tribe-black text-tribe-chrome">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-white/10 bg-tribe-panel p-6 lg:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tribe-orange font-black text-tribe-black">T</div>
            <div>
              <p className="font-black">Tribe GG OS</p>
              <p className="text-xs text-tribe-muted">Alpha Command Center</p>
            </div>
          </div>
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <div key={item} className={`rounded-2xl px-4 py-3 text-sm font-semibold ${index === 0 ? "bg-tribe-orange text-tribe-black" : "text-tribe-muted hover:bg-white/5"}`}>
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <section className="p-5 md:p-8">
          <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-tribe-orange">Creator Dashboard</p>
              <h1 className="mt-2 text-4xl font-black">Production Command Center</h1>
              <p className="mt-2 text-tribe-muted">Your setup, agents, projects, and readiness in one view.</p>
            </div>
            <button className="rounded-full bg-tribe-orange px-6 py-3 font-black text-tribe-black shadow-glow">Run Setup Check</button>
          </header>

          <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-5">
              <section className="glass-panel rounded-[2rem] p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm text-tribe-muted">Creator Readiness</p>
                    <h2 className="mt-2 text-7xl font-black">91%</h2>
                    <p className="mt-3 text-tribe-muted">You are clear to produce. Audio and lighting have minor improvement opportunities.</p>
                  </div>
                  <div className="rounded-3xl border border-tribe-orange/30 bg-tribe-orange/10 p-5">
                    <p className="text-sm font-bold text-tribe-orange">Next Best Action</p>
                    <p className="mt-2 max-w-sm text-sm text-tribe-chrome">Ask the Audio Engineer to create a PS5 + USB mic monitoring profile.</p>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-2">
                {modules.map((module) => (
                  <div key={module.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-black">{module.title}</h3>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-tribe-orange">{module.health}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-tribe-muted">{module.description}</p>
                  </div>
                ))}
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-black">AI Workforce</h2>
                <div className="mt-5 space-y-3">
                  {agents.map((agent) => (
                    <div key={agent.name} className="rounded-2xl border border-white/10 bg-tribe-panel p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-bold">{agent.name}</p>
                        <span className="text-xs font-bold text-tribe-orange">{agent.status}</span>
                      </div>
                      <p className="mt-1 text-xs text-tribe-muted">{agent.role}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-xl font-black">Quick Actions</h2>
                <div className="mt-5 grid gap-3">
                  {quickActions.map((action) => (
                    <button key={action} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-bold text-tribe-chrome hover:border-tribe-orange/40">
                      {action}
                    </button>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
