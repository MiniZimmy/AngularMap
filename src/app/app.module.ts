import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Header } from './common';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING,
    Header
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
