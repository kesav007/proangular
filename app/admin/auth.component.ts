import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../model/auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "auth.component.html",
    styleUrls: ["auth.component.css"]
})
export class AuthComponent {

    private username: string;
    private password: string;
    private errorMessage: string;

    constructor(private auth: AuthService, private router: Router) {

    }

    authenticate(form: NgForm) {
        console.log(this.username + " " + this.password);
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl("/admin/main");
                    }
                    this.errorMessage = "Authenticate Failed";
                });
        }
        else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}