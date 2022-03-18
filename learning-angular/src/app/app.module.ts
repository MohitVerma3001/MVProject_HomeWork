import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { TopnavComponent } from './topnav/topnav.component';
import { DatabindComponent } from './databind/databind.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    DatabindComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
