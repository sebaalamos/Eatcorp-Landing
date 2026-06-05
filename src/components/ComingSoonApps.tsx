import { Clock, ArrowRight } from 'lucide-react'
import { UPCOMING_APPS } from '@/lib/products'

const statusLabel: Record<string, string> = {
  construyendo: 'En construcción',
  planeado: 'Planeado',
  evaluando: 'Evaluando',
}

export function ComingSoonGrid() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {UPCOMING_APPS.map((app, idx) => {
          const Icon = app.icon
          return (
            <div
              key={app.slug}
              className="group relative bg-brand-900 rounded-2xl border border-brand-800 overflow-hidden hover:border-brand-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl p-5"
              style={{ animation: `slide-up 0.5s ease-out ${idx * 0.04}s backwards` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${app.gradient}`}></div>

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-white shadow-lg shadow-black/30 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} />
                </div>
                <div className={`inline-flex items-center gap-1 ${app.accentBg} ${app.accentText} ${app.accentBorder} border text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full`}>
                  <Clock size={10} />
                  {app.eta}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h3 className="text-lg font-bold text-neutral-900">{app.name}</h3>
                <span className="text-[9px] font-semibold uppercase tracking-wide text-neutral-600 bg-brand-950/80 border border-brand-700 px-1.5 py-0.5 rounded-full">
                  {statusLabel[app.status] ?? app.status}
                </span>
              </div>
              <p className={`text-xs font-semibold ${app.accentText} mb-1.5`}>{app.tagline}</p>
              <p className="text-sm text-neutral-600 leading-snug">{app.description}</p>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-10 space-y-3">
        <p className="text-sm text-neutral-600">
          Todo conectado al mismo ecosistema. Activas cada app cuando la necesitas.
        </p>
        <a
          href="/productos"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition"
        >
          Ver todos los productos
          <ArrowRight size={14} />
        </a>
      </div>
    </>
  )
}
