import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as moment from 'moment';

@Component({
  selector: 'page-detail-classes',
  templateUrl: 'classes.html'
})
export class ClassesDetailPage {
	details = {};
	now = moment().unix();

	constructor(public http: Http, public navParams: NavParams) {
		const permalink = navParams.get('permalink');
		this.http.get(`https://api.flatlandchurch.com/v2/classes/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe(res => {
				this.details = res.json();
				this.details['dates'] = Object.keys(this.details['dates'])
					.filter(key => {
						return moment().subtract(2, 'weeks').unix() < this.details['dates'][key]['start'];
					})
					.map(key => {
						const date = this.details['dates'][key];
						date['start'] = moment(date['start'] * 1000).format('MMM D, YYYY');
						if (date['end']) {
							date['end'] = moment(date['end'] * 1000).format('MMM D, YYYY');
						}
						return date;
					});
			});
	}

	openClassRegistration(url) {
		window.open(url, '_system');
	}
}
