'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { ProductFAQ as FAQItem } from '@/lib/products'

export function ProductFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
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
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-neutral-700 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
