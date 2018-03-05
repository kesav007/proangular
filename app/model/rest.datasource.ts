import { Http,  Request, RequestMethod } from "@angular/http"
import { Product } from "./product";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { request } from "https";

@Injectable()
export class RestDataSource {

    private baseUrl: string = "http://localhost:3500/";

    public auth_token: string;

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.sendRequest("products", RequestMethod.Get, null);
    }

    saveProduct(product): Observable<Product> {
        return this.sendRequest("products", RequestMethod.Post, product, true);
    }

    updateProduct(product): Observable<Product> {
        return this.sendRequest(`products/${product.id}`, RequestMethod.Put, product, true);
    }

    deleteProduct(product): Observable<Product> {
        return this.sendRequest(`products/${product.id}`, RequestMethod.Delete, product, true);
    }

    getOrders(): Observable<Order[]> {
        return this.sendRequest("orders", RequestMethod.Get, null, true);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest("orders", RequestMethod.Post, order, true);
    }

    sendRequest(url: string, verb: RequestMethod, body: Product | Order, auth?: boolean): Observable<Product | Product[] | Order | Order[]> {
        let req = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if(auth && this.auth_token != null){
            req.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

    authenticate(username, pass): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: username, password: pass }
        })).map(response => {
            let r = response.json();
            console.log(r);
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }
}