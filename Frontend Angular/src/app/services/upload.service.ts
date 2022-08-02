import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  output: JSON;

  constructor(private http: HttpClient) {
  }

  searchForSkinDisease(picture: any) {
    const objPicture = JSON.stringify(picture);
    const url = `http://127.0.0.1:5000/disease`;
    return this.http.post(url, objPicture);
  }

}
