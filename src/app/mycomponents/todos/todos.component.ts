import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  localitem: any;
  todos: Todos[];
  

  constructor() {

    this.localitem = localStorage.getItem('Todos');
    if (this.localitem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localitem)
    }
  }
  ngOnInit(): void {
  }
  Deletetodo(todo: any) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('Todos', JSON.stringify(this.todos));

  }

  todoAdd(todo: Todos) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('Todos', JSON.stringify(this.todos));
  }

  ToggleTodo(todo: any) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('Todos', JSON.stringify(this.todos));
  }

}
