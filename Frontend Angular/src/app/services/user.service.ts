import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseURLUserProfile = 'http://localhost:8051/userProfile';
    baseURLUser = 'http://localhost:8051/user';

    constructor(private http: HttpClient) {
    }

    insertUser(user: User) {
        const url = this.baseURLUserProfile + "/insert";
        return this.http.post<string>(url, user);
    }

    loginUser(user: User): Observable<User> {
        const url = this.baseURLUser + "/login";
        return this.http.post<User>(url, user);
    }

    activateUser(user: User) {
        const url = this.baseURLUser + "/activateAccount";
        return this.http.put(url, user);
    }

    getUserProfile(userId: String): Observable<User> {
        const url = this.baseURLUserProfile + `/getUserProfileByIdUser/${userId}`;
        return this.http.get(url);
    }
}
