import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';

import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }
  
  submitFeedback(feedback: Feedback) {
     return this.restangular.all('feedback').post(feedback);
   }

}
