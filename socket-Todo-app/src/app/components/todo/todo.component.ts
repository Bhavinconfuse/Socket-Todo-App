import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  socket;
  toDoList;

  constructor(private http: HttpClient) {

    this.socket =io();
   }

  ngOnInit() {
    this.getToDo();
    this.socket.on('newTaskAdded',() => {
      this.getToDo();
    });
  }
  addToDo(value) {
    // this.toDoList.push(value);
    this.http.post('/todo',{ description: value})
    .subscribe();
  }

  getToDo() {
    // this.toDoList.push(value);
    this.http.get('/todo')
    .subscribe((toDOs) => {
      this.toDoList = toDOs;
    });
  }
}
