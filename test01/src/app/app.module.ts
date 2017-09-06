import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleTwoColRow, SimpleTwoColLayout } from './simple-two-col-layout';


@NgModule({
  declarations: [
    AppComponent,
    SimpleTwoColRow,
    SimpleTwoColLayout
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
