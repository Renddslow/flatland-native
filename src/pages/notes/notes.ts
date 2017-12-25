import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NotePage } from '../note/note';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
	pushPage = NotePage;
	guide = {};
	notes = [];

  constructor(public viewCtrl: ViewController, public storage: Storage) {
		this.storage.get('notes').then(val => {
			const notesObj = JSON.parse(val);
			if (notesObj) {
				this.notes = Object.keys(notesObj).map(key => {
					return {
						note: notesObj[key],
						id: key,
						datetime: moment(parseInt(key, 10) * 1000).format('MMMM D, YYYY HH:mm:ss')
					}
				});
			}
		})
	}

}
