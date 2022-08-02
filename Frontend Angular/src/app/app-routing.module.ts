import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UploadImageComponent} from "./components/upload-image/upload-image.component";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {GetCheckedComponent} from "./components/get-checked/get-checked.component";
import {SkinGuideComponent} from "./components/skin-guide/skin-guide.component";
import {TeamComponent} from "./components/team/team.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterUserComponent} from "./components/register-user/register-user.component";
import {RegisterDoctorComponent} from "./components/register-doctor/register-doctor.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {EditDoctorComponent} from "./components/edit-doctor/edit-doctor.component";
import {ViewCasesDoctorComponent} from "./components/view-cases-doctor/view-cases-doctor.component";
import {ViewCasesAdminComponent} from "./components/view-cases-admin/view-cases-admin.component";
import {RoleGuardService} from "./services/role-guard.service";
import {ViewCaseComponent} from "./components/view-case/view-case.component";
import {ActivateAccountComponent} from "./components/activate-account/activate-account.component";
import {FeedbackDialogComponent} from "./components/feedback-dialog/feedback-dialog.component";
import {HomeAdminComponent} from "./components/home-admin/home-admin.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'upload', component: UploadImageComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'getChecked', component: GetCheckedComponent, canActivate: [RoleGuardService], data: {expectedRole: 'USER'}},
    {path: 'skinGuide', component: SkinGuideComponent},
    {path: 'team', component: TeamComponent},
    {path: 'login', component: LoginComponent},
    {path: 'activateAccount', component: ActivateAccountComponent},
    {path: 'registerUser', component: RegisterUserComponent},
    {
        path: 'registerDoctor',
        component: RegisterDoctorComponent,
        canActivate: [RoleGuardService],
        data: {expectedRole: 'ADMIN'}
    },
    {
        path: 'editUserProfile',
        component: EditUserComponent,
        canActivate: [RoleGuardService],
        data: {expectedRole: 'USER'}
    },
    {
        path: 'editDoctorProfile',
        component: EditDoctorComponent,
        canActivate: [RoleGuardService],
        data: {expectedRole: 'DOCTOR'}
    },
    {path: 'viewCase', component: ViewCaseComponent, canActivate: [RoleGuardService], data: {expectedRole: 'USER'}},
    {
        path: 'viewCasesDoctor',
        component: ViewCasesDoctorComponent,
        canActivate: [RoleGuardService],
        data: {expectedRole: 'DOCTOR'}
    },
    {
        path: 'viewCasesAdmin',
        component: ViewCasesAdminComponent,
        canActivate: [RoleGuardService],
        data: {expectedRole: 'ADMIN'}
    },
    {path: 'feedbackDialog', component: FeedbackDialogComponent}, //add guard!!,
    {path: 'homeAdmin', component: HomeAdminComponent, canActivate: [RoleGuardService], data: {expectedRole: 'ADMIN'}}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        [RouterModule.forRoot(routes)]
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
