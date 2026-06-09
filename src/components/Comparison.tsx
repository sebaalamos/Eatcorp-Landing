import { Check, X, Minus } from 'lucide-react'

type Cell = 'yes' | 'no' | 'partial'

const rows: { feature: string; manual: Cell; generic: Cell; eatcorp: Cell }[] = [
  { feature: 'Específico para restoranes', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'Multi-app integrado (compras + tareas + RRSS + ...)', manual: 'no', generic: 'partial', eatcorp: 'yes' },
  { feature: 'Soporte y UI en español', manual: 'partial', generic: 'partial', eatcorp: 'yes' },
  { feature: 'Hecho para LatAm, en español', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'IA para redes sociales', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'Lotes de pago bancario (export Excel)', manual: 'partial', generic: 'no', eatcorp: 'yes' },
  { feature: 'Permisos granulares por app', manual: 'no', generic: 'partial', eatcorp: 'yes' },
  { feature: 'Recepción de OC con detección de discrepancias', manual: 'no', generic: 'no', eatcorp: 'yes' },
  { feature: 'Activación acompañada en días, no meses', manual: 'partial', generic: 'no', eatcorp: 'yes' },
]

const columns = [
  {
    key: 'manual' as const,
    title: 'Excel + WhatsApp',
    subtitle: 'El método tradicional',
    accent: 'border-brand-700 bg-brand-800/40',
    titleColor: 'text-neutral-700',
    subColor: 'text-neutral-500',
  },
  {
    key: 'generic' as const,
    title: 'Software genérico',
    subtitle: 'ERP, CRM globales',
    accent: 'border-brand-700 bg-brand-800/40',
    titleColor: 'text-neutral-700',
    subColor: 'text-neutral-500',
  },
  {
    key: 'eatcorp' as const,
    title: 'EatCorp',
    subtitle: 'Hecho para ti',
    accent: 'border-primary-500/40 bg-primary-500/10',
    titleColor: 'text-primary-300',
    subColor: 'text-primary-400',
    highlight: true,
  },
]

function CellIcon({ value, size = 'md' }: { value: Cell; size?: 'md' | 'sm' }) {
  const dim = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'
  const icon = size === 'sm' ? 12 : 16
  if (value === 'yes')
    return (
      <div className={`${dim} rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center`}>
        <Check size={icon} className="text-primary-300" />
      </div>
    )
  if (value === 'no')
    return (
      <div className={`${dim} rounded-full bg-danger-500/20 border border-danger-500/40 flex items-center justify-center`}>
        <X size={icon} className="text-danger-300" />
      </div>
    )
  return (
    <div className={`${dim} rounded-full bg-warning-500/20 border border-warning-500/40 flex items-center justify-center`}>
      <Minus size={icon} className="text-warning-300" />
    </div>
  )
}

export function Comparison() {
  return (
    <section className="py-24 px-4 bg-brand-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Comparativa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            ¿Por qué EatCorp?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Comparado con cómo se opera hoy en la mayoría de restoranes.
          </p>
        </div>

        <div className="hidden md:block bg-brand-950 rounded-2xl border border-brand-800 shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-brand-800 bg-brand-800/60">
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700 w-2/5">Característica</th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={`text-center py-4 px-3 text-sm font-semibold ${c.titleColor} ${c.highlight ? 'bg-primary-500/10' : ''}`}
                  >
                    <div>{c.title}</div>
                    <div className={`text-[10px] font-normal mt-0.5 uppercase tracking-wider ${c.subColor}`}>{c.subtitle}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={`border-b border-brand-800 ${i % 2 === 1 ? 'bg-brand-800/30' : ''}`}>
                  <td className="py-4 px-6 text-sm text-neutral-800 font-medium">{r.feature}</td>
                  <td className="py-4 px-3"><div className="flex justify-center"><CellIcon value={r.manual} /></div></td>
                  <td className="py-4 px-3"><div className="flex justify-center"><CellIcon value={r.generic} /></div></td>
                  <td className="py-4 px-3 bg-primary-500/10"><div className="flex justify-center"><CellIcon value={r.eatcorp} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {[...columns].sort((a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight))).map((c) => (
            <div
              key={c.key}
              className={`relative rounded-2xl border-2 shadow-md overflow-hidden ${c.highlight ? 'border-primary-500/50 bg-brand-800' : 'border-brand-800 bg-brand-900'}`}
            >
              {c.highlight && (
                <div className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-primary-600 text-white px-2 py-0.5 rounded-full">
                  Recomendado
                </div>
              )}
              <div className={`px-5 py-4 border-b ${c.highlight ? 'bg-primary-500/15 border-primary-500/30' : 'bg-brand-800/60 border-brand-800'}`}>
                <h3 className={`text-lg font-bold ${c.titleColor}`}>{c.title}</h3>
                <p className={`text-[11px] uppercase tracking-wider font-semibold ${c.subColor}`}>{c.subtitle}</p>
              </div>
              <ul className="divide-y divide-brand-800">
                {rows.map((r) => (
                  <li key={r.feature} className="flex items-center gap-3 px-5 py-3">
                    <CellIcon value={r[c.key]} size="sm" />
                    <span className="text-sm text-neutral-700 flex-1 leading-snug">{r.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-xs text-neutral-600">
          <div className="flex items-center gap-1.5"><Check size={14} className="text-primary-300" /> Sí</div>
          <div className="flex items-center gap-1.5"><Minus size={14} className="text-warning-300" /> Parcial</div>
          <div className="flex items-center gap-1.5"><X size={14} className="text-danger-300" /> No</div>
        </div>
      </div>
    </section>
  )
}
