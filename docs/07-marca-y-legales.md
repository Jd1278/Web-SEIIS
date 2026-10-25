# Marca y legales — Web del Semillero SEIIS

## 1. Estado del manual de marca

**No existe manual de marca oficial.** Los tokens de esta sección son provisionales, extraídos del logo disponible (`public/brand/logo-seiis.png`, 474×314 px, PNG con transparencia). Cuando se consiga el `.svg`/`.ai` oficial, se reemplazan los valores hex y se actualiza este documento.

## 2. Tokens provisionales (extraídos del logo)

| Token | Hex aprox. | Uso permitido | Contraste sobre blanco |
|---|---|---|---|
| `brand-purple` | `#6A1B9A` | Texto, titulares, botón primario | ✅ 8.9:1 |
| `brand-magenta` | `#EC008C` | Acentos, subrayados, hover | ⚠️ 4.1:1 — **no usar en texto pequeño**; para texto usar `#B00068` |
| `brand-green` | `#8DC63F` | Solo detalles gráficos / iconos decorativos | ❌ 1.9:1 — **nunca texto** |
| `brand-ink` | `#1A1A1A` | Texto de cuerpo | ✅ |

**Regla de accesibilidad:** el verde del logo no puede llevar texto y el magenta falla AA en cuerpos pequeños. La paleta derivada (versiones oscurecidas) resuelve esto sin alterar la identidad percibida. Validar con la oficina de comunicaciones cuando exista el manual.

## 3. Logo

- Archivo actual: `public/brand/logo-seiis.png` (474×314 px, fondo transparente, auto-recorte con posible halo en bordes magenta/verde).
- Uso: header (a 180 px de ancho da 2.6× densidad, correcto) y favicon.
- Para `opengraph-image`, hero o pie de página grande **no alcanza** → hasta conseguir el vector, se usa un bloque tipográfico con "SEIIS" en `brand-purple`.
- Pendiente: solicitar `.svg`/`.ai` a la oficina de comunicaciones.

## 4. Nombre institucional

- Valor usado en el sitio: **Universitaria Tecnológicas de Santander** (UTS).
- Centralizado en `src/config/site.ts` y consumido por un solo helper de metadata (`src/lib/seo.ts`), así que si el nombre oficial definitivo cambia, es un commit de un archivo.
- `alternateName` incluye la forma anterior para no perder SEO de quien busca el nombre viejo.
- Pendiente confirmar: ¿es "Universidad Tecnológica de Santander" o "Unidades Tecnológicas de Santander"? El repositorio institucional dice "Unidades Tecnológicas de Santander".

## 5. Discrepancia de grupo de investigación

- El pie del Repositorio Institucional (RI-UTS) menciona **Grupo E-innovare**.
- El Plan Anual 2026 firmado (F-IN-30 v2.0) menciona **Grupo GRIIS**.
- Decisión: el sitio usa **GRIIS** (documento oficial firmado). La discrepancia se registra aquí para verificación con la Dirección de Investigaciones y Extensión (DIE). El pie del RI-UTS podría ser un artefacto del tema DSpace, no una contradicción real.

## 6. Legales

- **Aviso de tratamiento de datos personales (Ley 1581/2012):** pendiente redactar con la oficina jurídica. El formulario de contacto/inscripción incluye consentimiento explícito cuando esté listo.
- **Resolución 1519/2020 y NTC 5854:** probablemente aplican por ser entidad pública. Por confirmar con la DIE.
- **Transparencia (Ley 1712/2014):** evaluar si el sitio debe publicar información de transparencia.
- **Derechos de autor:** el contenido académico pertenece a los autores y a la UTS; las publicaciones enlazan al RI-UTS sin duplicar PDFs.

## 7. Pendientes

- [ ] Manual de marca oficial (no existe)
- [ ] Logo en formato vectorial
- [ ] Nombre institucional definitivo
- [ ] Confirmación GRIIS vs. E-innovare
- [ ] Correo y teléfono institucionales del semillero
- [ ] Redes sociales oficiales
- [ ] Texto de aviso de privacidad (Ley 1581/2012)