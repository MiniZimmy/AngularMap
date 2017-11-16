import { Component, Input } from '@angular/core';

@Component({
  selector: "ihm-section-title",
  templateUrl: './sectionTitle.template.html',
  styleUrls: ['./sectionTitle.style.scss']
})
export class SectionTitleComponent {
  @Input()
  title: string;

  @Input()
  url: string;
}
