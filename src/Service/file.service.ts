import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService{

  constructor(http: HttpClient) {
    super('/api/uploadFile', http);
  }

  upload(fileUpload): Observable<any>{
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.set('file', fileUpload);

    headers = headers.append("Content-Type",'multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)"');

    return this.http.post( this.url + '/api/uploadFile',fileUpload);
  }
}
