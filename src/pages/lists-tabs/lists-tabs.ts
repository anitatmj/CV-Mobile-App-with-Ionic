
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-lists-tabs',
  templateUrl: 'lists-tabs.html',
})
export class ListsTabsPage {
 
  tab1 = 'TodoListPage';
  tab2 = 'GroceryListPage';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
 
}