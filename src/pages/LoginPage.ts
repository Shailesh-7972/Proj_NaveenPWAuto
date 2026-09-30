import { Page, Locator } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.locator('#input-email');
    this.passwordInput = this.page.locator('#input-password');
    this.loginButton = this.page.getByRole('button', { name: /login/i });
  }

  async goToLoginPage(): Promise<void> {
    await this.page.goto('/index.php?route=account/login');
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async doLogin(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
