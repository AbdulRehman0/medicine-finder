import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { google } from '@google/maps';
declare var google : any;
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  start :any;
  end:any;
  lat:any ;
  long:any;
  currentlocation:any;
@ViewChild("map") mapElement;
map :any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public geolocation:Geolocation
    ) {
  }

  ionViewDidLoad() {
    this.initMap();
    this.geolocation.getCurrentPosition()
    .then(pos=>{
      this.lat=pos.coords.latitude;
      this.long=pos.coords.longitude;
      this.currentlocation=new google.maps.LatLng(this.lat,this.long);
      console.log('current postion',this.lat,this.long);
    }).catch(err=>{
      console.log(err);
    })
    console.log('ionViewDidLoad LocationPage');
  }
  calculateAndDisplayRoute() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: this.currentlocation
    });
    directionsDisplay.setMap(map);

     directionsService.route({
        origin: this.currentlocation,
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
// let marker :google.maps.Marker=new google.maps.Marker({
// }) 

}


}
