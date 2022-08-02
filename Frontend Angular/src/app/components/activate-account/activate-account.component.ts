import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
  username?: string;
  password?: string;
  confirmPassword?: string;
  user: User = {};

  constructor(private userService: UserService,
              public snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

    this.user.username = this.username;
    this.user.password = this.password;

    this.userService.activateUser(this.user).subscribe(() => {
      let snackBarRef = this.openSnackBar('Account was successfully activated!', 'OK', 5000);
      snackBarRef.afterDismissed().subscribe(() => {
        console.log('The snackbar was dismissed');
        this.router.navigate(['login']);
      });

    })
  }

  openSnackBar(message: string, action: string, duration: number) {
    return this.snackBar.open(message, action, {duration: duration});
  }
}
