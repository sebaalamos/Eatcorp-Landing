// Stub legal — borrador honesto, no es asesoría legal.
// Pasar por abogado antes de promoción agresiva o cambios de scope.

import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const META_TITLE = 'Procesamiento de datos — EatCorp'
const META_DESCRIPTION =
  'Cómo y dónde EatCorp procesa los datos personales y operativos de tu restorán y tu equipo.'
const META_URL = 'https://eatcorp.cl/procesamiento-datos'

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: META_URL },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: META_URL,
    siteName: 'EatCorp',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EatCorp' }],
    type: 'website',
    locale: 'es_419',
  },
  twitter: { card: 'summary_large_image', title: META_TITLE, description: META_DESCRIPTION, images: ['/og-image.png'] },
}

export default function ProcesamientoDatosPage() {
  return (
    <main id="contenido" tabIndex={-1} className="flex flex-col outline-none">
      <Navigation />
      <article className="pt-28 pb-20 px-4 max-w-3xl mx-auto w-full text-neutral-800">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300 mb-2">
            Documento legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3 leading-tight">
            Procesamiento de datos
          </h1>
          <p className="text-sm text-neutral-600">
            Última actualización: mayo de 2026 · Versión inicial
          </p>
        </header>

        <section className="space-y-6 leading-relaxed">
          <p>
            Este documento detalla los sub-procesadores que EatCorp utiliza para operar la
            plataforma, qué datos comparte con cada uno y dónde se almacenan. Si un cliente
            empresarial requiere un Acuerdo de Procesamiento de Datos (DPA) específico,
            puede solicitarlo a <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline">hola@eatcorp.cl</a>.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Marco legal</h2>
          <p>
            EatCorp opera desde Chile y se rige por la Ley 19.628 sobre Protección de la
            Vida Privada. Algunos de nuestros sub-procesadores operan en otras
            jurisdicciones (principalmente Estados Unidos) y se rigen por sus respectivas
            normativas y certificaciones. La transferencia internacional se hace con las
            salvaguardas estándar de cada proveedor.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Sub-procesadores</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-brand-800 rounded-lg overflow-hidden">
              <thead className="bg-brand-900">
                <tr>
                  <th className="text-left p-3 font-semibold text-neutral-900 border-b border-brand-800">Proveedor</th>
                  <th className="text-left p-3 font-semibold text-neutral-900 border-b border-brand-800">Para qué</th>
                  <th className="text-left p-3 font-semibold text-neutral-900 border-b border-brand-800">Región</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-800">
                  <td className="p-3 font-semibold text-neutral-900">Supabase</td>
                  <td className="p-3">Base de datos Postgres, autenticación, storage de archivos.</td>
                  <td className="p-3">EE.UU. / global</td>
                </tr>
                <tr className="border-b border-brand-800">
                  <td className="p-3 font-semibold text-neutral-900">Vercel</td>
                  <td className="p-3">Hosting del sitio público y de la app, CDN, analytics agregados.</td>
                  <td className="p-3">EE.UU. / global</td>
                </tr>
                <tr className="border-b border-brand-800">
                  <td className="p-3 font-semibold text-neutral-900">Resend</td>
                  <td className="p-3">Envío de emails transaccionales y notificaciones.</td>
                  <td className="p-3">EE.UU.</td>
                </tr>
                <tr className="border-b border-brand-800">
                  <td className="p-3 font-semibold text-neutral-900">Sentry</td>
                  <td className="p-3">Monitoreo de errores y rendimiento de la aplicación.</td>
                  <td className="p-3">EE.UU.</td>
                </tr>
                <tr className="border-b border-brand-800">
                  <td className="p-3 font-semibold text-neutral-900">Anthropic / OpenAI</td>
                  <td className="p-3">Servicios de IA (LikeEat: captions, brand discovery; análisis de imágenes en MenuEat).</td>
                  <td className="p-3">EE.UU.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Aislamiento entre tenants</h2>
          <p>
            Cada tenant (cuenta de restorán) opera con su propia data, aislada por
            Row-Level Security en Postgres. Ningún usuario de un tenant puede acceder a la
            data de otro tenant. Los administradores de EatCorp con rol superadmin pueden
            acceder a data de cualquier tenant únicamente para soporte, debug o cumplir
            requerimientos legales.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Storage privado y URLs firmadas</h2>
          <p>
            Las imágenes y archivos sensibles (fotos de facturas, assets de marca, fotos
            de productos) viven en buckets privados. El acceso se entrega solo a usuarios
            autorizados mediante URLs firmadas con expiración corta (típicamente 5 a 10
            minutos), nunca con URLs públicas permanentes.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Backups</h2>
          <p>
            Realizamos backups diarios de la base de datos a través de Supabase. La
            ventana de retención depende del plan contratado por EatCorp con el proveedor.
            En caso de incidente, hacemos esfuerzos razonables para recuperar la data desde
            el último backup disponible.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Eliminación y portabilidad</h2>
          <p>
            Al cierre de tu cuenta puedes solicitar (a) la exportación de toda la data de
            tu tenant en formatos estándar (CSV, JSON), y (b) la eliminación definitiva
            tras el periodo de gracia de 90 días. Los logs técnicos pueden conservarse por
            más tiempo por motivos de seguridad y auditoría.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Notificación de incidentes</h2>
          <p>
            Si ocurre un incidente de seguridad que afecte datos personales de tu tenant,
            te lo notificamos por email a la cuenta administradora en un plazo razonable
            tras tomar conocimiento, con la información disponible al momento.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Contacto</h2>
          <p>
            Para preguntas sobre procesamiento de datos, solicitudes de DPA o requerimientos
            legales: <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline">hola@eatcorp.cl</a>.
          </p>

          <p className="text-xs text-neutral-500 mt-12 pt-6 border-t border-brand-800">
            Documento en revisión. La lista de sub-procesadores puede variar; cualquier
            cambio relevante se publicará en esta misma página con la fecha actualizada.
          </p>
        </section>
      </article>
      <Footer />
    </main>
  )
}
