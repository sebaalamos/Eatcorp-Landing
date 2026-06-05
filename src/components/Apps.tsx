'use client'

import {
  AlertTriangle,
  Sparkles,
  Check,
  QrCode,
  Camera,
  Wrench,
  Coins,
  Boxes,
  ChefHat,
  Gift,
} from 'lucide-react'
import { PRODUCTS_LIST, type Product, type ProductSlug } from '@/lib/products'

type Accent = 'blue' | 'emerald' | 'pink' | 'amber' | 'cyan' | 'violet' | 'rose' | 'orange' | 'yellow' | 'teal'
type Preview = Product['preview']

type AppDef = {
  id: ProductSlug
  icon: Product['icon']
  name: string
  description: string
  metric: string
  accent: Accent
  external: boolean
  externalUrl?: string
  pilot?: boolean
  preview: Preview
}

// Fuente de verdad única: la grilla se deriva del catálogo (PRODUCTS_LIST),
// para que la home nunca se desincronice de /productos ni del mega-menú.
const apps: AppDef[] = PRODUCTS_LIST.map((p) => ({
  id: p.slug,
  icon: p.icon,
  name: p.name,
  description: p.tagline,
  metric: p.oneLiner.split('·')[0].trim(),
  accent: p.accentClass as Accent,
  external: p.external,
  externalUrl: p.externalUrl,
  pilot: p.pilot,
  preview: p.preview,
}))

const accentClasses: Record<Accent, string> = {
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-400',
  emerald: 'bg-primary-500/10 text-primary-300 border-primary-500/30 hover:border-primary-400',
  pink: 'bg-pink-500/10 text-pink-300 border-pink-500/30 hover:border-pink-400',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:border-rose-400',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/30 hover:border-orange-400',
  yellow: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30 hover:border-yellow-400',
  teal: 'bg-teal-500/10 text-teal-300 border-teal-500/30 hover:border-teal-400',
}

export function AppsGrid() {
  const handleAppClick = (app: AppDef) => {
    window.location.href = `/productos/${app.id}`
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {apps.map((app) => {
        const Icon = app.icon
        return (
          <button
            key={app.id}
            onClick={() => handleAppClick(app)}
            className={`group relative rounded-xl border-2 transition-all duration-300 text-left overflow-hidden ${accentClasses[app.accent]} hover:shadow-2xl hover:shadow-current/20 hover:-translate-y-1 hover:scale-[1.02]`}
          >
            <AppPreview type={app.preview} accent={app.accent} />
            <div className="p-4 relative bg-brand-950/40 backdrop-blur-[2px]">
              {(app.external || app.pilot) && (
                <span className="absolute top-2 right-2 text-[9px] font-semibold uppercase tracking-wide text-neutral-600 bg-brand-950/80 border border-brand-700 px-1.5 py-0.5 rounded-full">
                  {app.external ? 'Externa' : 'Piloto'}
                </span>
              )}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-brand-950/80 shadow-sm border border-current/30">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-neutral-900 leading-tight">{app.name}</h3>
                  <p className="text-[11px] text-neutral-600 truncate">{app.description}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide bg-brand-950/60 backdrop-blur px-2 py-1 rounded-full border border-current/20">
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span>{app.metric}</span>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

const previewBg: Record<Accent, string> = {
  blue: 'from-blue-500/40 via-blue-500/15 to-transparent',
  emerald: 'from-primary-500/40 via-primary-500/15 to-transparent',
  pink: 'from-pink-500/40 via-pink-500/15 to-transparent',
  amber: 'from-amber-500/40 via-amber-500/15 to-transparent',
  cyan: 'from-cyan-500/40 via-cyan-500/15 to-transparent',
  violet: 'from-violet-500/40 via-violet-500/15 to-transparent',
  rose: 'from-rose-500/40 via-rose-500/15 to-transparent',
  orange: 'from-orange-500/40 via-orange-500/15 to-transparent',
  yellow: 'from-yellow-500/40 via-yellow-500/15 to-transparent',
  teal: 'from-teal-500/40 via-teal-500/15 to-transparent',
}

function AppPreview({ type, accent }: { type: Preview; accent: Accent }) {
  return (
    <div className={`h-28 px-3 pt-3 pb-2 bg-gradient-to-b ${previewBg[accent]} relative overflow-hidden border-b border-current/10`}>
      <div className="transition-transform duration-500 group-hover:scale-[1.03] origin-bottom h-full">
        {type === 'invoices' && <InvoicesPreview />}
        {type === 'kanban' && <KanbanPreview />}
        {type === 'post' && <PostPreview />}
        {type === 'assets' && <AssetsPreview />}
        {type === 'calendar' && <CalendarPreview />}
        {type === 'roster' && <RosterPreview />}
        {type === 'events' && <EventsPreview />}
        {type === 'menu' && <MenuPreview />}
        {type === 'tips' && <TipsPreview />}
        {type === 'inventory' && <InventoryPreview />}
        {type === 'recipes' && <RecipesPreview />}
        {type === 'sales' && <SalesPreview />}
        {type === 'gift' && <GiftPreview />}
      </div>
    </div>
  )
}

function TipsPreview() {
  const rows = [
    { initials: 'JR', share: 'w-3/4' },
    { initials: 'PC', share: 'w-3/5' },
    { initials: 'MA', share: 'w-1/2' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8px] font-bold uppercase tracking-wider text-yellow-300">Ciclo · sem 19</span>
        <span className="text-[8px] font-bold text-yellow-200 bg-yellow-500/30 border border-yellow-400/40 px-1 rounded tabular-nums">$752K</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-1.5 bg-brand-950/70 border border-yellow-500/20 rounded px-1.5 py-1">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-[7px] font-bold flex-shrink-0">
            {r.initials}
          </div>
          <div className="flex-1 h-1 bg-brand-800 rounded-full overflow-hidden">
            <div className={`h-full ${r.share} bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full`}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

function InvoicesPreview() {
  const rows = [
    { name: 'Distribuidora', amount: '$1.2M', status: 'check' },
    { name: 'Carnes del Sur', amount: '$680K', status: 'check' },
    { name: 'Bebidas Nac.', amount: '$720K', status: 'check' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8px] font-bold uppercase tracking-wider text-blue-300">Lote del día</span>
        <span className="text-[8px] font-bold text-blue-200 bg-blue-500/30 border border-blue-400/40 px-1 rounded">3</span>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="flex items-center gap-1.5 bg-brand-950/70 border border-blue-500/20 rounded px-1.5 py-1">
          <div className="w-3 h-3 rounded-sm bg-blue-500 flex items-center justify-center flex-shrink-0">
            <Check size={8} className="text-white" strokeWidth={3} />
          </div>
          <span className="text-[9px] text-neutral-800 flex-1 truncate font-medium">{r.name}</span>
          <span className="text-[9px] font-bold text-blue-200 tabular-nums">{r.amount}</span>
        </div>
      ))}
      <div className="mt-auto flex items-center justify-between text-[8px] pt-0.5">
        <span className="text-neutral-700">Total <span className="font-bold text-white">$2.6M</span></span>
        <span className="font-bold uppercase tracking-wide text-white bg-blue-600 px-1.5 py-0.5 rounded shadow-sm shadow-blue-500/40">Aprobar</span>
      </div>
    </div>
  )
}

function KanbanPreview() {
  const cols = [
    { name: 'Por hacer', count: 3, accent: 'bg-brand-700/70 border-brand-600' },
    { name: 'En curso', count: 2, accent: 'bg-amber-500/20 border-amber-500/40' },
    { name: 'Listas', count: 4, accent: 'bg-primary-500/20 border-primary-500/40' },
  ]
  return (
    <div className="h-full grid grid-cols-3 gap-1.5">
      {cols.map((c) => (
        <div key={c.name} className={`rounded p-1 border ${c.accent} flex flex-col gap-0.5`}>
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold uppercase tracking-wider text-neutral-800 truncate">{c.name}</span>
            <span className="text-[7px] font-bold text-neutral-700">{c.count}</span>
          </div>
          {Array.from({ length: Math.min(c.count, 3) }).map((_, j) => (
            <div key={j} className="h-2 rounded-sm bg-brand-950/70 border border-white/10"></div>
          ))}
        </div>
      ))}
    </div>
  )
}

function PostPreview() {
  return (
    <div className="h-full flex gap-2">
      <div className="aspect-square h-full rounded-md bg-gradient-to-br from-pink-300 via-rose-400 to-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 relative overflow-hidden">
        <Camera size={18} className="text-rose-900/70" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-1 left-1 inline-flex items-center gap-0.5 bg-pink-600/90 text-white text-[7px] font-bold px-1 py-0.5 rounded-full">
          <Sparkles size={7} />
          IA
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
          <span className="text-[8px] font-bold text-neutral-800 truncate">tu_restorán</span>
        </div>
        <div className="space-y-0.5">
          <div className="h-1 bg-pink-300/70 rounded-full"></div>
          <div className="h-1 bg-pink-300/50 rounded-full w-3/4"></div>
          <div className="h-1 bg-pink-300/40 rounded-full w-1/2"></div>
        </div>
        <div className="flex gap-1 mt-auto">
          <span className="text-[7px] text-pink-300">#pasta</span>
          <span className="text-[7px] text-pink-300">#santiago</span>
        </div>
      </div>
    </div>
  )
}

function AssetsPreview() {
  const items = [
    { name: 'Horno', tone: 'bg-primary-500/30 text-primary-200 border-primary-500/40', icon: false, w: 'w-1/3', barColor: 'bg-primary-400' },
    { name: 'Cámara fría', tone: 'bg-rose-500/30 text-rose-200 border-rose-500/50', icon: true, w: 'w-full', barColor: 'bg-rose-500' },
    { name: 'Lavavajillas', tone: 'bg-amber-500/30 text-amber-200 border-amber-500/40', icon: false, w: 'w-2/3', barColor: 'bg-amber-400' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      {items.map((it) => (
        <div key={it.name} className="flex items-center gap-1.5 bg-brand-950/70 border border-amber-500/15 rounded px-1.5 py-1">
          <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${it.tone} border`}>
            {it.icon ? <AlertTriangle size={10} className="animate-pulse" /> : <Wrench size={10} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-medium text-neutral-800 truncate">{it.name}</div>
            <div className="h-1 bg-brand-800 rounded-full overflow-hidden mt-0.5">
              <div className={`h-full ${it.barColor} rounded-full ${it.w}`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CalendarPreview() {
  const days = Array.from({ length: 21 })
  const reserved = [3, 7, 9, 12, 14, 17]
  const today = 9
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-wider text-cyan-300">Reservas hoy</span>
        <span className="text-[8px] font-bold text-cyan-200 bg-cyan-500/30 border border-cyan-400/40 px-1 rounded">12</span>
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-sm ${
              i === today
                ? 'bg-cyan-500 ring-1 ring-cyan-300'
                : reserved.includes(i)
                ? 'bg-cyan-500/40'
                : 'bg-brand-950/70 border border-cyan-500/10'
            }`}
          ></div>
        ))}
      </div>
      <div className="flex items-center gap-1 text-[8px] text-neutral-700 mt-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        <span>20:30 · Mesa 4 · 6 pax</span>
      </div>
    </div>
  )
}

function RosterPreview() {
  const people = [
    { initials: 'PR', shift: 'AM', color: 'bg-violet-500' },
    { initials: 'JC', shift: 'AM', color: 'bg-violet-400' },
    { initials: 'MA', shift: 'PM', color: 'bg-violet-600' },
    { initials: 'CE', shift: 'PM', color: 'bg-violet-300' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-wider text-violet-300">Turno hoy</span>
        <span className="text-[8px] font-bold text-violet-200 bg-violet-500/30 border border-violet-400/40 px-1 rounded">4</span>
      </div>
      {people.map((p) => (
        <div key={p.initials} className="flex items-center gap-1.5 bg-brand-950/70 border border-violet-500/15 rounded px-1.5 py-1">
          <div className={`w-4 h-4 rounded-full ${p.color} flex items-center justify-center text-white text-[7px] font-bold flex-shrink-0`}>
            {p.initials}
          </div>
          <div className="h-1 bg-violet-500/30 rounded-full flex-1"></div>
          <span className="text-[7px] font-bold text-violet-200 bg-violet-500/20 border border-violet-500/30 px-1 rounded">{p.shift}</span>
        </div>
      ))}
    </div>
  )
}

function EventsPreview() {
  const events = [
    { date: '12', month: 'MAY', name: 'Cumpleaños · 24p', tone: 'bg-rose-500' },
    { date: '17', month: 'MAY', name: 'Corporativo · 60p', tone: 'bg-rose-400' },
    { date: '24', month: 'MAY', name: 'Privado · 12p', tone: 'bg-rose-300' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-wider text-rose-300">Próximos eventos</span>
        <span className="text-[8px] font-bold text-rose-200 bg-rose-500/30 border border-rose-400/40 px-1 rounded">3</span>
      </div>
      {events.map((e) => (
        <div key={e.date} className="flex items-center gap-1.5 bg-brand-950/70 border border-rose-500/15 rounded px-1.5 py-1">
          <div className={`w-7 h-7 rounded flex flex-col items-center justify-center flex-shrink-0 ${e.tone} text-white shadow-sm`}>
            <span className="text-[10px] font-bold leading-none tabular-nums">{e.date}</span>
            <span className="text-[6px] font-bold tracking-wider opacity-80 leading-none mt-px">{e.month}</span>
          </div>
          <div className="text-[9px] text-neutral-800 truncate flex-1">{e.name}</div>
        </div>
      ))}
    </div>
  )
}

function MenuPreview() {
  const items = [
    { name: 'Pasta de la nona', price: '$12.5K' },
    { name: 'Asado tira', price: '$18.9K' },
    { name: 'Empanada queso', price: '$3.5K' },
  ]
  return (
    <div className="h-full flex gap-2">
      <div className="w-16 h-full rounded-md bg-white/95 flex items-center justify-center flex-shrink-0 shadow-md relative overflow-hidden">
        <QrCode size={36} className="text-orange-900" strokeWidth={1.25} />
        <div className="absolute bottom-0.5 left-0 right-0 text-center text-[6px] font-bold text-orange-900 leading-none">
          ESCANEAR
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <span className="text-[8px] font-bold uppercase tracking-wider text-orange-300">Carta · ES</span>
        {items.map((it) => (
          <div key={it.name} className="flex items-center justify-between gap-1 bg-brand-950/70 border border-orange-500/20 rounded px-1.5 py-0.5">
            <span className="text-[8px] text-neutral-800 truncate">{it.name}</span>
            <span className="text-[8px] font-bold text-orange-300 tabular-nums">{it.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function InventoryPreview() {
  const rows = [
    { name: 'Aceite oliva', w: 'w-1/3', bar: 'bg-amber-400' },
    { name: 'Filete de res', w: 'w-full', bar: 'bg-teal-400' },
    { name: 'Vino cabernet', w: 'w-1/4', bar: 'bg-rose-500' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8px] font-bold uppercase tracking-wider text-teal-300">Stock · bodegas</span>
        <span className="text-[8px] font-bold text-teal-200 bg-teal-500/30 border border-teal-400/40 px-1 rounded">2 alertas</span>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="flex items-center gap-1.5 bg-brand-950/70 border border-teal-500/20 rounded px-1.5 py-1">
          <Boxes size={10} className="text-teal-300 flex-shrink-0" />
          <span className="text-[9px] text-neutral-800 flex-1 truncate">{r.name}</span>
          <div className="w-10 h-1 bg-brand-800 rounded-full overflow-hidden">
            <div className={`h-full ${r.w} ${r.bar} rounded-full`}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

function RecipesPreview() {
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8px] font-bold uppercase tracking-wider text-orange-300">Ficha técnica</span>
        <span className="text-[8px] font-bold text-orange-200 bg-orange-500/30 border border-orange-400/40 px-1 rounded">v3</span>
      </div>
      <div className="flex gap-1.5">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 flex items-center justify-center text-white font-bold text-base shadow-sm flex-shrink-0">
          P
        </div>
        <div className="grid grid-cols-2 gap-1 flex-1 min-w-0">
          <div className="bg-brand-950/70 border border-orange-500/20 rounded px-1 py-0.5">
            <div className="text-[7px] uppercase text-neutral-600">Costo</div>
            <div className="text-[9px] font-bold text-neutral-900 tabular-nums">$1.510</div>
          </div>
          <div className="bg-primary-500/10 border border-primary-500/30 rounded px-1 py-0.5">
            <div className="text-[7px] uppercase text-primary-300">Margen</div>
            <div className="text-[9px] font-bold text-primary-300 tabular-nums">87.9%</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-brand-950/70 border border-orange-500/20 rounded px-1.5 py-1 mt-auto">
        <ChefHat size={10} className="text-orange-300 flex-shrink-0" />
        <span className="text-[8px] text-neutral-700 truncate">Venta descuenta stock auto</span>
      </div>
    </div>
  )
}

function SalesPreview() {
  const kpis = [
    { label: 'Ventas', value: '$842K' },
    { label: 'Ticket', value: '$17.9K' },
    { label: 'Margen', value: '62%' },
  ]
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8px] font-bold uppercase tracking-wider text-primary-300">Ventas de hoy</span>
        <span className="text-[8px] font-bold text-primary-200 bg-primary-500/30 border border-primary-400/40 px-1 rounded">47</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {kpis.map((k) => (
          <div key={k.label} className="bg-brand-950/70 border border-primary-500/20 rounded px-1 py-1 text-center">
            <div className="text-[9px] font-bold text-neutral-900 tabular-nums leading-none">{k.value}</div>
            <div className="text-[7px] uppercase tracking-wider text-neutral-600 mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 bg-brand-950/70 border border-primary-500/20 rounded px-1.5 py-1 mt-auto">
        <Coins size={10} className="text-primary-300 flex-shrink-0" />
        <span className="text-[8px] text-neutral-700 truncate">Cada venta descuenta stock</span>
      </div>
    </div>
  )
}

function GiftPreview() {
  return (
    <div className="h-full flex flex-col gap-1">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[8px] font-bold uppercase tracking-wider text-rose-300">Gift card</span>
        <span className="text-[8px] font-bold text-rose-200 bg-rose-500/30 border border-rose-400/40 px-1 rounded">PIN</span>
      </div>
      <div className="relative rounded-md bg-gradient-to-br from-rose-500 to-red-600 p-2 shadow-sm shadow-rose-500/30 overflow-hidden flex-1 flex flex-col justify-between">
        <div aria-hidden className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white/10"></div>
        <div className="flex items-center justify-between relative">
          <span className="text-[7px] font-bold uppercase tracking-widest text-white/80">Gift card</span>
          <Gift size={11} className="text-white/90" />
        </div>
        <div className="relative">
          <div className="text-[7px] text-white/70 uppercase tracking-wider">Saldo</div>
          <div className="text-sm font-bold text-white tabular-nums leading-none">$18.000</div>
        </div>
        <span className="text-[7px] font-mono text-white/80 tracking-widest relative">GIFT-7QK2-····</span>
      </div>
    </div>
  )
}

