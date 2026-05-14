import type { MetadataRoute } from 'next'
import { PRODUCTS_LIST } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: 'https://eatcorp.cl', lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: 'https://eatcorp.cl/productos', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...PRODUCTS_LIST.map((p) => ({
      url: `https://eatcorp.cl/productos/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: 'https://eatcorp.cl/#how-it-works', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eatcorp.cl/#apps', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eatcorp.cl/#faq', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://eatcorp.cl/privacidad', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eatcorp.cl/terminos', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eatcorp.cl/procesamiento-datos', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
