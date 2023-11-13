import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todos } from 'src/app/todos';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  title!: string;
  desc!: string;
  sno: number = 0;
  active!: boolean;
  todos!: Todos;

  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();

  constructor(private router:Router ) { }

  ngOnInit() { }
  
  onSubmit() {
  
    const todos = {
      sno: this.sno++,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todos);
    alert("Successfully Added Todos");
  } 
}
