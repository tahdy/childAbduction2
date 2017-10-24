import { Routes } from '@angular/router';

import { FoundComponent } from '../found/found.component';
import { FounddComponent } from '../foundd/foundd.component';
import { MissComponent } from '../miss/miss.component';
import { MissdComponent } from '../missd/missd.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AddfoundComponent } from '../addfound/addfound.component';
import { AddmissComponent } from '../addmiss/addmiss.component';
import { ContactusComponent } from '../contactus/contactus.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'found',     component: FoundComponent },
  { path: 'foundd/:id',     component: FounddComponent },
  { path: 'miss',     component: MissComponent },
  { path: 'missd/:id',     component: MissdComponent },
  { path: 'contactus',     component: ContactusComponent },
  { path: 'aboutus',     component: AboutComponent },
  { path: 'addf',     component: AddfoundComponent },
  { path: 'addm',     component: AddmissComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];