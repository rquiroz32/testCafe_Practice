import { Selector } from "testcafe";
import LoginPage from "../pageObjects/loginPage"
import basePage from "../pageObjects/basePage";

 require("dotenv").config()

fixture `Login Suite` 
.page("https://www.saucedemo.com")

test("Can login to demo site", async (t)=>{
    await LoginPage.login(process.env.validUsername, process.env.password)
    await t
    .expect(Selector(".title").innerText).eql("Products")
});


test("Can login and logout to demo site", async (t)=>{
    await LoginPage.login(process.env.validUsername, process.env.password)
    await basePage.logout()
    await t
    .expect(LoginPage.usernameInput.innerText).eql("")
});

test.skip("This Should Fail", async (t)=>{
    console.log(process.env.validUsername)
    await LoginPage.login(process.env.validUsername, process.env.password)
    await basePage.logout()    
    await t
    .expect(LoginPage.usernameInput.innerText).eql("test")
});