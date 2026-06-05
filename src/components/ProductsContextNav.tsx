'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Layers, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { PRODUCTS_LIST, type ProductSlug } from '@/lib/products'

type Props = {
  activeSlug: ProductSlug
}

export function ProductsContextNav({ activeSlug }: Props) {
  const [expandedMobile, setExpandedMobile] = useState(false)
  const activeProduct = PRODUCTS_LIST.find((p) => p.slug === activeSlug)

  return (
    <section className="bg-brand-950 border-b border-brand-800 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300 mb-1">
              <Layers size={12} />
              <span>Toda la suite</span>
            </div>
            <p className="text-sm text-neutral-700">
              {PRODUCTS_LIST.length} apps activas · activas solo las que necesites · {' '}
              <Link href="/productos" className="text-primary-300 hover:text-primary-200 font-semibold underline-offset-4 hover:underline">
                ver índice
              </Link>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setExpandedMobile((v) => !v)}
            className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-primary-300 px-3 py-1.5 rounded-full border border-primary-500/40 bg-primary-500/10 flex-shrink-0"
            aria-expanded={expandedMobile}
          >
            {activeProduct?.name ?? 'Apps'}
            {expandedMobile ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        <div className={`${expandedMobile ? 'grid' : 'hidden md:grid'} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5`}>
          {PRODUCTS_LIST.map((p) => {
            const isActive = p.slug === activeSlug
            const Icon = p.icon
            return (
              <Link
                key={p.slug}
                href={`/productos/${p.slug}`}
                className={`group relative flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  isActive
                    ? `${p.accentBg} ${p.accentBorder} shadow-sm`
                    : 'bg-brand-900/60 border-brand-800 hover:bg-brand-800/40 hover:border-primary-500/30 hover:-translate-y-0.5'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className={`absolute top-2 right-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider ${p.accentText}`}
                  >
                    <Sparkles size={9} />
                    Aquí
                  </span>
                )}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-md shadow-black/30 flex-shrink-0`}>
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-sm font-bold leading-tight truncate ${isActive ? p.accentText : 'text-neutral-900'}`}>
                      {p.name}
                    </span>
                    {p.external && (
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-600 flex-shrink-0">
                        ext
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-neutral-600 leading-snug line-clamp-2 mt-0.5">
                    {p.tagline}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
