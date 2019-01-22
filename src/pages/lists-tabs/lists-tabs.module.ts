import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsTabsPage } from './lists-tabs';

@NgModule({
  declarations: [
    ListsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsTabsPage),
  ],
})
export class ListsTabsPageModule {}
