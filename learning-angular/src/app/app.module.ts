import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
