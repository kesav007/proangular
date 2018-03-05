"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const store_module_1 = require("./store/store.module");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const store_component_1 = require("./store/store.component");
const cart_detail_component_1 = require("./store/cart-detail.component");
const checkout_component_1 = require("./store/checkout.component");
const storefirst_guard_1 = require("./storefirst.guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, store_module_1.StoreModule, forms_1.FormsModule, router_1.RouterModule.forRoot([
                { path: "store", component: store_component_1.StoreComponent, canActivate: [storefirst_guard_1.StoreFirstGuard] },
                { path: "cart-details", component: cart_detail_component_1.CartDetailComponent, canActivate: [storefirst_guard_1.StoreFirstGuard] },
                { path: "checkout", component: checkout_component_1.CheckoutComponent, canActivate: [storefirst_guard_1.StoreFirstGuard] },
                { path: "admin", loadChildren: "app/admin/admin.module#AdminModule", canActivate: [storefirst_guard_1.StoreFirstGuard] },
                { path: "**", redirectTo: "store" }
            ])],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [storefirst_guard_1.StoreFirstGuard]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
