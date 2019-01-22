
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, openTab? : any}>;
  pages2: Array<{title: string, component: any, openTab? : any}>;

  rootPage = 'DashboardTabsPage';
 
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Me', component: 'DashboardTabsPage' },
       
       { title: 'Contact Me', component: 'ContactmePage' },
       { title: 'Laporkan Masalah', component: 'NoTabsPage' },
      { title: 'Share', component: 'NoTabsPage' },
        { title: 'Rate Us', component: 'NoTabsPage' },
         { title: 'About', component: 'NoTabsPage' },
          { title: 'Exit', component: 'NoTabsPage' },
    ];


  }
 
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }

}
