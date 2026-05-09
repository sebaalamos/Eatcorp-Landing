import { ShoppingCart, Share2, BookOpen, PartyPopper, Sparkles, RotateCw, Camera, BadgeCheck, Heart, MessageCircle, Send, Bookmark, Check, QrCode, Languages, Users, CalendarClock } from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-brand-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wide border border-primary-500/30">
            Apps que más mueven la aguja
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Una app para cada operación</h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Especializadas en lo que hacen, integradas entre sí. Activa solo las que necesites.
          </p>
        </div>

        <div className="space-y-24">
          <FeatureRow
            icon={ShoppingCart}
            iconBg="bg-blue-500"
            title="BuyEat"
            tagline="Compras y pagos a proveedores"
            description="Cotiza, recepciona, aprueba y paga facturas en lotes. Detección automática de discrepancias entre OC y factura. Export bancario directo."
            mockup={<BuyEatMockup />}
            reverse={false}
          />
          <FeatureRow
            icon={Share2}
            iconBg="bg-pink-500"
            title="LikeEat"
            tagline="Redes sociales con IA"
            description="Magic Post: una foto y la IA escribe el caption. Plan mensual con efemérides locales. Brand Discovery aprende tu estilo y tu voz."
            mockup={<LikeEatMockup />}
            reverse={true}
          />
          <FeatureRow
            icon={BookOpen}
            iconBg="bg-orange-500"
            title="MenuEat"
            tagline="Carta digital con QR"
            description="Carta bilingüe español + inglés en segundos, con foto de cada plato y precios siempre vigentes. QR durable: el sticker de la mesa nunca cambia."
            mockup={<MenuEatMockup />}
            reverse={false}
          />
          <FeatureRow
            icon={PartyPopper}
            iconBg="bg-rose-500"
            title="EventEat"
            tagline="Eventos privados y arriendos"
            description="Cotiza eventos, agéndalos y trackea cada checklist. Vista financiera con costo, margen y estado de cobro. No se te escapa una propuesta."
            mockup={<EventEatMockup />}
            reverse={true}
          />
        </div>
      </div>
    </section>
  )
}

type FeatureRowProps = {
  icon: typeof ShoppingCart
  iconBg: string
  title: string
  tagline: string
  description: string
  mockup: React.ReactNode
  reverse: boolean
}

function FeatureRow({ icon: Icon, iconBg, title, tagline, description, mockup, reverse }: FeatureRowProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div>
        <div className="inline-flex items-center gap-3 mb-4">
          <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md`}>
            <Icon size={22} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-neutral-600">{tagline}</p>
          </div>
        </div>
        <p className="text-lg text-neutral-700 leading-relaxed mb-6">{description}</p>
        <a href="#apps" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold">
          Ver todas las apps
          <span aria-hidden>→</span>
        </a>
      </div>
      <div>{mockup}</div>
    </div>
  )
}

function MockupFrame({ children, glow }: { children: React.ReactNode; glow: string }) {
  return (
    <div className="relative">
      <div className={`absolute -inset-2 ${glow} rounded-2xl blur-xl opacity-40`}></div>
      <div className="relative bg-brand-900 rounded-xl shadow-xl shadow-black/50 border border-brand-700 overflow-hidden">
        <div className="bg-brand-950 px-3 py-2 flex items-center gap-1.5 border-b border-brand-800">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <div className="flex-1 mx-3 h-4 rounded bg-brand-900 border border-brand-800 px-2 flex items-center text-[9px] text-neutral-600 font-mono">
            app.eatcorp.cl
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

function BuyEatMockup() {
  const invoices = [
    { name: 'Distribuidora Central', amount: '$1.240.000', due: 'Vence hoy', status: 'Pendiente', selected: true, urgent: true },
    { name: 'Carnes y embutidos S.A.', amount: '$680.500', due: 'Pronto pago -3%', status: 'Pendiente', selected: true, savings: true },
    { name: 'Bebidas premium', amount: '$720.000', due: 'En 5 días', status: 'Pendiente', selected: true },
    { name: 'Lácteos cordillera', amount: '$310.000', due: 'En 8 días', status: 'Aprobada' },
    { name: 'Verduras del valle', amount: '$245.500', due: 'En 12 días', status: 'Aprobada' },
    { name: 'Insumos cocina', amount: '$182.000', due: 'En 18 días', status: 'Pagada' },
  ]

  return (
    <MockupFrame glow="bg-blue-500/30">
      <div className="p-4 bg-gradient-to-br from-brand-900 to-brand-950">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-neutral-900">Pagos pendientes</div>
            <div className="text-[10px] text-neutral-600 mt-0.5">Lote del día · 6 facturas</div>
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
            <div
              key={i}
              className={`flex items-center gap-3 p-2.5 rounded-lg border ${p.selected ? 'bg-blue-500/10 border-blue-500/40' : 'bg-brand-800/60 border-brand-700'}`}
              style={{ animation: `slide-up 0.5s ease-out ${i * 0.07}s backwards` }}
            >
              <div className={`w-3.5 h-3.5 rounded-sm border-2 flex-shrink-0 ${p.selected ? 'bg-blue-500 border-blue-500' : 'border-brand-600'}`}>
                {p.selected && <div className="flex items-center justify-center h-full"><Check size={9} className="text-white" strokeWidth={3} /></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-neutral-900 truncate">{p.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-neutral-700 font-medium">{p.amount}</span>
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${p.urgent ? 'bg-rose-500/25 text-rose-300 ring-1 ring-rose-500/40 animate-pulse' : p.savings ? 'bg-primary-500/20 text-primary-300' : 'bg-brand-700 text-neutral-600'}`}>
                    {p.due}
                  </span>
                </div>
              </div>
              <span
                className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${
                  p.status === 'Pendiente' ? 'bg-amber-500/20 text-amber-300' : p.status === 'Aprobada' ? 'bg-blue-500/20 text-blue-300' : 'bg-brand-700 text-neutral-600'
                }`}
              >
                {p.status}
              </span>
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
    </MockupFrame>
  )
}

function LikeEatMockup() {
  const week = [
    { d: 'L', color: 'bg-green-400', label: 'Bowl' },
    { d: 'M', color: 'bg-orange-400', label: 'Pasta', active: true },
    { d: 'M', color: 'bg-red-400', label: 'Asado' },
    { d: 'J', color: 'bg-rose-400', label: 'Maridaje' },
    { d: 'V', color: 'bg-amber-400', label: 'Picante', special: '21-M' },
    { d: 'S', color: 'bg-yellow-400', label: 'Empanada' },
    { d: 'D', color: 'bg-blue-400', label: 'Brunch' },
  ]

  return (
    <MockupFrame glow="bg-pink-500/30">
      <div className="p-4 bg-gradient-to-br from-brand-900 to-brand-950">
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

        <div className="flex gap-1 mb-3">
          {[
            { name: 'IG', active: true },
            { name: 'TikTok', active: false },
            { name: 'FB', active: false },
          ].map((p) => (
            <button
              key={p.name}
              className={`text-[10px] font-semibold px-2 py-1 rounded-md ${p.active ? 'bg-pink-600 text-white shadow-sm shadow-pink-500/40' : 'bg-brand-800 text-neutral-600 border border-brand-700'}`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mb-3 p-2 bg-brand-800/60 border border-brand-700 rounded-lg">
          {week.map((day, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center gap-0.5 py-1 rounded-md ${
                day.active ? 'bg-pink-500/15 ring-1 ring-pink-500/50' : ''
              }`}
            >
              <div className="text-[8px] font-bold text-neutral-600 uppercase">{day.d}</div>
              <div className={`w-3 h-3 rounded-sm ${day.color}`}></div>
              <div className="text-[7px] text-neutral-500 truncate max-w-full px-0.5">{day.label}</div>
              {day.special && (
                <div className="absolute -top-1 -right-0.5 text-[7px] font-bold bg-amber-400 text-amber-900 px-0.5 py-px rounded-sm leading-none">
                  {day.special}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-brand-800/60 border border-brand-700 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 px-2.5 py-1.5 border-b border-brand-700">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[8px] font-bold shadow-sm">
              R
            </div>
            <div className="flex items-center gap-0.5 flex-1 min-w-0">
              <span className="text-[10px] font-bold text-neutral-900 truncate">tu_restorán</span>
              <BadgeCheck size={11} className="text-blue-400 flex-shrink-0 fill-blue-400 stroke-brand-900" />
            </div>
            <span className="text-[9px] text-neutral-500">Hoy 18:30</span>
          </div>

          <div className="aspect-[5/4] relative overflow-hidden bg-slate-900">
            <PastaIllustration />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_2.4s_ease-in-out_infinite] pointer-events-none"></div>

            <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-brand-950/85 backdrop-blur text-[9px] font-bold text-neutral-800">
              <Camera size={9} className="text-pink-400" />
              <span>Reel</span>
            </div>
            <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-brand-950/85 backdrop-blur flex items-center justify-center shadow-sm border border-brand-700">
              <RotateCw size={12} className="text-neutral-700" />
            </button>
            <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-600/90 text-white text-[9px] font-bold">
              <Sparkles size={9} />
              <span>IA · 2,3s</span>
            </div>
            <div className="absolute bottom-2 right-2 left-auto flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-brand-950/80 backdrop-blur text-[9px] font-medium text-white border border-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
              <span>Subiendo 87%</span>
            </div>
          </div>

          <div className="px-2.5 py-2">
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
              <span className="font-bold">tu_restorán</span> Pasta fresca, salsa de la nona y un vino que abraza. ¿Reservas mesa para esta noche?
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="text-[10px] text-pink-400">#pastafresca</span>
              <span className="text-[10px] text-pink-400">#santiagochile</span>
              <span className="text-[10px] text-pink-400">#martes</span>
            </div>
            <div className="text-[9px] text-neutral-500 mt-1">Ver los 18 comentarios</div>
          </div>
        </div>

        <div className="mt-2.5 px-2 py-1.5 rounded-md bg-pink-500/10 border border-pink-500/30 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-700">
            <Sparkles size={10} className="text-pink-400" />
            <span>Predicción: <span className="font-bold text-neutral-900">240–380 likes</span> · alcance 2,1K</span>
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
    </MockupFrame>
  )
}

function MenuEatMockup() {
  const dishes = [
    {
      name: 'Pasta de la nona',
      desc: 'Salsa pomodoro, albahaca fresca, parmesano',
      price: '$12.500',
      tags: ['🌱'],
      grad: 'from-amber-300 via-orange-400 to-rose-500',
      mark: 'P',
    },
    {
      name: 'Asado tira',
      desc: 'Cocción 14 horas · papas confit · chimichurri',
      price: '$18.900',
      tags: ['🔥'],
      grad: 'from-rose-400 via-red-500 to-amber-700',
      mark: 'A',
      featured: true,
    },
    {
      name: 'Empanada queso',
      desc: 'Masa de manteca, queso mantecoso fundido',
      price: '$3.500',
      tags: ['❤️'],
      grad: 'from-yellow-300 via-amber-400 to-orange-600',
      mark: 'E',
    },
  ]

  return (
    <MockupFrame glow="bg-orange-500/30">
      <div className="p-5 bg-gradient-to-br from-brand-900 to-brand-950">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
          {/* QR card */}
          <div className="relative w-32 flex flex-col items-center bg-gradient-to-br from-orange-500/15 to-brand-950 border border-orange-500/30 rounded-xl p-3 shadow-md shadow-orange-500/15">
            <div className="text-[9px] font-bold uppercase tracking-wider text-orange-300 mb-2">Mesa 4</div>
            <div className="w-24 h-24 rounded-md bg-white flex items-center justify-center shadow-inner relative">
              <QrCode size={68} className="text-orange-900" strokeWidth={1.4} />
              <div className="absolute -bottom-1 inset-x-2 text-center text-[7px] font-bold text-orange-900 bg-white rounded-sm leading-tight pt-px">
                eatcorp.cl/m
              </div>
            </div>
            <div className="mt-3 text-[8px] text-neutral-600 text-center leading-tight">
              QR durable · el sticker de la mesa nunca cambia
            </div>
          </div>

          {/* Menu list (mobile-like preview) */}
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
                <span
                  key={cat}
                  className={`text-[9px] font-semibold whitespace-nowrap px-2 py-0.5 rounded-full ${
                    i === 1 ? 'bg-orange-600 text-white shadow-sm shadow-orange-500/40' : 'bg-brand-900 text-neutral-700 border border-brand-700'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="p-2 space-y-2">
              {dishes.map((d, i) => (
                <div
                  key={d.name}
                  className={`flex gap-2 p-2 rounded-lg border ${d.featured ? 'bg-orange-500/10 border-orange-500/40' : 'bg-brand-900/70 border-brand-700'}`}
                  style={{ animation: `slide-up 0.5s ease-out ${i * 0.08}s backwards` }}
                >
                  <div className={`w-12 h-12 rounded-md bg-gradient-to-br ${d.grad} flex items-center justify-center flex-shrink-0 shadow-sm relative overflow-hidden`}>
                    <span className="text-white font-bold text-base drop-shadow">{d.mark}</span>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[10px] font-bold text-neutral-900 leading-tight truncate">
                        {d.name} <span className="text-[9px]">{d.tags.join(' ')}</span>
                      </div>
                      <div className="text-[10px] font-bold text-orange-300 tabular-nums">{d.price}</div>
                    </div>
                    <div className="text-[9px] text-neutral-600 leading-snug mt-0.5 line-clamp-2">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-3 py-2 border-t border-brand-700 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[9px] text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                <span>Precios actualizados al instante</span>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wide text-primary-300 bg-primary-500/20 border border-primary-500/30 px-1.5 py-0.5 rounded">
                127 vistas hoy
              </span>
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  )
}

function EventEatMockup() {
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
    <MockupFrame glow="bg-rose-500/30">
      <div className="p-4 bg-gradient-to-br from-brand-900 to-brand-950">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-neutral-900">Eventos próximos</div>
            <div className="text-[10px] text-neutral-600 mt-0.5">Mayo · 3 confirmados, 1 cotizando</div>
          </div>
          <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
            <CalendarClock size={10} />
            Calendario
          </div>
        </div>

        <div className="space-y-1.5 mb-3">
          {events.map((e, i) => (
            <div
              key={e.date}
              className={`flex items-center gap-2.5 p-2 rounded-lg border ${e.selected ? 'bg-rose-500/15 border-rose-500/50' : 'bg-brand-800/60 border-brand-700'}`}
              style={{ animation: `slide-up 0.5s ease-out ${i * 0.08}s backwards` }}
            >
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
              <span className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${e.tone}`}>
                {e.status}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[11px] font-bold text-neutral-900">17 mayo · Cierre fiscal</div>
              <div className="text-[9px] text-neutral-700 mt-0.5">Salón privado · open bar · cena 3 tiempos</div>
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
            <button className="flex-1 py-1.5 bg-rose-600 text-white text-[10px] font-semibold rounded shadow-sm shadow-rose-500/40">
              Enviar cotización
            </button>
            <button className="flex-1 py-1.5 bg-brand-900 text-neutral-800 text-[10px] font-semibold rounded border border-brand-700">
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </MockupFrame>
  )
}

function PastaIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pasta-bg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <radialGradient id="plate" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="80%" stopColor="#f5e6b8" />
          <stop offset="100%" stopColor="#d4a373" />
        </radialGradient>
        <linearGradient id="pasta-strand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <radialGradient id="sauce" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
      </defs>

      <rect width="200" height="160" fill="url(#pasta-bg)" />

      <ellipse cx="100" cy="85" rx="78" ry="58" fill="rgba(0,0,0,0.18)" />
      <ellipse cx="100" cy="80" rx="76" ry="56" fill="url(#plate)" />
      <ellipse cx="100" cy="78" rx="62" ry="46" fill="#faf3dd" opacity="0.6" />

      <g opacity="0.95">
        <path d="M 50 75 Q 90 50 145 70 T 155 95 Q 130 115 95 105 T 50 75" fill="url(#pasta-strand)" />
        <path d="M 60 70 Q 100 55 140 75" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 55 90 Q 100 70 150 95" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 65 100 Q 110 85 145 105" stroke="#fcd34d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>

      <g>
        <ellipse cx="105" cy="82" rx="32" ry="20" fill="url(#sauce)" opacity="0.85" />
        <ellipse cx="115" cy="78" rx="6" ry="4" fill="#ef4444" opacity="0.9" />
        <ellipse cx="92" cy="88" rx="5" ry="3.5" fill="#dc2626" opacity="0.9" />
      </g>

      <g>
        <ellipse cx="125" cy="68" rx="5" ry="2.5" fill="#16a34a" transform="rotate(-20 125 68)" />
        <ellipse cx="80" cy="92" rx="4" ry="2" fill="#16a34a" transform="rotate(35 80 92)" />
        <ellipse cx="110" cy="98" rx="3.5" ry="2" fill="#15803d" transform="rotate(-10 110 98)" />
      </g>

      <ellipse cx="78" cy="60" rx="22" ry="10" fill="white" opacity="0.18" />
    </svg>
  )
}
