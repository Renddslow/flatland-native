import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-sermon',
  templateUrl: 'sermon.html'
})
export class SermonPage {
	pushPage = SermonPage;
	sermon = {};
	videos = [];
	relatedSermons = [];
	options = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public social: SocialSharing) {
		const permalink = navParams.get('permalink');
		this.http.get(`https://api.flatlandchurch.com/v2/sermons/${permalink}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
			.subscribe(res => {
				this.sermon = res.json();
				this.http.get(`https://api.flatlandchurch.com/v2/videos/${this.sermon['vimeoId']}?key=pk_e6afff4e5ad186e9ce389cc21c225`)
					.subscribe(res => {
						this.videos = this.videos.concat(res.json());
					});
				this.options = {
					message: `I just watched ${this.sermon['title']} from Flatland Church.`,
					subject: 'Check out this sermon from Flatland Church',
					url: `https://flatlandchurch.com/sermons/${permalink}`
				}
			});
			this.http.get(`https://api.flatlandchurch.com/v2/sermons/${permalink}/series?key=pk_e6afff4e5ad186e9ce389cc21c225`)
				.subscribe(res => {
					this.relatedSermons = this.relatedSermons.concat(res.json());
				});
  }

	shareSermon() {
		return this.social.share(this.options['message'], this.options['subject'], null, this.options['url'])
	}

}
