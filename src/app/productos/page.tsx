import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { PRODUCTS_LIST } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Productos — todas las apps de EatCorp',
  description:
    'BuyEat, TaskEat, LikeEat, MaintainEat, EventEat, MenuEat, BookEat y StaffEat. Activa solo las que tu restorán necesite — todo conectado en una plataforma.',
  alternates: { canonical: 'https://eatcorp.cl/productos' },
}

const CATEGORIES: { id: 'operations' | 'collaborators' | 'customer'; label: string; description: string }[] = [
  {
    id: 'operations',
    label: 'Administración y operaciones',
    description: 'Lo que mueve la plata, el equipo y los activos del restorán.',
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

export default function ProductosIndex() {
  return (
    <main className="flex flex-col">
      <Navigation />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-primary-500/15 border border-primary-500/30">
            <Sparkles size={12} className="text-primary-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-300">Toda la suite</span>
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

      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {CATEGORIES.map((cat) => {
            const apps = PRODUCTS_LIST.filter((p) => p.category === cat.id)
            if (apps.length === 0) return null
            return (
              <div key={cat.id}>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">{cat.label}</h2>
                  <p className="text-sm text-neutral-600">{cat.description}</p>
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
                          <div className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${p.accentText}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${p.accentDot}`}></span>
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

      <section className="py-20 px-4 bg-brand-900 border-y border-brand-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Te damos una demo personalizada de 30 minutos y te recomendamos qué apps
            activar primero según tu operación.
          </p>
          <a
            href="#contacto"
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
