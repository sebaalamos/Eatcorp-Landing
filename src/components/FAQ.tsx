'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { HOME_FAQS as faqs } from '@/lib/faqs'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 bg-brand-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Preguntas frecuentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-xl text-neutral-600">
            ¿No encuentras tu pregunta? <a href="mailto:hola@eatcorp.cl" className="text-primary-300 hover:text-primary-200 hover:underline font-semibold">Escríbenos</a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`bg-brand-900 rounded-xl border-2 transition-all overflow-hidden ${
                  isOpen ? 'border-primary-500/50 shadow-md shadow-primary-500/10' : 'border-brand-800'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-brand-800/60 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-neutral-900">{faq.q}</span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                    {isOpen ? <Minus size={14} className="text-primary-300" /> : <Plus size={14} className="text-primary-300" />}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-neutral-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
