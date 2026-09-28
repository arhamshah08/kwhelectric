'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const solutions = [
  {
    href: '/solutions',
    label: 'Our Solutions',
    desc: 'One platform to connect, normalize, and dispatch energy assets.',
  },
  {
    href: '/solutions/oem-integration-platform',
    label: 'OEM Integration Platform',
    desc: 'One API surface across every manufacturer.',
  },
  {
    href: '/solutions/open-protocol-gateway',
    label: 'Open Protocol Gateway',
    desc: 'Open standards at the site edge.',
  },
  {
    href: '/solutions/aggregators',
    label: 'Aggregators & VPPs',
    desc: 'Scale programs across mixed OEM fleets.',
  },
  {
    href: '/solutions/oems',
    label: 'OEMs',
    desc: 'Make devices program-ready for every partner.',
  },
  {
    href: '/solutions/financiers',
    label: 'Financiers',
    desc: 'Portfolio visibility across battery fleets.',
  },
  {
    href: '/solutions/utilities',
    label: 'Utilities & Energy Platforms',
    desc: 'Behind-the-meter visibility and flexible capacity.',
  },
]

const links = [
  { href: '/guide', label: 'Guide' },
  { href: '/demo', label: 'Book a Demo' },
  { href: 'https://portal.kwhelectric.io/', label: 'Sign In' },
]

function SolutionsMenu() {
  return (
    <Popover className="relative flex">
      <PlusGridItem className="relative flex">
        <PopoverButton className="flex items-center gap-1 px-4 py-3 text-base font-medium text-[#0b0b0e] outline-hidden data-hover:bg-black/2.5 data-active:bg-black/2.5">
          Solutions
          <ChevronDownIcon className="size-4 opacity-60" />
        </PopoverButton>
      </PlusGridItem>
      <PopoverPanel
        transition
        className="absolute top-full left-0 z-50 mt-2 w-80 origin-top-left rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-leave:duration-100"
      >
        {solutions.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-4 py-3 data-hover:bg-gray-50"
          >
            <span className="block text-sm font-semibold text-[#0b0b0e]">
              {item.label}
            </span>
            <span className="mt-0.5 block text-sm text-[#0b0b0e]">{item.desc}</span>
          </Link>
        ))}
      </PopoverPanel>
    </Popover>
  )
}

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      <SolutionsMenu />
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-[#0b0b0e] bg-blend-multiply data-hover:bg-black/2.5"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  const mobileLinks = [
    ...solutions.map((s) => ({ href: s.href, label: s.label })),
    ...links,
  ]
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-4 py-4">
        {mobileLinks.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.05 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-[#0b0b0e]">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
