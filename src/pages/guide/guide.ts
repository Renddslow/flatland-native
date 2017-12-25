import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ClassesDetailPage } from '../detailViews/classes/classes';

@Component({
  selector: 'page-home',
  templateUrl: 'guide.html'
})
export class GuidePage {
	guide = {};

  constructor(public viewCtrl: ViewController, public http: Http) {
		this.http.get('https://api.flatlandchurch.com/v2/guide?key=pk_e6afff4e5ad186e9ce389cc21c225')
			.subscribe(res => {
				this.guide = res.json();
			});
  }

	dismiss = function() {
		this.viewCtrl.dismiss();
	}

	getDetailView = () => ClassesDetailPage;

	openUrl = (url) => window.open(url, '_system');

}
