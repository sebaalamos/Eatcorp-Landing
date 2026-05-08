// Stub legal — borrador honesto, no es asesoría legal.
// Pasar por abogado antes de promoción agresiva o cambios de scope.

import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Términos y condiciones — EatCorp',
  description:
    'Términos de uso del sitio eatcorp.cl y de la plataforma EatCorp.',
  alternates: { canonical: 'https://eatcorp.cl/terminos' },
}

export default function TerminosPage() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <article className="pt-28 pb-20 px-4 max-w-3xl mx-auto w-full text-neutral-800">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300 mb-2">
            Documento legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3 leading-tight">
            Términos y condiciones
          </h1>
          <p className="text-sm text-neutral-600">
            Última actualización: mayo de 2026 · Versión inicial
          </p>
        </header>

        <section className="space-y-6 leading-relaxed">
          <p>
            Estos términos rigen el uso del sitio público eatcorp.cl y de la plataforma
            EatCorp (app.eatcorp.cl). Al usar cualquiera de los dos, aceptas lo que se
            describe a continuación. Si no estás de acuerdo con algo, no uses el servicio
            y escríbenos a <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline">hola@eatcorp.cl</a>.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Quiénes somos</h2>
          <p>
            EatCorp es una plataforma multi-tenant de gestión para restaurantes operada
            desde Chile. Estos términos se rigen por la legislación chilena, incluyendo
            la Ley 19.496 sobre Protección de los Derechos de los Consumidores.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Cuenta y uso</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Para usar la plataforma necesitas crear una cuenta con un email válido. Te
              comprometes a entregar información verídica y a mantenerla actualizada.
            </li>
            <li>
              Eres responsable de mantener la confidencialidad de tus credenciales y de
              toda la actividad realizada bajo tu cuenta.
            </li>
            <li>
              Como administrador de tu tenant, eres responsable de invitar y gestionar a
              los usuarios de tu equipo, asignarles roles y revocar accesos cuando ya no
              correspondan.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Uso aceptable</h2>
          <p>
            No puedes usar EatCorp para actividades ilegales, vulnerar derechos de terceros,
            distribuir malware, hacer scraping abusivo, o sobrepasar los límites técnicos
            del servicio mediante automatizaciones. Nos reservamos el derecho de suspender
            o cancelar cuentas que no cumplan estas reglas.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Propiedad de los datos</h2>
          <p>
            La data que cargas en EatCorp (facturas, productos, tareas, posts, etc.) es y
            sigue siendo tuya. EatCorp solo la usa para entregarte el servicio. Puedes
            exportarla en cualquier momento. Si dejas de usar la plataforma, te damos 90
            días para descargar todo antes de eliminar.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Servicios de IA</h2>
          <p>
            Algunas funcionalidades (Magic Post, Brand Discovery, planificación de contenido
            en LikeEat) usan modelos de IA de terceros. Las salidas generadas por IA pueden
            contener errores y deben ser revisadas antes de publicarse o usarse. EatCorp
            no garantiza la exactitud absoluta del contenido generado.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Disponibilidad y mantención</h2>
          <p>
            Hacemos esfuerzos razonables para mantener la plataforma disponible. Realizamos
            mantenciones planificadas y eventualmente puede haber interrupciones por causas
            ajenas (incidentes en proveedores de infraestructura, fallas de red, etc.).
            Avisamos las mantenciones con anticipación cuando es posible.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Pagos y planes</h2>
          <p>
            Los planes y precios de EatCorp se acuerdan directamente con cada cliente. Las
            condiciones de facturación, periodicidad y forma de pago se definen en el
            contrato o documento comercial específico. No hay cobros automáticos sin tu
            autorización previa.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Limitación de responsabilidad</h2>
          <p>
            EatCorp se entrega &ldquo;tal como está&rdquo; (as-is). En la medida que la ley
            lo permita, no respondemos por daños indirectos, lucro cesante, o pérdida de
            datos derivada de uso indebido, errores del cliente, fallas de proveedores de
            terceros o eventos de fuerza mayor. Para todo lo demás aplica la legislación
            chilena vigente.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Cambios en los términos</h2>
          <p>
            Podemos actualizar estos términos. Si el cambio es relevante, te avisamos por
            email o dentro de la plataforma. El uso continuado del servicio después de los
            cambios implica aceptación de la versión actualizada.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Cancelación</h2>
          <p>
            Puedes dejar de usar EatCorp en cualquier momento. EatCorp también se reserva
            el derecho de cancelar cuentas por incumplimiento grave o reiterado de estos
            términos, dando aviso razonable salvo que el incumplimiento exija acción
            inmediata.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-8">Contacto y resolución</h2>
          <p>
            Para cualquier consulta o reclamo:
            <a href="mailto:hola@eatcorp.cl" className="text-primary-400 hover:underline ml-1">
              hola@eatcorp.cl
            </a>. Buscamos resolver de buena fe antes de escalar a instancias formales.
            En caso de controversia, las partes se someten a los tribunales ordinarios de
            justicia de la ciudad de Santiago, Chile.
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
