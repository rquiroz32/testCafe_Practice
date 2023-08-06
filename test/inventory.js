import { Selector } from "testcafe";
import inventoryPage from "../pageObjects/inventoryPage";
import loginPage from "../pageObjects/loginPage";
import basePage from "../pageObjects/basePage";
require("dotenv").config()


fixture `Inventory Page Testing`
.page("https://www.saucedemo.com")

test("Tests the addToCart Btn", async (t)=>{
    await loginPage.login(process.env.validUsername, process.env.password)
    await t    
    .click(basePage.hamburgerBtn)
    .click(inventoryPage.boltShirtAddToCart)
    .expect(inventoryPage.shoppingCartBadge.innerText).eql("1")
});