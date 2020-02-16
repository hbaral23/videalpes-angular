import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService extends BaseService{

  constructor(http: HttpClient) {
    super('/api/qrcodes', http);
  }

  getByUuid(uuid): Observable<any> {
    let params = new HttpParams();
    params = params.set('uuid', uuid);

    return this.http.get(this.url + this.entityUrl, {params});
  }

  createByNumber(numbers): Observable<any>{
    let params = new HttpParams();
    params = params.set('number', numbers);

    return this.http.post(this.url+this.entityUrl+'/create_by_number',{d:1},{params:params});
  }

  deleteAll(): Observable<any>{
    let params = new HttpParams();

    return this.http.get(this.url + this.entityUrl + '/deleteAll',{});
  }
}
