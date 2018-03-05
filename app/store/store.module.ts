import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { RouterModule, Route, Router } from "@angular/router"

import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { CartSummaryComponent } from "./cart-summary.component";
import { CartDetailComponent } from "./cart-detail.component";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
    imports: [BrowserModule, ModelModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule {

}