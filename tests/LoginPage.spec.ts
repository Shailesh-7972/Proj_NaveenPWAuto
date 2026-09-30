import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  /*const title = await loginPage.getPageTitle();
  console.log("Login page title is", title);
  await expect.soft(page).toHaveTitle("account/Login");*/
  await loginPage.doLogin("test@gmail.com", "123456");
  
});