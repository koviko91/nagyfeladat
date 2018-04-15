import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { checkAndUpdateElementDynamic } from '@angular/core/src/view/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datas: any;

  constructor(public http: Http) {
    this.getAll();
  }

  getAll() {
    this.http.get('http://localhost:3000/user').subscribe(
      data => {
        console.log(data);
      });
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
