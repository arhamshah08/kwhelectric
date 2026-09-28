import { SolutionPage } from '@/components/solution-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OEM Integration Platform',
  description:
    'One API surface for many OEM devices. Connect, normalize, and control batteries, EV chargers, thermostats, and more.',
}

export default function Page() {
  return (
    <SolutionPage
      crumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'OEM Integration Platform' },
      ]}
      eyebrow="Product"
      title="One API surface. Many OEM devices."
      lead="A unified integration and normalization layer between OEM device ecosystems and downstream applications. Batteries, thermostats, water heaters, and more in one consistent data and control interface."
      steps={[
        {
          label: 'Step 1',
          title: 'Connect any OEM',
          desc: 'Link an OEM cloud and kWh enumerates devices, assigns canonical IDs, and records capabilities.',
          callout: 'One OAuth connection per OEM, then every device.',
        },
        {
          label: 'Step 2',
          title: 'Normalize to one model',
          desc: 'OEM-specific schemas are mapped into a single canonical data model for devices, telemetry, and events.',
          callout: 'Units, timestamps, and enums normalized at ingestion.',
        },
        {
          label: 'Step 3',
          title: 'Read, stream, and control',
          desc: 'Applications query reads, subscribe to event streams, and issue canonical commands through one interface.',
          callout: 'One REST API, one webhook stream, one command schema.',
        },
        {
          label: 'Step 4',
          title: 'Preserve everything',
          desc: 'Nothing is dropped. OEM-specific fields are preserved under oem_extensions so no fidelity is lost.',
          callout: 'Fields with no canonical match live in oem_extensions.',
        },
      ]}
      why={[
        {
          title: 'REST APIs',
          desc: 'Enrollment, reads, control commands, and historical queries.',
        },
        {
          title: 'Event streams & webhooks',
          desc: 'Near-real-time telemetry and state-change events at scale.',
        },
        {
          title: 'Canonical data model',
          desc: 'Devices, telemetry, events, enrollment, and command state.',
        },
        {
          title: 'OEM mapping layer',
          desc: 'Units, timestamps, and enums normalized at ingestion.',
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
