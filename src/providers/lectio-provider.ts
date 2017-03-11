import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LectioProvider {

  constructor(public http: Http) {}

  authenticate(username, password, cb) {
  	var url = `http://localhost:3000/login?username=${username}&password=${password}`;
  	this.http.get(url)
  		.map(res => res.json())
  		.subscribe((data) => {
  			cb(data.token, data.studentId);
  		});
  }

  getSchedule(token, studentId, cb) {
  	var url = `http://localhost:3000/schedule?token=${token}&studentId=${studentId}`;
	this.http.get(url)
  		.map(res => res.json())
  		.subscribe((data) => {
  			cb(data);
  		});

  }

}
