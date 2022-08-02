import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Feedback} from "../models/feedback";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    baseURLFeedback = 'http://localhost:8051/feedback';

    constructor(private http: HttpClient) {
    }

    insertFeedback(feedback: Feedback) {
        const url = this.baseURLFeedback + '/insert';
        return this.http.post<string>(url, feedback);
    }

    getFeedbacks(): Observable<Feedback[]> {
        const url = this.baseURLFeedback + '/getFeedbacks';
        return this.http.get<Feedback[]>(url);
    }
}
