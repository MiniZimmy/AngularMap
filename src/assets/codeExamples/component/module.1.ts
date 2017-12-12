import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core'; //Import the exported AgmCoreModule in this file

import { Header } from './common';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING,
    Header,
    AgmCoreModule.forRoot({       //Import the AgmCoreModule in the AppModule
      apiKey: 'XxxxxxxXXX-123456'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
