import { Component } from '@angular/core';
import { HttpreqService } from './httpreq.service';
import { StringTypeAnnotation } from 'babel-types';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalTitle: string = "Login"
  logreg: number = -1;
  log: any;
  logged: boolean = false;
  diff: number = 0;
  name: string = "";
  user: object = {
    email: "",
    pass: "",
    name: ""
  }
  constructor(public http: HttpreqService) {
    if (localStorage.user) {
      this.log = JSON.parse(localStorage.user);
      this.logged = true;
      this.http.getTodo(this.log[0]._id);
      setInterval(() => this.findUrgent(), 1000);

    }
  }
  findUrgent() {
    let x = this.http.todos;
    let min = new Date(2100000000000).getTime();
    for (let i in x) {
      if (new Date(x[i].deadline).getTime() < min) {
        min = new Date(x[i].deadline).getTime();
        this.name = x[i].name;
      }
    };
    this.diff = Math.floor((min - new Date().getTime()) / 1000 / 60 / 60);
  }
  switchRegLog() {
    this.modalTitle = this.modalTitle == "Register" ? "Login" : "Register";
    this.logreg = this.logreg * -1;
  }
  async signIn() {
    if (this.logreg == 1) {
      this.register();
    } else {
      this.login();
    }
    setTimeout(() => {
      this.log = JSON.parse(this.http.datas);
      console.log(this.log);
      localStorage.user = this.http.datas;
      this.logged = true;
      location.reload();
      if (this.log == []) {
        this.logged = false;
      }
    }, 500);
  }
  signOut() {
    this.logged = false;
    this.log = undefined;
    this.http.todos = [];
    localStorage.removeItem("user");
    location.reload();
  }
  register() {
    if (document.querySelector("#repass")['value'] == this.user['pass'] &&
      this.user['name'] != "" && this['email'] != "") {
      this.http.register(this.user);
    }
  }
  login(): any {
    this.http.login({ email: this.user['email'], pass: this.user['pass'] });
  }
}


