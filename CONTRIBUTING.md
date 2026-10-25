# Contribuir al sitio del Semillero SEIIS

Guía práctica para todos los integrantes. Si algo no está claro, abre un issue con la etiqueta `type:docs`.

## 1. Antes de empezar (una sola vez)

1. Instala **Node.js** (v20+) y **Git**.
2. Instala **GitHub CLI** y autentícate:
   ```powershell
   winget install --id GitHub.cli
   gh auth login --hostname github.com --git-protocol https --web --scopes "repo,read:org,workflow,project"
   ```
3. Clona el repo en una ruta corta (evita OneDrive y espacios):
   ```powershell
   git clone https://github.com/Jd1278/Web-SEIIS.git C:\dev\seiis
   cd C:\dev\seiis
   npm install
   ```
4. Verifica que todo funciona:
   ```powershell
   npm run lint
   npm run build
   ```

> El proyecto vive en `C:\dev\seiis`. La carpeta `Documentos\Web-SEIIS` solo guarda assets (logo, PDF); no es el repo.

## 2. Cómo tomar trabajo

1. Entra al **Project board** del repo → vista *Ready to pick*.
2. Elige un issue con `size:S` o `size:M` (no más de 2 a la vez — WIP limit 2).
3. **Asígnate** el issue (asignarte = compromiso).
4. Si el issue dice `status:needs-content`, primero coordina el texto con el responsable antes de codear.

## 3. Cómo crear tu rama

```bash
git checkout main
git pull
git checkout -b feat/42-pagina-lineas   # formato: tipo/<nº-issue>-slug
```

Tipos: `feat`, `fix`, `a11y`, `content`, `chore`, `docs`.

## 4. Cómo trabajar

- Haz commits pequeños con mensaje Conventional Commits:
  - `feat(noticias): listado paginado`
  - `fix(menu): foco atrapado en móvil`
  - `a11y(form): errores asociados`
- Abre el PR **en borrador** desde el primer commit, con `Closes #42` en la descripción.
- Mantén el PR **< 400 líneas** cambiadas. Si es más grande, pide partirlo.
- **No mergees tu propio PR** (excepción: `chore/` de dependencias con CI verde).

## 5. Antes de pedir review

- [ ] `npm run lint` y `npm run build` pasan.
- [ ] `npx tsc --noEmit` sin errores.
- [ ] Responsive verificado en 360 / 768 / 1280 px.
- [ ] Accesibilidad: navegable solo con teclado, foco visible, contraste 4.5:1, lector de pantalla probado.
- [ ] Sin `console.log` ni TODOs sin issue.
- [ ] Documentación actualizada si cambió el proceso.

## 6. Cómo pedir review

1. Quita el borrador del PR.
2. Cambia la etiqueta a `status:in-review`.
3. Los CODEOWNERS del área se enteran automáticamente. Si nadie responde en **48 h**, comenta en el PR y cualquier maintainer puede revisar.

## 7. Cómo editar contenido (sin tocar código)

El contenido está en `content/`:

- `content/lineas/*.yml` — líneas de investigación
- `content/proyectos/*.yml` — proyectos
- `content/integrantes/docentes.yml` — integrantes
- `content/noticias/*.mdx` — noticias (cuando esté el CMS)

Edita el archivo, abre PR con etiqueta `type:content`. Si el texto no está aprobado por el líder del semillero, usa `status:needs-content`.

## 8. Accesibilidad — reglas rápidas

- Usa elementos semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Todo `<img>` lleva `alt` descriptivo.
- Foco visible en todos los elementos interactivos.
- Contraste mínimo 4.5:1 para texto normal.
- No dependas solo del color para transmitir información.
- Respeta `prefers-reduced-motion`.
- Formularios: etiquetas asociadas, errores con `aria-describedby`, éxito anunciado con `role="status"`.

## 9. Si te bloqueas

- Comenta en el issue con la etiqueta `status:blocked` y explica el bloqueo.
- Si no hay actividad en 10 días, el issue se libera y vuelve a `Todo` (sin culpa).
- Sync opcional de 30 min solo para desbloquear decisiones; toda decisión se registra en `docs/adr/`.
- Async standup semanal: un comentario en el issue fijo `Weekly #N`.

## 10. Contacto

- Líder del semillero: Yuli Andrea Álvarez Pizarro
- Responsable web inicial: Mauricio Khalifa
- Issues y Discussions en https://github.com/Jd1278/Web-SEIIS