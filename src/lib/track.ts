import { track } from '@vercel/analytics'

export type CtaName =
  | 'cta_hero_primary'
  | 'cta_hero_secondary'
  | 'cta_pricing_starter'
  | 'cta_pricing_pro'
  | 'cta_pricing_enterprise'
  | 'cta_final_primary'
  | 'cta_final_secondary'
  | 'cta_apps_card'
  | 'cta_newsletter_submit'
  | 'cta_client_logos'
  | 'cta_product_page'
  | 'lead_captured'

export function trackCTA(name: CtaName, props?: Record<string, string | number | boolean>) {
  try {
    track(name, props)
  } catch {
    // analytics opcional — no romper la UI si falla
  }
}
