import { Component } from "@angular/core";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";

@Component({
    moduleId: module.id,
    templateUrl: "orderTable.component.html"
})
export class OrderTableComponent {

    private includeShipped: boolean = false;

    constructor(private orderRepository: OrderRepository) { }

    getOrders(): Order[] {
        return this.orderRepository.getOrders();
    }

    markShipped(order: Order) {

    }

    delete(id: number) {

    }

}