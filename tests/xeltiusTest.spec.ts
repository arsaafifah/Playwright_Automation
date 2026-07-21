import {test, expect} from "@playwright/test";
import {LoginXeltius} from'../pages/xeltiusPage'

let loginXeltius : LoginXeltius ;

test.describe ('login', function () {

test.beforeEach(async({page}) => {

    loginXeltius = new LoginXeltius (page);

    await loginXeltius.openWebsite();

});


test('success login', async({page})=>{

    const email = ('arsa.afifah@gmail.com');
    const password =('Afifah_071002');

    await loginXeltius.loginUser(email, password);

    await expect(page).toHaveURL(/portal/);

}); 

test('failed login', async({page})=>{

    const email = ('arsa.afifah@gmail.com');
    const password =('Afifah_07');

    await loginXeltius.loginUser(email, password);

    await expect(page.locator("//div[@class='css-1u40kae']")).toBeVisible();

}); 


});
