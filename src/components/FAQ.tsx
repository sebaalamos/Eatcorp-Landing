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
    a: 'No. Está diseñado pensando en operadores de restoranes, no en programadores. Si sabes usar WhatsApp y Instagram, sabes usar EatCorp. El onboarding completo demora menos de 30 minutos.',
  },
  {
    q: '¿Pueden importar mi contabilidad o data actual?',
    a: 'Sí. Tenemos importadores para Excel, Google Sheets, Defontana y otros sistemas comunes del rubro. En el plan Pro y Enterprise el equipo de EatCorp te ayuda con la importación inicial sin costo adicional.',
  },
  {
    q: '¿Cuántos usuarios puedo tener?',
    a: 'Depende del plan. Starter incluye 5 usuarios, Pro hasta 25, Enterprise ilimitado. Cada usuario puede tener distintos roles y accesos por app — el cocinero solo ve TaskEat, el admin ve todo. Puedes agregar/quitar usuarios cuando quieras.',
  },
  {
    q: '¿Cómo se paga? ¿Hay contratos largos?',
    a: 'Mensual o anual, lo que prefieras. Aceptamos transferencia, tarjeta de crédito y débito. Cancelas cuando quieras sin letra chica ni penalidades. El plan anual viene con 20% de descuento.',
  },
  {
    q: '¿Hay periodo de prueba?',
    a: '14 días gratis sin tarjeta de crédito. Acceso completo a todas las funcionalidades. Si en 14 días no estás convencido, no pasa nada — sin cobros automáticos ni sorpresas.',
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
