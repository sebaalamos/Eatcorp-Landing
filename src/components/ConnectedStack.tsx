import { CreditCard, Landmark, Clock, FileText, Wallet, Sparkles, Shield, type LucideIcon } from 'lucide-react'

type Category = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  partners: string[]
  via: string
  gradient: string
  accentText: string
  accentBg: string
  accentBorder: string
}

const categories: Category[] = [
  {
    id: 'payment',
    title: 'Cobro con tarjeta',
    description: 'PayEat trabaja sobre el procesador que ya conoces. Hardware-agnostic, sin atarte a un POS específico.',
    icon: CreditCard,
    partners: ['Getnet', 'Transbank', 'Iziplay'],
    via: 'PayEat (Jun 2026)',
    gradient: 'from-primary-500 to-teal-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
  },
  {
    id: 'banks',
    title: 'Pago bancario',
    description: 'BuyEat genera el archivo plano que sube tu admin al portal de tu banco. Soporta los bancos chilenos principales.',
    icon: Landmark,
    partners: ['Banco de Chile', 'BCI', 'Santander', 'Itaú', 'Banco Estado'],
    via: 'BuyEat',
    gradient: 'from-blue-500 to-cyan-500',
    accentText: 'text-blue-300',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
  },
  {
    id: 'control',
    title: 'Asistencia y marcaje',
    description: 'ControlEat integra con los relojes de control que ya tienes — empezamos con Genera y sumamos los demás según demanda.',
    icon: Clock,
    partners: ['Genera', 'Geovictoria', 'Otros'],
    via: 'ControlEat (Oct 2026)',
    gradient: 'from-primary-500 to-emerald-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
  },
  {
    id: 'tax',
    title: 'Documentos tributarios',
    description: 'BillEat emite boletas, facturas y notas vía partner PSF certificado por SII (Acepta o Sovos) — camino a certificación propia.',
    icon: FileText,
    partners: ['SII', 'Acepta', 'Sovos'],
    via: 'BillEat (Nov 2026)',
    gradient: 'from-emerald-500 to-teal-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
  },
  {
    id: 'payroll',
    title: 'Liquidación de sueldos',
    description: 'PayrollEat se conecta con Previred para descontar y pagar cotizaciones. Reemplaza Talana / Buk con motor propio.',
    icon: Wallet,
    partners: ['Previred', 'Reemplaza Talana', 'Reemplaza Buk'],
    via: 'PayrollEat (Nov 2026)',
    gradient: 'from-violet-500 to-purple-500',
    accentText: 'text-violet-300',
    accentBg: 'bg-violet-500/15',
    accentBorder: 'border-violet-500/40',
  },
  {
    id: 'ai',
    title: 'Inteligencia artificial',
    description: 'Magic Post, Brand Discovery y traducción del menú usan los mejores modelos del mercado, no IA genérica.',
    icon: Sparkles,
    partners: ['Anthropic Claude', 'OpenAI GPT', 'Google Gemini'],
    via: 'LikeEat + MenuEat',
    gradient: 'from-pink-500 to-rose-500',
    accentText: 'text-pink-300',
    accentBg: 'bg-pink-500/15',
    accentBorder: 'border-pink-500/40',
  },
]

const stack = [
  { name: 'Supabase', role: 'Base de datos + Auth + Storage' },
  { name: 'Vercel', role: 'Hosting + CDN global' },
  { name: 'Resend', role: 'Emails transaccionales' },
  { name: 'Sentry', role: 'Monitoreo de errores' },
]

export function ConnectedStack() {
  return (
    <section className="py-24 px-4 bg-brand-900 border-t border-brand-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-primary-500/15 border border-primary-500/30">
            <Shield size={12} className="text-primary-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-300">Integraciones reales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Construido para conectarse
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            EatCorp orquesta tu operación — no te obliga a cambiar lo que ya
            funciona. Trabajamos con los mismos proveedores que tú ya usas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon
            return (
              <div
                key={cat.id}
                className="relative bg-brand-800/40 border border-brand-700 rounded-2xl p-5 overflow-hidden hover:border-primary-500/40 transition"
                style={{ animation: `slide-up 0.5s ease-out ${idx * 0.06}s backwards` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.gradient}`}></div>

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-md shadow-black/20`}>
                    <CatIcon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 leading-tight">{cat.title}</h3>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed mb-4">{cat.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cat.partners.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] font-semibold uppercase tracking-wide bg-brand-900 border border-brand-700 text-neutral-700 px-2 py-1 rounded"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className={`text-[10px] font-bold uppercase tracking-wider ${cat.accentText}`}>
                  Vía {cat.via}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-brand-950/60 border border-brand-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={14} className="text-primary-300" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-700">Infraestructura</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-3">
            {stack.map((s) => (
              <div key={s.name} className="bg-brand-900 border border-brand-800 rounded-lg p-3">
                <div className="font-bold text-neutral-900 text-sm">{s.name}</div>
                <div className="text-xs text-neutral-600 mt-0.5">{s.role}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-neutral-500 mt-8">
          Algunas integraciones están live, otras forman parte del roadmap del
          ecosistema. Las apps marcadas con fecha indican cuándo entran al
          ecosistema EatCorp.
        </p>
      </div>
    </section>
  )
}
