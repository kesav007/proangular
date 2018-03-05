import { Address } from "./address.model";
import { Injectable } from "@angular/core";
import { Cart } from "./cart";

@Injectable()
export class UserDetails {
    public name: string;
    public address: Address = new Address();
    public shipped: boolean = false;

    public constructor(private cart: Cart){}

    clear() {
        this.name = null;
        this.shipped = false;
        this.cart.clear()
    }
}
