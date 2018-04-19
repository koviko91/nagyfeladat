import { Component, OnInit } from '@angular/core';
import { HttpreqService } from '../httpreq.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.pug',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  user: any;
  logged: boolean = false;
  sure: number = 0;
  newTodo: any = {
    name: "",
    status: "",
    text: "",
  };
  createNew: boolean = false;
  constructor(public http: HttpreqService) {
    document.getElementById('map').style.display = 'none';
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      this.logged = true;
      this.getAll();
    }
  }
  ngOnInit() {
  }
  getAll() {
    this.checkLog();
    this.http.getTodo(this.user[0]._id);
  }
  create() {
    this.sure = 0;
    this.newTodo.userId = this.user[0]._id;
    this.newTodo.createdAt = new Date();
    this.newTodo.updatedAt = new Date();
    this.http.createTodo(this.newTodo);
  }
  newTo() {
    this.createNew = !this.createNew;
  }
  checkLog() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      this.logged = true;
    }
  }
  edit(type, id = 0) {
    this.sure = type;
    if (type == 2) {
      this.createNew = true;
      this.newTodo.name = this.http.todos.filter(item => item._id == id)[0].name;
      this.newTodo.text = this.http.todos.filter(item => item._id == id)[0].text;
      this.newTodo.status = this.http.todos.filter(item => item._id == id)[0].status;
    }
  }
  updateRow(userdata) {
    this.sure = 0;
    let editedUser = {
      name: this.newTodo.name,
      status: this.newTodo.status,
      text: this.newTodo.text,
      updatedAt: new Date()
    }
    this.http.updateTodo(userdata._id, editedUser);
    this.getAll();
  }
  deleteRow(id) {
    this.http.deleteTodo(id);
    this.sure = 0;
  }
}
