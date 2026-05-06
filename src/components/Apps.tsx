'use client'

import { ShoppingCart, CheckSquare, Share2, Wrench, Calendar, Users, Camera } from 'lucide-react'

type AppDef = {
  id: string
  icon: typeof ShoppingCart
  name: string
  description: string
  metric: string
  accent: 'blue' | 'emerald' | 'pink' | 'amber' | 'cyan' | 'violet'
  external: boolean
  preview: 'invoices' | 'kanban' | 'post' | 'assets' | 'calendar' | 'roster'
}

const apps: AppDef[] = [
  { id: 'buyeat', icon: ShoppingCart, name: 'BuyEat', description: 'Compras a proveedores', metric: 'Lotes en 5 min', accent: 'blue', external: false, preview: 'invoices' },
  { id: 'taskeat', icon: CheckSquare, name: 'TaskEat', description: 'Tareas y equipos', metric: 'Visibilidad híbrida', accent: 'emerald', external: false, preview: 'kanban' },
  { id: 'likeeat', icon: Share2, name: 'LikeEat', description: 'RRSS con IA', metric: 'Captions en 3s', accent: 'pink', external: false, preview: 'post' },
  { id: 'maintaineat', icon: Wrench, name: 'MaintainEat', description: 'Activos y mantención', metric: 'Cero parada sorpresa', accent: 'amber', external: false, preview: 'assets' },
  { id: 'bookeat', icon: Calendar, name: 'BookEat', description: 'Reservas en línea', metric: 'Mesa al día', accent: 'cyan', external: true, preview: 'calendar' },
  { id: 'staffeat', icon: Users, name: 'StaffEat', description: 'Gestión de personal', metric: 'Turnos al instante', accent: 'violet', external: true, preview: 'roster' },
]

const accentClasses: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-400',
  emerald: 'bg-primary-500/10 text-primary-300 border-primary-500/30 hover:border-primary-400',
  pink: 'bg-pink-500/10 text-pink-300 border-pink-500/30 hover:border-pink-400',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400',
}

export function AppsGrid() {
  const handleAppClick = (appId: string, external: boolean) => {
    if (external) return
    window.location.href = `https://app.eatcorp.cl/#/${appId}`
  }

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {apps.map((app) => {
        const Icon = app.icon
        return (
          <button
            key={app.id}
            onClick={() => handleAppClick(app.id, app.external)}
            className={`group relative rounded-xl border-2 transition-all duration-300 text-left overflow-hidden ${accentClasses[app.accent]} hover:shadow-2xl hover:shadow-current/20 hover:-translate-y-1 hover:scale-[1.02] [transform:perspective(1000px)] [&:hover]:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_translateY(-4px)_scale(1.02)]`}
          >
            <AppPreview type={app.preview} accent={app.accent} />
            <div className="p-5">
              {app.external && (
                <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-600 bg-brand-950/80 border border-brand-700 px-2 py-0.5 rounded-full">Externa</span>
              )}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-brand-950/60 shadow-sm border border-current/30">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">{app.name}</h3>
                  <p className="text-[11px] text-neutral-600">{app.description}</p>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide bg-brand-950/60 backdrop-blur px-2 py-1 rounded-full">
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

function AppPreview({ type, accent }: { type: AppDef['preview']; accent: string }) {
  const bgMap: Record<string, string> = {
    blue: 'from-blue-500/30 via-blue-500/10 to-transparent',
    emerald: 'from-primary-500/30 via-primary-500/10 to-transparent',
    pink: 'from-pink-500/30 via-pink-500/10 to-transparent',
    amber: 'from-amber-500/30 via-amber-500/10 to-transparent',
    cyan: 'from-cyan-500/30 via-cyan-500/10 to-transparent',
    violet: 'from-violet-500/30 via-violet-500/10 to-transparent',
  }

  return (
    <div className={`h-16 px-3 pt-3 pb-1 bg-gradient-to-b ${bgMap[accent]} relative overflow-hidden`}>
      <div className="transition-transform duration-500 group-hover:scale-105 origin-bottom h-full">
        {type === 'invoices' && <InvoicesPreview />}
        {type === 'kanban' && <KanbanPreview />}
        {type === 'post' && <PostPreview />}
        {type === 'assets' && <AssetsPreview />}
        {type === 'calendar' && <CalendarPreview />}
        {type === 'roster' && <RosterPreview />}
      </div>
    </div>
  )
}

function InvoicesPreview() {
  return (
    <div className="space-y-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-2 bg-white/80 rounded flex items-center justify-between px-1">
          <div className="h-1 w-12 bg-blue-300 rounded"></div>
          <div className="h-1 w-6 bg-blue-500 rounded"></div>
        </div>
      ))}
    </div>
  )
}

function KanbanPreview() {
  return (
    <div className="grid grid-cols-3 gap-1 h-full">
      {[2, 3, 1].map((c, i) => (
        <div key={i} className="bg-white/80 rounded p-1">
          <div className="h-0.5 w-2/3 bg-primary-400 rounded mb-1"></div>
          <div className="space-y-0.5">
            {Array.from({ length: c }).map((_, j) => (
              <div key={j} className="h-1.5 bg-primary-100 rounded"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function PostPreview() {
  return (
    <div className="flex gap-1.5 h-full">
      <div className="aspect-square h-full rounded bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center flex-shrink-0">
          <Camera size={10} className="text-rose-700" />
        </div>
      <div className="flex-1 space-y-1 pt-1">
        <div className="h-1 bg-pink-300 rounded w-full"></div>
        <div className="h-1 bg-pink-200 rounded w-3/4"></div>
        <div className="h-1 bg-pink-100 rounded w-1/2"></div>
        <div className="flex gap-0.5">
          <div className="h-1 w-3 bg-pink-400 rounded"></div>
          <div className="h-1 w-4 bg-pink-400 rounded"></div>
        </div>
      </div>
    </div>
  )
}

function AssetsPreview() {
  const items = [
    { color: 'bg-primary-400', w: 'w-1/3' },
    { color: 'bg-rose-400', w: 'w-full' },
    { color: 'bg-amber-400', w: 'w-3/4' },
  ]
  return (
    <div className="space-y-1">
      {items.map((it, i) => (
        <div key={i} className="bg-white/80 rounded h-3 flex items-center px-1 gap-1">
          <Wrench size={6} className="text-amber-600 flex-shrink-0" />
          <div className="flex-1 h-0.5 bg-slate-200 rounded overflow-hidden">
            <div className={`h-full ${it.color} ${it.w}`}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CalendarPreview() {
  return (
    <div className="grid grid-cols-7 gap-0.5 h-full">
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className={`rounded-sm ${[2, 5, 8, 11].includes(i) ? 'bg-cyan-400' : 'bg-white/70'}`}
        ></div>
      ))}
    </div>
  )
}

function RosterPreview() {
  return (
    <div className="flex gap-1 h-full items-center">
      {['bg-violet-400', 'bg-violet-300', 'bg-violet-500', 'bg-violet-400', 'bg-violet-300'].map((c, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className={`w-3 h-3 rounded-full ${c}`}></div>
          <div className="w-3 h-1 bg-white/80 rounded"></div>
        </div>
      ))}
    </div>
  )
}
