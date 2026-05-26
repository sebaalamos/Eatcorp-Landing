import { Sparkles, Users, Rocket } from 'lucide-react'

const steps = [
  {
    n: '01',
    Icon: Sparkles,
    title: 'Activa las apps que necesitas',
    description:
      'Sin instalación. Elige solo las apps que tu restorán usa. Activa más cuando quieras.',
    detail: '9 apps disponibles · más en camino',
  },
  {
    n: '02',
    Icon: Users,
    title: 'Invita a tu equipo',
    description:
      'Cada persona con su rol por app. Cocinero ve TaskEat, recepción usa BuyEat, admin tiene visibilidad total.',
    detail: 'Roles granulares y permisos por app',
  },
  {
    n: '03',
    Icon: Rocket,
    title: 'Opera mejor desde el día 1',
    description:
      'Datos integrados entre apps. Lo que pasa en BuyEat se refleja en tu dashboard. Tu equipo trabaja en lo que importa.',
    detail: 'Setup completo en menos de 30 minutos',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-brand-950 relative overflow-hidden">
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Cómo funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Listo en 3 pasos
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Sin migración compleja. Sin consultorías. Sin contratos largos.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
          ></div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s) => {
              const Icon = s.Icon
              return (
                <div
                  key={s.n}
                  className="group relative bg-brand-900/80 backdrop-blur rounded-2xl border border-brand-800 p-8 hover:border-primary-500/40 hover:bg-brand-900 hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                      <Icon size={22} className="text-primary-300" strokeWidth={1.75} />
                      <div aria-hidden className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-brand-900 border border-primary-500/40 flex items-center justify-center text-[10px] font-bold text-primary-300 tabular-nums">
                        {s.n}
                      </div>
                    </div>
                    <div className="text-7xl font-bold text-primary-500/10 leading-none select-none tabular-nums">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{s.title}</h3>
                  <p className="text-neutral-700 leading-relaxed mb-5">{s.description}</p>
                  <div className="text-sm font-medium text-primary-300 flex items-center gap-2 pt-4 border-t border-brand-800 group-hover:border-primary-500/30 transition">
                    <span className="w-1 h-1 rounded-full bg-primary-400"></span>
                    {s.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
