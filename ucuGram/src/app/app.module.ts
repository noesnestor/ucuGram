import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostContainerComponent } from './post-container/post-container.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavBarSupComponent } from './nav-bar-sup/nav-bar-sup.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PhotoGridComponent } from './search/photo-grid/photo-grid.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileInteractionComponent } from './profile-interaction/profile-interaction.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { SubirFotoComponent } from './subir-foto/subir-foto.component';
import { SubirFotoInteractionComponent } from './subir-foto-interaction/subir-foto-interaction.component';



@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    PostContainerComponent,
    CarouselComponent,
    MenubarComponent,
    NavBarSupComponent,
    HomeComponent,
    SearchComponent,
    PhotoGridComponent,
    ProfileComponent,
    ProfileUserComponent,
    ProfileInteractionComponent,
    ProfilePhotosComponent,
    SubirFotoComponent,
    SubirFotoInteractionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
