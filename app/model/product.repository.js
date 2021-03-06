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
const rest_datasource_1 = require("./rest.datasource");
let ProductRepository = class ProductRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        this.dataSource.getProducts().subscribe(products => {
            this.products = products;
            this.categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value) == index).sort();
        });
    }
    getProducts(category) {
        return this.products.filter(product => product.category == category || category == null);
    }
    getProduct(id) {
        return this.products.find(p => p.id == id);
    }
    deleteProduct(id) {
        let productIndex = this.products.findIndex(p => p.id == id);
        this.products.splice(productIndex, 1);
    }
    getCategories() {
        return this.categories;
    }
    save(product) {
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        }
        else {
            this.dataSource.updateProduct(product).subscribe(p => this.products
                .splice(this.products.findIndex(p => p.id == product.id), 1, product));
        }
    }
};
ProductRepository = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
], ProductRepository);
exports.ProductRepository = ProductRepository;
