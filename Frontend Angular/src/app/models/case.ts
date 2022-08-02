import {CaseStatus} from "../enums/caseStatus";

export interface Case {
    idCase?: string;
    dateSubmit?: any;
    stringCasePicture?: any;
    description?: string;
    conditionTime?: string;
    status?: CaseStatus;
    answear?: string;
    idDoctorProfile?: any;
    idUserProfile?: string;
    gendre?: string;
    country?: string;
    timeElapsed?: number;
}
