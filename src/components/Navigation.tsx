'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { trackCTA } from '@/lib/track'
import { Logo } from './Logo'
import { ProductsMegaMenu } from './ProductsMegaMenu'

const simpleLinks = [
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contacto', label: 'Contacto' },
]

export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setIsLoggedIn(true)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setIsLoggedIn(!!session),
    )

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleClick = () => {
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-950/85 backdrop-blur-md border-b border-brand-800 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Inicio EatCorp" className="rounded-lg hover:opacity-80 transition-opacity">
          <Logo size={36} />
        </Link>
        <div className="flex items-center gap-3 md:gap-5">
          <ProductsMegaMenu />
          {simpleLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline text-sm font-medium text-neutral-700 hover:text-neutral-900 transition"
            >
              {link.label}
            </a>
          ))}
          {isLoggedIn ? (
            <button
              onClick={handleClick}
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-primary-600/30"
            >
              Mi cuenta
            </button>
          ) : (
            <>
              <button
                onClick={handleClick}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition px-2 py-2"
              >
                Iniciar sesión
              </button>
              <a
                href="/#contacto"
                onClick={() => trackCTA('cta_nav')}
                className="hidden sm:inline-flex items-center bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-primary-600/30"
              >
                Solicitar early access
              </a>
            </>
          )}
          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-800 hover:bg-brand-800 transition"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-950 border-b border-brand-800 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            <ProductsMegaMenu inMobileSheet onNavigate={() => setMenuOpen(false)} />
            {simpleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-neutral-800 hover:text-primary-300 border-b border-brand-800 last:border-0 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
