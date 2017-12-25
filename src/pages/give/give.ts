import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-give',
  templateUrl: 'give.html'
})
export class GivePage {

  constructor(public navCtrl: NavController) {

  }

	openGiving() {
		window.open('https://flatlandchurch.com/give', '_system')
	}

}
