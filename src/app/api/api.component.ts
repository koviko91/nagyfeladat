import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.pug',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  log: any;
  logged: boolean = false;
  te: boolean: true;
  constructor() {
    if (localStorage.user) {
      this.log = JSON.parse(localStorage.user);
      this.logged = true;
      console.log(this.log);
    }
  }
  test() {
    this.te = !this.te;
  }
  ngOnInit() {
  }

}
