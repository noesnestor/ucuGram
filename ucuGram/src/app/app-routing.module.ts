import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component'

import {UserInfoComponent} from './user-info/user-info.component';

import {RouterModule, Routes} from '@angular/router';
import { PostContainerComponent } from './post-container/post-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/discover/1', pathMatch: 'full' },
  { path: ':userid', component: UserInfoComponent },
  { path: 'posts/:userid', component: PostContainerComponent},
  { path: 'discover/1', component: CarouselComponent}
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
