import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn Angular",
        isComplete: true,
        date: new Date()
      },
      {
        id: '112',
        title: "Learn Vue",
        isComplete: true,
        date: new Date()
      },
      {
        id: '113',
        title: "Learn React",
        isComplete: false,
        date: new Date()
      }
    ]
  }

  public getTodos() {
    return of(this.todos);
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    })
  } 

  public deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexofTodo, 1);
  }
}
