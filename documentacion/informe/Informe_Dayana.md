# Informe de Participación — Dayana
## Proyecto Final de Aseguramiento de la Calidad

| Dato | Valor |
|------|-------|
| Integrante | Dayana |
| Rol | Plan QA, documentación y trazabilidad |
| Grupo | 10 (Variante 2 — OpenCart Demo de Abstracta) |
| Aplicación | https://opencart.abstracta.us/ |
| Rama de trabajo | `feature/dayanna` |
| Fecha | 24 de octubre de 2026 |

> Este informe documenta la participación de Dayana con información verificable
> del repositorio. No incluye estadísticas, porcentajes de aprobación ni
> resultados de ejecución que no se hayan registrado realmente.

---

## 1. Objetivo de las pruebas realizadas

Documentar y asegurar la calidad de las funcionalidades críticas de la tienda
OpenCart asignada al Grupo 10, mediante la elaboración del Plan de Aseguramiento
de la Calidad, el diseño de casos de prueba manuales para las funcionalidades
F01–F05 (con casos adicionales de F08), la matriz de trazabilidad del proyecto y
el análisis documental de riesgos de estabilidad de la suite automatizada.

## 2. Alcance de la participación de Dayana

Según la distribución de roles del equipo, la participación de Dayana comprende:

- **Plan de Aseguramiento de la Calidad** del proyecto.
- **Casos de prueba manuales F01–F05** (registro, inicio de sesión, cierre de
  sesión, edición de perfil y cambio de contraseña) más dos casos adicionales de
  F08 (búsqueda y detalle de producto).
- **Matriz de trazabilidad** que relaciona funcionalidades, casos manuales,
  pruebas automatizadas, evidencias y defectos.
- **Análisis documental de estabilidad** de la suite (riesgos potenciales de
  fragilidad), sin modificar el código automatizado del coordinador.

Quedan **fuera** de su alcance la implementación de la suite automatizada
(coordinador) y los casos manuales F06–F09 y su defecto DR-001 (otro integrante).

## 3. Metodología de ejecución

- **Diseño de casos:** aplicación de partición de equivalencia y análisis de
  valores en la frontera sobre las funcionalidades del alcance.
- **Numeración oficial:** los casos se alinearon a la numeración F01–F09 definida
  en el enunciado del catedrático.
- **Documentación:** cada caso incluye identificador, funcionalidad, objetivo,
  precondiciones, datos de prueba, pasos, resultado esperado, resultado obtenido,
  estado y evidencia prevista.
- **Trazabilidad:** se cruzó cada funcionalidad con sus casos manuales y los
  tests automatizados existentes, usando únicamente datos verificables del
  repositorio.
- **Validación técnica:** se verificó la compilación de tipos (`tsc --noEmit`) y
  se ejecutó la suite @smoke en Chromium como comprobación del entorno.

## 4. Casos documentados y su estado

Casos manuales a cargo de Dayana (detalle en
`documentacion/casos-prueba/casos-funcionales-F01-F05.md` y en
`documentacion/casos-prueba/Casos_Prueba_Dayana_F01-F05.xlsx`):

| Caso | Funcionalidad | Estado |
|------|---------------|--------|
| TC-R01, TC-R02, TC-R03, TC-R04 | F01 Registro | PENDIENTE de ejecución |
| TC-L01, TC-L02, TC-L04 | F02 Inicio de sesión | PENDIENTE de ejecución |
| TC-L03 | F03 Cierre de sesión | PENDIENTE de ejecución |
| TC-P01, TC-P02 | F04 Edición de perfil | PENDIENTE de ejecución |
| TC-P03 | F05 Cambio de contraseña | PENDIENTE de ejecución |
| TC-N05, TC-N06 | F08 Navegación/búsqueda (adicionales) | PENDIENTE de ejecución |

**Total: 13 casos manuales documentados.** Combinados con los 10 casos F06–F09
de otro integrante, el grupo alcanza los 23 casos manuales requeridos.

> Los casos manuales están **documentados y pendientes de ejecución manual**; su
> estado real se registrará al ejecutarlos y capturar las evidencias. No se marca
> ninguno como aprobado sin evidencia.

## 5. Resultados obtenidos

- **Validación de tipos:** `npm run typecheck` (`tsc --noEmit`) finalizó sin
  errores.
- **Suite @smoke (Chromium), 24/10/2026:** 5 pruebas ejecutadas, **5 aprobadas,
  0 falladas** (exit code 0). Evidencia:
  `evidencias/terminal/smoke-chromium-2026-10-24.md`. Estas pruebas cubren flujos
  del alcance de Dayana (inicio de sesión F02, navegación y búsqueda F08, detalle
  de producto).
- **Casos manuales:** pendientes de ejecución (ver sección 4).
- **Video individual:** disponible en Google Drive (no se incluye como MP4 en
  el repositorio); el enlace está registrado en
  `evidencias/videos/dayana/README.md`.

No se reportan porcentajes de aprobación globales porque la ejecución manual aún
no se ha completado.

## 6. Defectos identificados

Durante el trabajo documental de Dayana **no se identificaron defectos nuevos**.
El único defecto registrado del proyecto, **DR-001** (mensaje de carrito vacío en
una búsqueda sin resultados / categoría vacía), fue descubierto por otro
integrante en F09 y está documentado en
`reportes/defectos/Reporte_Defecto_DR-001_TC-N04.docx`; se incluye en la matriz de
trazabilidad por completitud, no como hallazgo propio.

> Si durante la ejecución manual pendiente de los casos F01–F05 se observara un
> comportamiento incorrecto reproducible, se documentará con la plantilla de
> defectos y su GitHub Issue correspondiente.

## 7. Limitaciones

- La ejecución manual de los casos F01–F05 depende de la disponibilidad del
  entorno de práctica compartido y debe realizarse y capturarse por la propia
  integrante.
- El entorno de práctica es compartido por varios grupos; para no saturarlo, no
  se ejecutó la suite completa de regresión en esta validación (solo @smoke).
- El análisis de estabilidad es documental (por inspección de código); no se
  dispone de corridas repetidas que confirmen un test inestable, por lo que ese
  punto queda señalado como pendiente de ejecución por el área de automatización.

## 8. Conclusiones

El trabajo de Dayana deja planificada y trazada la estrategia de calidad del
proyecto: el Plan QA define alcance, criterios y gestión de defectos; los casos
manuales F01–F05 quedan diseñados con técnicas formales y alineados a la
numeración oficial; la matriz de trazabilidad evidencia que las nueve
funcionalidades tienen cobertura manual y automatizada; y el análisis de
estabilidad distingue con rigor entre riesgos potenciales, defectos reales y
pruebas inestables, sin afirmar resultados no demostrados. La validación del
entorno (typecheck y @smoke en verde) confirma que la suite es operativa en los
flujos de su alcance.

> **Reflexión personal:** este apartado lo redacta Dayana con su propia
> experiencia (qué aprendió, qué le sorprendió y cómo aplicaría lo trabajado en un
> proyecto real), según lo exige el documento formal. No se completa aquí para no
> inventar opiniones personales.

## 9. Recomendaciones

1. Ejecutar los 13 casos manuales documentados y capturar sus evidencias,
   actualizando el estado real (`PASS`/`FAIL`/`BLOCKED`) en el Markdown y el Excel.
2. Ejecutar la suite de regresión en los tres navegadores (Chromium, Firefox,
   WebKit) y adjuntar el reporte HTML de Playwright como anexo.
3. Para el requisito de test inestable, correr la suite con `--repeat-each` y
   documentar cualquier intermitencia real en `reportes/analisis-tests-fragiles.md`.
4. Confirmar y enlazar el GitHub Issue correspondiente a DR-001 en la matriz de
   trazabilidad.
5. Verificar que el video individual demuestre los casos requeridos y registrar
   su enlace en el documento formal del equipo.
