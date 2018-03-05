import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.dataSource";
import { Product } from "./product";
import { RestDataSource } from "./rest.datasource";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductRepository {
    products: Product[] = [];
    categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getProducts().subscribe(products => {
            this.products = products;
            this.categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value) == index).sort();
        });
    }

    getProducts(category?: string): Product[] {
        return this.products.filter(product => product.category == category || category == null);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    deleteProduct(id: number): void {
        let productIndex = this.products.findIndex(p => p.id == id);
        this.products.splice(productIndex, 1);
    }

    getCategories(): string[] {
        return this.categories;
    }

    save(product: Product) {
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        }
        else {
            this.dataSource.updateProduct(product).subscribe(p =>
                this.products
                    .splice(
                    this.products.findIndex(p => p.id == product.id),
                    1, product));
        }
    }

}