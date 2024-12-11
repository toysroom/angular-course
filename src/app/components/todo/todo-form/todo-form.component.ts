import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  @Output() add = new EventEmitter<any>();

  name: string = '';
  desc: string = '';

  addTodo() {
    console.log(this.name, this.desc);
    this.add.emit({ name: this.name, desc: this.desc });
  }
}
