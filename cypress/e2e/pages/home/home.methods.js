import { HomeElements } from "./home.elements";

export class HomeMethods{
    static ClickOnPhonesOption(){
        HomeElements.catetoriesMenu.phones.click();
    }
    static ClickOnLaptosOption(){
        HomeElements.catetoriesMenu.laptops.click();
    }
    static ClickOnMonitorsOption(){
        HomeElements.catetoriesMenu.monitors.click();
    }
    // hace click a cualquier producto que le indiquemos
    static ClickProductLink(productName){
        HomeElements.product(productName).click();
    
    }
}