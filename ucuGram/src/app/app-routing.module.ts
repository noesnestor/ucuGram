import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserInfoComponent} from './user-info/user-info.component';

import {RouterModule, Routes} from '@angular/router';
import { PostContainerComponent } from './post-container/post-container.component';

const routes: Routes = [
  { path: ':userid', component: UserInfoComponent },
  { path: 'posts/:userid', component: PostContainerComponent}
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
