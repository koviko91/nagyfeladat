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
  user: object = {
    email: "",
    pass: "",
    name: ""
  }
  constructor(public http: HttpreqService) {
    if (localStorage.user) {
      this.log = JSON.parse(localStorage.user);
      this.logged = true;
    }
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
      if (this.log == []) {
        this.logged = false;
      }
    }, 500);
  }
  signOut() {
    this.logged = false;
    this.log = undefined;
    localStorage.removeItem("user");
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


  /* create() {
    this.http.post('http://localhost:3000/user/', this.adat).subscribe(
      data => {
        this.errorHandling(data);
      });
  }

  update() {
    this.http.put(`http://localhost:3000/user/${this.modal['id']}`, this.modal)
      .subscribe(data => {
        this.errorHandling(data);
      });
  }

  deleteRow(id) {
    this.http.delete(`http://localhost:3000/user/${id}`)
      .subscribe(data => {
        this.errorHandling(data);
      });
  }

  modalChange(id) {
    let choosen = this.datas.filter(item => item.id == id)[0];
    this.modal = Object.assign({}, choosen);
  } */
}


