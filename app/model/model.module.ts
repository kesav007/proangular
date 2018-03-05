import { NgModule } from "@angular/core";
import { Product } from "./product";
import { StaticDataSource } from "./static.dataSource";
import { ProductRepository } from "./product.repository";
import { Cart } from "./cart";
import { UserDetails } from "./user-details.component";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth.service";
import { OrderRepository } from "./order.repository";

@NgModule({
    imports: [HttpModule],
    providers: [StaticDataSource,
        RestDataSource,
        ProductRepository,
        Cart, UserDetails,
        Order,
        AuthService,
        OrderRepository]
})
export class ModelModule { }