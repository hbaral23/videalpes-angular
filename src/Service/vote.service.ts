import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService extends BaseService{

  constructor(http: HttpClient) {
    super('/api/votes', http);
  }

  getByPrize(prizeId): Observable<any> {
    let params = new HttpParams();
    params = params.set('prizeId', prizeId);

    return this.http.get(this.url + this.entityUrl + '/get_vote_by_prize', {params});
  }

  deleteAll() {
    return this.http.get(this.url + this.entityUrl + '/deleteAll', {});
  }
}
