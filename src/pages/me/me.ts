import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
	pushPage = NotesPage;
	notes = [];

  constructor(public navCtrl: NavController) {}

	openNotes = function() {
		let modal = this.navCtrl.create(NotesPage);
		modal.present();
	}

}
