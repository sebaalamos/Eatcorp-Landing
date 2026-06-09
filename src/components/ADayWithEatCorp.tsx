import { Truck, CheckSquare, ChefHat, Camera, Wrench, Sparkles, AlertTriangle, Wine, Check } from 'lucide-react'

type Moment = {
  time: string
  icon: typeof Truck
  title: string
  description: string
  app: string
  appColor: string
  tenant: string
  mockup: 'recepcion' | 'pagos' | 'kanban' | 'post' | 'alerta'
}

const moments: Moment[] = [
  {
    time: '08:00',
    icon: Truck,
    title: 'Llega el reparto',
    description: 'Recepcionista escanea la factura en BuyEat. Discrepancias detectadas automáticamente.',
    app: 'BuyEat',
    appColor: 'bg-blue-500',
    tenant: 'El Toro',
    mockup: 'recepcion',
  },
  {
    time: '11:00',
    icon: CheckSquare,
    title: 'Aprobación de pagos',
    description: 'Admin revisa lote del día. Aprueba en 5 minutos lo que antes tomaba 2 horas.',
    app: 'BuyEat',
    appColor: 'bg-blue-500',
    tenant: 'El Toro',
    mockup: 'pagos',
  },
  {
    time: '14:00',
    icon: ChefHat,
    title: 'Cocina en marcha',
    description: 'Equipo actualiza tareas en TaskEat. Visibilidad híbrida — cada uno ve solo lo suyo.',
    app: 'TaskEat',
    appColor: 'bg-primary-500',
    tenant: 'Tigre',
    mockup: 'kanban',
  },
  {
    time: '17:00',
    icon: Camera,
    title: 'Post para la noche',
    description: 'LikeEat sugiere el post de hoy basado en una efeméride local. Aprobado en un click.',
    app: 'LikeEat',
    appColor: 'bg-pink-500',
    tenant: 'Tigre',
    mockup: 'post',
  },
  {
    time: '23:00',
    icon: Wrench,
    title: 'Cierre y revisiones',
    description: 'MaintainEat alerta que la cámara fría necesita revisión. Técnico agendado para mañana.',
    app: 'MaintainEat',
    appColor: 'bg-amber-500',
    tenant: 'El Toro',
    mockup: 'alerta',
  },
]

export function ADayWithEatCorp() {
  return (
    <section className="py-24 px-4 bg-brand-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Un día con EatCorp
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Así se vive un día normal
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Desde que abre el restorán hasta que cierra, cada momento conectado.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-700 via-primary-500 to-primary-700 -translate-x-px"></div>

          <div className="space-y-12">
            {moments.map((m, i) => {
              const Icon = m.icon
              const isLeft = i % 2 === 0
              return (
                <div key={m.time} className={`relative flex md:items-center gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block flex-1"></div>

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-950 border-4 border-primary-500 shadow-lg shadow-primary-500/40 flex items-center justify-center z-10 ring-4 ring-primary-500/10 hover:ring-primary-400/30 transition">
                    <Icon size={20} className="text-primary-300" />
                  </div>

                  <div className="ml-20 md:ml-0 flex-1">
                    <div className={`bg-brand-800 border border-brand-700 rounded-xl shadow-lg shadow-black/40 overflow-hidden hover:border-primary-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/10 transition-all ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-mono font-bold text-primary-300 bg-primary-500/15 border border-primary-500/30 px-2 py-0.5 rounded shadow-sm shadow-primary-500/20">{m.time}</span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider text-white ${m.appColor} px-2 py-0.5 rounded shadow-sm`}>{m.app}</span>
                          <span className="text-[10px] font-semibold text-neutral-600 uppercase tracking-wide">@ {m.tenant}</span>
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-1">{m.title}</h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">{m.description}</p>
                      </div>
                      <MiniMockup type={m.mockup} />
                    </div>
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

function MiniMockup({ type }: { type: Moment['mockup'] }) {
  if (type === 'recepcion') {
    return (
      <div className="border-t border-brand-700 bg-gradient-to-br from-blue-500/10 to-transparent px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <Truck size={16} className="text-blue-300" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-neutral-900">Factura Distribuidora Central</div>
            <div className="text-[9px] text-neutral-600">$1.240.000 · 12 ítems</div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wide bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded animate-pulse">
            Discrepancia
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-neutral-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Detectado: 2 unidades menos en aceite oliva</span>
        </div>
      </div>
    )
  }

  if (type === 'pagos') {
    return (
      <div className="border-t border-brand-700 bg-gradient-to-br from-blue-500/10 to-transparent px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <div className="text-[10px] font-semibold text-neutral-800">Lote del día</div>
          <span className="text-[9px] text-neutral-600">8 facturas</span>
        </div>
        <div className="space-y-1">
          {['Distribuidora Central', 'Carnes del Sur', 'Bebidas Nacional'].map((n, i) => (
            <div key={n} className="flex items-center gap-1.5 text-[10px]">
              <div className="w-3 h-3 rounded-sm bg-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/40"><Check size={8} className="text-white" strokeWidth={3} /></div>
              <span className="flex-1 truncate text-neutral-700">{n}</span>
              <span className="text-neutral-600">${(i + 1) * 480}K</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-brand-700 flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-900">Total $2.640.500</span>
          <span className="text-[9px] font-bold uppercase bg-blue-600 text-white px-2 py-0.5 rounded shadow-sm shadow-blue-500/30">Aprobado</span>
        </div>
      </div>
    )
  }

  if (type === 'kanban') {
    return (
      <div className="border-t border-brand-700 bg-gradient-to-br from-primary-500/10 to-transparent px-4 py-3">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { name: 'Por hacer', color: 'bg-brand-900 border-brand-700', count: 3 },
            { name: 'En curso', color: 'bg-amber-500/15 border-amber-500/30', count: 2, highlight: true },
            { name: 'Listas', color: 'bg-primary-500/15 border-primary-500/30', count: 4 },
          ].map((c) => (
            <div key={c.name} className={`${c.color} border rounded-md p-1.5 ${c.highlight ? 'ring-1 ring-amber-500/40' : ''}`}>
              <div className="text-[8px] font-bold uppercase text-neutral-800">{c.name}</div>
              <div className="mt-1 space-y-0.5">
                {Array.from({ length: c.count }).map((_, j) => (
                  <div key={j} className="h-1.5 bg-brand-800 rounded-sm border border-brand-700"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[9px] text-primary-300 font-semibold flex items-center gap-1">
          <span>→</span>
          <span>"Inventario semanal" pasó a En curso</span>
        </div>
      </div>
    )
  }

  if (type === 'post') {
    return (
      <div className="border-t border-brand-700 bg-gradient-to-br from-pink-500/10 to-transparent px-4 py-3">
        <div className="flex gap-2.5">
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-pink-500/30">
            <Wine size={22} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <Sparkles size={9} className="text-pink-400 animate-pulse" />
              <span className="text-[9px] font-bold uppercase text-pink-300">Generando…</span>
            </div>
            <div className="text-[10px] text-neutral-800 leading-snug line-clamp-2">
              &ldquo;Esta noche, una copa que abraza. Reservas mesa para hoy en Tigre&rdquo;
            </div>
            <div className="flex gap-1 mt-1">
              <span className="text-[9px] text-pink-400">#tigre</span>
              <span className="text-[9px] text-pink-400">#vitacura</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // alerta
  return (
    <div className="border-t border-brand-700 bg-gradient-to-br from-rose-500/10 to-transparent px-4 py-3">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
          <AlertTriangle size={16} className="text-rose-300 animate-pulse" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-neutral-900">Cámara fría #1</div>
          <div className="text-[9px] text-neutral-600">Revisión vencida hace 4 días · técnico JC asignado</div>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-wide bg-rose-500/20 text-rose-300 border border-rose-500/30 px-1.5 py-0.5 rounded">Mañana</span>
      </div>
    </div>
  )
}
