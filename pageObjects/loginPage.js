import { Selector, t } from "testcafe";

class LoginPage{
    constructor(){
        this.usernameInput = Selector("#user-name")
        this.passwordInput = Selector("#password")
        this.loginBtn = Selector("#login-button")
    }

    async login(username, password){
        await t
        .typeText(this.usernameInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginBtn)
    }
}

export default new LoginPage() 