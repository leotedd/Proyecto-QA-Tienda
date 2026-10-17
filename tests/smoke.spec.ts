// Suite de pruebas Smoke (@smoke)
//
// Propósito: verificar rápidamente que las funcionalidades críticas de
// OpenCart Demo (https://opencart.abstracta.us/) están disponibles.
// Basada en los casos F08 (TC-N01, TC-N02) y F06/F07 de
// documentacion/casos-prueba/Casos_Prueba_Martinez_F06-F09.xlsx.

import { test, expect } from '../fixtures';
import { products, searchData } from '../test-data/reviews';

test.describe('Smoke @smoke', () => {
  test('la página de inicio carga con el buscador y el menú de categorías', async ({ homePage, page }) => {
    await homePage.goto();

    await expect(page).toHaveTitle('Your Store');
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.categoryLink(searchData.category)).toBeVisible();
    await expect(homePage.productTitles.first()).toBeVisible();
  });

  test('TC-N02: buscar un producto por nombre muestra resultados', async ({ homePage }) => {
    await homePage.goto();
    await homePage.search(searchData.existingProduct);

    await expect(homePage.pageHeading).toHaveText(`Search - ${searchData.existingProduct}`);
    await expect(homePage.productLink(searchData.existingProduct)).toBeVisible();
  });

  test('TC-N01: navegar a una categoría del menú muestra sus productos', async ({ homePage }) => {
    await homePage.goto();
    await homePage.openCategory(searchData.category);

    await expect(homePage.pageHeading).toHaveText(searchData.category);
    await expect(homePage.productLink(searchData.categoryProduct)).toBeVisible();
  });

  test('el detalle de producto muestra el formulario de reseña', async ({ productPage }) => {
    await productPage.goto(products.macBook.id);
    await expect(productPage.productName).toHaveText(products.macBook.name);

    await productPage.openReviews();
    await expect(productPage.reviewTextInput).toBeVisible();
    await expect(productPage.submitReviewButton).toBeVisible();
  });

  test('un usuario registrado puede iniciar sesión', async ({ loginPage, accountPage, registeredUser, page }) => {
    await loginPage.goto();
    await loginPage.login(registeredUser.email, registeredUser.password);

    await expect(page).toHaveURL(/route=account\/account/);
    await expect(accountPage.pageHeading).toHaveText('My Account');
  });
});
