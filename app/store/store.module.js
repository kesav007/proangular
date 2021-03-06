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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const store_component_1 = require("./store.component");
const model_module_1 = require("../model/model.module");
const cart_summary_component_1 = require("./cart-summary.component");
const cart_detail_component_1 = require("./cart-detail.component");
const checkout_component_1 = require("./checkout.component");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, model_module_1.ModelModule, forms_1.FormsModule, router_1.RouterModule],
        declarations: [store_component_1.StoreComponent, cart_summary_component_1.CartSummaryComponent, cart_detail_component_1.CartDetailComponent, checkout_component_1.CheckoutComponent],
        exports: [store_component_1.StoreComponent, cart_detail_component_1.CartDetailComponent, checkout_component_1.CheckoutComponent]
    }), 
    __metadata('design:paramtypes', [])
], StoreModule);
exports.StoreModule = StoreModule;
