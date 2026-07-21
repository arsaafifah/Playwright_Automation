import {test, expect} from "@playwright/test";
import {LoginXeltius} from'../pages/xeltiusPage'

let loginXeltius : LoginXeltius ;

test.beforeEach(async({page}) => {

    loginXeltius = new LoginXeltius (page);

    await loginXeltius.openWebsite();

})


test('success login', async({page})=>{

    const email = ('arsa.afifah@gmail.com');
    const password =('Afifah_071002');

    await loginXeltius.loginUser(email, password);

}) 



