# Evidencias de pruebas automatizadas — Teddy Hernández

Capturas de las ejecuciones de la suite Playwright (`tests/`) realizadas el
17/10/2026 sobre `main` (commit `11a89eb`). El resumen de resultados y la
trazabilidad están en
[`reportes/ejecucion-automatizada.md`](../../../reportes/ejecucion-automatizada.md).

## Ejecución multinavegador

| Archivo | Comando | Qué muestra |
|---------|---------|-------------|
| [`chromium-25-passed.png`](chromium-25-passed.png) | `npx playwright test --project=chromium` | Terminal: 25 tests, 3 workers, **25 passed (1.4m)** |
| [`firefox-25-passed.png`](firefox-25-passed.png) | `npx playwright test --project=firefox` | Terminal: 25 tests, 3 workers, **25 passed (1.6m)** |
| [`webkit-25-passed.png`](webkit-25-passed.png) | `npx playwright test --project=webkit` | Terminal: 25 tests, 3 workers, **25 passed (2.0m)** |
| [`webkit-reporte-html-25-passed.png`](webkit-reporte-html-25-passed.png) | `npx playwright show-report` | Reporte HTML de WebKit: All 25, Passed 25, Failed 0, Flaky 0, Skipped 0 (17/10/2026 10:21) |

## Ejecución selectiva por etiquetas

| Archivo | Comando | Qué muestra |
|---------|---------|-------------|
| [`smoke-chromium-5-passed.png`](smoke-chromium-5-passed.png) | `npm run test:smoke -- --project=chromium` | Terminal: `playwright test --grep @smoke`, 5 tests, **5 passed (32.4s)** |
| [`regression-chromium-20-passed.png`](regression-chromium-20-passed.png) | `npm run test:regression -- --project=chromium` | Terminal: `playwright test --grep @regression`, 20 tests, **20 passed (1.2m)** |

## Defecto conocido DR-001

| Archivo | Qué muestra |
|---------|-------------|
| [`tc-n04-falla-esperada.png`](tc-n04-falla-esperada.png) | Detalle de TC-N04 en el reporte HTML de WebKit (`regression-reviews.spec.ts:54`): anotación *defecto conocido: DR-001* y `fail`, y el error `Expected: "There is no product that matches the search criteria."` / `Received: "Your shopping cart is empty!"` |

La captura del GitHub Issue del defecto está en
[`evidencias/github-issues/issue-3-DR-001.png`](../../github-issues/issue-3-DR-001.png).

> Los reportes HTML de Chromium y Firefox no se conservaron porque cada
> ejecución sobrescribe `playwright-report/` (carpeta ignorada por Git); la
> evidencia de esos navegadores son las capturas de terminal.
