import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core'; //Import the exported AgmCoreModule in this file

import { Header } from './common';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { MapComponent } from './map.component'; //Import the new map component

@NgModule({
  declarations: [
    AppComponent,
    MapComponent //Declare the MapComponent so you can use it in this module
  ],
  imports: [
    BrowserModule,
    Header,
    AgmCoreModule.forRoot({
      apiKey: 'XxxxxxxXXX-123456'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
