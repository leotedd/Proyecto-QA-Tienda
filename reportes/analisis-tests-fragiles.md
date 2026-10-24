# Análisis de Estabilidad y Tests Inestables

| Dato | Valor |
|------|-------|
| Proyecto | Proyecto-QA-Tienda – Grupo 10 (Variante 2, OpenCart Abstracta) |
| Autora del análisis documental | Dayana (documentación y trazabilidad) |
| Fecha | 23 de octubre de 2026 |
| Alcance | Análisis documental de riesgos de estabilidad de la suite automatizada, sin modificar el código de pruebas |

> **Importante — categorías que NO deben confundirse.**
> Este documento distingue tres cosas distintas:
> 1. **Riesgo potencial de fragilidad:** algo que *podría* causar inestabilidad,
>    identificado por inspección del código. **No** es un fallo observado.
> 2. **Defecto real de la aplicación:** comportamiento incorrecto reproducible de
>    OpenCart (p. ej. DR-001). No es inestabilidad de la prueba.
> 3. **Test inestable (*flaky*) confirmado:** un test que pasa y falla sin que la
>    aplicación cambie, **demostrado con ejecuciones repetidas**.
>
> A la fecha de este análisis **no hay ejecuciones registradas que demuestren un
> flaky**, por lo que la sección de flaky confirmado está marcada como
> **pendiente**. No se afirma haber identificado ni corregido un test inestable.

---

## 1. Riesgos potenciales de fragilidad (por inspección de código)

Identificados leyendo `tests/`, `pages/` y `helpers/`. Se presentan como
**riesgos a vigilar**, no como fallos confirmados.

| # | Ubicación | Riesgo | Por qué | Recomendación |
|---|-----------|--------|---------|---------------|
| RP-1 | `pages/HomePage.ts` → `searchResultsMessage = page.locator('#content > p').last()` | Selector **posicional/estructural** | Depende de que el mensaje sea el último `<p>` hijo directo de `#content`; si OpenCart cambia el marcado o agrega otro párrafo, el locator puede apuntar a otro texto | Anclar a un texto o atributo más estable si el sitio lo permite; vigilar en los tres navegadores |
| RP-2 | `pages/HomePage.ts` → `pageHeading = page.locator('#content').getByRole('heading').first()` | Depende del **primer encabezado** del contenido | Si aparece un encabezado adicional antes del título, `.first()` podría capturar el equivocado | Verificar que el primer heading sea siempre el título de la página |
| RP-3 | `pages/ProductPage.ts` → `reviewsTab = getByRole('link', { name: /^Reviews \(\d+\)$/ })` | Depende del **contador** del texto "Reviews (N)" | El número varía según las reseñas existentes; el patrón regex lo contempla, pero cambios de idioma/formato lo romperían | Mantener el regex; vigilar si el sitio cambia a otro idioma |
| RP-4 | Datos de catálogo (`test-data/reviews.ts`, p. ej. `products.macBook.id`, búsqueda de "MacBook"/"iPhone") | **Dependencia de datos externos** del sitio demo | Es un entorno compartido; si cambian IDs, nombres o disponibilidad de productos, los tests podrían fallar sin que la suite tenga error | Documentar los datos usados; revisar antes de cada corrida oficial |
| RP-5 | Reseñas sujetas a aprobación del webmaster (observado en los casos de Milton) | **Estado no inmediato** | Una reseña enviada no aparece publicada de inmediato; TC-V03 depende de reenviar sobre el mismo producto | Verificar solo el mensaje de confirmación, no la publicación (así está hoy) |
| RP-6 | Ejecución multinavegador (Chromium, Firefox, WebKit) | **Diferencias entre motores** | WebKit suele ser más estricto con tiempos y foco; un locator válido en Chromium podría comportarse distinto | Ejecutar en los tres motores y comparar antes de reportar cualquier defecto |

## 2. Puntos a favor de la estabilidad (verificables en el código)

- **No se encontraron esperas fijas** (`waitForTimeout` / `sleep`) en `tests/`,
  `pages/` ni `helpers/`. La suite se apoya en el **auto-waiting** de Playwright
  y en `page.waitForURL(...)` explícito dentro de `helpers/auth.ts`. Esto
  **reduce** el riesgo de inestabilidad por tiempos arbitrarios.
- Los **fixtures** aíslan el estado: `registeredUser` se crea en un contexto
  separado (`createAccount`) y `newUser` por prueba, lo que **limita las
  dependencias de estado** entre tests.
- Las aserciones usan *web-first assertions* (`toHaveURL`, `toHaveText`,
  `toBeVisible`), que **reintentan automáticamente** hasta el timeout.

## 3. Defectos reales (no son inestabilidad)

| ID | Caso | Descripción | Evidencia |
|----|------|-------------|-----------|
| DR-001 | TC-N04 / EXP-05 | Al buscar caracteres especiales (o entrar a una categoría vacía) se muestra "Your shopping cart is empty!" en lugar del mensaje de búsqueda sin resultados. | `evidencias/defectos/DR-001_TC-N04.png`; `reportes/defectos/Reporte_Defecto_DR-001_TC-N04.docx` |

En `tests/regression-reviews.spec.ts`, el caso TC-N04 está marcado con
`test.fail()` y anotado como **defecto conocido (DR-001)**. Esto es un **defecto
de la aplicación esperado**, no un test inestable: el test está diseñado para
fallar de forma consistente hasta que OpenCart lo corrija.

## 4. Test inestable (*flaky*) confirmado

**Estado: PENDIENTE — sin evidencia de ejecución.**

El enunciado del proyecto pide identificar y corregir al menos un test inestable,
documentando: el test y su archivo, cómo se manifestaba la falla intermitente, el
diagnóstico de causa raíz, la corrección aplicada y cuántas corridas consecutivas
confirmaron la solución.

A la fecha **no existen ejecuciones registradas que demuestren un comportamiento
intermitente**, por lo que **no se declara ningún flaky identificado ni
corregido**. Este apartado se completará únicamente con datos reales cuando la
suite se ejecute de forma repetida (p. ej. `npx playwright test --repeat-each=N`)
y se observe —si ocurre— una falla intermitente. Los riesgos de la sección 1 son
los **candidatos** a vigilar durante esas corridas.

Plantilla a completar cuando exista un flaky real:

| Campo | Contenido |
|-------|-----------|
| Test afectado | (título del test) |
| Archivo | (ruta del `.spec.ts`) |
| Manifestación | (cómo fallaba de forma intermitente) |
| Causa raíz | (espera fija / locator frágil / dependencia de estado / diferencia de navegador) |
| Corrección aplicada | (cambio realizado — lo implementa el responsable de automatización) |
| Verificación | (número de corridas consecutivas en verde que confirman la solución) |

## 5. Recomendaciones de estabilización (para el responsable de automatización)

> Estas recomendaciones **no se aplican en este documento**; corresponden a la
> configuración y al código de la suite (dominio de automatización). Se dejan
> registradas para que el equipo decida.

1. Evaluar activar `retries: 1` en `playwright.config.ts` (el PDF lo sugiere en
   su ejemplo); hoy no está configurado.
2. Evaluar activar `video: 'retain-on-failure'` (sugerido por el PDF y bono de la
   rúbrica); hoy no está configurado.
3. Considerar un `timeout` explícito de prueba acorde al sitio demo.
4. Ejecutar la suite con `--repeat-each` en los tres navegadores antes de la
   entrega para detectar cualquier flaky real y documentarlo en la sección 4.
5. Sustituir, si el sitio lo permite, los selectores posicionales (RP-1, RP-2)
   por anclajes más estables.
