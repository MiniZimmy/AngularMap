private getGeolocation (): void {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    }, () => console.log('Could not compute current position'));
  } else {
    console.log('Your browser does not support geolocation');
  }
}