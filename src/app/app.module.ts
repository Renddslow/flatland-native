import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { WatchPage } from '../pages/watch/watch';
import { EngagePage } from '../pages/engage/engage';
import { HomePage } from '../pages/home/home';
import { GivePage } from '../pages/give/give';
import { MePage } from '../pages/me/me';
import { GuidePage } from '../pages/guide/guide';
import { SermonPage } from '../pages/sermon/sermon';
import { TabsPage } from '../pages/tabs/tabs';
import { NotePage } from '../pages/note/note';
import { NotesPage } from '../pages/notes/notes';
import { NotesEditorPage } from '../pages/notesEditor/notesEditor';

import { ClassesDetailPage } from '../pages/detailViews/classes/classes';
import { EventsDetailPage } from '../pages/detailViews/events/events';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WatchPage,
    EngagePage,
    HomePage,
		GivePage,
		MePage,
		GuidePage,
		SermonPage,
    TabsPage,
		ClassesDetailPage,
		EventsDetailPage,
		NotesEditorPage,
		NotePage,
		NotesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(MyApp),
		HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WatchPage,
    EngagePage,
    HomePage,
		GivePage,
		MePage,
		GuidePage,
		SermonPage,
    TabsPage,
		ClassesDetailPage,
		EventsDetailPage,
		NotesEditorPage,
		NotePage,
		NotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
		HTTP,
		SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
