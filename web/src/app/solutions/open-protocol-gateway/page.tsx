import { SolutionPage } from '@/components/solution-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Protocol Gateway',
  description:
    'Open standards at the site edge. Software license or palm-sized hardware for IEEE 2030.5, OpenADR, and SunSpec.',
}

export default function Page() {
  return (
    <SolutionPage
      crumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Open Protocol Gateway' },
      ]}
      eyebrow="Product"
      title="Open standards at the site edge."
      lead="Protocol translation and local connectivity delivered as a software license on existing hardware, or as a palm-sized physical gateway from kWh."
      steps={[
        {
          label: 'Step 1',
          title: 'Choose a delivery mode',
          desc: 'Deploy the gateway runtime as a license on existing edge hardware, or as a dedicated kWh gateway unit.',
          callout: 'Same stack as software or a palm-sized kWh device.',
        },
        {
          label: 'Step 2',
          title: 'Commission the site',
          desc: 'The gateway discovers local assets and registers them, bridging site hardware to the kWh cloud.',
          callout: 'Local discovery of assets over native protocols.',
        },
        {
          label: 'Step 3',
          title: 'Translate protocols',
          desc: 'Open-standard signals are translated to each device\'s native protocol, and telemetry back to canonical form.',
          callout: 'IEEE 2030.5 · OpenADR · SunSpec ↔ OEM dialects.',
        },
        {
          label: 'Step 4',
          title: 'Operate, even offline',
          desc: 'Policies execute locally so programs keep running through connectivity gaps, then resync when back online.',
          callout: 'Local policy runs when the cloud link drops.',
        },
      ]}
      why={[
        {
          title: 'IEEE 2030.5 / OpenADR / SunSpec',
          desc: 'Open standards for utility and program interoperability.',
        },
        {
          title: 'Southbound OEM dialects',
          desc: 'Modbus, OCPP, and manufacturer protocols at the edge.',
        },
        {
          title: 'Offline-ready control',
          desc: 'Local policy execution when cloud links are unavailable.',
        },
        {
          title: 'Cloud pairing',
          desc: 'Works with the OEM Integration Platform and kWh cloud orchestration.',
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
