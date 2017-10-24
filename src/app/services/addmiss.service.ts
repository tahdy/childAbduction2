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
export class AddmissService {

  constructor(private restangular: Restangular) { }
    submitAddmiss(miss: Miss) {
     return this.restangular.all('misses').post(miss);
   }
}
