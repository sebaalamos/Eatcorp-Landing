'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ShoppingCart,
  Share2,
  BookOpen,
  PartyPopper,
  ArrowUpRight,
  Check,
  Sparkles,
  Camera,
  Heart,
  BadgeCheck,
  QrCode,
  Languages,
  Users,
  CalendarClock,
  type LucideIcon,
} from 'lucide-react'

type Slide = {
  slug: 'buyeat' | 'likeeat' | 'menueat' | 'eventeat'
  name: string
  tagline: string
  metric: string
  icon: LucideIcon
  accent: 'blue' | 'pink' | 'orange' | 'rose'
  gradient: string
}

const slides: Slide[] = [
  { slug: 'buyeat', name: 'BuyEat', tagline: 'Compras y pagos a proveedores', metric: 'Lote de pago en 5 min', icon: ShoppingCart, accent: 'blue', gradient: 'from-blue-500 to-cyan-500' },
  { slug: 'likeeat', name: 'LikeEat', tagline: 'RRSS con IA', metric: 'Caption en 3 segundos', icon: Share2, accent: 'pink', gradient: 'from-pink-500 to-rose-500' },
  { slug: 'menueat', name: 'MenuEat', tagline: 'Carta digital con QR durable', metric: 'Bilingüe ES + EN', icon: BookOpen, accent: 'orange', gradient: 'from-orange-500 to-amber-500' },
  { slug: 'eventeat', name: 'EventEat', tagline: 'Eventos privados', metric: 'Cotización + margen real', icon: PartyPopper, accent: 'rose', gradient: 'from-rose-500 to-red-500' },
]

const accentLabelBg: Record<Slide['accent'], string> = {
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  pink: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  orange: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  rose: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
}

export function HeroAppCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [paused])

  const current = slides[index]
  const CurrentIcon = current.icon

  return (
    <div className="relative max-w-5xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div aria-hidden className={`absolute inset-0 -translate-y-4 bg-gradient-to-tr ${current.gradient} opacity-[0.12] rounded-2xl blur-2xl transition-all duration-700`}></div>

      <div className="signature-corner relative bg-brand-900 rounded-2xl shadow-2xl border border-brand-800 overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-brand-950 border-b border-brand-800 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-danger-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-warning-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-primary-500/80"></div>
          </div>
          <div className="flex-1 mx-4 bg-brand-900 border border-brand-800 rounded px-3 py-1 text-xs text-neutral-600 font-mono flex items-center gap-2">
            <span>app.eatcorp.cl/#/{current.slug}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${accentLabelBg[current.accent]} transition-all`}>
              <CurrentIcon size={11} />
              <span>{current.name}</span>
            </div>
          </div>
        </div>

        {/* Slides */}
        <div className="relative">
          {slides.map((s, i) => (
            <div
              key={s.slug}
              className={`transition-all duration-700 ${i === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
              aria-hidden={i !== index}
            >
              {s.slug === 'buyeat' && <BuyEatSlide />}
              {s.slug === 'likeeat' && <LikeEatSlide />}
              {s.slug === 'menueat' && <MenuEatSlide />}
              {s.slug === 'eventeat' && <EventEatSlide />}
            </div>
          ))}
        </div>

        {/* Footer overlay with tagline + tabs */}
        <div className="bg-brand-950 border-t border-brand-800 px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-neutral-900">{current.tagline}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-neutral-600">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${current.gradient}`}></span>
              <span>{current.metric}</span>
            </div>
          </div>
          <Link
            href={`/productos/${current.slug}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-primary-300 hover:text-primary-200 transition flex-shrink-0"
          >
            Ver detalle
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center items-center gap-2 mt-5">
        {slides.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Mostrar ${s.name}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? `w-8 bg-gradient-to-r ${s.gradient}`
                : 'w-1.5 bg-brand-700 hover:bg-brand-600'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

function BuyEatSlide() {
  const invoices = [
    { name: 'Distribuidora Central', amount: '$1.240.000', tag: 'Vence hoy', urgent: true, selected: true },
    { name: 'Carnes y embutidos S.A.', amount: '$680.500', tag: 'Pronto pago -3%', savings: true, selected: true },
    { name: 'Bebidas premium', amount: '$720.000', tag: 'En 5 días', selected: true },
    { name: 'Lácteos cordillera', amount: '$310.000', tag: 'En 8 días' },
    { name: 'Verduras del valle', amount: '$245.500', tag: 'En 12 días' },
  ]
  return (
    <div className="p-6 bg-gradient-to-br from-brand-900 to-brand-950 min-h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-base font-semibold text-neutral-900">Pagos pendientes — Lote del día</div>
          <div className="text-xs text-neutral-600 mt-0.5">5 facturas · 3 seleccionadas</div>
        </div>
        <div className="flex gap-1">
          {['Todas', 'Pendientes', 'Aprobadas'].map((f, i) => (
            <span key={f} className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${i === 1 ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/40' : 'bg-brand-800 text-neutral-700 border border-brand-700'}`}>
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {invoices.map((p, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-lg border ${p.selected ? 'bg-blue-500/10 border-blue-500/40' : 'bg-brand-800/60 border-brand-700'}`}
            style={{ animation: `slide-up 0.5s ease-out ${i * 0.06}s backwards` }}
          >
            <div className={`w-4 h-4 rounded-sm border-2 flex-shrink-0 ${p.selected ? 'bg-blue-500 border-blue-500' : 'border-brand-600'}`}>
              {p.selected && <div className="flex items-center justify-center h-full"><Check size={10} className="text-white" strokeWidth={3} /></div>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-neutral-900 truncate">{p.name}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-neutral-700 font-medium tabular-nums">{p.amount}</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${p.urgent ? 'bg-rose-500/25 text-rose-300 ring-1 ring-rose-500/40 animate-pulse' : p.savings ? 'bg-primary-500/20 text-primary-300' : 'bg-brand-700 text-neutral-600'}`}>
                  {p.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-brand-800">
        <div className="text-xs text-neutral-600">
          <span className="font-bold text-neutral-900">3 seleccionadas</span> · Total{' '}
          <span className="font-bold text-neutral-900 tabular-nums">$2.640.500</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md shadow-blue-500/30 flex items-center gap-1.5">
          <Check size={14} />
          Aprobar lote
        </button>
      </div>
    </div>
  )
}

function LikeEatSlide() {
  return (
    <div className="p-6 bg-gradient-to-br from-brand-900 to-brand-950 min-h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-base font-semibold text-neutral-900">Plan de la semana</div>
          <div className="text-xs text-neutral-600 mt-0.5">9 posts agendados</div>
        </div>
        <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 font-semibold border border-pink-500/30">
          <Sparkles size={12} />
          <span>Brand IA</span>
        </div>
      </div>

      <div className="bg-brand-800/60 border border-brand-700 rounded-lg overflow-hidden shadow-sm max-w-md mx-auto">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-brand-700">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">R</div>
          <div className="flex items-center gap-0.5 flex-1 min-w-0">
            <span className="text-xs font-bold text-neutral-900 truncate">tu_restorán</span>
            <BadgeCheck size={12} className="text-blue-400 flex-shrink-0 fill-blue-400 stroke-brand-900" />
          </div>
          <span className="text-[10px] text-neutral-500">Hoy 18:30</span>
        </div>

        <div className="aspect-[5/4] relative overflow-hidden bg-slate-900">
          <svg viewBox="0 0 200 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="hero-pasta-bg" cx="50%" cy="40%" r="80%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#7c2d12" />
              </radialGradient>
              <radialGradient id="hero-plate" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#d4a373" />
              </radialGradient>
              <radialGradient id="hero-sauce" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
            <rect width="200" height="160" fill="url(#hero-pasta-bg)" />
            <ellipse cx="100" cy="85" rx="78" ry="58" fill="rgba(0,0,0,0.18)" />
            <ellipse cx="100" cy="80" rx="76" ry="56" fill="url(#hero-plate)" />
            <path d="M 50 75 Q 90 50 145 70 T 155 95 Q 130 115 95 105 T 50 75" fill="#f59e0b" opacity="0.85" />
            <ellipse cx="105" cy="82" rx="32" ry="20" fill="url(#hero-sauce)" opacity="0.85" />
            <ellipse cx="125" cy="68" rx="5" ry="2.5" fill="#16a34a" transform="rotate(-20 125 68)" />
            <ellipse cx="80" cy="92" rx="4" ry="2" fill="#16a34a" transform="rotate(35 80 92)" />
          </svg>
          <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-pink-600/90 text-white text-xs font-bold">
            <Sparkles size={12} />
            <span>IA · 2,3s</span>
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-brand-950/85 backdrop-blur text-[10px] font-bold text-neutral-800">
            <Camera size={11} className="text-pink-400" />
            <span>Reel</span>
          </div>
        </div>

        <div className="px-3 py-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-3">
              <Heart size={18} className="text-neutral-700" />
            </div>
          </div>
          <div className="text-xs font-bold text-neutral-900">312 me gusta</div>
          <div className="text-xs text-neutral-700 leading-snug mt-0.5">
            <span className="font-bold">tu_restorán</span> Pasta fresca, salsa de la nona y un vino que abraza. ¿Reservas para esta noche?
          </div>
        </div>
      </div>

      <div className="mt-3 px-3 py-2 rounded-md bg-pink-500/10 border border-pink-500/30 flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-1.5 text-xs text-neutral-700">
          <Sparkles size={12} className="text-pink-400" />
          <span>Predicción: <span className="font-bold text-neutral-900">240–380 likes</span></span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wide text-primary-300 bg-primary-500/20 border border-primary-500/30 px-2 py-0.5 rounded">
          91% aprob.
        </span>
      </div>
    </div>
  )
}

function MenuEatSlide() {
  const dishes = [
    { name: 'Pasta de la nona', desc: 'Salsa pomodoro, albahaca, parmesano', price: '$12.500', grad: 'from-amber-300 via-orange-400 to-rose-500', mark: 'P' },
    { name: 'Asado tira', desc: 'Cocción 14h · papas confit · chimichurri', price: '$18.900', grad: 'from-rose-400 via-red-500 to-amber-700', mark: 'A', featured: true },
    { name: 'Empanada queso', desc: 'Masa de manteca, queso mantecoso fundido', price: '$3.500', grad: 'from-yellow-300 via-amber-400 to-orange-600', mark: 'E' },
  ]
  return (
    <div className="p-6 bg-gradient-to-br from-brand-900 to-brand-950 min-h-[400px]">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
        <div className="relative w-36 flex flex-col items-center bg-gradient-to-br from-orange-500/15 to-brand-950 border border-orange-500/30 rounded-xl p-3 shadow-md shadow-orange-500/15">
          <div className="text-[10px] font-bold uppercase tracking-wider text-orange-300 mb-2">Mesa 4</div>
          <div className="w-28 h-28 rounded-md bg-white flex items-center justify-center shadow-inner">
            <QrCode size={84} className="text-orange-900" strokeWidth={1.4} />
          </div>
          <div className="mt-3 text-[9px] text-neutral-600 text-center leading-tight">QR durable · nunca cambia</div>
        </div>

        <div className="bg-brand-800/40 border border-brand-700 rounded-xl overflow-hidden">
          <div className="px-3 py-2.5 border-b border-brand-700 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-neutral-900 leading-tight">Carta</div>
              <div className="text-[10px] text-neutral-600 mt-0.5">Cena · martes</div>
            </div>
            <div className="flex items-center gap-1 bg-brand-900 border border-brand-700 rounded-full p-0.5">
              <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[9px] font-bold">ES</span>
              <span className="px-2 py-0.5 rounded-full text-neutral-600 text-[9px] font-bold flex items-center gap-0.5">
                <Languages size={9} />
                EN
              </span>
            </div>
          </div>

          <div className="px-3 py-2 border-b border-brand-700 flex items-center gap-1.5 overflow-hidden">
            {['Entradas', 'Principales', 'Postres', 'Bebidas'].map((cat, i) => (
              <span key={cat} className={`text-[10px] font-semibold whitespace-nowrap px-2 py-0.5 rounded-full ${i === 1 ? 'bg-orange-600 text-white shadow-sm shadow-orange-500/40' : 'bg-brand-900 text-neutral-700 border border-brand-700'}`}>
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
                <div className={`w-14 h-14 rounded-md bg-gradient-to-br ${d.grad} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-bold text-xl drop-shadow">{d.mark}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs font-bold text-neutral-900 leading-tight truncate">{d.name}</div>
                    <div className="text-xs font-bold text-orange-300 tabular-nums">{d.price}</div>
                  </div>
                  <div className="text-[10px] text-neutral-600 leading-snug mt-0.5 line-clamp-1">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-brand-700 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[10px] text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
              <span>Precios actualizados al instante</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wide text-primary-300 bg-primary-500/20 border border-primary-500/30 px-2 py-0.5 rounded">127 vistas hoy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EventEatSlide() {
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
    <div className="p-6 bg-gradient-to-br from-brand-900 to-brand-950 min-h-[400px]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-base font-semibold text-neutral-900">Eventos próximos</div>
          <div className="text-xs text-neutral-600 mt-0.5">Mayo · 3 eventos</div>
        </div>
        <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
          <CalendarClock size={12} />
          Calendario
        </div>
      </div>

      <div className="space-y-1.5 mb-3">
        {events.map((e) => (
          <div key={e.date} className={`flex items-center gap-2.5 p-2 rounded-lg border ${e.selected ? 'bg-rose-500/15 border-rose-500/50' : 'bg-brand-800/60 border-brand-700'}`}>
            <div className={`w-11 h-11 rounded-md flex flex-col items-center justify-center flex-shrink-0 ${e.accent} text-white shadow-sm`}>
              <span className="text-base font-bold leading-none tabular-nums">{e.date}</span>
              <span className="text-[8px] font-bold tracking-wider opacity-80 leading-none mt-0.5">{e.month}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-neutral-900 truncate">{e.name}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-neutral-700 flex items-center gap-0.5">
                  <Users size={10} />
                  {e.pax}
                </span>
                <span className="text-[10px] font-bold text-neutral-700 tabular-nums">{e.monto}</span>
              </div>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${e.tone}`}>{e.status}</span>
          </div>
        ))}
      </div>

      <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xs font-bold text-neutral-900">17 mayo · Cierre fiscal</div>
            <div className="text-[10px] text-neutral-700 mt-0.5">Salón privado · open bar · cena</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-neutral-600 uppercase tracking-wider font-bold">Cotización</div>
            <div className="text-lg font-bold text-rose-300 tabular-nums leading-none">$2.8M</div>
          </div>
        </div>
        <div className="space-y-1 mb-2">
          {checklist.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-[10px]">
              <div className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-primary-500 border-primary-500' : 'border-brand-600'}`}>
                {item.done && <Check size={8} className="text-white" strokeWidth={3} />}
              </div>
              <span className={item.done ? 'text-neutral-600 line-through' : 'text-neutral-800'}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          <button className="flex-1 py-1.5 bg-rose-600 text-white text-xs font-semibold rounded shadow-sm shadow-rose-500/40">Enviar cotización</button>
          <button className="flex-1 py-1.5 bg-brand-900 text-neutral-800 text-xs font-semibold rounded border border-brand-700">Ver detalle</button>
        </div>
      </div>
    </div>
  )
}
