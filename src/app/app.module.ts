import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ContactUsPage}from '../pages/contact-us/contact-us'
import {AboutUsPage}from '../pages/about-us/about-us'
import {ViewMedicalPage} from '../pages/view-medical/view-medical'
import {LocationPage} from '../pages/location/location'
import {LoginPage} from '../pages/login/login'
import {RegisterPage}from '../pages/register/register'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMapComponent} from '../components/google-map/google-map'

// service
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,GoogleMapComponent, ListPage,
    ContactUsPage,
    AboutUsPage ,
    ViewMedicalPage ,
    LocationPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    AboutUsPage,
    ViewMedicalPage,
    LocationPage,
    LoginPage,RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
