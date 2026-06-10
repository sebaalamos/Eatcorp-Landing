import { Shield, Headset, Zap, Lock } from 'lucide-react'
import { PRODUCTS_LIST } from '@/lib/products'

const APP_COUNT = PRODUCTS_LIST.length

type Stat = {
  number: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    number: String(APP_COUNT),
    label: 'Apps disponibles',
    description: 'Una suite que crece. Activas solo las que tu restorán necesita.',
  },
  {
    number: '1',
    label: 'Plataforma, un login',
    description: 'Reemplaza el Excel y los sistemas sueltos. Todo conectado entre apps.',
  },
  {
    number: '< 24 h',
    label: 'Te respondemos',
    description: 'Dejas tu solicitud y te contactamos en horario hábil, sin bots.',
  },
  {
    number: 'ES',
    label: '100% en español',
    description: 'App, soporte y onboarding en tu idioma, hechos para Chile y LatAm.',
  },
]

const trust = [
  { icon: Headset, label: 'Soporte en español', sub: 'Personas reales, horario hábil' },
  { icon: Lock, label: 'Datos encriptados', sub: 'Aislados por restorán: solo tú ves los tuyos' },
  { icon: Shield, label: 'Backups diarios', sub: 'Respaldo automático todos los días' },
  { icon: Zap, label: 'Uptime monitoreado', sub: 'Infraestructura vigilada' },
]

export function Stats() {
  return (
    <section className="py-20 px-4 bg-brand-950 border-y border-brand-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ number, label, description }) => (
            <div
              key={label}
              className="group relative rounded-2xl border border-brand-800 bg-brand-900/40 p-6 text-center hover:border-primary-500/40 hover:bg-brand-900/70 transition-all overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 bg-primary-500/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <div className="relative">
                <div className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-primary-500 leading-none mb-2 tabular-nums tracking-tight">
                  {number}
                </div>
                <div className="text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">{label}</div>
                <div className="text-sm text-neutral-700 leading-relaxed">{description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 md:mt-6">
          {trust.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 bg-brand-900/40 rounded-xl border border-brand-800 hover:border-primary-500/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-950 border border-brand-700 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary-300" strokeWidth={1.75} />
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
