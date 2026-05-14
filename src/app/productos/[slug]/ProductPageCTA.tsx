'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { LeadModal } from '@/components/LeadModal'
import { trackCTA } from '@/lib/track'

type Props = {
  productName: string
  productSlug: string
  large?: boolean
}

export function ProductPageCTA({ productName, productSlug, large = false }: Props) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    trackCTA('cta_product_page', { plan: productSlug })
    setOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-brand-950 rounded-lg font-semibold transition-all hover:scale-[1.02] ${
          large ? 'px-8 py-4 text-base' : 'px-6 py-3.5'
        }`}
        style={{ boxShadow: 'var(--shadow-wow)' }}
      >
        Activar {productName}
        <ArrowRight size={16} />
      </button>

      <LeadModal
        open={open}
        onClose={() => setOpen(false)}
        source="contact"
        ctaTrack="cta_product_page"
        title={`Activa ${productName} en tu restorán`}
        description="Cuéntanos sobre tu operación y te contactamos en menos de 24 horas hábiles con una demo personalizada."
        withMessage
      />
    </>
  )
}
