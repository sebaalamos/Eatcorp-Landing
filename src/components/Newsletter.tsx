'use client'

import { useState } from 'react'
import { Mail, Check, Loader2 } from 'lucide-react'
import { submitLead } from '@/lib/leads'
import { trackCTA } from '@/lib/track'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setErrorMsg(null)

    const result = await submitLead({ email, source: 'newsletter' })

    if (result.ok) {
      trackCTA('cta_newsletter_submit', { source: 'newsletter' })
      trackCTA('lead_captured', { source: 'newsletter' })
      setStatus('success')
      setTimeout(() => {
        setEmail('')
        setStatus('idle')
      }, 5000)
    } else {
      setStatus('error')
      setErrorMsg('Algo falló. Escríbenos a hola@eatcorp.cl')
    }
  }

  return (
    <div className="bg-gradient-to-br from-brand-900 to-brand-800 rounded-2xl p-8 md:p-10 border border-brand-700 mb-12">
      <div className="grid md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold uppercase tracking-widest mb-2">
            <Mail size={14} />
            Newsletter
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Mantente al día</h3>
          <p className="text-sm text-neutral-700">
            Tips, casos de éxito y novedades para restoranes. Una vez al mes, sin spam.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              aria-label="Email"
              placeholder="tu@restoran.cl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-4 py-3 rounded-lg bg-brand-800 border border-brand-700 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 focus:bg-brand-900 transition disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-brand-950 font-semibold rounded-lg transition flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-80"
            >
              {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
              {status === 'success' && <Check size={18} />}
              {status === 'loading' && 'Enviando…'}
              {status === 'success' && 'Suscrito'}
              {(status === 'idle' || status === 'error') && 'Suscribirme'}
            </button>
          </div>
          {status === 'error' && errorMsg && (
            <p role="alert" className="text-xs text-danger-300">{errorMsg}</p>
          )}
          {status === 'success' && (
            <p className="text-xs text-primary-300">¡Listo! Te avisamos pronto.</p>
          )}
        </form>
      </div>
    </div>
  )
}
