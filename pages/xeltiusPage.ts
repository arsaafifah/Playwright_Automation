import {Page, Locator, expect} from '@playwright/test';

export class LoginXeltius {


    readonly signinButton : Locator ;
    readonly Logo :   Locator;
    readonly emailfield :   Locator ;
    readonly passwordfield : Locator ;
    readonly loginButton : Locator ;

    constructor ( private page : Page) {

        this.signinButton = page.getByRole('link', { name: 'Sign In' });
        this.Logo = page.getByAltText('Logo');
        this.emailfield = page.getByTestId('email-input');
        this.passwordfield = page.getByTestId('password-input');
        this.loginButton = page.getByRole('button', {name : 'Log In'});
    }

    async openWebsite () {

        await this.page.goto('https://xaltiusacademy.com/')

    }

    async loginUser (email : string, password : string){

        await this.signinButton.click();

        await expect(this.Logo).toBeVisible();

        await this.emailfield.fill(email);

        await this.passwordfield.fill(password);

        await this.loginButton.click();

    }

}