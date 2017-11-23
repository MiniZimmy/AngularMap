import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'angular2-markdown';
import { CodeTabComponent } from './codeTab.component';


@NgModule({
  declarations: [
    CodeTabComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [CodeTabComponent],
  providers: []
})
export class CodeTabModule { }
