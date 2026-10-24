# Evidencia de ejecución — Suite @smoke (Chromium)

| Dato | Valor |
|------|-------|
| Fecha de ejecución | 24 de octubre de 2026 |
| Comando | `npx playwright test --grep @smoke --project=chromium --reporter=list` |
| Entorno | Node.js v22.18.0 · navegadores Playwright instalados · Windows 11 |
| Aplicación | OpenCart Demo de Abstracta (https://opencart.abstracta.us/) |
| Ejecutado por | Validación local durante el cierre del proyecto |

## Resultado real (salida de terminal)

```
Running 5 tests using 1 worker

  ✓  1 [chromium] › tests\smoke.spec.ts:12 › Smoke @smoke › la página de inicio carga con el buscador y el menú de categorías (28.6s)
  ✓  2 [chromium] › tests\smoke.spec.ts:21 › Smoke @smoke › TC-N02: buscar un producto por nombre muestra resultados (12.1s)
  ✓  3 [chromium] › tests\smoke.spec.ts:29 › Smoke @smoke › TC-N01: navegar a una categoría del menú muestra sus productos (11.6s)
  ✓  4 [chromium] › tests\smoke.spec.ts:37 › Smoke @smoke › el detalle de producto muestra el formulario de reseña (11.2s)
  ✓  5 [chromium] › tests\smoke.spec.ts:46 › Smoke @smoke › un usuario registrado puede iniciar sesión (8.9s)

  5 passed (1.6m)
```

**Resumen:** 5 pruebas @smoke, 5 aprobadas, 0 falladas. Exit code 0.

> Verificación previa: `npm run typecheck` (`tsc --noEmit`) finalizó sin errores
> (exit code 0).

## Relación con el alcance de Dayana

Estas pruebas @smoke cubren flujos dentro del alcance funcional de Dayana:
inicio de sesión (F02), navegación y búsqueda (F08) y la carga del detalle de
producto. La suite completa (incluida la regresión) es responsabilidad de
automatización del coordinador; aquí solo se validó que ejecuta correctamente en
el entorno local.

> No se ejecutó la suite completa de regresión en este registro para no generar
> cuentas ni reseñas adicionales en el entorno de práctica compartido. Puede
> ejecutarse con `npm run test:regression` cuando el equipo lo requiera.
