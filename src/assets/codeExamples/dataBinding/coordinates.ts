export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export class Coordinates implements ICoordinates {
  public latitude: number;
  public longitude: number;

  constructor(coordinates: ICoordinates) {
    this.latitude = coordinates.latitude;
    this.longitude = coordinates.longitude;
  }
}
