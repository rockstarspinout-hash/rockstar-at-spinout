export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex items-center justify-center px-6">
      <main className="max-w-3xl text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-amber-500/20 text-amber-400 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
            Rockstar at Spinout
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Bygger framtidens
            <span className="block text-amber-400">demo-verktyg</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Vi kombinerar Next.js, Supabase och Vercel för att skapa
            snabba, skalbara presentationer och prototyper.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2">
            <div className="text-2xl">&#9650;</div>
            <h3 className="font-semibold text-lg">Vercel</h3>
            <p className="text-sm text-zinc-400">
              Deploy på sekunder med edge-nätverket.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2">
            <div className="text-2xl">&#9879;</div>
            <h3 className="font-semibold text-lg">Supabase</h3>
            <p className="text-sm text-zinc-400">
              Auth, databas och storage — redo att koppla in.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2">
            <div className="text-2xl">&#128025;</div>
            <h3 className="font-semibold text-lg">GitHub</h3>
            <p className="text-sm text-zinc-400">
              Versionskontroll och CI/CD i ett flöde.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@spinout.dev"
            className="rounded-full bg-amber-500 text-zinc-900 px-8 py-3 font-semibold hover:bg-amber-400 transition-colors"
          >
            Kontakta oss
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
          >
            Läs mer
          </a>
        </div>

        <footer className="pt-8 text-sm text-zinc-500">
          © 2026 Rockstar at Spinout
        </footer>
      </main>
    </div>
  );
}
