import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'learn to code', false, new Date()),
    new Todo(2, 'like to cricket', false, new Date()),
    new Todo(2, 'learn to code', false, new Date()),
    new Todo(4, 'learn to play', false, new Date()),
    new Todo(5, 'learn to fun', false, new Date())
  ]
  // todos = [
  //   { id: 1, description: 'learn to code' },
  //   { id: 2, description: 'learn to dance' },
  //   { id: 3, description: 'learn to sing' },
  // ]


  constructor() { }

  ngOnInit() {
  }

}
