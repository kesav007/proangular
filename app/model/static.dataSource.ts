import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "./product";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 2", "Product 2 (Category 2)", 100),
        new Product(3, "Product 3", "Category 3", "Product 3 (Category 3)", 100),
        new Product(4, "Product 4", "Category 4", "Product 4 (Category 4)", 100),
        new Product(5, "Product 5", "Category 5", "Product 5 (Category 5)", 100),
        new Product(6, "Product 6", "Category 6", "Product 6 (Category 6)", 100)
    ]
    
    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}