import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactmePage } from './contactme';

@NgModule({
  declarations: [
     ContactmePage,
  ],
  imports: [
    IonicPageModule.forChild(ContactmePage),
  ],
})
export class  ContactmePageModule {}
