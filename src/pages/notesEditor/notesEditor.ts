import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'page-notesEditor',
  templateUrl: 'notesEditor.html'
})
export class NotesEditorPage {
	guide = {};
	notes = null;
	noteLabel = moment().unix();

  constructor(public viewCtrl: ViewController, public http: Http, public storage: Storage) {}

	dismiss = function() {
		this.viewCtrl.dismiss();
	}

	saveNotes = () => {
		this.storage.get('notes').then(val => {
			const notes = JSON.parse(val) || {};
			notes[this.noteLabel] = this.notes;
			this.storage.set('notes', JSON.stringify(notes));
		});
	}

}
