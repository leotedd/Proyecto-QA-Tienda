# Reporte de Ejecución de Pruebas Automatizadas

Responsable de la automatización: Teddy Hernández.

Evidencias: [`evidencias/automatizadas/teddy/`](../evidencias/automatizadas/teddy/README.md).

Casos de prueba automatizados (formato de la plantilla del catedrático):
[`Casos_Prueba_Hernandez_Automatizacion.xlsx`](../documentacion/casos-prueba/Casos_Prueba_Hernandez_Automatizacion.xlsx).

Video individual: [`evidencias/videos/teddy/README.md`](../evidencias/videos/teddy/README.md).

## Ambiente

| Dato | Valor |
|------|-------|
| Fecha de ejecución | 17/10/2026 |
| Rama / commit | `main` / `11a89eb` |
| Aplicación | https://opencart.abstracta.us/ |
| Sistema operativo | Windows 11 |
| Node.js | 24.14.1 |
| Playwright | 1.63.0 |
| Reintentos | 0 |

## Resultados por navegador

| Navegador | Comando | Pruebas | Passed | Failed | Flaky | Duración | Evidencia |
|-----------|---------|---------|--------|--------|-------|----------|-----------|
| Chromium | `npx playwright test --project=chromium` | 25 | 25 | 0 | 0 | 1.4m | [chromium-25-passed.png](../evidencias/automatizadas/teddy/chromium-25-passed.png) |
| Firefox | `npx playwright test --project=firefox` | 25 | 25 | 0 | 0 | 1.6m | [firefox-25-passed.png](../evidencias/automatizadas/teddy/firefox-25-passed.png) |
| WebKit | `npx playwright test --project=webkit` | 25 | 25 | 0 | 0 | 2.0m | [webkit-25-passed.png](../evidencias/automatizadas/teddy/webkit-25-passed.png), [reporte HTML](../evidencias/automatizadas/teddy/webkit-reporte-html-25-passed.png) |
| **Total** | | **75** | **75** | **0** | **0** | | |

El total corresponde a las tres ejecuciones independientes, una por navegador.

## Ejecución selectiva por etiquetas

| Etiqueta | Comando | Navegador | Pruebas | Passed | Duración | Evidencia |
|----------|---------|-----------|---------|--------|----------|-----------|
| `@smoke` | `npm run test:smoke -- --project=chromium` | Chromium | 5 | 5 | 32.4s | [smoke-chromium-5-passed.png](../evidencias/automatizadas/teddy/smoke-chromium-5-passed.png) |
| `@regression` | `npm run test:regression -- --project=chromium` | Chromium | 20 | 20 | 1.2m | [regression-chromium-20-passed.png](../evidencias/automatizadas/teddy/regression-chromium-20-passed.png) |

Las dos etiquetas suman las 25 pruebas de la suite: ninguna prueba queda sin
etiqueta ni pertenece a ambas.

### Verificación previa a la entrega (24/10/2026)

| Verificación | Comando | Resultado |
|--------------|---------|-----------|
| Compilación TypeScript | `npx tsc --noEmit` | Sin errores |
| Smoke en Chromium | `npx playwright test --grep @smoke --project=chromium --reporter=list` | 5 passed (28.1s) |

Esta verificación se registró solo como salida de terminal; no generó un
reporte HTML nuevo ni capturas.

## Defecto conocido: TC-N04 / DR-001

TC-N04 está marcado con `test.fail()` porque reproduce el defecto conocido
DR-001. Playwright la cuenta como *passed* mientras falle en la aserción
esperada:

```
Expected: "There is no product that matches the search criteria."
Received: "Your shopping cart is empty!"
```

Evidencia: [tc-n04-falla-esperada.png](../evidencias/automatizadas/teddy/tc-n04-falla-esperada.png)
(reporte HTML de WebKit). Si la aplicación se corrige, la prueba aparecerá
como fallida y habrá que retirar `test.fail()` y cerrar el Issue
[#3](https://github.com/leotedd/Proyecto-QA-Tienda/issues/3).

## Inventario de la suite

| Suite | Archivo | Pruebas |
|-------|---------|---------|
| Smoke (`@smoke`) | `tests/smoke.spec.ts` | 5 |
| Regresión — Autenticación y registro (`@regression`) | `tests/regression-auth.spec.ts` | 10 |
| Regresión — Producto, reseñas, perfil y contraseña (`@regression`) | `tests/regression-reviews.spec.ts` | 10 |
| **Total por navegador** | | **25** |

| Componente | Archivos | Detalle |
|------------|----------|---------|
| Page Objects | `pages/` | `HomePage`, `LoginPage`, `RegisterPage`, `AccountPage`, `ProductPage` |
| Fixtures | `fixtures/index.ts` | Un fixture por Page Object, `registeredUser` (por worker), `loggedInAccountPage`, `newUser` |
| Helpers | `helpers/auth.ts` | `registerUser`, `createAccount`, `loginAs` |
| Datos de prueba | `test-data/users.ts`, `test-data/reviews.ts` | Usuarios con correo único `@example.com` y contraseñas ficticias de cuentas desechables |
| Pruebas parametrizadas | `invalidLoginCases` (3), `validReviewCases` (3), `invalidReviewCases` (3) | 9 de las 25 pruebas se generan a partir de datos |
| Hooks | `test.beforeEach` en `regression-auth.spec.ts` | Abre el formulario de registro antes de cada prueba |

## Trazabilidad

Cadena: caso de prueba → test automatizado → resultado → evidencia → defecto → GitHub Issue.

Los casos manuales F06–F09 fueron diseñados y ejecutados por Milton Martínez
([`Casos_Prueba_Martinez_F06-F09.xlsx`](../documentacion/casos-prueba/Casos_Prueba_Martinez_F06-F09.xlsx));
la automatización los reutiliza como base. El resultado automatizado es el
mismo en Chromium, Firefox y WebKit; la evidencia automatizada es la captura
de la suite correspondiente.

| Caso manual | Resultado manual | Test automatizado | Suite | Resultado automatizado (3 navegadores) | Evidencia manual | Evidencia automatizada | Defecto | Issue |
|-------------|------------------|-------------------|-------|-----------------------------------------|------------------|------------------------|---------|-------|
| TC-N01 | Pass | `smoke.spec.ts:29` | Smoke | Passed | `casos-manuales/martinez/TC-N01.png` | `smoke-chromium-5-passed.png` | — | — |
| TC-N02 | Pass | `smoke.spec.ts:21` | Smoke | Passed | `casos-manuales/martinez/TC-N02.png` | `smoke-chromium-5-passed.png` | — | — |
| TC-V01 | Pass | `regression-reviews.spec.ts:22` | Regresión | Passed | `casos-manuales/martinez/TC-V01.png` | `regression-chromium-20-passed.png` | — | — |
| TC-V02 | Pass | `regression-reviews.spec.ts:43` | Regresión | Passed | `casos-manuales/martinez/TC-V02.png` | `regression-chromium-20-passed.png` | — | — |
| TC-V03 | Pass | `regression-reviews.spec.ts:31` | Regresión | Passed | `casos-manuales/martinez/TC-V03.png` | `regression-chromium-20-passed.png` | — | — |
| TC-C01 | Pass | `regression-reviews.spec.ts:22` | Regresión | Passed | `casos-manuales/martinez/TC-C01.png` | `regression-chromium-20-passed.png` | — | — |
| TC-C02 | Pass | `regression-reviews.spec.ts:43` | Regresión | Passed | `casos-manuales/martinez/TC-C02.png` | `regression-chromium-20-passed.png` | — | — |
| TC-C03 | Pass | `regression-reviews.spec.ts:22` | Regresión | Passed | `casos-manuales/martinez/TC-C03.png` | `regression-chromium-20-passed.png` | — | — |
| TC-N03 | Pass | `regression-reviews.spec.ts:43` | Regresión | Passed | `casos-manuales/martinez/TC-N03.png` | `regression-chromium-20-passed.png` | — | — |
| TC-N04 | Fail | `regression-reviews.spec.ts:54` (`test.fail()`) | Regresión | Falla esperada (cuenta como passed) | `casos-manuales/martinez/TC-N04.png`, `defectos/DR-001_TC-N04.png` | `tc-n04-falla-esperada.png` | [DR-001](defectos/Reporte_Defecto_DR-001_TC-N04.docx) | [#3](https://github.com/leotedd/Proyecto-QA-Tienda/issues/3) ([captura](../evidencias/github-issues/issue-3-DR-001.png)) |

Pruebas automatizadas sin caso manual asociado (cobertura adicional de
autenticación, registro, perfil y contraseña). Todas resultaron *passed* en
los tres navegadores:

| Prueba | Ubicación | Evidencia |
|--------|-----------|-----------|
| La página de inicio carga con el buscador y el menú | `smoke.spec.ts:12` | `smoke-chromium-5-passed.png` |
| El detalle de producto muestra el formulario de reseña | `smoke.spec.ts:37` | `smoke-chromium-5-passed.png` |
| Un usuario registrado puede iniciar sesión | `smoke.spec.ts:46` | `smoke-chromium-5-passed.png` |
| Registro satisfactorio, campos vacíos, sin política de privacidad, correo duplicado, contraseña no coincide | `regression-auth.spec.ts:21-52` | `regression-chromium-20-passed.png` |
| Login válido, 3 escenarios de login rechazado, cierre de sesión | `regression-auth.spec.ts:60-80` | `regression-chromium-20-passed.png` |
| Editar perfil, cambiar contraseña | `regression-reviews.spec.ts:73-84` | `regression-chromium-20-passed.png` |

## Defectos

Las ejecuciones en los tres navegadores y por etiquetas no revelaron defectos
nuevos. El único defecto reproducido es DR-001 (Issue
[#3](https://github.com/leotedd/Proyecto-QA-Tienda/issues/3)).
