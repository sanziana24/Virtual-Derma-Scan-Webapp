import {Component, OnInit} from '@angular/core';
import {Case} from "../../models/case";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {CaseService} from "../../services/case.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-get-checked',
    templateUrl: './get-checked.component.html',
    styleUrls: ['./get-checked.component.css']
})
export class GetCheckedComponent implements OnInit {

    constructor(private userService: UserService,
                private caseService: CaseService,
                private snackBar: MatSnackBar) {
    }

    description: string;
    duration: string;
    idUser?: any;
    gendre: string | undefined;
    age: number | undefined;
    country: string | undefined;
    email: string | undefined;
    case: Case = {};
    user: User = {};

    files: File[] = [];
    selectedFile: Blob;
    base64: string;

    ngOnInit(): void {
        this.idUser = localStorage.getItem('userId');
        this.userService.getUserProfile(this.idUser).subscribe((user) => {
            console.log(user);
            this.gendre = user.gendre;
            this.age = user.age;
            this.country = user.country;
            this.email = user.email;
        })

    }

    onSelect(event: any) {
        this.files.push(...event.addedFiles);
        if (this.files.length > 1) { // checking if files array has more than one content
            this.replaceFile(); // replace file
        }
        //   this.isFileUploaded = true;
    }

    //method for replacing file

    replaceFile() {
        this.files.splice(0, 1); // index =0 , remove_count = 1
        console.log(this.files.length);
    }

    onRemove(event: any) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
        //   this.isFileUploaded = false;
    }


    onSubmit() {
        let base64: string = '';
        let reader = new FileReader();
        reader.readAsDataURL(this.files[0] as Blob);
        reader.onloadend = () => {
            base64 = reader.result as string;
            base64 = base64.replace('data:image/jpeg;base64,', '');
            base64 = base64.replace('data:image/png;base64,', '');
            base64 = base64.replace('data:image/jpg;base64,', '');
            this.case.description = this.description;
            this.case.conditionTime = this.duration;
            this.case.stringCasePicture = base64;

            this.userService.getUserProfile(this.idUser).subscribe((user) => {
                this.case.idUserProfile = user.idUserProfile;
                console.log(this.case);
                this.caseService.insertCase(this.case).subscribe(() => {
                    this.openSnackBar('Case successully registered!', 'OK', 4000);
                })
            })
        }
    }

    openSnackBar(message: string, action: string, duration: number) {
        return this.snackBar.open(message, action, {duration: duration});
    }
}
