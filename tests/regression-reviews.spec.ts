// Suite de regresión - Producto, reseñas, perfil y contraseña (@regression)
//
// Propósito: validar funcionalidades de producto/reseñas, edición de perfil
// y cambio de contraseña en OpenCart Demo. Las reseñas y la búsqueda
// automatizan los casos manuales F06-F09
// (documentacion/casos-prueba/Casos_Prueba_Martinez_F06-F09.xlsx).

import { test, expect } from '../fixtures';
import { loginAs } from '../helpers/auth';
import {
  invalidReviewCases,
  products,
  repeatedReview,
  reviewMessages,
  searchData,
  validReviewCases,
} from '../test-data/reviews';
import { authMessages, NEW_TEST_PASSWORD, updatedProfile } from '../test-data/users';

test.describe('Reseñas de producto @regression', () => {
  for (const { id, title, product, review } of validReviewCases) {
    test(`${id}: ${title}`, async ({ productPage }) => {
      await productPage.goto(product.id);
      await productPage.writeReview(review);

      await expect(productPage.reviewAlert).toHaveClass(/alert-success/);
      await expect(productPage.reviewAlert).toContainText(reviewMessages.success);
    });
  }

  test('TC-V03: calificar el mismo producto más de una vez responde de forma controlada', async ({ productPage }) => {
    await productPage.goto(products.macBook.id);
    await productPage.writeReview(repeatedReview);
    await expect(productPage.reviewAlert).toContainText(reviewMessages.success);

    await productPage.goto(products.macBook.id);
    await productPage.writeReview(repeatedReview);
    await expect(productPage.reviewAlert).toHaveClass(/alert-success/);
    await expect(productPage.reviewAlert).toContainText(reviewMessages.success);
  });

  for (const { id, title, product, review, expectedError } of invalidReviewCases) {
    test(`${id}: ${title}`, async ({ productPage }) => {
      await productPage.goto(product.id);
      await productPage.writeReview(review);

      await expect(productPage.reviewAlert).toHaveClass(/alert-danger/);
      await expect(productPage.reviewAlert).toContainText(expectedError);
    });
  }
});

test.describe('Búsqueda de productos @regression', () => {
  test('TC-N04: buscar caracteres especiales muestra un mensaje de búsqueda sin resultados', async ({ homePage }) => {
    test.info().annotations.push({
      type: 'defecto conocido',
      description: 'DR-001: sin coincidencias se muestra "Your shopping cart is empty!" en lugar del mensaje de búsqueda.',
    });
    // Defecto real documentado en DR-001: se espera que falle hasta que
    // OpenCart lo corrija. Si empieza a pasar, Playwright lo reportará.
    test.fail();

    await homePage.goto();
    await homePage.search(searchData.specialCharacters);

    await expect(homePage.pageHeading).toHaveText(`Search - ${searchData.specialCharacters}`);
    await expect(homePage.productTitles).toHaveCount(0);
    await expect(homePage.searchResultsMessage).toHaveText(searchData.expectedNoResultsMessage);
  });
});

test.describe('Perfil y contraseña @regression', () => {
  test('editar los datos personales del perfil', async ({ loggedInAccountPage }) => {
    await loggedInAccountPage.editProfile(updatedProfile);

    await expect(loggedInAccountPage.successAlert).toContainText(authMessages.profileUpdated);

    await loggedInAccountPage.openSideMenuOption('Edit Account');
    await expect(loggedInAccountPage.firstNameInput).toHaveValue(updatedProfile.firstName);
    await expect(loggedInAccountPage.lastNameInput).toHaveValue(updatedProfile.lastName);
    await expect(loggedInAccountPage.telephoneInput).toHaveValue(updatedProfile.telephone);
  });

  test('cambiar la contraseña permite iniciar sesión con la nueva', async ({ newUser, accountPage, loginPage, page }) => {
    await accountPage.goto();
    await accountPage.changePassword(NEW_TEST_PASSWORD);
    await expect(accountPage.successAlert).toContainText(authMessages.passwordUpdated);

    await accountPage.logout();

    // La contraseña anterior ya no debe funcionar.
    await loginPage.goto();
    await loginPage.login(newUser.email, newUser.password);
    await expect(loginPage.warningAlert).toContainText(authMessages.loginFailed);

    await loginAs(page, { email: newUser.email, password: NEW_TEST_PASSWORD });
    await expect(accountPage.pageHeading).toHaveText('My Account');
  });
});
