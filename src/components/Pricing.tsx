'use client'

import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { LeadModal } from './LeadModal'
import type { LeadSource } from '@/lib/leads'
import type { CtaName } from '@/lib/track'

type Plan = {
  name: string
  slug: 'starter' | 'pro' | 'enterprise'
  monthly: number
  description: string
  features: string[]
  cta: string
  popular?: boolean
  source: LeadSource
  ctaTrack: CtaName
  withMessage: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    slug: 'starter',
    monthly: 40,
    description: 'Para restoranes que recién empiezan',
    features: [
      '2 apps a elección',
      'Hasta 5 usuarios',
      '1 local',
      'Soporte por email',
      '1 GB de almacenamiento',
      'Hasta 100 facturas/mes',
    ],
    cta: 'Empieza gratis 14 días',
    source: 'pricing_starter',
    ctaTrack: 'cta_pricing_starter',
    withMessage: false,
  },
  {
    name: 'Pro',
    slug: 'pro',
    monthly: 100,
    description: 'El más elegido por nuestros clientes',
    popular: true,
    features: [
      'Todas las apps incluidas',
      'Hasta 25 usuarios',
      'Hasta 3 locales',
      'Soporte por email + chat',
      '10 GB de almacenamiento',
      'Facturas ilimitadas',
      'IA en LikeEat (Magic Post + Brand Discovery)',
      'Lotes de pago bancario',
      'Auditoría completa',
    ],
    cta: 'Empieza gratis 14 días',
    source: 'pricing_pro',
    ctaTrack: 'cta_pricing_pro',
    withMessage: false,
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    monthly: 0,
    description: 'Para cadenas y operaciones grandes',
    features: [
      'Todas las apps + integraciones custom',
      'Usuarios ilimitados',
      'Locales ilimitados',
      'Account manager dedicado',
      'Almacenamiento ilimitado',
      'SLA 99.9%',
      'Onboarding presencial',
      'API access',
      'SSO + auditoría avanzada',
    ],
    cta: 'Hablar con ventas',
    source: 'pricing_enterprise',
    ctaTrack: 'cta_pricing_enterprise',
    withMessage: true,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [activePlan, setActivePlan] = useState<Plan | null>(null)

  const formatUSD = (n: number) =>
    `$${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: Number.isInteger(n) ? 0 : 1 })}`

  return (
    <section id="pricing" className="py-24 px-4 bg-brand-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Precios simples
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Elige el plan de tu restorán
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            14 días gratis sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          <div className="inline-flex items-center gap-3 bg-brand-900 border border-brand-700 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                !annual ? 'bg-primary-600 text-white shadow shadow-primary-600/30' : 'text-neutral-700 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                annual ? 'bg-primary-600 text-white shadow shadow-primary-600/30' : 'text-neutral-700 hover:text-white'
              }`}
            >
              Anual
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  annual ? 'bg-amber-400 text-amber-900' : 'bg-amber-500/20 text-amber-300'
                }`}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price = annual ? plan.monthly * 0.8 : plan.monthly
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-br from-brand-800 to-brand-900 text-white border-2 border-primary-500 shadow-2xl shadow-primary-500/20 md:scale-105'
                    : 'bg-brand-900 border border-brand-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    <Sparkles size={12} />
                    Más popular
                  </div>
                )}

                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-neutral-700' : 'text-neutral-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    {plan.monthly > 0 ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-4xl font-bold tabular-nums ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                            {formatUSD(price)}
                          </span>
                          <span className={`text-sm ${plan.popular ? 'text-neutral-600' : 'text-neutral-500'}`}>
                            USD/mes
                          </span>
                        </div>
                        {annual && (
                          <div className={`text-xs mt-1 ${plan.popular ? 'text-primary-300' : 'text-primary-400'}`}>
                            Facturado anualmente · Ahorra {formatUSD(plan.monthly * 12 * 0.2)} al año
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                        Conversemos
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary-300' : 'text-primary-400'}`}
                      />
                      <span className={plan.popular ? 'text-neutral-800' : 'text-neutral-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setActivePlan(plan)}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-400 text-brand-950 shadow-lg shadow-primary-500/30'
                      : 'bg-brand-800 hover:bg-brand-700 text-neutral-900 border border-brand-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-neutral-600 mt-8">
          Todos los planes incluyen actualizaciones automáticas y backups diarios.
        </p>
      </div>

      <LeadModal
        open={activePlan !== null}
        onClose={() => setActivePlan(null)}
        source={activePlan?.source ?? 'contact'}
        plan={activePlan?.slug}
        ctaTrack={activePlan?.ctaTrack ?? 'cta_pricing_starter'}
        title={
          activePlan?.slug === 'enterprise'
            ? 'Hablemos de tu operación'
            : `Empieza tu prueba — Plan ${activePlan?.name ?? ''}`
        }
        description={
          activePlan?.slug === 'enterprise'
            ? 'Cuéntanos sobre tu cadena y te contactamos en menos de 24 horas hábiles.'
            : 'Te enviamos el acceso para que actives tu prueba gratuita de 14 días.'
        }
        withMessage={activePlan?.withMessage ?? false}
        successCtaHref={activePlan?.slug !== 'enterprise' ? 'https://app.eatcorp.cl/#/' : undefined}
        successCtaLabel={activePlan?.slug !== 'enterprise' ? 'Ir a app.eatcorp.cl' : undefined}
      />
    </section>
  )
}
