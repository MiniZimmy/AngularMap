import { AgmCoreModule } from "@agm/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeModule } from './components';
import { Header } from "./common";
import { AppComponent } from './app.component';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    AppComponent, MapComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    Header,
    AgmCoreModule.forRoot({
      apiKey: 'XxxxxxxXXX-123456'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
