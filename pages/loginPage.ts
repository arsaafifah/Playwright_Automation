import {Page} from "@playwright/test";

export class LoginPage {

    constructor (private page: Page) {}

        // private page: Page;          // Property

        // constructor(page: Page) {    // Parameter
    
        // this.page = page;        // Menyimpan parameter ke property
    
    //  Variable
    usernameInput = this.page.locator('//input[@name="username"]');
    passwordInput = this.page.locator('#password');
    loginButton = this.page.locator('#login');

    // Method
    async openWebsite() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com');
    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }

}

// login function updated