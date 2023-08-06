import { Selector, t } from "testcafe";
import BasePage from "./basePage";

class inventoryPage extends BasePage{
    constructor(){
        this.shoppingCart = Selector("a.shopping_cart_link")
        this.productsTitle = Selector(".title")
        this.sortBtn = Selector("div.select_container")
        this.sortAz = Selector("select.product_sort_container>option:nth-child(1)")
        this.sortZa = Selector("select.product_sort_container>option:nth-child(2)")
        this.sortLohi = Selector("select.product_sort_container>option:nth-child(3)")
        this.sortHilo = Selector("select.product_sort_container>option:nth-child(4)")
    }

    
}


export default new inventoryPage();