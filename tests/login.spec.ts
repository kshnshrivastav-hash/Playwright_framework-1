import { test, expect } from '../Fixtures/testFixture';

test.use({
    storageState: { cookies: [], origins: [] },
});

test.beforeEach(async ({page}) => {
    await page.goto('/');

});

test('Verify successful login using valid credentials', async ({ page, loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

});

test('Verify login with invalid username', async ({ page, loginPage }) => {
        await loginPage.login('standa_user', 'secret_sauce');


    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
        .toBeVisible();

});

test('Verify login with invalid password', async ({ page, loginPage }) => {
        await loginPage.login('standard_user', 'secret_sae');

    
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'))
        .toBeVisible();

});