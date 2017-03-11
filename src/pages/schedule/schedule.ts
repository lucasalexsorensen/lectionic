import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LectioProvider } from '../../providers/lectio-provider';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
	dayName: any;
	schedule: Array<Object>;

  constructor(public navCtrl: NavController, public storage: Storage, public lp: LectioProvider) {
  	this.dayName = "0";

  	this.schedule = [];
  	this.storage.get('id_token').then((token) => {
  		this.storage.get('id_student').then((studentId) => {
  			this.lp.getSchedule(token, studentId, (schedule) => {
  				this.schedule = schedule.schedule;
  			});
  		});
  	});

  }

}
