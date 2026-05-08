import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: 'https://eatcorp.cl', lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: 'https://eatcorp.cl/#features', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eatcorp.cl/#how-it-works', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eatcorp.cl/#apps', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eatcorp.cl/#faq', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://eatcorp.cl/privacidad', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eatcorp.cl/terminos', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eatcorp.cl/procesamiento-datos', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
