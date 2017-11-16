import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { SectionTitleComponent } from './sectionTitle.component';

@NgModule({
  declarations: [
    SectionTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SectionTitleComponent],
  providers: []
})
export class SectionTitleModule { }
