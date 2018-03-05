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
const auth_component_1 = require("./auth.component");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const admin_component_1 = require("./admin.component");
const productEditor_component_1 = require("./productEditor.component");
const productTable_component_1 = require("./productTable.component");
const orderTable_component_1 = require("./orderTable.component");
let routes = router_1.RouterModule.forChild([
    { path: "auth", component: auth_component_1.AuthComponent },
    {
        path: "main", component: admin_component_1.AdminComponent,
        children: [
            { path: "product/:mode/:id", component: productEditor_component_1.ProductEditorComponent },
            { path: "product/:mode", component: productEditor_component_1.ProductEditorComponent },
            { path: "products", component: productTable_component_1.ProductTableComponent },
            { path: "orders", component: orderTable_component_1.OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    core_1.NgModule({
        imports: [routes, forms_1.FormsModule, common_1.CommonModule],
        declarations: [auth_component_1.AuthComponent, admin_component_1.AdminComponent, productEditor_component_1.ProductEditorComponent, productTable_component_1.ProductTableComponent, orderTable_component_1.OrderTableComponent]
    }), 
    __metadata('design:paramtypes', [])
], AdminModule);
exports.AdminModule = AdminModule;
