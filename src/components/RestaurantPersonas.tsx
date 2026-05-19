import Link from 'next/link'
import { ArrowRight, Store, Building2, Sparkles, Wine } from 'lucide-react'
import { PRODUCTS, type ProductSlug } from '@/lib/products'

type Persona = {
  id: string
  icon: typeof Store
  label: string
  vibe: string
  description: string
  apps: ProductSlug[]
  gradient: string
  accentBg: string
  accentBorder: string
  accentText: string
}

const personas: Persona[] = [
  {
    id: 'barrio',
    icon: Store,
    label: 'Restorán de barrio',
    vibe: 'Un local · 5–15 colaboradores',
    description:
      'Familiar, conocido, lleno los fines de semana. La cocina la maneja una persona y la admin la otra. Necesitas coordinar el equipo y mostrar tu carta sin gastar en imprenta.',
    apps: ['taskeat', 'menueat', 'maintaineat', 'tipeat'],
    gradient: 'from-primary-500 to-teal-500',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
    accentText: 'text-primary-300',
  },
  {
    id: 'cadena',
    icon: Building2,
    label: 'Cadena en crecimiento',
    vibe: '3–8 locales · 20–80 colaboradores',
    description:
      'Estás abriendo el tercer local y el Excel se quebró. Necesitas visibilidad consolidada de compras, stock multi-bodega cuadrado, equipo distribuido y mantención preventiva en todos los locales.',
    apps: ['buyeat', 'inventeat', 'taskeat', 'maintaineat'],
    gradient: 'from-blue-500 to-cyan-500',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
    accentText: 'text-blue-300',
  },
  {
    id: 'fine',
    icon: Sparkles,
    label: 'Fine dining / alta gama',
    vibe: 'Un local o pocos · ticket alto · eventos',
    description:
      'Cuidas mucho cada experiencia. Recibes eventos privados grandes, tu carta tiene fichas técnicas con costo real, tu marca importa en RRSS. Necesitas margen real por evento y por plato.',
    apps: ['recipeat', 'eventeat', 'menueat', 'likeeat'],
    gradient: 'from-rose-500 to-amber-500',
    accentBg: 'bg-rose-500/15',
    accentBorder: 'border-rose-500/40',
    accentText: 'text-rose-300',
  },
  {
    id: 'bar',
    icon: Wine,
    label: 'Bar · coctelería · brunch',
    vibe: 'Rotación rápida · turismo · noche',
    description:
      'Mucha rotación, propina importante para tu equipo, carta digital que cambia seguido. Reservas online porque el teléfono no para. Marca fuerte en Instagram.',
    apps: ['menueat', 'likeeat', 'tipeat', 'bookeat'],
    gradient: 'from-pink-500 to-purple-500',
    accentBg: 'bg-pink-500/15',
    accentBorder: 'border-pink-500/40',
    accentText: 'text-pink-300',
  },
]

export function RestaurantPersonas() {
  return (
    <section className="py-24 px-4 bg-brand-950 border-y border-brand-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Encaja con tu operación
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            ¿Cuál es tu restorán?
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Cada operación necesita un stack distinto. Te mostramos qué apps
            arrancan más rápido según el tipo de restorán.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {personas.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                className="group relative bg-brand-900 rounded-2xl border border-brand-800 hover:border-primary-500/40 transition-all overflow-hidden p-6"
                style={{ animation: `slide-up 0.5s ease-out ${idx * 0.08}s backwards` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.gradient}`}></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg shadow-black/30 flex-shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">{p.label}</h3>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${p.accentText} mt-1`}>
                      {p.vibe}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed mb-5">{p.description}</p>

                <div className="mb-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Stack recomendado
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.apps.map((slug) => {
                      const app = PRODUCTS[slug]
                      const AppIcon = app.icon
                      return (
                        <Link
                          key={slug}
                          href={`/productos/${slug}`}
                          className={`group/app inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${app.accentBg} ${app.accentText} ${app.accentBorder} border hover:scale-[1.03] transition-transform`}
                        >
                          <AppIcon size={11} />
                          {app.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-neutral-600 mt-10">
          ¿Tu operación no encaja exactamente? Te armamos un stack a medida en una llamada de 30 min.{' '}
          <a href="#contacto" className="text-primary-400 hover:text-primary-300 font-semibold transition">
            Conversemos →
          </a>
        </p>
      </div>
    </section>
  )
}
