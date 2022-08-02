import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Case} from "../../models/case";
import {CaseService} from "../../services/case.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DomSanitizer} from "@angular/platform-browser";
import {CaseAnswer} from "../../models/case-answer";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-view-cases-doctor',
    templateUrl: './view-cases-doctor.component.html',
    styleUrls: ['./view-cases-doctor.component.css']
})
export class ViewCasesDoctorComponent implements OnInit {

    constructor(private doctorService: DoctorService,
                private caseService: CaseService,
                private _sanitizer: DomSanitizer,
                public datepipe: DatePipe) {
        this.currentDateTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;

    idUser?: any;
    idDoctorProfile?: any;
    cases: Case[] = [];
    answear?: string;
    caseAnswer: CaseAnswer = {};
    caseUpdated: Case = {};
    currentDateTime: any;
    dataSource: MatTableDataSource<Case>;
    displayedColumns = ['Picture', 'description', 'conditionTime', 'age', 'gendre', 'country', 'dateSubmit', 'status', 'answear', 'Action'];

    ngOnInit(): void {
        this.idUser = localStorage.getItem('userId');
        this.doctorService.getDoctorProfileByIdUser(this.idUser).subscribe((doctor) => {
            console.log(doctor);
            this.idDoctorProfile = doctor.idDoctorProfile;
            this.initializeData()
        })
    }

    initializeData(): void {
        this.caseService.getAllByDoctor(this.idDoctorProfile).subscribe((cases) => {
            this.cases = cases;
            for (let i = 0; i < cases.length; i++) {
                this.cases[i].stringCasePicture = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'
                    + this.cases[i].stringCasePicture);
                const dateTime = this.cases[i].dateSubmit;
                const diffInMs = Date.parse(this.currentDateTime) - Date.parse(dateTime);
                const timeElapsed = diffInMs / 1000 / 60 / 60;
                this.cases[i].timeElapsed = timeElapsed;
                console.log(timeElapsed);
            }
            this.dataSource = new MatTableDataSource(cases);

            console.log(this.cases);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    evaluateCase(selectedCase: Case) {
        this.caseUpdated.idCase = selectedCase.idCase;
        this.caseUpdated.answear = this.answear;
        if (this.caseUpdated.answear != null) {
            this.caseService.updateCase(this.caseUpdated).subscribe(() => {
                this.initializeData();
            });
        }
    }
}
