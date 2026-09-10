import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

type MyFixtures = {
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);

    },
});

export { expect } from '@playwright/test';


