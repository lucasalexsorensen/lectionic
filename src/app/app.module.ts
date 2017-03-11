import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';

import { LectioProvider } from '../providers/lectio-provider';

import { Storage } from '@ionic/storage';
var storage = new Storage();

storage.set('id_token', '');
storage.set('id_studenet', '');

import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SchedulePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SchedulePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LectioProvider
  ]
})
export class AppModule {}
