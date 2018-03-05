import { Component } from "@angular/core";
import { RestDataSource } from "../model/rest.datasource";
import { Product } from "../model/product";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductRepository } from "../model/product.repository";
import { NgForm } from "@angular/forms";
@Component({
    moduleId: module.id,
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent {

    private product: Product = new Product();

    private editing: boolean = true;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private productRepository: ProductRepository) {
        this.editing = activatedRoute.snapshot.params["mode"] == "edit"
        if (this.editing) {
            Object.assign(this.product, productRepository.getProduct(activatedRoute.snapshot.params["id"]))
        }
    }

    save(form: NgForm) {
        if (form.valid) {
            this.productRepository.save(this.product);
            this.router.navigateByUrl("/admin/main/products");
        }
    }
}

