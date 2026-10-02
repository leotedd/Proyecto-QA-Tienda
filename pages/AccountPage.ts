import type { Page } from '@playwright/test';

/**
 * Page Object: Página "My Account" del usuario autenticado.
 *
 * TODO: definir localizadores y métodos después de inspeccionar la
 * aplicación real, cuando se implementen los casos correspondientes.
 */
export class AccountPage {
  constructor(readonly page: Page) {}
}
