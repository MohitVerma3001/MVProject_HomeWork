import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgswitchComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
