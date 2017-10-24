import { Injectable } from '@angular/core';
import { Found } from '../shared/found';

import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class FoundService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }


   getFounds(): Observable<Found[]> {
    return this.restangular.all('founds').getList();
  }

  getFound(id: number): Observable<Found> {
    return  this.restangular.one('founds',id).get();
  }

  getFeaturedFound(): Observable<Found> {
    return this.restangular.all('founds').getList({featured: true})
      .map(founds => founds[0]);
  }

  getFoundIds(): Observable<number[]> {
    return this.getFounds()
      .map(founds => { return founds.map(found => found.id) })
      .catch(error => { return error; } );
  }
}
