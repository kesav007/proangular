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
let Cart = class Cart {
    constructor() {
        this.cartLines = [];
        this.total = 0;
        this.itemCount = 0;
    }
    addProduct(product, quantity = 1) {
        let productExist = this.cartLines.find(cartLine => cartLine.product.id == product.id);
        if (productExist) {
            productExist.quantity += quantity;
        }
        else {
            this.cartLines.push(new CartLine(product, quantity));
        }
        this.calculateTotal();
    }
    calculateTotal() {
        this.itemCount = 0;
        this.total = 0;
        this.cartLines.forEach(cartLine => {
            this.total += cartLine.cartLineTotal();
            this.itemCount += cartLine.quantity;
        });
    }
    updateQuantity(product, quantity) {
        let cartLine = this.cartLines.find(cartLine => cartLine.product.id == product.id);
        cartLine.quantity = Number(quantity);
        this.calculateTotal();
    }
    removeLine(cartLine) {
        let index = this.cartLines.findIndex(line => line === cartLine);
        this.cartLines.splice(index, 1);
        this.calculateTotal();
    }
    clear() {
        this.cartLines = [];
        this.total = 0;
        this.itemCount = 0;
    }
};
Cart = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], Cart);
exports.Cart = Cart;
class CartLine {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    cartLineTotal() {
        return this.product.price * this.quantity;
    }
}
exports.CartLine = CartLine;
