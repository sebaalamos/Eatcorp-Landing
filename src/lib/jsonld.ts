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
    sameAs: ['https://instagram.com/eatcorp.cl', 'https://www.linkedin.com/company/eatcorp'],
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
