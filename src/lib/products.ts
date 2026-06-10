// Catálogo de productos para las páginas /productos y /productos/[slug].
// Fuente de verdad para el landing — debe estar alineado con
// /Users/sebastian/eatcorp/src/platform/home/moduleCatalog.ts del repo eatcorp
// y con /Users/sebastian/eatcorp/docs/ROADMAP.md para las próximas funcionalidades.

import {
  ShoppingCart,
  CheckSquare,
  Share2,
  Wrench,
  PartyPopper,
  BookOpen,
  Calendar,
  Users,
  Coins,
  CreditCard,
  BarChart3,
  Boxes,
  ChefHat,
  CalendarCheck,
  Receipt,
  Heart,
  Gift,
  Truck,
  Star,
  MessageSquare,
  ShieldCheck,
  Megaphone,
  type LucideIcon,
} from 'lucide-react'

export type ProductSlug =
  | 'buyeat'
  | 'taskeat'
  | 'likeeat'
  | 'maintaineat'
  | 'eventeat'
  | 'menueat'
  | 'tipeat'
  | 'inventeat'
  | 'recipeat'
  | 'payeat'
  | 'bookeat'
  | 'staffeat'
  | 'gifteat'

export type Benefit = {
  title: string
  description: string
}

export type FeatureBlock = {
  title: string
  description: string
}

export type Step = {
  title: string
  description: string
}

export type ProductFAQ = {
  q: string
  a: string
}

export type UpcomingFeature = {
  title: string
  description: string
  eta?: string
}

/** Acentos de color admitidos para las grillas/cards (deben tener entrada en
 * accentClasses/previewBg de Apps.tsx). Tipar así convierte un acento inválido
 * en error de compilación en vez de tarjeta rota en producción. */
export type Accent =
  | 'blue'
  | 'emerald'
  | 'pink'
  | 'amber'
  | 'cyan'
  | 'violet'
  | 'rose'
  | 'orange'
  | 'teal'

export type Product = {
  slug: ProductSlug
  name: string
  shortName?: string
  tagline: string
  heroHeadline: string
  heroDescription: string
  category: 'operations' | 'collaborators' | 'customer'
  categoryLabel: string
  icon: LucideIcon
  accentClass: Accent
  accentText: string
  accentBg: string
  accentBorder: string
  accentDot: string
  gradient: string
  external: boolean
  externalUrl?: string
  /** App disponible pero todavía en piloto (ej: PayEat). Muestra badge "Piloto". */
  pilot?: boolean
  preview: 'invoices' | 'kanban' | 'post' | 'assets' | 'calendar' | 'roster' | 'events' | 'menu' | 'tips' | 'inventory' | 'recipes' | 'sales' | 'gift'
  oneLiner: string
  beneficios: Benefit[]
  features: FeatureBlock[]
  pasos: Step[]
  paraQuien: string[]
  faq: ProductFAQ[]
  proximasFuncionalidades: UpcomingFeature[]
  integraciones?: string[]
}

export type UpcomingApp = {
  slug: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  category: 'operations' | 'collaborators' | 'customer' | 'finanzas'
  categoryLabel: string
  eta: string
  status: 'construyendo' | 'planeado' | 'evaluando'
  gradient: string
  accentDot: string
  accentText: string
  accentBg: string
  accentBorder: string
}

export const PRODUCTS: Record<ProductSlug, Product> = {
  buyeat: {
    slug: 'buyeat',
    name: 'BuyEat',
    tagline: 'Compras y pagos a proveedores, sin Excel',
    heroHeadline: 'Tu lote de pago del día, aprobado en 5 minutos',
    heroDescription:
      'Cotiza, recepciona, valida y paga facturas en lotes. BuyEat detecta automáticamente las discrepancias entre la orden y la factura, te avisa antes de que pagues de más, y genera el archivo bancario listo para subir.',
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    icon: ShoppingCart,
    accentClass: 'blue',
    accentText: 'text-blue-300',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
    accentDot: 'bg-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    external: false,
    preview: 'invoices',
    oneLiner: 'Lotes de pago en 5 min · detección de discrepancias · export bancario.',
    beneficios: [
      {
        title: 'Recupera horas administrativas',
        description:
          'Lo que antes tomaba toda una mañana de comparar facturas con OC, ahora es un solo lote aprobable en minutos. Tu admin se enfoca en cobrar, no en cuadrar.',
      },
      {
        title: 'Detecta pagar de más antes que pase',
        description:
          'BuyEat compara línea por línea contra la OC. Si el proveedor te factura un precio mayor o una cantidad extra, lo marca y te pide confirmar — no pagas demás por descuido.',
      },
      {
        title: 'Auto-aprobación inteligente',
        description:
          'Configuras una tolerancia (ej: 2%) y todo lo que entra dentro se aprueba solo. Lo dudoso queda para revisión humana. Productividad sin perder control.',
      },
      {
        title: 'Pronto pago = descuentos reales',
        description:
          'Marca las facturas con descuento por pronto pago, agéndalas en el próximo lote y captura el ahorro. La plata se queda en tu caja, no en la del proveedor.',
      },
    ],
    features: [
      {
        title: 'Ordenes de compra con catálogo de productos',
        description:
          'Crea una OC en segundos eligiendo productos del catálogo. Precio neto vs total, IVA y otros impuestos calculados automáticamente. La OC viaja al proveedor con un formato profesional.',
      },
      {
        title: 'Recepción con foto de factura',
        description:
          'En el local, recepción saca foto a la factura física, marca diferencias contra la OC y la factura queda lista para aprobación. Storage privado, URLs firmadas, nadie ve la foto sin permiso.',
      },
      {
        title: 'Discrepancias asimétricas',
        description:
          'Pagar de menos siempre se acepta automático (beneficia al comprador). Pagar de más bloquea o flagea según tu regla. Funciona tanto para productos variables como fijos.',
      },
      {
        title: 'Lotes de pago bancario',
        description:
          'Agrupa N facturas aprobadas, asigna fechas y cuentas, y exporta el archivo plano que pides al banco. Tu admin sube el archivo, banco paga, BuyEat marca como pagado.',
      },
      {
        title: 'Anticipos a proveedores',
        description:
          'Maneja anticipos y aplicación a facturas futuras. Sin Excel paralelo: la deuda con cada proveedor está siempre al día.',
      },
      {
        title: 'Gastos directos sin OC',
        description:
          'Para gastos que no pasan por orden de compra (servicios, arriendos, eventuales) los registras como gasto directo y entran al mismo flujo de aprobación y pago.',
      },
      {
        title: 'Conciliación de cartolas bancarias',
        description:
          'Sube la cartola del banco y BuyEat la cruza con los pagos ejecutados. Diferencia o pago duplicado salta inmediatamente.',
      },
      {
        title: 'Permisos granulares',
        description:
          'Recepcionista, administrativa, jefa de cocina, dueño — cada rol tiene exactamente los permisos que necesita. Tu cocina recepciona pero no aprueba; tu admin aprueba pero no decide a quién pagar.',
      },
    ],
    pasos: [
      {
        title: 'Activa BuyEat y carga tu catálogo',
        description:
          'En 15 minutos cargamos productos y proveedores desde tu Excel. Configuras tolerancias de auto-aprobación según tu apetito al riesgo.',
      },
      {
        title: 'Tu equipo opera en su flujo natural',
        description:
          'Cocina recepciona facturas con foto. La admin revisa el lote del día. Tú apruebas y firmas con un click cuando quieres aprobar todo de una.',
      },
      {
        title: 'Exporta el archivo bancario y paga',
        description:
          'Lote aprobado → export bancario → subes al banco → BuyEat marca como pagado y notifica al proveedor. Cierras el día sin nada pendiente.',
      },
    ],
    paraQuien: [
      'Restoranes con ≥30 facturas al mes que sienten que el cuadre les come horas',
      'Operaciones multi-local que necesitan visibilidad consolidada de la deuda',
      'Equipos donde la admin no debe ver lo que la cocina recepciona',
    ],
    faq: [
      {
        q: '¿BuyEat se conecta a mi banco para pagar automáticamente?',
        a: 'No. Por seguridad, BuyEat genera el archivo plano que el banco te pide para pagar (NÓMINA Banco de Chile, BCI, Santander, Itaú, etc.). Tú o tu admin lo suben al portal del banco con sus claves. BuyEat marca como pagado cuando confirmas la ejecución.',
      },
      {
        q: '¿Cómo maneja BuyEat el IVA y otros impuestos?',
        a: 'Las OC y facturas viven en neto. El IVA se calcula sobre el subtotal neto al recepcionar. Para impuestos adicionales (ILA, retenciones, otros) tienes un editor de impuestos por factura. Configurable por país.',
      },
      {
        q: '¿Puedo importar mis facturas históricas?',
        a: 'Sí, importamos desde Excel con un template estándar. Te ayudamos en el setup inicial sin costo adicional.',
      },
      {
        q: '¿Qué pasa si un proveedor me factura algo que no estaba en la OC?',
        a: 'La línea se marca como discrepancia. Tú decides si la aceptas (queda registrada) o la rechazas (vuelve al proveedor). El audit log queda con quién aceptó qué y cuándo.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'SupplyEat — marketplace de proveedores',
        description:
          'Comparador histórico de precios contra otros restoranes (anónimo). Sabrás si estás pagando más caro que el promedio. Network effect.',
        eta: 'Ago 2026',
      },
      {
        title: 'ReportEat — dashboards de compras',
        description:
          'Visualización mensual de gastos por proveedor, categoría y local. Tendencias, alertas y exportables.',
        eta: 'Jul 2026',
      },
      {
        title: 'Conexión con InventoryEat',
        description:
          'Las facturas alimentan automáticamente el stock. Cero doble carga, costo real por plato accesible al instante.',
        eta: 'Sep 2026',
      },
      {
        title: 'PayEat — pago directo al proveedor',
        description:
          'Cuando tengas PayEat, podrás pagar el lote sin pasar por la cartola: BuyEat → PayEat → banco, todo desde la misma plataforma.',
        eta: 'Dic 2026',
      },
    ],
  },

  taskeat: {
    slug: 'taskeat',
    name: 'TaskEat',
    tagline: 'Tareas que llegan, no que se olvidan',
    heroHeadline: 'Tu equipo coordinado sin grupo de WhatsApp',
    heroDescription:
      'Tareas con categorías, comentarios, asignaciones, subtareas y visibilidad híbrida — admins ven todo, staff solo ve lo suyo. Adiós al grupo de WhatsApp infinito.',
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    icon: CheckSquare,
    accentClass: 'emerald',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
    accentDot: 'bg-primary-500',
    gradient: 'from-primary-500 to-teal-500',
    external: false,
    preview: 'kanban',
    oneLiner: 'Kanban por categoría · subtareas · visibilidad híbrida · audit log.',
    beneficios: [
      {
        title: 'Deja de ser el cuello de botella',
        description:
          'Tu cocina actualiza su lista, tu admin la suya, tu mantención la suya. Tú dejas de ser el que reenvía mensajes. Cada categoría con sus miembros y reglas claras.',
      },
      {
        title: 'Visibilidad híbrida real',
        description:
          'Los admins ven todas las tareas. Los staff solo ven las suyas, las que crearon, o las que pertenecen a sus categorías. Privacidad enforced en la base de datos, no en el cliente.',
      },
      {
        title: 'Subtareas con auto-cierre',
        description:
          'Una tarea madre con 5 subtareas — al marcar la última hija, la madre se cierra sola. Audit log con quién hizo qué y cuándo.',
      },
      {
        title: 'Comentarios y watchers',
        description:
          'Conversa sobre una tarea sin sacarla de la app. Suscríbete como watcher a tareas que te importan aunque no seas asignado.',
      },
    ],
    features: [
      {
        title: 'Categorías con miembros',
        description:
          'Cocina, mantención, marketing, admin, etc. Cada categoría tiene su lista de miembros — los que pueden ver y crear ahí.',
      },
      {
        title: 'Kanban + lista',
        description:
          'Vista tablero o vista lista, ambas con filtros por categoría, asignado, estado y prioridad.',
      },
      {
        title: 'Subtareas con 2 niveles',
        description:
          'Una tarea puede tener subtareas. Cierras todas las hijas → la madre se cierra sola. Útil para checklists complejas (apertura, cierre, eventos).',
      },
      {
        title: 'Asignación múltiple',
        description:
          'Una tarea puede tener varios asignados. Útil cuando un trabajo es de cocina + bodega, o de mantención + arquitecto.',
      },
      {
        title: 'Watchers opcionales',
        description:
          'Súmate como observador a una tarea aunque no seas asignado. Te llegan las notificaciones sin estar haciendo el trabajo.',
      },
      {
        title: 'Audit log permanente',
        description:
          'Cada cambio queda registrado. Quién la creó, quién la cerró, quién la reasignó, qué comentarios se hicieron y cuándo.',
      },
      {
        title: 'Recurrencias',
        description:
          'Tareas que se repiten todos los lunes, cada 15 días, primer día del mes, etc.',
      },
    ],
    pasos: [
      {
        title: 'Crea las categorías de tu restorán',
        description:
          'Cocina, sala, admin, mantención, marketing. Lo que tenga sentido para ti — no hay límite.',
      },
      {
        title: 'Invita a cada miembro a su categoría',
        description:
          'El cocinero a Cocina. La admin a Admin. El de mantención a Mantención. Cada uno ve solo lo suyo.',
      },
      {
        title: 'Tu equipo opera, tú dejas de empujar',
        description:
          'Las tareas viven en TaskEat. WhatsApp pasa a ser solo para conversación, no para "no te olvides de...".',
      },
    ],
    paraQuien: [
      'Restoranes con ≥10 colaboradores donde el dueño es el cuello de botella',
      'Equipos donde "no me dijeron" pasa una vez por semana',
      'Operaciones con varias funciones (cocina, sala, mantención, admin) que no deben mezclar tareas',
    ],
    faq: [
      {
        q: '¿En qué se diferencia de una herramienta de tareas genérica?',
        a: 'TaskEat está hecho para restoranes. Categorías ya pensadas (cocina, sala, mantención, admin), recurrencias diarias/semanales típicas, visibilidad híbrida que en herramientas generales hay que hackear, y todo integrado con el resto de las apps de EatCorp.',
      },
      {
        q: '¿El staff ve las tareas de otros?',
        a: 'No. Por diseño un staff solo ve: (a) tareas sin categoría, (b) tareas de categorías donde es miembro, (c) tareas que creó, (d) tareas asignadas a él. Implementado a nivel de base de datos, no se puede saltar.',
      },
      {
        q: '¿Funciona en celular?',
        a: 'Sí, completamente. La cocina marca tareas como hechas desde el celular sin volver al notebook.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'Templates de checklists pre-cargadas',
        description:
          'Apertura de local, cierre de cocina, cambio de turno, HACCP — listas listas para clonar.',
        eta: '2026',
      },
      {
        title: 'Auditoría operativa diaria',
        description:
          'Checklist de auditoría con scoring y reportes mensuales. Útil para grupos multi-local.',
        eta: '2026',
      },
      {
        title: 'Integración con ControlEat',
        description:
          'Asistencia → tareas asignadas automáticamente al turno que entra.',
        eta: 'Q4 2026',
      },
    ],
  },

  likeeat: {
    slug: 'likeeat',
    name: 'LikeEat',
    tagline: 'Redes sociales con IA, sin pensar en qué publicar',
    heroHeadline: 'Tu Instagram al día sin contratar community manager',
    heroDescription:
      'Magic Post: subes una foto y la IA escribe el caption en tu estilo. Plan mensual con efemérides locales. Brand Discovery aprende tu marca leyendo tus posts antiguos. Copilot proactivo que te sugiere qué publicar.',
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    icon: Share2,
    accentClass: 'pink',
    accentText: 'text-pink-300',
    accentBg: 'bg-pink-500/15',
    accentBorder: 'border-pink-500/40',
    accentDot: 'bg-pink-500',
    gradient: 'from-pink-500 to-rose-500',
    external: false,
    preview: 'post',
    oneLiner: 'Magic Post · plan mensual con efemérides · Brand Discovery con IA.',
    beneficios: [
      {
        title: 'De foto a post listo en segundos',
        description:
          'Subes una foto y la IA escribe el caption con tu voz, los hashtags correctos, llamado a acción incluido. Apruebas, editas o pides otra. Listo para publicar.',
      },
      {
        title: 'Plan mensual sin pensar',
        description:
          'LikeEat genera un calendario de contenido con efemérides locales (Día del Pisco, Fiestas Patrias, Día de la Madre) ya incorporadas. Tú escoges qué publicar, no qué inventarte.',
      },
      {
        title: 'Brand Discovery — la IA aprende tu marca',
        description:
          'Le das tu Instagram y la IA lee tus posts, identifica tu tono, tus emojis, tus colores, tu vocabulario. Después escribe en tu voz, no en la genérica de ChatGPT.',
      },
      {
        title: 'Aprobaciones internas',
        description:
          'Tu equipo de marketing genera, tú apruebas. No publicas sin pasar por revisión. Y si el dueño quiere, también puede generar él directamente.',
      },
    ],
    features: [
      {
        title: 'Magic Post',
        description:
          'Una foto + un objetivo (vender una pasta, mostrar el chef, anunciar un evento) y la IA escribe el caption completo en segundos.',
      },
      {
        title: 'Brand Discovery',
        description:
          'Análisis con IA de tu cuenta de Instagram. Identifica voz, tono, emojis, colores predominantes y vocabulario. Lo aplica a todo lo que genera después.',
      },
      {
        title: 'Plan mensual con efemérides locales',
        description:
          'Calendario de contenido con fechas chilenas (no de EE.UU.). Día de la Madre, 18, Día del Vino, Halloween, Navidad, Año Nuevo, etc.',
      },
      {
        title: 'Copilot proactivo',
        description:
          'La IA te sugiere "Hoy es Día del Pisco — te armé estos 3 posts. ¿Cuál publicamos?" Sin tener que pedirle. Iniciativa, no espera.',
      },
      {
        title: 'Multi-plataforma',
        description:
          'Diseñado primero para Instagram (reels + feed + stories). También TikTok y Facebook.',
      },
      {
        title: 'Galería de assets de marca',
        description:
          'Sube logos, paletas, fotos de platos, fotos del equipo. Todo queda en un solo lugar disponible para reusar.',
      },
      {
        title: 'Reviews y reputación asistida',
        description:
          'Responde reviews de Google y TripAdvisor con asistencia IA. Profesional y en tu voz, en segundos.',
      },
      {
        title: 'Chat con la IA',
        description:
          'Conversa con la IA para iterar un caption, brainstormear un evento, pedir ideas para el menú del fin de semana.',
      },
    ],
    pasos: [
      {
        title: 'Conecta tu Instagram',
        description:
          'Brand Discovery analiza tus últimos posts y arma tu perfil de marca: voz, estilo, paletas. 1-2 minutos.',
      },
      {
        title: 'Sube una foto, genera tu primer post',
        description:
          'Cualquier foto de tu cocina, de un plato, del equipo. La IA escribe el caption en tu voz. Lo revisas y publicas.',
      },
      {
        title: 'Programa tu calendario',
        description:
          'Revisas el plan mensual sugerido, escoges qué quieres publicar, y cada día Magic Post te entrega el post listo.',
      },
    ],
    paraQuien: [
      'Restoranes que postean cuando se acuerdan y no tienen plan',
      'Dueños que pagan community manager y no saben si vale la pena',
      'Equipos donde el marketing es "cuando alguien tiene tiempo"',
    ],
    faq: [
      {
        q: '¿La IA publica sola?',
        a: 'No, por diseño. La IA genera, tú apruebas. Si quieres puedes activar publicación automática para ciertos tipos de post, pero por defecto pasa por aprobación.',
      },
      {
        q: '¿Cuánto cuesta la IA?',
        a: 'Está incluida en el plan. Tienes uso justo y razonable para una operación normal. Si publicas decenas de veces al día, conversamos.',
      },
      {
        q: '¿Puedo usar mi propio tono / restricciones?',
        a: 'Sí. Brand Discovery infiere automáticamente, pero también puedes agregar reglas explícitas ("no usar emojis", "no mencionar precios", "siempre cerrar con #santiagofoodie").',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'AdsEat — gestión de pauta paga',
        description:
          'Meta Ads y Google Ads gestionados desde EatCorp, conectado a LikeEat. ROI por campaña, optimización automática.',
        eta: 'Evaluando 2027',
      },
      {
        title: 'InboxEat — WhatsApp Business + DMs unificados',
        description:
          'Todas las conversaciones (WhatsApp, IG DM, Messenger) en una sola bandeja con asistencia IA.',
        eta: 'Evaluando 2027',
      },
      {
        title: 'ReviewEat — monitoreo + NPS',
        description:
          'Captura reseñas internas antes que vayan a Google. NPS automático post-visita.',
        eta: 'Dic 2026',
      },
    ],
  },

  maintaineat: {
    slug: 'maintaineat',
    name: 'MaintainEat',
    tagline: 'Mantención preventiva, sin sorpresas',
    heroHeadline: 'Que se te rompa la cocina, no que te tome por sorpresa',
    heroDescription:
      'Registra tus activos críticos (campana, horno, freezer, planchas), agenda mantenciones preventivas y dales seguimiento. Cero parada sorpresa, técnicos con su historial al día.',
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    icon: Wrench,
    accentClass: 'amber',
    accentText: 'text-amber-300',
    accentBg: 'bg-amber-500/15',
    accentBorder: 'border-amber-500/40',
    accentDot: 'bg-amber-500',
    gradient: 'from-amber-500 to-orange-500',
    external: false,
    preview: 'assets',
    oneLiner: 'Activos · agendamiento preventivo · historial completo de jobs.',
    beneficios: [
      {
        title: 'Adiós a la "se rompió el viernes en la noche"',
        description:
          'Cada activo crítico tiene su agenda de mantención preventiva. La cámara, la campana, el horno — todo con su próximo servicio a la vista.',
      },
      {
        title: 'Técnicos con contexto',
        description:
          'Cuando llega el técnico, tiene el historial del equipo en su celular: cuándo se hizo la última mantención, qué se cambió, qué quedó pendiente.',
      },
      {
        title: 'Garantías y vencimientos',
        description:
          'Sube las facturas y garantías de cada equipo. MaintainEat te avisa antes de que se venza algo importante.',
      },
      {
        title: 'Costo total de propiedad real',
        description:
          'Lo que pagas en mantención por cada equipo, mes a mes. Cuando compres el próximo horno sabes cuál te ha salido mejor en costo total.',
      },
    ],
    features: [
      {
        title: 'Inventario de activos',
        description:
          'Cada equipo crítico con su ficha: marca, modelo, fecha de compra, garantía, costo, ubicación, foto.',
      },
      {
        title: 'Calendario de mantenciones preventivas',
        description:
          'Define la cadencia (cada 3 meses para campana, anual para extintor, etc.) y MaintainEat agenda y avisa.',
      },
      {
        title: 'Jobs y servicios',
        description:
          'Cada visita técnica queda registrada como job, con quién vino, qué hizo, qué cambió, cuánto costó, qué quedó pendiente.',
      },
      {
        title: 'Permisos para técnicos',
        description:
          'El técnico externo solo ve los jobs asignados a él, marca avances desde su celular, sube fotos del trabajo terminado.',
      },
      {
        title: 'Importador masivo',
        description:
          'Sube todos tus activos desde una planilla — no tienes que cargarlos uno por uno. Útil al iniciar.',
      },
    ],
    pasos: [
      {
        title: 'Carga tus activos críticos',
        description:
          'Importas tu Excel o vamos cargando uno a uno. Foto, modelo, fecha de compra, garantía.',
      },
      {
        title: 'Define las preventivas',
        description:
          'Cada cuánto se le hace mantención a cada equipo. MaintainEat agenda automáticamente.',
      },
      {
        title: 'El día de la mantención',
        description:
          'El técnico marca el job como hecho, sube foto del antes/después, registra costo y observaciones. Tú lo apruebas.',
      },
    ],
    paraQuien: [
      'Restoranes con cocina pesada (campanas, hornos, planchas, freezers grandes)',
      'Operaciones multi-local que no quieren depender de la memoria del jefe de cocina',
      'Dueños que no saben qué equipos están al día y cuáles no',
    ],
    faq: [
      {
        q: '¿MaintainEat avisa al técnico directamente?',
        a: 'Lo agenda y crea el job. La comunicación con el técnico la haces tú (o tu jefe de mantención) — MaintainEat te recuerda cuándo hacerlo.',
      },
      {
        q: '¿Sirve si solo tengo un local chico?',
        a: 'Sí. Incluso para un local chico tener el historial del horno y de la campana te ahorra un dolor de cabeza al año.',
      },
      {
        q: '¿Puedo compartir el historial con el dueño del local arrendado?',
        a: 'Sí, generar reportes en PDF de las mantenciones hechas. Útil para arrendadores que piden mantención preventiva como cláusula.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'ComplianceEat — calendar legal',
        description:
          'Patente, sanitaria, SII, alcohol, ascensor — vencimientos y alertas para no comerte una multa.',
        eta: 'Evaluando 2027',
      },
      {
        title: 'Protocolos HACCP / sanitarios',
        description:
          'Checklists sanitarias diarias/semanales/mensuales integradas con foto y firma.',
        eta: '2026',
      },
      {
        title: 'Marketplace de técnicos',
        description:
          'Encuentra técnicos cercanos con tu activo en su radar. Cuotaciones competitivas, historial transparente.',
        eta: '2027',
      },
    ],
  },

  eventeat: {
    slug: 'eventeat',
    name: 'EventEat',
    tagline: 'Eventos privados que no se te escapan',
    heroHeadline: 'Cotizaciones rápidas, eventos memorables',
    heroDescription:
      'Maneja tus eventos privados de punta a punta: prospecto, cotización, checklist, cocina, cobros. Vista financiera con margen real. Nada queda en hojas sueltas.',
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    icon: PartyPopper,
    accentClass: 'rose',
    accentText: 'text-rose-300',
    accentBg: 'bg-rose-500/15',
    accentBorder: 'border-rose-500/40',
    accentDot: 'bg-rose-500',
    gradient: 'from-rose-500 to-red-500',
    external: false,
    preview: 'events',
    oneLiner: 'Cotización + checklist + margen real · de prospecto a cobro.',
    beneficios: [
      {
        title: 'Cotiza más rápido, gana más eventos',
        description:
          'Templates de cotización con menús, espacios, recargos. Mandas una cotización profesional en minutos, no en horas. El cliente que cotiza primero gana.',
      },
      {
        title: 'Margen real, no estimado',
        description:
          'EventEat te muestra costo directo del evento, margen estimado y margen real una vez ejecutado. Sabes qué tipo de evento te conviene aceptar.',
      },
      {
        title: 'Checklist por evento',
        description:
          'Cada evento con su checklist propia: confirmar menú con cocina, reservar barra, contratar mesero extra, plan B lluvia, etc. Nada se olvida.',
      },
      {
        title: 'Comunicación con el cliente',
        description:
          'Todo el hilo de mensajes con el cliente queda asociado al evento. Si cambia de manager no se pierde el contexto.',
      },
    ],
    features: [
      {
        title: 'Pipeline de eventos',
        description:
          'Prospecto → cotizando → confirmado → realizado → facturado. Cada evento avanza por su pipeline.',
      },
      {
        title: 'Cotizaciones con plantillas',
        description:
          'Menús, espacios, servicios adicionales — todo modular. Combinas y mandas en segundos.',
      },
      {
        title: 'Capa financiera por rol',
        description:
          'Solo admin y coordinator ven la información financiera (costos, márgenes). Staff ve la operación sin números.',
      },
      {
        title: 'Comunicaciones por evento',
        description:
          'Hilo de mensajes asociado al evento. Quién dijo qué, cuándo. Sin perderse en el WhatsApp.',
      },
      {
        title: 'Costos rastreables',
        description:
          'Registras los costos directos (comida, personal extra, decoración) y EventEat los compara contra el ingreso para mostrarte el margen real.',
      },
    ],
    pasos: [
      {
        title: 'Recibe el prospecto',
        description:
          'Llega por mail, WhatsApp o un formulario web. Lo creas como prospecto en EventEat con los datos del cliente.',
      },
      {
        title: 'Cotiza con plantilla',
        description:
          'Eliges menú + espacio + servicios extra → cotización lista en 5 minutos. La mandas como PDF al cliente.',
      },
      {
        title: 'Confirmas y ejecutas',
        description:
          'Cliente acepta, marcas como confirmado. La checklist se activa, cocina recibe la nota, admin agenda el cobro. El día del evento todo está coordinado.',
      },
    ],
    paraQuien: [
      'Restoranes con espacio para eventos privados (12+ personas)',
      'Operaciones que reciben 3+ eventos al mes y los manejan en Excel',
      'Equipos donde el coordinador de eventos hace 10 chats paralelos',
    ],
    faq: [
      {
        q: '¿Se conecta con BookEat para reservas?',
        a: 'Por ahora son independientes. BookEat maneja la sala regular (mesas), EventEat los eventos privados que típicamente bloquean un espacio completo. Si necesitas integración custom, conversemos.',
      },
      {
        q: '¿Puedo facturar el evento desde EventEat?',
        a: 'EventEat te marca cuándo facturar y registra el cobro. La emisión de la factura electrónica sigue ocurriendo en tu sistema contable o en BuyEat (que también captura facturas de venta).',
      },
      {
        q: '¿Quién ve los márgenes?',
        a: 'Solo admin y coordinador (permisos viewFinancials / manageFinancials). Tu equipo operativo ve la coordinación pero no los números.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'LoveEat — CRM de clientes B2B',
        description:
          'Historial de eventos por cliente. Cuentas corporativas (almuerzos empresa). Up-sell automático.',
        eta: 'Dic 2026',
      },
      {
        title: 'PayEat — abonos y señas',
        description:
          'Cobro de seña al confirmar el evento. Pagos parciales rastreados. Conciliación directa.',
        eta: 'Dic 2026',
      },
      {
        title: 'Marketing post-evento',
        description:
          'Trigger automático para LikeEat: foto del evento → post en RRSS con permiso del cliente.',
        eta: '2027',
      },
    ],
  },

  menueat: {
    slug: 'menueat',
    name: 'MenuEat',
    tagline: 'Carta digital con QR durable',
    heroHeadline: 'Una carta. Un QR. Mil cambios sin imprimir nada.',
    heroDescription:
      'Carta digital bilingüe español + inglés. El QR de la mesa nunca cambia, los precios sí. Foto de cada plato, acompañamientos, pop-ups de campañas, analítica de qué mira la gente más.',
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    icon: BookOpen,
    accentClass: 'orange',
    accentText: 'text-orange-300',
    accentBg: 'bg-orange-500/15',
    accentBorder: 'border-orange-500/40',
    accentDot: 'bg-orange-500',
    gradient: 'from-orange-500 to-amber-500',
    external: false,
    preview: 'menu',
    oneLiner: 'QR durable · ES + EN · maridajes · campañas · analítica.',
    beneficios: [
      {
        title: 'El sticker de la mesa nunca cambia',
        description:
          'Un QR durable por mesa. Subes precios, cambias menú, traduces — la URL es la misma. Pegas el sticker una vez y se queda 5 años.',
      },
      {
        title: 'Bilingüe sin esfuerzo',
        description:
          'Escribes el plato en español, MenuEat genera la traducción al inglés con IA. Tú revisas. El turista lo ve en su idioma con un toque.',
      },
      {
        title: 'Pop-ups de campañas',
        description:
          'Promoción 2x1 de la noche del jueves? Activa una campaña con vigencia y se le muestra al cliente al escanear. Auto-cierre en segundos.',
      },
      {
        title: 'Analytics de qué llama la atención',
        description:
          'Sabes qué platos se miran más, qué categorías abandonan, en qué se demoran. Decisiones de menú con data, no con corazonadas.',
      },
    ],
    features: [
      {
        title: 'QR durable por mesa',
        description:
          'Cada mesa con su URL inmutable. Cambias el menú, cambias precios, el QR sigue funcionando para siempre.',
      },
      {
        title: 'Bilingüe ES + EN con fallback',
        description:
          'Plato cargado en español sin traducción → MenuEat muestra el español al inglés. Fallback elegante, sin huecos.',
      },
      {
        title: 'Foto por plato',
        description:
          'Sube foto desde celular o pídele a la IA que la mejore. Importador desde URL para clonar fotos desde Instagram.',
      },
      {
        title: 'Acompañamientos por plato',
        description:
          'Cada producto puede listar acompañamientos (papas fritas, ensalada, arroz). Sin lógica compleja de modificadores — útil para el formato de menú chileno.',
      },
      {
        title: 'Pop-ups de campañas',
        description:
          'Toggle por campaña con vigencia, auto-cierre configurable, contenido bilingüe y CTA opcional.',
      },
      {
        title: 'Variantes y disponibilidad',
        description:
          'Plato con tamaños (chica, grande), variantes (sin gluten, vegana), disponibilidad por día — todo controlable.',
      },
      {
        title: 'Tags y filtros',
        description:
          'Vegano, sin gluten, picante, novedad — los clientes filtran por lo que les importa.',
      },
      {
        title: 'Maridajes "Recomendado con"',
        description:
          'Sugerencias por plato (vinos, postres, side dishes) con la lógica asimétrica que tú decides: el cabernet sugiere al asado, pero no al revés. Sube ticket promedio sin esfuerzo.',
      },
      {
        title: 'Analytics de comportamiento',
        description:
          'Qué se mira más, qué se mira menos, en qué categoría se pierden, cuánto tiempo en el menú.',
      },
    ],
    pasos: [
      {
        title: 'Sube tu carta',
        description:
          'Categorías + platos con foto y precio. Si tienes el menú en PDF, importamos lo principal y tú lo afinas.',
      },
      {
        title: 'Genera tu QR durable',
        description:
          'Un QR por mesa. Los descargas, mandas a imprimir como sticker y los pegas. Cinco años después siguen funcionando.',
      },
      {
        title: 'Edita y mide',
        description:
          'Cambia precios, agrega platos del día, mira la analítica. Decisiones de menú con info real.',
      },
    ],
    paraQuien: [
      'Restoranes con turistas que prefieren ver en inglés',
      'Operaciones donde reimprimir cartas cuesta tiempo y plata',
      'Equipos que quieren saber qué se mira más sin tener que adivinar',
    ],
    faq: [
      {
        q: '¿Necesito imprimir QRs todas las semanas?',
        a: 'No. El QR es durable — la URL no cambia nunca. Imprimes una vez al activar y dura años.',
      },
      {
        q: '¿Cómo funciona la traducción al inglés?',
        a: 'IA genera la traducción al cargar el plato; tú la revisas y editas si quieres. Si no traduces, mostramos el español al usuario que pide inglés (mejor que un hueco).',
      },
      {
        q: '¿Los clientes pueden pedir desde MenuEat?',
        a: 'Por ahora MenuEat es solo visualización. La toma de pedidos en mesa será parte de PayEat (POS + KDS).',
      },
      {
        q: '¿Funciona offline?',
        a: 'El cliente necesita internet para escanear. Si tu wifi del local funciona bien, perfecto. Si no, sigue cargando rápido en redes móviles 4G.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'Maridajes con ficha técnica RecipEat',
        description:
          'Las recetas de RecipEat alimentan las sugerencias de maridaje — ingredientes alergénicos, calorías y disponibilidad reflejados al instante.',
        eta: 'Q3 2026',
      },
      {
        title: 'Disponibilidad live con InventEat',
        description:
          'Stock bajo → producto se marca como agotado automáticamente en la carta digital. Cero "no hay" sorpresa.',
        eta: 'Q3 2026',
      },
      {
        title: 'Pedido en mesa con PayEat',
        description:
          'Cliente escanea, pide y paga sin esperar al mesero. Compatible con QR existentes — cuando PayEat tenga POS completo.',
        eta: 'Dic 2026',
      },
    ],
  },

  tipeat: {
    slug: 'tipeat',
    name: 'TipEat',
    tagline: 'Reparto de propinas justo, transparente y sin Excel',
    heroHeadline: 'Distribuye propinas con un sistema que tu equipo puede ver y entender',
    heroDescription:
      'Define grupos (sala, cocina, barra), multiplicadores por rol, ciclos semanales o mensuales, asistencia y off-the-top. TipEat calcula, registra y publica el resultado con link público compartible — y guarda un historial inmutable.',
    category: 'collaborators',
    categoryLabel: 'Colaboradores',
    icon: Coins,
    accentClass: 'amber',
    accentText: 'text-amber-300',
    accentBg: 'bg-amber-500/15',
    accentBorder: 'border-amber-500/40',
    accentDot: 'bg-amber-500',
    gradient: 'from-amber-500 to-yellow-500',
    external: false,
    preview: 'tips',
    oneLiner: 'Grupos · multiplicadores · ciclos · link público compartible.',
    beneficios: [
      {
        title: 'Cero conflicto sobre cuánto le toca a cada uno',
        description:
          'Las reglas están escritas y son auditables. El cocinero ve qué multiplicador tiene, el mesero ve qué share lleva, todos pueden chequear el cálculo si quieren.',
      },
      {
        title: 'Link público para que el equipo lo vea',
        description:
          'Cada ciclo cerrado genera un link sharable con los resultados (sin exponer datos sensibles). Cero "mostrarme el Excel" — está en su celular.',
      },
      {
        title: 'Audit log inmutable',
        description:
          'Cada apertura, cierre, ajuste y pago queda registrado con quién, cuándo y qué cambió. Cero ambigüedad cuando alguien reclama.',
      },
      {
        title: 'Snapshot en el cierre',
        description:
          'Al cerrar un ciclo, los nombres, grupos y resultados quedan congelados. Si después editas un staff o un grupo, el ciclo histórico no cambia.',
      },
    ],
    features: [
      {
        title: 'Grupos con multiplicadores',
        description:
          'Sala 1x, cocina 0.8x, lavavajillas 0.5x, gerente 1.5x — define los grupos y multiplicadores que apliquen a tu operación.',
      },
      {
        title: 'Ciclos con estados',
        description:
          'Abierto → cerrado → pagado. Mientras está abierto, agregas montos. Al cerrar se calcula. Reabrir antes de pagar; tras pagar requiere unmark explícito.',
      },
      {
        title: 'Asistencia por persona',
        description:
          'Modo share (participa del reparto proporcional) o modo fixed (turno fijo, paga monto exacto, no entra al pool).',
      },
      {
        title: 'Off-the-top y ajustes',
        description:
          'Descuentos antes del reparto (servicios, comisiones) con quantity × unit. Ajustes manuales individuales con razón anotada.',
      },
      {
        title: 'Algoritmo verificable (cross-check)',
        description:
          'Cálculo duplicado en TypeScript y PL/pgSQL con tests bit-a-bit. Si TS y SQL no calzan, el sistema falla — no entrega resultados ambiguos.',
      },
      {
        title: 'Exportables — CSV + PDF',
        description:
          'Genera CSV (RFC 4180 + BOM, abre bien en Excel/Numbers chileno) y PDF profesional. Útil para liquidación o contabilidad.',
      },
      {
        title: 'Link público de ciclo',
        description:
          'Slug aleatorio de 12 caracteres. El link muestra solo nombres y monto final — sin datos sensibles. Compartible con el equipo.',
      },
      {
        title: 'Permisos granulares',
        description:
          'Admin (gestiona todo), gestor (opera ciclos sin cambiar config), visualizador (solo lectura).',
      },
    ],
    pasos: [
      {
        title: 'Configura grupos y staff',
        description:
          'Define los grupos, asigna a cada persona su grupo y multiplicador, define las reglas off-the-top.',
      },
      {
        title: 'Abre un ciclo y registra montos',
        description:
          'Al inicio del periodo (semana/quincena) abres el ciclo. Vas registrando los montos diarios y la asistencia.',
      },
      {
        title: 'Cierra, comparte y paga',
        description:
          'Al final del periodo cierras el ciclo, generas el link público para tu equipo y descargas el CSV/PDF para pagarles.',
      },
    ],
    paraQuien: [
      'Restoranes con propinas que se reparten entre varias áreas (sala + cocina + barra)',
      'Operaciones donde las reglas de reparto eran orales y nadie las tenía claras',
      'Equipos donde alguna vez hubo reclamos sobre el reparto',
    ],
    faq: [
      {
        q: '¿Puedo reabrir un ciclo que ya cerré?',
        a: 'Sí, mientras no esté marcado como "pagado". Una vez pagado, primero hay que desmarcarlo explícitamente (acción registrada en el audit log) y después se puede reabrir.',
      },
      {
        q: '¿Cómo se comparte el link público?',
        a: 'Genera un slug aleatorio de 12 caracteres impredecible. Lo mandas por WhatsApp al grupo y solo quien tenga el link puede verlo. Muestra solo nombres y montos — sin datos sensibles.',
      },
      {
        q: '¿Se integra con la liquidación de sueldos?',
        a: 'No directamente. TipEat reporta los montos; tu contadora o tu software de remuneraciones (futuro PayrollEat) los suma a la liquidación correspondiente.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'Integración con StaffEat',
        description:
          'Staff se sincroniza desde StaffEat automáticamente. Cambios de equipo (entrada, salida) se reflejan sin doble carga.',
        eta: '2026',
      },
      {
        title: 'Asistencia desde ControlEat',
        description:
          'Los marcajes reales (clock-in/out) alimentan la asistencia del ciclo. Cero carga manual.',
        eta: 'Q4 2026',
      },
      {
        title: 'Propinas digitales desde PayEat',
        description:
          'Las propinas cobradas con tarjeta en PayEat alimentan directamente el pot del ciclo correspondiente.',
        eta: 'Dic 2026',
      },
      {
        title: 'Liquidación automática vía PayrollEat',
        description:
          'Los resultados del ciclo se suman a la liquidación del periodo en PayrollEat — fin del traspaso manual.',
        eta: 'Nov 2026',
      },
    ],
  },

  inventeat: {
    slug: 'inventeat',
    name: 'InventEat',
    tagline: 'Stock al día sin contar de noche',
    heroHeadline: 'Tu inventario cuadrado solo, con cada compra y venta',
    heroDescription:
      'Inventario multi-bodega con cuadre automático: cada recepción de BuyEat suma stock, cada venta vía PayEat o tu POS con receta de RecipEat lo descuenta. Conteos físicos, alertas de mínimo y detección de anomalías.',
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    icon: Boxes,
    accentClass: 'teal',
    accentText: 'text-teal-300',
    accentBg: 'bg-teal-500/15',
    accentBorder: 'border-teal-500/40',
    accentDot: 'bg-teal-500',
    gradient: 'from-teal-500 to-cyan-600',
    external: false,
    preview: 'inventory',
    oneLiner: 'Stock multi-ubicación · alertas · cuadre · anomalías auto.',
    beneficios: [
      {
        title: 'Cero conteos nocturnos de fin de mes',
        description:
          'El stock vive sincronizado con compras y ventas. El conteo físico pasa a ser una verificación, no un recálculo desde cero.',
      },
      {
        title: 'Detección automática de anomalías',
        description:
          'Si una merma sale de los rangos esperados, el sistema te avisa. Si un insumo desaparece sin venta que lo justifique, lo marca. Pérdidas detectadas antes de que se acumulen.',
      },
      {
        title: 'Cuadre con workflow de aprobación',
        description:
          'Conteo físico → discrepancias → revisión por el responsable → ajuste aprobado. Cada movimiento queda con audit log. Trazabilidad completa.',
      },
      {
        title: 'Stock por ubicación real',
        description:
          'Cocina, bodega central, barra, frigorífico, cámara de frío — cada lugar con su stock independiente y transferencias entre ellos rastreadas.',
      },
    ],
    features: [
      {
        title: 'Catálogo de productos con unidades',
        description:
          'Cada producto con su unidad de venta (botella, caja, kg) y sus equivalencias. Útil cuando compras por caja y consumes por unidad.',
      },
      {
        title: 'Stock por ubicación',
        description:
          'Define cocina, bodega, barra, frigorífico — cada uno con su stock. Transferencias entre ubicaciones quedan registradas.',
      },
      {
        title: 'Movimientos auditables',
        description:
          'Cada entrada (compra, traspaso, ajuste) y salida (venta, merma, transferencia) queda con quién, cuándo y por qué.',
      },
      {
        title: 'Conteos físicos con flujo de aprobación',
        description:
          'Programa conteos por ubicación, asigna responsable, captura diferencias y aprueba ajustes. Workflow estructurado, no Excel.',
      },
      {
        title: 'Dashboard de cuadre',
        description:
          'Visualización del estado del inventario: cuánto vale tu stock, qué productos están bajo mínimo, qué movimientos pendientes hay.',
      },
      {
        title: 'Anomalías y alertas',
        description:
          'Sistema de detección automática para mermas anómalas, stock negativo, productos sin movimiento por X días.',
      },
      {
        title: 'Conexión BuyEat → InventEat',
        description:
          'Cada recepción de orden de compra suma stock en la ubicación correspondiente. Sin doble carga.',
      },
      {
        title: 'Conexión RecipEat + PayEat → InventEat',
        description:
          'Cada venta de un plato con receta definida descuenta los insumos del stock al instante. Cuadre automático.',
      },
      {
        title: 'Lista de compra sugerida',
        description:
          'Productos bajo mínimo se acumulan en una lista lista para enviar a BuyEat como orden de compra.',
      },
      {
        title: 'Importador masivo',
        description:
          'Carga inicial de productos y stock desde planillas. Te ayudamos en el setup.',
      },
    ],
    pasos: [
      {
        title: 'Carga tu catálogo y bodegas',
        description:
          'Importas productos con unidades y conversiones, defines tus ubicaciones (cocina, bodega, barra), entras stock inicial.',
      },
      {
        title: 'Compras y ventas alimentan stock solas',
        description:
          'BuyEat recepciona → stock sube. RecipEat + PayEat venden → stock baja. Tú solo apruebas ajustes excepcionales.',
      },
      {
        title: 'Conteo físico programado',
        description:
          'Periódicamente (semanal, quincenal) corres conteos por ubicación. Las diferencias salen como discrepancias, las revisas, las apruebas.',
      },
    ],
    paraQuien: [
      'Restoranes con cocina pesada y rotación alta (mucha entrada y salida)',
      'Operaciones que pierden 5–10% del costo en mermas no detectadas',
      'Equipos que cuentan inventario a mano cada mes y se quiebra solo',
      'Cadenas con varias bodegas que necesitan visibilidad consolidada',
    ],
    faq: [
      {
        q: '¿Necesito PayEat o RecipEat para usar InventEat?',
        a: 'No. InventEat funciona standalone: cargas stock, registras entradas y salidas manuales. Pero el valor crece exponencialmente cuando lo conectas: BuyEat recepción → stock automático, RecipEat + PayEat venta → descuento automático.',
      },
      {
        q: '¿Cómo detecta las anomalías?',
        a: 'Compara el consumo real (de salidas registradas) con el consumo esperado (ventas vía receta) y con tu histórico. Si una merma supera tu umbral configurado, queda flagged para revisión.',
      },
      {
        q: '¿Soporta multi-local?',
        a: 'Sí. Cada local con sus bodegas, su stock, sus reportes. La visión consolidada de la cadena está en ReportEat (Jul 2026).',
      },
      {
        q: '¿Cómo migro mi inventario actual?',
        a: 'Importamos tu catálogo desde Excel. Para el stock inicial, programas un conteo físico al activar y eso establece tu baseline.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'Sugerencias de compra con histórico',
        description:
          'La lista de compra se enriquece con IA: predicción de consumo según ventas pasadas y eventos agendados.',
        eta: 'Q3 2026',
      },
      {
        title: 'SupplyEat — comparador de precios',
        description:
          'Marketplace de proveedores con comparador histórico anónimo entre restoranes. Cuando un insumo sube de precio, sabes si es el mercado o solo tu proveedor.',
        eta: 'Ago 2026',
      },
      {
        title: 'Dashboards en ReportEat',
        description:
          'Visualización ejecutiva del inventario consolidado y por local. Rotación, capital inmovilizado, productos muertos.',
        eta: 'Jul 2026',
      },
    ],
  },

  recipeat: {
    slug: 'recipeat',
    name: 'RecipEat',
    tagline: 'Fichas técnicas que conectan stock y ventas',
    heroHeadline: 'Cada plato con su receta. Cada venta descuenta stock real.',
    heroDescription:
      'Define los insumos y cantidades de cada plato. Cuando se vende, RecipEat le dice a InventEat exactamente qué descontar. Costo real por plato, margen visible, stock cuadrado — todo sin Excel.',
    category: 'collaborators',
    categoryLabel: 'Colaboradores',
    icon: ChefHat,
    accentClass: 'orange',
    accentText: 'text-orange-300',
    accentBg: 'bg-orange-500/15',
    accentBorder: 'border-orange-500/40',
    accentDot: 'bg-orange-500',
    gradient: 'from-orange-500 to-red-500',
    external: false,
    preview: 'recipes',
    oneLiner: 'Fichas técnicas · costo real por plato · stock automático.',
    beneficios: [
      {
        title: 'Costo real de cada plato, no estimado',
        description:
          'El costo del plato se calcula desde el costo real del stock al momento de la venta. Cuando sube el precio de un insumo, tu margen real se actualiza al instante.',
      },
      {
        title: 'Stock cuadra solo con cada venta',
        description:
          'Tu cocinero no apunta consumos. La venta es la fuente de verdad: PayEat registra → RecipEat sabe la receta → InventEat descuenta exactamente lo que debía salir.',
      },
      {
        title: 'Margen visible en tiempo real',
        description:
          'Sabes cuánto te queda libre por cada plato vendido. Decisiones de precio basadas en data, no en intuición.',
      },
      {
        title: 'Mermas dentro de la receta',
        description:
          'Configura rendimientos reales por insumo (no es lo mismo el kilo bruto de filete que el rendido en el plato). RecipEat lo descuenta como corresponde.',
      },
    ],
    features: [
      {
        title: 'Fichas técnicas con ingredientes y cantidades',
        description:
          'Cada plato del menú con su lista de insumos y cuánto se usa de cada uno. Variantes (chico/grande) tienen sus propias fichas o multiplicadores.',
      },
      {
        title: 'Costo calculado desde stock real',
        description:
          'No es un costo estimado en un Excel paralelo — es el costo del último ingreso de stock de cada insumo, en cada momento.',
      },
      {
        title: 'Rendimientos y mermas',
        description:
          'Define el factor de rendimiento por insumo. Un filete de 1kg rinde 700g en plato — RecipEat descuenta el 1kg de stock.',
      },
      {
        title: 'Conexión MenuEat → RecipEat',
        description:
          'Cada plato del menú digital se vincula a su receta. Cuando vendes, ya está claro qué descontar.',
      },
      {
        title: 'Conexión PayEat / tu POS → RecipEat',
        description:
          'Las ventas vienen de PayEat o se importan de tu POS. RecipEat las procesa y dispara los descuentos en InventEat.',
      },
      {
        title: 'Versionado de recetas',
        description:
          'Cuando cambias una receta, queda histórico. Tu informe del mes anterior sigue usando la receta que estaba vigente entonces.',
      },
    ],
    pasos: [
      {
        title: 'Carga las recetas de tu carta',
        description:
          'Por cada plato, lista insumos y cantidades. Te apoyamos con un template inicial basado en tu menú actual.',
      },
      {
        title: 'Vincula MenuEat ↔ RecipEat',
        description:
          'Cada plato del menú digital se conecta a su ficha técnica. Solo se hace una vez por plato.',
      },
      {
        title: 'Vende y deja que el sistema haga el resto',
        description:
          'PayEat (o tu POS) registra la venta → RecipEat lee la receta → InventEat descuenta stock. Todo automático.',
      },
    ],
    paraQuien: [
      'Restoranes que no saben el margen real de cada plato',
      'Operaciones donde la merma se descubre solo en el conteo de fin de mes',
      'Cocinas con menú estable y volumen alto',
      'Cadenas con receta estandarizada entre locales',
    ],
    faq: [
      {
        q: '¿Necesito InventEat y PayEat para usar RecipEat?',
        a: 'Sí, RecipEat es la pieza intermedia. Sin InventEat no hay stock que descontar. Sin PayEat (o la integración con tu POS) no hay venta que dispare el descuento. Los tres juntos son el flujo completo.',
      },
      {
        q: '¿Y si vendo el mismo plato a precios distintos según menú?',
        a: 'El precio vive en MenuEat (con sus variantes), el costo vive en RecipEat. Son ortogonales — puedes tener variaciones de precio sin tocar la receta.',
      },
      {
        q: '¿Cómo manejo platos con guarnición elegible?',
        a: 'Cada acompañamiento puede tener su propia ficha. RecipEat suma el descuento del plato base + el descuento del acompañamiento elegido.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'Costeo histórico para análisis',
        description:
          'Curva de costo por plato mes a mes. Sabes qué plato te empezó a salir más caro y cuándo.',
        eta: 'Q3 2026',
      },
      {
        title: 'Sugerencia de precio con margen objetivo',
        description:
          'Le dices el margen que quieres mantener y RecipEat te sugiere el precio nuevo cuando el costo del plato cambia.',
        eta: 'Q4 2026',
      },
      {
        title: 'Integración con MenuEat para reflejar alergénicos',
        description:
          'Los ingredientes de la receta alimentan los tags de alergénicos automáticamente en la carta digital.',
        eta: 'Q3 2026',
      },
    ],
  },

  payeat: {
    slug: 'payeat',
    name: 'PayEat',
    tagline: 'Ventas conectadas a stock y recetas',
    heroHeadline: 'Tus ventas son la fuente de toda la operación',
    heroDescription:
      'Hoy lo cargas manual o lo lees desde tu POS actual. Mañana (Q4 2026) tendrás POS completo, comanda a cocina y cobro con tarjeta. En cualquier caso, cada venta vinculada a su receta descuenta stock al instante.',
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    icon: Coins,
    accentClass: 'emerald',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
    accentDot: 'bg-primary-500',
    gradient: 'from-emerald-500 to-teal-500',
    external: false,
    pilot: true,
    preview: 'sales',
    oneLiner: 'Ventas · stock automático · tu POS hoy, POS propio Q4 2026.',
    beneficios: [
      {
        title: 'Cada venta cuadra la operación entera',
        description:
          'Una venta no es solo dinero — es un consumo de stock real, un plato descontado, una receta validada. PayEat conecta todo.',
      },
      {
        title: 'Tu POS hoy, POS propio mañana',
        description:
          'Si ya usas un POS, lo conectamos. Si no, cargas ventas manualmente. En Dic 2026 el POS completo entra en producción y migras sin perder data.',
      },
      {
        title: 'Hardware-agnostic',
        description:
          'PayEat (cuando esté el POS) corre en iPad, Android, tablet o caja registradora. Sin atarte a un fabricante específico.',
      },
      {
        title: 'Análisis costo vs precio por plato',
        description:
          'Con InventEat + RecipEat detrás, sabes cuánto rinde realmente cada plato — no el margen teórico, el margen verdadero.',
      },
    ],
    features: [
      {
        title: 'Importador manual de ventas',
        description:
          'Modo simple: cargas las ventas del día desde una planilla o un sistema de POS existente.',
      },
      {
        title: 'Integración con tu POS',
        description:
          'Lectura de ventas desde tu POS. Las ventas se asocian automáticamente con la receta correspondiente.',
      },
      {
        title: 'Vínculo venta ↔ receta ↔ stock',
        description:
          'Cada venta dispara la cascada: lee la receta en RecipEat, descuenta el stock en InventEat, registra el ingreso.',
      },
      {
        title: 'Reportes diarios y mensuales',
        description:
          'Ventas por canal, por plato, por hora, por día — con costo real y margen calculado.',
      },
    ],
    pasos: [
      {
        title: 'Eliges cómo cargar ventas',
        description:
          'Modo manual (Excel diario) o integración con tu POS. El setup tarda 30 minutos.',
      },
      {
        title: 'Cada venta dispara el flujo',
        description:
          'Venta cargada → busca la receta → descuenta el stock → registra costo y margen real.',
      },
      {
        title: 'Cuando esté el POS, migras',
        description:
          'Q4 2026 entra POS completo con comanda a cocina y cobro con tarjeta. Toda tu data histórica se mantiene.',
      },
    ],
    paraQuien: [
      'Restoranes que ya usan un POS y quieren stock automático',
      'Operaciones que cargan ventas manualmente en Excel y quieren empezar a conectarlo todo',
      'Equipos que esperan el POS completo y quieren ir armando la base de data desde ya',
    ],
    faq: [
      {
        q: '¿Cuándo está el POS completo?',
        a: 'En piloto en El Toro durante 2026; lanzamiento externo en Diciembre 2026. Hardware-agnostic (lector de tarjetas, iPad, Android, móvil), comanda por impresora térmica o KDS, respaldo offline.',
      },
      {
        q: '¿Reemplaza a mi POS actual?',
        a: 'A futuro sí, pero la transición es opcional. PayEat puede leer tu POS por tiempo indefinido. Cuando decidas migrar, te llevas todos tus datos.',
      },
      {
        q: '¿Cobro con tarjeta funciona desde el día 1?',
        a: 'No. Hoy registras la venta y el cobro se hace donde lo hagas habitualmente. El cobro con tarjeta integrado es parte del POS completo (Dic 2026).',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'POS completo en El Toro',
        description:
          'Punto de venta operativo en El Toro como piloto. Funcionalidad core: comanda + cobro + recibos.',
        eta: '2026',
      },
      {
        title: 'KDS (Kitchen Display System)',
        description:
          'Pantalla en cocina recibe las comandas en tiempo real. La impresora térmica deja de ser obligatoria.',
        eta: 'Q3 2026',
      },
      {
        title: 'Cobro con tarjeta integrado',
        description:
          'Integración con pasarela de pago para procesar pagos sin salir de PayEat.',
        eta: 'Q4 2026',
      },
      {
        title: 'Lanzamiento externo',
        description:
          'PayEat completo disponible para clientes externos tras 6 meses de battle-testing en El Toro y Tigre.',
        eta: 'Dic 2026',
      },
    ],
  },

  bookeat: {
    slug: 'bookeat',
    name: 'BookEat',
    tagline: 'Reservas online sin telefonazos',
    heroHeadline: 'Mesa al día, sin llamadas',
    heroDescription:
      'Tu sistema de reservas online integrado con EatCorp. Tus clientes reservan desde tu sitio o desde el directorio BookEat. Tu equipo ve el día completo de un vistazo. Reemplazo directo a tu sistema de reservas actual.',
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    icon: Calendar,
    accentClass: 'cyan',
    accentText: 'text-cyan-300',
    accentBg: 'bg-cyan-500/15',
    accentBorder: 'border-cyan-500/40',
    accentDot: 'bg-cyan-500',
    gradient: 'from-cyan-500 to-sky-500',
    external: true,
    externalUrl: 'https://bookeat.cl',
    preview: 'calendar',
    oneLiner: 'Reservas online · directorio público · reemplazo a tu sistema de reservas.',
    beneficios: [
      {
        title: 'Adiós al teléfono que no para',
        description:
          'Tus clientes reservan online cuando quieran. Confirmación automática, recordatorio, no-show controlado.',
      },
      {
        title: 'Tu vista del día limpia',
        description:
          'Llegada del día completa de un vistazo: quién, cuántos, a qué hora, qué nota. Sin papelitos.',
      },
      {
        title: 'Aparece en el directorio BookEat',
        description:
          'Tu restorán entra al directorio público bookeat.cl. Tráfico nuevo, mesas que se llenan solas.',
      },
    ],
    features: [
      {
        title: 'Reservas embebibles en tu sitio',
        description:
          'Botón "Reservar" que pones donde quieras en tu sitio. Cuando lo tocan, abre la reserva sin que el cliente salga de tu marca.',
      },
      {
        title: 'Directorio público',
        description:
          'bookeat.cl te muestra a clientes que están buscando restorán pero no saben dónde.',
      },
      {
        title: 'Gestión de no-shows',
        description:
          'Marca quién faltó. Patrón de no-show queda registrado. Para los repetidos puedes exigir tarjeta o llamar a confirmar.',
      },
    ],
    pasos: [
      {
        title: 'Activa BookEat en tu tenant',
        description:
          'En 5 minutos quedas activo en bookeat.cl y con el widget de reservas listo para tu sitio.',
      },
      {
        title: 'Configura horarios y mesas',
        description:
          'Tu disponibilidad, tus horarios, tus tipos de mesa. Tu set up, no uno genérico.',
      },
      {
        title: 'Recibes reservas y operas',
        description:
          'Las reservas entran al panel. Tu sala las atiende. Sin teléfono que no para.',
      },
    ],
    paraQuien: [
      'Restoranes que reciben más de 20 reservas a la semana por teléfono',
      'Operaciones que quieren aparecer en un directorio público',
      'Equipos que pierden 5-10 horas a la semana en confirmar reservas',
    ],
    faq: [
      {
        q: '¿BookEat es parte de EatCorp o independiente?',
        a: 'BookEat es un servicio (bookeat.cl) con quien EatCorp integra el toggle de acceso. Si tienes EatCorp, activas BookEat con un click. Si quieres solo BookEat, también puedes.',
      },
      {
        q: '¿Reemplaza a mi sistema de reservas actual?',
        a: 'Sí, es un reemplazo directo. Si vienes de otro sistema de reservas te ayudamos a migrar la base de datos de clientes históricos.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'LoveEat — CRM conectado',
        description:
          'Historial cliente, segmentación, recompensas, emails automatizados — todo conectado a tus reservas.',
        eta: 'Dic 2026',
      },
      {
        title: 'GiftEat — tarjetas de regalo',
        description:
          'Vende tarjetas de regalo desde tu sitio. Se canjean directamente al hacer una reserva.',
        eta: 'Dic 2026',
      },
      {
        title: 'PayEat — pago de seña',
        description:
          'Pide seña en reservas de horario alta-demanda. Baja drásticamente el no-show.',
        eta: 'Dic 2026',
      },
    ],
  },

  staffeat: {
    slug: 'staffeat',
    name: 'StaffEat',
    tagline: 'Vacaciones y ausencias sin Excel paralelo',
    heroHeadline: 'Tu RR.HH. operativo, ordenado',
    heroDescription:
      'Maneja vacaciones, ausencias y solicitudes del equipo en una sola plataforma. Tu admin sabe quién está dónde sin andar peleando con la cocina. Base para el próximo PayrollEat propio.',
    category: 'collaborators',
    categoryLabel: 'Colaboradores',
    icon: Users,
    accentClass: 'violet',
    accentText: 'text-violet-300',
    accentBg: 'bg-violet-500/15',
    accentBorder: 'border-violet-500/40',
    accentDot: 'bg-violet-500',
    gradient: 'from-violet-500 to-purple-500',
    external: true,
    preview: 'roster',
    oneLiner: 'Vacaciones · ausencias · solicitudes online del equipo.',
    beneficios: [
      {
        title: 'Vacaciones online',
        description:
          'El equipo solicita días desde su celular. Tú apruebas o pides cambios. Cero papel, cero olvidos.',
      },
      {
        title: 'Calendario consolidado',
        description:
          'Quién está de vacaciones esta semana, quién la próxima, quién pidió un día. Un solo vistazo.',
      },
      {
        title: 'Solicitudes con audit log',
        description:
          'Cada solicitud queda registrada. Quién pidió qué, cuándo, quién aprobó. Útil cuando hay duda.',
      },
    ],
    features: [
      {
        title: 'Solicitudes de vacaciones',
        description:
          'Empleado pide días desde su perfil, admin aprueba o cuestiona.',
      },
      {
        title: 'Solicitudes de cambio de turno',
        description:
          'Cambio entre colegas con aprobación.',
      },
      {
        title: 'Reportes de ausencias',
        description:
          'Quién faltó cuándo, con qué razón.',
      },
    ],
    pasos: [
      {
        title: 'Activa StaffEat',
        description:
          'Invitas a tu equipo, cada uno crea su perfil con datos básicos.',
      },
      {
        title: 'Configura tus reglas',
        description:
          'Días de vacaciones por contrato, qué se aprueba automático, qué requiere tu visto bueno.',
      },
      {
        title: 'El equipo opera, tú apruebas',
        description:
          'Te llegan las solicitudes al panel admin. Apruebas, conversas, decides.',
      },
    ],
    paraQuien: [
      'Restoranes con 10+ colaboradores donde las vacaciones son un cacho',
      'Operaciones que olvidan quién pidió qué día',
      'Equipos donde el RR.HH. lo lleva el dueño en su cabeza',
    ],
    faq: [
      {
        q: '¿StaffEat es parte de EatCorp?',
        a: 'Es un servicio externo integrado al toggle de EatCorp. Si tienes EatCorp, lo activas con un click. Si solo necesitas StaffEat, también lo puedes contratar suelto.',
      },
      {
        q: '¿Calcula liquidaciones de sueldo?',
        a: 'Aún no — para eso viene PayrollEat (Nov 2026), nuestro motor propio de remuneraciones integrado a StaffEat.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'ControlEat — relojes de control',
        description:
          'Integración con los principales relojes de control del mercado. Marcaje automático que alimenta asistencia.',
        eta: 'Oct 2026',
      },
      {
        title: 'PayrollEat — motor propio',
        description:
          'Liquidación de sueldos integrada — reemplaza el software de remuneraciones externo. Pago de cotizaciones previsionales. Te dejas de pagar el sistema de afuera.',
        eta: 'Nov 2026',
      },
      {
        title: 'BillEat — emisión de documentos',
        description:
          'Boleta de honorarios y documentos tributarios para colaboradores honorarios — todo desde el mismo sistema.',
        eta: 'Nov 2026',
      },
      {
        title: 'TipEat sync',
        description:
          'Sincronización bidireccional del staff entre StaffEat y TipEat. Una sola fuente de verdad.',
        eta: '2026',
      },
    ],
  },

  gifteat: {
    slug: 'gifteat',
    name: 'GiftEat',
    tagline: 'Tarjetas de regalo que se canjean solas',
    heroHeadline: 'Gift cards que tu cliente canjea sin pasar por caja',
    heroDescription:
      'Emite tarjetas de regalo en segundos, entrégalas con un certificado PDF listo para imprimir o enviar, y deja que tu cliente consulte su saldo y canjee online — con PIN opcional. El saldo se descuenta parcial, sin papelitos ni planillas.',
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    icon: Gift,
    accentClass: 'rose',
    accentText: 'text-rose-300',
    accentBg: 'bg-rose-500/15',
    accentBorder: 'border-rose-500/40',
    accentDot: 'bg-rose-500',
    gradient: 'from-rose-500 to-red-500',
    external: false,
    preview: 'gift',
    oneLiner: 'Emisión · certificado PDF · saldo y canje público con PIN.',
    beneficios: [
      {
        title: 'De la idea a la gift card en segundos',
        description:
          'Generas una tarjeta con monto, vigencia y mensaje. Sale un código único y un certificado PDF minimalista listo para imprimir o mandar por WhatsApp. Cero diseño, cero imprenta.',
      },
      {
        title: 'El cliente se autogestiona',
        description:
          'Cada tarjeta tiene un link público donde el cliente ve su saldo y la canjea solo. Con PIN opcional para que nadie use una tarjeta ajena. Tu equipo no tiene que consultar nada en caja.',
      },
      {
        title: 'Canje parcial, sin perder el resto',
        description:
          'Una gift card de $50.000 se puede usar en varias visitas. GiftEat descuenta lo consumido y deja el saldo restante disponible. El cliente vuelve — y tú lo sabes.',
      },
      {
        title: 'Ingreso por adelantado',
        description:
          'Cada tarjeta vendida es plata en caja hoy por consumo futuro. Ideal para Navidad, Día de la Madre y fin de año, cuando la gente regala experiencias.',
      },
    ],
    features: [
      {
        title: 'Emisión interna de tarjetas',
        description:
          'Crea gift cards con monto, vigencia, destinatario y mensaje. Cada una con código único e historial de movimientos.',
      },
      {
        title: 'Certificado PDF para regalar',
        description:
          'Documento minimalista e impecable, con el código y el monto, listo para imprimir o enviar digital. Sin pasar por un diseñador.',
      },
      {
        title: 'Saldo público consultable',
        description:
          'Una página pública por tarjeta muestra el saldo vigente. El cliente entra con el código y ve cuánto le queda.',
      },
      {
        title: 'Canje autoservicio con PIN opcional',
        description:
          'El cliente canjea desde el link público. Activas un PIN por tarjeta cuando quieres una capa extra de seguridad.',
      },
      {
        title: 'Canje parcial con saldo restante',
        description:
          'Cada canje descuenta lo usado y mantiene el saldo. Una tarjeta sirve para varias visitas hasta agotarse o vencer.',
      },
      {
        title: 'Historial y trazabilidad',
        description:
          'Quién emitió cada tarjeta, cuándo se canjeó y por cuánto. Todo queda registrado para cuadrar caja sin dudas.',
      },
    ],
    pasos: [
      {
        title: 'Activa GiftEat en tu tenant',
        description:
          'Quedas listo para emitir tarjetas en minutos. Defines vigencias por defecto y si quieres PIN obligatorio.',
      },
      {
        title: 'Emite y entrega',
        description:
          'Generas la tarjeta, descargas el certificado PDF y se lo das al cliente impreso o por WhatsApp.',
      },
      {
        title: 'El cliente canjea solo',
        description:
          'Entra al link público, ve su saldo y canjea — total o parcial. Tú lo ves reflejado al instante.',
      },
    ],
    paraQuien: [
      'Restoranes que reciben pedidos de "¿venden gift cards?" en fechas especiales',
      'Operaciones que quieren ingreso por adelantado sin montar un e-commerce',
      'Equipos que hoy llevan las tarjetas de regalo en una libreta o un Excel',
    ],
    faq: [
      {
        q: '¿Qué incluye GiftEat hoy?',
        a: 'La Fase 1 ya está viva: emisión interna de tarjetas, certificado PDF, consulta de saldo público y canje autoservicio (total o parcial) con PIN opcional. La venta online con pasarela de pago es la Fase 2, en camino.',
      },
      {
        q: '¿El cliente puede comprar la gift card solo desde mi sitio?',
        a: 'Todavía no. Hoy las tarjetas se emiten desde tu panel (tú o tu admin) y se las entregas al cliente. La compra online B2C con pago integrado es la próxima fase.',
      },
      {
        q: '¿Cómo evito que usen una tarjeta que no es suya?',
        a: 'Activas un PIN por tarjeta. El canje en el link público pide ese PIN antes de descontar saldo.',
      },
      {
        q: '¿Se puede usar la misma tarjeta varias veces?',
        a: 'Sí. El canje es parcial: cada uso descuenta lo consumido y deja el saldo restante disponible hasta agotarse o vencer.',
      },
    ],
    proximasFuncionalidades: [
      {
        title: 'Venta online B2C con pasarela',
        description:
          'Tus clientes compran gift cards desde tu sitio y pagan online. La tarjeta se emite y se envía sola por email. Recurring revenue por temporadas.',
        eta: 'Fase 2',
      },
      {
        title: 'Portal de empresas (B2B)',
        description:
          'Compras corporativas de tarjetas en lote para regalos de fin de año o incentivos. Facturación y carga masiva.',
        eta: 'Fase 2',
      },
      {
        title: 'Canje al reservar con BookEat',
        description:
          'El cliente aplica su gift card al confirmar una reserva. Cierra el loop entre regalo y visita.',
        eta: 'Dic 2026',
      },
    ],
  },
}

export const PRODUCTS_LIST: Product[] = Object.values(PRODUCTS)

// Apps del roadmap — todavía no live, pero forman parte de la visión.
// Fuente: /Users/sebastian/eatcorp/docs/ROADMAP.md
export const UPCOMING_APPS: UpcomingApp[] = [
  {
    slug: 'reporteat',
    name: 'ReportEat',
    tagline: 'Dashboards por app',
    description:
      'Visualización centralizada de la data del ecosistema EatCorp. Compras, ventas, eventos, propinas — gráficos por app sin BI cross-app inicial.',
    icon: BarChart3,
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    eta: 'Jul 2026',
    status: 'planeado',
    gradient: 'from-blue-500 to-indigo-500',
    accentDot: 'bg-blue-500',
    accentText: 'text-blue-300',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
  },
  {
    slug: 'supplyeat',
    name: 'SupplyEat',
    tagline: 'Marketplace de proveedores',
    description:
      'Catálogo maestro de proveedores chilenos, comparador histórico de precios (anónimo) y network effect. Conectado con BuyEat para sugerencias en cotización.',
    icon: Truck,
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    eta: 'Ago 2026',
    status: 'planeado',
    gradient: 'from-blue-500 to-sky-500',
    accentDot: 'bg-blue-500',
    accentText: 'text-blue-300',
    accentBg: 'bg-blue-500/15',
    accentBorder: 'border-blue-500/40',
  },
  {
    slug: 'controleat',
    name: 'ControlEat',
    tagline: 'Asistencia con reloj control',
    description:
      'Integración con los principales relojes de control del mercado. Marcaje automático que alimenta StaffEat, TipEat y PayrollEat.',
    icon: CalendarCheck,
    category: 'collaborators',
    categoryLabel: 'Colaboradores',
    eta: 'Oct 2026',
    status: 'planeado',
    gradient: 'from-primary-500 to-teal-500',
    accentDot: 'bg-primary-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
  },
  {
    slug: 'payrolleat',
    name: 'PayrollEat',
    tagline: 'Motor de sueldos propio',
    description:
      'Liquidación de sueldos integrada — reemplaza el software de remuneraciones que pagas afuera. Pago de cotizaciones previsionales. Todo sincronizado.',
    icon: Receipt,
    category: 'collaborators',
    categoryLabel: 'Colaboradores',
    eta: 'Nov 2026',
    status: 'planeado',
    gradient: 'from-violet-500 to-purple-500',
    accentDot: 'bg-violet-500',
    accentText: 'text-violet-300',
    accentBg: 'bg-violet-500/15',
    accentBorder: 'border-violet-500/40',
  },
  {
    slug: 'billeat',
    name: 'BillEat',
    tagline: 'PSF híbrido',
    description:
      'Emisión de documentos tributarios (boletas, facturas, notas de crédito) con un partner PSF certificado por el SII → certificación propia año 2-3.',
    icon: Receipt,
    category: 'finanzas',
    categoryLabel: 'Finanzas',
    eta: 'Nov 2026',
    status: 'planeado',
    gradient: 'from-emerald-500 to-teal-500',
    accentDot: 'bg-primary-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
  },
  {
    slug: 'revieweat',
    name: 'ReviewEat',
    tagline: 'Monitoreo + NPS asistido por IA',
    description:
      'Captura reseñas internas antes que vayan a Google. NPS automático post-visita. Respuestas con IA en tu voz. Cierra el loop antes de la mala review pública.',
    icon: Star,
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    eta: 'Dic 2026',
    status: 'planeado',
    gradient: 'from-pink-500 to-rose-500',
    accentDot: 'bg-pink-500',
    accentText: 'text-pink-300',
    accentBg: 'bg-pink-500/15',
    accentBorder: 'border-pink-500/40',
  },
  {
    slug: 'loveeat',
    name: 'LoveEat',
    tagline: 'CRM conectado a BookEat',
    description:
      'Base de datos de clientes, segmentación, automations email/push, recompensas. Cuentas corporativas B2B (almuerzos empresa). Sinergia cross-app fuerte.',
    icon: Heart,
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    eta: 'Dic 2026',
    status: 'planeado',
    gradient: 'from-rose-500 to-pink-500',
    accentDot: 'bg-rose-500',
    accentText: 'text-rose-300',
    accentBg: 'bg-rose-500/15',
    accentBorder: 'border-rose-500/40',
  },
  {
    slug: 'deliveryeat',
    name: 'DeliveryEat',
    tagline: 'Canal propio + agregador',
    description:
      'Delivery propio sin comisiones abusivas (5% vs 28-35% de los agregadores) más integración con ellos. Doble jugada.',
    icon: Truck,
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    eta: '2027',
    status: 'planeado',
    gradient: 'from-cyan-500 to-blue-500',
    accentDot: 'bg-cyan-500',
    accentText: 'text-cyan-300',
    accentBg: 'bg-cyan-500/15',
    accentBorder: 'border-cyan-500/40',
  },
  {
    slug: 'inboxeat',
    name: 'InboxEat',
    tagline: 'WhatsApp Business + DMs unificados',
    description:
      'Todas las conversaciones (WhatsApp, Instagram DM, Messenger) en una sola bandeja con asistencia IA. Pre-venta y atención no se mezclan ni se pierden.',
    icon: MessageSquare,
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    eta: 'Evaluando 2027',
    status: 'evaluando',
    gradient: 'from-emerald-500 to-primary-500',
    accentDot: 'bg-primary-500',
    accentText: 'text-primary-300',
    accentBg: 'bg-primary-500/15',
    accentBorder: 'border-primary-500/40',
  },
  {
    slug: 'complianceeat',
    name: 'ComplianceEat',
    tagline: 'Calendar legal y sanitario',
    description:
      'Patente, sanitaria, SII, alcohol, ascensor — calendar con alertas para no comerte una multa. HACCP integrado.',
    icon: ShieldCheck,
    category: 'operations',
    categoryLabel: 'Administración y operaciones',
    eta: 'Evaluando 2027',
    status: 'evaluando',
    gradient: 'from-amber-500 to-yellow-500',
    accentDot: 'bg-amber-500',
    accentText: 'text-amber-300',
    accentBg: 'bg-amber-500/15',
    accentBorder: 'border-amber-500/40',
  },
  {
    slug: 'adseat',
    name: 'AdsEat',
    tagline: 'Pauta paga gestionada',
    description:
      'Meta Ads y Google Ads gestionados desde EatCorp con ROI por campaña y optimización automática. Se conecta a LikeEat para el contenido.',
    icon: Megaphone,
    category: 'customer',
    categoryLabel: 'Experiencia del cliente',
    eta: 'Evaluando 2027',
    status: 'evaluando',
    gradient: 'from-pink-500 to-fuchsia-500',
    accentDot: 'bg-pink-500',
    accentText: 'text-pink-300',
    accentBg: 'bg-pink-500/15',
    accentBorder: 'border-pink-500/40',
  },
]
