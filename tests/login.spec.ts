import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/loginPage";

import {connectDB, closeDB, getEmployeeByUsername} from "../utils/database";

let loginPage: LoginPage;

// dijalankan sekali sebelum semua test
test.beforeAll(async()=>{

    await connectDB();
});

// dijalankan setiap test
test.beforeEach(async({page})=>{

    loginPage = new LoginPage(page);
    await loginPage.openWebsite();

});

// dijalankan setelah semua test selesai
test.afterAll(async()=>{

    await closeDB();
});


test("Login Success and Check Database", async({page})=>{

    const username = "Admin";

    const password = "admin123";

    // 1. UI ACTION

    await loginPage.login(
        username,
        password
    );

    // 2. UI ASSERTION

    await expect(page)
        .toHaveURL(/dashboard/);

    // 3. DATABASE CHECK

    const user =
        await getEmployeeByUsername(username);

    // 4. DATABASE ASSERTION

    expect(user.username)
        .toBe(username);

});