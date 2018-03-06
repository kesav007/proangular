import { ProductRepository } from "../model/product.repository";
import { Component } from "@angular/core";
import { Cart } from "../model/cart";
@Component({
    moduleId: module.id,
    templateUrl: "cart-detail.component.html"
})
export class CartDetailComponent {
    
    constructor(private repository: ProductRepository, private cart: Cart){

    }

    get style(): string {
        return (this.cart.total > 0) ? "bg-light" : "bg-warning"
    }

}