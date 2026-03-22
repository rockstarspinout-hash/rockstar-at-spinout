export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex items-center justify-center px-6">
      <main className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
            Coming Soon
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Spinout Demo Tool
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Vi bygger verktyg som gör det enkelt att visa upp idéer, produkter och prototyper.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@spinout.dev"
            className="rounded-full bg-white text-zinc-900 px-8 py-3 font-semibold hover:bg-zinc-200 transition-colors"
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

        <footer className="pt-12 text-sm text-zinc-500">
          © 2026 Spinout Demo Tool
        </footer>
      </main>
    </div>
  );
}
