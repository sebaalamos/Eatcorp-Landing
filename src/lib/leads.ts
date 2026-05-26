import { readStoredUtm } from './utm'

export type LeadSource =
  | 'newsletter'
  | 'pricing_starter'
  | 'pricing_pro'
  | 'pricing_enterprise'
  | 'contact'
  | 'early_access'

export type LeadInput = {
  email: string
  source: LeadSource
  plan?: string
  message?: string
  restaurant_name?: string
  contact_name?: string
  phone?: string
  apps_interest?: string[]
}

const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT
  ?? `${process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''}/functions/v1/landing-lead`

export async function submitLead(input: LeadInput): Promise<{ ok: boolean; error?: string }> {
  if (!ENDPOINT) return { ok: false, error: 'missing_endpoint' }

  const utm = readStoredUtm()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  try {
    const resp = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(anonKey ? { Authorization: `Bearer ${anonKey}`, apikey: anonKey } : {}),
      },
      body: JSON.stringify({ ...input, utm }),
    })

    if (!resp.ok) {
      const body = await resp.text().catch(() => '')
      return { ok: false, error: `${resp.status}:${body.slice(0, 120)}` }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'network_error' }
  }
}
