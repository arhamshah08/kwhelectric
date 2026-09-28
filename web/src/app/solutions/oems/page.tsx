import { SolutionPage } from '@/components/solution-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OEMs',
  description:
    'Expand program access for your devices. One path to aggregators, utilities, and energy platforms.',
}

export default function Page() {
  return (
    <SolutionPage
      crumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'OEMs' },
      ]}
      eyebrow="Solutions"
      title="Expand program access for your devices"
      lead="Device manufacturers expose telemetry and control through proprietary clouds. kWh gives OEMs a single path to reach aggregators, utilities, and energy platforms."
      steps={[
        {
          label: 'Step 1',
          title: 'Connect your cloud',
          desc: 'Connect your device cloud once. kWh detects your telemetry and control endpoints and confirms scopes.',
          callout: 'Manufacturer-sanctioned APIs only.',
        },
        {
          label: 'Step 2',
          title: 'Map fields once',
          desc: 'Your native fields map to the canonical model. Units, timestamps, and enums are normalized at ingestion.',
          callout: 'Map once; every downstream app benefits.',
        },
        {
          label: 'Step 3',
          title: 'Reach downstream apps',
          desc: 'Once mapped, your devices are reachable by aggregators, utilities, and platforms through one connection.',
          callout: 'New partners connect to kWh, not a new project.',
        },
        {
          label: 'Step 4',
          title: 'Nothing is lost',
          desc: 'OEM-specific fields are preserved under oem_extensions, so your unique data survives normalization.',
          callout: 'Fields with no canonical match are never dropped.',
        },
      ]}
      why={[
        {
          title: 'Reach downstream apps',
          desc: 'One integration mapping layer instead of bespoke connectors per partner.',
        },
        {
          title: 'Preserve OEM data',
          desc: 'Fields without a canonical equivalent are kept in oem_extensions.',
        },
        {
          title: 'Edge option',
          desc: 'Pair cloud APIs with the Open Protocol Gateway for site-level open standards.',
        },
        {
          title: 'Faster partner onboarding',
          desc: 'New downstream applications connect to kWh, not a new OEM project each time.',
        },
      ]}
      related={{
        title: 'Open Protocol Gateway',
        desc: 'Software license or palm-sized hardware for edge protocol translation.',
        href: '/solutions/open-protocol-gateway',
      }}
    />
  )
}
