import { CreditCard, Landmark, Sparkles, Shield, type LucideIcon } from 'lucide-react'

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
    id: 'pos',
    title: 'POS y ventas',
    description: 'PayEat es tu POS: mesas, comandas a cocina y caja con arqueo, con el stock que se descuenta solo. ¿Prefieres seguir con tu POS actual? También leemos esas ventas.',
    icon: CreditCard,
    partners: ['PayEat (POS propio)', 'Tu POS actual', 'CookEat (cocina)'],
    via: 'PayEat',
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
    id: 'ai',
    title: 'Inteligencia artificial',
    description: 'Magic Post, Brand Discovery y traducción del menú usan los mejores modelos del mercado, no IA genérica.',
    icon: Sparkles,
    partners: ['Modelos líderes', 'IA en tu voz', 'No genérica'],
    via: 'LikeEat + MenuEat',
    gradient: 'from-pink-500 to-rose-500',
    accentText: 'text-pink-300',
    accentBg: 'bg-pink-500/15',
    accentBorder: 'border-pink-500/40',
  },
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
                  <h3 className="text-base font-bold text-neutral-900 leading-tight flex-1">{cat.title}</h3>
                  <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-primary-500/15 text-primary-300 border-primary-500/40">
                    Disponible hoy
                  </span>
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

        <div className="bg-brand-950/60 border border-brand-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
            <Shield size={18} className="text-primary-300" />
          </div>
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-1">Tus datos, seguros y privados</h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Tu información vive en servidores de primer nivel, con respaldos automáticos y cifrado. Cada
              restorán ve solo lo suyo — nadie de otra cuenta puede ver lo tuyo.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
