import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - kWh Electric',
    default: 'kWh Electric - Communication infrastructure for the energy grid',
  },
  description:
    'kWh Electric is the communication layer that makes every distributed energy asset visible and dispatchable across manufacturers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
        />
        <link rel="icon" type="image/png" href="/kwh-logo-black.png" />
      </head>
      <body className="text-[#0b0b0e] antialiased">{children}</body>
    </html>
  )
}
