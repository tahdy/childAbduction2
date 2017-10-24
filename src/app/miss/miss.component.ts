import { Component, OnInit, Inject } from '@angular/core';
import {Miss} from '../shared/miss';
import { MissService } from '../services/miss.service';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-miss',
    templateUrl: './miss.component.html',
    styleUrls: ['./miss.component.scss'],
    host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
     animations: [
    flyInOut(),expand()
     ]
})



export class MissComponent implements OnInit {
    misses : Miss[];
    errMess: string;


 constructor(private missService: MissService,
    @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {    this.missService.getMisses()
    .subscribe(misses => this.misses = misses,
      errmess => this.errMess = <any>errmess);}

}
