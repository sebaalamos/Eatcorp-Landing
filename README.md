# eatcorp-landing

Landing público de **EatCorp** — plataforma multi-tenant para restaurantes en Chile. En producción: [eatcorp.cl](https://eatcorp.cl).

## Stack
- Next.js 16 (App Router) + TypeScript
- Deploy: Vercel (automático al push a `main`)

## Desarrollo
```bash
npm install      # 1ª vez
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Marca y flujo de trabajo
- **Identidad de marca**: la fuente de verdad vive en el repo `EatCorp` (`docs/BRAND.md`); no se definen tokens nuevos acá. Ver `AGENTS.md`.
- **Flujo de trabajo** (Tier 3 · gate por riesgo): ver `AGENTS.md`.
