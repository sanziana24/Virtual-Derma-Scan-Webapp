import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackDialogComponent} from "../feedback-dialog/feedback-dialog.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    userRole: any;
    userLogged: any;
    showLogoutButton: boolean = false;
    regularUserLogged: boolean = false;
    adminLogged: boolean = false;
    isUserLogged: boolean = false;
    doctorLogged: boolean = false;

    constructor(private matDialog: MatDialog, private router: Router) {
    }

    ngOnInit(): void {
        this.userRole = localStorage.getItem('role');
        if (this.userRole === "USER") {
            this.regularUserLogged = true;
        }

        if (this.userRole === "DOCTOR") {
            this.doctorLogged = true;
        }

        if (this.userRole === "ADMIN") {
            this.adminLogged = true;
        }

        this.userLogged = localStorage.getItem('logged');
        if (this.userLogged === 'true') {
            this.showLogoutButton = true;
            this.isUserLogged = true;
        }
    }

    logoutButtonOnClick(): void {
        const openFeedback = localStorage.getItem('openFeedback');
        if (openFeedback === 'true') {
            const dialogRef = this.matDialog.open(FeedbackDialogComponent, {
                width: '550px',
                height: '500px'
            });
            this.router.events
                .subscribe(() => {
                    dialogRef.close();
                });
            dialogRef.afterClosed().subscribe(() => { //cand se inchide de la X
                localStorage.setItem('openFeedback', 'false');
            });
        } else {
            this.router.navigate(['/login']);
            localStorage.setItem('logged', 'false');
            localStorage.setItem('role', 'null');
            localStorage.setItem('userId', 'null');
            this.isUserLogged = false;
        }


    }
}
