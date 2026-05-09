import { CalendarCheck, ChefHat, Sparkles, Clock, Star } from 'lucide-react'

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
  const accent =
    color.includes('primary') ? 'rgb(16,185,129)' : color.includes('orange') ? 'rgb(249,115,22)' : 'rgb(139,92,246)'

  if (type === 'roster') return <RosterBlueprint accent={accent} />
  if (type === 'recipes') return <RecipesBlueprint accent={accent} />
  return <LoyaltyBlueprint accent={accent} />
}

function RosterBlueprint({ accent }: { accent: string }) {
  // Marcaje semanal: filas = personas, columnas = días lun-dom; checks por turno cumplido
  const people = ['PR', 'JC', 'MA']
  const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const matrix = [
    [true, true, true, true, true, false, false],
    [true, true, false, true, true, true, false],
    [false, true, true, true, true, true, true],
  ]

  return (
    <div className="h-36 px-5 pt-4 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">Asistencia · esta semana</div>
        <div className="flex items-center gap-1 text-[9px] text-primary-300 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></span>
          17/21
        </div>
      </div>

      <div className="grid gap-1" style={{ gridTemplateColumns: '20px repeat(7, 1fr)' }}>
        <div></div>
        {week.map((d, i) => (
          <div key={i} className="text-[8px] text-center font-bold text-neutral-600 uppercase tracking-wider">
            {d}
          </div>
        ))}
        {people.map((p, pi) => (
          <Row key={p} initials={p} cells={matrix[pi]} accent={accent} />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between text-[8px] text-neutral-600">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></span>
          <span>Clock-in en mobile</span>
        </div>
        <div className="px-1.5 py-0.5 rounded bg-brand-900/80 border border-brand-700 font-mono">06:42</div>
      </div>
    </div>
  )
}

function Row({ initials, cells, accent }: { initials: string; cells: boolean[]; accent: string }) {
  return (
    <>
      <div className="text-[8px] font-bold text-center text-neutral-700 leading-[1.4rem]">{initials}</div>
      {cells.map((c, i) => (
        <div
          key={i}
          className="aspect-square rounded-sm border border-brand-700 flex items-center justify-center"
          style={{
            background: c ? accent : 'transparent',
            opacity: c ? 0.7 : 1,
            animation: `slide-up 0.4s ease-out ${i * 0.04}s backwards`,
          }}
        >
          {c && <span className="text-[7px] text-white font-bold leading-none">✓</span>}
        </div>
      ))}
    </>
  )
}

function RecipesBlueprint({ accent }: { accent: string }) {
  // Ficha técnica de un plato: thumbnail + ingredientes con cantidades + costo / margen
  return (
    <div className="h-36 px-5 pt-4 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">Ficha técnica</div>
        <div className="text-[8px] font-mono text-neutral-600">N°042</div>
      </div>

      <div className="flex gap-2">
        <div
          className="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 shadow-inner"
          style={{ background: `linear-gradient(135deg, ${accent}, rgba(0,0,0,0.4))` }}
        >
          <ChefHat size={20} className="text-white opacity-80" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold text-neutral-800 truncate mb-0.5">Pasta de la nona</div>
          <div className="space-y-0.5">
            {[
              { l: 'Pasta', q: '180g', w: 0.7 },
              { l: 'Salsa', q: '120g', w: 0.55 },
              { l: 'Albahaca', q: '5g', w: 0.2 },
            ].map((ing) => (
              <div key={ing.l} className="flex items-center gap-1">
                <div className="text-[7px] text-neutral-700 w-12 truncate">{ing.l}</div>
                <div className="flex-1 h-1 rounded-full bg-brand-800 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${ing.w * 100}%`, background: accent, opacity: 0.7 }}
                  ></div>
                </div>
                <div className="text-[7px] font-mono text-neutral-600 w-8 text-right">{ing.q}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-[8px]">
        <div className="px-1.5 py-0.5 rounded bg-brand-900/80 border border-brand-700">
          <span className="text-neutral-600">Costo</span> <span className="font-bold text-neutral-300 tabular-nums">$3.4K</span>
        </div>
        <div
          className="px-1.5 py-0.5 rounded font-bold tabular-nums"
          style={{ background: `${accent}26`, border: `1px solid ${accent}55`, color: accent }}
        >
          +72% margen
        </div>
      </div>
    </div>
  )
}

function LoyaltyBlueprint({ accent }: { accent: string }) {
  // Tarjeta digital de fidelidad: cliente + puntos + recompensas
  return (
    <div className="h-36 px-5 pt-4 pb-2 relative overflow-hidden bg-gradient-to-b from-brand-800/40 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">Cliente fiel</div>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={9}
              fill={s <= 4 ? accent : 'transparent'}
              stroke={accent}
              strokeWidth={1.5}
              opacity={s <= 4 ? 0.85 : 0.4}
            />
          ))}
        </div>
      </div>

      <div
        className="rounded-md p-2 mb-1.5 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }}
      >
        <div className="absolute -right-2 -top-2 w-12 h-12 rounded-full" style={{ background: accent, opacity: 0.15 }}></div>
        <div className="flex items-center gap-1.5 mb-1">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[7px] font-bold"
            style={{ background: accent, opacity: 0.85 }}
          >
            CV
          </div>
          <div className="text-[9px] font-bold text-neutral-800">Camila V.</div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold tabular-nums" style={{ color: accent }}>
            240
          </span>
          <span className="text-[8px] text-neutral-700">puntos · faltan 60 para postre</span>
        </div>
        <div className="mt-1 h-1 rounded-full bg-brand-800 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: '80%',
              background: accent,
              opacity: 0.75,
              animation: 'fill-bar 1.4s cubic-bezier(0.4,0,0.2,1) 0.4s backwards',
            }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[8px] text-neutral-600">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></span>
          <span>12 visitas · ene–mayo</span>
        </div>
        <span className="font-mono px-1 rounded bg-brand-900/80 border border-brand-700">+3 esta sem.</span>
      </div>
    </div>
  )
}
