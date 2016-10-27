import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { MockApiModule } from 'ng2-f-mock-api';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ItemModule } from './item';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    ItemModule,
    HttpModule,
    MockApiModule
  ],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
