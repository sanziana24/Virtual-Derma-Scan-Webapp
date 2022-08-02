import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-skin-disease-details',
    templateUrl: './skin-disease-details.component.html',
    styleUrls: ['./skin-disease-details.component.css']
})
export class SkinDiseaseDetailsComponent implements OnInit {

    SYMPTOMS_CONSTANT = "Symptoms";
    TREATMENT_CONSTANT = "Treatment";

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { diseaseName: string, diseaseImage: string, description?: string, symptoms: string[], treatments: string[]}) {
    }

    ngOnInit(): void {
    }

}
