'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { trackCTA } from '@/lib/track'
import { LeadModal } from './LeadModal'

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false)

  const handlePrimary = () => {
    trackCTA('cta_final_primary')
    setModalOpen(true)
  }

  return (
    <section id="contacto" className="py-24 px-4 bg-brand-900 relative overflow-hidden border-y border-brand-800">
      <div aria-hidden className="absolute top-0 left-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/12 rounded-full blur-3xl"></div>

      <div className="signature-corner signature-corner-lg max-w-5xl mx-auto relative z-10 rounded-3xl border border-brand-800 bg-brand-950/60 backdrop-blur p-10 md:p-16 text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-accent-500/10 border border-accent-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">Cupos limitados · Early access</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-[1.05] tracking-tight">
          Olvida el Excel.
          <br />
          <span className="bg-gradient-to-br from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent">
            Empieza con EatCorp.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Activamos pocos restoranes al mes para acompañar bien cada activación.
          Cuéntanos sobre tu operación y te ayudamos a partir con las apps que
          necesitas.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handlePrimary}
            className="group bg-primary-500 hover:bg-primary-400 text-brand-950 px-8 py-4 rounded-lg font-semibold text-base transition-all hover:scale-[1.02]"
            style={{ boxShadow: 'var(--shadow-wow)' }}
          >
            <span className="flex items-center gap-2">
              Solicitar early access
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
        <p className="mt-5 text-xs text-neutral-600">
          Te respondemos en 24 horas hábiles · sin compromiso · sin contratos largos
        </p>
      </div>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="early_access"
        ctaTrack="cta_final_primary"
        title="Solicita tu early access"
        description="Cuéntanos sobre tu restorán y qué apps te interesan. Te contactamos en menos de 24 horas hábiles."
        withMessage
      />
    </section>
  )
}
