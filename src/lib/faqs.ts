// Preguntas frecuentes de la home. Fuente única para el componente FAQ
// y para el JSON-LD (FAQPage) que mejora el SEO de la página principal.

export type Faq = { q: string; a: string }

export const HOME_FAQS: Faq[] = [
  {
    q: '¿Necesito instalar algo en mis computadores?',
    a: 'No. EatCorp funciona 100% en el navegador. Solo necesitas internet y un navegador moderno (Chrome, Safari, Firefox, Edge). También funciona perfecto en celular y tablet sin necesidad de descargar apps.',
  },
  {
    q: '¿Qué pasa con mi información si decido dejar EatCorp?',
    a: 'Tus datos son tuyos siempre. En cualquier momento puedes exportar todo: facturas, tareas, posts, contactos, todo en formatos estándar (CSV, JSON, PDF). Si cancelas tu cuenta, te damos 90 días para descargar todo antes de eliminar definitivamente.',
  },
  {
    q: '¿Funciona en mi celular?',
    a: 'Sí. La interfaz es completamente responsive. Tu equipo de cocina puede actualizar tareas desde el celular, recepcionistas pueden escanear facturas con la cámara, y tú puedes aprobar pagos desde donde sea.',
  },
  {
    q: '¿Necesito ser técnico para usarlo?',
    a: 'No. Está diseñado pensando en operadores de restoranes, no en programadores. Si sabes usar WhatsApp y Instagram, sabes usar EatCorp.',
  },
  {
    q: '¿Pueden importar mi data actual?',
    a: 'Sí. Trabajamos con planillas de Excel y Google Sheets para subir proveedores, productos, contactos y otros catálogos al iniciar. Si tienes un sistema específico, escríbenos y vemos la mejor manera de migrar tu data.',
  },
  {
    q: '¿Cuántos usuarios puedo tener?',
    a: 'No hay un tope rígido. Cada usuario tiene distintos roles y accesos por app — el cocinero solo ve TaskEat, el admin ve todo. Puedes agregar y quitar usuarios cuando quieras.',
  },
  {
    q: '¿Cómo se paga? ¿Hay contratos largos?',
    a: 'Suscripción mensual, sin contratos largos ni letra chica. Lo coordinamos contigo en el onboarding y eliges el plan según las apps que actives. Aceptamos transferencia y tarjeta, sin permanencia mínima.',
  },
]
