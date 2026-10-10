import {test as baseTest} from '@playwright/test';
import {Login2} from "../pages/Login2";
export { expect } from '@playwright/test';


//We have to define the type of the fixtures in order to use them in the test

type PageFixtures = {
  login: Login2;
};

export const test = baseTest.extend<PageFixtures>({
  login: async ({ page }, use) => {
    const login = new Login2(page); //object creation
    await use(login);//object supply
  }
});

