import type { Locator, Page } from '@playwright/test';

/**
 * Page Object: Página de inicio de sesión.
 */
export class LoginPage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly warningAlert: Locator;

  constructor(readonly page: Page) {
    this.emailInput = page.getByLabel('E-Mail Address');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.warningAlert = page.locator('.alert-danger');
  }

  async goto(): Promise<void> {
    await this.page.goto('/index.php?route=account/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
