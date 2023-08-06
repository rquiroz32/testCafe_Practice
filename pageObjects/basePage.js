import { Selector,t } from "testcafe";

class BasePage{
    constructor(){

        this.hamburgerBtn = Selector("#react-burger-menu-btn")
        this.navMenu = Selector("nav.bm-item-list")
        this.navMenuLinks = Selector("nav.bm-item-list a")
        this.allItemsLink = Selector("nav>a#inventory_sidebar_link")
        this.aboutLink = Selector("nav>a+a")
        this.logoutLink = this.navMenuLinks.nth(2)
        this.resetAppLink = this.navMenuLinks.nth(3)
    }

    async logout(){
        await t
        .click(this.hamburgerBtn)
        .click(this.logoutLink)
    }

    async resetApp(){
        await t
        .click(this.hamburgerBtn)
        .click(this.resetAppLink)
    }


}

export default new BasePage()