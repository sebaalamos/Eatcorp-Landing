import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, ChevronRight, ExternalLink, ArrowLeft } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProductsContextNav } from '@/components/ProductsContextNav'
import { PRODUCTS, PRODUCTS_LIST, type ProductSlug } from '@/lib/products'
import { productSchema, faqPageSchema, breadcrumbSchema } from '@/lib/jsonld'
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
  const title = `${product.name} — ${product.tagline} · EatCorp`
  const description = product.heroDescription
  const url = `https://eatcorp.cl/productos/${product.slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'EatCorp',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EatCorp' }],
      type: 'website',
      locale: 'es_419',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const product = PRODUCTS[slug as ProductSlug]
  if (!product) notFound()

  const Icon = product.icon
  const currentIndex = PRODUCTS_LIST.findIndex((p) => p.slug === product.slug)
  const prevProduct = currentIndex > 0 ? PRODUCTS_LIST[currentIndex - 1] : PRODUCTS_LIST[PRODUCTS_LIST.length - 1]
  const nextProduct = currentIndex < PRODUCTS_LIST.length - 1 ? PRODUCTS_LIST[currentIndex + 1] : PRODUCTS_LIST[0]

  const jsonLd = [
    productSchema(product),
    ...(product.faq.length > 0 ? [faqPageSchema(product.faq)] : []),
    breadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Productos', path: '/productos' },
      { name: product.name, path: `/productos/${product.slug}` },
    ]),
  ]

  return (
    <main id="contenido" tabIndex={-1} className="flex flex-col pt-16 outline-none">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <ProductsContextNav activeSlug={product.slug} />

      {/* Breadcrumb */}
      <div className="bg-brand-950 border-b border-brand-900">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-1.5 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition">
            Inicio
          </Link>
          <ChevronRight size={12} className="text-neutral-700" />
          <Link href="/productos" className="hover:text-neutral-900 transition">
            Productos
          </Link>
          <ChevronRight size={12} className="text-neutral-700" />
          <span className="text-neutral-800 font-semibold flex items-center gap-1">
            <Icon size={11} className={product.accentText} />
            {product.name}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 relative overflow-hidden">
        <div aria-hidden className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br ${product.gradient} opacity-[0.08] rounded-full blur-3xl`}></div>

        <div className="max-w-6xl mx-auto relative">
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
        <section className="py-20 px-4">
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
      <section className="py-20 px-4 bg-brand-950 border-t border-brand-800">
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

      {/* Navegación prev/next */}
      <section className="py-12 px-4 bg-brand-900 border-y border-brand-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href={`/productos/${prevProduct.slug}`}
              className="group flex items-center gap-4 bg-brand-800/50 border border-brand-700 hover:border-primary-500/40 rounded-2xl p-5 transition"
            >
              <ArrowLeft size={20} className="text-neutral-600 group-hover:text-primary-400 group-hover:-translate-x-0.5 transition flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Anterior</div>
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${prevProduct.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                    <prevProduct.icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-neutral-900 truncate">{prevProduct.name}</div>
                    <div className="text-[11px] text-neutral-600 truncate">{prevProduct.tagline}</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href={`/productos/${nextProduct.slug}`}
              className="group flex items-center gap-4 bg-brand-800/50 border border-brand-700 hover:border-primary-500/40 rounded-2xl p-5 transition md:text-right"
            >
              <div className="flex-1 min-w-0 md:order-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Siguiente</div>
                <div className="flex items-center gap-2 md:flex-row-reverse">
                  <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${nextProduct.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                    <nextProduct.icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-neutral-900 truncate">{nextProduct.name}</div>
                    <div className="text-[11px] text-neutral-600 truncate">{nextProduct.tagline}</div>
                  </div>
                </div>
              </div>
              <ArrowRight size={20} className="text-neutral-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition flex-shrink-0 md:order-2" />
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link href="/productos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition">
              Ver todos los productos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
