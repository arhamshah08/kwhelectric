import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide',
  description:
    'Technical overview of the OEM Integration Platform: canonical data model, enrollment, telemetry, and control.',
}

const sections = [
  {
    title: 'What the platform is',
    body: 'The OEM Integration Platform is a unified integration and normalization layer between OEM device ecosystems and downstream applications. Applications interact with one API and one schema, not N OEM dialects.',
  },
  {
    title: 'Canonical data model',
    body: 'Devices, telemetry, events, enrollment, and command state share a consistent schema. Units, timestamps, and enums are normalized at ingestion. OEM-specific fields without a canonical match are preserved under oem_extensions.',
  },
  {
    title: 'Enrollment',
    body: 'OAuth-based device linking discovers eligible devices, assigns canonical IDs, and records capabilities so downstream apps know what each asset can do.',
  },
  {
    title: 'Telemetry & events',
    body: 'REST reads and historical queries cover portfolio and device state. Near-real-time streams and webhooks deliver state-change events at scale.',
  },
  {
    title: 'Control & dispatch',
    body: 'Applications issue commands in canonical form. kWh translates each command into the manufacturer-native API and tracks execution state for verification and settlement.',
  },
  {
    title: 'Open Protocol Gateway',
    body: 'At the site edge, the Open Protocol Gateway adds IEEE 2030.5, OpenADR, and SunSpec northbound, with Modbus, OCPP, and OEM dialects southbound. Available as a software license or palm-sized hardware.',
  },
]

export default function GuidePage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16 max-w-3xl">
        <Subheading>Guide</Subheading>
        <Heading as="h1" className="mt-2">
          OEM Integration Platform — Technical Overview
        </Heading>
        <Lead className="mt-6">
          How kWh connects OEM device clouds to the applications that run
          programs, portfolios, and the grid.
        </Lead>

        <div className="mt-16 space-y-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold tracking-tight text-[#0b0b0e]">
                {s.title}
              </h2>
              <p className="mt-3 text-base/7 text-[#0b0b0e]">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button href="/demo">Book a demo</Button>
          <Button href="/solutions/oem-integration-platform" variant="outline">
            Product page
          </Button>
        </div>

        <p className="mt-10 text-sm text-[#0b0b0e]">
          Prefer the full docs site?{' '}
          <Link
            href="https://kwhelectric.io"
            className="font-semibold text-[#CD7F32]"
          >
            Contact us for API reference access
          </Link>
          .
        </p>
      </Container>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
