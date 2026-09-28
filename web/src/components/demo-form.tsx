'use client'

import { useState } from 'react'
import { Button } from '@/components/button'

const WEB3FORMS_ACCESS_KEY = 'e06d54ca-4593-4bf6-b1d4-2b6c9cf99460'

export function DemoForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('botcheck')) return

    const firstName = String(data.get('first_name') || '').trim()
    const lastName = String(data.get('last_name') || '').trim()
    const email = String(data.get('email') || '').trim()
    if (!firstName || !lastName || !email) {
      setStatus('error')
      setMessage('Please fill in all required fields.')
      return
    }

    setStatus('sending')
    setMessage('Sending...')

    const body = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Demo request from ${firstName} ${lastName}`,
      from_name: `${firstName} ${lastName}`,
      name: `${firstName} ${lastName}`,
      email,
      message: [
        data.get('message') || '',
        data.get('company') ? `Company: ${data.get('company')}` : '',
        data.get('role') ? `Role: ${data.get('role')}` : '',
        data.get('buyer_type') ? `Buyer type: ${data.get('buyer_type')}` : '',
        data.get('product_interest')
          ? `Product: ${data.get('product_interest')}`
          : '',
      ]
        .filter(Boolean)
        .join('\n\n'),
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('ok')
        setMessage('Thanks. We will be in touch shortly.')
        form.reset()
      } else {
        setStatus('error')
        setMessage('Something went wrong. Email arham@kwhelectric.io.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Email arham@kwhelectric.io.')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10"
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] opacity-0"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" required>
          <input name="first_name" required className={inputCls} />
        </Field>
        <Field label="Last name" required>
          <input name="last_name" required className={inputCls} />
        </Field>
      </div>
      <Field label="Work email" required className="mt-5">
        <input name="email" type="email" required className={inputCls} />
      </Field>
      <Field label="Company" className="mt-5">
        <input name="company" className={inputCls} />
      </Field>
      <Field label="Role" className="mt-5">
        <input name="role" className={inputCls} />
      </Field>
      <Field label="I am a" className="mt-5">
        <select name="buyer_type" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select buyer type
          </option>
          <option>Aggregator / VPP operator</option>
          <option>OEM</option>
          <option>Financier</option>
          <option>Utility / Energy platform</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Product interest" className="mt-5">
        <select name="product_interest" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select product
          </option>
          <option>OEM Integration Platform</option>
          <option>Open Protocol Gateway</option>
          <option>Both</option>
          <option>Not sure yet</option>
        </select>
      </Field>
      <Field label="Message" className="mt-5">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your fleet, OEM stack, or use case."
          className={inputCls}
        />
      </Field>
      <p
        className={`mt-4 min-h-5 text-sm ${
          status === 'error'
            ? 'text-red-600'
            : status === 'ok'
              ? 'text-emerald-700'
              : 'text-[#0b0b0e]'
        }`}
      >
        {message}
      </p>
      <div className="mt-6">
        <Button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? 'Sending…' : 'Request a demo'}
        </Button>
      </div>
    </form>
  )
}

const inputCls =
  'mt-2 w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-base text-[#0b0b0e] outline-hidden ring-1 ring-black/5 focus:ring-2 focus:ring-[#CD7F32]/40'

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={className}>
      <span className="text-sm font-medium text-[#0b0b0e]">
        {label}
        {required ? <span className="ml-1 text-[#CD7F32]">*</span> : null}
      </span>
      {children}
    </label>
  )
}
