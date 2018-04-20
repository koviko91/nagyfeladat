import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpreqService } from '../httpreq.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.pug',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  log: any;
  logged: boolean = false;
  pass1: string = "";
  pass2: string = "";
  helper: boolean = false;
  editUser: object = {
    name: "",
    email: "",
    pass: ""
  }
  constructor(public http: HttpreqService) {
    if (localStorage.user) {
      this.log = JSON.parse(localStorage.user);
      this.logged = true;
      console.log(this.log);
    }

  }
  ngOnInit() {
  }
  update() {
    if (this.pass1 == this.pass2) {
      this.editUser['pass'] = this.pass1 == "" ? this.log[0].pass : this.pass1;
      this.editUser['email'] = this.editUser['email'] == "" ? this.log[0].email : this.editUser['email'];
      this.editUser['name'] = this.editUser['name'] == "" ? this.log[0].name : this.editUser['name'];
      /* console.log(this.editUser, this.log[0]._id); */
      this.http.updateUser(this.log[0]._id, this.editUser);
      this.changeLocalStorage(this.editUser);
      document.querySelector(".alert-danger")["style"].display = "none";
    } else {
      document.querySelector(".alert-danger")["style"].display = "block";
    }

  }
  changeLocalStorage(edit) {
    edit._id = this.log[0]._id;
    localStorage.user = JSON.stringify([edit]);
    location.reload();
  }
  help() {
    this.helper = !this.helper;
  }
}
