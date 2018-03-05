import { Product } from "./product";
import { Injectable } from "@angular/core";

@Injectable()
export class Cart {

    public cartLines: CartLine[] = [];

    public total: number = 0;

    public itemCount: number = 0;

    addProduct(product: Product, quantity: number = 1) {
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
        })
    }

    updateQuantity(product: Product, quantity: number) {
        let cartLine = this.cartLines.find(cartLine => cartLine.product.id == product.id);
        cartLine.quantity = Number(quantity);
        this.calculateTotal();
    }

    removeLine(cartLine: CartLine) {
        let index = this.cartLines.findIndex(line => line === cartLine);
        this.cartLines.splice(index, 1);
        this.calculateTotal();
    }

    clear() {
        this.cartLines = [];
        this.total = 0;
        this.itemCount = 0;
    }
}

export class CartLine {
    constructor(public product: Product, public quantity: number) { }

    public cartLineTotal(): number {
        return this.product.price * this.quantity;
    }
}