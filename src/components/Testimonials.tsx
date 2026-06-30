import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'La administración aprueba el lote del día en 10 minutos y el archivo bancario sale solo. Tiempo recuperado para lo que importa.',
    role: 'Equipo de operaciones',
    restaurant: 'El Toro',
    location: 'Vitacura',
    instagram: 'https://instagram.com/eltororestoran',
    instagramHandle: '@eltororestoran',
    initials: 'ET',
    gradient: 'from-amber-400 to-orange-500',
    apps: ['BuyEat', 'TaskEat'],
  },
  {
    quote:
      'LikeEat nos arma el plan de Instagram con efemérides locales. Aprobamos posts en segundos en vez de pasar horas pensando qué publicar.',
    role: 'Equipo de marketing',
    restaurant: 'Tigre',
    location: 'Vitacura',
    instagram: 'https://instagram.com/tigrerestoran',
    instagramHandle: '@tigrerestoran',
    initials: 'TG',
    gradient: 'from-primary-400 to-teal-500',
    apps: ['LikeEat', 'TaskEat'],
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-brand-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Lo que dicen los restoranes
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Primeros restoranes operando con EatCorp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.restaurant}
              className="bg-gradient-to-br from-brand-800 to-brand-900 rounded-2xl border border-brand-700 p-6 shadow-md hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 transition-all flex flex-col"
            >
              <Quote size={28} className="text-primary-400 mb-4 opacity-80" />

              <p className="text-neutral-800 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-brand-700">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-neutral-900 text-sm">{t.restaurant}</div>
                  <div className="text-xs text-neutral-600 truncate">
                    {t.role} · {t.location}
                  </div>
                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-primary-300 hover:text-primary-200 mt-0.5 inline-block"
                  >
                    {t.instagramHandle} ↗
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {t.apps.map((app) => (
                  <span
                    key={app}
                    className="text-[10px] font-semibold uppercase tracking-wide text-primary-300 bg-primary-500/15 border border-primary-500/30 px-2 py-0.5 rounded"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
