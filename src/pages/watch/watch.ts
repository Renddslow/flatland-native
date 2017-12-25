import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SermonPage } from '../sermon/sermon';
import { Http } from '@angular/http';

@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html'
})
export class WatchPage {
	sermons = [];
	featuredSermon = {};
	pushPage: any;
	currentPage = 1;

  constructor(public navCtrl: NavController, public http: Http) {
		this.pushPage = SermonPage;
		this.http.get('https://api.flatlandchurch.com/v2/sermons?key=pk_e6afff4e5ad186e9ce389cc21c225')
			.subscribe(res => {
				const data = res.json();
				this.featuredSermon = data[0];
				this.sermons = this.sermons.concat(data.slice(1, -1));
			});
	}

	openVideo = function(permalink: string) {
		const sermonPage = SermonPage;
		this.navCtrl.push(sermonPage);
	}

	loadMore = () => {
		const url = `https://api.flatlandchurch.com/v2/sermons?key=pk_e6afff4e5ad186e9ce389cc21c225&${this.currentPage + 1}`;
		this.http.get(url)
			.subscribe(res => {
				const data = res.json();
				this.sermons = this.sermons.concat(data);
			})
	}

}
