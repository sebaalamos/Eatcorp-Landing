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
      setMessage('')
      setStatus('idle')
      setErrorMsg(null)
    }
  }, [open])

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setErrorMsg(null)

    const result = await submitLead({
      email,
      source,
      plan,
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
        className="relative w-full max-w-md bg-brand-900 border border-brand-700 rounded-2xl shadow-2xl p-6"
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
                  className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60"
                />
              </div>

              {withMessage && (
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wide">
                    Cuéntanos brevemente
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    disabled={status === 'loading'}
                    placeholder="Cantidad de locales, equipo, qué buscas..."
                    className="w-full px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 transition disabled:opacity-60 resize-none"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-400 text-brand-950 font-semibold rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'loading' ? 'Enviando…' : 'Enviar'}
              </button>

              {status === 'error' && errorMsg && (
                <p className="text-xs text-rose-300">{errorMsg}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}
