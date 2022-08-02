import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../models/doctor";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    baseURLDoctorProfile = 'http://localhost:8051/doctorProfile';

    constructor(private http: HttpClient) {
    }

    insertDoctor(doctor: Doctor) {
        const url = this.baseURLDoctorProfile + "/insert";
        return this.http.post<string>(url, doctor);
    }

    getDoctors(): Observable<Doctor[]> {
        const url = this.baseURLDoctorProfile + "/getDoctors";
        return this.http.get<Doctor[]>(url);
    }

    getDoctorProfileByIdUser(userId: string): Observable<Doctor> {
        const url = this.baseURLDoctorProfile + `/getDoctorProfileByIdUser/${userId}`;
        return this.http.get(url);
    }

    getDoctorProfileByIdDoctorProfile(idDoctorProfile: string): Observable<Doctor>{
        const url = this.baseURLDoctorProfile + `/getDoctorProfileByIdDoctorProfile/${idDoctorProfile}`;
        return this.http.get(url);
    }
}
