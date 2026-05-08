'use client'

import { useEffect, useState } from 'react'
import { Bell, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import { trackCTA } from '@/lib/track'

const ROTATING_WORDS = ['restorán', 'cocina', 'barra', 'bistró', 'pastelería']

export function Hero() {
  const handlePrimary = () => {
    trackCTA('cta_hero_primary')
    window.location.href = 'https://app.eatcorp.cl/#/'
  }

  const [showToast, setShowToast] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setShowToast((s) => !s), 6000)
    return () => clearInterval(id)
  }, [])

  const [wordIndex, setWordIndex] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
        setWordVisible(true)
      }, 280)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="pt-28 pb-20 px-4 relative overflow-hidden">
      <div aria-hidden className="absolute top-20 left-10 w-72 h-72 bg-primary-700/25 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute bottom-10 right-10 w-96 h-96 bg-accent-700/20 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
          </span>
          <span className="text-sm font-medium text-primary-200">Hecho para restoranes en Chile y LatAm</span>
        </div>

        <h1 className="font-bold text-neutral-900 mb-6 leading-[1.05] tracking-[-0.025em] text-5xl md:text-7xl">
          El motor de tu
          <br />
          <span
            className={`inline-block transition-all duration-300 bg-gradient-to-br from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent ${
              wordVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ filter: 'drop-shadow(0 0 32px rgba(52, 211, 153, 0.35))' }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Compras, tareas, redes sociales con IA y mantención en una sola plataforma.
          En castellano, lista en 30 minutos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4 px-6 sm:px-0">
          <button
            onClick={handlePrimary}
            className="group relative bg-primary-600 hover:bg-primary-500 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all hover:scale-[1.02] focus-visible:scale-[1.02]"
            style={{ boxShadow: 'var(--shadow-wow)' }}
          >
            <span className="flex items-center gap-2">
              Activar mi restorán
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
          <a
            href="#how-it-works"
            onClick={() => trackCTA('cta_hero_secondary')}
            className="text-neutral-700 hover:text-primary-300 px-5 py-3 rounded-lg font-medium text-base transition-colors underline-offset-4 hover:underline"
          >
            Ver cómo funciona
          </a>
        </div>

        <p className="text-xs text-neutral-500 mb-14">
          Sin instalación · sin tarjeta de crédito · todo en castellano
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div aria-hidden className="absolute inset-0 -translate-y-4 bg-gradient-to-tr from-primary-500/15 via-transparent to-accent-500/10 rounded-2xl blur-2xl"></div>

          <div
            aria-live="polite"
            className={`absolute -top-4 -right-4 md:-right-8 z-20 transition-all duration-700 ${
              showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
            }`}
          >
            <div className="bg-brand-800 rounded-xl shadow-2xl border border-primary-500/40 px-4 py-3 flex items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={18} className="text-primary-400" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-neutral-900">Lote bancario ejecutado</div>
                <div className="text-[10px] text-neutral-600">12 facturas · $2.640.500</div>
              </div>
            </div>
          </div>

          <div className="signature-corner relative bg-brand-900 rounded-2xl shadow-2xl border border-brand-800 overflow-hidden">
            <div className="bg-brand-950 border-b border-brand-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-danger-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-warning-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-primary-500/80"></div>
              </div>
              <div className="flex-1 mx-4 bg-brand-900 border border-brand-800 rounded px-3 py-1 text-xs text-neutral-600">
                app.eatcorp.cl
              </div>
            </div>

            <div className="bg-brand-900 border-b border-brand-800 px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  ET
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-neutral-900 leading-tight">El Toro</div>
                  <div className="text-[10px] text-neutral-600">Vitacura · Lunes 28 abr</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                  <Bell size={16} className="text-neutral-600" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-500"></span>
                </div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-[10px] font-bold">
                  S
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-brand-900 to-brand-950">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <KpiCard label="Compras del mes" value="$2.4M" trend="+12%" trendUp dotColor="#10b981" spark={[40, 55, 50, 70, 65, 80, 88]} />
                <KpiCard label="Tareas activas" value="24" trend="6 pendientes" dotColor="#7c5cff" spark={[30, 45, 60, 50, 55, 48, 50]} />
                <KpiCard label="Posts esta semana" value="12" trend="+3 vs sem. ant." trendUp dotColor="#ec4899" spark={[20, 25, 35, 40, 50, 60, 75]} />
                <KpiCard label="Activos OK" value="98%" trend="2 mantenciones" dotColor="#0ea5e9" spark={[95, 96, 94, 97, 96, 98, 98]} />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-5">
                <ChartCard />
                <TasksCard />
                <ApprovalsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type KpiProps = { label: string; value: string; trend: string; trendUp?: boolean; dotColor: string; spark: number[] }

function KpiCard({ label, value, trend, trendUp, dotColor, spark }: KpiProps) {
  const max = Math.max(...spark)
  const min = Math.min(...spark)
  const range = max - min || 1
  const w = 64
  const h = 18
  const points = spark.map((v, i) => {
    const x = (i / (spark.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="bg-brand-800/60 rounded-lg border border-brand-700 p-4 text-left transition-colors hover:border-primary-500/40">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }}></div>
        <div className="text-[11px] text-neutral-600">{label}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-neutral-900 leading-none tabular-nums">{value}</div>
          <div className={`flex items-center gap-1 mt-1.5 text-[10px] ${trendUp ? 'text-primary-400' : 'text-neutral-600'}`}>
            {trendUp && <TrendingUp size={10} />}
            <span>{trend}</span>
          </div>
        </div>
        <svg width={w} height={h} className="overflow-visible" aria-hidden>
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="200"
            style={{ animation: 'draw-line 1.5s ease-out forwards' }}
            className={trendUp ? 'text-primary-400' : 'text-neutral-500'}
          />
        </svg>
      </div>
    </div>
  )
}

function ChartCard() {
  const data = [
    { d: 'L', v: 45 },
    { d: 'M', v: 70 },
    { d: 'M', v: 55 },
    { d: 'J', v: 85 },
    { d: 'V', v: 50 },
    { d: 'S', v: 95 },
    { d: 'D', v: 75 },
  ]
  const today = 5

  return (
    <div className="bg-brand-800/60 rounded-lg border border-brand-700 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-neutral-800">Compras semanales</div>
        <div className="flex items-center gap-1 text-[10px] text-primary-400">
          <TrendingUp size={10} />
          <span>+18%</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col justify-between text-[8px] text-neutral-500 pt-1 pb-4 tabular-nums">
          <span>$2M</span>
          <span>$1M</span>
          <span>$0</span>
        </div>
        <div className="flex-1">
          <div className="flex items-end gap-1 h-20 border-l border-b border-brand-700 pl-1 pb-0.5">
            {data.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className={`w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t origin-bottom ${i === today ? 'ring-2 ring-primary-300 ring-offset-1 ring-offset-brand-800' : ''}`}
                  style={{ height: `${d.v}%`, animation: `slide-up 0.6s ease-out ${i * 0.08}s backwards` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {data.map((d, i) => (
              <div key={i} className={`flex-1 text-center text-[9px] ${i === today ? 'text-primary-400 font-bold' : 'text-neutral-500'}`}>
                {d.d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TasksCard() {
  const tasks = [
    { label: 'Reponer aceite oliva', cat: 'Cocina', catColor: 'bg-primary-500/20 text-primary-300', who: 'M', whoBg: 'bg-primary-500' },
    { label: 'Revisar inventario', cat: 'Admin', catColor: 'bg-blue-500/20 text-blue-300', who: 'J', whoBg: 'bg-blue-500' },
    { label: 'Coordinar evento', cat: 'Ops', catColor: 'bg-warning-500/20 text-warning-300', who: 'C', whoBg: 'bg-warning-500' },
  ]

  return (
    <div className="bg-brand-800/60 rounded-lg border border-brand-700 p-4 text-left">
      <div className="text-xs font-semibold text-neutral-800 mb-3">Tareas recientes</div>
      <div className="space-y-2">
        {tasks.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm border-2 border-brand-700"></div>
            <div className="flex-1 text-[11px] text-neutral-700 truncate">{t.label}</div>
            <span className={`text-[8px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded ${t.catColor}`}>{t.cat}</span>
            <div className={`w-5 h-5 rounded-full ${t.whoBg} flex items-center justify-center text-white text-[9px] font-bold`}>
              {t.who}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ApprovalsCard() {
  const items = [
    { name: 'Distribuidora Central', amount: '$480K', urgency: 'Vence hoy', urgColor: 'bg-accent-500/20 text-accent-300 animate-pulse' },
    { name: 'Carnes del Sur', amount: '$320K', urgency: 'Pronto pago -2%', urgColor: 'bg-primary-500/20 text-primary-300' },
    { name: 'Bebidas Nacional', amount: '$180K', urgency: '5 días', urgColor: 'bg-brand-700 text-neutral-600' },
  ]

  return (
    <div className="bg-brand-800/60 rounded-lg border border-brand-700 p-4 text-left">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-neutral-800">Pendientes aprobación</div>
        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-warning-500/20 text-warning-300 font-bold">3</span>
      </div>
      <div className="space-y-2">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm border-2 border-warning-500 bg-warning-500/20"></div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-neutral-800 font-medium truncate">{p.name}</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] text-neutral-600 tabular-nums">{p.amount}</span>
                <span className={`text-[8px] font-semibold px-1 py-0.5 rounded ${p.urgColor}`}>{p.urgency}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
