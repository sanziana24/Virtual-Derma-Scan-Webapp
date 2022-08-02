import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UploadService} from 'src/app/services/upload.service';


@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

    isFileUploaded: boolean;
    isFileOver: boolean;
    showSpinner: boolean;
    hoverText: string = '';

    noFileLabel = 'Upload image';
    resultLabel = '';
    url: string;

    constructor(private uploadService: UploadService) {
    }

    ngOnInit(): void {
        this.hoverText = "Drag your picture here or click to select a picture";
    }

    //new version
    files: File[] = [];
    file: File;

    selectedFile: Blob;
    base64: string;


    onSelect(event: any) {
        this.files.push(...event.addedFiles);
        if (this.files.length > 1) { // checking if files array has more than one content
            this.replaceFile(); // replace file
        }
        this.isFileUploaded = true;
    }

    //method for replacing file
    replaceFile() {
        this.files.splice(0, 1); // index =0 , remove_count = 1
        console.log(this.files.length);
        this.resultLabel = '';
    }

    onRemove(event: any) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
        this.isFileUploaded = false;
        this.resultLabel = '';
    }

    onRemoveDropzone() {
        this.files.splice(0, 1);
        this.isFileUploaded = false;
        this.resultLabel = '';
        console.log(this.files.length);
    }

    onSearch() {
        console.log(this.files[0]);
        this.uploadService.searchForSkinDisease('sent').subscribe((result) => {
            //rezultatul se primeste ca obiect JSON si trebuie convertit la string pentru a-l afisa in label pe ecran
            this.resultLabel = JSON.stringify(result);
        });
    }

    processPicture() {
        this.showSpinner = true;
        this.selectedFile = this.files[0];
        console.log(this.selectedFile);
        let reader = new FileReader();
        reader.readAsDataURL(this.selectedFile as Blob);
        reader.onloadend = () => {
            this.base64 = reader.result as string;
            console.log(this.base64);
            this.base64 = this.base64.replace('data:image/jpeg;base64,', '');
            console.log(this.base64);

            this.uploadService.searchForSkinDisease(this.base64).subscribe((result) => {
                //rezultatul se primeste ca obiect JSON si trebuie convertit la string pentru a-l afisa in label pe ecran
                this.showSpinner = false;
                this.resultLabel = "Predicted: " + JSON.stringify(result);
            });

        }


    }
}
