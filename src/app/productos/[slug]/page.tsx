import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, ExternalLink } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { PRODUCTS, PRODUCTS_LIST, type ProductSlug } from '@/lib/products'
import { ProductPageCTA } from './ProductPageCTA'
import { ProductFAQ } from './ProductFAQ'
import { ProductMockup } from './ProductMockup'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return PRODUCTS_LIST.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS[slug as ProductSlug]
  if (!product) return {}
  return {
    title: `${product.name} — ${product.tagline} · EatCorp`,
    description: product.heroDescription,
    alternates: { canonical: `https://eatcorp.cl/productos/${product.slug}` },
  }
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const product = PRODUCTS[slug as ProductSlug]
  if (!product) notFound()

  const Icon = product.icon
  const otherProducts = PRODUCTS_LIST.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <main className="flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        <div aria-hidden className={`absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br ${product.gradient} opacity-[0.08] rounded-full blur-3xl`}></div>

        <div className="max-w-6xl mx-auto relative">
          <Link
            href="/productos"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-800 mb-6 transition"
          >
            <span aria-hidden>←</span>
            Todos los productos
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full ${product.accentBg} ${product.accentBorder} border`}>
                <Icon size={14} className={product.accentText} />
                <span className={`text-xs font-bold uppercase tracking-wide ${product.accentText}`}>
                  {product.name}
                  {product.external && <span className="ml-2 text-neutral-500">· Externa</span>}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-5 leading-[1.05] tracking-tight">
                {product.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
                {product.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ProductPageCTA productName={product.name} productSlug={product.slug} />
                {product.external && product.externalUrl && (
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-neutral-900 border border-brand-700 px-6 py-3.5 rounded-lg font-semibold transition-colors"
                  >
                    Ver {product.name}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <ProductMockup slug={product.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 bg-brand-900 border-y border-brand-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
              Por qué importa
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              Lo que cambia cuando usas {product.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {product.beneficios.map((b, i) => (
              <div
                key={b.title}
                className="bg-brand-800/40 border border-brand-700 rounded-2xl p-6 hover:border-primary-500/40 transition"
                style={{ animation: `slide-up 0.5s ease-out ${i * 0.08}s backwards` }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${product.accentBg} ${product.accentBorder} border flex items-center justify-center flex-shrink-0`}>
                    <Check size={16} className={product.accentText} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{b.title}</h3>
                    <p className="text-sm text-neutral-700 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
              Funcionalidades
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              Todo lo que {product.name} hace
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {product.features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full ${product.accentDot} mt-2 flex-shrink-0`}></div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-4 bg-brand-950 border-y border-brand-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
              Cómo funciona
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              En 3 pasos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {product.pasos.map((p, i) => (
              <div key={p.title} className="relative">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-black/30 mb-4`}>
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{p.description}</p>
                {i < product.pasos.length - 1 && (
                  <div aria-hidden className="hidden md:block absolute top-6 -right-3 w-6 h-px bg-gradient-to-r from-primary-500/40 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
              ¿Es para ti?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {product.name} encaja si
            </h2>
          </div>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {product.paraQuien.map((p) => (
              <li key={p} className="flex items-start gap-3 bg-brand-900 border border-brand-800 rounded-xl p-4">
                <Check size={18} className={`${product.accentText} flex-shrink-0 mt-0.5`} strokeWidth={2.5} />
                <span className="text-neutral-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="py-20 px-4 bg-brand-950 border-y border-brand-800">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
                Preguntas frecuentes
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
                Lo que más nos preguntan de {product.name}
              </h2>
            </div>
            <ProductFAQ faqs={product.faq} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-5 leading-tight">
            ¿Activamos {product.name} en tu restorán?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Te damos una demo personalizada para mostrarte cómo se vería en tu operación.
          </p>
          <ProductPageCTA productName={product.name} productSlug={product.slug} large />
        </div>
      </section>

      {/* Otras apps */}
      <section className="py-20 px-4 bg-brand-900 border-t border-brand-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              Otras apps que tal vez te interesen
            </h2>
            <p className="text-neutral-600">Toda la suite EatCorp.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {otherProducts.map((p) => {
              const POtherIcon = p.icon
              return (
                <Link
                  key={p.slug}
                  href={`/productos/${p.slug}`}
                  className="group bg-brand-800/50 border border-brand-700 rounded-xl p-4 flex items-center gap-3 hover:border-primary-500/40 hover:bg-brand-800 transition"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                    <POtherIcon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-neutral-900">{p.name}</div>
                    <div className="text-xs text-neutral-600 truncate">{p.tagline}</div>
                  </div>
                  <ArrowRight size={14} className="text-neutral-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition flex-shrink-0" />
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/productos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300">
              Ver todas las apps
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
