import {test, expect} from "../src/Fixtures/PageFixtures";

test("login with fixtures", async ({ login }) => {
  await login.goToLoginPage();
  await login.DoLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);

});
