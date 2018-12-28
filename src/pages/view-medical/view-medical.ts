import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LocationPage} from '..//location/location'
/**
 * Generated class for the ViewMedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-medical',
  templateUrl: 'view-medical.html',
})
export class ViewMedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMedicalPage');
  }
  location(){
    console.log('in location function');
    this.navCtrl.push(LocationPage);
  }

}
