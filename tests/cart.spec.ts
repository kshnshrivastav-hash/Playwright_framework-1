import { test,expect } from "../Fixtures/testFixture";

test.beforeEach(async ({page}) => {
    await page.goto('/inventory.html');
});

test('Verify cart products', async ({ productPage, cartPage }) => {

    await productPage.addProduct('Sauce Labs Backpack');

    await cartPage.cartLink();

    await cartPage.verifyProduct('Sauce Labs Backpack');
 
});
    

test('remove cart product', async ({ productPage, cartPage }) => {

    await productPage.addProduct('Sauce Labs Backpack');

    await cartPage.cartLink();

    await cartPage.verifyProduct('Sauce Labs Backpack');

    await cartPage.removeItem('Sauce Labs Backpack');

    await cartPage.verifyProductNotPresent('Sauce Labs Backpack');
});


test('Add 3 product to cart', async ({ page, productPage, cartPage }) => {
    await productPage.addProduct('Sauce Labs Backpack');
    await productPage.addProduct('Sauce Labs Bike Light');
    await productPage.addProduct('Sauce Labs Bolt T-Shirt');
    await cartPage.cartLink();
    await cartPage.verifyProduct('Sauce Labs Backpack');
    await cartPage.verifyProduct('Sauce Labs Bike Light');
    await cartPage.verifyProduct('Sauce Labs Bolt T-Shirt');
    await cartPage.removeItem('Sauce Labs Bike Light');
    await cartPage.verifyProductNotPresent('Sauce Labs Bike Light');
    await cartPage.verifyProduct('Sauce Labs Backpack');
    await cartPage.verifyProduct('Sauce Labs Bolt T-Shirt');
    await cartPage.checkout();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    
});

