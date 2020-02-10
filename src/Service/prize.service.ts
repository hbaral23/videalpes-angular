import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrizeService extends BaseService{

  constructor(http: HttpClient) {
    super('/api/prizes', http);
  }
}
