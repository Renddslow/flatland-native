import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { GuidePage } from '../guide/guide';
import { NotesEditorPage } from '../notesEditor/notesEditor';
import { ClassesDetailPage } from '../detailViews/classes/classes';
import { EventsDetailPage } from '../detailViews/events/events';
import { SermonPage } from '../sermon/sermon';
import { Http } from '@angular/http';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	feed = [];
	EventsDetailPage = 'hello'

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http, public loading: LoadingController) {
		const loader = this.createLoader();
		loader.present();
		this.http.get('https://api.flatlandchurch.com/v2/feed?key=pk_e6afff4e5ad186e9ce389cc21c225')
			.subscribe(res => {
				loader.dismiss();
				this.feed = res.json();
			});
	}

	presentWeeklyGuideModal = function() {
		let modal = this.modalCtrl.create(GuidePage);
		modal.present();
	}

	presentNotes = function() {
		let modal = this.modalCtrl.create(NotesEditorPage);
		modal.present();
	}

	createLoader = () => {
		return this.loading.create({
			content: 'Fetching latest announcements...'
		})
	}

	formatDate(epoch) {
		return moment.unix(parseInt(epoch)).format('MMMM D, YYYY');
	}

	getDetailView(type) {
		switch(type) {
			case 'class':
				return ClassesDetailPage;
			case 'event':
				return EventsDetailPage;
			case 'sermon':
				return SermonPage;
		}
	}

	refreshFeed = event => {
		this.http.get('https://api.flatlandchurch.com/v2/feed?key=pk_e6afff4e5ad186e9ce389cc21c225')
			.subscribe(res => {
				this.feed = res.json();
				event.complete();
			});
	}

}
