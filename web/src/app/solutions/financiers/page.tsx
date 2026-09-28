import { SolutionPage } from '@/components/solution-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financiers',
  description:
    'Portfolio visibility across battery fleets. Normalized telemetry, health, and performance data.',
}

export default function Page() {
  return (
    <SolutionPage
      crumbs={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Financiers' },
      ]}
      eyebrow="Solutions"
      title="Portfolio visibility across battery fleets"
      lead="BESS financiers and asset owners need reliable telemetry, device health, and performance data to monitor portfolios and underwrite new deployments."
      steps={[
        {
          label: 'Step 1',
          title: 'Onboard the portfolio',
          desc: 'Import the portfolio across OEMs and backfill history, so day one starts with a complete record.',
          callout: 'Backfill runs before real-time streams begin.',
        },
        {
          label: 'Step 2',
          title: 'Monitor fleet health',
          desc: 'Uptime, faults, and connectivity are normalized into one health view across manufacturers.',
          callout: 'Health normalized across every OEM.',
        },
        {
          label: 'Step 3',
          title: 'Track performance',
          desc: 'Compare actual throughput and yield to modeled expectations to validate deployments over time.',
          callout: 'Performance measured against modeled output.',
        },
        {
          label: 'Step 4',
          title: 'Underwrite with data',
          desc: 'Export normalized telemetry and a complete audit trail for underwriting and reporting.',
          callout: 'The same schema your risk team can defend.',
        },
      ]}
      why={[
        {
          title: 'Normalized telemetry',
          desc: 'State of charge, power, and alerts in a consistent schema across OEMs.',
        },
        {
          title: 'Device identity',
          desc: 'Stable canonical device IDs mapped to OEM-native identifiers.',
        },
        {
          title: 'Health and events',
          desc: 'Connectivity, fault, and diagnostic events normalized where OEMs expose them.',
        },
        {
          title: 'Historical backfill',
          desc: 'Batch ingestion for portfolio onboarding before real-time streams begin.',
        },
      ]}
      related={{
        title: 'OEM Integration Platform',
        desc: 'Canonical APIs for telemetry, events, and device metadata.',
        href: '/solutions/oem-integration-platform',
      }}
    />
  )
}
