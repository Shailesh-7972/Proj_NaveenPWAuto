
import { Locator, Page } from "@playwright/test";
//import { Basepage } from "./Basepage";

export class Login2
{
    //private locators
    private readonly page: Page;
    private readonly emailid: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly forgotpasswordlink: Locator;

    constructor(page: Page) 
    {
        this.page = page;
        //super(page);
        this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.locator('#input-password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotpasswordlink = page.getByRole('link', { name: 'password' });

    }

    //page actions methods

    async goToLoginPage() : Promise<void>
    {

           await this.page.goto('opencart/index.php?route=account/login');
    }

    async getPageTitle():Promise<string>
    {
         return await this.page.title();
    }

    async IsForgotPasswordLinkExist():Promise<boolean>
    {
        return await this.forgotpasswordlink.isVisible();
    }

 async DoLogin (email:string,password:string):Promise <void>

    {
        console.log(`User credentials: ${email} and :${password}`);
        await this.emailid.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }   

}