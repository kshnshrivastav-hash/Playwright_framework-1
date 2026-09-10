import { Page } from "@playwright/test";
export class LoginPage {

    constructor(private page:Page) {}
    username=this.page.getByPlaceholder('Username');
    password=this.page.getByPlaceholder('Password');
    loginButton=this.page.getByRole('button', { name : 'Login'});

    async login(username:string, password:string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}

}