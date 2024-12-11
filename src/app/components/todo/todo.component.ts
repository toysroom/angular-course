import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  
  constructor(public todoService: TodoService) {}

}
