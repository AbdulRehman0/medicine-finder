import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { isNull } from 'util';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  resposnseddata;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private signinservice:AuthServiceProvider
  
  ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(form){
    console.log('all form values',form.value);
    this.signinservice.Userlogin(form.value).subscribe(data=>{
      this.resposnseddata=data;
      console.log(this.resposnseddata,"data");
      if(this.resposnseddata!=isNull){
        // this.router.navigateByUrl('/panel');
        console.log('in if condition');
      }
    },err => this.logError(err)); 
  }



   //log error Function
   logError(err: any) {    
    console.log('user Name or password is incorrect');
}

}
