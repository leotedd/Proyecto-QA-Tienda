# Casos de Prueba Manuales — F01–F05 (+ adicionales F08)

| Dato | Valor |
|------|-------|
| Proyecto | Proyecto-QA-Tienda – Proyecto Final de Aseguramiento de la Calidad |
| Grupo | 10 (Variante 2) |
| Aplicación bajo prueba | OpenCart Demo de Abstracta |
| URL | https://opencart.abstracta.us/ |
| Responsable | Dayana |
| Rama | `feature/dayanna` |
| Tipo de prueba | Manual funcional |
| Navegador de ejecución manual | Google Chrome (estable) – la versión exacta y Windows se registran en cada caso al ejecutar |

> **Numeración oficial (PDF del proyecto).** Este documento usa la numeración
> formal del enunciado: F01 Registro · F02 Inicio de sesión · F03 Cierre de
> sesión · F04 Edición de perfil · F05 Cambio de contraseña · F08 Navegación y
> búsqueda. Una versión previa de este archivo usaba una numeración propia
> (F03 búsqueda, F04 detalle, F05 carrito); esos casos se reubicaron: búsqueda y
> detalle pasan a F08 como **casos adicionales** y el caso de carrito se
> conserva como **anexo de referencia** por estar fuera de alcance.

> **Estado de ejecución.** Todos los casos están en `PENDIENTE`: aún no se han
> ejecutado manualmente. El "Resultado obtenido", el "Estado" y las evidencias
> se completan al ejecutar; no se marca ningún caso como `PASS` sin evidencia.

## Resumen

| ID | Funcionalidad | Caso | Prioridad | Estado |
|----|---------------|------|-----------|--------|
| TC-R01 | F01 Registro | Registro válido con todos los datos | Alta | PENDIENTE |
| TC-R02 | F01 Registro | Registro con campos obligatorios vacíos | Alta | PENDIENTE |
| TC-R03 | F01 Registro | Registro con contraseñas que no coinciden | Media | PENDIENTE |
| TC-R04 | F01 Registro | Registro con un email ya utilizado | Media | PENDIENTE |
| TC-L01 | F02 Inicio de sesión | Login con credenciales válidas | Alta | PENDIENTE |
| TC-L02 | F02 Inicio de sesión | Login con contraseña incorrecta | Alta | PENDIENTE |
| TC-L04 | F02 Inicio de sesión | Login con campos vacíos | Media | PENDIENTE |
| TC-L03 | F03 Cierre de sesión | Cierre de sesión y redirección | Alta | PENDIENTE |
| TC-P01 | F04 Edición de perfil | Actualizar datos del perfil y verificar persistencia | Alta | PENDIENTE |
| TC-P02 | F04 Edición de perfil | Dejar el campo Nombre vacío al editar el perfil | Media | PENDIENTE |
| TC-P03 | F05 Cambio de contraseña | Cambio de contraseña exitoso | Alta | PENDIENTE |
| TC-N05 | F08 Navegación/búsqueda (adicional) | Búsqueda de un producto desde el encabezado | Media | PENDIENTE |
| TC-N06 | F08 Navegación/búsqueda (adicional) | Visualización del detalle de un producto | Media | PENDIENTE |

Estados permitidos: `PENDIENTE`, `PASS`, `FAIL`, `BLOCKED`.

**Casos en este documento (Dayana): 13.** Combinados con los 10 de Milton
(F06–F09) suman **23 casos manuales**, el mínimo exigido al Grupo 10.

Mínimos del PDF por funcionalidad: F01 ≥3 (aquí 4 ✅) · F02/F03 ≥3 (aquí 4 ✅) ·
F04/F05 ≥2 (aquí 3 ✅).

---

## F01 – Registro de usuario

### TC-R01 – Registro válido con todos los datos requeridos

| Campo | Detalle |
|-------|---------|
| **ID** | TC-R01 |
| **Funcionalidad** | F01 – Registro de usuario |
| **Título** | Registro de nuevo usuario con datos válidos |
| **Prioridad** | Alta |
| **Precondición** | 1. Acceso a https://opencart.abstracta.us/. 2. No haber iniciado sesión. 3. El correo a utilizar no está registrado. |
| **Datos de prueba** | First Name: `Dayanna` · Last Name: `QA` · E-Mail: correo único `dayanna.qa.<AAAAMMDDhhmm>@example.com` (se registra el valor exacto al ejecutar) · Telephone: `5551234567` · Contraseña: definida al ejecutar (no se versiona) · Subscribe: `No` · Privacy Policy: marcada |
| **Pasos** | 1. Abrir el sitio. 2. My Account › Register. 3. Verificar la página "Register Account". 4. Completar First/Last Name, E-Mail y Telephone. 5. Completar Password y Password Confirm iguales. 6. Subscribe = No. 7. Marcar "I have read and agree to the Privacy Policy". 8. Clic en Continue. |
| **Resultado esperado** | Se crea la cuenta; aparece "Your Account Has Been Created!" y el menú My Account muestra "Logout". |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F01_TC-R01_cuenta_creada.png` |
| **Observaciones** | La cuenta creada se puede reutilizar como precondición de TC-L01. Ambiente (Chrome + versión + Windows) se registra al ejecutar. |

### TC-R02 – Registro con campos obligatorios vacíos

| Campo | Detalle |
|-------|---------|
| **ID** | TC-R02 |
| **Funcionalidad** | F01 – Registro de usuario |
| **Título** | Registro con todos los campos obligatorios vacíos |
| **Prioridad** | Alta |
| **Precondición** | Acceso al sitio; sin sesión; en la página "Register Account". |
| **Datos de prueba** | Todos los campos vacíos; Privacy Policy sin marcar. |
| **Pasos** | 1. My Account › Register. 2. Sin llenar ningún campo, clic en Continue. 3. Observar los mensajes de validación por campo. |
| **Resultado esperado** | El sistema impide el registro y muestra un mensaje de validación por cada campo obligatorio (First Name, Last Name, E-Mail, Telephone, Password) y la advertencia de la política de privacidad. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F01_TC-R02_validaciones.png` |
| **Observaciones** | Técnica: valores en la frontera (campos vacíos). |

### TC-R03 – Registro con contraseñas que no coinciden

| Campo | Detalle |
|-------|---------|
| **ID** | TC-R03 |
| **Funcionalidad** | F01 – Registro de usuario |
| **Título** | Password y Password Confirm distintas |
| **Prioridad** | Media |
| **Precondición** | Acceso al sitio; sin sesión; en "Register Account". |
| **Datos de prueba** | Datos válidos salvo: Password `QaTienda#2026` y Password Confirm `OtraClave#2026`. |
| **Pasos** | 1. Completar el formulario con datos válidos. 2. Ingresar contraseñas distintas en Password y Password Confirm. 3. Marcar Privacy Policy. 4. Clic en Continue. |
| **Resultado esperado** | El sistema impide el registro y muestra la validación "Password confirmation does not match password!" junto al campo de confirmación. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F01_TC-R03_password_mismatch.png` |
| **Observaciones** | Técnica: partición de equivalencia (clase inválida de confirmación). |

### TC-R04 – Registro con un email ya utilizado

| Campo | Detalle |
|-------|---------|
| **ID** | TC-R04 |
| **Funcionalidad** | F01 – Registro de usuario |
| **Título** | Registro con un correo ya registrado |
| **Prioridad** | Media |
| **Precondición** | Existe una cuenta ya registrada (p. ej. la de TC-R01). |
| **Datos de prueba** | Datos válidos nuevos, pero E-Mail = el correo ya registrado en TC-R01. |
| **Pasos** | 1. My Account › Register. 2. Completar datos válidos usando un correo ya registrado. 3. Marcar Privacy Policy. 4. Clic en Continue. |
| **Resultado esperado** | El sistema rechaza el registro y muestra "Warning: E-Mail Address is already registered!". |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F01_TC-R04_email_duplicado.png` |
| **Observaciones** | Técnica: partición de equivalencia (email duplicado). |

---

## F02 – Inicio de sesión

### TC-L01 – Login con credenciales válidas

| Campo | Detalle |
|-------|---------|
| **ID** | TC-L01 |
| **Funcionalidad** | F02 – Inicio de sesión |
| **Título** | Inicio de sesión con credenciales válidas |
| **Prioridad** | Alta |
| **Precondición** | Existe una cuenta registrada (la de TC-R01); sin sesión iniciada. |
| **Datos de prueba** | E-Mail: el correo registrado en TC-R01 · Contraseña: la definida al ejecutar. |
| **Pasos** | 1. My Account › Login. 2. Verificar la sección "Returning Customer". 3. Ingresar E-Mail y Password. 4. Clic en Login. |
| **Resultado esperado** | El usuario accede a "My Account"; se muestran las secciones My Account/My Orders/Newsletter y el menú muestra "Logout". |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F02_TC-L01_sesion_iniciada.png` |
| **Observaciones** | Depende de TC-R01; si no hay cuenta válida, el caso queda `BLOCKED`. |

### TC-L02 – Login con contraseña incorrecta

| Campo | Detalle |
|-------|---------|
| **ID** | TC-L02 |
| **Funcionalidad** | F02 – Inicio de sesión |
| **Título** | Inicio de sesión con contraseña incorrecta |
| **Prioridad** | Alta |
| **Precondición** | Existe una cuenta registrada; sin sesión iniciada. |
| **Datos de prueba** | E-Mail: correo registrado válido · Contraseña: incorrecta (p. ej. `ClaveErronea#000`). |
| **Pasos** | 1. My Account › Login. 2. Ingresar un correo válido y una contraseña incorrecta. 3. Clic en Login. |
| **Resultado esperado** | El sistema rechaza el acceso y muestra "Warning: No match for E-Mail Address and/or Password."; permanece en la página de login. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F02_TC-L02_password_incorrecta.png` |
| **Observaciones** | Técnica: partición de equivalencia (credencial inválida). |

### TC-L04 – Login con campos vacíos

| Campo | Detalle |
|-------|---------|
| **ID** | TC-L04 |
| **Funcionalidad** | F02 – Inicio de sesión |
| **Título** | Inicio de sesión con E-Mail y Password vacíos |
| **Prioridad** | Media |
| **Precondición** | Acceso al sitio; sin sesión; en la página "Account Login". |
| **Datos de prueba** | E-Mail: vacío · Password: vacío. |
| **Pasos** | 1. My Account › Login. 2. Dejar ambos campos vacíos. 3. Clic en Login. |
| **Resultado esperado** | El sistema no inicia sesión y muestra la advertencia de credenciales inválidas; permanece en la página de login. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F02_TC-L04_campos_vacios.png` |
| **Observaciones** | Técnica: valores en la frontera (campos vacíos). El mensaje exacto se registra tal como aparezca al ejecutar. |

---

## F03 – Cierre de sesión

### TC-L03 – Cierre de sesión y verificación de redirección

| Campo | Detalle |
|-------|---------|
| **ID** | TC-L03 |
| **Funcionalidad** | F03 – Cierre de sesión |
| **Título** | Cierre de sesión desde la cuenta |
| **Prioridad** | Alta |
| **Precondición** | Sesión iniciada (ejecutar tras TC-L01). |
| **Datos de prueba** | — (usa la sesión activa) |
| **Pasos** | 1. Con sesión iniciada, abrir el menú My Account. 2. Clic en Logout. 3. Verificar la página de cierre de sesión. 4. Volver a My Account y observar la redirección. |
| **Resultado esperado** | Se muestra la página "Account Logout" con el mensaje de sesión finalizada; al volver a My Account sin sesión, OpenCart redirige al login. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F03_TC-L03_logout.png` |
| **Observaciones** | — |

---

## F04 – Edición de perfil

### TC-P01 – Actualizar datos del perfil y verificar persistencia

| Campo | Detalle |
|-------|---------|
| **ID** | TC-P01 |
| **Funcionalidad** | F04 – Edición de perfil |
| **Título** | Editar un campo del perfil (teléfono) y confirmar que persiste |
| **Prioridad** | Alta |
| **Precondición** | Sesión iniciada. |
| **Datos de prueba** | Telephone nuevo: `5559998888` (u otro valor claramente de prueba). |
| **Pasos** | 1. My Account › Edit Account. 2. Cambiar el teléfono. 3. Clic en Continue. 4. Volver a Edit Account y verificar el valor guardado. |
| **Resultado esperado** | Se muestra el mensaje de éxito de actualización; al reabrir Edit Account, el teléfono refleja el nuevo valor. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F04_TC-P01_perfil_actualizado.png` |
| **Observaciones** | — |

### TC-P02 – Dejar el campo Nombre vacío al editar el perfil

| Campo | Detalle |
|-------|---------|
| **ID** | TC-P02 |
| **Funcionalidad** | F04 – Edición de perfil |
| **Título** | Validación del campo First Name vacío |
| **Prioridad** | Media |
| **Precondición** | Sesión iniciada; en Edit Account. |
| **Datos de prueba** | First Name: vacío; resto de campos sin cambios. |
| **Pasos** | 1. My Account › Edit Account. 2. Borrar el contenido de First Name. 3. Clic en Continue. |
| **Resultado esperado** | El sistema impide guardar y muestra la validación del campo First Name (longitud requerida). |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F04_TC-P02_nombre_vacio.png` |
| **Observaciones** | Técnica: valores en la frontera. El mensaje exacto se registra al ejecutar. |

---

## F05 – Cambio de contraseña

### TC-P03 – Cambio de contraseña exitoso

| Campo | Detalle |
|-------|---------|
| **ID** | TC-P03 |
| **Funcionalidad** | F05 – Cambio de contraseña |
| **Título** | Cambiar la contraseña y verificar el acceso con la nueva |
| **Prioridad** | Alta |
| **Precondición** | Sesión iniciada con una cuenta de prueba desechable. |
| **Datos de prueba** | Nueva contraseña: `QaTienda#2026b` (u otra claramente de prueba, no versionada). |
| **Pasos** | 1. My Account › Password. 2. Ingresar la nueva contraseña y su confirmación. 3. Clic en Continue. 4. Cerrar sesión. 5. Intentar login con la contraseña anterior. 6. Hacer login con la nueva contraseña. |
| **Resultado esperado** | Se muestra el mensaje de éxito del cambio; la contraseña anterior deja de funcionar (advertencia de credenciales inválidas) y la nueva permite iniciar sesión. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F05_TC-P03_cambio_password.png` |
| **Observaciones** | Usar una cuenta desechable para no afectar otras pruebas. |

---

## F08 – Navegación y búsqueda (casos adicionales)

> Estos dos casos provienen de la versión previa del documento (búsqueda y
> detalle). Se conservan como **casos adicionales** de F08, permitidos por el
> PDF. No duplican los casos de Milton (TC-N01 categoría Tabletas, TC-N02
> búsqueda de "MacBook"): aquí se usa el producto **iPhone**.

### TC-N05 – Búsqueda de un producto desde el encabezado (adicional)

| Campo | Detalle |
|-------|---------|
| **ID** | TC-N05 |
| **Funcionalidad** | F08 – Navegación y búsqueda (adicional) |
| **Título** | Búsqueda de "iPhone" desde la barra del encabezado |
| **Prioridad** | Media |
| **Precondición** | Acceso al sitio; el producto "iPhone" existe en el catálogo. |
| **Datos de prueba** | Término de búsqueda: `iPhone`. |
| **Pasos** | 1. Abrir el sitio. 2. Escribir `iPhone` en el buscador del encabezado. 3. Ejecutar la búsqueda. 4. Revisar los resultados. |
| **Resultado esperado** | Se muestra la página "Search - iPhone" con el producto iPhone en los resultados (nombre, imagen y precio). |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F08_TC-N05_busqueda_iphone.png` |
| **Observaciones** | No requiere sesión. Caso adicional (complementa TC-N02 de Milton con otro producto). |

### TC-N06 – Visualización del detalle de un producto (adicional)

| Campo | Detalle |
|-------|---------|
| **ID** | TC-N06 |
| **Funcionalidad** | F08 – Navegación y búsqueda (adicional) |
| **Título** | Detalle del producto "iPhone" |
| **Prioridad** | Media |
| **Precondición** | Acceso al sitio; el producto "iPhone" existe. |
| **Datos de prueba** | Producto: `iPhone`. |
| **Pasos** | 1. Buscar `iPhone` (como en TC-N05). 2. Clic en el nombre del producto. 3. Verificar nombre, imagen, precio, Product Code, Availability, campo Qty, botón Add to Cart y pestañas Description/Reviews. |
| **Resultado esperado** | Se muestra la página de detalle con toda la información principal del producto. |
| **Resultado obtenido** | Pendiente de ejecución |
| **Estado** | PENDIENTE |
| **Evidencia** | (por capturar) `evidencias/casos-manuales/dayana/F08_TC-N06_detalle_iphone.png` |
| **Observaciones** | Los valores concretos (precio, código, disponibilidad) se registran tal como aparezcan al ejecutar. |

---

## Anexo de referencia — Caso de carrito (FUERA DE ALCANCE)

> **No ejecutar como caso del proyecto.** Se conserva solo como referencia del
> trabajo previo. El PDF del proyecto excluye explícitamente del alcance "el
> proceso de compra/checkout completo", por lo que agregar al carrito queda
> fuera de las funcionalidades evaluadas (F01–F09). Si el equipo decidiera
> incorporarlo, debería justificarse y confirmarse con el catedrático.

| Campo | Detalle |
|-------|---------|
| **ID (referencia)** | REF-CART-01 |
| **Título** | Agregar un producto al carrito desde su página de detalle |
| **Objetivo** | Verificar que un producto se agrega al carrito y que el carrito refleja la cantidad y el total. |
| **Datos de prueba** | Producto: `iPhone` · Cantidad (Qty): `1`. |
| **Pasos** | 1. Verificar que el carrito muestra "0 item(s) - $0.00". 2. Abrir el detalle del iPhone. 3. Qty = 1. 4. Clic en Add to Cart. 5. Verificar el mensaje de éxito. 6. Verificar que el carrito del encabezado muestra "1 item(s)" y el precio. 7. Abrir el carrito y verificar el iPhone con cantidad 1. |
| **Resultado esperado** | Mensaje "Success: You have added iPhone to your shopping cart!"; carrito actualizado a 1 ítem. |
| **Estado** | NO APLICA (fuera de alcance) |

---

## Defectos relacionados

Ninguno registrado desde estos casos. Esta sección se actualiza solo si durante
la ejecución se confirma un comportamiento incorrecto real de OpenCart, el cual
se documentaría con la plantilla de defectos y su GitHub Issue correspondiente.
