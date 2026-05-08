// Stub legal — borrador honesto, no es asesoría legal.
// Pasar por abogado antes de promoción agresiva o cambios de scope.

import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de privacidad — EatCorp',
  description:
    'Cómo EatCorp recolecta, almacena y procesa tus datos personales y los de tu equipo, en cumplimiento con la Ley 19.628 de Chile.',
  alternates: { canonical: 'https://eatcorp.cl/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <article className="pt-28 pb-20 px-4 max-w-3xl mx-auto w-full text-neutral-800">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300 mb-2">
            Documento legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3 leading-tight">
            Política de privacidad
          </h1>
          <p className="text-sm text-neutral-600">
            Última actualización: mayo de 2026 · Versión inicial
          </p>
        </header>

        <section className="space-y-6 leading-relaxed">
          <p>
            En EatCorp respetamos tu privacidad y la de las personas que forman parte de tu
            equipo. Esta política describe qué información recolectamos cuando usas nuestro
            sitio (eatcorp.cl) y nuestra plataforma (app.eatcorp.cl), para qué la usamos,
            con quién la compartimos y cómo la protegemos.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Quiénes somos</h2>
          <p>
            EatCorp es una plataforma multi-tenant para gestión de restaurantes operada
            desde Chile. Para efectos de la Ley N° 19.628 sobre Protección de la Vida Privada,
            EatCorp es responsable del tratamiento de los datos personales que recolecta de
            visitantes del sitio y usuarios de la plataforma. Contacto del responsable:
            <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline ml-1">
              hola@eatcorp.cl
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Datos que recolectamos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Datos de contacto entregados voluntariamente</strong> — email, nombre,
              y mensajes que envías por nuestro formulario de leads o newsletter en el sitio.
            </li>
            <li>
              <strong>Datos de uso del sitio</strong> — páginas visitadas, parámetros UTM
              (origen de campañas), referente, user-agent del navegador.
            </li>
            <li>
              <strong>Datos operativos de la plataforma</strong> — cuando usas app.eatcorp.cl,
              recolectamos los datos que cargas para operar tu restorán: facturas, productos,
              proveedores, tareas, posts, eventos, etc. Esta data es propiedad de tu tenant
              y no la usamos con fines distintos a entregarte el servicio.
            </li>
            <li>
              <strong>Datos técnicos</strong> — logs de acceso, errores, métricas de
              rendimiento, vía Vercel Analytics, Vercel Speed Insights y Sentry.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Para qué usamos tus datos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder tus consultas y onboarding cuando contactas a EatCorp.</li>
            <li>Operar la plataforma — cada tenant ve solo su propia data, enforced por RLS en la base de datos.</li>
            <li>Mejorar el producto agregando métricas anónimas de uso.</li>
            <li>Notificarte cambios relevantes de servicio o legales.</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Con quién compartimos datos</h2>
          <p>
            No vendemos tus datos. Compartimos información mínima con proveedores de
            infraestructura que necesitamos para operar:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Supabase</strong> — base de datos, autenticación y storage.</li>
            <li><strong>Vercel</strong> — hosting del sitio y la app.</li>
            <li><strong>Resend</strong> — envío de emails transaccionales y notificaciones.</li>
            <li><strong>Sentry</strong> — monitoreo de errores.</li>
            <li><strong>Anthropic / OpenAI</strong> — servicios de IA usados por LikeEat (generación de captions, análisis de marca). Solo se envía la data estrictamente necesaria para procesar la solicitud.</li>
          </ul>
          <p>
            Cada uno de estos proveedores tiene sus propias políticas de privacidad y
            estándares de seguridad. Podemos compartir datos cuando sea legalmente requerido
            (orden judicial, requerimiento de autoridad competente).
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Tus derechos</h2>
          <p>
            La Ley 19.628 te da derecho a acceder, rectificar, cancelar y oponerte al
            tratamiento de tus datos personales. Puedes ejercer estos derechos escribiendo a
            <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline ml-1">
              hola@eatcorp.cl
            </a> con tu solicitud. Respondemos en un plazo razonable.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Retención y eliminación</h2>
          <p>
            Si decides dejar de usar EatCorp, puedes solicitar la eliminación de tu cuenta y
            de la data de tu tenant. Damos un plazo de 90 días para que descargues toda tu
            información antes de eliminarla definitivamente. Los logs técnicos pueden
            conservarse por más tiempo por motivos de seguridad y auditoría.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Seguridad</h2>
          <p>
            Usamos TLS para todas las conexiones. La autorización a nivel de fila (RLS) en
            Postgres asegura que cada tenant solo accede a su propia data. Los buckets de
            archivos sensibles (fotos de facturas, etc.) son privados con URLs firmadas con
            expiración corta.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Cookies</h2>
          <p>
            El sitio usa cookies estrictamente necesarias y, si lo activas, cookies analíticas
            de Vercel para entender el uso agregado del sitio. No usamos cookies de
            advertising ni trackers de terceros.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Cambios</h2>
          <p>
            Esta política puede actualizarse cuando agregamos funcionalidades o cambian
            requerimientos legales. Publicamos cualquier cambio en esta misma página con la
            fecha de última actualización.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Contacto</h2>
          <p>
            Cualquier duda sobre esta política o sobre el manejo de tus datos:
            <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline ml-1">
              hola@eatcorp.cl
            </a>.
          </p>

          <p className="text-xs text-neutral-500 mt-12 pt-6 border-t border-brand-800">
            Documento en revisión. Si encuentras una omisión o inexactitud, escríbenos
            y la corregimos a la brevedad.
          </p>
        </section>
      </article>
      <Footer />
    </main>
  )
}
