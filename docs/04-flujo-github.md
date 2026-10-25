# Flujo de trabajo en GitHub — Equipo asíncrono

Equipo de 5 personas con disponibilidad variable. Todo el flujo está diseñado para que **nadie dependa de la presencia de otro**.

## 1. Modelo de ramas (trunk-based)

- `main` → siempre desplegable, protegida.
- Ramas cortas (≤ 5 días): `feat/42-pagina-lineas`, `fix/57-foco-menu`, `content/61-noticia`, `a11y/63-contraste`, `chore/64-deps`.
- Formato: `tipo/<nº-issue>-slug-corto`.
- Sin `develop`, sin ramas por persona.

## 2. Ciclo de un issue

1. **Autoasignación** (asignarse = compromiso).
2. PR en **borrador** desde el primer commit, con `Closes #42` en la descripción.
3. CI corre: lint, typecheck, build, a11y, Lighthouse.
4. Pasa a `status:in-review` y se pide review a CODEOWNERS del área + 1 reviewer rotativo.
5. Squash merge. Rama se borra automáticamente. Issue se cierra solo.

## 3. Reglas para disponibilidad variable

- **WIP limit 2** por persona. El resto queda en `Todo` sin asignar.
- **Autoasignación**, no asignación por líder → sin bloqueos si alguien desaparece una semana.
- **SLA de review: 48 h hábiles**. Si se vence, cualquier maintainer puede revisar.
- **Review por área** (CODEOWNERS), no por persona.
- **PRs pequeños:** objetivo < 400 líneas cambiadas.
- **Nadie mergea su propio PR** (excepción: `chore/` de dependencias con CI verde).
- **Async standup semanal:** un comentario por persona en el issue fijo `Weekly #N` (qué hice / qué sigue / bloqueos). Sin reuniones obligatorias.
- **Sync opcional** de 30 min solo para desbloquear decisiones; toda decisión → `docs/adr/`.
- **Política de abandono:** issue sin actividad en 10 días → se comenta, se libera y vuelve a `Todo`. Sin culpa.

## 4. Protección de `main` (configurar cuando `Jd1278` tenga admin)

```
Require PR before merging            ✅
Required approvals                   1
Dismiss stale approvals              ✅
Require review from Code Owners      ✅
Require status checks                ✅ ci, a11y, lighthouse
Require conversation resolution      ✅
Require linear history               ✅
Allow squash merging only            ✅
Allow force push / deletions         ❌
Automatically delete head branches   ✅
```

## 5. Vistas del Project board

- *Ready to pick* → `Todo` + sin bloqueo + `size:S/M`
- *My work* → asignados a mí
- *Needs content* → `status:needs-content`
- *Review queue* → `status:in-review`, por antigüedad
- *Blocked* → `status:blocked` con comentario del bloqueo

## 6. Convención de commits (Conventional Commits)

`feat(noticias): listado paginado` · `fix(menu): foco atrapado en móvil` · `a11y(form): errores asociados` · `docs(flujo): SLA de review`

## 7. Pendientes que requieren admin (Jd1278)

- Crear la org `seiis-uts` y transferir el repo
- Activar la rama protegida (sección 4)
- Activar 2FA obligatorio para miembros de la org