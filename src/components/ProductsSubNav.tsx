'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Layers } from 'lucide-react'
import { PRODUCTS_LIST, type ProductSlug } from '@/lib/products'

type Props = {
  activeSlug?: ProductSlug | 'index'
}

export function ProductsSubNav({ activeSlug }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLAnchorElement>(null)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(true)

  useEffect(() => {
    if (activeRef.current && scrollerRef.current) {
      const el = activeRef.current
      const parent = scrollerRef.current
      const elRect = el.getBoundingClientRect()
      const parentRect = parent.getBoundingClientRect()
      if (elRect.left < parentRect.left || elRect.right > parentRect.right) {
        el.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' })
      }
    }
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => {
      setShowLeftFade(el.scrollLeft > 8)
      setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
    }
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-[60px] z-40 bg-brand-950/85 backdrop-blur-md border-b border-brand-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex items-center gap-3 py-2.5">
          <Link
            href="/productos"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex-shrink-0 transition ${
              activeSlug === 'index'
                ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40'
                : 'text-neutral-600 hover:text-neutral-800 border border-transparent'
            }`}
          >
            <Layers size={12} />
            <span>Productos</span>
          </Link>

          <div className="h-5 w-px bg-brand-800 flex-shrink-0"></div>

          <div className="relative flex-1 min-w-0">
            {showLeftFade && (
              <div aria-hidden className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-brand-950 to-transparent pointer-events-none z-10"></div>
            )}
            {showRightFade && (
              <div aria-hidden className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-brand-950 to-transparent pointer-events-none z-10"></div>
            )}
            <div
              ref={scrollerRef}
              className="flex items-center gap-1.5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PRODUCTS_LIST.map((p) => {
                const isActive = p.slug === activeSlug
                const Icon = p.icon
                return (
                  <Link
                    key={p.slug}
                    ref={isActive ? activeRef : null}
                    href={`/productos/${p.slug}`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition ${
                      isActive
                        ? `${p.accentBg} ${p.accentText} ${p.accentBorder} border shadow-sm`
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-brand-900 border border-transparent'
                    }`}
                  >
                    <Icon size={12} className={isActive ? p.accentText : 'text-neutral-600'} />
                    <span>{p.name}</span>
                    {p.external && (
                      <span className="text-[9px] uppercase tracking-wider text-neutral-600 ml-0.5">ext</span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
