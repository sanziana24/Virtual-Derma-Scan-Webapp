import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../models/doctor";
import {DoctorService} from "../../services/doctor.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-register-doctor',
    templateUrl: './register-doctor.component.html',
    styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {
    firstName: string;
    lastName: string;
    age: number;
    activityTime: number;
    username: string;
    email: string;
    aboutDoctor: string;
    file?: File; //variable to store file
    doctor: Doctor = {};


    constructor(private doctorService: DoctorService,
                public snackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    // On file Select
    onChange(event: any) {
        this.file = event.target.files[0];
    }

    onSubmit(): void {
        let base64: string = '';
        let reader = new FileReader();
        reader.readAsDataURL(this.file as Blob);
        reader.onloadend = () => {
            base64 = reader.result as string;
            base64 = base64.replace('data:image/jpeg;base64,', '');
            base64 = base64.replace('data:image/png;base64,', '');
            base64 = base64.replace('data:image/jpg;base64,', '');

            this.doctor.firstName = this.firstName;
            this.doctor.lastName = this.lastName;
            this.doctor.age = this.age;
            this.doctor.activityTime = this.activityTime;
            this.doctor.aboutDoctor = this.aboutDoctor;
            this.doctor.stringPicture = base64;
            this.doctor.username = this.username;
            this.doctor.email = this.email;
            console.log(this.doctor);

            this.doctorService.insertDoctor(this.doctor).subscribe(() => {
                let snackBarRef = this.openSnackBar('Successfully registration!', 'OK', 5000);
                snackBarRef.afterDismissed().subscribe(() => {
                    console.log('The snackbar was dismissed');
                    this.router.navigate(['home']);
                });
            }, (error: HttpErrorResponse) => {
                if (error.status === 404 || error.status === 500) {
                    this.openSnackBar('Username not available!', '', 5000)
                }
            })

        }

    }

    openSnackBar(message: string, action: string, duration: number) {
        return this.snackBar.open(message, action, {duration: duration});
    }

}
