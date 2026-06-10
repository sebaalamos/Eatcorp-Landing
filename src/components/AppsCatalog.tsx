'use client'

import { useState } from 'react'
import { Flame } from 'lucide-react'
import { AppsGrid } from './Apps'
import { ComingSoonGrid } from './ComingSoonApps'

type Tab = 'live' | 'soon'

export function AppsCatalog() {
  const [tab, setTab] = useState<Tab>('live')

  return (
    <section id="apps" className="py-24 px-4 bg-brand-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Toda la suite
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Una plataforma, varias apps
          </h2>
          <p className="text-xl text-neutral-600">Activa solo las que tu restorán necesita</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 bg-brand-950 border border-brand-700 rounded-full p-1">
            <button
              type="button"
              onClick={() => setTab('live')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                tab === 'live'
                  ? 'bg-primary-500 text-brand-950 shadow shadow-primary-600/30'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              Disponibles
            </button>
            <button
              type="button"
              onClick={() => setTab('soon')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-1.5 ${
                tab === 'soon'
                  ? 'bg-primary-500 text-brand-950 shadow shadow-primary-600/30'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              <Flame size={12} className={tab === 'soon' ? 'animate-pulse' : ''} />
              Próximamente
            </button>
          </div>
        </div>

        {tab === 'live' ? <AppsGrid /> : <ComingSoonGrid />}
      </div>
    </section>
  )
}
