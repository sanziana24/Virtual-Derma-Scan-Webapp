import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {UploadImageComponent} from './components/upload-image/upload-image.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ngfModule} from "angular-file";
import {MatIconModule} from "@angular/material/icon";
import {AngularSvgIconModule} from "angular-svg-icon";
import {NgxDropzoneModule} from 'ngx-dropzone';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {GetCheckedComponent} from './components/get-checked/get-checked.component';
import {SkinGuideComponent} from './components/skin-guide/skin-guide.component';
import {MatInputModule} from "@angular/material/input";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {SkinDiseaseDetailsComponent} from './components/skin-disease-details/skin-disease-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogSectionItemComponent} from './components/dialog-section-item/dialog-section-item.component';
import {TeamComponent} from './components/team/team.component';
import {RegisterUserComponent} from './components/register-user/register-user.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterDoctorComponent} from './components/register-doctor/register-doctor.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {EditDoctorComponent} from './components/edit-doctor/edit-doctor.component';
import {ViewCasesDoctorComponent} from './components/view-cases-doctor/view-cases-doctor.component';
import {ViewCasesAdminComponent} from './components/view-cases-admin/view-cases-admin.component';
import {ViewCaseComponent} from './components/view-case/view-case.component';
import {ActivateAccountComponent} from './components/activate-account/activate-account.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {CommonModule, DatePipe} from "@angular/common";
import {MatRippleModule} from "@angular/material/core";
import {FeedbackDialogComponent} from './components/feedback-dialog/feedback-dialog.component';
import {HomeAdminComponent} from './components/home-admin/home-admin.component';
import {DialogThanksFeedbackComponent} from './components/dialog-thanks-feedback/dialog-thanks-feedback.component';


@NgModule({
    declarations: [
        AppComponent,
        UploadImageComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        GetCheckedComponent,
        SkinGuideComponent,
        SkinDiseaseDetailsComponent,
        DialogSectionItemComponent,
        TeamComponent,
        RegisterUserComponent,
        LoginComponent,
        RegisterDoctorComponent,
        EditUserComponent,
        EditDoctorComponent,
        ViewCasesDoctorComponent,
        ViewCasesAdminComponent,
        ViewCaseComponent,
        ActivateAccountComponent,
        FeedbackDialogComponent,
        HomeAdminComponent,
        DialogThanksFeedbackComponent
    ],
    entryComponents: [
        SkinDiseaseDetailsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        AppRoutingModule,
        RouterModule,
        MatCardModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        ngfModule,
        AngularSvgIconModule,
        MatIconModule,
        NgxDropzoneModule,
        HttpClientModule,
        NgxPaginationModule,
        MatInputModule,
        Ng2SearchPipeModule,
        FormsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        CommonModule,
        MatRippleModule
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
