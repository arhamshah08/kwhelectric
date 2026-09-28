import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export type SolutionStep = {
  label: string
  title: string
  desc: string
  callout?: string
}

export function SolutionPage({
  crumbs,
  eyebrow,
  title,
  lead,
  steps,
  why,
  related,
}: {
  crumbs: { label: string; href?: string }[]
  eyebrow: string
  title: string
  lead: string
  steps: SolutionStep[]
  why: { title: string; desc: string }[]
  related?: { title: string; desc: string; href: string }
}) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <p className="text-sm text-[#0b0b0e]">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 ? <span className="mx-2 opacity-40">/</span> : null}
              {c.href ? (
                <Link href={c.href} className="text-[#CD7F32] data-hover:underline">
                  {c.label}
                </Link>
              ) : (
                c.label
              )}
            </span>
          ))}
        </p>
        <Subheading className="mt-6">{eyebrow}</Subheading>
        <Heading as="h1" className="mt-2 max-w-3xl">
          {title}
        </Heading>
        <Lead className="mt-6 max-w-2xl">{lead}</Lead>
        <div className="mt-10">
          <Button href="/demo">Book a demo</Button>
        </div>
      </Container>

      <section className="mt-24 bg-linear-to-b from-white to-gray-50 py-24">
        <Container>
          <Subheading>How it works</Subheading>
          <Heading as="h2" className="mt-2 max-w-2xl">
            From first connection to verified outcome.
          </Heading>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {steps.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-sm/6 font-medium text-[#b86f28]">
                  {s.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#0b0b0e]">
                  {s.title}
                </h3>
                <p className="mt-3 text-base/7 text-[#0b0b0e]">{s.desc}</p>
                {s.callout ? (
                  <p className="mt-5 inline-flex items-start gap-2 rounded-xl bg-[#CD7F32]/10 px-3.5 py-2.5 text-sm text-[#0b0b0e] ring-1 ring-[#CD7F32]/20">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gray-950 text-[10px] font-bold text-white">
                      i
                    </span>
                    {s.callout}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-24">
        <Subheading>Why teams choose kWh</Subheading>
        <Heading as="h2" className="mt-2 max-w-2xl">
          Built for how the energy stack actually works.
        </Heading>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {why.map((w) => (
            <div
              key={w.title}
              className="rounded-3xl bg-gray-50 p-6 ring-1 ring-black/5"
            >
              <h3 className="text-lg font-semibold text-[#0b0b0e]">{w.title}</h3>
              <p className="mt-2 text-sm/6 text-[#0b0b0e]">{w.desc}</p>
            </div>
          ))}
        </div>
        {related ? (
          <div className="mt-12 max-w-xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-sm/6 font-medium text-[#b86f28]">
              Related product
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[#0b0b0e]">
              {related.title}
            </h3>
            <p className="mt-2 text-sm/6 text-[#0b0b0e]">{related.desc}</p>
            <Link
              href={related.href}
              className="mt-4 inline-flex text-sm font-semibold text-[#CD7F32]"
            >
              Explore {related.title} →
            </Link>
          </div>
        ) : null}
        <div className="mt-16 rounded-4xl bg-gray-950 px-8 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Talk to the kWh team
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm/6 text-gray-400">
            Request a demo tailored to your use case and buyer segment.
          </p>
          <div className="mt-8">
            <Button href="/demo">Book a demo</Button>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
