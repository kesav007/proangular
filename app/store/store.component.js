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
const product_repository_1 = require("../model/product.repository");
const cart_1 = require("../model/cart");
let StoreComponent = class StoreComponent {
    constructor(repository, cart) {
        this.repository = repository;
        this.cart = cart;
    }
    get products() {
        return this.repository.getProducts(this.selectedCategory);
    }
    get categories() {
        return this.repository.getCategories();
    }
    selectCategory(selectedCategory) {
        this.selectedCategory = selectedCategory;
    }
    addToCart(product) {
        this.cart.addProduct(product);
    }
    getSelected(product) {
        return this.selectedProduct == product.name;
    }
};
StoreComponent = __decorate([
    core_1.Component({
        // selector: "store-app",
        moduleId: module.id,
        templateUrl: "store.component.html"
    }), 
    __metadata('design:paramtypes', [product_repository_1.ProductRepository, cart_1.Cart])
], StoreComponent);
exports.StoreComponent = StoreComponent;
