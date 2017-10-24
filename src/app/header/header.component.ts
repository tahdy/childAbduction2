import { Component, HostListener, ElementRef, OnInit } from '@angular/core';


import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { scrollAnimation } from '../animations/app.animation';
import { visibility } from '../animations/app.animation';
import { collapse } from '../animations/app.animation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ scrollAnimation(),visibility(),collapse()]
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public el: ElementRef) { }
    
state = 'hide'
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } if(scrollPosition == componentPosition) {
        this.state = 'hide'
      }


    }
    
    show:boolean = false;
  collapse:string = "closed";
toggleCollapse() {
// this.show = !this.show
  this.collapse = this.collapse == "open" ? 'closed' : 'open';
}



  ngOnInit() {
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width: '500px', height: '450px'});
  }
  


}