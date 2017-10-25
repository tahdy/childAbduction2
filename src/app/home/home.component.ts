import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { MissService } from '../services/miss.service';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';
import {Miss} from '../shared/miss';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
     animations: [
    flyInOut(),expand()
     ]  
})
export class HomeComponent implements OnInit {
    misses : Miss[];
    errMess: string;

  constructor(public dialog: MatDialog,private missService: MissService,
    @Inject('BaseURL') private BaseURL) { }
  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width: '500px', height: '450px'});
  }
  ngOnInit() {this.missService.getMisses()
    .subscribe(misses => this.misses = misses,
      errmess => this.errMess = <any>errmess);
  }

}
