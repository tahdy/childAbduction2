import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width: '500px', height: '450px'});
  }
  ngOnInit() {
  }

}
