

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';

 
@IonicPage()
@Component({
  selector: 'page-dashboard-tabs',
  templateUrl: 'dashboard-tabs.html',
})
export class DashboardTabsPage {



  @ViewChild('myTabs') tabRef: Tabs;
 
  tab1 = 'BioPage';
  tab2 = 'EducationPage';
  tab3 = 'SkillPage';
  tab4 = 'OtherPage';

  constructor(public navCtrl: NavController,public navParams: NavParams) {
   
  }



  ionViewDidLoad() {
    let openTab = this.navParams.get('openTab');
    if (openTab) {
      this.tabRef.select(openTab);
    }
  }
 
}