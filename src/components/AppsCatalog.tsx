import { AppsGrid } from './Apps'

export function AppsCatalog() {
  return (
    <section id="apps" className="py-24 px-4 bg-brand-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Toda la suite
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Una plataforma, varias apps
          </h2>
          <p className="text-xl text-neutral-600">Activa solo las que tu restorán necesita</p>
        </div>

        <AppsGrid />
      </div>
    </section>
  )
}
