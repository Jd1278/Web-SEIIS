import type { Metadata } from 'next'
import { site } from '@/config/site'

export function buildMetadata(opts: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  return {
    title: `${opts.title} | ${site.name} — ${site.institution}`,
    description: opts.description,
    openGraph: {
      title: opts.title,
      description: opts.description,
      siteName: `${site.name} — ${site.longName}`,
      locale: site.locale,
      type: 'website',
      images: opts.image ? [opts.image] : [],
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description },
  }
}