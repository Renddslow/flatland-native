import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as moment from 'moment';

@Component({
  selector: 'page-detail-events',
  templateUrl: 'events.html'
})
export class EventsDetailPage {
	details = {};

	constructor(public http: Http, public navParams: NavParams) {
		const permalink = navParams.get('permalink');
		this.http.get(`https://api.flatlandchurch.com/v2/events/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe(res => {
				this.details = res.json();
				this.details['startsAt'] = moment(this.details['startsAt'] * 1000).format('MMM D @ hh:mm a');
			});
	}

	openUrl = (url) => window.open(url, '_system');
}
