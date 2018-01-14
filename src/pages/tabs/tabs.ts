import { Component } from '@angular/core';

import { WatchPage } from '../watch/watch';
import { EngagePage } from '../engage/engage';
import { HomePage } from '../home/home';
import { GivePage } from '../give/give';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  watch = WatchPage;
  engage = EngagePage;
	give = GivePage;
	me = MePage;

  constructor() {

  }
}
