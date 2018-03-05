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
const product_repository_1 = require("../model/product.repository");
const core_1 = require("@angular/core");
const cart_1 = require("../model/cart");
let CartDetailComponent = class CartDetailComponent {
    constructor(repository, cart) {
        this.repository = repository;
        this.cart = cart;
    }
};
CartDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "cart-detail.component.html"
    }), 
    __metadata('design:paramtypes', [product_repository_1.ProductRepository, cart_1.Cart])
], CartDetailComponent);
exports.CartDetailComponent = CartDetailComponent;
