import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-[#0b0b0e] sm:text-5xl">
          Ready to connect your
          <br />
          energy assets?
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-md text-sm/6 text-[#0b0b0e]">
        Book a demo and see how kWh normalizes and dispatches any OEM fleet
        through one API.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="/demo">
          Book a demo
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-[#0b0b0e]">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-[#0b0b0e] data-hover:text-[#0b0b0e]"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Solutions</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/solutions/oem-integration-platform">
            OEM Integration Platform
          </SitemapLink>
          <SitemapLink href="/solutions/open-protocol-gateway">
            Open Protocol Gateway
          </SitemapLink>
          <SitemapLink href="/solutions">All solutions</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Who it&apos;s for</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/solutions/aggregators">Aggregators &amp; VPPs</SitemapLink>
          <SitemapLink href="/solutions/oems">OEMs</SitemapLink>
          <SitemapLink href="/solutions/financiers">Financiers</SitemapLink>
          <SitemapLink href="/solutions/utilities">Utilities</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Resources</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/guide">Technical guide</SitemapLink>
          <SitemapLink href="/demo">Book a demo</SitemapLink>
          <SitemapLink href="https://portal.kwhelectric.io/">Sign in</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Company</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/company">About</SitemapLink>
          <SitemapLink href="mailto:arham@kwhelectric.io">Contact</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <Link
      href="https://www.linkedin.com/company/kwh-electric"
      target="_blank"
      aria-label="Visit us on LinkedIn"
      className="text-[#0b0b0e] data-hover:text-[#0b0b0e]"
    >
      <SocialIconLinkedIn className="size-4" />
    </Link>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-[#0b0b0e]">
      &copy; {new Date().getFullYear()} kWh Electric · Palo Alto, California
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
