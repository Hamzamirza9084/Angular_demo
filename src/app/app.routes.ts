import { Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if';
import { NgForComponent } from './ng-for/ng-for';
import { NgSwitchComponent } from './ng-switch/ng-switch';
import { NgStyleComponent } from './ng-style/ng-style';

export const routes: Routes = [
  { path: '', redirectTo: 'ng-if', pathMatch: 'full' },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'ng-style', component: NgStyleComponent }
];
