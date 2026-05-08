'use client'

import { useEffect, useState } from 'react'
import { Package, CheckCircle2, Sparkles, Wrench, Banknote, Camera, Calendar, BookOpen } from 'lucide-react'

type Message = { Icon: React.ElementType; text: string }

const messages: Message[] = [
  { Icon: Banknote, text: 'Aprueba lotes de pago bancario en minutos' },
  { Icon: CheckCircle2, text: 'Tareas con visibilidad híbrida por categoría' },
  { Icon: Camera, text: 'Magic Post genera caption desde una foto' },
  { Icon: Wrench, text: 'Mantenciones preventivas calendarizadas' },
  { Icon: Package, text: 'Detección automática de discrepancias en facturas' },
  { Icon: BookOpen, text: 'Carta digital con QR en MenuEat' },
  { Icon: Calendar, text: 'Reservas online vía BookEat' },
  { Icon: Sparkles, text: 'Eventos privados gestionados con EventEat' },
]

export function LiveActivityBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-brand-900 border-y border-brand-800 py-3 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
            <span className="text-[10px] font-bold tracking-wider text-primary-400 uppercase">En la operación</span>
          </div>
          <div className="relative h-6 flex-1 overflow-hidden" aria-live="polite">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center gap-2 text-sm text-neutral-700 transition-all duration-700 ${
                  i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <m.Icon size={14} className="text-primary-400 flex-shrink-0" strokeWidth={1.75} />
                <span className="truncate">{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
