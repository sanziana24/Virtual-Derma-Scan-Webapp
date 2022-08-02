import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../models/doctor";
import {DoctorService} from "../../services/doctor.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    doctors: Doctor[] = [];
    img: any;

    constructor(private doctorService: DoctorService,
                private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.doctorService.getDoctors().subscribe((doc) => {
            this.doctors = doc;
            for (let i = 0; i < doc.length; i++) {
                this.doctors[i].stringPicture = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'
                    + doc[i].stringPicture);
            }
            console.log(this.doctors);
        })
    }
}
