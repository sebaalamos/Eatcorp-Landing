import { organizationSchema, softwareApplicationSchema, faqPageSchema } from '@/lib/jsonld'
import { HOME_FAQS } from '@/lib/faqs'

export function JsonLd() {
  const payload = [organizationSchema(), softwareApplicationSchema(), faqPageSchema(HOME_FAQS)]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
