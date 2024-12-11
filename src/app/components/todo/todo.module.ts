import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TodoComponent,
        TodoListComponent,
        TodoFormComponent,
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [ TodoComponent ]
})
export class TodoModule {

}