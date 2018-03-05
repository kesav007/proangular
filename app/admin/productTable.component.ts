import { Component } from "@angular/core";
import { Product } from "../model/product";
import { RestDataSource } from "../model/rest.datasource";
import { ProductRepository } from "../model/product.repository";

@Component({
    moduleId: module.id,
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    constructor(private productRepository: ProductRepository) {
        
    }

    deleteProduct(id: number) {
        this.productRepository.deleteProduct(id);
    }

    get products(): Product[] {
        return this.productRepository.getProducts();
    }

}