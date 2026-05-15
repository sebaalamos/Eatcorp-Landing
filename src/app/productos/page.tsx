import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, ChevronRight, Clock, Rocket, FlaskConical } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProductsSubNav } from '@/components/ProductsSubNav'
import { PRODUCTS_LIST, UPCOMING_APPS, type UpcomingApp } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Productos — todas las apps de EatCorp',
  description:
    'BuyEat, TaskEat, LikeEat, MaintainEat, EventEat, MenuEat, TipEat, BookEat y StaffEat. Activa solo las que tu restorán necesite — todo conectado en una plataforma.',
  alternates: { canonical: 'https://eatcorp.cl/productos' },
}

const CATEGORIES: { id: 'operations' | 'collaborators' | 'customer'; label: string; description: string }[] = [
  {
    id: 'operations',
    label: 'Administración y operaciones',
    description: 'Lo que mueve la plata, las compras y los activos del restorán.',
  },
  {
    id: 'customer',
    label: 'Experiencia del cliente',
    description: 'Lo que ve tu cliente — antes, durante y después de su visita.',
  },
  {
    id: 'collaborators',
    label: 'Colaboradores',
    description: 'Herramientas para el equipo interno.',
  },
]

const ROADMAP_GROUPS: { label: string; status: UpcomingApp['status']; icon: typeof Clock; description: string }[] = [
  {
    label: 'En construcción',
    status: 'construyendo',
    icon: Rocket,
    description: 'Apps con desarrollo activo y piloto interno en marcha.',
  },
  {
    label: 'Planeado',
    status: 'planeado',
    icon: Clock,
    description: 'Apps con scope decidido y fecha objetivo definida.',
  },
  {
    label: 'En evaluación',
    status: 'evaluando',
    icon: FlaskConical,
    description: 'Apps en estudio — podrían sumarse al catálogo o quedar como features de otras apps.',
  },
]

export default function ProductosIndex() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <ProductsSubNav activeSlug="index" />

      {/* Breadcrumb */}
      <div className="bg-brand-950 border-b border-brand-900">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-1.5 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition">
            Inicio
          </Link>
          <ChevronRight size={12} className="text-neutral-700" />
          <span className="text-neutral-800 font-semibold">Productos</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-primary-500/15 border border-primary-500/30">
            <Sparkles size={12} className="text-primary-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-300">9 apps live · 15+ en roadmap</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-5 leading-[1.05] tracking-tight">
            Una plataforma,
            <br />
            <span className="bg-gradient-to-br from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent">
              varias apps especializadas
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Cada app está hecha para una operación específica del restorán. Activas
            solo las que necesitas, pagas solo por ellas, las puedes sumar cuando quieras.
          </p>
        </div>
      </section>

      {/* Apps disponibles */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {CATEGORIES.map((cat) => {
            const apps = PRODUCTS_LIST.filter((p) => p.category === cat.id)
            if (apps.length === 0) return null
            return (
              <div key={cat.id}>
                <div className="flex items-end justify-between mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">{cat.label}</h2>
                    <p className="text-sm text-neutral-600">{cat.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-xs font-bold uppercase tracking-wider text-primary-300 bg-primary-500/15 border border-primary-500/30 px-2 py-1 rounded-full">
                    {apps.length} live
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {apps.map((p) => {
                    const Icon = p.icon
                    return (
                      <Link
                        key={p.slug}
                        href={`/productos/${p.slug}`}
                        className="group relative bg-brand-900 rounded-2xl border border-brand-800 hover:border-primary-500/40 hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
                      >
                        <div className={`h-1.5 bg-gradient-to-r ${p.gradient}`}></div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg shadow-black/30`}>
                              <Icon size={22} />
                            </div>
                            {p.external && (
                              <span className="text-[10px] font-semibold uppercase tracking-wide text-neutral-600 bg-brand-950/60 border border-brand-700 px-2 py-0.5 rounded-full">
                                Externa
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-1">{p.name}</h3>
                          <p className="text-sm text-neutral-600 leading-snug mb-4 flex-1">{p.tagline}</p>
                          <div className={`flex items-start gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${p.accentText}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${p.accentDot} mt-1 flex-shrink-0`}></span>
                            <span>{p.oneLiner}</span>
                          </div>
                          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition">
                            Ver detalle
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Lo que viene — Roadmap */}
      <section className="py-24 px-4 bg-brand-900 border-t border-brand-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
              <Sparkles size={12} />
              Roadmap del ecosistema
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              Lo que viene en EatCorp
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              No vendemos lo que no existe. Pero queremos que sepas hacia dónde va el ecosistema cuando elijas EatCorp.
            </p>
          </div>

          {ROADMAP_GROUPS.map((group) => {
            const apps = UPCOMING_APPS.filter((a) => a.status === group.status)
            if (apps.length === 0) return null
            const GroupIcon = group.icon
            return (
              <div key={group.status} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-brand-800 border border-brand-700 flex items-center justify-center text-primary-300">
                    <GroupIcon size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">{group.label}</h3>
                    <p className="text-xs text-neutral-600 mt-0.5">{group.description}</p>
                  </div>
                  <div className="ml-auto text-xs font-bold uppercase tracking-wider text-neutral-700 bg-brand-800 border border-brand-700 px-2 py-1 rounded-full">
                    {apps.length}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {apps.map((app) => {
                    const AppIcon = app.icon
                    return (
                      <div
                        key={app.slug}
                        className={`relative bg-brand-800/50 border ${app.accentBorder} rounded-2xl p-5 overflow-hidden`}
                      >
                        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${app.gradient}`}></div>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-white shadow-md shadow-black/20`}>
                            <AppIcon size={20} />
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${app.accentBg} ${app.accentText} ${app.accentBorder} border whitespace-nowrap`}>
                            {app.eta}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900 leading-tight mb-1">{app.name}</h4>
                        <p className={`text-xs font-semibold uppercase tracking-wide ${app.accentText} mb-2`}>
                          {app.tagline}
                        </p>
                        <p className="text-sm text-neutral-700 leading-relaxed">{app.description}</p>
                        <div className="mt-3 text-[10px] text-neutral-600">
                          Categoría: <span className="text-neutral-700 font-semibold">{app.categoryLabel}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

          <p className="text-center text-xs text-neutral-500 mt-8">
            Roadmap sujeto a cambios. Las fechas son objetivos internos, no compromisos contractuales.
            Última revisión: mayo 2026.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-brand-950 border-t border-brand-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Te damos una demo personalizada de 30 minutos y te recomendamos qué apps
            activar primero según tu operación.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-brand-950 px-8 py-3.5 rounded-lg font-semibold transition-all hover:scale-[1.02]"
            style={{ boxShadow: 'var(--shadow-wow)' }}
          >
            Agendar demo
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
