import type { Locator, Page } from '@playwright/test';
import type { UserData } from '../test-data/users';

/**
 * Page Object: Página de registro de cuenta.
 */
export class RegisterPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;
  readonly warningAlert: Locator;

  constructor(readonly page: Page) {
    this.firstNameInput = page.getByLabel('First Name');
    this.lastNameInput = page.getByLabel('Last Name');
    this.emailInput = page.getByLabel('E-Mail');
    this.telephoneInput = page.getByLabel('Telephone');
    this.passwordInput = page.getByLabel('Password', { exact: true });
    this.confirmPasswordInput = page.getByLabel('Password Confirm');
    this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.warningAlert = page.locator('.alert-danger');
  }

  async goto(): Promise<void> {
    await this.page.goto('/index.php?route=account/register');
  }

  /** Mensaje de validación mostrado debajo de un campo. */
  fieldError(field: Locator): Locator {
    return field.locator('xpath=following-sibling::div[contains(@class,"text-danger")]');
  }

  async fillForm(user: UserData, confirmPassword = user.password): Promise<void> {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.telephoneInput.fill(user.telephone);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async register(user: UserData, options: { acceptPrivacyPolicy?: boolean; confirmPassword?: string } = {}): Promise<void> {
    const { acceptPrivacyPolicy = true, confirmPassword } = options;
    await this.fillForm(user, confirmPassword);
    if (acceptPrivacyPolicy) {
      await this.privacyPolicyCheckbox.check();
    }
    await this.continueButton.click();
  }
}
