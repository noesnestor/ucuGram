import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserInfoComponent} from './user-info/user-info.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'users/:userid', component: UserInfoComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
