import { Component } from "@angular/core";
import { RestDataSource } from "../model/rest.datasource";
import { Product } from "../model/product";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductRepository } from "../model/product.repository";
import { NgForm } from "@angular/forms";
@Component({
    moduleId: module.id,
    templateUrl: "productEditor.component.html",
    styleUrls: ["productEditor.component.css"]
})
export class ProductEditorComponent {

    private product: Product = new Product();

    private editing: boolean = true;

    private submitted: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private productRepository: ProductRepository) {
        this.editing = activatedRoute.snapshot.params["mode"] == "edit"
        if (this.editing) {
            Object.assign(this.product, productRepository.getProduct(activatedRoute.snapshot.params["id"]))
        }
    }

    save(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.productRepository.save(this.product);
            this.router.navigateByUrl("/admin/main/products");
            this.submitted = false;
        }
    }

    getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`you must enter a ${thing}`);
                        break;
                    case "minlength" :
                        messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
                        break;
                    case "pattern" :
                        messages.push(`The ${thing} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}

