import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Input() label1 = '';
  @Output() action1 = new EventEmitter<Todo>();
  @Output() action2 = new EventEmitter<Todo>();

  onButton1(todo: Todo) {
    this.action1.emit(todo);
  }
}
