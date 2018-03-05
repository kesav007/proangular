"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const product_1 = require("../model/product");
const router_1 = require('@angular/router');
const product_repository_1 = require("../model/product.repository");
let ProductEditorComponent = class ProductEditorComponent {
    constructor(activatedRoute, router, productRepository) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productRepository = productRepository;
        this.product = new product_1.Product();
        this.editing = true;
        this.editing = activatedRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, productRepository.getProduct(activatedRoute.snapshot.params["id"]));
        }
    }
    save(form) {
        if (form.valid) {
            this.productRepository.save(this.product);
            this.router.navigateByUrl("/admin/main/products");
        }
    }
};
ProductEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "productEditor.component.html"
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_repository_1.ProductRepository])
], ProductEditorComponent);
exports.ProductEditorComponent = ProductEditorComponent;
