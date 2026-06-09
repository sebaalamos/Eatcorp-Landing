'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react'
import { PRODUCTS_LIST } from '@/lib/products'

const CATEGORIES: { id: 'operations' | 'customer' | 'collaborators'; label: string }[] = [
  { id: 'operations', label: 'Operaciones' },
  { id: 'customer', label: 'Cliente' },
  { id: 'collaborators', label: 'Equipo' },
]

type Props = {
  /** Cuando el menú es expandido como acordeón dentro de un menú móvil cerrado por afuera */
  inMobileSheet?: boolean
  onNavigate?: () => void
}

export function ProductsMegaMenu({ inMobileSheet = false, onNavigate }: Props) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 200)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  // Versión mobile: "Productos" navega a /productos; el chevron expande la lista de apps.
  if (inMobileSheet) {
    return (
      <div className="border-b border-brand-800">
        <div className="flex items-center justify-between">
          <Link
            href="/productos"
            onClick={onNavigate}
            className="flex-1 py-3 text-base font-medium text-neutral-800 hover:text-primary-300 transition"
          >
            Productos
          </Link>
          <button
            type="button"
            aria-label={open ? 'Ocultar apps' : 'Ver apps'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 -mr-2 text-neutral-600 hover:text-neutral-900 transition"
          >
            <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {open && (
          <div className="pb-2 space-y-1">
            {PRODUCTS_LIST.map((p) => {
              const Icon = p.icon
              return (
                <Link
                  key={p.slug}
                  href={`/productos/${p.slug}`}
                  onClick={onNavigate}
                  className="flex items-center gap-2.5 py-2 text-sm text-neutral-700 hover:text-neutral-900"
                >
                  <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                    <Icon size={13} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-neutral-900 leading-tight">{p.name}</div>
                    <div className="text-[11px] text-neutral-600 truncate">{p.tagline}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/productos"
        onClick={() => setOpen(false)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`hidden md:inline-flex items-center gap-1 text-sm font-semibold transition rounded-full px-3 py-1.5 border ${
          open
            ? 'bg-primary-500/15 text-primary-300 border-primary-500/40'
            : 'text-neutral-700 hover:text-neutral-900 border-transparent hover:border-brand-800 hover:bg-brand-900'
        }`}
      >
        Productos
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </Link>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(880px,90vw)] bg-brand-950 border border-brand-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-800">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-primary-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary-300">{PRODUCTS_LIST.length} apps activas</span>
              </div>
              <Link
                href="/productos"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary-300 hover:text-primary-200"
              >
                Ver todos
                <ArrowRight size={11} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {CATEGORIES.map((cat) => {
                const apps = PRODUCTS_LIST.filter((p) => p.category === cat.id)
                if (apps.length === 0) return null
                return (
                  <div key={cat.id}>
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2 pl-2">
                      {cat.label}
                    </h3>
                    <div className="space-y-0.5">
                      {apps.map((p) => {
                        const Icon = p.icon
                        return (
                          <Link
                            key={p.slug}
                            href={`/productos/${p.slug}`}
                            onClick={() => setOpen(false)}
                            className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-brand-900 transition"
                          >
                            <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                              <Icon size={14} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-bold text-neutral-900 leading-tight">{p.name}</span>
                                {p.external && (
                                  <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-600">ext</span>
                                )}
                              </div>
                              <div className="text-[11px] text-neutral-600 leading-snug mt-0.5">{p.tagline}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
