import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
@Injectable()
export class HttpreqService {
  datas: any;
  todos: any;
  constructor(public http: Http) { }
  register(regData) {
    this.http.post('http://localhost:3000/user/create', regData).subscribe(
      async (data) => this.datas = await data['_body']);
  }
  login(userData) {
    this.http.post('http://localhost:3000/user/login', userData).subscribe(
      async (data) => this.datas = await data['_body']
    );
  }
  getTodo(userId) {
    this.http.post('http://localhost:3000/todo/get', { userId }).subscribe(
      async (data) => this.todos = await JSON.parse(data['_body']));
  }
  createTodo(newTodo) {
    this.http.post('http://localhost:3000/todo/create', newTodo).subscribe(
      async (data) => this.todos.push(await JSON.parse(data['_body'])));
  }
  deleteTodo(id) {
    this.http.delete(`http://localhost:3000/todo/${id}`).subscribe(
      async (data) => {
        let x = await JSON.parse(data['_body']);
        this.todos = this.todos.filter(item => item._id != x._id);
      });
  }
  updateTodo(id, todoData) {
    this.http.put(`http://localhost:3000/todo/${id}`, todoData).subscribe(
      async (data) => {
        /* console.log(data); */
      });
  }
  updateUser(id, userData) {
    this.http.put(`http://localhost:3000/user/login/${id}`, userData).subscribe(
      async (data) => {
        console.log(await data);
      });
  }
}
