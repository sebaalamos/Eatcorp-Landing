type Stat = {
  number: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    number: '6',
    label: 'Apps integradas',
    description: 'BuyEat, TaskEat, LikeEat, MaintainEat, BookEat y StaffEat — todo conectado.',
  },
  {
    number: '30 min',
    label: 'Setup completo',
    description: 'Activa apps, invita a tu equipo y opera el mismo día.',
  },
  {
    number: '14 días',
    label: 'Gratis',
    description: 'Sin tarjeta de crédito, sin compromiso, sin letra chica.',
  },
  {
    number: '24h',
    label: 'Soporte',
    description: 'En castellano, en horario hábil, con personas reales.',
  },
]

export function Stats() {
  return (
    <section className="py-20 px-4 bg-brand-950 border-y border-brand-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ number, label, description }, i) => (
            <div
              key={label}
              className="group relative rounded-2xl border border-brand-800 bg-brand-900/40 p-6 text-center hover:border-primary-500/40 hover:bg-brand-900/70 transition-all overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 bg-primary-500/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <div className="relative">
                <div
                  className="font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-500 leading-none mb-2 tabular-nums tracking-tight"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {number}
                </div>
                <div className="text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">{label}</div>
                <div className="text-sm text-neutral-700 leading-relaxed">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
