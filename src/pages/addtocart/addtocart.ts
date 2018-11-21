import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the AddtocartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addtocart',
  templateUrl: 'addtocart.html',
})
export class AddtocartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public cart:QuotesService) {
  }
data:any;
  ionViewDidEnter() {
this.data=this.cart.addtocart;
console.log(this.data,"cart data");
  }
  deletefromcart(id){
this.cart.deletefromcart(id);
  }

}
