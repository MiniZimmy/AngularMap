import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionTitleModule } from './../../common';
import { MarkdownModule } from 'angular2-markdown';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    CommonModule,
    SectionTitleModule,
    MarkdownModule
  ],
  providers: []
})
export class HomeModule { }
