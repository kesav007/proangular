import { Component } from "@angular/core";
import { UserDetails } from "../model/user-details.component";
import { Order } from "../model/order.model";
import { NgForm } from "@angular/forms";
import { Http} from "@angular/http";
import { OrderRepository } from "../model/order.repository";

@Component({
    moduleId: module.id,
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {

    private submitted: boolean = false;
    private orderSent: boolean = false;

    constructor(private order: Order, private orderRepository: OrderRepository) {
    }

    submitOrder(myForm: NgForm) {
        this.submitted = true;
        if (myForm.valid) {
            this.orderRepository.saveOrder(this.order).subscribe(order => {
                console.log(order);
                this.order.clear();                
                this.orderSent = true;
                this.submitted = false;                    
            });
        }
    }

    reset(myForm: NgForm) {
        myForm.reset();
    }
}