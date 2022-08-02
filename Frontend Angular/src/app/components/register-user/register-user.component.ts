import {Component, OnInit} from '@angular/core';
import {countries} from "../../commons/country-data-store";
import {User} from "../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

    user: User = {};
    firstName?: string;
    lastName?: string;
    age?: number;
    gendre?: string;
    country?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    public countries: any = countries;

    constructor(
        private userService: UserService,
        public snackBar: MatSnackBar,
        private router: Router
    ) {
    }

    ngOnInit(): void {

    }

    onSubmit(): void {

        this.user.firstName = this.firstName;
        this.user.lastName = this.lastName;
        this.user.age = this.age;
        this.user.gendre = this.gendre;
        this.user.country = this.country;
        this.user.username = this.username;
        this.user.email = this.email;
        this.user.password = this.password;

        this.userService.insertUser(this.user).subscribe(() => {
            let snackBarRef = this.openSnackBar('Successfully registration!', 'OK', 5000);
            snackBarRef.afterDismissed().subscribe(() => {
                console.log('The snackbar was dismissed');
                this.router.navigate(['login']);
            });

        }, (error: HttpErrorResponse) => {
            if (error.status === 404 || error.status === 500) {
                this.openSnackBar('Username not available!', '', 5000)
            }
        })
    }

    openSnackBar(message: string, action: string, duration: number) {
        return this.snackBar.open(message, action, {duration: duration});
    }
}
