import { CreditCard, BarChart3, Truck, Clock, ArrowRight } from 'lucide-react'

type Upcoming = {
  icon: typeof CreditCard
  name: string
  description: string
  eta: string
  color: string
  accentText: string
  accentBg: string
  accentBorder: string
  blueprint: 'pos' | 'analytics' | 'supply'
}

const upcoming: Upcoming[] = [
  {
    icon: CreditCard,
    name: 'PayEat',
    description: 'POS + KDS + cobro hardware-agnostic (Getnet, iPad, Android, móvil). Piloto activo en El Toro.',
    eta: 'Jun 2026 piloto',
    color: 'from-primary-500 via-teal-500 to-cyan-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
    blueprint: 'pos',
  },
  {
    icon: BarChart3,
    name: 'ReportEat',
    description: 'Dashboards centralizados por app — compras, ventas, eventos, propinas. Visualización por app sin BI cross-app.',
    eta: 'Jul 2026',
    color: 'from-blue-500 to-indigo-500',
    accentText: 'text-blue-300',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
    blueprint: 'analytics',
  },
  {
    icon: Truck,
    name: 'SupplyEat',
    description: 'Marketplace de proveedores con comparador histórico anónimo. Network effect para BuyEat.',
    eta: 'Ago 2026',
    color: 'from-blue-500 to-sky-500',
    accentText: 'text-blue-300',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
    blueprint: 'supply',
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
              className="group relative bg-brand-900 rounded-2xl border border-brand-800 overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
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
                <p className="text-sm text-neutral-600 leading-snug">{app.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-10 space-y-3">
        <p className="text-sm text-neutral-600">
          Y otras 12 apps en evaluación o planeadas para 2026-2027.
        </p>
        <a
          href="/productos"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition"
        >
          Ver roadmap completo
          <ArrowRight size={14} />
        </a>
      </div>
    </>
  )
}

function Blueprint({ type, color }: { type: Upcoming['blueprint']; color: string }) {
  const accent =
    color.includes('primary') ? 'rgb(16,185,129)' : color.includes('blue') && !color.includes('sky') ? 'rgb(59,130,246)' : 'rgb(99,102,241)'

  if (type === 'pos') return <PosBlueprint accent={accent} />
  if (type === 'supply') return <SupplyBlueprint accent={accent} />
  return <AnalyticsBlueprint accent={accent} />
}

function PosBlueprint({ accent }: { accent: string }) {
  // Simula un POS con tiles tipo numpad
  return (
    <div className="h-36 px-5 pt-4 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">Comanda · mesa 4</div>
        <div className="text-[8px] font-mono text-neutral-600">$48.500</div>
      </div>
      <div className="grid grid-cols-3 gap-1 opacity-80">
        {['Pasta', 'Asado', 'Empan.', 'Pisco', 'Vino', 'Agua', 'Cerveza', '7', 'Cobrar'].map((label, i) => (
          <div
            key={i}
            className="aspect-square rounded-md border border-brand-700 bg-brand-900/70 flex items-center justify-center text-[8px] font-bold text-neutral-700"
            style={{
              background: i === 8 ? accent : undefined,
              opacity: i === 8 ? 0.85 : 1,
              color: i === 8 ? 'white' : undefined,
              animation: `slide-up 0.4s ease-out ${i * 0.03}s backwards`,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsBlueprint({ accent }: { accent: string }) {
  return (
    <div className="h-36 px-5 pt-4 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">Compras · 30 días</div>
        <div className="flex items-center gap-1 text-[8px] text-blue-300 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></span>
          +12%
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-end h-16 gap-1 border-b border-brand-700 pb-0.5">
          {[40, 65, 50, 80, 35, 90, 60, 75, 55, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t origin-bottom"
              style={{
                height: `${h}%`,
                background: accent,
                opacity: 0.55,
                animation: `slide-up 0.6s ease-out ${i * 0.05}s backwards`,
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

function SupplyBlueprint({ accent }: { accent: string }) {
  const items = [
    { label: 'Carnes', count: 14 },
    { label: 'Lácteos', count: 8 },
    { label: 'Verduras', count: 22 },
    { label: 'Bebidas', count: 16 },
  ]
  return (
    <div className="h-36 px-5 pt-4 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">Marketplace</div>
        <div className="text-[8px] text-blue-300 font-semibold">60 proveedores</div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((it, i) => (
          <div
            key={i}
            className="rounded-md border border-brand-700 bg-brand-900/60 px-2 py-1.5 flex items-center justify-between"
            style={{ animation: `slide-up 0.4s ease-out ${i * 0.06}s backwards` }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
              <span className="text-[9px] font-semibold text-neutral-800">{it.label}</span>
            </div>
            <span className="text-[8px] font-mono text-neutral-600">{it.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
