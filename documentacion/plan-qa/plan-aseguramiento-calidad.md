# Plan de Aseguramiento de la Calidad

| Dato | Valor |
|------|-------|
| Proyecto | Proyecto Final de Aseguramiento de la Calidad |
| Curso | Aseguramiento de la Calidad – Universidad Mariano Gálvez de Guatemala |
| Grupo | 10 (3 integrantes) |
| Variante asignada | Variante 2 — OpenCart Demo (Abstracta) |
| Aplicación bajo prueba | Tienda en línea OpenCart (motor OpenCart) |
| URL | https://opencart.abstracta.us/ |
| Automatización | Playwright + TypeScript (patrón Page Object Model) |
| Repositorio | https://github.com/leotedd/Proyecto-QA-Tienda |
| Responsable del Plan QA | Dayana |
| Versión del documento | 1.0 |
| Fecha de elaboración | 23 de octubre de 2026 |

> **Nota de alcance (Grupo 10):** por tener tres integrantes, este grupo ejecuta la
> suite también en **WebKit** (además de Chromium y Firefox) y documenta un mínimo de
> **7 defectos** (en vez de 5) y **23 casos de prueba manuales** (en vez de 20).

---

## 1. Introducción

Este documento define el Plan de Aseguramiento de la Calidad (Plan QA) para el Proyecto
Final del curso. Su propósito es planificar de forma ordenada cómo el equipo diseñará,
ejecutará y evidenciará las pruebas —manuales y automatizadas— sobre la tienda en línea
OpenCart Demo de Abstracta, cómo se gestionarán los defectos encontrados y bajo qué
criterios se considerará que el trabajo de pruebas está terminado.

El plan se alinea con los requisitos oficiales del enunciado del proyecto y sirve como
referencia común para los tres integrantes del equipo. Es un documento de **planificación**:
no contiene resultados de ejecución; los resultados se registrarán en los casos de prueba,
el reporte de defectos y el reporte de ejecución a medida que las pruebas se realicen.

## 2. Objetivos

### 2.1 Objetivo general

Desarrollar e implementar un plan de aseguramiento de la calidad completo para la tienda
OpenCart Demo (Abstracta), que abarque casos de prueba manuales documentados, una suite de
automatización funcional con Playwright y TypeScript, la gestión de defectos con evidencias y
GitHub Issues, y un reporte profesional de resultados.

### 2.2 Objetivos específicos

1. Diseñar un plan de pruebas que cubra las funcionalidades críticas de la aplicación (F01–F09).
2. Elaborar los casos de prueba manuales aplicando técnicas formales de diseño: partición de
   equivalencia, análisis de valores en la frontera y tablas de decisión cuando corresponda.
3. Mantener y ampliar la suite automatizada con Playwright y TypeScript siguiendo el patrón
   Page Object Model, con fixtures reutilizables.
4. Ejecutar la suite en Chromium, Firefox y WebKit, organizada con etiquetas de ejecución
   selectiva (`@smoke` y `@regression`).
5. Documentar y clasificar los defectos encontrados por severidad y prioridad, registrándolos
   además como GitHub Issues en el repositorio del proyecto.
6. Identificar y corregir al menos un caso de prueba inestable (*flaky*) durante el desarrollo,
   documentando el diagnóstico y la solución aplicada.
7. Mantener la trazabilidad entre funcionalidades, casos manuales, casos automatizados,
   evidencias y defectos.

## 3. Alcance

### 3.1 Funcionalidades incluidas

El Plan cubre las funcionalidades definidas en el enunciado oficial del proyecto:

| ID | Funcionalidad | Descripción |
|----|---------------|-------------|
| F01 | Registro de usuario | Creación de cuenta nueva con datos válidos e inválidos |
| F02 | Inicio de sesión | Acceso con credenciales válidas e inválidas |
| F03 | Cierre de sesión | Finalización de sesión y verificación de la redirección |
| F04 | Edición de perfil | Actualización de nombre, apellido, email y teléfono |
| F05 | Cambio de contraseña | Modificación de la contraseña de la cuenta |
| F06 | Calificación de producto | Enviar una calificación por estrellas (1 a 5) en un producto |
| F07 | Reseña de producto | Publicar un comentario de texto sobre un producto |
| F08 | Navegación y búsqueda de productos | Explorar categorías y usar el buscador del catálogo |
| F09 | Manejo de errores y validaciones | Formularios incompletos, entradas inválidas, duplicados |

> **Pendiente de reconciliar:** el archivo `documentacion/casos-prueba/casos-funcionales-F01-F05.md`
> emplea una numeración de IDs distinta (marcada por su autora como propuesta). La numeración
> oficial de este Plan es la de la tabla anterior (F01–F09 del enunciado). La reconciliación de
> ambas numeraciones se realizará en la matriz de trazabilidad (fase de trazabilidad).

### 3.2 Funcionalidades excluidas (fuera de alcance)

Quedan fuera del alcance de este proyecto:

- Pruebas de rendimiento (carga, estrés, concurrencia).
- Pruebas de seguridad o penetración.
- Infraestructura del servidor.
- El proceso de compra/checkout completo.
- Cualquier funcionalidad administrativa no expuesta al usuario final.

## 4. Estrategia de pruebas

La estrategia combina pruebas manuales, pruebas exploratorias y pruebas automatizadas, sobre
un mismo conjunto de funcionalidades, de modo que se complementen y aumenten la cobertura.

### 4.1 Pruebas manuales

- Se diseñan a partir de las funcionalidades del alcance, aplicando partición de equivalencia
  y análisis de valores en la frontera.
- Se registran en la plantilla de casos de prueba (sección 10) con todos sus campos.
- Mínimo **23 casos** para el Grupo 10, distribuidos entre F01–F09.
- Cada caso ejecutado tiene un estado registrado: `Pass`, `Fail` o `Blocked`.

### 4.2 Pruebas exploratorias

- Al menos **30 minutos** de exploración libre de la aplicación, buscando comportamientos que
  los casos formales no contemplen.
- Todo hallazgo relevante se reporta como defecto con su evidencia.

### 4.3 Pruebas automatizadas

La automatización cubre los flujos críticos mediante **smoke tests** y **pruebas de regresión**,
organizadas con Page Object Model, evidencias automáticas, hooks y fixtures reutilizables.

- **Smoke (`@smoke`):** verificación rápida de las rutas críticas; deben ejecutarse en pocos
  minutos. Estado actual de la suite: **5 pruebas** en `tests/smoke.spec.ts`.
- **Regression (`@regression`):** verificación más amplia de autenticación/registro y de
  producto/reseñas/perfil/contraseña. Estado actual de la suite: **11 pruebas**
  (`tests/regression-auth.spec.ts` y `tests/regression-reviews.spec.ts`).

> Los conteos anteriores reflejan el estado real de la suite en la rama al momento de redactar
> este plan y podrán aumentar conforme avance el desarrollo. No representan resultados de
> ejecución.

#### 4.3.1 Smoke vs. Regression

| Aspecto | Smoke | Regression |
|---------|-------|------------|
| Propósito | Confirmar que lo esencial funciona | Verificar que no se rompió lo que ya funcionaba |
| Alcance | Rutas críticas mínimas | Conjunto amplio de casos y validaciones |
| Etiqueta | `@smoke` | `@regression` |
| Ejecución típica | Rápida, frecuente | Más extensa |
| Archivos | `tests/smoke.spec.ts` | `tests/regression-auth.spec.ts`, `tests/regression-reviews.spec.ts` |

### 4.4 Navegadores

La suite se ejecuta sobre los tres motores configurados como *projects* en
`playwright.config.ts`:

| Project | Dispositivo | Motor |
|---------|-------------|-------|
| `chromium` | Desktop Chrome | Chromium |
| `firefox` | Desktop Firefox | Gecko |
| `webkit` | Desktop Safari | WebKit |

### 4.5 Técnicas de diseño de pruebas

- **Partición de equivalencia:** agrupar entradas válidas e inválidas en clases representativas
  (p. ej. email válido vs. email con formato inválido vs. email ya registrado).
- **Análisis de valores en la frontera:** campos obligatorios vacíos, longitudes mínimas y
  máximas, confirmación de contraseña que no coincide.
- **Tablas de decisión:** combinaciones de condiciones donde aplique (p. ej. aceptación de la
  política de privacidad combinada con la validez de los datos de registro).

## 5. Herramientas

| Categoría | Herramienta |
|-----------|-------------|
| Framework de automatización | Playwright Test |
| Lenguaje | TypeScript |
| Entorno de ejecución | Node.js |
| Editor | Visual Studio Code |
| Control de versiones | Git / GitHub |
| Gestión de defectos | GitHub Issues del repositorio |
| Reportes de automatización | Reporte HTML de Playwright |
| Evidencias | Capturas de pantalla, trazas y, cuando aplique, video de Playwright |

> **Configuración de seguridad:** el repositorio incluye un archivo `.npmrc` con
> `ignore-scripts=true` para bloquear los scripts de post-instalación de dependencias y reducir
> el riesgo de ataques de cadena de suministro. Por ello la instalación de navegadores se realiza
> de forma explícita con `npx playwright install`.

## 6. Criterios de entrada y salida

### 6.1 Criterios de entrada

- La aplicación de la Variante 2 (OpenCart Abstracta) está accesible.
- El equipo cuenta con al menos un usuario de prueba creado y documentado.
- El entorno de desarrollo tiene Node.js, Playwright y VS Code configurados.
- El repositorio está clonado y la rama de trabajo correcta está activa.

### 6.2 Criterios de salida

- El 100 % de los casos del plan de pruebas fue ejecutado y tiene un resultado registrado.
- No quedan defectos de severidad crítica sin resolver o sin una justificación documentada.
- La suite automatizada se ejecuta sin errores en los navegadores requeridos (Chromium, Firefox
  y WebKit).
- El reporte de defectos está completo, con evidencias y con los GitHub Issues correspondientes
  creados.
- Al menos un caso de prueba inestable fue identificado y corregido, con su diagnóstico
  documentado.

## 7. Gestión de defectos

Todo defecto encontrado —sea manual, exploratorio o automatizado— se documenta con la plantilla
de la sección 10.2 y se registra además como **GitHub Issue** en el repositorio, con un título y
una descripción equivalentes a los del reporte.

### 7.1 Clasificación por severidad

| Severidad | Descripción |
|-----------|-------------|
| Crítica | Impide usar una funcionalidad esencial; no hay solución alterna |
| Alta | Falla importante con impacto en el flujo, con o sin solución alterna |
| Media | Falla que afecta parcialmente, con solución alterna razonable |
| Baja | Problema menor, cosmético o de bajo impacto |

### 7.2 Clasificación por prioridad

| Prioridad | Significado |
|-----------|-------------|
| P1 | Corregir de inmediato |
| P2 | Corregir pronto |
| P3 | Corregir cuando sea posible |
| P4 | Corregir si queda tiempo |

### 7.3 Ciclo de vida del defecto

`Abierto` → (en análisis/corrección) → `Cerrado`. El estado del reporte debe coincidir en todo
momento con el estado del GitHub Issue correspondiente.

### 7.4 Meta de defectos

Mínimo **7 defectos reales** documentados (Grupo 10), cada uno con evidencia y vinculado a su
Issue.

## 8. Evidencias y reportes

| Tipo de evidencia | Dónde se guarda |
|-------------------|-----------------|
| Capturas de casos manuales | `evidencias/casos-manuales/` |
| Capturas de defectos | `evidencias/defectos/` |
| Evidencia de pruebas exploratorias | `evidencias/exploratorias/` |
| Capturas de la terminal ejecutando los tests | `evidencias/terminal/` |
| Capturas de los GitHub Issues | `evidencias/github-issues/` |
| Reporte HTML de Playwright | Generado en `playwright-report/` (no versionado); el último reporte se conserva según el entregable |
| Análisis de tests inestables | `reportes/analisis-tests-fragiles.md` |

La suite captura **screenshots únicamente cuando una prueba falla** y **trazas en el primer
reintento**, según la configuración de `playwright.config.ts`.

## 9. Riesgos

| ID | Riesgo | Impacto | Mitigación |
|----|--------|---------|------------|
| R1 | Entorno compartido: la aplicación Abstracta es usada por varios grupos | Datos cambiantes, interferencia | Generar usuarios únicos por ejecución; no depender de datos ajenos; uso responsable del sitio |
| R2 | Pruebas inestables (*flaky*) por esperas o locators frágiles | Falsos fallos | Usar auto-waiting de Playwright y locators robustos; documentar y corregir en el análisis de estabilidad |
| R3 | Diferencias de comportamiento entre navegadores (Chromium/Firefox/WebKit) | Fallos solo en un motor | Ejecutar en los tres motores y analizar diferencias antes de reportar defecto |
| R4 | Disponibilidad del sitio de práctica | Bloqueo de ejecución | Planificar ejecuciones con margen; registrar casos como `Blocked` si el sitio no responde |
| R5 | Datos personales reales en datos de prueba | Falta académica/ética | Usar únicamente datos ficticios claramente identificados como de prueba |
| R6 | Concentración de commits al final | Penalización por menos de 10 commits distribuidos | Distribuir el trabajo y los commits a lo largo de las semanas |
| R7 | Defecto sin su GitHub Issue correspondiente | Penalización | Crear el Issue en el mismo momento en que se documenta el defecto |

## 10. Plantillas

### 10.1 Plantilla de caso de prueba

| Campo | Descripción |
|-------|-------------|
| ID | Identificador único (por ejemplo, TC-R01) |
| Funcionalidad | A qué función pertenece (por ejemplo, F01 – Registro) |
| Título | Descripción breve del caso |
| Precondición | Estado inicial requerido |
| Pasos | Pasos numerados y precisos |
| Datos de prueba | Valores exactos a utilizar |
| Resultado esperado | Comportamiento correcto del sistema |
| Resultado obtenido | Lo que realmente ocurrió al ejecutar |
| Estado | Pass / Fail / Blocked |
| Evidencia | Nombre del screenshot adjunto |

### 10.2 Plantilla de reporte de defecto

| Campo | Descripción |
|-------|-------------|
| ID | DR-001, DR-002, etc. |
| Título | Descripción específica del problema |
| Fecha | Fecha de descubrimiento |
| Descubierto por | Nombre del integrante |
| Funcionalidad | A qué función corresponde (F01–F09) |
| Caso de prueba origen | ID del caso que encontró el defecto |
| Tipo | Manual / Automatizado / Exploratorio |
| Severidad | Crítica / Alta / Media / Baja |
| Prioridad | P1 / P2 / P3 / P4 |
| Ambiente | URL, navegador, sistema operativo |
| Pasos para reproducir | Numerados y precisos |
| Resultado esperado | Comportamiento correcto |
| Resultado obtenido | Lo que realmente ocurrió |
| Evidencia | Screenshot o nombre del test automatizado que falla |
| Estado | Abierto / Cerrado (debe coincidir con el estado del Issue) |
| Enlace al Issue | URL del GitHub Issue correspondiente |

## 11. Roles y responsabilidades

| Integrante | Rol | Carné | Responsabilidades principales |
|------------|-----|-------|-------------------------------|
| Teddy Leonardo Hernández | Coordinador y automatización | [pendiente] | Coordinación del equipo y del repositorio; suite automatizada (POM, fixtures, specs), configuración de Playwright |
| Dayana | Plan QA, documentación y trazabilidad | [pendiente] | Plan de aseguramiento de la calidad, documentación del proyecto y matriz de trazabilidad |
| Milton Martínez | Pruebas manuales, exploratorias y defectos | [pendiente] | Diseño y ejecución de casos manuales, pruebas exploratorias y reporte de defectos |

> Los carnés se completarán cuando el equipo los proporcione; no se incluyen datos inventados.

## 12. Criterios de aceptación del Plan

El Plan se considera cumplido cuando:

- Se ejecutaron todos los casos manuales y automatizados planificados y cada uno tiene resultado
  registrado.
- La suite corre sin errores en Chromium, Firefox y WebKit.
- Se documentaron y vincularon a GitHub Issues al menos 7 defectos reales.
- Se identificó y corrigió al menos un test inestable, con su diagnóstico documentado.
- La trazabilidad entre funcionalidades, casos, evidencias y defectos está completa.

---

> Documento de planificación. No contiene resultados de ejecución; estos se registran en los
> casos de prueba, el reporte de defectos y el reporte de ejecución a medida que se realizan las
> pruebas.
