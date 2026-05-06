import { CreditCard, QrCode, BarChart3, Clock } from 'lucide-react'

type Upcoming = {
  icon: typeof CreditCard
  name: string
  description: string
  eta: string
  color: string
  accentText: string
  accentBg: string
  accentBorder: string
  progress: number
  blueprint: 'pos' | 'menu' | 'analytics'
  vibe: string
}

const upcoming: Upcoming[] = [
  {
    icon: CreditCard,
    name: 'PayEat',
    description: 'Cobros con tarjeta + propinas digitales',
    eta: 'Q3 2026',
    color: 'from-primary-500 to-teal-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
    progress: 65,
    blueprint: 'pos',
    vibe: 'En testing con 3 restoranes',
  },
  {
    icon: QrCode,
    name: 'MenuEat',
    description: 'Carta digital con QR + actualizaciones en vivo',
    eta: 'Q4 2026',
    color: 'from-orange-500 to-red-500',
    accentText: 'text-orange-300',
    accentBg: 'bg-orange-500/15',
    accentBorder: 'border-orange-500/40',
    progress: 30,
    blueprint: 'menu',
    vibe: 'En diseño UX',
  },
  {
    icon: BarChart3,
    name: 'DataEat',
    description: 'Analytics avanzado + insights con IA',
    eta: '2027',
    color: 'from-violet-500 to-purple-500',
    accentText: 'text-violet-300',
    accentBg: 'bg-violet-500/15',
    accentBorder: 'border-violet-500/40',
    progress: 12,
    blueprint: 'analytics',
    vibe: 'Investigación en curso',
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
                    <Clock size={10} />
                    {app.eta}
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-lg shadow-black/40 mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-neutral-600 leading-snug mb-4">{app.description}</p>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-semibold uppercase tracking-wider text-neutral-500">Avance</span>
                      <span className={`font-bold tabular-nums ${app.accentText}`}>{app.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-brand-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${app.color} rounded-full origin-left relative`}
                        style={{ width: `${app.progress}%`, animation: `fill-bar 1.4s cubic-bezier(0.4,0,0.2,1) ${0.3 + idx * 0.15}s backwards` }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${app.accentBg.replace('/15', '/60')} animate-pulse`}></span>
                      <span>{app.vibe}</span>
                    </div>
                  </div>
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

  if (type === 'pos') {
    return (
      <div className="h-32 px-5 pt-5 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
        <div className="grid grid-cols-3 gap-1.5 opacity-60">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md border border-brand-700 bg-brand-900/60 flex items-center justify-center"
              style={{ animation: `slide-up 0.4s ease-out ${i * 0.04}s backwards` }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent, opacity: 0.7 }}></div>
            </div>
          ))}
        </div>
        <div className="mt-1.5 h-3 rounded-md border border-brand-700 bg-brand-900/60 flex items-center justify-end px-1.5">
          <div className="h-1 w-10 rounded" style={{ background: accent, opacity: 0.8 }}></div>
        </div>
      </div>
    )
  }

  if (type === 'menu') {
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

  // analytics
  return (
    <div className="h-32 px-5 pt-5 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-end h-16 gap-1 border-b border-brand-700 pb-0.5">
          {[40, 65, 50, 80, 35, 90, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t origin-bottom"
              style={{
                height: `${h}%`,
                background: accent,
                opacity: 0.55,
                animation: `slide-up 0.6s ease-out ${i * 0.07}s backwards`,
              }}
            ></div>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 h-3 rounded border border-brand-700 bg-brand-900/60 flex items-center justify-center"
            >
              <div className="w-3 h-1 rounded" style={{ background: accent, opacity: 0.6 }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
