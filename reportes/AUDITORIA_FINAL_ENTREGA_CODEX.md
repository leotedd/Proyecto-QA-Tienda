# Auditoría final de entrega — Proyecto-QA-Tienda

Fecha de revisión: 24 de octubre de 2026, aproximadamente 08:34–08:40, America/Guatemala. Entrega oficial: 24/10/2026, 09:00.

**Veredicto: NO LISTO.** La automatización tiene respaldo y la comprobación smoke actual pasó en los tres motores, pero no se acredita la ejecución de los 23 casos manuales, los siete defectos, el informe académico ni los documentos grupales finales. El trabajo todavía externo de los integrantes no puede darse por entregado.

## 1. Alcance, fuentes y límites

- Revisión del árbol de trabajo y de las referencias Git ya disponibles, sin fetch, cambio de rama ni integración.
- Fuentes normativas: `documentacion/plantillas-y-guias-catedratico/Proyecto Final (2).pdf`, especialmente secciones 5–9, 11–13; `documentacion/Guía de trabajos en grupos para el estudiante.pdf`, incluida su entrega final.
- Lectura de README, Plan QA, casos manuales, matriz, análisis de estabilidad, reportes, configuración y código de pruebas. Inspección XML de Word y Excel; comparación semántica del Excel de Martínez entre ramas; lectura de metadatos del HTML local; validación estructural de 20 PNG.
- Los archivos de Dayana en su computadora no son verificables desde esta copia. Las referencias remotas locales pueden estar desactualizadas respecto del servidor.
- No se certifican firmas, reproducción completa del video de Martínez, permisos de Google Drive, estado remoto actual de Issues ni entrega en Canvas.
- Los estados completos se refieren a lo expresamente comprobado, no a una certificación integral del proyecto.

## 2. Estado de Git y concurrencia

Rama activa: `main`. Al inicio, `main` y `origin/main` apuntaban a `10792e2`; existían cambios locales de Claude en `reportes/ejecucion-automatizada.md` y un Excel de Teddy sin seguimiento. Durante la auditoría otro proceso avanzó ambas referencias a `c1c032c` e incorporó esos cambios. Esta auditoría no ejecutó operaciones de escritura Git. El corte de la comparación final es:

| Referencia | Commit |
|---|---|
| main / origin/main | `c1c032cca488efe455b8b5d54b968cd053d0c4f7` |
| origin/feature/dayanna | `f7bb0c88a9008726200c008fbd03be53a1ce78b5` |
| origin/feature/martinez132 | `8a0e4982cad0e1915c965ec3107f89bd933b5466` |
| feature/teddy / origin/feature/teddy | `a5a599d` |

En ese corte, `main` tiene 15 commits alcanzables, distribuidos en fechas del 1, 9, 10, 17, 23 y 24 de octubre. Supera el mínimo numérico de diez y tiene actividad en las cuatro semanas; no se afirma que exista equilibrio individual solo por ese conteo.

Las plantillas y guías del catedrático continúan sin seguimiento. No confundir archivos sin seguimiento con archivos inexistentes ni asumir que estarán disponibles en una descarga del repositorio. El presente informe también queda sin seguimiento hasta que el responsable decida incorporarlo.

## 3. Inventario de entregables obligatorios

Prioridades: P0 = bloqueo o faltante esencial antes de entregar; P1 = reconciliación y revisión final; P2 = conservación y comprobación de respaldo. G indica requisito de la guía grupal complementaria.

| Entregable y requisito | Archivo o fuente existente | Estado | Faltante o acción | Responsable / prioridad |
|---|---|---|---|---|
| Plan QA: alcance, exclusiones, estrategia, recursos, criterios, cronograma y métricas | `documentacion/plan-qa/plan-aseguramiento-calidad.md` | Incompleto | Falta cronograma y métricas desarrolladas; reconciliar conteo de regresión (declara 11, son 20), referencia a numeración antigua de casos y precisión de smoke <2 min | Dayana / P0 |
| 23 casos manuales diseñados y ejecutados | `documentacion/casos-prueba/casos-funcionales-F01-F05.md` y `Casos_Prueba_Martinez_F06-F09.xlsx` | Incompleto | Hay 13 diseñados de Dayana en PENDIENTE y 10 con ejecución declarada de Martínez (9 Pass, 1 Fail). Faltan ejecución, resultados, datos exactos y evidencias de los 13; reconciliar TC-N03 de Martínez | Dayana y Martínez / P0 |
| Casos automatizados de Teddy en plantilla | `documentacion/casos-prueba/Casos_Prueba_Hernandez_Automatizacion.xlsx` | Completo como inventario automatizado | 25 registros; 24 Pass y un Fail funcional esperado. No sumarlos al mínimo manual. Preservar trabajo de Claude | Teddy / P2 |
| Matriz y cobertura | `documentacion/trazabilidad/matriz-trazabilidad.md` | Incompleto | Ya integrada; falta cierre de ejecución manual, actualizar Issue #3 y evidencias automatizadas. Distinguir cobertura diseñada de ejecución aprobada | Dayana / P1 |
| 7 defectos reales, con todos los campos | `reportes/defectos/Reporte_Defecto_DR-001_TC-N04.docx` | Incompleto | Un defecto localizado; faltan seis distintos, comprobados, con evidencia. No duplicar DR-001 por búsqueda/categoría o por navegador | Martínez y equipo / P0 |
| GitHub Issue por defecto | DR-001 enlaza Issue #3; `evidencias/github-issues/issue-3-DR-001.png` | Incompleto | Solo existe respaldo local de uno. Confirmar estado remoto y equivalencia con reporte; completar restantes | Equipo / P0 |
| Exploración grupal de al menos 30 min | `reportes/pruebas-exploratorias-martinez.md`, captura EXP-05 | Completo documentalmente | Registra 30 minutos aproximados y hallazgo relacionado con DR-001. Integrar al informe | Martínez / P2 |
| Suite POM, TypeScript, fixtures, hooks y etiquetas | `tests/`, `pages/`, `fixtures/`, `helpers/`, `test-data/` | Incompleto respecto de alcance smoke | 5 Page Objects, fixtures tipados, parametrización y 25 tests por motor. Smoke no comprueba explícitamente formulario de login ni logout; logout está en regresión | Teddy / P1 |
| Ejecución Chromium, Firefox y WebKit | `evidencias/automatizadas/teddy/`, reporte técnico | Completo para respaldo histórico y smoke actual | Capturas históricas de 25 resultados por motor; smoke actual 5/5 por motor. No se volvió a ejecutar la regresión completa durante esta auditoría | Teddy / P2 |
| Reporte HTML final en reportes y captura comparativa | `playwright-report/index.html`; captura histórica HTML WebKit | Incompleto | HTML local contiene 24 omitidas y ninguna prueba ejecutada. Falta HTML final completo preservado en `reportes/` y captura comparativa de navegadores | Teddy / P0 |
| Reporte de ejecución consolidado | `reportes/ejecucion-automatizada.md`, Excel manual | Incompleto | Falta cierre manual total, cobertura y resumen de estabilidad. El reporte automatizado no sustituye resultados manuales | Teddy y equipo / P0 |
| Un test inestable real identificado y corregido | `reportes/analisis-tests-fragiles.md` | Incompleto | Hay análisis honesto de riesgos; el propio documento declara que no existe flaky confirmado ni corrección demostrada. Faltan causa, cambio y corridas consecutivas | Dayana: documentación; Teddy: respaldo técnico / P0 |
| Informe formal Word y PDF, mínimo 15 páginas sin anexos | No localizado | Pendiente | Crear ambos formatos con nombre `048_Proyecto_[ApellidoIntegrante1]_[ApellidoIntegrante2]`; verificar extensión y presentación | Teddy: consolidación / P0 |
| Portada e índice paginado | No localizados | Pendiente | Logo, facultad, curso/código, catedrático, nombres y carnés, título, fecha e índice | Equipo / P0 |
| Introducción y objetivos | Solo material parcial en README y Plan QA | Incompleto | Integrar contexto, variante, roles, objetivo general y al menos cuatro específicos al informe | Consolidador / P0 |
| Marco teórico mínimo 2 páginas | No localizado | Pendiente | QA, 7 principios ISTQB, técnicas, ventajas y pirámide de automatización y ciclo del defecto, con citas verificadas | Equipo / P0 |
| Conclusión Teddy, mínimo media página | Aprobada en conversación, no en archivo | Pendiente de integración | Incorporar literalmente y verificar extensión con formato final | Teddy / P0 |
| Conclusiones Dayana y Martínez, media página cada una | No localizadas | Pendiente | Solicitar reflexiones reales: aprendizaje, sorpresa y aplicación profesional | Cada integrante / P0 |
| Al menos 3 recomendaciones fundamentadas | No localizadas como sección final | Pendiente | Relacionarlas con hallazgos comprobados, sin inventar defectos | Equipo / P0 |
| Al menos 5 referencias APA, Playwright y 2 libros del programa | Lista de recursos en PDF oficial | Pendiente | La lista del docente no equivale a bibliografía consultada del informe. Verificar fuentes y citas | Equipo / P0 |
| Anexos: capturas, terminal, HTML e Issues | Archivos dispersos en `evidencias/` | Incompleto | Indizar y enlazar al informe; incorporar faltantes y preservar HTML real | Equipo / P1 |
| README de instalación, nombres/carnés, variante, comandos, estructura e Issues | `README.md` | Incompleto | Dos integrantes pendientes, carnés ausentes, faltan clone/cd; afirma que no hay defectos y fase base, pese a DR-001 y suite implementada | Documentación general / P1 |
| Video manual individual Teddy | `evidencias/videos/teddy/README.md`, enlazado desde reporte técnico | No verificable en acceso/contenido | Enlace Drive documentado; validar sin sesión y confirmar contenido accesible al docente | Teddy / P0 |
| Video manual individual Martínez | `evidencias/videos/martinez/Ejecucion_Manual_Milton_F06-F09.mp4` | No verificable íntegramente | Archivo de 61.684.155 bytes presente; no se reprodujo completo. Falta enlace en un índice general de videos | Martínez / P1 |
| Video manual individual Dayana | No localizado | Pendiente | Recibir video o enlace accesible e índice | Dayana / P0 |
| G: acta firmada en PDF | `documentacion/1.1. Acta_Constitucion_Equipo_Sistemas.docx` | Incompleto | Ejemplo con integrantes ficticios; faltan datos reales, SMART, RACI, acuerdos y PDF con firmas auténticas | Equipo / P0 |
| G: WBS y PDF | `documentacion/1.2. Cronograma_WBS_Sistemas.xlsx` | Incompleto | Ejemplo de gestión académica, no cronograma QA del equipo; faltan planificación real, responsables, hitos y PDF | Equipo / P0 |
| G: tres minutas reales | `documentacion/2.2. Minuta_Reunion_Sistemas_Ejemplo (3).docx` y `(4).docx` | Pendiente | Dos ejemplos idénticos no acreditan reuniones. Recibir registros reales de tres reuniones | Equipo / P0 |
| G: política interna consensuada | `documentacion/3. Politica_Trabajo_Grupo_Sistemas.docx` | Incompleto | Acuerdo genérico no formalizado; confirmar canales, reglas, resolución de conflictos, participación, sanciones y aprobación | Equipo / P0 |
| G: carta reflexiva grupal de una página | No localizada | Pendiente | Reflexión conjunta real, distinta de las conclusiones individuales | Equipo / P0 |
| G: control de versiones / mínimo diez commits del proyecto | Historial de main | Completo en criterio numérico y temporal | 15 commits con actividad en cuatro semanas; no certificar equidad individual solo por el total | Equipo / P2 |
| Acceso del docente y entrega en Canvas | Sin comprobante local | No verificable | Confirmar repositorio público o acceso concedido, archivos y enlace entregados antes de 09:00 | Encargado de entrega / P0 |

La matriz independiente es un entregable de organización del equipo; el PDF exige cobertura y vínculos entre artefactos, pero no impone un archivo separado con ese nombre. Las pruebas de accesibilidad y GitHub Actions son bonos, no bloqueos de entrega. Los videos automáticos ante fallos son recomendados; no equivalen al video manual individual obligatorio.

## 4. Estado por integrante

### Teddy

Suite y reporte técnico existentes; inventario Excel de 25 pruebas incorporado por otro proceso durante la auditoría. Siete capturas automatizadas conservadas: tres terminales por navegador, HTML WebKit, smoke, regression y falla esperada TC-N04; además índice README. Video Drive documentado, acceso externo pendiente. Conclusión aprobada en conversación, todavía no incorporada al documento final. Los casos de uso y Excel en elaboración por Claude no se tocaron. No se localizaron casos de uso separados; el PDF revisado no los enumera como archivo independiente obligatorio.

### Dayana

Plan QA, 13 casos diseñados, matriz y análisis documental de estabilidad están integrados en main y provienen de `origin/feature/dayanna`. Los 13 casos declaran explícitamente PENDIENTE; no existen las capturas previstas en `evidencias/casos-manuales/dayanna/`. El Plan necesita reconciliaciones. El análisis no demuestra flaky corregido. Conclusión y video no localizados. Recibir el trabajo más reciente de su computadora antes de concluir que sus documentos definitivos faltan.

### Martínez (Milton)

Diez casos con resultados declarados, diez capturas, exploración, un defecto con Issue y un video local. La rama remota tiene un Excel actualizado aún distinto del de main. La captura TC-N03 actual ya coincide exactamente con la de su rama. Conclusión y seis defectos adicionales no localizados.

## 5. Pruebas y validaciones ejecutadas en esta auditoría

| Comprobación | Resultado real |
|---|---|
| `npm run typecheck` | Aprobada, sin errores TypeScript |
| `node node_modules/@playwright/test/cli.js test --list --reporter=list` | 75 pruebas descubiertas, 3 archivos, 25 por navegador; esto es descubrimiento, no ejecución |
| Primer intento smoke dentro del sandbox | Bloqueado por `spawn EPERM` al crear worker; no es defecto de OpenCart |
| Reintento autorizado fuera del sandbox, smoke en los tres motores | **15 passed (2.2m): Chromium 5, Firefox 5, WebKit 5; cero fallos** |
| Integridad estructural PNG mediante Pillow | 20 imágenes verificadas, cero errores de decodificación |
| Enlaces Markdown locales explícitos | Sin destinos inexistentes en la comprobación de enlaces relativos con sintaxis Markdown; no cubre rutas futuras escritas como código |
| `git diff --check` | Sin problemas en el momento de la comprobación; el informe nuevo se revisa por separado |
| Inspección HTML existente | 24 total, 24 skipped, 0 expected/unexpected/flaky, tres nombres de proyecto. No es evidencia de 24 aprobadas |
| Acceso web al video Drive y al Issue #3 | La herramienta no pudo recuperar ambas páginas. No se concluye que estén rotos o sean privados |

Comando efectivo del smoke:

```powershell
node node_modules/@playwright/test/cli.js test --grep '@smoke' --reporter=list --workers=1 --retries=0 --global-timeout=180000 --output=<directorio-temporal-nuevo>
```

Salida aislada del reintento: `C:\Users\i7del\AppData\Local\Temp\qa-entrega-1565a2fcf61b4e9aac71a3555b43e835`. No se generó un HTML nuevo, ni se sobrescribieron `playwright-report/`, `test-results/` o evidencias oficiales. La salida de consola dio los resultados indicados; no se creó una captura nueva de terminal. Los 2.2 minutos son de la ejecución conjunta de quince pruebas con un worker, no la duración smoke de un solo navegador.

No se ejecutó la regresión completa ni corridas repetidas de estabilidad en esta auditoría. Las 75 aprobadas históricas del reporte son información previa, no resultados nuevos de esta revisión.

## 6. Configuración y consistencia técnica

- Playwright configura Chromium, Firefox y WebKit, `baseURL` de Abstracta, reporte HTML y screenshots `only-on-failure`.
- No hay reintentos configurados; `trace: 'on-first-retry'` no produce trazas durante una corrida sin reintentos. Es una limitación de diagnóstico, no prueba de fallo funcional.
- No hay video automático configurado. El PDF lo recomienda; el requisito de video manual individual es distinto y tiene penalización explícita por ausencia.
- La suite descubierta contiene 5 smoke, 10 regresiones de autenticación y 10 regresiones de producto/perfil por motor. Los mínimos cuantitativos se cumplen. Faltan las comprobaciones explícitas de formulario de login y logout dentro de smoke requeridas por la sección 6.2; logout sí existe en regresión.
- POM, fixtures, hooks y pruebas parametrizadas presentes. `.npmrc` mantiene `ignore-scripts=true`.
- TC-N04 usa `test.fail()` por DR-001: el runner lo cuenta como resultado esperado si falla de la forma prevista. El Excel de Teddy lo registra como Fail funcional. Explicar ambos criterios; no declarar que la tienda está libre de defectos.
- Tres capturas históricas de terminal documentan los tres motores; la captura HTML histórica corresponde a WebKit. No acreditar con ella un HTML comparativo completo.

## 7. Duplicados, inconsistencias y referencias

1. Las minutas `(3)` y `(4)` son duplicados exactos: SHA-256 común `1b188226a67a84b8fdcd622d28428a16ad34d0579bfad78de30217f5581fde8e`. Son ejemplos de una reunión de 2025 sobre otro proyecto.
2. El Excel de Martínez en main conserva una hoja ejemplo de otra aplicación. Su rama elimina esa hoja y conserva los diez casos reales; no se debe contar el caso de ejemplo como ejecución.
3. TC-N03 en el Excel actual de main describe nombre/comentario/calificación vacíos y mensaje de calificación. La captura actual muestra Apple Cinema 30 pulgadas, nombre vacío, comentario lleno y validación de longitud del nombre. La versión de la rama de Martínez coincide con esa captura.
4. TC-N01 en el Excel actual prescribe tres categorías pero evidencia solo Tabletas. La rama de Martínez precisa el caso a Tabletas; mejora la correspondencia entre procedimiento y evidencia.
5. Tras adoptar el Excel nuevo, TC-N03 manual y el test automatizado del mismo ID ya no describirán exactamente el mismo escenario: el test actual deja todo vacío. Reconciliar la trazabilidad y el reporte técnico; no afirmar equivalencia exacta solo por compartir ID.
6. DR-001 usa una cadena de caracteres especiales distinta de la del Excel (el Excel incluye `<>`). Puede reproducir el mismo defecto, pero deben documentarse los datos realmente usados y no afirmar coincidencia literal sin aclaración.
7. La matriz todavía marca pendiente el Issue de DR-001 aunque el DOCX contiene enlace real a `https://github.com/leotedd/Proyecto-QA-Tienda/issues/3` y hay captura local. No confundir existencia documentada con verificación remota actual.
8. La frase de la matriz sobre cobertura manual y automatizada significa diseño/cobertura prevista, no que los trece casos pendientes hayan pasado.
9. El Plan QA declara 11 regresiones; el descubrimiento real da 20. También conserva una advertencia de numeración previa ya reconciliada en los casos actuales y carece de cronograma/métricas desarrolladas.
10. README afirma ausencia de defectos, integrantes pendientes y fase base; contradice DR-001 y los entregables integrados. Faltan carnés y pasos clone/cd.
11. El análisis de estabilidad denomina bono al video automático en una recomendación; en la sección 6.3 del PDF es recomendado, mientras los bonos son axe-core y GitHub Actions.
12. No se encontró índice general que enlace el video de Martínez; Teddy sí tiene índice con enlace Drive y referencia desde su reporte técnico. Dayana no tiene video o enlace localizado.
13. No se encontraron enlaces Markdown relativos rotos en el recorrido; sí existen rutas de evidencias futuras que el documento de Dayana identifica expresamente como pendientes. No atribuirles existencia.

## 8. Comparación de ramas y riesgo de pérdida

### Dayana frente a main

`origin/feature/dayanna` es ancestro de main. `git diff --name-status main...origin/feature/dayanna` no presenta aportes exclusivos pendientes de esa referencia. Su Plan, casos, matriz y análisis ya están integrados.

La comparación directa de árboles `git diff main origin/feature/dayanna` muestra ausencias de documentos y evidencias de Teddy en la rama antigua. La letra D significa que el segundo árbol no tiene esos archivos; **no demuestra que un merge normal vaya a eliminarlos**. El riesgo real sería reemplazar main por una copia de ese árbol, copiar carpetas completas, hacer una restauración masiva o aceptar resoluciones que descarten los archivos posteriores.

### Martínez frente a main

La comparación desde el ancestro común (`main...origin/feature/martinez132`) muestra dos modificaciones históricas: Excel de Martínez y TC-N03.png. Sin embargo, la comparación directa final por ruta muestra que **solo el Excel continúa distinto**. El PNG ya fue incorporado a main con el mismo contenido.

| Ruta candidata | Análisis | Recomendación sin integrar todavía |
|---|---|---|
| `documentacion/casos-prueba/Casos_Prueba_Martinez_F06-F09.xlsx` | La rama tiene 12.724 bytes frente a 87.917 en main. Diferencia explicada en parte por quitar la hoja ejemplo; hay cambios semánticos reales en TC-N01 y TC-N03. Conserva los 10 casos y estados 9 Pass/1 Fail | Único candidato pendiente para adopción individual. Requiere autorización para sustituir la versión existente y revisión de Martínez; conservar versión anterior según procedimiento acordado |
| `evidencias/casos-manuales/martinez/TC-N03.png` | Mismo blob Git en ambas: `3d317ddd5bc4663a3170cbdf1d6e87ab28251bac` | Ya integrado. No copiar ni sobrescribir |

El Excel solo debe aceptarse junto con una revisión de trazabilidad que explique el nuevo alcance de TC-N03; no modificar tests automáticamente para forzar coincidencia.

La rama antigua de Martínez tampoco contiene los casos/matriz de Dayana ni el conjunto posterior de Teddy. No adoptar su árbol completo. No hay archivos nuevos exclusivos pendientes que puedan añadirse sin tocar una ruta existente: el candidato útil es una actualización, no un archivo ausente.

Durante esta auditoría otro agente actualizó main. Repetir comparaciones antes de cualquier integración futura y coordinar una pausa de escritura. Ninguna recomendación de este informe autoriza por sí sola merge, checkout, restore o sobrescritura.

## 9. Faltantes y orden de prioridades

### P0: resolver o declarar expresamente antes de entregar

1. Recibir las trece ejecuciones reales de Dayana con estados, datos y evidencias; validar que totalizan 23 casos manuales con los diez de Martínez. Los 25 casos automatizados de Teddy no reemplazan el mínimo manual.
2. Recibir seis defectos distintos adicionales con pruebas reproducibles, evidencia e Issue. Si no existen, declarar incumplimiento; no inventarlos ni dividir DR-001 artificialmente.
3. Recibir informe Word/PDF de mínimo 15 páginas sin anexos con todas las secciones, marco teórico de dos páginas, bibliografía mínima y conclusiones reales de cada integrante.
4. Incorporar literalmente la conclusión aprobada de Teddy y comprobar media página por integrante con la maquetación final.
5. Completar acta firmada, WBS PDF, política, tres minutas basadas en registros reales y carta reflexiva de una página. Las plantillas no son entregables finales.
6. Obtener evidencia de un flaky real corregido si existe; la inspección de riesgos y el smoke actual no cumplen ese requisito por sí solos.
7. Validar acceso al video de Teddy y recibir video de Dayana; comprobar reproducción del de Martínez. El enunciado indica penalización de cinco puntos por ausencia de video manual individual.
8. Generar y conservar HTML final con datos ejecutados y comparación multinavegador; no entregar el actual de 24 omitidas como corrida aprobada.

### P1: reconciliar y verificar

- Adoptar, solo con autorización, el Excel actualizado de Martínez, que coincide con la captura existente; actualizar referencias por sus respectivos autores.
- Pedir a Dayana el cierre de Plan y matriz; pedir al responsable del README su actualización con datos confirmados.
- Confirmar nombres completos, carnés, código del curso, catedrático y formato institucional antes de cerrar portada/bibliografía.
- Revisar que el paquete que recibirá el docente incluya archivos locales no versionados que deban entregarse, sin operaciones Git de esta auditoría.

## 10. Correcciones realizadas y preservación

La única modificación documental realizada por esta auditoría es la creación de `reportes/AUDITORIA_FINAL_ENTREGA_CODEX.md`, cuya inexistencia se comprobó antes de escribir.

No se corrigieron archivos existentes: además de la prohibición de sobrescribir, hay trabajo concurrente de Claude, Dayana y Martínez. Las correcciones necesarias se documentan aquí para sus responsables.

No se ejecutaron git add, commit, push, merge, reset, rebase, clean ni cambio de rama; tampoco se modificó identidad Git. No se eliminaron ni movieron archivos, no se editaron Excel, casos, pruebas, fixtures, Page Objects, configuración ni documentos individuales. Las pruebas nuevas usaron una carpeta temporal única y reporter de consola.

## 11. Checklist final y orden de integración propuesto

- [x] Confirmar rama activa y referencias disponibles.
- [x] Leer requisitos oficiales y guía grupal.
- [x] Confirmar integración de los documentos disponibles de Dayana.
- [x] Identificar actualización individual pendiente de Martínez y PNG ya integrado.
- [x] Verificar presencia e integridad estructural de capturas automatizadas históricas.
- [x] Validar TypeScript y descubrimiento de 75 pruebas.
- [x] Ejecutar 15 smoke aprobadas en Chromium, Firefox y WebKit sin sobrescribir reportes.
- [ ] Recibir y validar los trece resultados manuales pendientes.
- [ ] Alcanzar siete defectos reales y sus Issues verificables.
- [ ] Cerrar Plan, matriz y consistencia de TC-N03 por sus responsables.
- [ ] Demostrar un flaky real corregido y corridas de verificación.
- [ ] Obtener Word y PDF, 15 páginas sin anexos, dos de marco teórico y media por conclusión.
- [ ] Validar cinco referencias APA con Playwright y dos libros del curso.
- [ ] Completar documentos grupales auténticos y carta reflexiva.
- [ ] Validar tres videos individuales y permisos sin sesión.
- [ ] Preservar HTML final ejecutado y captura comparativa.
- [ ] Actualizar README y nombres/carnés confirmados.
- [ ] Comprobar acceso del docente, paquete final y recepción en Canvas antes de 09:00.

Orden recomendado, que deberá ejecutar el responsable con autorización independiente:

1. Acordar cierre de escritura entre integrantes; revisar estado y guardar respaldo de los archivos y evidencias actuales, incluidos los no versionados.
2. Recibir el último trabajo de Dayana y comparar solo sus rutas; sus referencias hoy disponibles ya están en main.
3. Revisar con Martínez su Excel y adoptar individualmente esa actualización si se aprueba; no reemplazar su carpeta ni copiar TC-N03 nuevamente.
4. Reconciliar matriz y reporte técnico con los casos definitivos, conservando las diferencias entre manual/auto y falla funcional/resultado esperado del runner.
5. Incorporar el trabajo final de Claude únicamente después de que confirme su cierre; el Excel de Teddy observado ya está integrado.
6. Consolidar informe académico y anexos sin cambiar las fuentes originales. Validar datos, citas, extensión, paginación y enlaces en Word y PDF.
7. Preparar HTML final aislado, revisar el paquete de entrega y comprobar acceso/Canvas. Repetir la comparación de referencias si hubo nuevos avances concurrentes.

## 12. Veredicto de cierre

**NO LISTO** en el corte auditado. Hay una base técnica funcional y evidencias conservadas; los faltantes de ejecución manual, defectos y documentación académica son sustantivos, no simples ajustes de presentación. La aprobación smoke actual no subsana esos requisitos. Si no se completan antes de entregar, reportar sus estados reales y no afirmar cumplimiento total.
