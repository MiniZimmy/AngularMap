import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; //Import the router module

import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXA5WeqPp88kMAVqOYpLt-c389PofZs8'
    }),
    RouterModule.forChild([
      {path: '', component: MapComponent} //MapComponent to be loaded when navigating to the map path
    ])
  ],
  exports: [MapComponent]
})
export class MapModule { }
