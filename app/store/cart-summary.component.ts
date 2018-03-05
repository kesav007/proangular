import { Component } from "@angular/core";
import { Cart } from "../model/cart";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: "cart-summary.component.html"
})
export class CartSummaryComponent {
    constructor(private cart: Cart) { }
}