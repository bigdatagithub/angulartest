import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent,MyTemplateComponent} from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,MyTemplateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}