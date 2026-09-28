import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'kWh Electric builds communication infrastructure that makes every distributed energy asset visible and dispatchable.',
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Heading as="h1">Making every energy asset dispatchable.</Heading>
        <Lead className="mt-6 max-w-3xl">
          We build the communication layer between OEM device clouds and the
          applications that run programs, portfolios, and the grid.
        </Lead>
        <section className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
            <p className="mt-6 text-sm/6 text-[#0b0b0e]">
              Distributed energy resources are everywhere. Batteries, EV
              chargers, thermostats, inverters. Each manufacturer speaks a
              different language. Teams building aggregators, VPP programs, and
              utility platforms end up rebuilding the same integrations over and
              over.
            </p>
            <p className="mt-6 text-sm/6 text-[#0b0b0e]">
              kWh Electric exists so that does not have to happen. One
              integration surface. One canonical data model. Open standards at
              the edge when you need them. Based in Palo Alto, California.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Primary markets', value: 'US + AU' },
              { label: 'Focus', value: 'DER connectivity' },
              { label: 'Products', value: '2' },
              { label: 'HQ', value: 'Palo Alto' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-sm text-[#0b0b0e]">{stat.label}</p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-[#0b0b0e]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <Subheading>Backed by</Subheading>
          <Heading as="h2" className="mt-2">
            Programs and investors behind the company.
          </Heading>
          <LogoCloud className="mt-10" />
        </section>

        <section className="mt-24 rounded-4xl bg-gray-950 px-8 py-14 text-center sm:px-12">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm/6 text-gray-400">
            Book a demo or email{' '}
            <a href="mailto:arham@kwhelectric.io" className="text-[#E9B968]">
              arham@kwhelectric.io
            </a>
          </p>
          <div className="mt-8">
            <Button href="/demo">Book a demo</Button>
          </div>
        </section>
      </Container>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
