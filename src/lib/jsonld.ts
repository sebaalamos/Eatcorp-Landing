export const SITE_URL = 'https://eatcorp.cl'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EatCorp',
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    description:
      'Plataforma todo-en-uno para restoranes en LatAm: compras, tareas, redes sociales con IA, reservas y mantención.',
    foundingLocation: 'Chile',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'hola@eatcorp.cl',
        contactType: 'customer support',
        areaServed: 'CL',
        availableLanguage: ['es'],
      },
    ],
  } as const
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EatCorp',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    inLanguage: 'es-419',
    featureList: [
      'Compras a proveedores con detección de discrepancias',
      'Tareas y permisos por equipo',
      'Redes sociales con IA',
      'Mantención preventiva de activos',
      'Eventos y arriendos del local',
      'Carta digital con QR',
      'Reservas en línea',
      'Gestión de personal',
    ],
    publisher: { '@type': 'Organization', name: 'EatCorp', url: SITE_URL },
  } as const
}

type ProductLike = {
  name: string
  slug: string
  tagline: string
  heroDescription: string
  features: { title: string }[]
}

/** SoftwareApplication por producto, para las páginas /productos/[slug]. */
export function productSchema(product: ProductLike) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${product.name} — EatCorp`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${SITE_URL}/productos/${product.slug}`,
    inLanguage: 'es-419',
    description: product.heroDescription,
    featureList: product.features.map((f) => f.title),
    publisher: { '@type': 'Organization', name: 'EatCorp', url: SITE_URL },
  }
}

/** FAQPage a partir de un set de preguntas/respuestas. */
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** BreadcrumbList. items en orden: raíz → hoja. `url` relativo a SITE_URL. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}
