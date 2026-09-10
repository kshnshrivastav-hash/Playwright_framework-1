import { test, expect } from '../fixtures/testFixture';

test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
});


test('Product add to cart - Sauce Labs Backpack', async ({ page, productPage }) => {
    console.log('Current URL:', page.url());
        await productPage.addProduct('Sauce Labs Backpack');
        const cartValue = await page.locator('.shopping_cart_badge').textContent();
        console.log('Cart value:', cartValue);
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('Product add to cart - Sauce labs bike light and Sauce Labs Backpack', async ({ page, productPage }) => {
await productPage.addProduct('Sauce Labs Bike light');
await productPage.addProduct('Sauce Labs Backpack');

const cartValue = await page.locator('.shopping_cart_badge').textContent();
console.log('Cart value', cartValue);
await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});

test('Add 3 items in cart', async ({ page, productPage }) => {
await productPage.addProduct('Sauce Labs Bike light');
await productPage.addProduct('Sauce Labs Backpack');
await productPage.addProduct('Sauce Labs Bolt T-Shirt');

const cartValue = await page.locator('.shopping_cart_badge').textContent();
console.log('Cart Value', cartValue);
await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

});

test('Add Fleece Jacket', async ({ page, productPage }) => {
await productPage.addProduct('Sauce Labs Fleece Jacket');

const cartValue = await page.locator('.shopping_cart_badge').textContent();
console.log('Cart Value', cartValue);
await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});