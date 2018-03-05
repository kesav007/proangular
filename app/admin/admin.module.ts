import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { OrderTableComponent } from "./orderTable.component";

let routes = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent,
        children: [
            { path: "product/:mode/:id", component: ProductEditorComponent },
            { path: "product/:mode", component: ProductEditorComponent },
            { path: "products", component: ProductTableComponent },
            { path: "orders", component: OrderTableComponent},
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
@NgModule({
    imports: [routes, FormsModule, CommonModule],
    declarations: [AuthComponent, AdminComponent, ProductEditorComponent, ProductTableComponent, OrderTableComponent]
})
export class AdminModule {

}