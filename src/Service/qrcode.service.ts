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
}
