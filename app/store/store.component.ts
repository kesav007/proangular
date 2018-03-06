import { Component } from "@angular/core";
import { Product } from "../model/product";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart";

@Component({
    // selector: "store-app",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent {
    selectedCategory: string;

    selectedProduct: string;

    constructor(private repository: ProductRepository, private cart: Cart) { }

    get products(): Product[] {
        return this.repository.getProducts(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    selectCategory(selectedCategory: string) {
        this.selectedCategory = selectedCategory;
    }

    addToCart(product: Product){
        this.cart.addProduct(product);
        
    }

    getSelected(product: Product): boolean {
        return this.selectedProduct == product.name;
    }

}