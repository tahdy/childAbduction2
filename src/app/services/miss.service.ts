import { Injectable } from '@angular/core';
import { Miss } from '../shared/miss';

import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class MissService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }


   getMisses(): Observable<Miss[]> {
    return this.restangular.all('misses').getList();
  }

  getMiss(id: number): Observable<Miss> {
    return  this.restangular.one('misses',id).get();
  }

  getFeaturedMiss(): Observable<Miss> {
    return this.restangular.all('misses').getList({featured: true})
      .map(misses => misses[0]);
  }

  getMissIds(): Observable<number[]> {
    return this.getMisses()
      .map(misses => { return misses.map(miss => miss.id) })
      .catch(error => { return error; } );
  }
}
