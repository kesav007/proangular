import { Component } from "@angular/core";
import { RestDataSource } from "../model/rest.datasource";
import { Product } from "../model/product";
import { AuthService } from "../model/auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "admin.component.html"
})
export class AdminComponent {
    
    constructor(private auth: AuthService, private router: Router) {

    }

    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }
}