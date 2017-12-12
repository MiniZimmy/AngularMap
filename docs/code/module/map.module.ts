import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    MapComponent // Declare map component
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'XxxxxxxXXX-123456'
    })
  ],
  // Export the component(s) to be used within the template of any component
  // that is part of an Angular module that imports this Angular module
  exports: [MapComponent],
  providers: []
})
export class MapModule { }
