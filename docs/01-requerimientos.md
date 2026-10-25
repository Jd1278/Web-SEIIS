# Requerimientos — Web del Semillero SEIIS

## 1. Requerimientos funcionales (RF)

Cada RF tiene ID, sección, descripción y criterio de aceptación verificable.

### Inicio (`/`)
- **RF-01** Hero institucional con misión resumida y CTA "Únete" / "Ver proyectos".
- **RF-02** Sección de líneas destacadas (4 oficiales) con enlace a detalle.
- **RF-03** Últimas 3 noticias publicadas.
- **RF-04** Cifras clave (año de fundación, proyectos, integrantes) — datos reales.

### Líneas (`/lineas`, `/lineas/[slug]`)
- **RF-05** Listado de las 4 líneas oficiales del GRIIS, con resumen y temas de trabajo.
- **RF-06** Página de detalle por línea: descripción, temas, proyectos asociados, integrantes.
- **RF-07** `generateStaticParams` para todas las líneas; 404 si no existe.

### Proyectos (`/proyectos`)
- **RF-08** Listado con filtros por línea y estado (en curso / terminado).
- **RF-09** Filtros accesibles por teclado, con estado vacío.
- **RF-10** Enlace al repositorio / DOI / demo cuando exista.

### Publicaciones (`/publicaciones`)
- **RF-11** Lista ordenada por año descendente, agrupada.
- **RF-12** Enlace al handle del RI-UTS por publicación (sin duplicar PDFs).

### Integrantes (`/integrantes`)
- **RF-13** Grid con foto, nombre, rol, línea y enlaces (GitHub/LinkedIn/ORCID).
- **RF-14** Imágenes con `alt` descriptivo.

### Noticias y eventos (`/noticias`, `/noticias/[slug]`, `/eventos`)
- **RF-15** Listado paginado (9 por página) ordenado por fecha descendente.
- **RF-16** Cada noticia con URL propia, autor, fecha, etiquetas.
- **RF-17** RSS generado automáticamente.
- **RF-18** Eventos separados en próximos / pasados, con datos estructurados `Event`.

### Convocatoria (`/unete`)
- **RF-19** Requisitos, fechas, proceso y estado (abierta / cerrada).
- **RF-20** Formulario de inscripción con validación.

### Contacto (`/contacto`)
- **RF-21** Formulario de contacto con validación server-side.
- **RF-22** Mapa/dirección, redes, logos de aliados con permiso de uso.

### CMS (`/admin`)
- **RF-23** Editor no técnico publica una noticia sin tocar código.
- **RF-24** Validación de frontmatter en PR (CI).

## 2. Requerimientos no funcionales (RNF)

- **RNF-01 Rendimiento:** LCP < 2.5 s, CLS < 0.1, JS inicial < 150 KB en móvil.
- **RNF-02 Accesibilidad:** WCAG 2.1 AA / NTC 5854 — teclado completo, contraste 4.5:1, `lang="es"`, skip-link, formularios con errores asociados, `prefers-reduced-motion`.
- **RNF-03 SEO:** metadata única por ruta, sitemap, robots, JSON-LD `Organization` / `EducationalOrganization`.
- **RNF-04 Seguridad:** sin secretos en el repo, CSP, formulario con honeypot y rate limit.
- **RNF-05 Compatibilidad:** Chrome/Edge/Firefox/Safari últimas 2 versiones, móvil desde 360 px.
- **RNF-06 Mantenibilidad:** contenido editable sin tocar `src/`; build < 3 min.
- **RNF-07 Disponibilidad:** sitio estático o standalone, sin dependencia de DB en runtime.

## 3. Inventario de contenido (responsable · estado)

| Sección | Responsable | Estado |
|---|---|---|
| Misión y objetivos | Líder del semillero | ✅ existe (F-IN-30) |
| Líneas oficiales (4) | Líder del semillero | ✅ existe (F-IN-30) |
| Temas históricos | RI-UTS | ✅ existe |
| Proyectos (4) | Semillero | ✅ existe (RI-UTS) |
| Integrantes | Mauricio Khalifa | 🔄 en carga |
| Noticias / eventos | Equipo | 🔄 CMS pendiente |
| Textos de convocatoria | Líder del semillero | ⏳ pendiente |
| Logos de aliados | Comunicaciones | ⏳ pendiente |
| Correo y teléfono de contacto | DIE | ⏳ pendiente |
| Redes sociales | — | ⏳ pendiente |

Etiquetas de estado: `status:needs-content` · `status:content-approved`.

## 4. Checklist institucional (verificar con la UTS)

- [ ] Nombre oficial definitivo de la institución
- [ ] Manual de marca (no existe) → tokens provisionales
- [ ] ¿Aplica Resolución 1519/2020 y NTC 5854? (probable por ser entidad pública)
- [ ] Aviso de tratamiento de datos personales (Ley 1581/2012) para formularios
- [ ] Dominio / subdominio y quién administra DNS y TLS
- [ ] ¿Node disponible en el servidor o se requiere export estático?
- [ ] Aprobación editorial y responsable de publicación
- [ ] Logo en formato vectorial (SVG/AI) — actualmente solo PNG 474×314

## 5. Definition of Done (DoD)

Un issue se cierra solo si:

- CI verde (lint, typecheck, build)
- Revisado por CODEOWNER del área
- Sin regresiones de accesibilidad (axe)
- Responsive verificado en 360 / 768 / 1280
- Contenido aprobado (`status:content-approved`) cuando aplica
- Docs actualizadas si cambió el proceso
- Sin `console.log` ni TODOs sin issue asociado
- PR < 400 líneas (o justificado)