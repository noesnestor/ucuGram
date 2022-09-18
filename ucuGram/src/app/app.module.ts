import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarSupComponent } from './nav-bar-sup/nav-bar-sup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarSupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
