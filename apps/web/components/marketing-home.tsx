import { agents, modules } from "@/lib/data";

export function MarketingHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,122,26,0.25),transparent_30%),#070707]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-tribe-orange font-black text-tribe-black">T</div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-tribe-orange">Tribe GG</p>
            <p className="text-xs text-tribe-muted">AI Creator Operating System</p>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm text-tribe-muted md:flex">
          <a href="#features">Features</a>
          <a href="#workforce">AI Workforce</a>
          <a href="#modules">Studio</a>
          <a href="/app/dashboard" className="rounded-full bg-tribe-chrome px-5 py-2 font-semibold text-tribe-black">Open Alpha</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-tribe-muted">
            Built for gamers, streamers, and creator crews
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Meet Your <span className="text-tribe-orange">AI Production Team.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-tribe-muted">
            Tribe GG OS helps creators plan, produce, broadcast, publish, and grow from one command center. No more scattered tools. No more guessing.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/app/dashboard" className="rounded-full bg-tribe-orange px-7 py-4 text-center font-bold text-tribe-black shadow-glow">Launch Alpha Dashboard</a>
            <a href="#features" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-tribe-chrome">Explore Platform</a>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-5">
          <div className="rounded-[1.5rem] bg-tribe-panel p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-tribe-muted">Creator Readiness</p>
                <h2 className="text-4xl font-black">91%</h2>
              </div>
              <div className="rounded-full bg-tribe-orange px-4 py-2 text-sm font-bold text-tribe-black">Ready</div>
            </div>
            <div className="grid gap-3">
              {modules.map((module) => (
                <div key={module.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{module.title}</p>
                    <p className="text-sm text-tribe-orange">{module.health}</p>
                  </div>
                  <p className="mt-2 text-sm text-tribe-muted">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="font-bold uppercase tracking-[0.3em] text-tribe-orange">Platform</p>
          <h2 className="mt-3 text-4xl font-black">Everything a creator needs before going live.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "AI production planning",
            "Studio readiness checks",
            "Device and hardware profiles",
            "Audio, camera, and lighting hubs",
            "Creator projects and task flow",
            "Future marketplace and plugins"
          ].map((item) => (
            <div key={item} className="glass-panel rounded-3xl p-6">
              <p className="text-lg font-bold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workforce" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="font-bold uppercase tracking-[0.3em] text-tribe-orange">AI Workforce</p>
          <h2 className="mt-3 text-4xl font-black">Specialists, not generic chat.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-tribe-orange/20" />
              <h3 className="text-xl font-black">{agent.name}</h3>
              <p className="mt-2 text-sm text-tribe-muted">{agent.role}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-tribe-orange">{agent.status}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
