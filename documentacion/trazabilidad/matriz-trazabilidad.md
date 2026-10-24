# Matriz de Trazabilidad — F01–F09

| Dato | Valor |
|------|-------|
| Proyecto | Proyecto-QA-Tienda – Proyecto Final de Aseguramiento de la Calidad |
| Grupo | 10 (Variante 2 — OpenCart Demo de Abstracta) |
| URL | https://opencart.abstracta.us/ |
| Responsable | Dayana (Plan QA, documentación y trazabilidad) |
| Fecha | 23 de octubre de 2026 |

Esta matriz relaciona cada funcionalidad oficial (F01–F09) con sus casos de
prueba manuales, los tests automatizados que la cubren, las evidencias
disponibles y los defectos asociados.

> **Regla de veracidad.** Solo se listan elementos verificables en el
> repositorio al momento de elaborar esta matriz. Lo que aún no existe se marca
> como `— (pendiente)`. Ningún caso se da por aprobado sin evidencia.

## Leyenda de cobertura

- **Manual + Auto:** la funcionalidad tiene casos manuales documentados y tests
  automatizados en la suite.
- **Solo Manual / Solo Auto:** cubierta por un solo tipo de prueba.
- **Evidencia:** captura o reporte existente en el repositorio (ruta real) o
  `— (pendiente)` si todavía debe generarse al ejecutar.

## Matriz principal

| Func. | Descripción | Casos manuales | Responsable manual | Tests automatizados (archivo) | Evidencia en repo | Defecto | Cobertura |
|-------|-------------|----------------|--------------------|-------------------------------|-------------------|---------|-----------|
| **F01** | Registro de usuario | TC-R01, TC-R02, TC-R03, TC-R04 | Dayana | `tests/regression-auth.spec.ts`: registro válido; campos vacíos; sin política de privacidad; correo ya registrado; confirmación distinta | — (pendiente de ejecución) | — | Manual + Auto |
| **F02** | Inicio de sesión | TC-L01, TC-L02, TC-L04 | Dayana | `tests/smoke.spec.ts`: usuario registrado inicia sesión · `tests/regression-auth.spec.ts`: login válido + login rechazado (casos inválidos) | — (pendiente de ejecución) | — | Manual + Auto |
| **F03** | Cierre de sesión | TC-L03 | Dayana | `tests/regression-auth.spec.ts`: "cerrar sesión finaliza la sesión del usuario" | — (pendiente de ejecución) | — | Manual + Auto |
| **F04** | Edición de perfil | TC-P01, TC-P02 | Dayana | `tests/regression-reviews.spec.ts`: "editar los datos personales del perfil" | — (pendiente de ejecución) | — | Manual + Auto |
| **F05** | Cambio de contraseña | TC-P03 | Dayana | `tests/regression-reviews.spec.ts`: "cambiar la contraseña permite iniciar sesión con la nueva" | — (pendiente de ejecución) | — | Manual + Auto |
| **F06** | Calificación de producto | TC-V01, TC-V02, TC-V03 | Milton | `tests/regression-reviews.spec.ts`: reseñas válidas; reseñas inválidas; TC-V03 (calificar el mismo producto más de una vez) | `evidencias/casos-manuales/martinez/TC-V01.png`, `TC-V02.png`, `TC-V03.png` | — | Manual + Auto |
| **F07** | Reseña de producto | TC-C01, TC-C02, TC-C03 | Milton | `tests/regression-reviews.spec.ts`: reseñas válidas/inválidas (casos parametrizados) | `evidencias/casos-manuales/martinez/TC-C01.png`, `TC-C02.png`, `TC-C03.png` | — | Manual + Auto |
| **F08** | Navegación y búsqueda | TC-N01, TC-N02 (Milton); TC-N05, TC-N06 (Dayana, adicionales) | Milton + Dayana | `tests/smoke.spec.ts`: TC-N01 (categoría del menú); TC-N02 (buscar por nombre); inicio con buscador/menú | `evidencias/casos-manuales/martinez/TC-N01.png`, `TC-N02.png`; Dayana — (pendiente) | — | Manual + Auto |
| **F09** | Manejo de errores y validaciones | TC-N03, TC-N04 | Milton | `tests/regression-reviews.spec.ts`: TC-N04 (buscar caracteres especiales, marcado `test.fail()` por defecto conocido) | `evidencias/casos-manuales/martinez/TC-N03.png`, `TC-N04.png`; `evidencias/defectos/DR-001_TC-N04.png` | **DR-001** | Manual + Auto |

## Trazabilidad de defectos

| Defecto | Caso origen | Funcionalidad | Tipo | Estado | Evidencia | GitHub Issue |
|---------|-------------|---------------|------|--------|-----------|--------------|
| **DR-001** | TC-N04 | F09 | Manual/Exploratorio (EXP-05) | Documentado en repo (`reportes/defectos/Reporte_Defecto_DR-001_TC-N04.docx`) | `evidencias/defectos/DR-001_TC-N04.png` | — (pendiente de verificar/enlazar) |

**DR-001 (resumen verificable):** al buscar caracteres especiales, la página de
resultados muestra "Your shopping cart is empty!" / "¡Tu carrito de la compra
está vacío!" en lugar de un mensaje de búsqueda sin resultados. Reproducido en
la exploratoria EXP-05 (categoría Software sin productos) y en TC-N04. El test
automatizado correspondiente está marcado con `test.fail()` como defecto
conocido.

> **Pendiente:** confirmar si el GitHub Issue de DR-001 ya existe y, de ser así,
> enlazarlo; el enunciado exige que cada defecto tenga su Issue correspondiente.

## Cobertura resumida

| Funcionalidad | ¿Manual? | ¿Automatizado? | ¿Evidencia en repo? | ¿Defecto? |
|---------------|----------|----------------|---------------------|-----------|
| F01 Registro | Sí (4) | Sí | Pendiente | No |
| F02 Inicio de sesión | Sí (3) | Sí | Pendiente | No |
| F03 Cierre de sesión | Sí (1) | Sí | Pendiente | No |
| F04 Edición de perfil | Sí (2) | Sí | Pendiente | No |
| F05 Cambio de contraseña | Sí (1) | Sí | Pendiente | No |
| F06 Calificación | Sí (3) | Sí | Sí | No |
| F07 Reseña | Sí (3) | Sí | Sí | No |
| F08 Navegación/búsqueda | Sí (2 + 2 adic.) | Sí | Parcial (Milton sí; Dayana pendiente) | No |
| F09 Errores/validaciones | Sí (2) | Sí | Sí | DR-001 |

**Las 9 funcionalidades tienen cobertura manual y automatizada.**

## Elementos pendientes (no inventados)

1. **Ejecución de los casos manuales F01–F05 y F08 adicionales** (Dayana): hoy
   en `PENDIENTE`; falta ejecutar y capturar evidencias.
2. **Evidencias de los casos de Dayana**: aún no existen en
   `evidencias/casos-manuales/dayana/` (las rutas listadas son las previstas).
3. **GitHub Issue de DR-001**: verificar si existe y enlazarlo.
4. **Reporte HTML de Playwright**: no versionado aún; se generará en la
   ejecución final de la suite.
5. **Reconciliación**: la versión previa del archivo de casos usaba otra
   numeración; ya quedó realineada a F01–F09 oficiales en esta matriz.
6. **Mínimo de defectos del Grupo 10**: el PDF exige ≥7 defectos; a la fecha solo
   DR-001 está documentado en el repositorio. Faltan por documentar al menos 6
   más (dependen de la ejecución real de las pruebas).
