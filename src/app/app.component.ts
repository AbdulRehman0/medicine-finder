import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ContactUsPage}from '../pages/contact-us/contact-us'
import {AboutUsPage}from '../pages/about-us/about-us'
import {LoginPage} from '../pages/login/login'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'home', component: HomePage },
      // { title: 'List', component: ListPage },
      {title :'Contact' ,component:ContactUsPage,icon:'contact'},
      {title :'About',component:AboutUsPage,icon:'information-circle'},
      {title :'login',component:LoginPage,icon:'key'},
      // {title :'About US ',component:AboutUsPage,icon:'arrow-dropright'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  getColor(){
    console.log('color func');
    let color = '#ba1488';
    return color;
  }
}
