import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'OEM Integration Platform and Open Protocol Gateway for aggregators, OEMs, financiers, and utilities.',
}

const products = [
  {
    href: '/solutions/oem-integration-platform',
    eyebrow: 'Cloud APIs',
    title: 'OEM Integration Platform',
    desc: 'A unified integration and normalization layer between OEM device ecosystems and downstream applications. One API. Many manufacturers.',
  },
  {
    href: '/solutions/open-protocol-gateway',
    eyebrow: 'Edge',
    title: 'Open Protocol Gateway',
    desc: 'Protocol translation at the site edge as a software license or palm-sized hardware. IEEE 2030.5, OpenADR, SunSpec, and more.',
  },
]

const personas = [
  {
    href: '/solutions/aggregators',
    title: 'Aggregators & VPPs',
    desc: 'Enroll, dispatch, and verify across mixed OEM fleets.',
  },
  {
    href: '/solutions/oems',
    title: 'OEMs',
    desc: 'Reach every downstream partner with one integration.',
  },
  {
    href: '/solutions/financiers',
    title: 'Financiers',
    desc: 'Portfolio telemetry and health in one schema.',
  },
  {
    href: '/solutions/utilities',
    title: 'Utilities & Platforms',
    desc: 'Behind-the-meter visibility and flexible capacity.',
  },
]

export default function SolutionsHub() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Subheading>Solutions</Subheading>
        <Heading as="h1" className="mt-2 max-w-3xl">
          One platform to connect, normalize, and dispatch energy assets.
        </Heading>
        <Lead className="mt-6 max-w-2xl">
          Communication infrastructure that makes every distributed energy
          asset visible and dispatchable across manufacturers.
        </Lead>
      </Container>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition data-hover:ring-[#CD7F32]/40 sm:p-10"
            >
              <p className="text-sm/6 font-medium text-[#b86f28]">
                {p.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight text-[#0b0b0e]">
                {p.title}
              </h2>
              <p className="mt-4 text-base/7 text-[#0b0b0e]">{p.desc}</p>
              <span className="mt-8 inline-flex text-sm font-semibold text-[#CD7F32]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="mt-24 pb-8">
        <Subheading>Who it&apos;s for</Subheading>
        <Heading as="h2" className="mt-2 max-w-2xl">
          Built for every side of the energy stack.
        </Heading>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="rounded-3xl bg-gray-50 p-6 ring-1 ring-black/5 transition data-hover:bg-white data-hover:ring-[#CD7F32]/40"
            >
              <h3 className="text-lg font-semibold text-[#0b0b0e]">{p.title}</h3>
              <p className="mt-2 text-sm/6 text-[#0b0b0e]">{p.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-16">
          <Button href="/demo">Book a demo</Button>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
