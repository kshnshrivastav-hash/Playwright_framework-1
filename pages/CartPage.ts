    import { expect, Locator, Page } from '@playwright/test';

    export class CartPage {

    private openCart: Locator;
    private cartItems: Locator;
    private checkoutBtn: Locator;
    private ShoppingBtn:Locator;


        constructor(private page: Page) {
        this.openCart = page.locator('.shopping_cart_link');   
        this.cartItems = page.locator('.cart_item');
        this.checkoutBtn= page.getByRole('button', {name: 'Checkout'});
        this.ShoppingBtn= page.getByRole('button', {name: 'Continue Shopping'});
        }

        async cartLink() {
        await this.openCart.click();
        }

        async verifyProduct(productName: string) {
            const cartItems= this.cartItems.filter({ hasText: productName });
            await expect(cartItems).toBeVisible();
        }

            async removeItem(productName: string) {
            const cartItem = this.cartItems.filter({ hasText: productName });
            await cartItem.getByRole('button', {name: 'Remove'}).click();

        }

        async verifyProductNotPresent(productName: string) {
        const cartItem = this.cartItems.filter({ hasText: productName });
        await expect(cartItem).toHaveCount(0);
}

        async checkout() {
        await this.checkoutBtn.click();
        }

        async continueShopping() {
            await this.ShoppingBtn.click();
        }


    };