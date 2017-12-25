import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as md from 'markdown-string';

@Component({
  selector: 'page-notes',
  templateUrl: 'note.html'
})
export class NotePage {
	guide = {};
	note = null;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public storage: Storage) {
		this.storage.get('notes').then(val => {
			this.note = md`${JSON.parse(val)[navParams.get('id')]}`;
		});
	}

}
