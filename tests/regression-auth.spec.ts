// Suite de regresión - Autenticación y registro (@regression)
//
// Propósito: validar los flujos de inicio de sesión, cierre de sesión y
// registro de usuarios en OpenCart Demo. Parte del caso documentado
// "Registro de usuario satisfactorio" (hoja "Suite de pruebas") y del
// alcance de autenticación/registro definido en el README.

import { test, expect } from '../fixtures';
import {
  authMessages,
  buildUniqueUser,
  invalidLoginCases,
  registerRequiredFieldErrors,
} from '../test-data/users';

test.describe('Registro de usuario @regression', () => {
  test.beforeEach(async ({ registerPage }) => {
    await registerPage.goto();
  });

  test('registro de usuario satisfactorio con datos válidos', async ({ registerPage, accountPage, page }) => {
    await registerPage.register(buildUniqueUser());

    await expect(page).toHaveURL(/route=account\/success/);
    await expect(page).toHaveTitle(authMessages.accountCreatedTitle);
    await expect(accountPage.content).toContainText(authMessages.accountCreated);
  });

  test('el registro con campos obligatorios vacíos muestra la validación de cada campo', async ({ registerPage }) => {
    await registerPage.continueButton.click();

    await expect(registerPage.fieldError(registerPage.firstNameInput)).toHaveText(registerRequiredFieldErrors.firstName);
    await expect(registerPage.fieldError(registerPage.lastNameInput)).toHaveText(registerRequiredFieldErrors.lastName);
    await expect(registerPage.fieldError(registerPage.emailInput)).toHaveText(registerRequiredFieldErrors.email);
    await expect(registerPage.fieldError(registerPage.telephoneInput)).toHaveText(registerRequiredFieldErrors.telephone);
    await expect(registerPage.fieldError(registerPage.passwordInput)).toHaveText(registerRequiredFieldErrors.password);
  });

  test('el registro sin aceptar la política de privacidad es rechazado', async ({ registerPage, page }) => {
    await registerPage.register(buildUniqueUser(), { acceptPrivacyPolicy: false });

    await expect(registerPage.warningAlert).toContainText(authMessages.privacyPolicy);
    await expect(page).toHaveURL(/route=account\/register/);
  });

  test('el registro con un correo ya registrado es rechazado', async ({ registerPage, registeredUser }) => {
    await registerPage.register({ ...buildUniqueUser(), email: registeredUser.email });

    await expect(registerPage.warningAlert).toContainText(authMessages.emailAlreadyRegistered);
  });

  test('el registro con confirmación de contraseña distinta es rechazado', async ({ registerPage }) => {
    await registerPage.register(buildUniqueUser(), { confirmPassword: 'OtraClave#2026' });

    await expect(registerPage.fieldError(registerPage.confirmPasswordInput)).toHaveText(authMessages.passwordMismatch);
  });
});

test.describe('Inicio y cierre de sesión @regression', () => {
  test('login con credenciales válidas redirige a My Account', async ({ loginPage, accountPage, registeredUser, page }) => {
    await loginPage.goto();
    await loginPage.login(registeredUser.email, registeredUser.password);

    await expect(page).toHaveURL(/route=account\/account/);
    await expect(accountPage.pageHeading).toHaveText('My Account');
  });

  for (const { name, credentials } of invalidLoginCases) {
    test(`login rechazado: ${name}`, async ({ loginPage, registeredUser, page }) => {
      const { email, password } = credentials(registeredUser);

      await loginPage.goto();
      await loginPage.login(email, password);

      await expect(loginPage.warningAlert).toContainText(authMessages.loginFailed);
      await expect(page).toHaveURL(/route=account\/login/);
    });
  }

  test('cerrar sesión finaliza la sesión del usuario', async ({ loggedInAccountPage, page }) => {
    await loggedInAccountPage.logout();

    await expect(page).toHaveURL(/route=account\/logout/);
    await expect(page).toHaveTitle(authMessages.logoutTitle);
    await expect(loggedInAccountPage.content).toContainText(authMessages.loggedOut);

    // Al volver a "My Account" sin sesión, OpenCart redirige al login.
    await loggedInAccountPage.goto();
    await expect(page).toHaveURL(/route=account\/login/);
  });
});
