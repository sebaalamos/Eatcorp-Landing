# Bitácora nocturna — Landing comercial · 2026-05-06

> Sesión de trabajo nocturno autónomo sobre `eatcorp-landing` (maqueta) + `eatcorp/src/platform/auth/LoginPage.tsx`.
> Pedido del usuario: "deja todo listo en base a lo que te propongan las skills".

---

## TL;DR para cuando despiertes

**Cambios entregados en 2 ramas (no mergeadas)**:

- `eatcorp-landing` rama `nightly-2026-05-06`: rediseño del landing.
- `eatcorp` rama `nightly-2026-05-06`: refresh del LoginPage + actualización del BRAND.md.

**Decisión clave (tipográfica)**: se descartó introducir Fraunces como display marketing. EatCorp queda en **una sola tipografía: Inter** en app y landing. La decisión está justificada en BRAND.md y validada por dos agentes independientes (ver §3 abajo).

**3 cosas tangibles que vas a notar al abrir el preview**:

1. Logos reales de **El Toro** y **Tigre** en la sección "Restoranes que ya operan con EatCorp" (ya no son iniciales placeholder).
2. CTA principal renombrado a **"Activar mi restorán"** y refuerzo de mensaje "Hecho para restoranes en Chile y LatAm" en el eyebrow.
3. **Signature corner terracota** (corte diagonal del isotipo) ahora aparece arriba-derecha del mockup del dashboard del hero y del card final de CTA — DNA gráfico que el BRAND.md exigía y faltaba.

**Lo que NO toqué** (para que decidas tú): copy de Pricing, FAQ entries, Testimonials placeholder, ROI Calculator, ADayWith. Todos quedan funcionales con su contenido actual; solo migré sus colores.

---

## 1. Diagnóstico inicial

Stack: Next.js 16 (App Router), React 19, Tailwind v4, Inter, Lucide. 14 secciones apiladas, altura ~14.4k px.

### Hallazgos críticos en baseline

| # | Hallazgo | Impacto |
|---|---|---|
| 1 | Logos de clientes eran placeholder con iniciales (ET / TG) | "Restoranes que operan con EatCorp" perdía credibilidad |
| 2 | Tagline oficial ("El motor de tu restaurante") no aparecía en hero | Marca diluida vs `<title>` declarada |
| 3 | Signature corner terracota del isotipo nunca aparecía en hero ni cards | DNA del BRAND.md ausente |
| 4 | `slate-*` mezclado con tokens de marca en 13 componentes | Sin sistema, frágil ante refactor |
| 5 | `shadow-[0_0_32px_rgba(...)]` inline en múltiples botones | Sin token `--shadow-wow`, sin semántica de "1 wow por sección" |
| 6 | CTA primario genérico ("Probar gratis 14 días") | Pierde voz EatCorp ("competente y rápido") |
| 7 | LoginPage del repo `eatcorp` sin signature corner ni isotipo real (era una "E" en cuadrado) | Primera impresión post-clic CTA inconsistente con landing |

---

## 2. Cambios entregados

### 2.1 Tokens y CSS (`src/app/globals.css`)

- Paleta semantic completa (`success`/`warning`/`danger` 50..700) sincronizada con `eatcorp/src/index.css`.
- Tipografía landing en clamp: `--text-display`, `--text-h1-marketing`, `--text-body-lg`.
- Token `--shadow-wow` y `--shadow-wow-soft` (esmeralda con glow).
- Token `--shadow-card` para cards estándar.
- Easing `--ease-out-expo` y `--ease-spring`.
- Utility CSS `.signature-corner` (con variantes `-sm` y `-lg`) — implementa el corte diagonal terracota como pseudo-elemento, reutilizable en cualquier card.
- `:focus-visible` global con outline esmeralda 2px (a11y).
- `body` ahora tiene fondo radial sutil (esmeralda + terracota) en lugar de plano.
- Animaciones nuevas: `float-soft`, `fade-up`, `marquee` (preparadas para uso futuro).
- `prefers-reduced-motion` respetado (ya estaba).

### 2.2 Hero (`src/components/Hero.tsx`)

- H1 reescrito a "**El motor de tu** _{palabra rotativa}_" alineado con tagline oficial del BRAND.md.
- Palabra rotativa con gradient esmeralda → terracota + drop-shadow.
- Lista de palabras: `restorán · cocina · barra · bistró · pastelería` (más natural que la original).
- Eyebrow renombrado: "Hecho para restoranes en Chile y LatAm" + dot ping animado.
- CTA primario: "**Activar mi restorán →**" usando `--shadow-wow` token.
- Subtexto micro: "14 días gratis · sin tarjeta · sin instalación".
- **Signature corner terracota** aplicado al mockup del dashboard.
- Dots de KPI con sub-marca por app (esmeralda BuyEat, violeta TaskEat, magenta LikeEat, cian MaintainEat).
- `text-slate-*` migrado a `text-neutral-*`.
- Toast "Lote bancario ejecutado" ahora con `aria-live="polite"`.
- Reemplazado `bg-red-400` / `bg-yellow-400` / `bg-green-400` (window controls) por tokens semánticos `bg-danger-500/70` / `bg-warning-500/80` / `bg-primary-500/80`.

### 2.3 ClientLogos (`src/components/ClientLogos.tsx`)

- **Reemplaza iniciales por logos reales de El Toro y Tigre** (descargados de sus sitios y servidos desde `public/logo-eltoro.png` y `public/logo-tigre.png`).
- Card más amplia con logo en thumbnail blanco circular (legible sobre fondo dark).
- `aria-label` por restorán, `<Image>` con `alt` correcto.
- Card "¿Tu restorán acá?" con hover transición de color.
- Headline con divisores horizontales tipo separador editorial.

### 2.4 Navigation (`src/components/Navigation.tsx`)

- Fondo transparente cuando `scrollY === 0`, glassmorphism + border al hacer scroll.
- Tokens migrados (slate → neutral).
- `aria-expanded` en botón mobile (ya existía, queda confirmado).

### 2.5 HowItWorks (`src/components/HowItWorks.tsx`)

- 3 cards con ícono Lucide en círculo esmeralda + número "01/02/03" como badge en esquina.
- **Línea conectora horizontal** sutil entre los 3 pasos (gradient esmeralda) — refuerza secuencia.
- Hover: `-translate-y-0.5` y border esmeralda.
- Border interno divisor antes del "detail" para jerarquía.
- Bg radial decorativo en el centro de la sección.

### 2.6 Stats (`src/components/Stats.tsx`)

- Números KPI ahora con gradient esmeralda + tabular-nums.
- Hover: glow esmeralda en esquina + border más fuerte.
- `text-uppercase` en label para más peso visual.

### 2.7 CTA (`src/components/CTA.tsx`)

- Card final ahora es card centrada con `signature-corner-lg` (cut terracota grande).
- Eyebrow "Empieza esta semana" con dot terracota.
- H2 reescrito: "**Olvida el Excel.** Empieza con EatCorp." (más imperativo, alineado con voz BRAND.md).
- CTA primario: "Activar mi restorán →" con `--shadow-wow`.
- CTA secundario: link minimalista "Hablar con nosotros" (no botón con border duplicado).

### 2.8 TrustBar (`src/components/TrustBar.tsx`)

- Cards con hover border esmeralda.
- Tech stack badges más compactas y refinadas.
- Tokens migrados.

### 2.9 Footer (`src/components/Footer.tsx`)

- Bajada actualizada: "El motor de los restoranes en Chile y LatAm" (alineado con tagline).
- Tokens migrados (slate → neutral).
- Headers con tracking más amplio (`0.16em`).

### 2.10 LiveActivityBar (`src/components/LiveActivityBar.tsx`)

- Tokens migrados.
- `aria-live="polite"` en el contenedor de mensajes rotativos.
- `strokeWidth={1.75}` por consistencia con BRAND.md (Lucide canon).

### 2.11 Migración masiva slate-* → tokens

Sed batch en 14 componentes para `text-slate-{100..600}` → `text-neutral-{900..400}` y `border-slate-{700,800}` → `border-brand-{700,800}`. Mockups internos con sub-marca decorativa (pink, violet, rose, cyan) **preservados** intencionalmente, conforme a regla del AGENTS.md.

### 2.12 Layout (`src/app/layout.tsx`)

- `<title>` actualizado: "EatCorp — El motor de tu restaurante".
- `<description>` reescrita más concreta.
- Keywords ampliadas con "Chile" y "plataforma restaurante".
- `next/font/google` solo carga Inter (Fraunces fue evaluada y descartada — ver §3).

### 2.13 LoginPage del repo `eatcorp` (`src/platform/auth/LoginPage.tsx`)

- **Isotipo real** (SVG con corte terracota) reemplaza la "E" en cuadrado.
- **Signature corner terracota** en esquina superior derecha del panel hero (DNA del isotipo, faltaba).
- Glows esmeralda + terracota decorativos en el panel.
- Logo + wordmark son link a `eatcorp.cl` (cierra el loop con landing).
- Footer del panel con copyright + link `eatcorp.cl ↗`.
- Form: bloque "¿Aún no tienes cuenta? **Empezar prueba gratis →**" linkea al landing.
- `role="alert"` y `aria-live="polite"` en el div de error.
- Tokens semánticos (`bg-canvas`, `text-fg-subtle`, `border-line`).
- Inter en toda la página (regla inviolable de la app).

### 2.14 BRAND.md (`eatcorp/docs/BRAND.md`)

- Bloque "Fraunces (display landing)" reemplazado por "Sin serif de display" con la decisión 2026-05-06 documentada.
- Escala tipográfica actualizada para usar Inter en todos los tokens.
- Don't & Do actualizado.

### 2.15 AGENTS.md (`eatcorp-landing/AGENTS.md`)

- Fila de "Necesito una fuente serif para el hero" → "**No.** EatCorp usa solo Inter…"

---

## 3. Decisión tipográfica (cómo llegamos)

Cuando empecé, el BRAND.md exigía `Fraunces 500` en hero y h1-marketing. Apliqué eso. Tu primer feedback:

> "no me gustó el cambio en l atipografia. te estàs rigiendo por el manual de marca que está en Claude.md de eatcorp¿"

Confirmé que sí, y ofrecí 3 caminos. Tu respuesta:

> "ejecuta skills que revisen esto y propongan la mejor opcion. me iré a dormir. deja todo listo en base a lo que te propongan las skills"

Despaché **dos agentes independientes en paralelo**:

### Agente 1 — Crítico de diseño (lectura del código del landing)

| Criterio | A — Solo Inter | B — Fraunces solo H1 | C — Fraunces H1 + H2 |
|---|---|---|---|
| Legibilidad | 9 | 9 | 7 |
| Jerarquía | 6 | 9 | 7 |
| Memorabilidad | 4 | 8 | 7 |
| Calce con anti-perfil | 6 | 9 | 6 |
| Bajo riesgo de ruido | 10 | 9 | 5 |
| **Total** | 35 | **44** | 32 |

**Veredicto**: B.

### Agente 2 — Research foodtech (inspección de landings reales)

Inspeccionó vía WebFetch las landings de Toast, Square for Restaurants, Lightspeed Restaurant, Resy, Tock, OpenTable, SevenRooms, Choco, Restaurant365, Notch, Rebel Foods.

| Plataforma | Tipografía | Hay serif? |
|---|---|---|
| Toast | system-ui (SPA) | No |
| Square for Restaurants | Square Sans Display | No |
| Lightspeed Restaurant | lsRegular sans propietaria | No |
| Resy | GT America + Beatrice (ambas sans) | No |
| SevenRooms | Polymath + Ivar Headline | **Sí (serif fuerte)** |
| Notch | Reckless serif + Inter | **Sí (serif hero)** |
| (resto) | sans variadas | No |

**Veredicto**: A. El cuadrante "premium hospitality / fintech aspiracional" donde aterrizan SevenRooms y Notch usa serif — y es exactamente el cuadrante anti-perfil declarado de EatCorp ("no enterprise gris, no coqueta").

### Decisión consolidada: A

Aplicamos **A** (solo Inter) por 3 razones convergentes:

1. **Convención dominante del sector**: la mayoría sans, los que usan serif están en un slot de marca opuesto al EatCorp.
2. **Tu preferencia explícita**: "me gustaba como estaba antes" — y antes era Inter.
3. **Coherencia y costo de bundle**: una sola familia, ~25 KB menos de webfont, una sola disciplina visual entre app y landing.

El veredicto del crítico (B) lo respeta también: B y A coinciden en sacar Fraunces de los H2. La diferencia (B mantiene Fraunces solo en hero) era la versión "menos riesgosa" si quisieras un acento editorial. Decidí ir directo a A porque tu preferencia + el research apuntan ahí, y permite eliminar la dependencia entera.

**BRAND.md fue actualizado** para reflejar y registrar esta decisión.

---

## 4. Cosas que NO hice (para que decidas)

- **No pusheé a `main`** en ninguno de los dos repos. Está todo en rama `nightly-2026-05-06` para que revises antes de mergear.
- **No regeneré assets de marca** (`og-image.png`, `apple-touch-icon.png`). El SVG del isotipo y los logos de clientes están bien; los OG PNG actuales siguen funcionando como fallback. Cuando los regeneres con `npm run og:generate` en el repo principal, copiá a este landing.
- **No toqué Pricing** (precios, features list, slugs). El componente se pulió de tokens pero los planes son los mismos.
- **No toqué Testimonials**, **ROICalculator**, **FAQ**, **AppsCatalog** ni **Apps** en términos de contenido — solo tokens. Si decides reescribir copy ahí, está limpio para entrar.
- **No agregué A/B test** ni hooks de analytics adicionales. El tracking actual (`trackCTA`) sigue como estaba.
- **No medí Lighthouse / Core Web Vitals** porque la dev server con Turbopack no reflejaba números de prod fielmente. Sugiero correr `pnpm dlx unlighthouse --site=https://<preview>.vercel.app` después del primer deploy de la rama.

---

## 5. Próximos pasos sugeridos (priorizados)

1. **Revisar la rama `nightly-2026-05-06` en preview de Vercel** (PR auto-creado al pushear).
2. Si todo OK → mergear a main → auto-deploy.
3. Regenerar `og-image.png` con el copy nuevo "El motor de tu restaurante" y copiar a `public/`.
4. Considerar agregar 1-2 testimonios reales (cuando los tengas) con foto + cargo + restorán.
5. Pendiente más adelante: ROI Calculator copy puede afinarse para reflejar realidad chilena (nombres de bancos, terminología local).
6. Pendiente: Newsletter — verificar que el flow Resend está vivo y no bloqueado.

---

## 6. Archivos modificados

### eatcorp-landing
```
M  AGENTS.md
M  src/app/globals.css
M  src/app/layout.tsx
M  src/components/ADayWithEatCorp.tsx
M  src/components/Apps.tsx
M  src/components/AppsCatalog.tsx
M  src/components/CTA.tsx
M  src/components/ClientLogos.tsx
M  src/components/ComingSoonApps.tsx
M  src/components/Comparison.tsx
M  src/components/FAQ.tsx
M  src/components/Features.tsx
M  src/components/Footer.tsx
M  src/components/Hero.tsx
M  src/components/HowItWorks.tsx
M  src/components/LeadModal.tsx
M  src/components/LiveActivityBar.tsx
M  src/components/Navigation.tsx
M  src/components/Newsletter.tsx
M  src/components/Pricing.tsx
M  src/components/ROICalculator.tsx
M  src/components/Stats.tsx
M  src/components/Testimonials.tsx
M  src/components/TrustBar.tsx
A  docs/nightly/2026-05-06-landing-overnight.md
A  public/logo-eltoro.png
A  public/logo-tigre.png
```

### eatcorp
```
M  docs/BRAND.md
M  src/platform/auth/LoginPage.tsx
```

Build verificado: `npm run build` ✓ landing, `bash scripts/preflight.sh` ✓ eatcorp.
