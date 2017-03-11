import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
