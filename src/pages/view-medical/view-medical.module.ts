import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMedicalPage } from './view-medical';

@NgModule({
  declarations: [
    ViewMedicalPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMedicalPage),
  ],
})
export class ViewMedicalPageModule {}
