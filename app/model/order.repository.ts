import { Injectable } from "@angular/core";
import { Cart } from "./cart";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => {
            this.orders = orders;
        });
    }

    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        console.log(this.orders);
        return this.orders;
    }

}