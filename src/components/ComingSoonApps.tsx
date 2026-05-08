import { CalendarCheck, ChefHat, Sparkles } from 'lucide-react'

type Upcoming = {
  icon: typeof CalendarCheck
  name: string
  description: string
  color: string
  accentText: string
  accentBg: string
  accentBorder: string
  blueprint: 'roster' | 'recipes' | 'loyalty'
}

const upcoming: Upcoming[] = [
  {
    icon: CalendarCheck,
    name: 'ControlEat',
    description: 'Asistencia, marcaje y control horario del equipo',
    color: 'from-primary-500 to-teal-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
    blueprint: 'roster',
  },
  {
    icon: ChefHat,
    name: 'CookEat',
    description: 'Recetario, fichas técnicas y costeo de platos',
    color: 'from-orange-500 to-red-500',
    accentText: 'text-orange-300',
    accentBg: 'bg-orange-500/15',
    accentBorder: 'border-orange-500/40',
    blueprint: 'recipes',
  },
  {
    icon: Sparkles,
    name: 'LoveEat',
    description: 'Programa de fidelidad y recompensas para clientes',
    color: 'from-violet-500 to-purple-500',
    accentText: 'text-violet-300',
    accentBg: 'bg-violet-500/15',
    accentBorder: 'border-violet-500/40',
    blueprint: 'loyalty',
  },
]

export function ComingSoonGrid() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-5">
        {upcoming.map((app, idx) => {
            const Icon = app.icon
            return (
              <div
                key={app.name}
                className={`group relative bg-brand-900 rounded-2xl border border-brand-800 overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}
                style={{ animation: `slide-up 0.5s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className={`relative h-1 bg-gradient-to-r ${app.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] bg-[length:200%_100%] animate-[shimmer_2.4s_ease-in-out_infinite]"></div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}></div>

                <Blueprint type={app.blueprint} color={app.color} />

                <div className="px-6 pb-6 pt-2 relative">
                  <div className={`inline-flex items-center gap-1.5 ${app.accentBg} ${app.accentText} ${app.accentBorder} border text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3`}>
                    Próximamente
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-lg shadow-black/40 mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-neutral-600 leading-snug">{app.description}</p>
                </div>
              </div>
            )
          })}
      </div>

      <p className="text-center text-sm text-neutral-500 mt-10">
        ¿Tienes una idea? <a href="mailto:hola@eatcorp.cl" className="text-primary-300 hover:text-primary-200 hover:underline font-medium">Cuéntanos</a> qué app necesitas.
      </p>
    </>
  )
}

function Blueprint({ type, color }: { type: Upcoming['blueprint']; color: string }) {
  const accent = color.includes('primary') ? 'rgb(16,185,129)' : color.includes('orange') ? 'rgb(249,115,22)' : 'rgb(139,92,246)'

  if (type === 'roster') {
    return (
      <div className="h-32 px-5 pt-5 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
        <div className="grid grid-cols-7 gap-1 opacity-70">
          {Array.from({ length: 21 }).map((_, i) => {
            const filled = [0, 3, 5, 8, 10, 13, 15, 18, 20].includes(i)
            return (
              <div
                key={i}
                className="aspect-square rounded-sm border border-brand-700"
                style={{
                  background: filled ? accent : 'transparent',
                  opacity: filled ? 0.65 : 1,
                  animation: `slide-up 0.4s ease-out ${i * 0.02}s backwards`,
                }}
              ></div>
            )
          })}
        </div>
        <div className="mt-2 flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 h-2 rounded-sm border border-brand-700"
              style={{ background: accent, opacity: 0.4 - i * 0.1 }}
            ></div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'recipes') {
    return (
      <div className="h-32 px-5 pt-5 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
        <div className="grid grid-cols-2 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border border-brand-700 bg-brand-900/60 p-1.5 flex gap-1.5"
              style={{ animation: `slide-up 0.4s ease-out ${i * 0.06}s backwards` }}
            >
              <div className="w-7 h-7 rounded" style={{ background: accent, opacity: 0.4 }}></div>
              <div className="flex-1 space-y-1 pt-0.5">
                <div className="h-1 w-3/4 rounded" style={{ background: accent, opacity: 0.5 }}></div>
                <div className="h-1 w-1/2 rounded" style={{ background: accent, opacity: 0.35 }}></div>
                <div className="h-1 w-1/3 rounded" style={{ background: accent, opacity: 0.6 }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // loyalty
  return (
    <div className="h-32 px-5 pt-5 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="h-full flex flex-col justify-center gap-2">
        {[80, 60, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-full"
              style={{ background: accent, opacity: 0.6 - i * 0.15, animation: `slide-up 0.5s ease-out ${i * 0.1}s backwards` }}
            ></div>
            <div className="flex-1 h-2 rounded-full bg-brand-800 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${w}%`,
                  background: accent,
                  opacity: 0.55,
                  animation: `fill-bar 1.2s cubic-bezier(0.4,0,0.2,1) ${0.3 + i * 0.12}s backwards`,
                }}
              ></div>
            </div>
            <div
              className="w-6 h-2 rounded-sm"
              style={{ background: accent, opacity: 0.7 - i * 0.15 }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
