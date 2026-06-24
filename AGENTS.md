<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Branding — fuente de verdad en otro repo

Este repo es **`eatcorp-landing`** (Next.js, dominio `eatcorp.cl`). La fuente de verdad de la identidad de marca de EatCorp **NO vive acá**: vive en el repo de la app autenticada.

- **Documento autoritativo**: https://github.com/sebaalamos/EatCorp/blob/main/docs/BRAND.md
- **Tokens canónicos** (CSS variables, paleta, sub-marcas, tipografía): https://github.com/sebaalamos/EatCorp/blob/main/src/index.css

## Reglas

1. **Antes de tocar tokens en `src/app/globals.css`**, favicon, OG images, tipografía o copy de marca → leer el `BRAND.md` remoto.
2. **No introducir colores nuevos sin justificación**. Usar los tokens definidos: `primary-*` (esmeralda), `accent-*` (terracota), `warning-*` (ámbar), `danger-*` (rojo), `brand-*` (slate fijo), `neutral-*` (slate invertible).
3. **Usa siempre los tokens custom**, no clases Tailwind nativas de color. Los componentes están migrados: `primary-*` (no `emerald-*`), `brand-*` (no `slate-8xx/9xx` en fondos oscuros). Las `slate-*` que quedan son texto y bordes sobre fondo claro — utilidad neutral aceptable. Sub-marcas decorativas en Apps showcase (pink, violet, rose, cyan) son intencionales.
4. **Sincronización manual**: cuando cambien los tokens en el repo `EatCorp` (la app), copiar el bloque `@theme` de `src/index.css` (allá) a `src/app/globals.css` (acá). No hay automation — disciplina manual.
5. **Assets de marca** (`favicon.svg`, `og-image.png`, `apple-touch-icon.png`) viven también en el repo `EatCorp` bajo `public/`. Cuando se regeneren allá, copiarlos a `public/` de este repo.

## Decisiones rápidas

| Necesidad | Solución correcta |
|---|---|
| "Quiero cambiar el verde de marca" | Editar `src/index.css` en `EatCorp` primero, luego sincronizar acá. |
| "Quiero un nuevo color de acento" | Discutir con el dueño antes — la paleta es bi-color signature (esmeralda + terracota), no se agrega liberalmente. |
| "Mi componente necesita un color por app" | Usar `--color-app-<slug>` definido en `globals.css`. |
| "Necesito una fuente serif para el hero" | **No.** EatCorp usa solo Inter en app y landing (decisión 2026-05-06, ver BRAND.md remoto §Tipografía). Jerarquía por peso/tamaño/color, no por familia. |
| "El favicon se ve raro" | Copiar `public/favicon.svg` desde el repo `EatCorp` (es la versión oficial). |

## Reglas de trabajo (heredadas del repo principal)

- **Idioma**: UI y commits en español; identificadores técnicos en inglés.
- **Commits**: imperativo, breve, en español.
- **Cambios pequeños y focalizados**: un commit = un cambio coherente.
- **Pregunta antes de asumir** sobre decisiones de producto/marca: este repo es público y cualquier cambio se ve en la primera impresión del visitante.

## Flujo de trabajo
- **Tier 3 · Solo tú** (sitio público, Next.js).
- **Merge:** gate por riesgo. 🔴 (poco frecuente acá: tocar el edge `landing-lead` o formularios que escriben a Supabase) → rama + revisión. 🟢 copy/SEO/estilo/componentes → directo a `main`.
- **Preflight:** manual antes de pushear cambios no triviales: `npm run build` (no hay hook pre-push).
- **Deploy:** Vercel automático al push a `main` → eatcorp.cl.
- **QA:** sitio público sin cuenta; verificar en build/preview.
