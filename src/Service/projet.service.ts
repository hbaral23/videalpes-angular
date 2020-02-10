import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService extends BaseService{

  constructor(http: HttpClient) {
    super('/api/projets', http);
  }

  getByType(typeId): Observable<any> {
    let params = new HttpParams();
    params = params.set('typeId', typeId);

    return this.http.get(this.url + this.entityUrl + '/get_by_type', {params});
  }
}
