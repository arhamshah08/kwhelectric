import { SolutionPage } from '@/components/solution-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Utilities & Energy Platforms',
  description:
    'Behind-the-meter visibility and flexible capacity. Open-standard dispatch at the edge.',
}

export default function Page() {
  return (
    <SolutionPage
      crumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Utilities & Energy Platforms' },
      ]}
      eyebrow="Solutions"
      title="Behind-the-meter visibility and flexible capacity"
      lead="Utilities and energy platforms need to see distributed assets, run demand response programs, and coordinate flexible capacity without rip and replace."
      steps={[
        {
          label: 'Step 1',
          title: 'See behind-the-meter',
          desc: 'Roll device telemetry up along grid topology so feeders, transformers, and sites are all visible.',
          callout: 'One view across every DER class.',
        },
        {
          label: 'Step 2',
          title: 'Run a DR program',
          desc: 'Enroll devices into a program and set the event window and recurrence without leaving the platform.',
          callout: 'Enroll and schedule in one workflow.',
        },
        {
          label: 'Step 3',
          title: 'Dispatch on open standards',
          desc: 'Issue events over open protocols; the Open Protocol Gateway delivers them to devices at the site edge.',
          callout: 'IEEE 2030.5 · OpenADR · SunSpec at the edge.',
        },
        {
          label: 'Step 4',
          title: 'Verify response',
          desc: 'Measure shed against target and generate M&V-ready reports from the same data used to act.',
          callout: 'Verifiable M&V from the data used to dispatch.',
        },
      ]}
      why={[
        {
          title: 'Mixed fleet visibility',
          desc: 'One view across batteries, thermostats, water heaters, and other DERs.',
        },
        {
          title: 'Open standards at edge',
          desc: 'IEEE 2030.5, OpenADR, and SunSpec via the Open Protocol Gateway.',
        },
        {
          title: 'Program-ready dispatch',
          desc: 'Enroll, dispatch, and verify device response through one workflow.',
        },
        {
          title: 'Platform interop',
          desc: 'Use kWh as the OEM connectivity layer under your own DERMS or VPP UX.',
        },
      ]}
      related={{
        title: 'Open Protocol Gateway',
        desc: 'Edge gateway for open-protocol programs and local asset connectivity.',
        href: '/solutions/open-protocol-gateway',
      }}
    />
  )
}
