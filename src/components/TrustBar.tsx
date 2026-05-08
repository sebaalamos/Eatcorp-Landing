import { Shield, Headset, Zap, Lock } from 'lucide-react'

const items = [
  { icon: Headset, label: 'Soporte en español', sub: 'Respuesta en 24 h hábiles' },
  { icon: Lock, label: 'TLS + RLS', sub: 'Encriptado end-to-end' },
  { icon: Shield, label: 'Backups diarios', sub: 'Datos seguros' },
  { icon: Zap, label: 'Uptime alto', sub: 'Monitoreo activo' },
]

export function TrustBar() {
  return (
    <section className="py-16 px-4 bg-brand-900 border-t border-brand-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
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
      </div>
    </section>
  )
}
