import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

import * as uuid from 'uuid';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public todo: Todo;
  public todoTitle: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public addTodo() {
    const newTodo: Todo = {
      id: uuid.v4(),
      title: this.todoTitle,
      isComplete: false,
      date: new Date(),
    }
    this.todoService.addTodo(newTodo);
    this.todoTitle = "";
  }

}

