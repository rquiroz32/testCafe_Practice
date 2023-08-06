import { Selector } from "testcafe";
import LoginPage from "../pageObjects/loginPage"
import basePage from "../pageObjects/basePage";

fixture `Login Suite` 
.page("https://www.saucedemo.com")

test("Can login to demo site", async (t)=>{
    await LoginPage.login("standard_user","secret_sauce")
    await t
    .expect(Selector(".title").innerText).eql("Products")
});


test("Can login and logout to demo site", async (t)=>{
    await LoginPage.login("standard_user","secret_sauce")
    await basePage.logout()
    await t
    .expect(LoginPage.usernameInput.innerText).eql("")
});

test.skip("This Should Fail", async (t)=>{
    await LoginPage.login("standard_user","secret_sauce")
    await basePage.logout()
    await t
    .expect(LoginPage.usernameInput.innerText).eql("test")
});