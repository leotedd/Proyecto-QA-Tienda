# Proyecto Final - Aseguramiento de la Calidad

| Dato | Valor |
|------|-------|
| Grupo | 10 |
| Integrantes | 3 |
| Variante | 2 |
| Aplicación bajo prueba | OpenCart Demo de Abstracta |
| URL | https://opencart.abstracta.us/ |
| Automatización | Playwright + TypeScript |

## Integrantes

- Teddy Leonardo Hernandez
- Integrante 2 - pendiente
- Integrante 3 - pendiente

## Descripción

Proyecto final del curso de Aseguramiento de la Calidad. Su objetivo es
planificar, diseñar y ejecutar pruebas manuales y automatizadas sobre la
tienda en línea OpenCart Demo de Abstracta, documentar los resultados y
reportar los defectos encontrados.

La automatización se implementa con Playwright y TypeScript siguiendo el
patrón Page Object Model (POM).

## Tecnologías

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright Test](https://playwright.dev/)
- Git / GitHub (control de versiones y GitHub Issues para defectos)

## Estructura del proyecto

```
Proyecto-QA-Tienda/
├── tests/                  # Specs de Playwright
│   ├── smoke.spec.ts               # Pruebas @smoke
│   ├── regression-auth.spec.ts     # Pruebas @regression de autenticación/registro
│   └── regression-reviews.spec.ts  # Pruebas @regression de producto/reseñas/perfil/contraseña
├── pages/                  # Page Objects (POM)
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── AccountPage.ts
│   └── ProductPage.ts
├── fixtures/               # Fixtures personalizados de Playwright
│   └── index.ts
├── helpers/                # Funciones reutilizables
│   └── auth.ts
├── test-data/              # Datos de prueba centralizados
│   └── users.ts
├── reportes/               # Análisis y reportes del proyecto
│   └── analisis-tests-fragiles.md
├── evidencias/             # Evidencias de ejecución
│   ├── casos-manuales/
│   ├── defectos/
│   ├── exploratorias/
│   ├── terminal/
│   └── github-issues/
├── documentacion/          # Documentación QA
│   ├── plan-qa/
│   └── casos-prueba/
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Instalación

Requisitos: Node.js 20 o superior y Git.

```bash
npm install
npx playwright install chromium firefox webkit
```

> El proyecto incluye un archivo `.npmrc` con `ignore-scripts=true` como
> medida de seguridad. Por eso los navegadores se instalan de forma
> explícita con el segundo comando.

## Ejecución de pruebas

| Comando | Script npm equivalente | Descripción |
|---------|------------------------|-------------|
| `npx playwright test` | `npm test` | Ejecuta todas las pruebas en los 3 navegadores |
| `npx playwright test --grep "@smoke"` | `npm run test:smoke` | Ejecuta solo las pruebas @smoke |
| `npx playwright test --grep "@regression"` | `npm run test:regression` | Ejecuta solo las pruebas @regression |
| `npx playwright test --project=chromium` | `npm run test:chromium` | Ejecuta en Chromium |
| `npx playwright test --project=firefox` | `npm run test:firefox` | Ejecuta en Firefox |
| `npx playwright test --project=webkit` | `npm run test:webkit` | Ejecuta en WebKit |
| `npx playwright show-report` | `npm run report` | Abre el último reporte HTML |

## Navegadores

Por ser el Grupo 10, las pruebas se ejecutan en los tres motores de
navegador configurados como *projects* en `playwright.config.ts`:

| Project | Dispositivo |
|---------|-------------|
| `chromium` | Desktop Chrome |
| `firefox` | Desktop Firefox |
| `webkit` | Desktop Safari |

## Reportes

- Playwright genera un reporte HTML en `playwright-report/` (no versionado).
  Se abre con `npx playwright show-report`.
- Se capturan screenshots únicamente cuando una prueba falla y trazas en el
  primer reintento; se guardan en `test-results/` (no versionado).
- El análisis de pruebas inestables se documenta en
  [`reportes/analisis-tests-fragiles.md`](reportes/analisis-tests-fragiles.md).

## Defectos / GitHub Issues

Los defectos se reportan como
[GitHub Issues](https://github.com/leotedd/Proyecto-QA-Tienda/issues) del
repositorio. Los enlaces a cada Issue serán agregados en esta sección
conforme se encuentren defectos reales durante la ejecución de las pruebas.

Actualmente no hay defectos reportados.

## Estado del proyecto

**Fase actual:** estructura base preparada.

- [x] Configuración de Playwright, TypeScript y navegadores
- [x] Estructura de carpetas y esqueleto POM
- [ ] Plan QA
- [ ] Diseño de casos de prueba
- [ ] Implementación de Page Objects, fixtures y helpers
- [ ] Pruebas @smoke (mínimo 5)
- [ ] Pruebas @regression de autenticación/registro (mínimo 6)
- [ ] Pruebas @regression de producto/reseñas/perfil/contraseña (mínimo 4)
- [ ] Pruebas manuales y exploratorias con evidencias
- [ ] Reporte de defectos en GitHub Issues
- [ ] Análisis de tests inestables
