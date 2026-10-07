import { test, expect } from "@playwright/test";
import { Login2 } from "../src/pages/Login2";
import { csvHelper } from "../src/Utils/csvHelper";
import { XlsxHelper } from "../src/Utils/XlsxHelper";

/*
test("Login with valid credentials", async ({page}) => {
  const loginPage = new Login2(page);

  await loginPage.goToLoginPage();
  /*const title = await loginPage.getPageTitle();
  console.log("Login page title is", title);
  await expect.soft(page).toHaveTitle("account/Login");
  //await loginPage.DoLogin(process.env.USERNAME!,process.env.PASSWORD!);
  //expect(await homepage.islogoutLinkExist()).toBeTruthy(); 
  
//});


let testdata = csvHelper.readCsv("src/data/demoData.csv");

for (const row of testdata ) {

test(`@Login with csv data ${row.username}`,async ({page}) => {
  const loginPage = new Login2(page);
  await loginPage.goToLoginPage();
  await loginPage.DoLogin(row.username,row.password);

  const forgotPasswordLinkExist = await loginPage.IsForgotPasswordLinkExist();

  if (row.expectedResult === "fail") {
    expect(forgotPasswordLinkExist).toBeTruthy();
  }
})
}
*/

let testdataExcel = XlsxHelper.readExcel("src/data/TestXlsxData.xlsx", "Sheet1");

for (const row of testdataExcel ) {

test(`@test xls data ${row.Username}- ${row.Password}`, async ({page}) => {

  const loginPage = new Login2(page);
  await loginPage.goToLoginPage();
  await loginPage.DoLogin(row.Username,row.Password);

    //expect(await loginPage.IsForgotPasswordLinkExist()).toBeTruthy();
  });
}