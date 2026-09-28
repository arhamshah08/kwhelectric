import { clsx } from 'clsx'

/* ---------- shared atoms ---------- */

function Pill({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium whitespace-nowrap',
        dark
          ? 'bg-white/10 text-gray-100 ring-1 ring-white/15'
          : 'bg-white text-[#0b0b0e] ring-1 ring-black/5 shadow-sm',
        className,
      )}
    >
      {children}
    </span>
  )
}

function Dot({ className }: { className?: string }) {
  return <span className={clsx('size-1.5 rounded-full', className)} />
}

function KwhNode({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={clsx(
        'flex items-center rounded-2xl px-5 py-3 shadow-lg',
        dark ? 'bg-white ring-1 ring-black/10' : 'bg-gray-950 ring-1 ring-white/10',
      )}
    >
      <img
        src={dark ? '/kwh-logo-mark.png' : '/kwh-logo-mark-light.png'}
        alt="kWh Electric"
        className="h-6 w-auto"
      />
    </div>
  )
}

/* ---------- light: One API, many OEMs ---------- */

export function HubGraphic() {
  const devices = [
    'Batteries',
    'EV chargers',
    'Thermostats',
    'Inverters',
    'Solar',
  ]
  return (
    <div className="flex h-80 items-center justify-center gap-5 bg-gray-50 px-8 sm:gap-8">
      <div className="flex flex-col gap-2.5">
        {devices.map((d) => (
          <Pill key={d}>
            <Dot className="bg-[#CD7F32]" />
            {d}
          </Pill>
        ))}
      </div>
      <svg
        viewBox="0 0 72 200"
        preserveAspectRatio="none"
        className="h-52 w-14 text-gray-300"
        fill="none"
      >
        {[16, 60, 100, 140, 184].map((y) => (
          <path
            key={y}
            d={`M0 ${y} C 36 ${y}, 36 100, 72 100`}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      <div className="flex flex-col items-center gap-2">
        <KwhNode />
        <span className="text-sm font-medium text-[#0b0b0e]">
          One API
        </span>
      </div>
    </div>
  )
}

/* ---------- light: schema normalization (dark data panel) ---------- */

export function CodeGraphic() {
  const rows = [
    ['battery_soc_pct', 'state_of_charge'],
    ['power_w', 'active_power'],
    ['tstat_setpt_f', 'target_temp'],
    ['dev_uid', 'oem_device_id'],
  ]
  return (
    <div className="flex h-80 items-center bg-gray-900 px-8">
      <div className="w-full font-mono text-[13px]/7">
        <div className="mb-3 flex items-center gap-2 text-[#0b0b0e]">
          <span className="text-[#0b0b0e]"># oem field</span>
          <span className="ml-auto text-[#0b0b0e]">canonical</span>
        </div>
        {rows.map(([a, b]) => (
          <div key={a} className="flex items-center gap-3">
            <span className="text-gray-400">{a}</span>
            <span className="flex-1 border-t border-dashed border-white/10" />
            <span className="text-emerald-300">{b}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- light: marketplace reach ---------- */

export function ReachGraphic() {
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-3 bg-gray-50 px-6">
      <div className="flex flex-wrap justify-center gap-2">
        <Pill>OEMs</Pill>
        <Pill>Device clouds</Pill>
      </div>
      <span className="text-gray-300">▲</span>
      <KwhNode />
      <span className="text-gray-300">▼</span>
      <div className="flex flex-wrap justify-center gap-2">
        <Pill>Aggregators</Pill>
        <Pill>Utilities</Pill>
        <Pill>Financiers</Pill>
      </div>
    </div>
  )
}

/* ---------- light: live telemetry feed (dark data panel) ---------- */

export function TelemetryGraphic() {
  const events = [
    ['12:04:31', 'battery.telemetry', 'soc 82%'],
    ['12:04:31', 'evse.status', 'charging'],
    ['12:04:30', 'dispatch.ack', 'fleet A'],
    ['12:04:29', 'inverter.power', '4.2 kW'],
    ['12:04:29', 'thermostat.state', 'hold'],
  ]
  return (
    <div className="flex h-80 flex-col justify-center bg-gray-900 px-7 font-mono text-[12px]/6">
      <div className="mb-2 flex items-center gap-2 text-gray-400">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        live event stream
      </div>
      {events.map(([t, ev, val]) => (
        <div key={ev} className="flex items-center gap-2 py-0.5">
          <span className="text-[#0b0b0e]">{t}</span>
          <span className="text-gray-300">{ev}</span>
          <span className="ml-auto text-[#E9B968]">{val}</span>
        </div>
      ))}
    </div>
  )
}

/* ---------- dark: gateway deployment modes ---------- */

export function ModesGraphic() {
  const cards = [
    {
      title: 'Software license',
      sub: 'Runs on your existing edge hardware',
      glyph: (
        <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#E9B968]">
          <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 9l-2 2 2 2M15 9l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'kWh device',
      sub: 'Palm-sized gateway, provisioned by kWh',
      glyph: (
        <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#E9B968]">
          <rect x="5" y="3" width="14" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="17" r="1.2" fill="currentColor" />
          <path d="M9 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ]
  return (
    <div className="flex h-80 items-center justify-center gap-4 px-8">
      {cards.map((c) => (
        <div
          key={c.title}
          className="flex w-56 flex-col gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            {c.glyph}
          </div>
          <div className="text-base font-medium text-white">{c.title}</div>
          <div className="text-sm/6 text-gray-400">{c.sub}</div>
        </div>
      ))}
    </div>
  )
}

/* ---------- dark: protocol stack ---------- */

export function ProtocolsGraphic() {
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-2.5 px-6">
      <span className="text-sm font-medium text-[#0b0b0e]">
        Northbound
      </span>
      <div className="flex flex-wrap justify-center gap-2">
        <Pill dark>IEEE 2030.5</Pill>
        <Pill dark>OpenADR</Pill>
        <Pill dark>SunSpec</Pill>
      </div>
      <span className="text-[#0b0b0e]">↕</span>
      <KwhNode dark />
      <span className="text-[#0b0b0e]">↕</span>
      <div className="flex flex-wrap justify-center gap-2">
        <Pill dark>Modbus</Pill>
        <Pill dark>OCPP</Pill>
        <Pill dark>BACnet</Pill>
      </div>
      <span className="mt-1 text-sm font-medium text-[#0b0b0e]">
        Southbound
      </span>
    </div>
  )
}

/* ---------- dark: offline resilience ---------- */

export function ResilienceGraphic() {
  const steps = [
    ['Cloud link lost', 'bg-amber-400'],
    ['Local policy keeps programs running', 'bg-emerald-400'],
    ['Link restored', 'bg-gray-500'],
    ['State auto-resynced', 'bg-emerald-400'],
  ]
  return (
    <div className="flex h-80 items-center px-8">
      <ol className="w-full space-y-4">
        {steps.map(([label, color], i) => (
          <li key={label} className="flex items-center gap-4">
            <span className="relative flex flex-col items-center">
              <span className={clsx('size-3 rounded-full', color)} />
              {i < steps.length - 1 && (
                <span className="absolute top-3 h-4 w-px bg-white/15" />
              )}
            </span>
            <span className="text-sm/6 text-gray-300">{label}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ---------- dark: grid topology / coverage ---------- */

export function CoverageGraphic() {
  const chain = ['Substation', 'Feeder', 'Transformer']
  const devices = ['Battery', 'EV', 'Solar']
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-5 px-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {chain.map((c, i) => (
          <div key={c} className="flex items-center gap-3">
            <Pill dark>{c}</Pill>
            <span className="text-[#0b0b0e]">→</span>
            {i === chain.length - 1 && <KwhNode dark />}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {devices.map((d) => (
          <Pill dark key={d}>
            <Dot className="bg-[#E9B968]" />
            {d}
          </Pill>
        ))}
      </div>
    </div>
  )
}
