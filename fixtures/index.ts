import { test as base, expect } from '@playwright/test';
import { createAccount, loginAs, registerUser } from '../helpers/auth';
import { AccountPage } from '../pages/AccountPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { RegisterPage } from '../pages/RegisterPage';
import type { UserData } from '../test-data/users';

/**
 * Punto central de fixtures personalizados del proyecto.
 *
 * Los specs deben importar `test` y `expect` desde este archivo para
 * poder reutilizar los fixtures que se agregan aquí.
 */

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  accountPage: AccountPage;
  productPage: ProductPage;
  /** Página con sesión iniciada con `registeredUser`, ubicada en "My Account". */
  loggedInAccountPage: AccountPage;
  /** Usuario recién registrado en esta prueba (la página queda con su sesión). */
  newUser: UserData;
};

type WorkerFixtures = {
  /** Cuenta creada una vez por worker y compartida por sus pruebas. */
  registeredUser: UserData;
};

export const test = base.extend<PageFixtures, WorkerFixtures>({
  registeredUser: [
    async ({ browser }, use, workerInfo) => {
      await use(await createAccount(browser, workerInfo.project.use.baseURL));
    },
    { scope: 'worker' },
  ],

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  loggedInAccountPage: async ({ page, registeredUser }, use) => {
    await use(await loginAs(page, registeredUser));
  },

  newUser: async ({ page }, use) => {
    await use(await registerUser(page));
  },
});

export { expect };
