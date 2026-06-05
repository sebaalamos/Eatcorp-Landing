import { Check, Sparkles, Camera, Heart, MessageCircle, Send, Bookmark, BadgeCheck, QrCode, Languages, Users, CalendarClock, Wrench, ClipboardList, AlertTriangle, Calendar as CalIcon, UserCheck, Coins, Link2, Boxes, ChefHat, TrendingDown, TrendingUp, ArrowRight as ArrowR, Package, Gift, Lock } from 'lucide-react'
import type { ProductSlug } from '@/lib/products'

export function ProductMockup({ slug }: { slug: ProductSlug }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-3 bg-primary-500/20 rounded-3xl blur-2xl opacity-30"></div>
      <div className="relative bg-brand-900 rounded-2xl shadow-2xl border border-brand-700 overflow-hidden">
        <div className="bg-brand-950 px-3 py-2 flex items-center gap-1.5 border-b border-brand-800">
          <div className="w-2.5 h-2.5 rounded-full bg-danger-500/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-warning-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary-500/80"></div>
          <div className="flex-1 mx-3 h-5 rounded bg-brand-900 border border-brand-800 px-2 flex items-center text-[10px] text-neutral-600 font-mono">
            app.eatcorp.cl/#/{slug}
          </div>
        </div>
        {slug === 'buyeat' && <BuyEatM />}
        {slug === 'taskeat' && <TaskEatM />}
        {slug === 'likeeat' && <LikeEatM />}
        {slug === 'maintaineat' && <MaintainEatM />}
        {slug === 'eventeat' && <EventEatM />}
        {slug === 'menueat' && <MenuEatM />}
        {slug === 'tipeat' && <TipEatM />}
        {slug === 'inventeat' && <InventEatM />}
        {slug === 'recipeat' && <RecipEatM />}
        {slug === 'payeat' && <PayEatM />}
        {slug === 'bookeat' && <BookEatM />}
        {slug === 'staffeat' && <StaffEatM />}
        {slug === 'gifteat' && <GiftEatM />}
      </div>
    </div>
  )
}

function GiftEatM() {
  const movimientos = [
    { label: 'Emitida', detail: 'Certificado PDF enviado', amount: '+$50.000', tone: 'text-neutral-700' },
    { label: 'Canje · Mesa 6', detail: 'Cena · 14 may', amount: '−$23.400', tone: 'text-rose-300' },
    { label: 'Canje · Barra', detail: 'Tragos · 22 may', amount: '−$8.600', tone: 'text-rose-300' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Tarjeta de regalo</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">Código GIFT-7QK2 · vigente</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
          <Gift size={10} />
          GiftEat
        </div>
      </div>

      <div className="relative rounded-xl bg-gradient-to-br from-rose-500 to-red-600 p-4 shadow-lg shadow-rose-500/30 overflow-hidden mb-3">
        <div aria-hidden className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10"></div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Gift Card</span>
          <Gift size={16} className="text-white/90" />
        </div>
        <div className="text-[10px] text-white/70 uppercase tracking-wider">Saldo disponible</div>
        <div className="text-2xl font-bold text-white tabular-nums leading-none mt-0.5">$18.000</div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] font-mono text-white/80 tracking-widest">GIFT-7QK2-····</span>
          <span className="text-[9px] text-white/70">de $50.000</span>
        </div>
      </div>

      <div className="space-y-1.5 mb-3">
        {movimientos.map((m, i) => (
          <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg border bg-brand-800/60 border-brand-700">
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-neutral-900 truncate">{m.label}</div>
              <div className="text-[9px] text-neutral-600">{m.detail}</div>
            </div>
            <span className={`text-[11px] font-bold tabular-nums ${m.tone}`}>{m.amount}</span>
          </div>
        ))}
      </div>

      <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-wider text-rose-300 mb-0.5">Canje público</div>
            <div className="text-[10px] text-neutral-700 font-mono truncate">app.eatcorp.cl/#/gift/<span className="text-rose-200">7qk2</span></div>
          </div>
          <div className="flex items-center gap-1 text-[9px] font-bold text-rose-300 bg-rose-500/15 border border-rose-500/30 px-1.5 py-0.5 rounded-full flex-shrink-0">
            <Lock size={9} />
            PIN
          </div>
        </div>
        <div className="text-[9px] text-neutral-600">El cliente consulta su saldo y canjea solo.</div>
      </div>
    </div>
  )
}

function TipEatM() {
  const groups = [
    { label: 'Sala', mult: '1.0x', accent: 'bg-amber-500', count: 4, share: '$320.000' },
    { label: 'Cocina', mult: '0.8x', accent: 'bg-orange-500', count: 3, share: '$192.000' },
    { label: 'Barra', mult: '1.0x', accent: 'bg-yellow-500', count: 2, share: '$160.000' },
    { label: 'Apoyo', mult: '0.5x', accent: 'bg-amber-400', count: 2, share: '$80.000' },
  ]
  const staff = [
    { initials: 'JR', name: 'Javiera R.', group: 'Sala', amount: '$80.000', tag: 'Lleno' },
    { initials: 'PC', name: 'Pedro C.', group: 'Cocina', amount: '$64.000', tag: 'Lleno' },
    { initials: 'MA', name: 'Marcos A.', group: 'Barra', amount: '$80.000', tag: 'Parcial' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Ciclo · semana 19</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">Pot total $752.000 · 11 personas</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
          <Coins size={10} />
          Cerrado
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {groups.map((g) => (
          <div key={g.label} className="bg-brand-800/60 border border-brand-700 rounded-lg p-2">
            <div className="flex items-center gap-1 mb-1">
              <div className={`w-1.5 h-1.5 rounded-full ${g.accent}`}></div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700 truncate">{g.label}</div>
            </div>
            <div className="text-[9px] font-bold text-amber-300">{g.mult}</div>
            <div className="text-[9px] text-neutral-600">{g.count} pers.</div>
            <div className="text-[10px] font-bold text-neutral-900 mt-1 tabular-nums">{g.share}</div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5 mb-3">
        {staff.map((s, i) => (
          <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg border bg-brand-800/60 border-brand-700">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 shadow-sm">
              {s.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-neutral-900 truncate">{s.name}</span>
                <span className="text-[8px] text-neutral-600">·</span>
                <span className="text-[9px] text-neutral-600">{s.group}</span>
              </div>
              <span className="text-[9px] font-semibold text-neutral-700 bg-brand-900 border border-brand-700 px-1.5 py-0.5 rounded mt-0.5 inline-block">{s.tag}</span>
            </div>
            <span className="text-[11px] font-bold text-amber-300 tabular-nums">{s.amount}</span>
          </div>
        ))}
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-0.5">Link público</div>
            <div className="text-[10px] text-neutral-700 font-mono">app.eatcorp.cl/share/tipeat/<span className="text-amber-200">a3f2k9pl0xqz</span></div>
          </div>
          <button className="px-2 py-1 bg-amber-600 text-white text-[10px] font-semibold rounded shadow-sm shadow-amber-500/40 flex items-center gap-1">
            <Link2 size={11} />
            Copiar
          </button>
        </div>
        <div className="text-[9px] text-neutral-600">El equipo lo ve en su celular. Sin reclamos.</div>
      </div>
    </div>
  )
}

function BuyEatM() {
  const invoices = [
    { name: 'Distribuidora Central', amount: '$1.240.000', due: 'Vence hoy', selected: true, urgent: true },
    { name: 'Carnes y embutidos S.A.', amount: '$680.500', due: 'Pronto pago -3%', selected: true, savings: true },
    { name: 'Bebidas premium', amount: '$720.000', due: 'En 5 días', selected: true },
    { name: 'Lácteos cordillera', amount: '$310.000', due: 'En 8 días' },
    { name: 'Verduras del valle', amount: '$245.500', due: 'En 12 días' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Pagos pendientes</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">Lote del día · 5 facturas</div>
        </div>
        <div className="flex gap-1">
          {['Todas', 'Pendientes', 'Aprobadas'].map((f, i) => (
            <span key={f} className={`text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${i === 1 ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/40' : 'bg-brand-800 text-neutral-700 border border-brand-700'}`}>
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-1.5 mb-3">
        {invoices.map((p, i) => (
          <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg border ${p.selected ? 'bg-blue-500/10 border-blue-500/40' : 'bg-brand-800/60 border-brand-700'}`}>
            <div className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 ${p.selected ? 'bg-blue-500 border-blue-500' : 'border-brand-600'}`}>
              {p.selected && <div className="flex items-center justify-center h-full"><Check size={9} className="text-white" strokeWidth={3} /></div>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-neutral-900 truncate">{p.name}</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] text-neutral-700 font-medium">{p.amount}</span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${p.urgent ? 'bg-rose-500/25 text-rose-300 ring-1 ring-rose-500/40' : p.savings ? 'bg-primary-500/20 text-primary-300' : 'bg-brand-700 text-neutral-600'}`}>
                  {p.due}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-brand-800">
        <div className="text-[10px] text-neutral-600">
          <span className="font-bold text-neutral-900">3 seleccionadas</span> · Total <span className="font-bold text-neutral-900">$2.640.500</span>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-md shadow-blue-500/30 flex items-center gap-1.5">
          <Check size={12} />
          Aprobar lote
        </button>
      </div>
    </div>
  )
}

function TaskEatM() {
  const columns = [
    {
      label: 'Cocina',
      color: 'bg-primary-500',
      tasks: [
        { title: 'Reponer aceite de oliva', who: 'M', urg: 'Hoy' },
        { title: 'Probar receta pasta nueva', who: 'C' },
        { title: 'Revisar stock semana', who: 'M' },
      ],
    },
    {
      label: 'Admin',
      color: 'bg-blue-500',
      tasks: [
        { title: 'Conciliar cartola BCI', who: 'J', urg: 'Vence' },
        { title: 'Pagar arriendo abril', who: 'J' },
      ],
    },
    {
      label: 'Marketing',
      color: 'bg-pink-500',
      tasks: [
        { title: 'Foto plato del mes', who: 'V' },
        { title: 'Plan Día de la Madre', who: 'V' },
        { title: 'Reels semana', who: 'V' },
      ],
    },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Tareas activas</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">8 tareas · 3 categorías</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-300 font-semibold border border-primary-500/30">
          <ClipboardList size={10} />
          Kanban
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {columns.map((col) => (
          <div key={col.label} className="bg-brand-800/40 border border-brand-700 rounded-lg p-2">
            <div className="flex items-center gap-1.5 mb-2">
              <div className={`w-1.5 h-1.5 rounded-full ${col.color}`}></div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700">{col.label}</div>
              <div className="ml-auto text-[9px] text-neutral-600 font-bold">{col.tasks.length}</div>
            </div>
            <div className="space-y-1.5">
              {col.tasks.map((t, i) => (
                <div key={i} className="bg-brand-900 border border-brand-700 rounded-md p-1.5">
                  <div className="text-[10px] text-neutral-800 leading-tight mb-1">{t.title}</div>
                  <div className="flex items-center justify-between">
                    <div className={`w-4 h-4 rounded-full ${col.color} flex items-center justify-center text-white text-[8px] font-bold`}>{t.who}</div>
                    {t.urg && (
                      <span className="text-[8px] font-semibold px-1 py-0.5 rounded bg-rose-500/20 text-rose-300">{t.urg}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-brand-800 flex items-center justify-between text-[10px]">
        <span className="text-neutral-600">Visibilidad híbrida · staff ve solo lo suyo</span>
        <span className="text-primary-300 font-semibold">+ Nueva tarea</span>
      </div>
    </div>
  )
}

function LikeEatM() {
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Plan de la semana</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">9 posts agendados</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-semibold border border-pink-500/30">
          <Sparkles size={10} />
          <span>Brand IA</span>
        </div>
      </div>

      <div className="bg-brand-800/60 border border-brand-700 rounded-lg overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-2.5 py-1.5 border-b border-brand-700">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[9px] font-bold shadow-sm">R</div>
          <div className="flex items-center gap-0.5 flex-1 min-w-0">
            <span className="text-[10px] font-bold text-neutral-900 truncate">tu_restorán</span>
            <BadgeCheck size={11} className="text-blue-400 flex-shrink-0 fill-blue-400 stroke-brand-900" />
          </div>
          <span className="text-[9px] text-neutral-500">Hoy 18:30</span>
        </div>

        <div className="aspect-[5/4] relative overflow-hidden bg-slate-900">
          <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="pasta-bg-p" cx="50%" cy="40%" r="80%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#7c2d12" />
              </radialGradient>
              <radialGradient id="plate-p" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#d4a373" />
              </radialGradient>
              <radialGradient id="sauce-p" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
            <rect width="200" height="160" fill="url(#pasta-bg-p)" />
            <ellipse cx="100" cy="85" rx="78" ry="58" fill="rgba(0,0,0,0.18)" />
            <ellipse cx="100" cy="80" rx="76" ry="56" fill="url(#plate-p)" />
            <path d="M 50 75 Q 90 50 145 70 T 155 95 Q 130 115 95 105 T 50 75" fill="#f59e0b" opacity="0.85" />
            <ellipse cx="105" cy="82" rx="32" ry="20" fill="url(#sauce-p)" opacity="0.85" />
            <ellipse cx="125" cy="68" rx="5" ry="2.5" fill="#16a34a" transform="rotate(-20 125 68)" />
            <ellipse cx="80" cy="92" rx="4" ry="2" fill="#16a34a" transform="rotate(35 80 92)" />
          </svg>
          <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-600/90 text-white text-[10px] font-bold">
            <Sparkles size={10} />
            <span>IA · 2,3s</span>
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-brand-950/85 backdrop-blur text-[9px] font-bold text-neutral-800">
            <Camera size={9} className="text-pink-400" />
            <span>Reel</span>
          </div>
        </div>

        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2.5">
              <Heart size={16} className="text-neutral-700" />
              <MessageCircle size={16} className="text-neutral-700" />
              <Send size={16} className="text-neutral-700" />
            </div>
            <Bookmark size={16} className="text-neutral-700" />
          </div>
          <div className="text-[10px] font-bold text-neutral-900">312 me gusta</div>
          <div className="text-[10px] text-neutral-700 leading-snug mt-0.5">
            <span className="font-bold">tu_restorán</span> Pasta fresca, salsa de la nona y un vino que abraza. ¿Reservas para esta noche?
          </div>
        </div>
      </div>

      <div className="mt-2.5 px-3 py-1.5 rounded-md bg-pink-500/10 border border-pink-500/30 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-neutral-700">
          <Sparkles size={10} className="text-pink-400" />
          <span>Predicción: <span className="font-bold text-neutral-900">240–380 likes</span></span>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-wide text-primary-300 bg-primary-500/20 border border-primary-500/30 px-1.5 py-0.5 rounded">
          91% aprob.
        </span>
      </div>

      <div className="flex gap-1.5 mt-3">
        <button className="flex-1 py-2 bg-primary-600 text-white text-[11px] font-semibold rounded-lg shadow-sm shadow-primary-500/40">Aprobar</button>
        <button className="flex-1 py-2 bg-brand-800 text-neutral-800 text-[11px] font-semibold rounded-lg border border-brand-700">Editar</button>
        <button className="flex-1 py-2 bg-pink-500/20 text-pink-300 text-[11px] font-semibold rounded-lg border border-pink-500/30">Pedir otro</button>
      </div>
    </div>
  )
}

function MaintainEatM() {
  const assets = [
    { name: 'Campana extractora · Italinox', next: 'Mant. preventiva en 8 días', status: 'OK', tone: 'bg-primary-500/20 text-primary-300', progress: 0.7 },
    { name: 'Horno combi · Rational', next: 'Programada 24 may', status: 'OK', tone: 'bg-primary-500/20 text-primary-300', progress: 0.85 },
    { name: 'Freezer 600L · Mabe', next: 'Atrasada · 12 días', status: 'Atrasada', tone: 'bg-rose-500/25 text-rose-300', progress: 0.35, urgent: true },
    { name: 'Plancha 90cm', next: 'Próxima · 12 jun', status: 'OK', tone: 'bg-primary-500/20 text-primary-300', progress: 0.6 },
    { name: 'Extintor cocina', next: 'Recarga anual oct', status: 'OK', tone: 'bg-primary-500/20 text-primary-300', progress: 0.9 },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Activos · Cocina</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">5 críticos · 1 atrasado</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
          <Wrench size={10} />
          Preventiva
        </div>
      </div>

      <div className="space-y-1.5">
        {assets.map((a, i) => (
          <div key={i} className={`p-2.5 rounded-lg border ${a.urgent ? 'bg-rose-500/10 border-rose-500/40' : 'bg-brand-800/60 border-brand-700'}`}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                <Wrench size={12} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-neutral-900 truncate">{a.name}</div>
                <div className="text-[10px] text-neutral-700 mt-0.5 flex items-center gap-1">
                  {a.urgent && <AlertTriangle size={10} className="text-rose-300" />}
                  {a.next}
                </div>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${a.tone}`}>
                {a.status}
              </span>
            </div>
            <div className="h-1 bg-brand-900 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${a.urgent ? 'bg-rose-400' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`}
                style={{ width: `${a.progress * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-brand-800 flex items-center justify-between text-[10px]">
        <span className="text-neutral-600">Costo mant. mensual: <span className="font-bold text-neutral-900">$245.000</span></span>
        <span className="text-amber-300 font-semibold">+ Activo</span>
      </div>
    </div>
  )
}

function EventEatM() {
  const events = [
    { date: '12', month: 'MAY', name: 'Cumpleaños · Familia González', pax: 24, monto: '$960K', status: 'Confirmado', accent: 'bg-rose-500', tone: 'bg-primary-500/20 text-primary-300' },
    { date: '17', month: 'MAY', name: 'Cierre fiscal · Constructora', pax: 60, monto: '$2.8M', status: 'Cotizando', accent: 'bg-rose-400', tone: 'bg-amber-500/20 text-amber-300', selected: true },
    { date: '24', month: 'MAY', name: 'Privado · 12p', pax: 12, monto: '$540K', status: 'Pendiente', accent: 'bg-rose-300', tone: 'bg-brand-700 text-neutral-600' },
  ]

  const checklist = [
    { label: 'Confirmar menú con cocina', done: true },
    { label: 'Reservar barra de vinos', done: true },
    { label: 'Confirmar floristería', done: false },
    { label: 'Plan B lluvia', done: false },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Eventos próximos</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">Mayo · 3 eventos</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
          <CalendarClock size={10} />
          Calendario
        </div>
      </div>

      <div className="space-y-1.5 mb-3">
        {events.map((e) => (
          <div key={e.date} className={`flex items-center gap-2.5 p-2 rounded-lg border ${e.selected ? 'bg-rose-500/15 border-rose-500/50' : 'bg-brand-800/60 border-brand-700'}`}>
            <div className={`w-10 h-10 rounded-md flex flex-col items-center justify-center flex-shrink-0 ${e.accent} text-white shadow-sm`}>
              <span className="text-[14px] font-bold leading-none tabular-nums">{e.date}</span>
              <span className="text-[7px] font-bold tracking-wider opacity-80 leading-none mt-0.5">{e.month}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-neutral-900 truncate">{e.name}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] text-neutral-700 flex items-center gap-0.5">
                  <Users size={9} />
                  {e.pax}
                </span>
                <span className="text-[9px] font-bold text-neutral-700 tabular-nums">{e.monto}</span>
              </div>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${e.tone}`}>{e.status}</span>
          </div>
        ))}
      </div>

      <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[11px] font-bold text-neutral-900">17 mayo · Cierre fiscal</div>
            <div className="text-[9px] text-neutral-700 mt-0.5">Salón privado · open bar · cena</div>
          </div>
          <div className="text-right">
            <div className="text-[8px] text-neutral-600 uppercase tracking-wider font-bold">Cotización</div>
            <div className="text-base font-bold text-rose-300 tabular-nums leading-none">$2.8M</div>
          </div>
        </div>
        <div className="space-y-1 mb-2">
          {checklist.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-[9px]">
              <div className={`w-3 h-3 rounded-sm border-2 flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-primary-500 border-primary-500' : 'border-brand-600'}`}>
                {item.done && <Check size={7} className="text-white" strokeWidth={3} />}
              </div>
              <span className={item.done ? 'text-neutral-600 line-through' : 'text-neutral-800'}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          <button className="flex-1 py-1.5 bg-rose-600 text-white text-[10px] font-semibold rounded shadow-sm shadow-rose-500/40">Enviar cotización</button>
          <button className="flex-1 py-1.5 bg-brand-900 text-neutral-800 text-[10px] font-semibold rounded border border-brand-700">Ver detalle</button>
        </div>
      </div>
    </div>
  )
}

function MenuEatM() {
  const dishes = [
    { name: 'Pasta de la nona', desc: 'Salsa pomodoro, albahaca, parmesano', price: '$12.500', tags: ['🌱'], grad: 'from-amber-300 via-orange-400 to-rose-500', mark: 'P' },
    { name: 'Asado tira', desc: 'Cocción 14h · papas confit · chimichurri', price: '$18.900', tags: ['🔥'], grad: 'from-rose-400 via-red-500 to-amber-700', mark: 'A', featured: true },
    { name: 'Empanada queso', desc: 'Masa de manteca, queso mantecoso fundido', price: '$3.500', tags: ['❤️'], grad: 'from-yellow-300 via-amber-400 to-orange-600', mark: 'E' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
        <div className="relative w-28 flex flex-col items-center bg-gradient-to-br from-orange-500/15 to-brand-950 border border-orange-500/30 rounded-xl p-2.5 shadow-md shadow-orange-500/15">
          <div className="text-[9px] font-bold uppercase tracking-wider text-orange-300 mb-2">Mesa 4</div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center shadow-inner">
            <QrCode size={56} className="text-orange-900" strokeWidth={1.4} />
          </div>
          <div className="mt-2 text-[8px] text-neutral-600 text-center leading-tight">QR durable</div>
        </div>

        <div className="bg-brand-800/40 border border-brand-700 rounded-xl overflow-hidden">
          <div className="px-3 py-2 border-b border-brand-700 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-neutral-900 leading-tight">Carta</div>
              <div className="text-[9px] text-neutral-600 mt-0.5">Cena · martes</div>
            </div>
            <div className="flex items-center gap-1 bg-brand-900 border border-brand-700 rounded-full p-0.5">
              <span className="px-1.5 py-px rounded-full bg-orange-500 text-white text-[8px] font-bold">ES</span>
              <span className="px-1.5 py-px rounded-full text-neutral-600 text-[8px] font-bold flex items-center gap-0.5">
                <Languages size={8} />
                EN
              </span>
            </div>
          </div>

          <div className="px-3 py-2 border-b border-brand-700 flex items-center gap-1.5 overflow-hidden">
            {['Entradas', 'Principales', 'Postres', 'Bebidas'].map((cat, i) => (
              <span key={cat} className={`text-[9px] font-semibold whitespace-nowrap px-2 py-0.5 rounded-full ${i === 1 ? 'bg-orange-600 text-white shadow-sm shadow-orange-500/40' : 'bg-brand-900 text-neutral-700 border border-brand-700'}`}>
                {cat}
              </span>
            ))}
          </div>

          <div className="p-2 space-y-2">
            {dishes.map((d) => (
              <div key={d.name} className={`flex gap-2 p-2 rounded-lg border ${d.featured ? 'bg-orange-500/10 border-orange-500/40' : 'bg-brand-900/70 border-brand-700'}`}>
                <div className={`w-12 h-12 rounded-md bg-gradient-to-br ${d.grad} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-bold text-base drop-shadow">{d.mark}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[10px] font-bold text-neutral-900 leading-tight truncate">
                      {d.name} <span className="text-[9px]">{d.tags.join(' ')}</span>
                    </div>
                    <div className="text-[10px] font-bold text-orange-300 tabular-nums">{d.price}</div>
                  </div>
                  <div className="text-[9px] text-neutral-600 leading-snug mt-0.5 line-clamp-1">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-brand-700 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[9px] text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
              <span>Precios actualizados al instante</span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wide text-primary-300 bg-primary-500/20 border border-primary-500/30 px-1.5 py-0.5 rounded">127 hoy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function BookEatM() {
  const slots = [
    { time: '13:00', booked: ['Pareja', 'Familia 4p'], free: 2 },
    { time: '13:30', booked: ['Trabajo 6p'], free: 3 },
    { time: '14:00', booked: ['Aniversario'], free: 4 },
    { time: '14:30', booked: [], free: 5 },
    { time: '20:00', booked: ['Cliente VIP', 'Pareja', 'Familia 5p', 'Cumple 8p'], free: 0 },
    { time: '20:30', booked: ['Pareja', 'Trabajo 4p'], free: 2 },
    { time: '21:00', booked: ['Familia 4p'], free: 3 },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Reservas · jueves 16</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">14 reservas hoy · 36 pax</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
          <CalIcon size={10} />
          Vista día
        </div>
      </div>

      <div className="space-y-1.5">
        {slots.map((s) => (
          <div key={s.time} className={`flex items-center gap-2 p-2 rounded-lg border ${s.booked.length === 0 ? 'bg-brand-800/30 border-brand-800' : s.free === 0 ? 'bg-rose-500/10 border-rose-500/30' : 'bg-cyan-500/10 border-cyan-500/30'}`}>
            <div className="w-12 text-[11px] font-bold text-neutral-900 tabular-nums">{s.time}</div>
            <div className="flex-1 flex flex-wrap gap-1">
              {s.booked.map((b, i) => (
                <span key={i} className="text-[9px] bg-cyan-500/25 text-cyan-200 px-1.5 py-0.5 rounded-full border border-cyan-500/40">
                  {b}
                </span>
              ))}
              {s.booked.length === 0 && (
                <span className="text-[9px] text-neutral-600 italic">Sin reservas</span>
              )}
            </div>
            {s.free > 0 ? (
              <span className="text-[9px] font-bold text-neutral-700 bg-brand-900 border border-brand-700 px-1.5 py-0.5 rounded-full">{s.free} libres</span>
            ) : (
              <span className="text-[9px] font-bold text-rose-300 bg-rose-500/20 border border-rose-500/40 px-1.5 py-0.5 rounded-full">Lleno</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-brand-800 flex items-center justify-between text-[10px]">
        <span className="text-neutral-600">Embebido en tu sitio + directorio bookeat.cl</span>
        <span className="text-cyan-300 font-semibold">+ Manual</span>
      </div>
    </div>
  )
}

function StaffEatM() {
  const requests = [
    { initials: 'JC', name: 'Juan Castro', role: 'Cocinero', type: 'Vacaciones', dates: '12-18 may', days: 7, status: 'pending' },
    { initials: 'PR', name: 'Paula Ríos', role: 'Sala', type: 'Día libre', dates: '8 may', days: 1, status: 'approved' },
    { initials: 'MA', name: 'Marcos Alarcón', role: 'Bar', type: 'Cambio turno', dates: '15 may', days: 1, status: 'pending' },
    { initials: 'IT', name: 'Isidora Torres', role: 'Admin', type: 'Vacaciones', dates: '21 may-3 jun', days: 14, status: 'approved' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Solicitudes del equipo</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">2 pendientes · 2 aprobadas</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-semibold border border-violet-500/30">
          <UserCheck size={10} />
          RR.HH.
        </div>
      </div>

      <div className="space-y-1.5">
        {requests.map((r, i) => (
          <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border ${r.status === 'pending' ? 'bg-brand-800/60 border-brand-700' : 'bg-primary-500/5 border-primary-500/20'}`}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 shadow-sm">
              {r.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-neutral-900 truncate">{r.name}</span>
                <span className="text-[8px] text-neutral-600">·</span>
                <span className="text-[9px] text-neutral-600">{r.role}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] text-neutral-700 font-medium">{r.type}</span>
                <span className="text-[9px] text-neutral-600">·</span>
                <span className="text-[9px] text-neutral-700">{r.dates}</span>
                <span className="text-[8px] text-neutral-600 bg-brand-900 border border-brand-700 px-1 rounded">{r.days}d</span>
              </div>
            </div>
            {r.status === 'pending' ? (
              <div className="flex gap-1">
                <button className="w-6 h-6 rounded bg-primary-500/20 border border-primary-500/40 flex items-center justify-center">
                  <Check size={11} className="text-primary-300" strokeWidth={3} />
                </button>
                <button className="w-6 h-6 rounded bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 text-xs leading-none font-bold">×</button>
              </div>
            ) : (
              <span className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300">
                Aprobada
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-brand-800 flex items-center justify-between text-[10px]">
        <span className="text-neutral-600">9/12 colaboradores activos esta semana</span>
        <span className="text-violet-300 font-semibold">Ver calendario</span>
      </div>
    </div>
  )
}

function InventEatM() {
  const items = [
    { name: 'Aceite de oliva 5L', cat: 'Bodega central', stock: 8, min: 12, status: 'low', icon: Package },
    { name: 'Filete de res 1kg', cat: 'Cámara fría', stock: 24, min: 15, status: 'ok', icon: Package },
    { name: 'Vino tinto cabernet', cat: 'Cava', stock: 2, min: 6, status: 'critical', icon: Package },
    { name: 'Harina 25kg', cat: 'Bodega central', stock: 7, min: 4, status: 'ok', icon: Package },
    { name: 'Queso parmesano 500g', cat: 'Cámara fría', stock: 0, min: 3, status: 'critical', icon: Package },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Stock por ubicación</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">3 bodegas · 124 SKUs · 2 alertas</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30">
          <Boxes size={10} />
          InventEat
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { label: 'Bodega central', value: '67', sub: 'SKUs', dot: 'bg-teal-500' },
          { label: 'Cámara fría', value: '42', sub: 'SKUs', dot: 'bg-cyan-500' },
          { label: 'Cava', value: '15', sub: 'SKUs · 1 crítico', dot: 'bg-rose-500' },
        ].map((b) => (
          <div key={b.label} className="bg-brand-800/60 border border-brand-700 rounded-lg p-2">
            <div className="flex items-center gap-1 mb-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${b.dot}`}></div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700 truncate">{b.label}</div>
            </div>
            <div className="text-base font-bold text-neutral-900 tabular-nums leading-none">{b.value}</div>
            <div className="text-[9px] text-neutral-600 mt-0.5">{b.sub}</div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5 mb-3">
        {items.map((it, i) => {
          const Icon = it.icon
          const tone =
            it.status === 'critical'
              ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
              : it.status === 'low'
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                : 'bg-brand-800/60 border-brand-700 text-neutral-700'
          const stockColor =
            it.status === 'critical' ? 'text-rose-300' : it.status === 'low' ? 'text-amber-300' : 'text-primary-300'
          return (
            <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border ${tone.includes('rose') || tone.includes('amber') ? tone.split(' ').slice(0, 2).join(' ') : 'bg-brand-800/60 border-brand-700'}`}>
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <Icon size={12} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-neutral-900 truncate">{it.name}</div>
                <div className="text-[9px] text-neutral-600">{it.cat}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`text-[11px] font-bold tabular-nums ${stockColor}`}>{it.stock}</div>
                <div className="text-[9px] text-neutral-600">min {it.min}</div>
              </div>
              {it.status === 'critical' && <AlertTriangle size={12} className="text-rose-300 flex-shrink-0" />}
            </div>
          )
        })}
      </div>

      <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles size={13} className="text-teal-300" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-neutral-900">2 productos bajo mínimo</div>
            <div className="text-[10px] text-neutral-600">Lista de compra lista para enviar a BuyEat</div>
          </div>
        </div>
        <button className="px-2.5 py-1 bg-teal-600 text-white text-[10px] font-semibold rounded shadow-sm shadow-teal-500/40 flex items-center gap-1">
          <ArrowR size={10} />
          BuyEat
        </button>
      </div>
    </div>
  )
}

function RecipEatM() {
  const ingredients = [
    { name: 'Pasta fresca', qty: '180g', cost: '$540', impact: '$540' },
    { name: 'Tomate concassé', qty: '120g', cost: '$280', impact: '$280' },
    { name: 'Aceite oliva extra', qty: '15ml', cost: '$190', impact: '$190' },
    { name: 'Parmesano 24m', qty: '20g', cost: '$420', impact: '$420' },
    { name: 'Albahaca fresca', qty: '5g', cost: '$80', impact: '$80' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Ficha técnica</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">Pasta de la nona · receta v3 · vigente</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-semibold border border-orange-500/30">
          <ChefHat size={10} />
          RecipEat
        </div>
      </div>

      <div className="flex gap-3 mb-3">
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 flex items-center justify-center text-white font-bold text-3xl shadow-md flex-shrink-0">
          P
        </div>
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-brand-800/60 border border-brand-700 rounded-md p-1.5">
              <div className="text-[8px] uppercase tracking-wider text-neutral-600">Precio venta</div>
              <div className="text-sm font-bold text-neutral-900 tabular-nums leading-none mt-0.5">$12.500</div>
            </div>
            <div className="bg-brand-800/60 border border-brand-700 rounded-md p-1.5">
              <div className="text-[8px] uppercase tracking-wider text-neutral-600">Costo</div>
              <div className="text-sm font-bold text-neutral-900 tabular-nums leading-none mt-0.5">$1.510</div>
            </div>
            <div className="bg-primary-500/10 border border-primary-500/30 rounded-md p-1.5">
              <div className="text-[8px] uppercase tracking-wider text-primary-300">Margen</div>
              <div className="text-sm font-bold text-primary-300 tabular-nums leading-none mt-0.5">87.9%</div>
            </div>
          </div>
          <div className="mt-1.5 text-[9px] text-neutral-600 flex items-center gap-1">
            <TrendingUp size={9} className="text-primary-400" />
            Costo bajó $80 vs receta v2 (mejor proveedor)
          </div>
        </div>
      </div>

      <div className="bg-brand-800/40 border border-brand-700 rounded-lg p-2.5 mb-3">
        <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Insumos consumidos por venta</div>
        <div className="space-y-1">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px]">
              <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0"></div>
              <span className="flex-1 text-neutral-700 truncate">{ing.name}</span>
              <span className="text-neutral-600 tabular-nums">{ing.qty}</span>
              <span className="text-orange-300 font-bold tabular-nums w-12 text-right">{ing.cost}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center flex-shrink-0">
            <ArrowR size={13} className="text-primary-300" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-neutral-900">Vinculada con MenuEat</div>
            <div className="text-[10px] text-neutral-600">Venta dispara descuento auto en InventEat</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[9px] uppercase tracking-wider text-neutral-600 font-bold">Mes</div>
          <div className="text-[11px] font-bold text-primary-300 tabular-nums">142 ventas</div>
        </div>
      </div>
    </div>
  )
}

function PayEatM() {
  const sales = [
    { time: '13:42', table: 'Mesa 4', items: 'Pasta x2 · Vino', total: '$32.400', flow: true },
    { time: '13:38', table: 'Mesa 7', items: 'Asado · Empanada · Agua', total: '$23.900' },
    { time: '13:30', table: 'Mesa 2', items: 'Pasta · Postre · Café', total: '$18.800' },
    { time: '13:25', table: 'Mesa 9', items: '2x Asado · Vino', total: '$41.800' },
  ]
  return (
    <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Ventas de hoy</div>
          <div className="text-[10px] text-neutral-600 mt-0.5">Lectura desde Toteat · 47 tickets</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-300 font-semibold border border-primary-500/30">
          <Coins size={10} />
          PayEat
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { label: 'Ventas día', value: '$842k', sub: '47 tickets', dot: 'bg-primary-500' },
          { label: 'Ticket prom.', value: '$17.9k', sub: '+8% vs ayer', dot: 'bg-blue-500' },
          { label: 'Margen est.', value: '62%', sub: 'data real', dot: 'bg-emerald-500' },
        ].map((b) => (
          <div key={b.label} className="bg-brand-800/60 border border-brand-700 rounded-lg p-2">
            <div className="flex items-center gap-1 mb-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${b.dot}`}></div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-700 truncate">{b.label}</div>
            </div>
            <div className="text-base font-bold text-neutral-900 tabular-nums leading-none">{b.value}</div>
            <div className="text-[9px] text-neutral-600 mt-0.5">{b.sub}</div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5 mb-3">
        {sales.map((s, i) => (
          <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg border ${s.flow ? 'bg-primary-500/10 border-primary-500/40' : 'bg-brand-800/60 border-brand-700'}`}>
            <div className="w-12 text-[10px] font-bold text-neutral-700 tabular-nums">{s.time}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-neutral-900">{s.table}</div>
              <div className="text-[9px] text-neutral-600 truncate">{s.items}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-[11px] font-bold text-neutral-900 tabular-nums">{s.total}</div>
              {s.flow && (
                <div className="text-[8px] font-semibold text-primary-300 uppercase tracking-wider flex items-center gap-0.5 justify-end">
                  <ArrowR size={8} />
                  Stock −
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-3">
        <div className="flex items-center justify-between mb-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary-300 flex items-center gap-1">
            <Sparkles size={11} />
            Flujo completo activado
          </div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-600">Dic 2026</div>
        </div>
        <div className="text-[10px] text-neutral-700 leading-snug">
          POS propio con KDS + cobro Getnet en construcción. Por ahora, lectura Toteat o carga manual.
        </div>
        <div className="flex gap-1 mt-2">
          {['Comanda KDS', 'Cobro Getnet', 'Recibos', 'Offline'].map((f) => (
            <span key={f} className="text-[8px] font-bold uppercase tracking-wider text-primary-300 bg-primary-500/15 border border-primary-500/30 px-1.5 py-0.5 rounded">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
