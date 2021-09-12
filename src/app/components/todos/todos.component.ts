import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];
  public faTrashAlt = faTrashAlt;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  }

  public changeTodoStatus(todo: Todo) {
    this.todoService.changeStatus(todo);
  }

  public deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
