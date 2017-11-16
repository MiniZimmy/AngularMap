import { Component } from "@angular/core";
/**
 * Header component
 */
@Component({
  selector: "ihm-header",
  styleUrls: ["./header.style.scss"],
  templateUrl: "./header.template.html"
})
export class HeaderComponent {

  public title: string = "IHM Course";

  constructor() {}

}
