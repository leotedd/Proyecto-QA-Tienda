import type { Locator, Page } from '@playwright/test';

/**
 * Page Object: Página de inicio de la tienda.
 *
 * Incluye el encabezado común (buscador y menú de categorías) y el listado
 * de productos, que comparten la página de inicio, las categorías y los
 * resultados de búsqueda.
 */
export class HomePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly mainMenu: Locator;
  readonly pageHeading: Locator;
  readonly productTitles: Locator;
  readonly searchResultsMessage: Locator;

  constructor(readonly page: Page) {
    this.searchInput = page.getByPlaceholder('Search');
    this.searchButton = page.locator('#search button');
    this.mainMenu = page.locator('#menu');
    this.pageHeading = page.locator('#content').getByRole('heading').first();
    this.productTitles = page.locator('.product-layout h4 a');
    // Párrafo que OpenCart muestra cuando la búsqueda no tiene resultados.
    this.searchResultsMessage = page.locator('#content > p').last();
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async search(term: string): Promise<void> {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  categoryLink(name: string): Locator {
    return this.mainMenu.getByRole('link', { name, exact: true });
  }

  async openCategory(name: string): Promise<void> {
    await this.categoryLink(name).click();
  }

  productLink(name: string): Locator {
    return this.productTitles.filter({ hasText: name }).first();
  }
}
