import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
@Injectable()
export class HttpreqService {
  datas: any = {};
  constructor(public http: Http) { }
  register(regData) {
    this.http.post('http://localhost:3000/user/create', regData).subscribe(
      async (data) => this.datas = await data['_body']);
  }
  async login(userData) {
    this.http.post('http://localhost:3000/user/login', userData).subscribe(
      async (data) => this.datas = await data['_body']
    );
  }
}
