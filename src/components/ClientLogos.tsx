'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LeadModal } from './LeadModal'

type Client = {
  name: string
  tag: string
  instagram: string
  logo: string
  width: number
  height: number
}

const clients: Client[] = [
  {
    name: 'El Toro',
    tag: 'Vitacura · Santiago',
    instagram: 'https://instagram.com/eltoro.cl',
    logo: '/logo-eltoro.png',
    width: 820,
    height: 340,
  },
  {
    name: 'Tigre',
    tag: 'Vitacura · Santiago',
    instagram: 'https://instagram.com/tigre.cl',
    logo: '/logo-tigre.png',
    width: 729,
    height: 190,
  },
]

export function ClientLogos() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section aria-label="Restoranes que operan con EatCorp" className="py-14 px-4 bg-brand-900/60 border-y border-brand-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-brand-700"></div>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
            Restoranes que ya operan con EatCorp
          </p>
          <div aria-hidden className="h-px w-10 bg-gradient-to-l from-transparent to-brand-700"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${c.name} — ${c.tag}`}
              className="group flex items-center gap-4 pl-4 pr-5 py-3 rounded-xl bg-brand-800/50 border border-brand-700 hover:border-primary-500/50 hover:bg-brand-800 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-14 h-14 rounded-lg bg-white/95 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5 ring-1 ring-brand-700/50 group-hover:ring-primary-500/40 transition">
                <Image
                  src={c.logo}
                  alt={`Logo ${c.name}`}
                  width={c.width}
                  height={c.height}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-neutral-900 leading-tight">{c.name}</div>
                <div className="text-[11px] text-neutral-600 mt-0.5">{c.tag}</div>
              </div>
            </a>
          ))}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-dashed border-brand-700 hover:border-primary-500/60 text-neutral-600 hover:text-primary-300 hover:bg-brand-800/40 transition-all"
          >
            <div className="w-9 h-9 rounded-full border-2 border-dashed border-brand-700 group-hover:border-primary-500/60 flex items-center justify-center text-neutral-500 group-hover:text-primary-300 text-lg leading-none transition">
              +
            </div>
            <div className="text-sm font-medium text-left">
              <div className="text-neutral-700 group-hover:text-neutral-900 transition">¿Tu restorán acá?</div>
              <div className="text-[11px] text-neutral-500">Escríbenos</div>
            </div>
          </button>
        </div>
      </div>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="contact"
        ctaTrack="cta_client_logos"
        title="Súmate a EatCorp"
        description="Cuéntanos sobre tu restorán y te contactamos en menos de 24 horas hábiles."
        withMessage
      />
    </section>
  )
}
