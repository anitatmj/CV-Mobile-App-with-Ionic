import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BioPage } from './bio';



@NgModule({
  declarations: [
    BioPage,
  ],
  imports: [
    IonicPageModule.forChild(BioPage),
  ],
  providers:[
  ],
})
export class BioPageModule {}
