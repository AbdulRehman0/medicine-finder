import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ViewMedicalPage} from '../view-medical/view-medical'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];
  searching: any = false;
  medicalstores=[];


  constructor(public navCtrl: NavController) {
    this.initializeItems();
    
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
    this.medicalstores=[
      { id:1,name:'Alameen medical',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:2,name:'Junaid medica',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:3,name:'Time medicos',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:4,name:'Safdar Medical',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:5,name:'Safdar Medical',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:6,name:'Safdar Medical',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:7,name:'Safdar Medical',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:8,name:'Safdar Medical',image:'../../assets/imgs/pharmacy.png',address:'r-266 pak kausar Town khi'}
    ];  
    
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;


    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  openMedical(storeId){
    console.log('medical open',storeId);
    this.navCtrl.push(ViewMedicalPage)
  }

}


