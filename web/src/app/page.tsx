import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  CodeGraphic,
  CoverageGraphic,
  HubGraphic,
  ModesGraphic,
  ProtocolsGraphic,
  ReachGraphic,
  ResilienceGraphic,
  TelemetryGraphic,
} from '@/components/kwh-graphics'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'kWh Electric is the communication layer that makes every distributed energy asset visible and dispatchable across manufacturers.',
}

const buyers = [
  {
    href: '/solutions/aggregators',
    title: 'Aggregators & VPPs',
    desc: 'Launch and scale programs across mixed OEM fleets without maintaining N connectors.',
  },
  {
    href: '/solutions/oems',
    title: 'OEMs',
    desc: 'One path for downstream apps to reach your devices. Preserve every OEM-specific field.',
  },
  {
    href: '/solutions/financiers',
    title: 'Financiers',
    desc: 'Normalized telemetry, health, and performance data across battery portfolios.',
  },
  {
    href: '/solutions/utilities',
    title: 'Utilities & Platforms',
    desc: 'Behind-the-meter visibility and open-standard dispatch at the edge.',
  },
]

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#backers"
              className="flex items-center gap-1 rounded-full bg-amber-950/30 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-amber-950/25"
            >
              Live on two operating plants since December 2025
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-[#0b0b0e] sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Every asset, dispatchable.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-[#0b0b0e] sm:text-2xl/8">
            The communication layer that connects, normalizes, and dispatches
            distributed energy assets across every manufacturer, through one API.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/demo">Book a demo</Button>
            <Button variant="secondary" href="/solutions">
              Explore solutions
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>OEM Integration Platform</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        One integration surface for every OEM device.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Connectivity"
          title="One API, many OEMs"
          description="Connect batteries, EV chargers, thermostats, and inverters from any manufacturer through a single canonical interface, instead of one integration per OEM."
          graphic={<HubGraphic />}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Normalization"
          title="Every schema, normalized"
          description="Units, timestamps, and enums are mapped into one canonical model at ingestion. Fields with no equivalent are preserved under oem_extensions, so nothing is lost."
          graphic={<CodeGraphic />}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Dispatch"
          title="Control across the grid"
          description="Issue one canonical command and kWh translates it into each manufacturer's native API, then tracks execution across the whole fleet."
          graphic={
            <div className="absolute inset-0 flex items-center justify-center">
              <Map />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Reach"
          title="Any device, any partner"
          description="OEMs connect once and reach aggregators, utilities, and financiers. Downstream apps connect to kWh, not a new manufacturer project each time."
          graphic={<ReachGraphic />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Telemetry"
          title="Always in sync"
          description="Near-real-time telemetry and state-change events stream through webhooks so your programs always reflect the live state of every asset."
          graphic={<TelemetryGraphic />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>

      <div className="mt-10 flex justify-start">
        <Button href="/solutions/oem-integration-platform" variant="outline">
          Explore OEM Integration Platform
        </Button>
      </div>
    </Container>
  )
}

function GatewaySection() {
  return (
    <div id="gateway" className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Open Protocol Gateway</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Open standards, delivered at the site edge.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Two modes"
            title="Software or hardware"
            description="Run the gateway as a license on existing edge hardware, or as a palm-sized kWh device. Same protocol stack, same policy model, either way."
            graphic={<ModesGraphic />}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Protocols"
            title="Open standards, both ways"
            description="Speak IEEE 2030.5, OpenADR, and SunSpec northbound, and OEM dialects like Modbus and OCPP southbound, all at the edge."
            graphic={<ProtocolsGraphic />}
            className="lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Resilience"
            title="Operate even offline"
            description="Local policy keeps programs running through connectivity gaps, then resyncs automatically when the cloud link returns."
            graphic={<ResilienceGraphic />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Coverage"
            title="Behind-the-meter visibility"
            description="See feeders, transformers, and devices along real grid topology so utilities and platforms can coordinate flexible capacity at scale."
            graphic={<CoverageGraphic />}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>

        <div className="mt-10">
          <Button href="/solutions/open-protocol-gateway">
            Explore Open Protocol Gateway
          </Button>
        </div>
      </Container>
    </div>
  )
}

function BuyersSection() {
  return (
    <Container className="py-32">
      <Subheading>Who it&apos;s for</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Built for the people who run the grid.
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {buyers.map((b) => (
          <Link
            key={b.href}
            href={b.href}
            className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition data-hover:ring-[#CD7F32]/40"
          >
            <h4 className="text-lg font-semibold tracking-tight text-[#0b0b0e]">
              {b.title}
            </h4>
            <p className="mt-3 text-sm/6 text-[#0b0b0e]">{b.desc}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[#CD7F32]">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10" id="backers">
          <h2 className="text-center text-sm/6 font-medium text-[#0b0b0e]">
            Backed by leading programs and investors
          </h2>
          <LogoCloud className="mt-8" />
        </Container>
        <div
          id="solutions"
          className="bg-linear-to-b from-white from-50% to-gray-100 py-32"
        >
          <BentoSection />
        </div>
        <GatewaySection />
        <BuyersSection />
      </main>
      <Footer />
    </div>
  )
}
