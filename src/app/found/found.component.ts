import { Component, OnInit, Inject } from '@angular/core';
import {Found} from '../shared/found';
import { FoundService } from '../services/found.service';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';
import 'zone.js/dist/zone';
import 'reflect-metadata';

@Component({
    selector: 'app-found',
    templateUrl: './found.component.html',
    styleUrls: ['./found.component.scss'],
    host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
     animations: [
    flyInOut(),expand()
     ]
})



export class FoundComponent implements OnInit {
    founds : Found[];
    errMess: string;


 constructor(private foundService: FoundService,
    @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {    this.foundService.getFounds()
    .subscribe(founds => this.founds = founds,
      errmess => this.errMess = <any>errmess);}


}
