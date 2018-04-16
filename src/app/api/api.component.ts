import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  log: any;
  logged: boolean = false;
  constructor() {
    if (localStorage.user) {
      this.log = JSON.parse(localStorage.user);
      this.logged = true;
      console.log(this.log);
    }
  }

  ngOnInit() {
  }

}
