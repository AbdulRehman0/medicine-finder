import { Component, ViewChild } from '@angular/core';
import { google } from '@google/maps';
declare var google : any;
/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  start :any;
  end:any;
@ViewChild("map") mapElement;
map :any;

  constructor() {
   
  }
  ngOnInit(){
    this.initMap();
  }

     calculateAndDisplayRoute() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
      });
      directionsDisplay.setMap(map);

       directionsService.route({
          origin: this.start,
          destination: this.end,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  }
  initMap(){
let coords=new google.maps.LatLng(45,100);
let mapOptions : google.maps.MapOptions={
center:coords,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP 
}
this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions)
let marker :google.maps.Marker=new google.maps.Marker({
}) 

}
 

}
