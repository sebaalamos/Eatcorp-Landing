import Image from 'next/image'

type Client = {
  name: string
  tag: string
  logo: string
  width: number
  height: number
  logoBgClass: string
}

const clients: Client[] = [
  {
    name: 'El Toro',
    tag: 'Vitacura · Santiago',
    logo: '/logo-eltoro.png',
    width: 820,
    height: 340,
    logoBgClass: 'bg-[#9d0615]',
  },
  {
    name: 'Tigre',
    tag: 'Vitacura · Santiago',
    logo: '/logo-tigre.png',
    width: 729,
    height: 190,
    logoBgClass: 'bg-[#0a3424]',
  },
]

export function ClientLogos() {
  return (
    <section aria-label="Restoranes que operan con EatCorp" className="py-14 px-4 bg-brand-900/60 border-y border-brand-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-brand-700"></div>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
            Restoranes que ya operan con EatCorp
          </p>
          <div aria-hidden className="h-px w-10 bg-gradient-to-l from-transparent to-brand-700"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-4 pl-4 pr-5 py-3 rounded-xl bg-brand-800/50 border border-brand-700"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5 ring-1 ring-brand-700/50 ${c.logoBgClass}`}>
                <Image
                  src={c.logo}
                  alt={`Logo ${c.name}`}
                  width={c.width}
                  height={c.height}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-neutral-900 leading-tight">{c.name}</div>
                <div className="text-[11px] text-neutral-600 mt-0.5">{c.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
