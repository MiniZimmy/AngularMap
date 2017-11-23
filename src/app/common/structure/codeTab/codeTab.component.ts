import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-tab',
  styleUrls: ['./codeTab.style.scss'],
  templateUrl: './codeTab.template.html'
})
export class CodeTabComponent {

  @Input() public fileName: string;
  @Input() public filePath: string;

  constructor() {}

}
