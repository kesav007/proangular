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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
let RestDataSource = class RestDataSource {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3500/";
    }
    getProducts() {
        return this.sendRequest("products", http_1.RequestMethod.Get, null);
    }
    saveProduct(product) {
        return this.sendRequest("products", http_1.RequestMethod.Post, product, true);
    }
    updateProduct(product) {
        return this.sendRequest(`products/${product.id}`, http_1.RequestMethod.Put, product, true);
    }
    deleteProduct(product) {
        return this.sendRequest(`products/${product.id}`, http_1.RequestMethod.Delete, product, true);
    }
    getOrders() {
        return this.sendRequest("orders", http_1.RequestMethod.Get, null, true);
    }
    saveOrder(order) {
        return this.sendRequest("orders", http_1.RequestMethod.Post, order, true);
    }
    sendRequest(url, verb, body, auth) {
        let req = new http_1.Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            req.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }
    authenticate(username, pass) {
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: username, password: pass }
        })).map(response => {
            let r = response.json();
            console.log(r);
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }
};
RestDataSource = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], RestDataSource);
exports.RestDataSource = RestDataSource;
