import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'ihm-map',
  templateUrl: './map.template.html',
  styleUrls: ['./map.style.scss']
})
export class MapComponent implements OnInit {

  public coordinates: {latitude: number, longitude: number};

  constructor () {}

  ngOnInit() {
    this.coordinates = {
      latitude: 43,
      longitude: 7
    };
  }

}
