import type { Browser, Page } from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { buildUniqueUser, type Credentials, type UserData } from '../test-data/users';

/**
 * Funciones reutilizables de autenticación usadas como precondición por
 * fixtures/index.ts. Las acciones sobre cada formulario viven en los Page
 * Objects; aquí solo se componen y se espera a que el flujo termine.
 */

/** Registra un usuario nuevo y espera la página de cuenta creada. */
export async function registerUser(page: Page, user: UserData = buildUniqueUser()): Promise<UserData> {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  await registerPage.register(user);
  await page.waitForURL(/route=account\/success/);
  return user;
}

/**
 * Crea una cuenta en un contexto aislado (sin dejar sesión abierta) para
 * reutilizar sus credenciales en otras pruebas.
 */
export async function createAccount(browser: Browser, baseURL: string | undefined): Promise<UserData> {
  const context = await browser.newContext({ baseURL });
  try {
    return await registerUser(await context.newPage());
  } finally {
    await context.close();
  }
}

/** Inicia sesión y espera a que se muestre "My Account". */
export async function loginAs(page: Page, credentials: Credentials): Promise<AccountPage> {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(credentials.email, credentials.password);
  await page.waitForURL(/route=account\/account/);
  return new AccountPage(page);
}
