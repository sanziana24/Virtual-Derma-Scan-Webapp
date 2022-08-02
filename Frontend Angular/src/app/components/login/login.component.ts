import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username?: string;
    password?: string;
    user: User = {};

    constructor(private userService: UserService,
                public snackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.user.username = this.username;
        this.user.password = this.password;

        this.userService.loginUser(this.user).subscribe((user) => {
            localStorage.setItem('role', <string>user.role);
            localStorage.setItem('logged', 'true');
            localStorage.setItem('userId', <string>user.idUser);
            localStorage.setItem('openFeedback', 'false');
            if (user.role === 'ADMIN') {
                this.router.navigate(['homeAdmin']);
            } else {
                this.router.navigate(['home']);
            }
        }, (error: HttpErrorResponse) => {
            if (error.status === 404 || error.status === 500) {
                this.openSnackBar('Invalid username or password! Try again!', '', 5000);
            }
        })
    }

    openSnackBar(message: string, action: string, duration: number) {
        return this.snackBar.open(message, action, {duration: duration});
    }
}
