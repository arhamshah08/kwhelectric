import { clsx } from 'clsx'

const backers = [
  { alt: 'Microsoft for Startups', src: '/backers/microsoft.png' },
  { alt: 'NVIDIA Inception', src: '/backers/nvidia.png' },
  { alt: 'Networks for Humanity', src: '/backers/nfh.png' },
  { alt: 'Samayang', src: '/backers/samyang.png' },
  { alt: 'iVenture Accelerator', src: '/backers/iventure.jpg' },
  { alt: 'Polsky Center New Venture Challenge', src: '/backers/polsky.png' },
  { alt: 'Landuyt Center for Entrepreneurship', src: '/backers/landuyt.png' },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-sm:mx-auto max-sm:max-w-md max-sm:gap-x-6',
      )}
    >
      {backers.map((backer) => (
        <img
          key={backer.src}
          alt={backer.alt}
          src={backer.src}
          className="h-8 w-auto object-contain sm:h-9"
        />
      ))}
    </div>
  )
}
