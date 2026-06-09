import type { MetadataRoute } from 'next'
import { PRODUCTS_LIST } from '@/lib/products'

// lastModified se omite a propósito: sin una fecha real por página, un valor
// sintético (new Date() en cada build) le enseña a Google a ignorar el lastmod.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://eatcorp.cl', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://eatcorp.cl/productos', changeFrequency: 'monthly', priority: 0.9 },
    ...PRODUCTS_LIST.map((p) => ({
      url: `https://eatcorp.cl/productos/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: 'https://eatcorp.cl/privacidad', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eatcorp.cl/terminos', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eatcorp.cl/procesamiento-datos', changeFrequency: 'yearly', priority: 0.3 },
  ]
}
