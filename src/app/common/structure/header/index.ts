import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";

/**
 * Header
 */
@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: []
})
export class Header {}
