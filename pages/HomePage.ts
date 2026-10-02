import type { Page } from '@playwright/test';

/**
 * Page Object: Página de inicio de la tienda.
 *
 * TODO: definir localizadores y métodos después de inspeccionar la
 * aplicación real, cuando se implementen los casos correspondientes.
 */
export class HomePage {
  constructor(readonly page: Page) {}
}
