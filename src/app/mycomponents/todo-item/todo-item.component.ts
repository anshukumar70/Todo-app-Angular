import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Todos } from 'src/app/todos';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todos!: Todos;
  @Input() i!: number;


  title!:string;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todos> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {  }
  onClick(todo:any){
    // console.log(this.todos.title,``,this.todos.desc);
    if(confirm("Do You Want to Delete This Todo") == true){

      this.todoDelete.emit(todo);
    }else{
      alert("You have cancel delete ToDo")
    }
  }

  onChekboxClick(todo:any){
    this.todoCheckbox.emit(todo);
  }
}

