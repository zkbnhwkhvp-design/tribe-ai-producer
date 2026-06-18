type ModuleItem = {
  title: string;
  description: string;
  status?: string;
};

type ModulePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  stats: ModuleItem[];
  items: ModuleItem[];
};

export function ModulePage({ eyebrow, title, description, primaryAction, stats, items }: ModulePageProps) {
  return (
    <main className="min-h-screen bg-tribe-black p-5 text-tribe-chrome md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-tribe-orange">{eyebrow}</p>
            <h1 className="mt-2 text-4xl font-black">{title}</h1>
            <p className="mt-3 max-w-3xl text-tribe-muted">{description}</p>
          </div>
          <button className="rounded-full bg-tribe-orange px-6 py-3 font-black text-tribe-black shadow-glow">{primaryAction}</button>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title} className="glass-panel rounded-[1.5rem] p-5">
              <p className="text-sm text-tribe-muted">{stat.title}</p>
              <h2 className="mt-2 text-3xl font-black">{stat.status}</h2>
              <p className="mt-2 text-sm text-tribe-muted">{stat.description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-tribe-orange/20" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black">{item.title}</h3>
                {item.status ? <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-tribe-orange">{item.status}</span> : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-tribe-muted">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
