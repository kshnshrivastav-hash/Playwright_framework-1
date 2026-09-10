import { Locator, Page } from '@playwright/test';

export class ProductPage {

    private products: Locator;
 
    constructor(private page: Page) {
    this.products=page.locator('.inventory_item');
    }

    async addProduct(productName: string) {
        const product = this.products.filter({ hasText: productName });
        await product.getByRole('button', { name: 'Add to cart' }).click();
    
    }}

