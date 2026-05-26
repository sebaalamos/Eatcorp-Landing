'use client'

import { useEffect, useState } from 'react'
import { X, Loader2, Check } from 'lucide-react'
import { submitLead, type LeadSource } from '@/lib/leads'
import { trackCTA, type CtaName } from '@/lib/track'

type Props = {
  open: boolean
  onClose: () => void
  source: LeadSource
  plan?: string
  ctaTrack: CtaName
  title: string
  description: string
  withMessage?: boolean
  successCtaHref?: string
  successCtaLabel?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const APP_OPTIONS: { slug: string; label: string }[] = [
  { slug: 'buyeat', label: 'BuyEat · Compras' },
  { slug: 'taskeat', label: 'TaskEat · Tareas' },
  { slug: 'likeeat', label: 'LikeEat · RRSS + IA' },
  { slug: 'maintaineat', label: 'MaintainEat · Mantención' },
  { slug: 'eventeat', label: 'EventEat · Eventos' },
  { slug: 'menueat', label: 'MenuEat · Carta digital' },
  { slug: 'tipeat', label: 'TipEat · Propinas' },
  { slug: 'bookeat', label: 'BookEat · Reservas' },
  { slug: 'staffeat', label: 'StaffEat · RR.HH.' },
]

export function LeadModal({
  open,
  onClose,
  source,
  plan,
  ctaTrack,
  title,
  description,
  withMessage = false,
  successCtaHref,
  successCtaLabel,
}: Props) {
  const [email, setEmail] = useState('')
  const [contactName, setContactName] = useState('')
  const [restaurantName, setRestaurantName] = useState('')
  const [phone, setPhone] = useState('')
  const [appsInterest, setAppsInterest] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setEmail('')
      setContactName('')
      setRestaurantName('')
      setPhone('')
      setAppsInterest([])
      setMessage('')
      setStatus('idle')
      setErrorMsg(null)
    }
  }, [open])

  if (!open) return null

  const toggleApp = (slug: string) => {
    setAppsInterest((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !contactName.trim() || !restaurantName.trim() || status === 'loading') return

    setStatus('loading')
    setErrorMsg(null)

    const result = await submitLead({
      email,
      source,
      plan,
      contact_name: contactName.trim(),
      restaurant_name: restaurantName.trim(),
      phone: phone.trim() || undefined,
      apps_interest: appsInterest.length > 0 ? appsInterest : undefined,
      message: withMessage ? message : undefined,
    })

    if (result.ok) {
      trackCTA(ctaTrack, { plan: plan ?? '' })
      trackCTA('lead_captured', { source })
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg('Algo falló. Escríbenos a hola@eatcorp.cl')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-brand-900 border border-brand-700 rounded-2xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-neutral-600 hover:text-neutral-900 transition"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/15 border border-primary-500/30 mb-4">
              <Check size={24} className="text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">¡Recibido!</h3>
            <p className="text-sm text-neutral-700 mb-6">
              Te escribimos en menos de 24 horas hábiles.
            </p>
            {successCtaHref && successCtaLabel && (
              <a
                href={successCtaHref}
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-400 text-brand-950 font-semibold rounded-lg transition"
              >
                {successCtaLabel}
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="block w-full mt-3 text-sm text-neutral-600 hover:text-neutral-800"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
            <p className="text-sm text-neutral-600 mb-5">{description}</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="María González"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60 text-base sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                    Restorán
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Restorán Demo"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60 text-base sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@restoran.cl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60 text-base sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                    Teléfono / WhatsApp <span className="text-neutral-500 font-normal normal-case">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60 text-base sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                  Apps de interés <span className="text-neutral-500 font-normal normal-case">(marca las que te interesan)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {APP_OPTIONS.map((app) => {
                    const checked = appsInterest.includes(app.slug)
                    return (
                      <label
                        key={app.slug}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition text-sm ${
                          checked
                            ? 'bg-primary-500/15 border-primary-500/50 text-neutral-900'
                            : 'bg-brand-800 border-brand-700 text-neutral-700 hover:border-brand-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleApp(app.slug)}
                          disabled={status === 'loading'}
                          className="accent-primary-500 w-4 h-4 flex-shrink-0"
                        />
                        <span className="truncate">{app.label}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {withMessage && (
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                    Cuéntanos más <span className="text-neutral-500 font-normal normal-case">(opcional)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    disabled={status === 'loading'}
                    placeholder="Cantidad de locales, qué buscas, dudas que tengas..."
                    className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60 resize-none text-base sm:text-sm"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-400 text-brand-950 font-semibold rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'loading' ? 'Enviando…' : 'Solicitar early access'}
              </button>

              <p className="text-[11px] text-neutral-500 text-center">
                Te respondemos en menos de 24 horas hábiles a <a href="mailto:hola@eatcorp.cl" className="underline hover:text-neutral-700">hola@eatcorp.cl</a>.
              </p>

              {status === 'error' && errorMsg && (
                <p className="text-xs text-rose-300 text-center">{errorMsg}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}
