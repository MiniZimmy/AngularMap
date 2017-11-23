import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeTabModule, SectionTitleModule } from './../../common';
// tslint:disable-next-line:max-line-length
import { ComponentSectionComponent, DataBindingSectionComponent,
        MarkersSectionComponent, ModuleSectionComponent,
        RoutingSectionComponent, PlacesSectionComponent } from './sections';
import { MarkdownModule } from 'angular2-markdown';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ComponentSectionComponent, MarkersSectionComponent,
    ModuleSectionComponent, RoutingSectionComponent,
    DataBindingSectionComponent, PlacesSectionComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    CommonModule,
    SectionTitleModule,
    MarkdownModule,
    CodeTabModule
  ],
  providers: []
})
export class HomeModule { }
