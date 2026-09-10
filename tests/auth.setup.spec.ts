import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('authenticate user and save storage state', async ({ browser }) => {

    // Create a new isolated browser context
    const context = await browser.newContext();

    // Create a page inside this context
    const page = await context.newPage();

    // Open application
    await page.goto('/');

    // Use existing LoginPage POM
    const loginPage = new LoginPage(page);

    // Login
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify authentication succeeded
    await expect(page).toHaveURL(/inventory.html/);

    // Save authenticated browser state
    await context.storageState({
        path: 'auth.json'
    });

    // Close context
    await context.close();
});

