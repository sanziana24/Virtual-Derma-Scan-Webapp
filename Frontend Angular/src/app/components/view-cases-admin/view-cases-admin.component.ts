import {Component, OnInit, ViewChild} from '@angular/core';
import {Case} from "../../models/case";
import {MatTableDataSource} from "@angular/material/table";
import {CaseService} from "../../services/case.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DomSanitizer} from "@angular/platform-browser";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-view-cases-admin',
    templateUrl: './view-cases-admin.component.html',
    styleUrls: ['./view-cases-admin.component.css']
})
export class ViewCasesAdminComponent implements OnInit {

    cases: Case[] = [];
    dataSource: MatTableDataSource<Case>;
    displayedColumns = ['idCase', 'picture', 'description', 'dateSubmit', 'status', 'username'];
    currentDateTime: any;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(private caseService: CaseService,
                private _sanitizer: DomSanitizer,
                public datepipe: DatePipe) {
        this.currentDateTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    }

    ngOnInit(): void {
        console.log(this.currentDateTime);
        this.caseService.getAll().subscribe((cases) => {
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
}
