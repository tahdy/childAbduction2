import { Injectable } from '@angular/core';
import { Found } from '../shared/found';

import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class AddfoundService {

  constructor(private restangular: Restangular) { }
  
    submitAddfound(found: Found) {
     return this.restangular.all('founds').post(found);
   }


}
