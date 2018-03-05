import { Cart } from "./cart";
import { Injectable } from "@angular/core";

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public street: string;
    public city: string;
    public state: string;
    public country: string;
    public zip: string;
    public shipped: boolean = false;

    constructor(private cart: Cart) {

    }

    clear() {
        this.id = null;
        this.name = null;
        this.street = null;
        this.city = null;
        this.state = null;
        this.country = null;
        this.zip = null;
        this.shipped = false;
        this.cart.clear();
    }
}