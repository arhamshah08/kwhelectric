'use client'

import { clsx } from 'clsx'

/** Brand mark: gold hexagon + lightning + "kWh" wordmark. Never type "kWh" as text. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/kwh-logo-black.png"
      alt="kWh Electric"
      className={clsx(className, 'w-auto')}
    />
  )
}

export function LogoLight({ className }: { className?: string }) {
  return (
    <img
      src="/kwh-logo-mark-light.png"
      alt="kWh Electric"
      className={clsx(className, 'w-auto')}
    />
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img src="/kwh-logo-black.png" alt="kWh Electric" className={className} />
  )
}
