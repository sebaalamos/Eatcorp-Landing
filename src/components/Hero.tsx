'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { trackCTA } from '@/lib/track'
import { HeroAppCarousel } from './HeroAppCarousel'
import { LeadModal } from './LeadModal'

const ROTATING_WORDS = ['restorán', 'cocina', 'barra', 'bistró', 'pastelería']

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  const handlePrimary = () => {
    trackCTA('cta_hero_primary')
    setModalOpen(true)
  }

  const [wordIndex, setWordIndex] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
        setWordVisible(true)
      }, 280)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="pt-28 pb-20 px-4 relative overflow-hidden">
      <div aria-hidden className="absolute top-20 left-10 w-72 h-72 bg-primary-700/25 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute bottom-10 right-10 w-96 h-96 bg-accent-700/20 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
          </span>
          <span className="text-sm font-medium text-primary-200">Early access · Chile y LatAm</span>
        </div>

        <h1 className="font-bold text-neutral-900 mb-6 leading-[1.05] tracking-[-0.025em] text-5xl md:text-7xl">
          El motor de tu
          <br />
          <span
            className={`inline-block transition-all duration-300 bg-gradient-to-br from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent ${
              wordVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ filter: 'drop-shadow(0 0 32px rgba(52, 211, 153, 0.35))' }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Compras, tareas, redes sociales con IA y mantención en una sola plataforma.
          En español, lista en 30 minutos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4 px-6 sm:px-0">
          <button
            onClick={handlePrimary}
            className="group relative bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all hover:scale-[1.02] focus-visible:scale-[1.02]"
            style={{ boxShadow: 'var(--shadow-wow)' }}
          >
            <span className="flex items-center gap-2">
              Solicitar early access
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
          <a
            href="#how-it-works"
            onClick={() => trackCTA('cta_hero_secondary')}
            className="text-neutral-700 hover:text-primary-300 px-5 py-3 rounded-lg font-medium text-base transition-colors underline-offset-4 hover:underline"
          >
            Ver cómo funciona
          </a>
        </div>

        <p className="text-xs text-neutral-500 mb-14">
          Cupos limitados · te respondemos en 24 horas hábiles · sin compromiso
        </p>

        <HeroAppCarousel />
      </div>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="early_access"
        ctaTrack="cta_hero_primary"
        title="Solicita tu early access"
        description="Cuéntanos sobre tu restorán y qué apps te interesan. Te contactamos en menos de 24 horas hábiles."
        withMessage
      />
    </section>
  )
}
