import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoTabsPage } from './no-tabs';

@NgModule({
  declarations: [
    NoTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NoTabsPage),
  ],
})
export class NoTabsPageModule {}
