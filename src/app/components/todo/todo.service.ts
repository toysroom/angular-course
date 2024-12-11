import { Injectable } from "@angular/core";
import { Todo } from "../../models/Todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todos: Todo[] = [{
        id: 10,
        name: 'Fare la spesa',
        desc: 'bla bla bla',
        done: false,
    },{
        id: 12,
        name: 'Fare la spesa2',
        desc: 'bla bla bla',
        done: false,
    }, {
        id: 37,
        name: 'Fare la spesa 3',
        desc: 'bla bla bla',
        done: true,
    }];

    addTodo( { name, desc }: { name: string, desc: string }) {
        const newTodo = {
          id: 100,
          name,
          desc,
          done: false,
        }
    
        this.todos.push(newTodo);
      }
    
      delTodo(todo: Todo) {
        this.todos = this.todos.filter( t => t.id !== todo.id );
      }

    doneTodo(todo: Todo) {
        this.todos = this.todos.map( t => (t.id === todo.id) ? ({...t, done: !t.done }) : t);
    }
}