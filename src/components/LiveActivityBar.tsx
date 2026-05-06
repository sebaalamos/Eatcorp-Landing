'use client'

import { useEffect, useState } from 'react'
import { Package, CheckCircle2, Sparkles, Wrench, Banknote, Users, Camera, Zap } from 'lucide-react'

type Message = { Icon: React.ElementType; text: string }

const messages: Message[] = [
  { Icon: Package, text: 'El Toro aprobó factura $480.500' },
  { Icon: CheckCircle2, text: '24 tareas completadas hoy en TaskEat' },
  { Icon: Sparkles, text: 'Tigre publicó 8 posts esta semana' },
  { Icon: Wrench, text: 'MaintainEat agendó 3 mantenciones preventivas' },
  { Icon: Banknote, text: 'Lote de pago $2.4M ejecutado en BuyEat' },
  { Icon: Users, text: '2 nuevos miembros se unieron a El Toro' },
  { Icon: Camera, text: 'Magic Post generó caption para Tigre en 4 segundos' },
  { Icon: Zap, text: 'Discrepancia detectada y resuelta automáticamente' },
]

const SAVED_BASE = 18_420_000

export function LiveActivityBar() {
  const [index, setIndex] = useState(0)
  const [saved, setSaved] = useState(SAVED_BASE)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setSaved((s) => s + Math.floor(Math.random() * 7000) + 1500)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  const formatted = saved.toLocaleString('es-CL')

  return (
    <div className="bg-brand-900 border-y border-brand-800 py-3 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-wider text-primary-400 uppercase">En vivo</span>
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
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Ahorrado hoy</span>
          <span
            key={saved}
            className="text-sm font-bold text-primary-300 tabular-nums"
            style={{ animation: 'count-pop 0.4s ease-out' }}
          >
            ${formatted}
          </span>
        </div>
      </div>
    </div>
  )
}
