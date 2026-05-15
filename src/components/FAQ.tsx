'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito instalar algo en mis computadores?',
    a: 'No. EatCorp funciona 100% en el navegador. Solo necesitas internet y un navegador moderno (Chrome, Safari, Firefox, Edge). También funciona perfecto en celular y tablet sin necesidad de descargar apps.',
  },
  {
    q: '¿Qué pasa con mi información si decido dejar EatCorp?',
    a: 'Tus datos son tuyos siempre. En cualquier momento puedes exportar todo: facturas, tareas, posts, contactos, todo en formatos estándar (CSV, JSON, PDF). Si cancelas tu cuenta, te damos 90 días para descargar todo antes de eliminar definitivamente.',
  },
  {
    q: '¿Funciona en mi celular?',
    a: 'Sí. La interfaz es completamente responsive. Tu equipo de cocina puede actualizar tareas desde el celular, recepcionistas pueden escanear facturas con la cámara, y tú puedes aprobar pagos desde donde sea.',
  },
  {
    q: '¿Necesito ser técnico para usarlo?',
    a: 'No. Está diseñado pensando en operadores de restoranes, no en programadores. Si sabes usar WhatsApp y Instagram, sabes usar EatCorp.',
  },
  {
    q: '¿Pueden importar mi data actual?',
    a: 'Sí. Trabajamos con planillas de Excel y Google Sheets para subir proveedores, productos, contactos y otros catálogos al iniciar. Si tienes un sistema específico, escríbenos y vemos la mejor manera de migrar tu data.',
  },
  {
    q: '¿Cuántos usuarios puedo tener?',
    a: 'No hay un tope rígido. Cada usuario tiene distintos roles y accesos por app — el cocinero solo ve TaskEat, el admin ve todo. Puedes agregar y quitar usuarios cuando quieras.',
  },
  {
    q: '¿Cómo se paga? ¿Hay contratos largos?',
    a: 'Suscripción mensual con tarjeta de crédito. Sin contratos largos, sin letra chica. Cancelas cuando quieras desde tu cuenta y no se cobra el mes siguiente. Aceptamos tarjeta de crédito y débito; para cuentas Enterprise también transferencia.',
  },
]

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
