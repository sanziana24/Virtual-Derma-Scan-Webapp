import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Feedback} from "../../models/feedback";
import {FeedbackService} from "../../services/feedback.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogThanksFeedbackComponent} from "../dialog-thanks-feedback/dialog-thanks-feedback.component";

@Component({
    selector: 'app-feedback-dialog',
    templateUrl: './feedback-dialog.component.html',
    styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

    ratingValue: number = 0;
    feedbackMessage: string = '';
    error: string = '';
    feedback: Feedback = {};

    constructor(private router: Router,
                private feedbackService: FeedbackService,
                private matDialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    onSubmitClick() {
        this.feedback.ratingValue = this.ratingValue;
        this.feedback.feedbackMessage = this.feedbackMessage;
        this.feedback.idUser = localStorage.getItem('userId');
        console.log(this.feedback);

        if (this.ratingValue === 0) {
            this.error = 'Select a rating value!';
        } else {
            this.feedbackService.insertFeedback(this.feedback).subscribe(() => {
                this.matDialog.closeAll();
                const dialogRef = this.matDialog.open(DialogThanksFeedbackComponent, {
                    width: '370px',
                    height: '260px'
                });
                this.router.events
                    .subscribe(() => {
                        dialogRef.close();
                    });
                localStorage.setItem('openFeedback', 'false');
                this.setFlags();
            })
        }
    }

    setFlags() {
        localStorage.setItem('logged', 'false');
        localStorage.setItem('role', 'null');
        localStorage.setItem('userId', 'null');
    }

    onSkipClick() {
        this.router.navigate(['/login']);
        this.setFlags();
    }
}
