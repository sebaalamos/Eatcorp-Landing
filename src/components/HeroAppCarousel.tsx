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
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  BadgeCheck,
  Languages,
  QrCode,
  Building2,
  Hash,
  ChefHat,
  CalendarCheck,
  TrendingUp,
  Users,
  FileText,
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
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [paused, reduceMotion])

  const current = slides[index]
  const CurrentIcon = current.icon

  return (
    <div
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
    >
      <div aria-hidden className={`absolute inset-0 -translate-y-4 bg-gradient-to-tr ${current.gradient} opacity-[0.14] rounded-2xl blur-2xl transition-all duration-1000`}></div>

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
              inert={i !== index}
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-300 hover:text-primary-200 transition flex-shrink-0"
          >
            Ver detalle
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center items-center gap-1 mt-4">
        {slides.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Mostrar ${s.name}`}
            aria-current={i === index}
            className="p-2.5 flex items-center group"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                i === index
                  ? `w-8 bg-gradient-to-r ${s.gradient}`
                  : 'w-1.5 bg-brand-700 group-hover:bg-brand-600'
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────
// BuyEat — split: lista proveedores + tarjeta de aprobación con toasts
// ──────────────────────────────────────────────────────────────────

function BuyEatSlide() {
  const providers = [
    { initials: 'DC', name: 'Distribuidora Central', cat: 'Abarrotes', amount: '$1.240.000', status: 'urgent', tag: 'Vence hoy', icon: Building2 },
    { initials: 'CE', name: 'Carnes y embutidos S.A.', cat: 'Proteínas', amount: '$680.500', status: 'savings', tag: 'Pronto pago -3%', icon: ChefHat },
    { initials: 'BP', name: 'Bebidas premium', cat: 'Bebidas', amount: '$720.000', status: 'normal', tag: 'En 5 días', icon: Building2 },
  ]
  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-brand-900 via-brand-900 to-blue-950/40 md:min-h-[440px] relative overflow-hidden">
      {/* Backdrop dots */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-5">
        {/* Left — provider list */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-base font-bold text-neutral-900">Lote del día</div>
              <div className="text-[11px] text-neutral-600 mt-0.5">3 facturas seleccionadas · 2 más por revisar</div>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-blue-300 bg-blue-500/15 border border-blue-500/40 rounded-full px-2 py-0.5">
              <TrendingUp size={10} />
              +$284k pronto pago mes
            </div>
          </div>

          <div className="space-y-2">
            {providers.map((p, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 p-3 rounded-xl bg-brand-800/40 border border-brand-700 hover:border-blue-500/40 transition"
                style={{ animation: `slide-up 0.6s ease-out ${i * 0.08}s backwards` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/30">
                    {p.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-brand-900 flex items-center justify-center">
                    <Check size={9} className="text-white" strokeWidth={3.5} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-neutral-900 truncate">{p.name}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] text-neutral-600">{p.cat}</span>
                    <span className="text-[10px] text-neutral-600">·</span>
                    <span className={`text-[10px] font-semibold ${
                      p.status === 'urgent' ? 'text-rose-300' : p.status === 'savings' ? 'text-primary-300' : 'text-neutral-700'
                    }`}>
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-bold text-neutral-900 tabular-nums">{p.amount}</div>
                  <div className="text-[9px] text-neutral-600 uppercase tracking-wider mt-0.5">NETO</div>
                </div>
              </div>
            ))}
          </div>

          {/* Discrepancy toast — animated */}
          <div className="mt-3 p-2.5 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center flex-shrink-0">
              <Sparkles size={13} className="text-primary-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-bold text-neutral-900">Discrepancia auto-resuelta</div>
              <div className="text-[10px] text-neutral-600">Factura $48.500 menor que OC · aceptada</div>
            </div>
            <span className="text-[9px] font-bold text-primary-300 bg-primary-500/15 px-1.5 py-0.5 rounded">+$48k</span>
          </div>
        </div>

        {/* Right — Approval card */}
        <div className="md:col-span-2">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 shadow-2xl shadow-blue-500/30 relative overflow-hidden">
            <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-200 mb-1">Total del lote</div>
              <div className="text-3xl md:text-4xl font-bold text-white tabular-nums leading-tight">
                $2.640.500
              </div>
              <div className="text-[11px] text-blue-100 mt-1">3 proveedores · vence en 24h</div>

              <div className="mt-4 pt-4 border-t border-blue-400/30 space-y-1.5">
                <Row label="Subtotal neto" value="$2.219.749" tone="light" />
                <Row label="IVA (19%)" value="$421.752" tone="light" />
                <Row label="Pronto pago" value="−$20.415" tone="success" />
              </div>

              <button className="mt-4 w-full bg-white text-blue-700 text-sm font-bold py-2.5 rounded-lg shadow-lg shadow-black/20 flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                <Check size={14} strokeWidth={3} />
                Aprobar lote
              </button>
              <div className="mt-2 text-center text-[10px] text-blue-200">
                Genera archivo bancario · BCI nómina v3
              </div>
            </div>
          </div>

          {/* Footer mini card */}
          <div className="mt-3 bg-brand-800/40 border border-brand-700 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">Compras del mes</div>
              <span className="text-[10px] text-primary-300 font-bold flex items-center gap-0.5">
                <TrendingUp size={9} />
                +12%
              </span>
            </div>
            <div className="text-lg font-bold text-neutral-900 tabular-nums">$14.852.330</div>
            <Sparkline />
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, tone }: { label: string; value: string; tone: 'light' | 'success' }) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <span className="text-blue-200">{label}</span>
      <span className={`font-bold tabular-nums ${tone === 'success' ? 'text-primary-300' : 'text-white'}`}>{value}</span>
    </div>
  )
}

function Sparkline() {
  const values = [42, 50, 48, 65, 60, 75, 70, 88, 82, 95]
  const w = 200
  const h = 28
  const max = Math.max(...values)
  const min = Math.min(...values)
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w
    const y = h - ((v - min) / (max - min)) * h
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} className="mt-2 overflow-visible">
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,${h} ${points} ${w},${h}`} fill="url(#spark-grad)" />
      <polyline points={points} fill="none" stroke="rgb(52,211,153)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ──────────────────────────────────────────────────────────────────
// LikeEat — Brand DNA panel + Phone with IG post
// ──────────────────────────────────────────────────────────────────

function LikeEatSlide() {
  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-brand-900 via-brand-900 to-pink-950/40 md:min-h-[440px] relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col gap-5 md:grid md:grid-cols-5 md:gap-5 md:items-center">
        {/* Brand DNA panel */}
        <div className="md:col-span-3 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-pink-300 mb-1">
                <Sparkles size={11} />
                Brand Discovery
              </div>
              <div className="text-base font-bold text-neutral-900">Tu ADN de marca, leído por IA</div>
              <div className="text-[11px] text-neutral-600 mt-0.5">Analizamos 86 posts · 94% confianza</div>
            </div>
          </div>

          {/* Palette */}
          <div className="bg-brand-800/40 border border-brand-700 rounded-xl p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">Paleta detectada</div>
            <div className="flex gap-1.5">
              {[
                { color: '#0a2818', tag: 'verde profundo' },
                { color: '#d4a373', tag: 'arena cálida' },
                { color: '#f4e9d8', tag: 'crema' },
                { color: '#8b1e1e', tag: 'vino' },
                { color: '#1a1a1a', tag: 'carbón' },
              ].map((c, i) => (
                <div key={i} className="flex-1 group">
                  <div className="aspect-square rounded-lg shadow-md ring-1 ring-white/5" style={{ background: c.color }}></div>
                  <div className="text-[8px] text-neutral-500 text-center mt-1 uppercase tracking-wider truncate">{c.tag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tone + Hashtags */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-brand-800/40 border border-brand-700 rounded-xl p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">Tono</div>
              <div className="flex flex-wrap gap-1">
                {['cálido', 'cercano', 'gourmet', 'sin pretensión'].map((t) => (
                  <span key={t} className="text-[10px] font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/30 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-brand-800/40 border border-brand-700 rounded-xl p-3">
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
                <Hash size={9} />
                Top tags
              </div>
              <div className="flex flex-wrap gap-1">
                {['#santiago', '#pastafresca', '#vinochileno'].map((t) => (
                  <span key={t} className="text-[10px] font-semibold text-pink-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="px-3 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-700">
              <Sparkles size={11} className="text-pink-400" />
              <span>Magic Post genera con esta voz</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wide text-primary-300 bg-primary-500/20 border border-primary-500/30 px-1.5 py-0.5 rounded">
              IA · 2.3s
            </span>
          </div>
        </div>

        {/* Phone with IG post */}
        <div className="md:col-span-2 relative">
          <div className="relative mx-auto" style={{ maxWidth: '200px' }}>
            {/* Phone frame */}
            <div className="bg-brand-950 rounded-[28px] p-2 shadow-2xl shadow-pink-500/20 border border-brand-700">
              <div className="relative bg-white rounded-[20px] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-950 rounded-b-xl z-10"></div>

                {/* IG header */}
                <div className="flex items-center gap-1.5 px-2.5 pt-5 pb-1.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[8px] font-bold shadow-sm">R</div>
                  <div className="flex items-center gap-0.5 flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-slate-900 truncate">tu_restorán</span>
                    <BadgeCheck size={10} className="text-blue-400 flex-shrink-0 fill-blue-400 stroke-white" />
                  </div>
                </div>

                {/* Photo */}
                <div className="aspect-square relative overflow-hidden">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <radialGradient id="ig-bg" cx="50%" cy="40%" r="80%">
                        <stop offset="0%" stopColor="#fde68a" />
                        <stop offset="60%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#7c2d12" />
                      </radialGradient>
                      <radialGradient id="ig-plate" cx="50%" cy="50%" r="55%">
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="100%" stopColor="#d4a373" />
                      </radialGradient>
                      <radialGradient id="ig-sauce" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#7f1d1d" />
                      </radialGradient>
                    </defs>
                    <rect width="200" height="200" fill="url(#ig-bg)" />
                    <ellipse cx="100" cy="105" rx="78" ry="62" fill="rgba(0,0,0,0.18)" />
                    <ellipse cx="100" cy="100" rx="76" ry="60" fill="url(#ig-plate)" />
                    <path d="M 50 95 Q 90 70 145 90 T 155 115 Q 130 135 95 125 T 50 95" fill="#f59e0b" opacity="0.85" />
                    <ellipse cx="105" cy="102" rx="32" ry="22" fill="url(#ig-sauce)" opacity="0.85" />
                    <ellipse cx="125" cy="88" rx="5" ry="2.5" fill="#16a34a" transform="rotate(-20 125 88)" />
                    <ellipse cx="80" cy="112" rx="4" ry="2" fill="#16a34a" transform="rotate(35 80 112)" />
                  </svg>
                  <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-600/95 text-white text-[9px] font-bold shadow-lg">
                    <Sparkles size={9} />
                    IA
                  </div>
                </div>

                {/* Actions + caption */}
                <div className="px-2.5 py-1.5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Heart size={14} className="text-rose-500 fill-rose-500" />
                      <MessageCircle size={14} className="text-slate-700" />
                      <Send size={14} className="text-slate-700" />
                    </div>
                    <Bookmark size={14} className="text-slate-700" />
                  </div>
                  <div className="text-[9px] font-bold text-slate-900">312 me gusta</div>
                  <div className="text-[8.5px] text-slate-700 leading-snug mt-0.5 line-clamp-2">
                    <span className="font-bold">tu_restorán</span> Pasta fresca, salsa de la nona y un vino que abraza.
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "Generado" tag */}
            <div className="absolute -top-3 -right-3 bg-pink-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-xl shadow-pink-500/40 flex items-center gap-1 rotate-3">
              <Sparkles size={10} />
              Magic Post
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────
// MenuEat — Phone vertical + QR sticker + dishes carousel
// ──────────────────────────────────────────────────────────────────

function MenuEatSlide() {
  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-brand-900 via-brand-900 to-orange-950/40 md:min-h-[440px] relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col gap-5 md:grid md:grid-cols-5 md:gap-5 md:items-center">
        {/* Left — QR sticker */}
        <div className="md:col-span-2 space-y-3">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-300 mb-1">
              <QrCode size={11} />
              QR durable
            </div>
            <div className="text-base font-bold text-neutral-900">Un sticker. Cinco años.</div>
            <div className="text-[11px] text-neutral-600 mt-0.5">Pegas el QR una vez. Los precios cambian, la URL no.</div>
          </div>

          {/* QR card with details */}
          <div className="bg-white rounded-xl p-3 shadow-2xl shadow-orange-500/20 relative">
            <div className="text-[10px] font-bold uppercase tracking-wider text-orange-700 mb-2 flex items-center justify-between">
              <span>Mesa 4</span>
              <span className="text-orange-500 text-[9px]">Carta · ES + EN</span>
            </div>
            <div className="w-full aspect-square bg-white border-2 border-orange-900 rounded-md p-2 relative">
              <QrCode size={120} className="w-full h-full text-orange-900" strokeWidth={1.2} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-7 h-7 rounded bg-white border-2 border-orange-900 flex items-center justify-center">
                  <BookOpen size={14} className="text-orange-700" />
                </div>
              </div>
            </div>
            <div className="text-[9px] font-mono text-orange-700 text-center mt-2 truncate">
              eatcorp.cl/m/<span className="font-bold">a3f2k9</span>
            </div>
          </div>

          {/* Mini KPIs */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-brand-800/40 border border-brand-700 rounded-lg px-2.5 py-2">
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-600">Vistas hoy</div>
              <div className="text-base font-bold text-neutral-900 tabular-nums">127</div>
            </div>
            <div className="bg-brand-800/40 border border-brand-700 rounded-lg px-2.5 py-2">
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-600">Más visto</div>
              <div className="text-base font-bold text-neutral-900">Asado</div>
            </div>
          </div>
        </div>

        {/* Phone with carta */}
        <div className="md:col-span-3 flex justify-center">
          <div className="relative" style={{ maxWidth: '260px' }}>
            <div className="bg-brand-950 rounded-[28px] p-2 shadow-2xl shadow-orange-500/20 border border-brand-700">
              <div className="relative bg-white rounded-[20px] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-950 rounded-b-xl z-10"></div>

                {/* Menu header */}
                <div className="pt-6 px-3 pb-2 bg-gradient-to-b from-orange-50 to-white border-b border-orange-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[8px] font-bold uppercase tracking-wider text-orange-700">Tu restorán</div>
                      <div className="text-xs font-bold text-slate-900">Carta · Cena</div>
                    </div>
                    <div className="flex items-center gap-0.5 bg-orange-100 border border-orange-200 rounded-full p-0.5">
                      <span className="px-1.5 py-0.5 rounded-full bg-orange-500 text-white text-[8px] font-bold">ES</span>
                      <span className="px-1.5 py-0.5 rounded-full text-orange-700 text-[8px] font-bold flex items-center gap-0.5">
                        <Languages size={7} />
                        EN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="px-3 py-1.5 flex gap-1 overflow-hidden border-b border-slate-100">
                  {['Entradas', 'Principales', 'Postres'].map((cat, i) => (
                    <span key={cat} className={`text-[8px] font-bold whitespace-nowrap px-1.5 py-0.5 rounded-full ${i === 1 ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Dishes */}
                <div className="p-2 space-y-1.5 bg-white">
                  {[
                    { name: 'Pasta de la nona', desc: 'Pomodoro, albahaca', price: '$12.500', grad: 'from-amber-300 to-rose-500', mark: 'P' },
                    { name: 'Asado tira 14h', desc: 'Papas confit, chimichurri', price: '$18.900', grad: 'from-rose-400 to-amber-700', mark: 'A', featured: true },
                    { name: 'Empanada queso', desc: 'Masa de manteca', price: '$3.500', grad: 'from-yellow-300 to-orange-600', mark: 'E' },
                  ].map((d, i) => (
                    <div
                      key={d.name}
                      className={`flex gap-2 p-1.5 rounded-lg ${d.featured ? 'bg-orange-50 ring-1 ring-orange-300' : 'bg-slate-50'}`}
                      style={{ animation: `slide-up 0.5s ease-out ${i * 0.08}s backwards` }}
                    >
                      <div className={`w-10 h-10 rounded bg-gradient-to-br ${d.grad} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <span className="text-white font-bold text-sm drop-shadow">{d.mark}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-[10px] font-bold text-slate-900 leading-tight truncate">{d.name}</div>
                          <div className="text-[10px] font-bold text-orange-600 tabular-nums">{d.price}</div>
                        </div>
                        <div className="text-[8px] text-slate-600 leading-snug truncate">{d.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[8px] text-slate-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Precios al instante
                  </div>
                </div>
              </div>
            </div>

            {/* Floating sync badge */}
            <div className="absolute -top-2 -left-3 bg-primary-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-xl shadow-primary-500/40 flex items-center gap-1 -rotate-3">
              <Sparkles size={10} />
              Sincronizado
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────
// EventEat — Cotización tipo PDF + pipeline + checklist
// ──────────────────────────────────────────────────────────────────

function EventEatSlide() {
  const pipeline = [
    { label: 'Prospecto', count: 7, color: 'bg-neutral-400', active: false },
    { label: 'Cotizando', count: 4, color: 'bg-amber-500', active: true },
    { label: 'Confirmado', count: 3, color: 'bg-rose-500', active: false },
    { label: 'Realizado', count: 12, color: 'bg-primary-500', active: false },
  ]
  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-brand-900 via-brand-900 to-rose-950/40 md:min-h-[440px] relative overflow-hidden">
      <div aria-hidden className="absolute -top-20 -right-20 w-80 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col gap-5 md:grid md:grid-cols-5 md:gap-5">
        {/* Left — pipeline + KPIs */}
        <div className="md:col-span-2 space-y-3">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-300 mb-1">
              <PartyPopper size={11} />
              Pipeline mayo
            </div>
            <div className="text-base font-bold text-neutral-900">Eventos del mes</div>
            <div className="text-[11px] text-neutral-600 mt-0.5">26 prospectos · 38% margen prom.</div>
          </div>

          {/* Pipeline */}
          <div className="bg-brand-800/40 border border-brand-700 rounded-xl p-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2.5">Funnel de eventos</div>
            <div className="space-y-2">
              {pipeline.map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-2" style={{ animation: `slide-up 0.5s ease-out ${i * 0.08}s backwards` }}>
                  <div className={`w-2 h-2 rounded-full ${stage.color} flex-shrink-0 ${stage.active ? 'ring-2 ring-rose-400/40' : ''}`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-semibold ${stage.active ? 'text-neutral-900' : 'text-neutral-700'}`}>
                        {stage.label}
                      </span>
                      <span className="text-[10px] font-bold text-neutral-700 tabular-nums">{stage.count}</span>
                    </div>
                    <div className="h-1 bg-brand-900 rounded-full mt-1 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${stage.color}`}
                        style={{
                          width: `${(stage.count / 12) * 100}%`,
                          opacity: stage.active ? 0.9 : 0.5,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Margen */}
          <div className="bg-gradient-to-br from-rose-600 to-red-700 rounded-xl p-3 shadow-lg shadow-rose-500/30 relative overflow-hidden">
            <div aria-hidden className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="text-[10px] font-bold uppercase tracking-wider text-rose-100">Cotizado activo</div>
              <div className="text-2xl font-bold text-white tabular-nums leading-tight mt-0.5">$4,3M</div>
              <div className="flex items-center gap-2 mt-1.5 text-[10px] text-rose-100">
                <span className="flex items-center gap-0.5">
                  <Users size={10} />
                  144 pax
                </span>
                <span>·</span>
                <span className="flex items-center gap-0.5">
                  <CalendarCheck size={10} />
                  4 eventos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Quote document */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-xl shadow-2xl shadow-rose-500/15 overflow-hidden border border-rose-200 relative">
            {/* Document corner stamp */}
            <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md rotate-12 z-10">
              Borrador
            </div>

            <div className="px-5 pt-5 pb-3 border-b border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-sm">
                    <PartyPopper size={12} />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold uppercase tracking-wider text-slate-600">Cotización</div>
                    <div className="text-[10px] font-mono text-slate-700">#EV-042 · 17 mayo</div>
                  </div>
                </div>
                <FileText size={14} className="text-slate-500" />
              </div>

              <div className="text-base font-bold text-slate-900">Cierre fiscal · Constructora ACME</div>
              <div className="text-[11px] text-slate-600 mt-0.5">Salón privado · cena 3 tiempos · open bar · 60 personas</div>
            </div>

            {/* Items */}
            <div className="px-5 py-3 space-y-1.5 border-b border-slate-200">
              {[
                { label: 'Menú degustación', qty: '60 px', amount: '$1.080.000' },
                { label: 'Open bar 3h', qty: '60 px', amount: '$720.000' },
                { label: 'Salón privado', qty: '4h', amount: '$420.000' },
                { label: 'DJ + sonido', qty: '1', amount: '$180.000' },
                { label: 'Servicio (10%)', qty: '—', amount: '$240.000' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-[11px]"
                  style={{ animation: `slide-up 0.4s ease-out ${i * 0.05}s backwards` }}
                >
                  <span className="text-slate-800">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-[10px]">{item.qty}</span>
                    <span className="font-bold text-slate-900 tabular-nums w-20 text-right">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="px-5 py-3 bg-rose-50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">Subtotal neto</span>
                <span className="text-[11px] font-bold text-rose-900 tabular-nums">$2.353.000</span>
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">IVA 19%</span>
                <span className="text-[11px] font-bold text-rose-900 tabular-nums">$447.070</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-rose-200">
                <span className="text-xs font-bold text-rose-900">Total cliente</span>
                <span className="text-xl font-bold text-rose-900 tabular-nums">$2.800.070</span>
              </div>
              <div className="text-[9px] text-rose-700 text-right mt-0.5">Margen estimado: 38% · $864k</div>
            </div>

            {/* Footer with checklist */}
            <div className="px-5 py-2.5 bg-white border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Checklist</span>
                <span className="text-[10px] font-bold text-primary-600">2/4 hecho</span>
              </div>
              <div className="flex gap-1">
                {[true, true, false, false].map((done, i) => (
                  <div key={i} className={`flex-1 h-1 rounded-full ${done ? 'bg-primary-500' : 'bg-slate-200'}`}></div>
                ))}
              </div>
            </div>

            <div className="px-5 py-3 bg-slate-50 flex items-center justify-between gap-2">
              <button className="text-[10px] font-bold text-slate-700 px-3 py-1.5 bg-white border border-slate-300 rounded">
                Ver PDF
              </button>
              <button className="flex-1 text-[10px] font-bold text-white px-3 py-1.5 bg-gradient-to-r from-rose-600 to-red-600 rounded shadow-sm shadow-rose-500/40 flex items-center justify-center gap-1.5">
                <Send size={11} />
                Enviar cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
