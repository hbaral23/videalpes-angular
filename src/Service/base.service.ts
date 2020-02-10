import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected url = environment.url;
  protected entityUrl: string;
  protected http: HttpClient;

  constructor(entityUrl: string, http: HttpClient) {
    this.entityUrl = entityUrl;
    this.http = http;
  }

  get(): Observable<any> {
    return this.http.get(this.url + this.entityUrl);
  }

  getById(id): Observable<any> {
    let params = new HttpParams();
    params = params.set('id', id);

    return this.http.get(this.url + this.entityUrl + '/' + id);
  }

  create(entity): Observable<any> {
    return this.http.post(this.url + this.entityUrl, entity);
  }

  delete(id): Observable<any> {
    return this.http.delete(this.url + this.entityUrl + '/' + id);
  }

  edit(id, body): Observable<any> {
    return this.http.put(this.url + this.entityUrl + '/' + id, body);
  }
}
