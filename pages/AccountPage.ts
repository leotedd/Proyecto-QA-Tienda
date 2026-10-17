import type { Locator, Page } from '@playwright/test';

/**
 * Page Object: Página "My Account" del usuario autenticado, incluyendo
 * la edición de perfil, el cambio de contraseña y el cierre de sesión.
 */
export class AccountPage {
  readonly pageHeading: Locator;
  readonly content: Locator;
  readonly sideMenu: Locator;
  readonly successAlert: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly continueButton: Locator;

  constructor(readonly page: Page) {
    this.pageHeading = page.locator('#content h1, #content h2').first();
    this.content = page.locator('#content');
    this.sideMenu = page.locator('#column-right');
    this.successAlert = page.locator('.alert-success');
    this.firstNameInput = page.getByLabel('First Name');
    this.lastNameInput = page.getByLabel('Last Name');
    this.telephoneInput = page.getByLabel('Telephone');
    this.passwordInput = page.getByLabel('Password', { exact: true });
    this.confirmPasswordInput = page.getByLabel('Password Confirm');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/index.php?route=account/account');
  }

  async openSideMenuOption(name: 'Edit Account' | 'Password' | 'Logout'): Promise<void> {
    await this.sideMenu.getByRole('link', { name, exact: true }).click();
  }

  async editProfile(data: { firstName: string; lastName: string; telephone: string }): Promise<void> {
    await this.openSideMenuOption('Edit Account');
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.telephoneInput.fill(data.telephone);
    await this.continueButton.click();
  }

  async changePassword(newPassword: string): Promise<void> {
    await this.openSideMenuOption('Password');
    await this.passwordInput.fill(newPassword);
    await this.confirmPasswordInput.fill(newPassword);
    await this.continueButton.click();
  }

  async logout(): Promise<void> {
    await this.openSideMenuOption('Logout');
  }
}
