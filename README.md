# Web del Semillero SEIIS

Sitio web institucional del **Semillero de Investigación de Ingeniería de Sistemas (SEIIS)** de la Universitaria Tecnológicas de Santander (UTS), auxiliar del Grupo de Investigación GRIIS.

- Stack: Next.js (App Router) + TypeScript + Tailwind
- Contenido: archivos `content/*.yml|mdx` validados con Zod + Decap CMS en `/admin`
- Accesibilidad: WCAG 2.1 AA / NTC 5854

## Comandos

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

## Documentación

- `docs/00-vision-alcance.md` — misión, objetivos, líneas GRIIS
- `docs/01-requerimientos.md` — RF/RNF y checklist institucional
- `docs/04-flujo-github.md` — flujo colaborativo asíncrono
- `docs/07-marca-y-legales.md` — tokens, logo, pendientes legales

## Contribuir

Ver `.github/PULL_REQUEST_TEMPLATE.md`. Ramas cortas, PR < 400 líneas, nadie mergea su propio PR.

## Licencia

Pendiente definir con la DIE/UTS.