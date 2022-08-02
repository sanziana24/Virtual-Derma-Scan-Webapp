import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Case} from "../models/case";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CaseService {

    baseURLCase = 'http://localhost:8051/case';

    constructor(private http: HttpClient) {
    }

    insertCase(caseSubmited: Case) {
        const url = this.baseURLCase + "/insert";
        return this.http.post<string>(url, caseSubmited);
    }

    getAll(): Observable<Case[]> {
        const url = this.baseURLCase + '/getCases';
        return this.http.get<Case[]>(url);
    }

    getAllByDoctor(doctorProfileId: String): Observable<Case[]> {
        const url = this.baseURLCase + `/getAllByDoctor/${doctorProfileId}`;
        return this.http.get<Case[]>(url);
    }

    getAllByUser(userProfileId: String): Observable<Case[]> {
        const url = this.baseURLCase + `/getAllByUser/${userProfileId}`;
        return this.http.get<Case[]>(url);
    }

    updateCase(caseUpdated: Case) {
        const url = this.baseURLCase + `/update`;
        return this.http.post(url, caseUpdated);
    }

}
