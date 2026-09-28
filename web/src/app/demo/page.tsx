import { Container } from '@/components/container'
import { DemoForm } from '@/components/demo-form'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Schedule a walkthrough of the OEM Integration Platform, Open Protocol Gateway, or both.',
}

export default function DemoPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Subheading>Book a Demo</Subheading>
            <Heading as="h1" className="mt-2 max-w-xl">
              See how kWh connects your energy assets.
            </Heading>
            <Lead className="mt-6 max-w-xl">
              A 30-minute walkthrough tailored to your buyer type and OEM stack.
            </Lead>
            <ul className="mt-10 space-y-4 text-base/7 text-[#0b0b0e]">
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#CD7F32]" />
                Live product overview for aggregators, OEMs, financiers, or utilities
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#CD7F32]" />
                Technical Q&amp;A on APIs, enrollment, and edge gateway options
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#CD7F32]" />
                Next steps for a pilot or integration scoping call
              </li>
            </ul>
            <p className="mt-10 text-sm text-[#0b0b0e]">
              Prefer email?{' '}
              <a
                href="mailto:arham@kwhelectric.io"
                className="font-semibold text-[#CD7F32]"
              >
                arham@kwhelectric.io
              </a>
            </p>
          </div>
          <DemoForm />
        </div>
      </Container>
      <Footer />
    </main>
  )
}
