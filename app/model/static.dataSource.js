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
const Observable_1 = require("rxjs/Observable");
const product_1 = require("./product");
require("rxjs/add/operator/map");
require("rxjs/add/observable/from");
let StaticDataSource = class StaticDataSource {
    constructor() {
        this.products = [
            new product_1.Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
            new product_1.Product(2, "Product 2", "Category 2", "Product 2 (Category 2)", 100),
            new product_1.Product(3, "Product 3", "Category 3", "Product 3 (Category 3)", 100),
            new product_1.Product(4, "Product 4", "Category 4", "Product 4 (Category 4)", 100),
            new product_1.Product(5, "Product 5", "Category 5", "Product 5 (Category 5)", 100),
            new product_1.Product(6, "Product 6", "Category 6", "Product 6 (Category 6)", 100)
        ];
    }
    getProducts() {
        return Observable_1.Observable.from([this.products]);
    }
};
StaticDataSource = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], StaticDataSource);
exports.StaticDataSource = StaticDataSource;
