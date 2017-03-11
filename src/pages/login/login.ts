import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

import { LectioProvider } from '../../providers/lectio-provider';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 
  animations: [
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),

    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),

    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ]),

    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})

export class LoginPage {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  username: any;
  password: any;
  fetching: any;
 
  constructor(public navCtrl: NavController, public storage: Storage, public lp: LectioProvider) {
    this.fetching = false;
    this.username = "";
    this.password = "";
  }

  clickLogin() {
    this.fetching = true;
  	this.lp.authenticate(this.username, this.password, (token, studentId) => {
      this.storage.set('id_token', token);
      this.storage.set('id_student', studentId);

      this.fetching = false;
      this.navCtrl.setRoot(HomePage);
    });
  }
 
}