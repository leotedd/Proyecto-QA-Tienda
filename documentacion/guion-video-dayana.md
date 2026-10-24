# Guion del video individual — Dayana

> **Estado del video:** existe un archivo en
> `evidencias/videos/dayana/Video_Pruebas_Manuales_Dayana_F01.mp4`. Su nombre
> indica cobertura de **F01**. Este guion sirve para **verificar** que el video
> cumpla el requisito del catedrático (demostración individual de pruebas
> manuales) y, si hiciera falta, para regrabarlo cubriendo más casos.
>
> No se afirma que el video esté completo ni verificado en su contenido: debe
> revisarlo Dayana.

## Qué exige el catedrático

El enunciado penaliza la ausencia de "video de evidencia de pruebas manuales de
forma individual". Es decir, cada integrante demuestra, por sí misma, la
ejecución de sus pruebas manuales.

## Duración sugerida

De 3 a 6 minutos, pantalla compartida con navegador visible (Chrome).

## Guion (qué decir y mostrar)

1. **Presentación (15–20 s).**
   - "Soy Dayana, integrante del Grupo 10. Presento la ejecución manual de mis
     casos de prueba sobre OpenCart Demo de Abstracta."
   - Mostrar el repositorio y el archivo
     `documentacion/casos-prueba/Casos_Prueba_Dayana_F01-F05.xlsx`.

2. **Demostración de casos (núcleo del video).** Ejecutar en vivo, narrando cada
   paso y mostrando el resultado real. Como mínimo, demostrar un caso por
   funcionalidad:
   - **F01 – Registro:** TC-R01 (registro válido) y un caso negativo, p. ej.
     TC-R02 (campos vacíos) o TC-R04 (email ya registrado).
   - **F02 – Inicio de sesión:** TC-L01 (login válido) y TC-L02 (contraseña
     incorrecta).
   - **F03 – Cierre de sesión:** TC-L03 (logout y redirección).
   - **F04 – Edición de perfil:** TC-P01 (editar teléfono y verificar que
     persiste).
   - **F05 – Cambio de contraseña:** TC-P03 (cambiar contraseña; la anterior deja
     de funcionar y la nueva sí).
   - *(Opcional)* **F08 adicionales:** TC-N05 (búsqueda de iPhone) y TC-N06
     (detalle del producto).

3. **Evidencias (30–45 s).**
   - Mostrar dónde se guardan las capturas:
     `evidencias/casos-manuales/dayana/`.
   - Relacionar cada captura con su caso (mismo nombre del Excel/Markdown).

4. **Resultados (30 s).**
   - Indicar el estado real observado de cada caso demostrado
     (aprobado/fallido/bloqueado). No afirmar resultados que no se vean en
     pantalla.
   - Si algún caso falla, mencionar si se documentará como defecto.

5. **Cierre (15–20 s).**
   - Resumir qué funcionalidades cubrió y mencionar que el resto del proyecto
     (suite automatizada, defectos F06–F09) corresponde al equipo.

## Checklist de verificación del video actual

- [ ] El video muestra a Dayana ejecutando **sus** casos (no los de otro
      integrante).
- [ ] Cubre al menos un caso por funcionalidad F01–F05.
- [ ] El navegador y los resultados son visibles y legibles.
- [ ] Los resultados mostrados coinciden con lo que luego se registre como estado
      real en el Excel/Markdown.
- [ ] El archivo abre y reproduce correctamente.
- [ ] El enlace o la ubicación del video queda registrado en el documento formal
      del equipo.

> Si el video actual solo cubre F01, se recomienda regrabarlo o agregar un
> segundo video que incluya F02–F05, para cumplir plenamente el requisito.
