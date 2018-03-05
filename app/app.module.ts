import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { FormsModule } from "@angular/forms";

import { RouterModule, Route, Router } from "@angular/router"
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cart-detail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { AuthComponent } from "./admin/auth.component";
import { StoreFirstGuard } from "./storefirst.guard";

@NgModule({
    imports: [BrowserModule, StoreModule, FormsModule, RouterModule.forRoot([
        { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
        { path: "cart-details", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
        { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
        { path: "admin", loadChildren: "app/admin/admin.module#AdminModule", canActivate: [StoreFirstGuard] },
        
        { path: "**", redirectTo: "store"}
    ])],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [StoreFirstGuard]
})
export class AppModule {

}