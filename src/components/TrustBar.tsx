import { Shield, Headset, Zap, Lock } from 'lucide-react'

const items = [
  { icon: Headset, label: 'Soporte en castellano', sub: 'Respuesta en 24 h hábiles' },
  { icon: Lock, label: 'TLS + RLS', sub: 'Encriptado end-to-end' },
  { icon: Shield, label: 'Backups diarios', sub: '30 días de retención' },
  { icon: Zap, label: 'Uptime 99.9%', sub: 'Monitoreo 24/7' },
]

const tech = ['Supabase', 'Vercel', 'Resend', 'Sentry']

export function TrustBar() {
  return (
    <section className="py-16 px-4 bg-brand-900 border-t border-brand-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 bg-brand-800/50 rounded-xl border border-brand-700 hover:border-primary-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-700 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary-300" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-900">{item.label}</div>
                  <div className="text-xs text-neutral-600">{item.sub}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-4">
            Construido con tecnología confiable
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 opacity-90">
            {tech.map((t) => (
              <div
                key={t}
                className="font-mono text-xs text-neutral-700 px-3 py-1.5 border border-brand-700 bg-brand-950/40 rounded-md"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
