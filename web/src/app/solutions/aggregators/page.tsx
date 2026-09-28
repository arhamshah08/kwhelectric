import { SolutionPage } from '@/components/solution-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aggregators & VPPs',
  description:
    'Launch and scale VPP programs across mixed OEM fleets with one integration surface.',
}

export default function Page() {
  return (
    <SolutionPage
      crumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Aggregators & VPPs' },
      ]}
      eyebrow="Solutions"
      title="Launch and scale programs across mixed OEM fleets"
      lead="Aggregators and VPP operators need one integration surface to enroll devices, ingest telemetry, and dispatch across manufacturers without maintaining N OEM connectors."
      steps={[
        {
          label: 'Step 1',
          title: 'Enroll devices',
          desc: 'Link an OEM account and kWh discovers every eligible device, assigns a canonical ID, and records what each one can do.',
          callout: 'One connector for every OEM, not one per manufacturer.',
        },
        {
          label: 'Step 2',
          title: 'See the whole fleet',
          desc: 'Telemetry from every OEM lands in one schema, so a mixed fleet reads like a single system in real time.',
          callout: 'One canonical data model across the entire fleet.',
        },
        {
          label: 'Step 3',
          title: 'Dispatch in canonical form',
          desc: 'Send one command against a canonical device. kWh converts it into each manufacturer\'s format and tracks execution state.',
          callout: 'kWh translates one command into each OEM\'s native API.',
        },
        {
          label: 'Step 4',
          title: 'Verify and settle',
          desc: 'Every dispatch is measured against target and logged, so program performance and settlement are provable.',
          callout: 'Logged response for settlements and program M&V.',
        },
      ]}
      why={[
        {
          title: 'One API, many OEMs',
          desc: 'Connect batteries, thermostats, EV chargers, and more through a canonical data model.',
        },
        {
          title: 'Faster enrollment',
          desc: 'OAuth-based device linking and normalized enrollment state across OEMs.',
        },
        {
          title: 'Dispatch at scale',
          desc: 'Issue control commands in canonical form; kWh translates to OEM-specific calls.',
        },
        {
          title: 'Verifiable outcomes',
          desc: 'Logged response data for program performance and settlements.',
        },
      ]}
      related={{
        title: 'OEM Integration Platform',
        desc: 'Cloud APIs for multi-OEM connectivity and normalization.',
        href: '/solutions/oem-integration-platform',
      }}
    />
  )
}
