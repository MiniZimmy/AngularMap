import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map', //Create the <app-map> tag
  templateUrl: './map.template.html',
  styleUrls: ['./map.style.scss']
})
export class MapComponent implements OnInit {

  public coordinates: {latitude: number, longitude: number};

  constructor () {}

  ngOnInit() {
    this.coordinates = {
      latitude: 43.604652, //TOLOSA
      longitude: 1.444209
    };
  }

}
