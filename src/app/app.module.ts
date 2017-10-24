import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms'; 

import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';

import { Angular2TokenService } from 'angular2-token';


import { HttpModule } from '@angular/http'; 
import { RestangularModule, Restangular } from 'ngx-restangular';

import { RestangularConfigFactory } from './shared/restConfig';
import { baseURL } from './shared/baseurl';

import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { FeedbackService } from './services/feedback.service';
import { MissService } from './services/miss.service';
import { FoundService } from './services/found.service';
import { AddmissService } from './services/addmiss.service';
import { AddfoundService } from './services/addfound.service';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MissComponent } from './miss/miss.component';
import { MissdComponent } from './missd/missd.component';
import { FoundComponent } from './found/found.component';
import { FounddComponent } from './foundd/foundd.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HighlighDirective } from './directives/highligh.directive';
import { RegisterComponent } from './register/register.component';
import { AddmissComponent } from './addmiss/addmiss.component';
import { AddfoundComponent } from './addfound/addfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactusComponent,
    MissComponent,
    MissdComponent,
    FoundComponent,
    FounddComponent,
    LoginComponent,
    HomeComponent,
    HighlighDirective,
    RegisterComponent,
    AddmissComponent,
    AddfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MatGridListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    MatProgressSpinnerModule

  ],
  entryComponents: [
        LoginComponent,RegisterComponent,AddmissComponent,AddfoundComponent
  ],
  providers: [ProcessHTTPMsgService,FeedbackService,MissService,FoundService,AddmissService,AddfoundService,Angular2TokenService,
    {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
